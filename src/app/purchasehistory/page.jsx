"use client";
import { useState } from 'react';
import HeaderBar from '@/components/HeaderBar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoneyBillWave, FaReceipt, FaWallet } from 'react-icons/fa';

export default function purchasehistory() {
  const [activeTab, setActiveTab] = useState('payments');

  const renderTabContent = () => {
    const emptyState = (icon, title, description) => (
      <motion.div 
        className="p-8 text-center rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-emerald-500/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-900/30 text-emerald-400 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </motion.div>
    );

    switch (activeTab) {
      case 'payments':
        return emptyState(
          <FaMoneyBillWave size={28} />,
          'No Payment Records',
          'Your payment history will appear here.'
        );
      case 'purchase':
        return emptyState(
          <FaReceipt size={28} />,
          'No Purchase Records',
          'Your purchase history will appear here.'
        );
      case 'ledger':
        return emptyState(
          <FaWallet size={28} />,
          'No Ledger Entries',
          'Your ledger entries will appear here.'
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <HeaderBar />
      <div className="pt-16">
        <div className="w-full rounded-3xl bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100 mb-4">
              Reports
            </h1>
            <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto">
              View and manage your transaction history and account statements
            </p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
          <motion.div 
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-emerald-500/20 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex space-x-1 p-1 bg-gray-800/30 border-b border-gray-700/50">
              {['payments', 'purchase', 'ledger'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-gray-700/50 text-emerald-400 shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderTabContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
