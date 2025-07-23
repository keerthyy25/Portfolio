import { ArrowDown, Rocket, Sparkles, Star } from "lucide-react";
import profileImage from "../assets/keerthi.png"; // ✔ use existing image
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


export const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["AI/ML Engineer", "Full-Stack Dev", "Innovator"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseDuration = 2000;

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (!isDeleting && typedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const nextText = isDeleting
        ? currentWord.substring(0, typedText.length - 1)
        : currentWord.substring(0, typedText.length + 1);
      
      timeout = setTimeout(() => {
        setTypedText(nextText);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentWordIndex, isDeleting]);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-white"
    >
      {/* Layered Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-900/40 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-bl from-black/50 via-purple-800/30 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />

      {/* Animated Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #4c1d95 0%, #581c87 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [-100, 100, -100], y: [-50, 50, -50], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "10%", left: "10%" }}
      />

      {/* Additional Orbs */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #1e1b4b 0%, #4c1d95 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [100, -100, 100], y: [50, -50, 50], scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "60%", right: "10%" }}
      />

      {/* Floating Stars and Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight - 100],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="text-purple-300 w-4 h-4" />
          </motion.div>
        ))}

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 360],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth + 50,
              ],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="text-pink-300 w-3 h-3" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto text-center z-10 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Block */}
          <motion.div
            className="flex-1 space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              <motion.span 
                className="block mb-2"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm
              </motion.span>
              
              {/* Innovative Name Display */}
              <div className="relative inline-block">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 blur-3xl opacity-30 animate-pulse"></div>
                
                {/* Main name with multiple effects */}
              <motion.span 
                className="relative block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <span className="relative inline-block">
                  <span 
                    className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent font-black"
                    style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
                  >
                    Hello!
                  </span>
                  {/* Floating dots around the text */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1], 
                      rotate: [0, 360],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1], 
                      rotate: [360, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  />
                </span>
              </motion.span>                {/* Typing effect subtitle */}
                <motion.div 
                  className="mt-4 text-3xl md:text-4xl font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <span 
                    className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent font-bold"
                    style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
                  >
                    {typedText}
                  </span>
                  <motion.span
                    className="inline-block w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-400 ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A passionate{" "}
              <span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent font-semibold"
                style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                AI/ML
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-pink-300 to-pink-400 bg-clip-text text-transparent font-semibold"
                style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}>
                full-stack developer
              </span>{" "}
              dedicated to building intuitive, intelligent web solutions using cutting-edge technologies. I bring digital ideas to life with design, innovation, and scalable code.
            </p>

            <div className="pt-6">
              <a
                href="#projects"
                className="px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:scale-110 shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
              >
                <Rocket size={20} />
                View My Work
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center z-10 relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl">
              {/* Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-pink-500/20 rounded-full" />

              <motion.img
                src={profileImage}
                alt="Keerthika"
                className="w-full h-full object-cover rounded-full brightness-110 contrast-125"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Prompt */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm text-gray-300 mb-3">Scroll to Explore</span>
        <ArrowDown className="h-6 w-6 text-purple-400 animate-bounce" />
      </motion.div>
    </section>
  );
};
