"use client";

import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";
import { BsCreditCard, BsChevronDown, BsNewspaper } from "react-icons/bs";
import { FaMoneyBillWave, FaRocket, FaTags, FaRegClock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const newsItems = [
  {
    id: 1,
    title: "Payment Method Updated!",
    icon: <BsCreditCard className="text-blue-500" />,
    content: "If you face any issues, feel free to contact us on WhatsApp. For orders above ₹2000, add C Coins to your wallet and use them to purchase.",
    date: "06-02-2025 6:41 PM",
    category: "Update",
    readTime: "2 min read"
  },
  {
    id: 2,
    title: "Double Diamond Event",
    icon: <FaTags className="text-purple-500" />,
    content: "Exciting news! Get double diamonds on your first purchase of any diamond pack. This limited-time offer is available for all users. Don't miss out on this amazing deal to maximize your gaming experience!",
    date: "19-01-2025 5:50 PM",
    category: "Promotion",
    readTime: "1 min read"
  },
  {
    id: 3,
    title: "Top Up & Win Big!",
    icon: <FaMoneyBillWave className="text-green-500" />,
    content: "New Feature: Get Cashback on Every Game Top-Up! The bigger the top-up, the bigger the cashback! Plus, join our Weekly Purchase & Monthly Wallet Leaderboards to win even more rewards! Top up today and start winning!",
    date: "14-10-2024 10:26 PM",
    category: "Feature",
    readTime: "3 min read"
  },
];

const NewsCard = ({ item, isOpen, onClick }) => (
  <motion.div 
    className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-emerald-500/20 shadow-xl hover:shadow-emerald-900/20 hover:border-emerald-500/30 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.01 }}
  >
    <button
      className="w-full text-left p-6 flex flex-col"
      onClick={onClick}
    >
      <div className="flex justify-between items-start w-full">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-800 rounded-lg">
            {item.icon}
          </div>
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-opacity-20 bg-blue-500 text-blue-300 mb-2">
              {item.category}
            </span>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
          </div>
        </div>
        <BsChevronDown
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </div>
      
      <div className="flex items-center mt-4 text-sm text-emerald-100/80">
        <div className="flex items-center mr-4">
          <FaRegClock className="mr-1" />
          <span>{item.date}</span>
        </div>
        <div className="flex items-center">
          <span>•</span>
          <span className="ml-2">{item.readTime}</span>
        </div>
      </div>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 pt-2 text-gray-300 border-t border-gray-700">
            <p className="mb-4 leading-relaxed">{item.content}</p>
            <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors flex items-center group">
              Read more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function NewsPage() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-gray-100">
      <HeaderBar />
      
      {/* Modern Green Banner */}
      <section className="relative w-full rounded-3xl min-h-[280px] md:min-h-[280px] overflow-hidden bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, #10b981 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.3) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(5, 150, 105, 0.3) 0%, transparent 30%),
            linear-gradient(135deg, rgba(5, 150, 105, 0.2) 0%, transparent 50%)
          `,
          animation: 'pulse 12s ease-in-out infinite alternate',
        }}></div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center py-12">
          <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-emerald-100 bg-emerald-800/50 rounded-full backdrop-blur-sm border border-emerald-700/50">
            Latest Updates
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
            News & Announcements
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-100/90">
            Stay updated with the latest news, updates, and promotions
          </p>
        </div>
      </section>

      <main className="flex-1 relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-24">
        <motion.div 
          className="space-y-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {newsItems.map((item, idx) => (
            <NewsCard
              key={item.id}
              item={item}
              isOpen={openItem === idx}
              onClick={() => setOpenItem(openItem === idx ? null : idx)}
            />
          ))}
        </motion.div>
      </main>
      
      <Footer className="mt-auto" />
      <style jsx global>{`
        @keyframes pulse {
          0% { 
            opacity: 0.2;
            transform: scale(1);
          }
          50% { 
            opacity: 0.4;
            transform: scale(1.02);
          }
          100% { 
            opacity: 0.2;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
