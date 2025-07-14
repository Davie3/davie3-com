export function Footer() {
  const STARTING_YEAR = 2025;
  const currentYear = new Date().getFullYear();
  const yearText =
    currentYear !== STARTING_YEAR
      ? `${STARTING_YEAR} - ${currentYear}`
      : currentYear;

  return (
    <footer className="w-full py-8 text-center text-sm text-[color:var(--color-slate-dark)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-2">
          <a
            href="https://github.com/Davie3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:var(--color-accent)] transition-colors duration-300"
          >
            Designed & Built by David Griffin
          </a>
          <p>Created with an AI assistant 🤖</p>
          <p>© {yearText} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
