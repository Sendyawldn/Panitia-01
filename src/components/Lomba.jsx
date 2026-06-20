import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Baby, Star, Zap, Heart, Trophy } from "lucide-react";

const lombaData = [
  {
    id: "balita",
    label: "Balita",
    icon: Baby,
    items: ["Susun Warna", "Lempar Bola", "Nangkep Ikan", "Tuang Air Kebotol"],
  },
  {
    id: "anak",
    label: "Anak-Anak",
    icon: Star,
    items: [
      "Pecahin Balon",
      "Kardus Goyang",
      "Biskuit Jidat",
      "Pindahin Gelas Kebalon",
      "Kelereng",
      "Yes No",
      "Estafet Hanger",
      "Pancing Kerupuk",
    ],
  },
  {
    id: "remaja",
    label: "Remaja",
    icon: Zap,
    items: [
      "Estafet Sarung",
      "Sedotan Karet",
      "Balap Karung Pake Helm",
      "Masukin Bola Kegentong",
      "Yes No",
    ],
  },
  {
    id: "ibu",
    label: "Ibu-Ibu",
    icon: Heart,
    items: ["Yes No", "Gelas Sedotan", "Keranjang Bola", "Nangkep Sapu"],
  },
  {
    id: "bapak",
    label: "Bapak-Bapak",
    icon: Trophy,
    items: [
      "Karung Pake Helm",
      "Rebut Gelas",
      "Tarik Tambang",
      "Pake Sarung Sambil Lempar Balon",
      "Pukul Kendi",
    ],
  },
];

const Lomba = () => {
  const [activeTab, setActiveTab] = useState("anak");

  return (
    <section id="lomba" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bebas text-slate-900 mb-4"
          >
            Daftar <span className="text-indo-red">Lomba</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Berbagai perlombaan seru telah disiapkan untuk semua rentang usia.
            Pilih kategorimu dan persiapkan diri!
          </motion.p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {lombaData.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                  ${
                    isActive
                      ? "bg-indo-red text-white shadow-lg shadow-red-500/30 -translate-y-1"
                      : "bg-white text-slate-600 hover:bg-red-50 hover:text-indo-red border border-gray-200"
                  }`}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {lombaData.map((category) => {
              if (category.id !== activeTab) return null;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {category.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-100 transition-all flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-indo-red font-bebas text-xl group-hover:bg-indo-red group-hover:text-white transition-colors shrink-0">
                        {idx + 1}
                      </div>
                      <span className="font-semibold text-slate-700 text-lg">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Lomba;
