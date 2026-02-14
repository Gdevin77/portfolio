import {
  FaCode,
  FaCloud,
  FaTools,
  FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCogs
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export const personalInfo = {
  name: "Devin Jaera",
  title: "Cloud Computing & Internet of Things Graduate  | Web Designer | IT Support Specialist",
  bio: "I build reliable software, systems, and practical IT solutions that improve operations and user experience.",
  about:
    "I hold a BSc in Cloud Computing & Internet of Things (Upper Second Class) from the University of Zimbabwe.I have hands-on experience building responsive web applications using React.js, with a strong foundation in frontend development, basic backend concepts, and experience in IT technical support.I am passionate about software development, cloud systems, and modern IT solutions that solve real-world problems.",
  email: "mufarojay123@gmail.com",
  whatsapp: "+263 77 272 5467",
  cvLink:"/cv/Devin Jaera CV.pdf",
  github: "https://github.com/Gdevin77",
  linkedin: "https://www.linkedin.com/in/devin-jaera-651699246/"
};

export const skills = [
  { name: "React.js", icon: FaReact },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "Node.js / Express", icon: FaNodeJs },
  { name: "Python", icon: FaPython },
  { name: "Cloud Computing", icon: FaCloud },
  { name: "Internet of Things (IoT)", icon: FaCogs },
  { name: "IT Support & Troubleshooting", icon: FaTools },
  { name: "Git & GitHub", icon: FaGitAlt }
];

export const projects = [
  {
    title: "Employee Management System",
    description:
      "A role-based web platform for managing staff records, attendance, and internal workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/emp.png",
    live: "https://employee-nine-snowy.vercel.app/",
    github: "https://github.com/Gdevin77/employee"
  },
  {
    title: "Church Website Portal",
    description:
      "A content-driven church portal with event scheduling, announcements, and engagement features.",
    stack: ["React", "Tailwind", "Firebase"],
    image: "/images/youth.png",
    live: "#",
    github: "https://github.com/Gdevin77/youth"
  },
  {
    title: "Automated Attendance Management System",
    description:
      "A smart attendance tracking system designed to reduce manual errors and improve reporting.",
    stack: ["Python", "Flask", "SQL"],
    image: "https://placehold.co/600x400/e2e8f0/334155?text=Automated+Attendance+System",
    live: "#",
    github: "#"
  },
  {
    title: "AUTONOVA - Automotive Key & ECU Solutions",
    description:
      "Autonova is a full-stack automotive service platform for booking and managing car services online.",
    stack: ["React", "Node.js", "Express", "MySQL"],
    image: "/images/autonova.png",
    live: "#",
    github: "https://github.com/Gdevin77/autonova"
  }
];

export const services = [
  {
    title: "Web Application Development",
    description: "Building modern, scalable web apps with clean UI and robust backend integrations.",
    icon: FaLaptopCode
  },
  {
    title: "System Development",
    description: "Designing and implementing tailored software systems for organizational workflows.",
    icon: FaDatabase
  },
  {
    title: "IT Support & Technical Troubleshooting",
    description: "Diagnosing and resolving hardware/software issues to maintain smooth operations.",
    icon: FaTools
  },
  {
    title: "Cloud-Based Solutions",
    description: "Deploying and optimizing cloud-first services for performance, reliability, and growth.",
    icon: FaCloud
  }
];

export const contactLinks = [
  { label: "GitHub", href: "https://github.com/", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaCode }
];
