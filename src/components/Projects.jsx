/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { projects } from "..";

const Projects = () => {
  return (
    <section className="text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Projects
      </h1>
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row gap-8 items-center bg-neutral-900 p-6 rounded-2xl shadow-[0_0_30px_#0ff5]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={p.image}
              alt={p.title}
              className="rounded-xl object-cover w-full max-w-md aspect-video border-4 border-cyan-500 transition-transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                {p.title}
              </h2>
              <p className="text-neutral-300 mb-4 text-sm sm:text-base">
                {p.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-[#1A1A40] text-[#7DD3FC] border border-[#7DD3FC] text-xs sm:text-sm px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-center lg:justify-start gap-4 text-sm">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  GitHub
                </a>
                {p.visit && (
                  <a
                    href={p.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
