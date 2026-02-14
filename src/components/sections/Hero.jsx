import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../../data/portfolioData";

const Hero = () => {
  return (
    <section id="home" className="container-width grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
          Hello, I am
        </p>
        <h1 className="font-display text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          {personalInfo.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-medium text-slate-700 dark:text-slate-200">{personalInfo.title}</p>
        <p className="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300">{personalInfo.bio}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            View Projects
          </a>
          <a
            href={personalInfo.cvLink}
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-600 dark:text-slate-100 dark:hover:border-brand-400 dark:hover:text-brand-300"
          >
            Download CV
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a href={personalInfo.github} aria-label="GitHub" className="text-slate-600 transition hover:text-brand-600 dark:text-slate-300">
            <FaGithub size={22} />
          </a>
          <a href={personalInfo.linkedin} aria-label="LinkedIn" className="text-slate-600 transition hover:text-brand-600 dark:text-slate-300">
            <FaLinkedin size={22} />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="text-slate-600 transition hover:text-brand-600 dark:text-slate-300">
            <FaEnvelope size={22} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative mx-auto w-full max-w-md"
      >
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-300/30 to-cyan-300/30 blur-2xl" />
        <div className="glass-card relative aspect-square overflow-hidden rounded-[2rem] p-6">
          <img
            src="/images/Devin.png"
            alt="Profile placeholder"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
