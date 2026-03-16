export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-6 md:px-14 py-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="font-serif text-[15px] italic text-muted">
          Suzanne Robitaille
        </span>
        <span className="text-[11px] tracking-[0.1em] uppercase text-border">
          All client work is confidential
        </span>
        <span className="text-[11px] tracking-[0.1em] uppercase text-muted">
          © {currentYear}
        </span>
      </div>
    </footer>
  )
}
