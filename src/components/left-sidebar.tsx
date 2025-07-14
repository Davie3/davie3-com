import { FiGithub } from 'react-icons/fi';

export function LeftSidebar() {
  return (
    <div className="hidden md:flex flex-col items-center fixed bottom-0 left-10 w-10">
      <a
        href="https://github.com/davie3"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-[color:var(--color-slate-dark)] hover:text-[color:var(--color-accent)] transition-transform duration-300 hover:-translate-y-1"
        aria-label="GitHub"
      >
        <FiGithub size={20} />
      </a>
      <div className="mt-6 w-px h-24 bg-[color:var(--color-slate-dark)]"></div>
    </div>
  );
}
