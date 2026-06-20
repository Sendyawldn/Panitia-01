import React from "react";
import { motion } from "framer-motion";

const scheduleData = [
  {
    time: "08:00",
    title: "Pembukaan Acara",
    location: "Lapangan Bulu Tangkis",
    description:
      "Pembukaan resmi acara peringatan HUT RI 81 oleh ketua panitia dan tokoh masyarakat.",
  },
  {
    time: "08:11 - 11:00",
    title: "Sesi Lomba Pagi",
    location: "Lapangan Bulu Tangkis",
    description: "Perlombaan seru untuk kategori Balita & Anak-anak.",
  },
  {
    time: "11:01 - 11:30",
    title: "Doorprize",
    location: "Panggung Utama",
    description:
      "Pengundian doorprize sesi pertama untuk warga yang beruntung.",
  },
  {
    time: "11:31 - 13:00",
    title: "ISHOMA",
    location: "-",
    description: "Istirahat, Sholat, dan Makan siang.",
  },
  {
    time: "13:01 - 15:30",
    title: "Sesi Lomba Siang",
    location: "Lapangan Bulu Tangkis",
    description: "Perlombaan kategori Remaja, Ibu-ibu, dan Bapak-bapak.",
  },
  {
    time: "15:31 - Selesai",
    title: "Doorprize & Penutup",
    location: "Panggung Utama",
    description:
      "Pembagian hadiah pemenang lomba, doorprize utama, dan penutupan acara.",
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bebas text-slate-900 mb-4"
          >
            Rangkaian <span className="text-indo-red">Acara</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Pastikan Anda tidak melewatkan momen seru dari pagi hingga malam
            hari. Catat jadwalnya!
          </motion.p>
        </div>

        <div className="relative border-l-4 border-red-100 ml-4 md:ml-0 md:pl-0">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10 ml-8 md:ml-0 md:flex items-start justify-between group relative"
            >
              {/* Dot */}
              <div className="absolute w-6 h-6 rounded-full bg-white border-4 border-indo-red -left-[43px] md:-left-3 top-1 shadow-md group-hover:scale-125 transition-transform" />

              <div className="md:w-[25%] pt-1 md:pr-8 md:text-right">
                <span className="inline-block bg-red-50 text-indo-red font-bold px-4 py-1 rounded-full text-sm mb-2 md:mb-0 border border-red-100">
                  {item.time}
                </span>
              </div>

              <div className="md:w-[75%] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow md:-mt-3">
                <h3 className="text-2xl font-bebas text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-indo-red mb-3 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {item.location}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
