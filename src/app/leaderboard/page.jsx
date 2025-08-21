"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaWallet } from 'react-icons/fa';
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";
import LeaderboardBadge from "@/components/LeaderboardBadge";
import leaderboardData from '@/data/leaderboardData';
import walletData from '@/data/walletData';

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('purchase'); // 'purchase' or 'wallet'
  const [activePurchaseTab, setActivePurchaseTab] = useState('challenge'); // 'challenge' or 'reward'
  
  // In a real app, this would be fetched from an API
  const [leaderboardDataState, setLeaderboardDataState] = useState({
    activeChallenge: [],
    lastReward: []
  });
  
  // Simulate API fetch (replace with actual API call)
  useEffect(() => {
    // This would be your actual API call
    // fetch('/api/leaderboard')
    //   .then(res => res.json())
    //   .then(data => setLeaderboardDataState(data));
    
    // For now, using the imported data
    setLeaderboardDataState(leaderboardData);
  }, [leaderboardData]);
  
  // Get data based on active tab
  const getCurrentTabData = () => {
    if (activeTab === 'purchase') {
      if (activePurchaseTab === 'challenge') {
        return {
          topThree: leaderboardDataState.activeChallenge.slice(0, 3),
          remaining: leaderboardDataState.activeChallenge.slice(3),
          title: 'Active Challenge',
          emptyMessage: 'No active challenge data available'
        };
      } else { // reward
        return {
          topThree: leaderboardDataState.lastReward.slice(0, 3),
          remaining: leaderboardDataState.lastReward.slice(3),
          title: 'Last Reward',
          emptyMessage: 'No reward data available'
        };
      }
    } else { // wallet
      return {
        topThree: walletData.slice(0, 3),
        remaining: walletData.slice(3),
        title: 'Wallet Balance',
        emptyMessage: 'No wallet data available'
      };
    }
  };
  
  const { topThree, remaining, title, emptyMessage } = getCurrentTabData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col">
      <HeaderBar />
      <div className="flex-grow pb-24">
        {/* Banner with Badges */}
        <div className="w-full rounded-b-3xl bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 pt-24 pb-30 px-4 relative overflow-hidden -mt-3">
          {/* Confetti Container */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: ['#FFD700', '#FF1493', '#00BFFF', '#7CFC00', '#FF4500', '#9370DB'][Math.floor(Math.random() * 6)],
                  transform: `scale(${Math.random() * 0.5 + 0.5})`,
                  opacity: Math.random() * 0.5 + 0.5,
                  animation: `confetti-fall ${Math.random() * 3 + 2}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  zIndex: 1
                }}
              />
            ))}
          </div>
          <style jsx>{`
            @keyframes confetti-fall {
              0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
              }
              100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
              }
            }
          `}</style>
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100 mb-4">
              Leaderboard
            </h1>
            <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto mb-8">
              Track your ranking and compete with other users
            </p>
            
            {/* Badges Row */}
            <div className="flex justify-center items-end space-x-1 sm:space-x-3 md:space-x-6 pt-10 pb-4">
              {/* Top 3 Badges */}
              <div className="flex justify-center items-end gap-1 sm:gap-2 md:gap-6 lg:gap-10 -mb-8 z-10 relative">
                {topThree.length >= 2 && (
                  <div className="relative -mb-2 sm:mb-0">
                    <LeaderboardBadge 
                      position={2}
                      name={topThree[1]?.name || 'Player 2'}
                      amount={`₹${topThree[1]?.amount || '0.00'}`}
                      imageUrl="/images/trophy2.jpg"
                    />
                  </div>
                )}
                {topThree.length >= 1 && (
                  <div className="relative -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12">
                    <LeaderboardBadge 
                      position={1}
                      name={topThree[0]?.name || 'Player 1'}
                      amount={`₹${topThree[0]?.amount || '0.00'}`}
                      imageUrl="/images/trophy1.jpg"
                    />
                  </div>
                )}
                {topThree.length >= 3 && (
                  <div className="relative -mb-2 sm:mb-0">
                    <LeaderboardBadge 
                      position={3}
                      name={topThree[2]?.name || 'Player 3'}
                      amount={`₹${topThree[2]?.amount || '0.00'}`}
                      imageUrl="/images/trophy3.jpg"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
          <motion.div
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-emerald-500/20 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tabs */}
            <div className="flex flex-col">
              {/* Main Tabs */}
              <div className="flex p-1 bg-gray-800/30 border-b border-gray-700/50">
                {[
                  { id: 'purchase', icon: <FaShoppingCart className="mr-2" />, label: 'Purchase' },
                  { id: 'wallet', icon: <FaWallet className="mr-2" />, label: 'Wallet' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gray-700/50 text-emerald-400 shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Purchase Sub-tabs */}
              {activeTab === 'purchase' && (
                <div className="flex justify-center py-2 bg-gray-800/20">
                  <div className="inline-flex rounded-lg bg-gray-800/80 p-1 border border-gray-700/50">
                    {[
                      { id: 'challenge', label: 'Active Challenge' },
                      { id: 'reward', label: 'Last Reward' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActivePurchaseTab(tab.id)}
                        className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                          activePurchaseTab === tab.id
                            ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 shadow-lg shadow-emerald-500/10'
                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="w-full">
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 mt-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-center"
                    >
                      <div className="w-full">
                        <div className="space-y-4">
                          {remaining.length > 0 ? (
                            remaining.map((item) => (
                              <div key={item.id} className="relative rounded-xl p-4 sm:p-6 border border-emerald-500/20 w-full">
                                <div className="absolute top-1/2 right-2 sm:right-6 transform -translate-y-1/2 bg-emerald-900/80 text-emerald-300 text-xs sm:text-base px-2 sm:px-4 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
                                  ₹{item.amount} {activeTab === 'wallet' ? 'in wallet' : ''}
                                </div>
                                <div className="flex items-center justify-between w-full pr-20 sm:pr-0">
                                  <div className="flex items-center">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-emerald-500/30 bg-gray-800">
                                      <span className="text-xl sm:text-2xl font-bold text-white">
                                        {item.position}
                                      </span>
                                    </div>
                                    <div className="ml-3 sm:ml-4 max-w-[120px] sm:max-w-none">
                                      <h4 className="font-medium text-white text-sm sm:text-lg truncate">{item.name}</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="text-gray-400 py-8">
                              {emptyMessage}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
