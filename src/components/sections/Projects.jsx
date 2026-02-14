import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="container-width py-20">
      <SectionTitle eyebrow="Projects" title="Selected work" subtitle="Project cards are ready for your real links, screenshots, and case-study details." />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass-card overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={project.live} className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-600 dark:text-slate-100"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
