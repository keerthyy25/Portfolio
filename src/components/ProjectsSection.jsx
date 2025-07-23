import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    id: 1,
    title: "GravitycARgo",
    description:
      "AI-powered smart cargo management system that optimizes container space, reduces damage risk, and enhances logistics efficiency.",
    image: "/projects/project1.png",
    tags: ["React", "AI/AR", "Optimization"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "QuickSeat",
    description:
      "Predicts unoccupied bus seats in advance, enhancing passenger convenience and travel efficiency.",
    image: "/projects/project2.png",
    tags: ["Flutter", "AI", "HTML/CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Go-Smart",
    description:
      "AI-powered smart retail system to detect product misplacement, track expiries, and prevent theft in real time.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "VS Code"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          className="text-center text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-br from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent tracking-wide"
          style={{
            WebkitBackgroundClip: "text",
            backgroundClip: "text"
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-white">Projects</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-center text-muted-foreground max-w-2xl mx-auto text-lg mb-14"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Explore my creative works built with purpose, powered by AI, and designed with passion. Every project solves real-world challenges with innovation.
        </motion.p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.02}>
                <div className="bg-card rounded-2xl shadow-xl border border-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:border-white/20 hover:scale-[1.02]">
                  {/* Image */}
                  <div className="h-48 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-semibold bg-gradient-to-tr from-purple-500 to-fuchsia-500 text-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-start space-x-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary transition"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary transition"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* GitHub Button */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="https://github.com/keerthyy25"
            target="_blank"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1"
          >
            Check My GitHub <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
