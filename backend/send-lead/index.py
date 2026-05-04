import json
import os
import smtplib
import urllib.request
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime

SMTP_USER = "neuroflow9@gmail.com"
SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587
TO_EMAIL = "neuroflow9@gmail.com"


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта NEUROFLOW, отправляет email и Telegram-уведомление."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError:
        return {"statusCode": 400, "headers": cors_headers, "body": json.dumps({"error": "Invalid JSON"})}

    name = body.get("name", "").strip()
    contact = body.get("contact", "").strip()
    service = body.get("service", "").strip()
    comment = body.get("comment", "").strip()

    if not name or not contact:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Имя и контакт обязательны"}),
        }

    now = datetime.now().strftime("%d.%m.%Y %H:%M")

    email_html = f"""
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {{ font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }}
    .card {{ background: #ffffff; border-radius: 12px; padding: 32px; max-width: 560px; margin: 0 auto; }}
    .header {{ background: linear-gradient(135deg, #6366F1, #06B6D4); border-radius: 8px; padding: 20px; margin-bottom: 24px; }}
    .header h1 {{ color: white; margin: 0; font-size: 20px; }}
    .row {{ margin-bottom: 16px; }}
    .label {{ color: #64748B; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }}
    .value {{ color: #0F172A; font-size: 15px; font-weight: 500; }}
    .comment {{ background: #F8FAFC; border-left: 3px solid #6366F1; padding: 12px 16px; border-radius: 0 8px 8px 0; }}
    .footer {{ margin-top: 24px; color: #94A3B8; font-size: 12px; }}
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🚀 Новая заявка NEUROFLOW</h1>
    </div>
    <div class="row">
      <div class="label">Имя клиента</div>
      <div class="value">{name}</div>
    </div>
    <div class="row">
      <div class="label">Контакт (Telegram / телефон)</div>
      <div class="value">{contact}</div>
    </div>
    <div class="row">
      <div class="label">Интересующая услуга</div>
      <div class="value">{service if service else "Не указано"}</div>
    </div>
    {"<div class='row'><div class='label'>Комментарий</div><div class='comment'>" + comment + "</div></div>" if comment else ""}
    <div class="footer">Заявка получена: {now}</div>
  </div>
</body>
</html>
"""

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    email_sent = False
    email_error = ""

    if smtp_password:
        try:
            msg = MIMEMultipart("alternative")
            msg["Subject"] = "Новая заявка NEUROFLOW"
            msg["From"] = SMTP_USER
            msg["To"] = TO_EMAIL
            msg.attach(MIMEText(email_html, "html", "utf-8"))

            with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
                server.ehlo()
                server.starttls()
                server.login(SMTP_USER, smtp_password)
                server.sendmail(SMTP_USER, TO_EMAIL, msg.as_string())
            email_sent = True
        except Exception as ex:
            email_error = str(ex)

    tg_token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    tg_chat_id = os.environ.get("TELEGRAM_CHAT_ID", "")
    tg_sent = False
    tg_error = ""

    if tg_token and tg_chat_id:
        try:
            tg_text = (
                f"🚀 *Новая заявка NEUROFLOW*\n\n"
                f"👤 *Имя:* {name}\n"
                f"📱 *Контакт:* {contact}\n"
                f"💼 *Услуга:* {service if service else 'Не указано'}\n"
                f"💬 *Комментарий:* {comment if comment else 'Нет'}\n\n"
                f"🕐 {now}"
            )
            tg_payload = json.dumps({
                "chat_id": tg_chat_id,
                "text": tg_text,
                "parse_mode": "Markdown",
            }).encode("utf-8")
            req = urllib.request.Request(
                f"https://api.telegram.org/bot{tg_token}/sendMessage",
                data=tg_payload,
                headers={"Content-Type": "application/json"},
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=10) as resp:
                tg_sent = resp.status == 200
        except Exception as ex:
            tg_error = str(ex)

    return {
        "statusCode": 200,
        "headers": {**cors_headers, "Content-Type": "application/json"},
        "body": json.dumps({
            "ok": True,
            "email_sent": email_sent,
            "tg_sent": tg_sent,
            "email_error": email_error,
            "tg_error": tg_error,
        }),
    }
