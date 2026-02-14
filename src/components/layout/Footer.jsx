import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-slate-800/70">
      <div className="container-width flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Copyright {new Date().getFullYear()} Devin Jaera. All rights reserved.
        </p>
        <a
          href="#home"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white transition hover:-translate-y-0.5 hover:bg-brand-700"
          aria-label="Back to top"
        >
          <FaArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
