/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { RiVercelLine, RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { SiThymeleaf, SiMysql, SiJavascript, SiC, SiSwagger, SiNetlify,  SiGit, SiGithub} from "react-icons/si";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import { FaJava } from "react-icons/fa";

// Animation variants for TechStack section
const techStackVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for tech icons
const techVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
};

const techs = [
  { icon: <FaJava />, name: "Java", color: "#F1502F" },
  { icon: <BiLogoSpringBoot />, name: "Spring Boot", color: "#6DB33F" },
  { icon: <SiThymeleaf />, name: "Thymeleaf", color: "#005F0F" },
  { icon: <RiReactjsLine />, name: "React", color: "#61DAFB" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: <RiVercelLine />, name: "Vercel", color: "#ffffff" },
  { icon: <SiNetlify />, name: "Netlify", color: "#00AD9F" },
  { icon: <BiLogoPostgresql />, name: "PostgreSQL", color: "#336791" },
  { icon: <SiMysql />, name: "MySQL", color: "#00758F" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F0DB4F" },
  { icon: <SiC />, name: "C", color: "#A8B9CC" },
  { icon: <SiSwagger />, name: "Swagger", color: "#6BA539" },
  { icon: <SiGit />, name: "Git", color: "#F1502F" },
  { icon: <SiGithub />, name: "GitHub", color: "#fff" },
];

const TechStack = () => {
  return (
    <motion.section
      id="tech-stack"
      aria-label="Tech Stack section"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-neutral-800 relative overflow-hidden"
      initial="initial"
      animate="animate"
      variants={techStackVariants}
      viewport={{ once: true }}
    >
      {/* Subtle Background Particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.h1
        variants={techVariants}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
      >
        Tech <span className="text-neutral-400">Stack</span>
      </motion.h1>

      <motion.p
        variants={techVariants}
        className="text-center text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mb-8"
      >
        My expertise spans a wide range of technologies, from frontend frameworks to backend systems and databases, enabling me to build robust and scalable web applications.
      </motion.p>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            variants={techVariants}
            whileHover="hover"
            className="relative group rounded-2xl text-5xl sm:text-6xl border-2 border-cyan-500/50 p-3 shadow-md shadow-cyan-500/25 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300"
            style={{ color: tech.color }}
            aria-label={`Technology: ${tech.name}`}
          >
            {tech.icon}
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-neutral-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-neutral-700">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechStack;