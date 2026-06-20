import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-900">
      {/* Background with abstract red and white shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indo-red/90 to-slate-900/90 z-10" />
        {/* Placeholder image pattern / texture */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565506087570-5b1b4b2b6946?q=80&w=2000&auto=format&fit=crop')] 
                     bg-cover bg-center opacity-30 mix-blend-overlay z-0" 
        />
        
        {/* Decorative elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-indo-red rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"
        />
        <motion.div 
          animate={{ x: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 z-0"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-12 pb-24">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-lg leading-tight mb-6 font-bebas uppercase"
          >
            Lumpuhkan Rasa Takut dengan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Kreativitas Tanpa Batas</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mb-12 font-light"
          >
            Senin, 17 Agustus 2026 di Lapangan Bulu Tangkis RT 01/RW 19, Kp. Kedep, Desa Tlajung Udik, Gunungputri.
          </motion.p>

          {/* Event Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Calendar size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/70">Tanggal</p>
                <p className="font-semibold">17 Agustus</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <MapPin size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/70">Lokasi</p>
                <p className="font-semibold text-sm">Lapangan Bulu Tangkis RT 01/RW 19</p>
              </div>
            </div>
          </motion.div>


          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#footer" 
              className="group flex items-center justify-center gap-2 bg-white text-indo-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1"
            >
              Tertarik Jadi Sponsor? Hubungi Kami
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#schedule" 
              className="flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Lihat Jadwal
            </a>
          </motion.div>

        </div>
      </div>
      
      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-indo-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
