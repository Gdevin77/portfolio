import { motion } from "framer-motion";

const SectionTitle = ({ eyebrow, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{subtitle}</p>
      ) : null}
    </motion.div>
  );
};

export default SectionTitle;
