/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

// Animation variants for Hero section
const heroVariants = {
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
const childVariants = {
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

const Hero = () => {
  return (
    <motion.section
      id="hero"
      aria-label="Hero section"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-neutral-800 relative overflow-hidden"
      initial="initial"
      animate="animate"
      variants={heroVariants}
      viewport={{ once: true }}
    >
      {/* Subtle Background Particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(10)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        {/* Teks Utama */}
        <motion.div className="w-full lg:w-1/2 text-center lg:text-left" variants={heroVariants}>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
            variants={childVariants}
          >
            Ahmad Wahyudi Tanjung
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-cyan-400 mb-6"
            variants={childVariants}
          >
            Web Developer
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            variants={childVariants}
          >
            Saya adalah pengembang web yang berpengalaman dalam pengembangan frontend dan backend.
            Terampil menggunakan React, Tailwind CSS untuk antarmuka pengguna, dan Java Spring Boot serta
            database untuk membangun backend yang efisien dan aman. Selalu bersemangat untuk
            menjelajahi alat dan framework baru serta meningkatkan keterampilan saya dalam industri
            yang terus berkembang.
          </motion.p>

          <motion.a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            variants={childVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="View my projects"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Gambar Profil */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          variants={heroVariants}
        >
          <motion.img
            src={profile}
            alt="Foto profil Ahmad Wahyudi Tanjung"
            loading="lazy"
            role="img"
            className="rounded-full border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/25 object-cover w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72"
            variants={imageVariants}
            whileHover="hover"
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;