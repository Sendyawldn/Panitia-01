import React from 'react';
import { Phone, Globe, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-[10px] border-indo-red relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-indo-red flex items-center justify-center text-white font-bebas text-2xl">
                81
              </div>
              <span className="font-bebas text-2xl tracking-wider">
                HUT RI <span className="text-indo-red">81</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Mari jadikan peringatan Hari Kemerdekaan ke-81 ini sebagai momen untuk mempererat persaudaraan dan semangat gotong royong di lingkungan kita.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indo-red transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indo-red transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indo-red transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-2xl mb-6">Tautan Cepat</h4>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li><a href="#home" className="hover:text-indo-red transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-indo-red transition-colors">Tentang Acara</a></li>
              <li><a href="#schedule" className="hover:text-indo-red transition-colors">Jadwal & Lomba</a></li>
              <li><a href="#register" className="hover:text-indo-red transition-colors">Pendaftaran Lomba</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-2xl mb-6">Kontak Panitia</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-indo-red shrink-0 mt-1" />
                <span>Sekretariat RT 05 / RW 08<br/>Perumahan Warga Makmur<br/>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-indo-red/20 flex items-center justify-center text-indo-red font-bold text-xs shrink-0">
                  W
                </div>
                <span>Bpk. Wawan (Ketua Panitia)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-indo-red/20 flex items-center justify-center text-indo-red font-bold text-xs shrink-0">
                  S
                </div>
                <span>Ibu Siti (Koordinator Lomba)</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center md:flex justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Panitia HUT RI 81. All rights reserved.</p>
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
