import { useEffect, useState } from "react";
import { ExternalLink, Award, Trophy, Star, Zap } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const participations = [
  {
    id: 1,
    title: "Google Developer Student Clubs",
    event: "Journey through Machine Learning",
    date: "28th Feb 2024",
    image: "/certificates/participation/GDSC.png",
  },
  {
    id: 2,
    title: "Zenista",
    event: "National Level Technical Event",
    date: "2023",
    image: "/certificates/participation/sairam.png",
  },
  {
    id: 3,
    title: "Sparkathon",
    event: "Converge@Walmart",
    date: "2024",
    image: "/certificates/participation/converge.png",
  },
  {
    id: 4,
    title: "Mobile App Development",
    event: "ICON",
    date: "2023",
    image: "/certificates/participation/icon.png",
  },
  {
    id: 5,
    title: "E-commerce & Tech Quiz",
    event: "Flipkart GRID 6.0 - Software Development Track",
    date: "2023",
    image: "/certificates/participation/flipkart.png",
  },
  {
    id: 6,
    title: "Workshop @ IIT Madras",
    event: "Dot Net Workshop",
    date: "05/10/2024",
    image: "/certificates/participation/IIT1.png",
  },
  {
    id: 7,
    title: "Workshop @ IIT Madras",
    event: "Python Programming Workshop",
    date: "18/02/2023",
    image: "/certificates/participation/IIT2.png",
  },
  {
    id: 8,
    title: "Raja Electronics Institute",
    event: "Testing of Electronic Devices in Hardware",
    date: "27/01/2023",
    image: "/certificates/participation/IIT2.png",
  },
];

export const ParticipationSection = () => {
  const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="participation" className="py-24 px-4 relative z-10 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] overflow-hidden">
      {/* Layered Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-900/40 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-bl from-black/50 via-purple-800/30 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />

      {/* Animated Orbs Similar to Hero */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, #ec4899 0%, #8b5cf6 50%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{ x: [-80, 80, -80], y: [-40, 40, -40], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "15%", left: "15%" }}
      />

      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, #ec4899 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [90, -90, 90], y: [45, -45, 45], scale: [1.2, 0.8, 1.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "60%", right: "15%" }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, #6366f1 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ x: [60, -60, 60], y: [-30, 30, -30], scale: [0.9, 1.4, 0.9], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "40%", left: "50%" }}
      />

      {/* Floating Awards and Trophies */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`award-${i}`}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              y: [
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) - 100
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 4 === 0 && <Trophy className="text-yellow-300 w-5 h-5" />}
            {i % 4 === 1 && <Award className="text-purple-300 w-5 h-5" />}
            {i % 4 === 2 && <Award className="text-pink-300 w-5 h-5" />}
            {i % 4 === 3 && <Star className="text-indigo-300 w-5 h-5" />}
          </motion.div>
        ))}

        {[...Array(18)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 0.9, 0],
              rotate: [0, 360],
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200) + 40,
              ],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Zap className="text-purple-300 w-3 h-3" />
          </motion.div>
        ))}

        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 180, 360],
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200) - 30,
              ],
              y: [
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) + 20,
              ],
            }}
            transition={{
              duration: Math.random() * 6 + 5,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            <div className={`w-4 h-4 ${i % 2 === 0 ? 'bg-pink-400/30' : 'bg-purple-400/30'} ${i % 3 === 0 ? 'rounded-full' : 'rotate-45'} filter blur-sm`} />
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2 
          className="text-4xl font-extrabold mb-6 text-center text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Participation in <span className="text-primary">Events</span> 🎤
        </motion.h2>
        <motion.p 
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Events and programs where I actively showcased my learning interest, collaboration, and exposure.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {participations.map((part, index) => (
            <motion.div
              key={part.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
              }}
              viewport={{ once: true }}
              className="relative bg-white/5 border border-primary/10 rounded-xl backdrop-blur-xl p-5 shadow-md hover:shadow-2xl transition-all duration-500 group hover:border-primary/40 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Floating Badge */}
              <motion.div 
                className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] font-semibold px-2 py-[2px] rounded-full shadow-md"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                Participated
              </motion.div>

              {/* Image */}
              <motion.img
                src={part.image}
                alt={part.title}
                className="w-full h-48 object-cover rounded-md mb-4 border border-primary/20 transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
                onClick={() => setZoomImage(part.image)}
                whileHover={{ scale: 1.03, rotateX: 2 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <motion.h4 
                className="text-lg font-bold mb-1 text-primary"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                whileHover={{ x: 5, color: "#ec4899" }}
              >
                {part.title}
              </motion.h4>
              <motion.p 
                className="text-sm text-muted-foreground font-medium mb-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ x: 3 }}
              >
                📍 {part.event}
              </motion.p>
              <motion.p 
                className="text-xs text-muted-foreground italic mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                whileHover={{ x: 3 }}
              >
                📅 {part.date}
              </motion.p>

              {part.verifyLink && (
                <motion.a
                  href={part.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 text-sm transition-all duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  whileHover={{ 
                    scale: 1.05, 
                    x: 5,
                    textShadow: "0 0 8px rgba(139, 92, 246, 0.5)"
                  }}
                >
                  Verify
                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </motion.div>
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Zoomed Participation Certificate"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg cursor-zoom-out"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
