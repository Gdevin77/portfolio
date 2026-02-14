import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { services } from "../../data/portfolioData";

const Services = () => {
  return (
    <section id="services" className="container-width py-20">
      <SectionTitle eyebrow="Services" title="How I can help" />
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="glass-card p-6"
            >
              <Icon className="text-2xl text-brand-600 dark:text-brand-300" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{service.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
