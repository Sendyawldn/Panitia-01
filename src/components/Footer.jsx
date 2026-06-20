import React from 'react';
import { MapPin } from 'lucide-react';

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const WhatsAppIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a0.5 0.5 0 0 0 1 0V9a0.5 0.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a0.5 0.5 0 0 0 0-1h-1a0.5 0.5 0 0 0 0 1" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-[10px] border-indo-red relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-indo-red flex items-center justify-center text-white font-bebas text-2xl shrink-0">
                81
              </div>
              <span className="font-bebas text-2xl tracking-wider">
                HUT RI 81 <span className="text-indo-red">Kedep</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Mari dukung acara peringatan Hari Kemerdekaan ke-81 di RT 01/RW 19. Kami terbuka untuk berbagai bentuk dukungan donasi dan sponsorship.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/6283834110545" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indo-red transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon size={20} />
              </a>
              <a href="https://www.instagram.com/pemuda.pemudi.cihuyy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indo-red transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-2xl mb-6">Tautan Cepat</h4>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li><a href="#home" className="hover:text-indo-red transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-indo-red transition-colors">Tentang Acara</a></li>
              <li><a href="#lomba" className="hover:text-indo-red transition-colors">Daftar Lomba</a></li>
              <li><a href="#schedule" className="hover:text-indo-red transition-colors">Jadwal Acara</a></li>
              <li><a href="#panitia" className="hover:text-indo-red transition-colors">Struktur Panitia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-2xl mb-6">Kontak Panitia</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-indo-red shrink-0 mt-1" />
                <span>Lapangan Bulu Tangkis RT 01/RW 19<br/>Kp. Kedep, Desa Tlajung Udik<br/>Gunungputri</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-indo-red/20 flex items-center justify-center text-indo-red font-bold text-xs shrink-0">
                  Y
                </div>
                <span>Yusuf (Ketua Panitia)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-indo-red/20 flex items-center justify-center text-indo-red font-bold text-xs shrink-0">
                  A
                </div>
                <span>Amon (Wakil Ketua)</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center md:flex justify-between items-center text-sm text-slate-500">
          <p>&copy; 2026 Pemuda RT 01/RW 019. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Dibuat dengan semangat kemerdekaan 🇮🇩</p>
        </div>
      </div>
      
      {/* Decorative text watermark */}
      <div className="absolute -bottom-10 -right-10 text-[200px] font-bebas text-white/5 select-none pointer-events-none z-0 leading-none">
        RI 81
      </div>
    </footer>
  );
};

export default Footer;
