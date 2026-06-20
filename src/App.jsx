import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-indo-white flex flex-col font-inter">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Schedule />
        
        {/* Simple CTA/Registration Section */}
        <section id="register" className="py-24 bg-indo-red relative overflow-hidden">
          {/* Abstract pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="diagonal" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="white" strokeWidth="4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonal)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl md:text-6xl font-bebas text-white mb-6">Siap Untuk <span className="text-slate-900">Merdeka?</span></h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
              Daftarkan diri atau tim Anda sekarang juga. Tempat terbatas untuk beberapa perlombaan utama!
            </p>
            <form className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl text-left">
              <div className="mb-4">
                <label className="block text-slate-700 font-semibold mb-2" htmlFor="name">Nama Lengkap</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indo-red focus:border-transparent transition-all" placeholder="Masukkan nama Anda" />
              </div>
              <div className="mb-6">
                <label className="block text-slate-700 font-semibold mb-2" htmlFor="lomba">Pilihan Lomba</label>
                <select id="lomba" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indo-red focus:border-transparent transition-all">
                  <option value="">-- Pilih Lomba --</option>
                  <option value="panjat_pinang">Panjat Pinang</option>
                  <option value="tarik_tambang">Tarik Tambang</option>
                  <option value="balap_karung">Balap Karung</option>
                  <option value="makan_kerupuk">Makan Kerupuk</option>
                </select>
              </div>
              <button type="button" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/30">
                Kirim Pendaftaran
              </button>
            </form>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
