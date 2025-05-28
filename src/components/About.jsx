/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

// Animation variants for About section
const containerVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for child elements
const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Animation variants for image
const imageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  hover: { scale: 1.05, rotate: 2, transition: { duration: 0.3 } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      aria-label="About section"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-neutral-800 relative overflow-hidden"
      initial="initial"
      animate="animate"
      variants={containerVariants}
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

      <motion.div className="max-w-7xl mx-auto" variants={containerVariants}>
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold mb-12 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
        >
          About <span className="text-neutral-400">Me</span>
        </motion.h1>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-1/2 flex justify-center"
            whileHover="hover"
          >
            <img
              className="rounded-3xl w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover shadow-lg shadow-cyan-500/25 border border-cyan-500/50 transition-all duration-300"
              src={profile}
              alt="Ahmad Wahyudi Tanjung - Backend Developer"
              loading="lazy"
              role="img"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4">
                Backend Developer & Problem Solver
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Saya adalah seorang backend developer yang berpengalaman dalam mengembangkan 
                aplikasi web yang <span className="text-cyan-400 font-medium">responsif</span> dan 
                <span className="text-cyan-400 font-medium"> user-friendly</span>. 
                Dengan keahlian mendalam dalam berbagai bahasa pemrograman dan framework.
              </p>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Spesialisasi saya adalah <span className="text-cyan-400 font-medium">Java Spring Boot</span> untuk 
                pengembangan backend yang robust dan scalable. Saya memiliki passion untuk 
                menciptakan solusi teknologi yang efisien dan inovatif.
              </p>
              <div className="pt-4">
                <h3 className="text-lg font-medium text-neutral-300 mb-3">Keahlian Utama:</h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {['Java', 'Spring Boot', 'Backend Development', 'Team Collaboration', 'Problem Solving', 'Web Development'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300 hover:from-cyan-500/30 hover:to-purple-500/30 transition-colors duration-300"
                      aria-label={`Skill: ${skill}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <p className="text-neutral-400 text-sm sm:text-base italic pt-4">
                "Termotivasi untuk terus belajar dan berkembang dalam ekosistem web development"
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;