import { useState } from "react";
import { Award, Trophy, ExternalLink, Star, Shield, Medal } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const certificates = [
  {
    id: 1,
    title: "MERN stack developer",
    issuer: "Ocean Academy",
    date: "Nov 2024 - Apr 2025",
    credentialId: "OCNST10869",
    image: "/certificates/ocean.png",
    verifyLink: "https://oceanacademy.co.in/verify/e_certificate/",
    skills: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
  },
  {
    id: 2,
    title: "Introduction to INTERNET OF THINGS",
    issuer: "NPTEL certification",
    date: "Jan - Apr 2025",
    credentialId: "NPTEL25CS44S343700083",
    image: "/certificates/IOT.png",
    verifyLink: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS44S34370008304363190",
    skills: ["Cloud platforms", "Wireless Networks", "Sensors"],
  },
  {
    id: 3,
    title: "Cloud Computing",
    issuer: "NPTEL certification",
    date: "Jul - OCT 2024",
    credentialId: "NPTEL24CS118S950600545",
    image: "/certificates/Cloud Computing.png",
    verifyLink: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS44S34370008304363190",
    skills: ["Azure", "Cloud Computing", "DevOps"],
  },
  {
    id: 4,
    title: "Introduction to MongoDB,AI, and Vector Search",
    issuer: "ICT Academy",
    date: "10-08-2024",
    image: "/certificates/mongoDB.png",
    skills: ["Backend", "Database"],
  },
  {
    id: 5,
    title: "ChatGPT for Excel",
    issuer: "Great Learning Academy",
    date: "Feb 2024",
    image: "/certificates/excel.png",
    skills: ["Microsoft Excel", "ChatGPT Prompt"],
  },
  {
    id: 6,
    title: "Web Development",
    issuer: "EduSkills Academy",
    date: "15 June 2025",
    image: "/certificates/eduskill.png",
    skills: ["UI/UX", "HTML", "CSS", "JavaScript", "React"],
  },
];

const achievements = [
  {
    id: 1,
    title: "Top-10 Finalist",
    event: "0X Day National Level Hackathon - Edition-01",
    description: "Projects on GEN AI and AR.",
    date: "2025",
    image: "/certificates/0x.day.png",
  },
  {
    id: 2,
    title: "Top-07 Pre-Finalist",
    event: "UIP-16",
    description: "GravitycARgo",
    date: "May 30, 2025",
    image: "/certificates/UIP.png",
  },
  {
    id: 3,
    title: "School Level Topper",
    event: "Talkathon",
    description: "A Massive Keynote speaker.",
    date: "2023",
    image: "/certificates/girlstalk-1.png",
  },
  {
    id: 4,
    title: "Winner",
    event: "Football (women)",
    description: "District Level Sports Competition",
    date: "2018-2019",
    image: "/certificates/football.png",
  },
];

export const CertificationsSection = () => {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <section
      id="certifications"
      className="py-32 px-4 relative overflow-hidden"
    >
      {/* Cosmic Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-purple-800/20 to-pink-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.12),transparent_50%)]"></div>
      
      {/* Floating Cosmic Orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Elegant Title Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Cosmic Background Glow */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-96 h-20 bg-gradient-to-r from-purple-600/20 via-pink-600/25 to-indigo-600/20 blur-3xl rounded-full"></div>
          
          <motion.h2 
            className="relative text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
            <motion.span 
              className="ml-3 text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              🏆
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A curated collection of professional certifications and notable achievements 
            that showcase continuous learning and excellence in technology.
          </motion.p>

          {/* Decorative Line */}
          <motion.div 
            className="flex items-center justify-center mt-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full mx-4"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-indigo-400"></div>
          </motion.div>
        </motion.div>

        {/* Certifications Carousel */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Award className="w-6 h-6 text-purple-300" />
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Professional Certifications
            </h3>
            <Shield className="w-6 h-6 text-indigo-300" />
          </motion.div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="certification-swiper"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={cert.id}>
                <motion.div 
                  className="group relative backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden h-full"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(0, 0, 0, 0.6) 0%, 
                      rgba(88, 28, 135, 0.15) 25%, 
                      rgba(139, 69, 19, 0.1) 50%, 
                      rgba(236, 72, 153, 0.12) 75%, 
                      rgba(0, 0, 0, 0.5) 100%)`
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.25)"
                  }}
                >
                  {/* Enhanced gradient hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/5 via-transparent to-purple-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

                  <div className="relative z-10">
                    {cert.verifyLink ? (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4"
                      >
                        <motion.img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-48 object-cover rounded-xl border border-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        />
                      </a>
                    ) : (
                      <motion.img
                        src={cert.image}
                        alt={cert.title}
                        onClick={() => setZoomImage(cert.image)}
                        className="w-full h-48 object-cover rounded-xl border border-white/20 cursor-zoom-in transition-all duration-300 mb-4"
                        whileHover={{ scale: 1.05 }}
                      />
                    )}

                    <h4 className="text-lg font-semibold mb-2 text-white line-clamp-2">
                      {cert.title}
                    </h4>
                    
                    <div className="space-y-1 mb-3">
                      <p className="text-sm text-gray-300">
                        {cert.date}
                      </p>
                      <p className="text-sm text-gray-300">
                        <span className="font-medium">Issued by:</span>{" "}
                        <span className="text-purple-300">{cert.issuer}</span>
                      </p>
                    </div>

                    {cert.credentialId && (
                      <div className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full w-fit mb-3 font-mono">
                        ID: {cert.credentialId}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium px-2 py-1 bg-purple-500/20 text-purple-200 rounded-md border border-purple-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {cert.verifyLink && (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-purple-300 hover:text-purple-200 font-medium transition-colors"
                      >
                        Verify Certificate <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            <Trophy className="w-6 h-6 text-yellow-300" />
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Notable Achievements
            </h3>
            <Medal className="w-6 h-6 text-orange-300" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((ach, index) => (
              <motion.div
                key={ach.id}
                className="group relative backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(0, 0, 0, 0.6) 0%, 
                    rgba(245, 158, 11, 0.15) 25%, 
                    rgba(217, 119, 6, 0.1) 50%, 
                    rgba(251, 191, 36, 0.12) 75%, 
                    rgba(0, 0, 0, 0.5) 100%)`
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.25)"
                }}
              >
                {/* Enhanced gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/15 via-orange-500/12 to-amber-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/5 via-transparent to-yellow-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

                <div className="relative z-10">
                  <motion.img
                    src={ach.image}
                    alt={ach.title}
                    onClick={() => setZoomImage(ach.image)}
                    className="w-full h-48 object-cover rounded-xl border border-white/20 cursor-zoom-in transition-all duration-300 mb-4"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  <h4 className="text-lg font-semibold mb-2 text-white line-clamp-2">
                    {ach.title}
                  </h4>
                  
                  <div className="space-y-1 mb-3">
                    <p className="text-sm font-medium text-yellow-300">
                      {ach.event}
                    </p>
                    <p className="text-sm text-gray-300">
                      {ach.description}
                    </p>
                    <p className="text-xs text-gray-400 italic">
                      {ach.date}
                    </p>
                  </div>

                  {/* Achievement badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-200 rounded-full text-xs font-medium border border-yellow-400/30">
                    <Star className="w-3 h-3" />
                    Achievement
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Zoom Image Modal */}
      {zoomImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={zoomImage}
            alt="Zoomed Certificate"
            className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl cursor-zoom-out"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </section>
  );
};
