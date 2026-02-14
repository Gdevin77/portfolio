import SectionTitle from "../ui/SectionTitle";
import { personalInfo } from "../../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="container-width py-20">
      <SectionTitle eyebrow="About Me" title="Building practical digital solutions" />
      <div className="glass-card mx-auto max-w-4xl p-8 sm:p-10">
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">{personalInfo.about}</p>
      </div>
    </section>
  );
};

export default About;
