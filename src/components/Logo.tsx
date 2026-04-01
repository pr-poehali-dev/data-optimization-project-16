export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        {/* Neiro icon */}
        <span className="text-2xl font-black text-primary">✦</span>
        {/* Brand text */}
        <span className="text-xl font-bold tracking-tight">
          Нейро<span className="text-primary">Вид</span>
        </span>
      </div>
    </div>
  )
}