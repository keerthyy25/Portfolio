import { Briefcase, Code, User, Sparkles, Star, Zap, Award, Target, Rocket, Brain, Bolt, Trophy, Heart } from "lucide-react";
import { motion } from "framer-motion";

// Helper function to get RGB values for gradients
const getColorRGB = (colorClass) => {
  const colorMap = {
    'purple-500/30': '168,85,247,0.3',
    'violet-500/20': '139,92,246,0.2', 
    'indigo-500/30': '99,102,241,0.3',
    'purple-400/50': '168,85,247,0.5',
    'indigo-400/50': '99,102,241,0.5',
    'purple-500/40': '168,85,247,0.4',
    'violet-500/40': '139,92,246,0.4',
    'pink-500/30': '236,72,153,0.3',
    'rose-500/20': '244,63,94,0.2',
    'fuchsia-500/30': '217,70,239,0.3',
    'pink-400/50': '236,72,153,0.5',
    'fuchsia-400/50': '217,70,239,0.5',
    'pink-500/40': '236,72,153,0.4',
    'rose-500/40': '244,63,94,0.4',
    'cyan-500/30': '6,182,212,0.3',
    'blue-500/20': '59,130,246,0.2',
    'cyan-400/50': '34,211,238,0.5',
    'blue-400/50': '96,165,250,0.5',
    'cyan-500/40': '6,182,212,0.4',
    'blue-500/40': '59,130,246,0.4'
  };
  return colorMap[colorClass] || '255,255,255,0.1';
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden min-h-screen">
      {/* ULTIMATE COSMIC BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/50 via-purple-800/30 to-pink-900/50"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-900/20 via-transparent to-fuchsia-900/30"></div>
      
      {/* MASSIVE ANIMATED ORBS */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, #ec4899 30%, #06b6d4 60%, transparent 80%)",
          filter: "blur(100px)",
        }}
        animate={{ 
          x: [-200, 200, -200], 
          y: [-100, 100, -100], 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "20%", left: "10%" }}
      />
      
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, #f59e0b 0%, #ef4444 30%, #8b5cf6 60%, transparent 80%)",
          filter: "blur(80px)",
        }}
        animate={{ 
          x: [200, -200, 200], 
          y: [100, -100, 100], 
          scale: [1.2, 0.8, 1.2],
          rotate: [360, 180, 0] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "50%", right: "10%" }}
      />

      {/* FLOATING PARTICLES EXPLOSION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(45deg, ${['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#ef4444'][i % 5]}, transparent)`,
              boxShadow: `0 0 10px ${['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#ef4444'][i % 5]}`,
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* 🌟 MIND-BLOWING TITLE SECTION WITH COSMIC EFFECTS */}
        <motion.div 
          className="text-center mb-32 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* TRIPLE LAYERED COSMIC GLOW */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-[800px] h-40 bg-gradient-to-r from-purple-600/40 via-pink-600/50 to-cyan-600/40 blur-3xl rounded-full"
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.4, 0.6, 0.4] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-[600px] h-28 bg-gradient-to-r from-fuchsia-400/30 via-violet-400/40 to-indigo-400/30 blur-2xl rounded-full"
              animate={{ 
                scale: [1.1, 0.9, 1.1], 
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-[400px] h-20 bg-gradient-to-r from-emerald-400/20 via-blue-400/30 to-purple-400/20 blur-xl rounded-full"
              animate={{ 
                scale: [0.8, 1.3, 0.8], 
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>
          
          {/* ULTIMATE TITLE WITH INSANE EFFECTS */}
          <motion.h2 
            className="relative text-6xl md:text-8xl lg:text-9xl font-black mb-12 
              bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent
              tracking-wider leading-none"
            style={{
              textShadow: "0 0 50px rgba(168,85,247,0.8), 0 0 100px rgba(236,72,153,0.6), 0 0 150px rgba(6,182,212,0.4)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}
            initial={{ scale: 0.5, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5
            }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text"
              }}>
              Me
            </span>
          </motion.h2>
          
          {/* SPECTACULAR DECORATIVE ELEMENTS */}
          <motion.div 
            className="flex items-center justify-center gap-8 mt-12 mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.div 
              className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-500 to-pink-500 rounded-full"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-purple-400" />
            </motion.div>
            <motion.div 
              className="h-1 w-48 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
              animate={{ scaleX: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-6 h-6 text-pink-400" />
            </motion.div>
            <motion.div 
              className="h-1 w-48 bg-gradient-to-r from-indigo-500 to-yellow-500 rounded-full"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Bolt className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <motion.div 
              className="h-1 w-32 bg-gradient-to-l from-yellow-500 via-orange-500 to-transparent rounded-full"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          {/* ULTIMATE SUBTITLE */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mt-8 max-w-4xl mx-auto leading-relaxed font-medium
              [text-shadow:0_4px_20px_rgba(168,85,247,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            ✨ <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-bold">Transforming Dreams into Digital Reality</span> • 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300 font-bold"> Innovating Tomorrow's Solutions Today</span> ✨
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* 🎯 REVOLUTIONARY TEXT AREA WITH GLASS MORPHISM */}
          <motion.div 
            className="space-y-10 text-center lg:text-left relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            {/* ULTRA GLASS BACKGROUND WITH MULTIPLE LAYERS */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl -m-10 
              before:absolute before:inset-0 before:bg-gradient-to-tr before:from-purple-500/20 before:to-transparent before:rounded-[2rem]
              after:absolute after:inset-0 after:bg-gradient-to-bl after:from-pink-500/10 after:to-transparent after:rounded-[2rem]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm rounded-[2rem] -m-10"></div>
            
            <div className="relative z-10 p-12">
              {/* PROFESSIONAL TITLE WITH ULTIMATE ICON */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-6 mb-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.div 
                  className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-indigo-500/30 border border-purple-500/40 shadow-2xl backdrop-blur-md"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Brain className="h-10 w-10 text-purple-300" />
                </motion.div>
                <motion.h3 
                  className="text-3xl md:text-5xl font-black leading-tight text-white
                    drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                  whileHover={{ scale: 1.05 }}
                >
                  AI/ML Visionary & Full-Stack Architect
                </motion.h3>
              </motion.div>

              {/* ENHANCED DESCRIPTION WITH STUNNING HIGHLIGHTS */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 1 }}
              >
                <p className="text-gray-200 text-xl leading-relaxed">
                  With over{" "}
                  <motion.span 
                    className="font-black text-purple-300 px-3 py-1 rounded-xl border border-purple-400/50 shadow-lg bg-purple-400/20"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(168,85,247,0.8)" }}
                  >
                    3+ years of cutting-edge experience
                  </motion.span>{" "}
                  in web development, I architect{" "}
                  <span className="font-bold text-cyan-300">
                    responsive, accessible, and lightning-fast
                  </span>{" "}
                  web applications using revolutionary modern stacks.
                </p>

                <p className="text-gray-200 text-xl leading-relaxed">
                  As a{" "}
                  <motion.span 
                    className="font-black text-indigo-300 px-3 py-1 rounded-xl border border-indigo-400/50 shadow-lg bg-indigo-400/20"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(99,102,241,0.8)" }}
                  >
                    solution-driven innovator
                  </motion.span>
                  , I leverage full-stack development and AI/ML to solve complex real-world challenges. I thrive on learning,
                  adapting, and pioneering breakthroughs in{" "}
                  <span className="font-bold text-yellow-300">
                    fast-paced, dynamic environments
                  </span>
                  .
                </p>

                {/* ACHIEVEMENT SHOWCASE WITH COSMIC DESIGN */}
                <motion.div 
                  className="grid grid-cols-2 gap-6 pt-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-indigo-500/20 border border-purple-400/30 rounded-2xl p-6 text-center backdrop-blur-md shadow-2xl"
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0 0 50px rgba(168,85,247,0.6)",
                      background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.25))"
                    }}
                  >
                    <Trophy className="h-8 w-8 text-purple-300 mx-auto mb-3" />
                    <div className="text-3xl font-black text-purple-300">15+</div>
                    <div className="text-sm text-gray-300 font-medium">Elite Certifications</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-pink-500/20 via-rose-500/15 to-orange-500/20 border border-pink-400/30 rounded-2xl p-6 text-center backdrop-blur-md shadow-2xl"
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0 0 50px rgba(236,72,153,0.6)",
                      background: "linear-gradient(135deg, rgba(236,72,153,0.3), rgba(251,146,60,0.25))"
                    }}
                  >
                    <Heart className="h-8 w-8 text-pink-300 mx-auto mb-3" />
                    <div className="text-3xl font-black text-pink-300">25+</div>
                    <div className="text-sm text-gray-300 font-medium">Passion Projects</div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* ULTIMATE ENHANCED BUTTONS */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-8 pt-12 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 1 }}
              >
                <motion.a
                  href="#contact"
                  className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-black rounded-2xl shadow-2xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.15, 
                    boxShadow: "0 0 60px rgba(168,85,247,0.8), 0 0 100px rgba(236,72,153,0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <span className="relative flex items-center gap-3 text-lg">
                    <Bolt className="h-6 w-6" />
                    Let's Connect!
                  </span>
                </motion.a>

                <motion.a
                  href="/Keerthika-Resume-UNISYS.pdf"
                  className="group relative px-10 py-5 border-2 border-gradient-to-r from-purple-400 to-pink-400 text-white font-black rounded-2xl backdrop-blur-md bg-white/10 overflow-hidden"
                  whileHover={{ 
                    scale: 1.15, 
                    background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.3))",
                    boxShadow: "0 0 40px rgba(255,255,255,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative flex items-center gap-3 text-lg">
                    <Trophy className="h-6 w-6 text-purple-300" />
                    Download Resume
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* 🚀 REVOLUTIONARY FEATURE CARDS WITH NEXT-LEVEL DESIGN */}
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            {[
              {
                icon: <Code className="h-10 w-10 text-purple-300" />,
                title: "Full-Stack Web Development",
                desc: "Crafting immersive, responsive web experiences with cutting-edge frameworks and lightning-fast performance optimization.",
                gradient: "from-purple-500/30 via-violet-500/20 to-indigo-500/30",
                borderGradient: "from-purple-400/50 to-indigo-400/50",
                iconBg: "from-purple-500/40 to-violet-500/40",
                hoverShadow: "rgba(168,85,247,0.6)"
              },
              {
                icon: <Brain className="h-10 w-10 text-pink-300" />,
                title: "AI/ML Engineering",
                desc: "Building intelligent systems with machine learning algorithms, neural networks, and data-driven solutions that revolutionize user experiences.",
                gradient: "from-pink-500/30 via-rose-500/20 to-fuchsia-500/30",
                borderGradient: "from-pink-400/50 to-fuchsia-400/50",
                iconBg: "from-pink-500/40 to-rose-500/40",
                hoverShadow: "rgba(236,72,153,0.6)"
              },
              {
                icon: <Rocket className="h-10 w-10 text-cyan-300" />,
                title: "Product Innovation",
                desc: "Leading cross-functional teams from ideation to deployment, utilizing agile methodologies and modern DevOps practices for scalable solutions.",
                gradient: "from-cyan-500/30 via-blue-500/20 to-indigo-500/30",
                borderGradient: "from-cyan-400/50 to-blue-400/50",
                iconBg: "from-cyan-500/40 to-blue-500/40",
                hoverShadow: "rgba(6,182,212,0.6)"
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className={`group relative flex items-start gap-8 p-10 rounded-3xl border backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-700`}
                style={{
                  background: `linear-gradient(135deg, ${card.gradient.split(' ').map(c => {
                    const color = c.replace('from-', '').replace('via-', '').replace('to-', '');
                    return `rgba(${getColorRGB(color)})`;
                  }).join(', ')})`,
                  borderImage: `linear-gradient(135deg, ${card.borderGradient.split(' ').map(c => {
                    const color = c.replace('from-', '').replace('to-', '');
                    return `rgba(${getColorRGB(color)})`;
                  }).join(', ')}) 1`
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + idx * 0.3, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.08, 
                  rotateY: 5,
                  boxShadow: `0 0 80px ${card.hoverShadow}, 0 0 120px ${card.hoverShadow.replace('0.6', '0.3')}`
                }}
              >
                {/* Spectacular Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Ultra Icon Container */}
                <motion.div 
                  className={`relative p-6 rounded-2xl border border-white/30 shadow-2xl backdrop-blur-md`}
                  style={{ background: `linear-gradient(135deg, ${card.iconBg.split(' ').map(c => {
                    const color = c.replace('from-', '').replace('to-', '');
                    return `rgba(${getColorRGB(color)})`;
                  }).join(', ')})` }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: `0 0 40px ${card.hoverShadow}`
                  }}
                  transition={{ duration: 0.8 }}
                >
                  {card.icon}
                </motion.div>
                
                <div className="relative flex-1">
                  <motion.h4 
                    className="text-2xl md:text-3xl font-black mb-4 text-white transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    {card.title}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-200 text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-500"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {card.desc}
                  </motion.p>
                </div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${card.hoverShadow.replace('0.6', '0.3')}, transparent)`,
                    padding: '2px',
                  }}>
                  <div className="w-full h-full rounded-3xl bg-black/50 backdrop-blur-sm"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
