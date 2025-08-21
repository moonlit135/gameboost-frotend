'use client';

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { FaCheck, FaInstagram, FaWhatsapp, FaTelegram, FaYoutube } from "react-icons/fa";
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [walletBalance, setWalletBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState("wallet");

  // Get game details from URL params
  const gameName = searchParams.get("game") || "Game";
  const gamePublisher = searchParams.get("publisher") || "";
  const gameImage = searchParams.get("image") || "/default-game.jpg";
  const gamePrice = parseFloat(searchParams.get("price")) || 0;

  // Calculate payable amount
  const payableAmount =
    selectedPayment === "wallet"
      ? Math.max(0, gamePrice - walletBalance)
      : gamePrice;

  // Fetch wallet balance
  useEffect(() => {
    const fetchWalletBalance = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setWalletBalance(425); // mock data
      } catch (error) {
        console.error("Error fetching wallet balance:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWalletBalance();
  }, []);

  const handlePayment = async () => {
    console.log("Processing payment with:", selectedPayment);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Payment successful!");
  };

  const insufficientBalance =
    walletBalance < gamePrice && selectedPayment === "wallet";

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex flex-col relative">
      <HeaderBar className="relative z-10" />
      <div className="flex-1 pt-25 pb-20">
       
        {/* Modern Green Banner */}
      <section className="relative w-full rounded-b-3xl min-h-[280px] md:min-h-[280px] overflow-hidden bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 -mt-16 z-0">
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
        
        <div className="relative z-10 h-full flex flex-col items-center justify-end px-4 text-center pb-16 pt-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Check Out Our Latest Deals
          </h1>
          <div className="w-24 h-1 bg-white/30 rounded-full mt-4"></div>
        </div>
      </section>
        
        <main className="w-full max-w-6xl mx-auto px-4 -mt-12 relative z-20">
          {/* Main Container Card */}
          <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-xl p-6 space-y-6 shadow-xl">
            {/* Main Heading */}
            

            <div className="space-y-4">
              {/* Game Info Card */}
              <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-xl p-4">
                <div className="flex items-center">
                  <div className="w-30 h-16 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={gameImage}
                      alt={gameName}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <h2 className="font-medium text-white text-sm">{gameName}</h2>
                    {gamePublisher && (
                      <p className="text-xs text-gray-400">{gamePublisher}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-xl p-4">
                <h3 className="text-white font-medium mb-3">Follow us on</h3>
                <div className="flex justify-between max-w-md mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-2xl" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                    aria-label="Telegram"
                  >
                    <FaTelegram className="text-2xl" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="text-2xl" />
                  </a>
                </div>
              </div>

              {/* C Coin Wallet Card */}
              <div className="bg-[#1A1A1A] rounded-xl p-4 border-2 border-white/10">
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between w-full">
                      <h4 className="font-medium text-white text-lg">C Coin Wallet</h4>
                      {isLoading ? (
                        <div className="h-4 w-24 bg-gray-700 rounded animate-pulse"></div>
                      ) : (
                        <p className="text-[#00E676] font-medium text-lg">
                          ₹{walletBalance.toFixed(2)}
                        </p>
                      )}
                    </div>

                    {!isLoading && (
                      <div className="mt-3">
                        <div
                          style={{
                            width: `${Math.min(
                              100,
                              (walletBalance / gamePrice) * 100
                            )}%`,
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Character & Server ID Card */}
              <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-xl p-4">
                <h3 className="text-white font-medium mb-3">Character Id</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Character Id"
                    className="w-full bg-[#2A2A2A] border border-gray-600 rounded-lg px-4 py-2 pr-24 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent"
                  />
                  <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00E676] to-[#00C853] text-black font-medium px-3 py-1.5 rounded-md text-sm hover:opacity-90 transition-opacity">
                    Validate
                  </button>
                </div>
                <h3 className="text-white font-medium mt-4 mb-3">Server Id</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Your Server Id"
                    className="flex-1 bg-[#2A2A2A] border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00E676] focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Instant Delivery Badge */}
          <div className="flex items-center justify-center gap-2 mt-6 mb-6">
            <div className="bg-[#1A1A1A] border border-[#00E676] text-[#00E676] px-4 py-2 rounded-full text-sm font-medium flex items-center">
              <FaCheck className="mr-2" />
              Instant Delivery Supported
            </div>
          </div>

          {/* 3 Column Grid for Game Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Game Card 1 */}
            <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-xl overflow-hidden">
              <div className="p-4 flex items-center">
                <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/game1.jpg"
                    alt="Game 1"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h2 className="font-medium text-white text-sm">172 Diamonds</h2>
                  <p className="text-xs text-gray-400">(156 + 16 Bonus)</p>
                </div>
              </div>
              <div className="bg-[#00E676] text-black text-xs font-bold px-5 py-2 text-center whitespace-nowrap">
                ₹30.00
              </div>
            </div>

            {/* Game Card 2 */}
            <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-xl overflow-hidden">
              <div className="p-4 flex items-center">
                <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/game1.jpg"
                    alt="Game 2"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h2 className="font-medium text-white text-sm">
                    Double Diamond Event 165 Diamonds
                  </h2>
                  <p className="text-xs text-gray-400">(150+15 Bonus)</p>
                </div>
              </div>
              <div className="bg-[#00E676] text-black text-xs font-bold px-5 py-2 text-center whitespace-nowrap">
                ₹50.00
              </div>
            </div>

            {/* Game Card 3 */}
            <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-xl overflow-hidden">
              <div className="p-4 flex items-center">
                <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/game1.jpg"
                    alt="Game 3"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h2 className="font-medium text-white text-sm">42 Diamonds</h2>
                </div>
              </div>
              <div className="bg-[#00E676] text-black text-xs font-bold px-5 py-2 text-center whitespace-nowrap">
                ₹10.00
              </div>
            </div>
          </div>

          {/* Second Row of Game Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Game Card 4 */}
            <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-xl overflow-hidden">
              <div className="p-4 flex items-center">
                <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/game1.jpg"
                    alt="Game 4"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h2 className="font-medium text-white text-sm">86 Diamonds</h2>
                  <p className="text-xs text-gray-400">(80 + 6 Bonus)</p>
                </div>
              </div>
              <div className="bg-[#00E676] text-black text-xs font-bold px-5 py-2 text-center whitespace-nowrap">
                ₹15.00
              </div>
            </div>

            {/* Game Card 5 */}
            <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-xl overflow-hidden">
              <div className="p-4 flex items-center">
                <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/game1.jpg"
                    alt="Game 5"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h2 className="font-medium text-white text-sm">Weekly Diamond Pass</h2>
                  <p className="text-xs text-gray-400">(120 Diamonds)</p>
                </div>
              </div>
              <div className="bg-[#00E676] text-black text-xs font-bold px-5 py-2 text-center whitespace-nowrap">
                ₹25.00
              </div>
            </div>

            {/* Game Card 6 */}
            <div className="bg-[#1A1A1A] border-2 border-white/10 rounded-xl overflow-hidden">
              <div className="p-4 flex items-center">
                <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/game1.jpg"
                    alt="Game 6"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <h2 className="font-medium text-white text-sm">Starter Pack</h2>
                  <p className="text-xs text-gray-400">(50 Diamonds + Skin)</p>
                </div>
              </div>
              <div className="bg-[#00E676] text-black text-xs font-bold px-5 py-2 text-center whitespace-nowrap">
                ₹8.00
              </div>
            </div>
          </div>
          
        </main>
      </div>
      <Footer className="fixed bottom-0 left-0 right-0 z-50" />
    </div>
  );
}
