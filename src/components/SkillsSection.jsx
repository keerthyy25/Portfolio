import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code, Database, Wrench, Star, Sparkles, Zap } from "lucide-react";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "🎨", color: "from-orange-500 to-red-500" },
  { name: "JavaScript", level: 88, category: "frontend", icon: "⚡", color: "from-yellow-500 to-orange-500" },
  { name: "React", level: 90, category: "frontend", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
  { name: "Tailwind CSS", level: 85, category: "frontend", icon: "🎨", color: "from-teal-500 to-blue-500" },

  { name: "Node.js", level: 80, category: "backend", icon: "🚀", color: "from-green-500 to-emerald-500" },
  { name: "Express", level: 75, category: "backend", icon: "🛠️", color: "from-gray-500 to-slate-500" },
  { name: "MongoDB", level: 70, category: "backend", icon: "🍃", color: "from-green-600 to-lime-500" },
  { name: "Python", level: 80, category: "backend", icon: "🐍", color: "from-yellow-400 to-yellow-600" },

  { name: "Git/GitHub", level: 90, category: "tools", icon: "🔧", color: "from-purple-500 to-pink-500" },
  { name: "Figma", level: 85, category: "tools", icon: "🎭", color: "from-pink-500 to-rose-500" },
  { name: "VS Code", level: 95, category: "tools", icon: "💻", color: "from-blue-600 to-indigo-600" },
  { name: "Postman", level: 75, category: "tools", icon: "📮", color: "from-orange-600 to-red-600" },
  { name: "Flutter", level: 70, category: "tools", icon: "📱", color: "from-blue-400 to-blue-600" },
];

const categories = [
  { id: "all", label: "All Skills", icon: Star, color: "from-purple-500 to-pink-500" },
  { id: "frontend", label: "Frontend", icon: Code, color: "from-blue-500 to-cyan-500" },
  { id: "backend", label: "Backend", icon: Database, color: "from-green-500 to-emerald-500" },
  { id: "tools", label: "Tools", icon: Wrench, color: "from-orange-500 to-red-500" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [particles, setParticles] = useState([]);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          duration: Math.random() * 3 + 2,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateY: -15,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: { duration: 0.3 },
    },
  };

  const progressBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        width: { type: "spring", stiffness: 100, damping: 15, delay: 0.5 },
        opacity: { duration: 0.3, delay: 0.3 },
      },
    }),
  };

  return (
    <section id="skills" className="py-24 px-4 relative z-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-indigo-900/20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, particle.opacity, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title with stunning effects */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-24 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-indigo-600/30 blur-3xl rounded-full"></div>
          </div>
          
          <motion.h2
            className="relative text-4xl md:text-6xl font-extrabold mb-4 
              bg-gradient-to-br from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent
              drop-shadow-[0_4px_30px_rgba(255,255,255,0.25)] tracking-wide"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}
          >
            My <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">Skills</span>
          </motion.h2>

          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.div 
              className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
            <motion.div 
              className="w-2 h-2 bg-pink-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="h-px w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            ></motion.div>
            <motion.div 
              className="w-2 h-2 bg-indigo-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            ></motion.div>
            <motion.div 
              className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            ></motion.div>
          </div>
        </motion.div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Discover the technologies and tools I've mastered throughout my journey as a developer.
        </p>

        {/* Enhanced Category Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((category, i) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 capitalize backdrop-blur-md border overflow-hidden group",
                  isActive
                    ? "bg-gradient-to-r text-white shadow-2xl scale-110 border-white/20"
                    : "bg-white/5 text-muted-foreground hover:scale-105 hover:text-white border-white/10 hover:bg-white/10"
                )}
                style={{
                  backgroundImage: isActive ? `linear-gradient(135deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})` : undefined,
                }}
                whileHover={{ 
                  scale: isActive ? 1.1 : 1.05,
                  boxShadow: isActive 
                    ? "0 10px 30px rgba(139, 92, 246, 0.4)" 
                    : "0 5px 15px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`,
                  }}
                />
                
                {/* Content */}
                <div className="relative flex items-center gap-2">
                  <IconComponent className="w-4 h-4" />
                  <span>{category.label}</span>
                </div>

                {/* Sparkle effects for active button */}
                {isActive && (
                  <>
                    <motion.div
                      className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"
                      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full"
                      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    />
                  </>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid with Amazing Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${skill.name}`}
                className="relative group perspective-1000"
                variants={skillCardVariants}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Card Background with Glow */}
                <div className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
                  `bg-gradient-to-br ${skill.color}`
                )} />
                
                {/* Main Card */}
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 group-hover:bg-black/30">
                  {/* Floating Icon */}
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    animate={hoveredSkill === skill.name ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="text-2xl transform group-hover:scale-110 transition-transform duration-300"
                      animate={hoveredSkill === skill.name ? { rotate: [0, -10, 10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="font-bold text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all duration-300">
                      {skill.name}
                    </h3>
                  </motion.div>

                  {/* Animated Progress Bar */}
                  <div className="relative">
                    <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden shadow-inner">
                      <motion.div
                        className={cn(
                          "h-full rounded-full shadow-lg relative overflow-hidden",
                          `bg-gradient-to-r ${skill.color}`
                        )}
                        custom={skill.level}
                        variants={progressBarVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                          animate={{ x: ["0%", "200%"] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: 1 
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Sparkle Effects on Hover */}
                  {hoveredSkill === skill.name && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: [0, 1, 0], 
                            opacity: [0, 1, 0],
                            x: [0, Math.random() * 20 - 10],
                            y: [0, Math.random() * 20 - 10],
                          }}
                          transition={{ 
                            duration: 1, 
                            repeat: Infinity,
                            delay: i * 0.2 
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Decorative Elements */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="text-muted-foreground text-sm">Continuously learning and growing</span>
            <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
