import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import { personalInfo } from "../../data/portfolioData";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact Form Message");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="container-width py-20">
      <SectionTitle eyebrow="Contact" title="Let us work together" subtitle="Use the form or connect directly via email, WhatsApp, GitHub, or LinkedIn." />
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="glass-card space-y-4 p-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 dark:border-slate-600 dark:bg-slate-900"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 dark:border-slate-600 dark:bg-slate-900"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="6"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 dark:border-slate-600 dark:bg-slate-900"
          />
          <button type="submit" className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass-card flex flex-col gap-5 p-6"
        >
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-slate-700 transition hover:text-brand-600 dark:text-slate-200">
            <FaEnvelope /> {personalInfo.email}
          </a>
          <a href="#" className="flex items-center gap-3 text-slate-700 transition hover:text-brand-600 dark:text-slate-200">
            <FaWhatsapp /> WhatsApp: {personalInfo.whatsapp}
          </a>
          <a href={personalInfo.github} className="flex items-center gap-3 text-slate-700 transition hover:text-brand-600 dark:text-slate-200">
            <FaGithub /> GitHub
          </a>
          <a href={personalInfo.linkedin} className="flex items-center gap-3 text-slate-700 transition hover:text-brand-600 dark:text-slate-200">
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
