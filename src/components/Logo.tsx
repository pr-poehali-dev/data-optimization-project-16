export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        {/* Gradient bracket */}
        <span className="text-2xl font-black text-primary">{`{`}</span>
        {/* Brand text */}
        <span className="text-xl font-bold tracking-tight">
          Code<span className="text-primary">Craft</span>
        </span>
        <span className="text-2xl font-black text-primary">{`}`}</span>
      </div>
    </div>
  )
}