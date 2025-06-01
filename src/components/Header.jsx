/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// Animation variants for header
const headerVariants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animation variants for social icons
const iconVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.9 },
};

const Header = () => {
  return (
    <motion.nav
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between sticky top-0 z-20 bg-black/50 backdrop-blur-md"
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      <div className="flex flex-shrink-0 items-center">
        <motion.h1
          className="text-2xl sm:text-3xl bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-semibold"
          variants={headerVariants}
        >
          My Portfolio
        </motion.h1>
        {/* Placeholder for logo image */}
        {/* <img className="mx-2 w-10 h-10" src="" alt="Portfolio Logo" /> */}
      </div>
      <motion.div
        className="flex items-center justify-center gap-4 sm:gap-6 text-xl sm:text-2xl"
        variants={iconVariants}
        initial="initial"
        animate="animate"
      >
        <motion.a
          href="https://www.linkedin.com/in/ahmad-wahyudi-tanjung-b09377313/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          className="text-blue-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
          aria-label="Visit LinkedIn Profile"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/Wahyudi120505"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          className="text-slate-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
          aria-label="Visit GitHub Profile"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          className="text-red-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
          aria-label="Visit Instagram Profile"
        >
          <FaInstagram />
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Header;