"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaGift, FaCheckCircle } from "react-icons/fa";
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";

export default function RedeemCodePage() {
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate redeem logic
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
    setCode("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-gray-100">
     
      <HeaderBar />
      
      {/* Banner Section */}
      <section className="relative w-full rounded-b-3xl min-h-[280px] md:min-h-[280px] overflow-hidden bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 mt-10 flex items-center justify-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, #10b981 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
        <div className="text-center">
          <div className="flex flex-col items-center space-y-4">
            <FaGift className="text-white text-4xl sm:text-5xl" />
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Redeem Code</h1>
            <p className="text-white-400">Enter your code below to claim your rewards</p>
          </div>
        </div>
      
      </section>
      <main className="relative z-10 -mt-16 pb-24 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-2xl p-8 md:p-10">
          

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 font-medium mb-2" htmlFor="redeem-code">
                Enter Voucher Code
              </label>
              <div className="relative">
                <input
                  id="redeem-code"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter your voucher code"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-5 py-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => navigator.clipboard.readText().then(text => setCode(text))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-xs bg-gray-600 text-gray-300 rounded hover:bg-gray-500 transition-colors"
                >
                  Paste
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-semibold text-lg shadow-md transition-all duration-300 bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900  hover:from-green-600 hover:to-teal-500 hover:shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
            >
              Redeem Code
            </button>
          </form>

          {success && (
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center space-x-2 text-green-400 animate-fade-in">
              <FaCheckCircle className="text-xl" />
              <span>Code redeemed successfully! Your rewards have been added to your account.</span>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-gray-300 font-medium mb-3">How to redeem:</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full text-center text-sm mr-2 flex-shrink-0">1</span>
                <span>Enter your voucher code in the field above</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full text-center text-sm mr-2 flex-shrink-0">2</span>
                <span>Click "Redeem Code" to validate</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full text-center text-sm mr-2 flex-shrink-0">3</span>
                <span>Your rewards will be added to your account instantly</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
