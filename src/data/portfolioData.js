// Portfolio Data – Ahsan Ijtiba
import raineMedicalImg from '../assets/rainemedical.png';
import cltrofanalytics from '../assets/cltrofanalytics.jpg';
import elegosoftware from '../assets/elegosoftware.jpg';

export const personalInfo = {
  name: "Ahsan Ijtiba",
  firstName: "Ahsan",
  lastName: "Ijtiba",
  title: "WordPress Developer",
  subtitle: "& High-Converting Websites",
  tagline: "I craft beautiful WordPress websites that turn visitors into leads and customers.",
  about: `I craft beautiful WordPress websites that drive real results — combining strategic design with user-friendly navigation to turn visitors into leads and customers. I've helped clients grow leads by 40% and I bring that same impact to every project.`,
  aboutExtended: `My approach blends conversion-focused design with clean, performant WordPress development. From custom Elementor builds to WooCommerce stores, I deliver sites that look great, load fast, and rank on Google.`,
  location: "Remote",
  email: "ahsanhossainkhan019@gmail.com",
  phone: "+8801603252208",
  linkedin: "https://www.linkedin.com/in/ahsanijtiba/",
  github: "https://github.com/ahsanijtiba",
  twitter: "https://twitter.com/ahsanijtiba",
  availableForWork: true,
};

export const services = [
  {
    id: "01",
    icon: "⚡",
    title: "WordPress Development",
    description: "Building fast, fully custom WordPress websites from the ground up — tailored to your brand, goals, and audience.",
    tools: ["WordPress", "Elementor", "WordFence", "WP Rocket"],
  },
  {
    id: "02",
    icon: "🛒",
    title: "WooCommerce Stores",
    description: "Developing high-converting e-commerce stores with seamless checkout flows, payment gateways, and inventory management.",
    tools: ["WooCommerce", "Stripe", "PayPal", "Shipping Plugins"],
  },
  {
    id: "03",
    icon: "🎨",
    title: "Figma to WordPress",
    description: "Converting pixel-perfect Figma designs into fully functional, responsive, and dynamic WordPress websites.",
    tools: ["Figma", "WordPress", "Elementor", "Custom CSS"],
  },
  {
    id: "04",
    icon: "🚀",
    title: "Speed & Performance",
    description: "Optimising site speed and Core Web Vitals so your website loads in under 2 seconds and ranks higher on Google.",
    tools: ["WP Rocket", "GTmetrix", "Imagify"],
  },
];

export const experiences = [
  {
    id: 1,
    company: "Raine Medical, Inc.",
    role: "Web Developer",
    period: "May 2024 – Present",
    duration: "Part-time · Remote",
    description: "Led the design and development of the company's official WordPress website from planning and layout through to customisation and performance optimisation. Ongoing role covering UX improvements, site speed, and functionality enhancements.",
    tags: ["WordPress", "Elementor", "UX", "Performance"],
    current: true,
  },
  {
    id: 2,
    company: "Klubz Media",
    role: "Web Developer",
    period: "Jan 2023 – Dec 2023",
    duration: "Contract · Remote",
    description: "Boosted client website speed by 25%, driving a 10% increase in organic traffic. Implemented on-page SEO strategies that grew organic traffic by 15% in one quarter. Built high-converting landing pages with Elementor, exceeding lead generation targets by 10%.",
    tags: ["WordPress", "SEO", "Elementor", "Landing Pages"],
    current: false,
  },
  {
    id: 3,
    company: "Times IT",
    role: "WordPress Developer",
    period: "Jan 2023 – Aug 2023",
    duration: "Part-time · On-site",
    description: "Resolved complex technical issues across existing WordPress websites. Collaborated with designers to build custom Elementor pages. Applied SEO best practices that reduced bounce rate by 7%.",
    tags: ["WordPress", "Elementor", "SEO", "Technical Support"],
    current: false,
  },
];

export const projects = [
  {
    id: 1,
    title: "Raine Medical",
    link: "https://rainemedical.com/",
    image: raineMedicalImg,
    category: "WordPress",
    description: "Designed and developed the official corporate website for a US-based medical company. Focused on professional aesthetics, fast load times, and clear conversion paths for prospective clients.",
    tags: ["WordPress", "Elementor", "Performance", "Security"],
    color: "#c8f135",
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "Cultrof Analytics",
    link: "https://cultrofanalytics.com/",
    image: cltrofanalytics,
    category: "Figma to WordPress",
    description: "Developed a modern, high-performance WordPress website from a Figma design for an analytics agency. Features dynamic animations, custom Elementor layouts, and perfect mobile responsiveness.",
    tags: ["WordPress", "Figma", "Elementor Pro", "Custom CSS"],
    color: "#818cf8",
    year: "2023",
    featured: true,
  },
  {
    id: 3,
    title: "Elego Software",
    link: "https://elegosoftware.com/",
    image: elegosoftware,
    category: "Corporate Website",
    description: "Designed and built a professional software company portfolio. Implemented a clean, intuitive layout with seamless navigation, speed optimization, and robust security measures.",
    tags: ["WordPress", "Elementor", "Speed Optimization", "UI/UX"],
    color: "#3b82f6",
    year: "2022",
    featured: true,
  },
];

export const skills = [
  { name: "WordPress", level: 97 },
  { name: "Elementor", level: 95 },
  { name: "WooCommerce", level: 90 },
  { name: "On-Page SEO", level: 88 },
  { name: "Website Speed Optimisation", level: 85 },
  { name: "HTML & CSS", level: 87 },
  { name: "JavaScript", level: 75 },
  { name: "Theme & Plugin Customisation", level: 92 },
];

export const stats = [
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Websites Built" },
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
];

export const testimonials = [
  {
    id: 1,
    name: "Nadine Koukash",
    role: "Web Developer",
    content: "I have had the pleasure to work with Ahsan and I   confidently say that Ahsan is Creative and talented person  he have new ideas to improve work also he is accurate in time",
    avatar: "NK",
  },
  {
    id: 2,
    name: "Susmita Asad",
    role: "Director, Klubz Media",
    content: "Ahsan Ijtiba is a gem if you are looking to hire a Wordpress Developer and Elementor Expert. His problem solving skills and determination to project was exceptional. Highly recommended.",
    avatar: "SA",
  },
  {
    id: 3,
    name: "Yahya Sabi",
    role: "Odoo Developer",
    content: "Ahsan is an outstanding WordPress developer who brought my vision to life and significantly contributed to my business success. His deep WordPress knowledge, attention to detail, and ability to translate ideas into results are truly commendable. A pleasure to work with, I wholeheartedly recommend him.",
    avatar: "YS",
  },
];

export const education = [
  {
    degree: "WordPress Development",
    institution: "Self-directed + Professional Experience",
    period: "2023 – 2024",
    grade: "Completed",
  },
];
