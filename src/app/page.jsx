"use client";

import HeroSlider from "@/components/HeroSlider";
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";
import GamesMarquee from "@/components/GamesMarquee";
import ProductGrid from "@/components/ProductGrid";
import "../app/global.css";
import { FaPlus, FaGift, FaAward } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import games from "@/data/games";
import Bottomslider from "@/components/Bottomslider";
import Bottomproductcard from "@/components/Bottomproductcard";
import { useModal } from "@/context/ModalContext";


export default function HomePage() {
  const router = useRouter();
  const { openAddMoney } = useModal();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <HeaderBar onAddMoneyClick={openAddMoney} />
      <main className="flex-1 pt-24 pb-24 relative z-10">
        <div className="flex flex-col min-h-full"> 
          <div>
            <HeroSlider />
            <div className="mt-6">
              <GamesMarquee />
              <div className="flex flex-row flex-wrap justify-center gap-8 mt-10 px-4">
                <div className="flex flex-col items-center group">
                  <div className="button-container">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
                    <button 
                      onClick={() => openAddMoney()}
                      className="relative w-18 h-18 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center border border-gray-700/50"
                    >
                      <FaPlus className="text-2xl text-emerald-400 relative z-10" />
                      <div className="button-shine"></div>
                    </button>
                  </div>
                  <span className="mt-4 text-sm font-medium text-white/90 group-hover:text-emerald-400 transition-colors duration-300">Add Money</span>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="button-container"
                       onTouchStart={(e) => e.currentTarget.classList.add('active')}
                       onTouchEnd={(e) => e.currentTarget.classList.remove('active')}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
                    <button 
                      onClick={() => router.push('/leaderboard')}
                      className="relative w-18 h-18 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center border border-gray-700/50"
                    >
                      <FaAward className="text-2xl text-emerald-400 relative z-10" />
                      <div className="button-shine"></div>
                    </button>
                  </div>
                  <span className="mt-4 text-sm font-medium text-white/90 group-hover:text-emerald-400 transition-colors duration-300">Leaderboard</span>
                </div>
                <div className="flex flex-col items-center group">
                  <div className="button-container"
                       onTouchStart={(e) => e.currentTarget.classList.add('active')}
                       onTouchEnd={(e) => e.currentTarget.classList.remove('active')}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
                    <button 
                      onClick={() => router.push('/redeemcode')}
                      className="relative w-18 h-18 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center border border-gray-700/50"
                    >
                      <FaGift className="text-2xl text-emerald-400 relative z-10" />
                      <div className="button-shine"></div>
                    </button>
                  </div>
                  <span className="mt-4 text-sm font-medium text-white/90 group-hover:text-emerald-400 transition-colors duration-300">Redeem Code</span>
                </div>
              </div>
              
              {/* Products Section */}
              <div className="container mx-auto px-4 max-w-7xl" style = {{paddingTop: "20px"}}>
                {console.log('Page - games data:', games)}
                {Array.isArray(games) && games.length > 0 ? (
                  <ProductGrid title="Our Products" games={games} />
                ) : (
                  <div className="text-white text-center py-8">
                    <p>No products available at the moment.</p>
                    <p className="text-sm text-gray-400">Debug: games data is {!games ? 'undefined' : 'empty'}</p>
                  </div>
                )}
                <style jsx global>{`
    @keyframes shine {
      0% { 
        transform: translateX(-100%) skewX(-25deg);
        opacity: 0.5;
      }
      50% { 
        opacity: 0.9;
        filter: brightness(1.2);
      }
      100% { 
        transform: translateX(300%) skewX(-25deg);
        opacity: 0.5;
      }
    }
    
    .button-container {
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      -webkit-tap-highlight-color: transparent;
    }
    
    .button-shine {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: skewX(-25deg);
      opacity: 0.7;
      pointer-events: none;
      filter: blur(6px);
      animation: shine 3s infinite;
      animation-timing-function: ease-in-out;
    }
    
    /* Mobile touch feedback */
    @media (hover: none) and (pointer: coarse) {
      .button-container:active .button-shine {
        animation: shine 1.5s infinite;
        opacity: 1;
      }
    }
  `}</style>
              </div>
            </div>
          </div>
        </div>
        {/* Sidemenu with Add Money handler */}
        {/* Bottom Slider Section */}
        <div className="w-full bg-black">
          <Bottomslider />
        </div>
        <div className="w-full bg-black">
          <Bottomproductcard />
        </div>
      </main>
      <div className="relative bg-black border-t border-gray-800">
        <Footer />
      </div>
    </div>
  );
}

export const slides = [
  { bg: "/images/1.jpg" },
  { bg: "/images/2.jpg" },
  { bg: "/images/3.jpg" }
];
