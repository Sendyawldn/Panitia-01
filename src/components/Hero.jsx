import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const CountdownUnit = ({ value, label }) => (
  <div className="flex flex-col items-center p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 min-w-[80px] sm:min-w-[100px]">
    <span className="font-bebas text-4xl sm:text-5xl text-white tracking-wider">{value.toString().padStart(2, '0')}</span>
    <span className="text-xs sm:text-sm text-white/80 uppercase tracking-widest mt-1">{label}</span>
  </div>
);

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: August 17th of the current year
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(`August 17, ${currentYear} 00:00:00`).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

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
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium tracking-wide">Pendaftaran Lomba Telah Dibuka!</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white drop-shadow-lg leading-none mb-6"
          >
            DIRGAHAYU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">INDONESIA 81</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mb-12 font-light"
          >
            Mari bersama-sama merayakan hari kemerdekaan Republik Indonesia dengan penuh semangat kebersamaan, perlombaan, dan malam tirakatan yang meriah.
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
                <p className="font-semibold">Lapangan Utama Warga</p>
              </div>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
          >
            <CountdownUnit value={timeLeft.days} label="Hari" />
            <span className="text-white text-3xl font-bebas pb-6">:</span>
            <CountdownUnit value={timeLeft.hours} label="Jam" />
            <span className="text-white text-3xl font-bebas pb-6">:</span>
            <CountdownUnit value={timeLeft.minutes} label="Menit" />
            <span className="text-white text-3xl font-bebas pb-6">:</span>
            <CountdownUnit value={timeLeft.seconds} label="Detik" />
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#register" 
              className="group flex items-center justify-center gap-2 bg-white text-indo-red px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1"
            >
              Daftar Lomba
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
