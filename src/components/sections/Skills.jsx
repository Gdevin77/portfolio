import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { skills } from "../../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="container-width py-20">
      <SectionTitle eyebrow="Skills" title="Technologies and expertise" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card group p-6"
            >
              <Icon className="text-3xl text-brand-600 transition group-hover:scale-110 dark:text-brand-300" />
              <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
