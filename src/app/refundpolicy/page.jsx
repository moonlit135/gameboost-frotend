"use client";

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaWallet, FaPercentage, FaInfoCircle, FaHeadset, FaBolt } from 'react-icons/fa';
import { BsCashStack, BsCreditCard } from 'react-icons/bs';
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";



export default function RefundPolicy() {
  const router = useRouter();

  const handleContactSupport = () => {
    router.push('/support');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-gray-100">
      
      <HeaderBar />
      
      {/* Modern Glassmorphism Banner */}
      <section className="relative w-full rounded-b-3xl min-h-[280px] md:min-h-[280px] overflow-hidden bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 mt-10 flex items-center justify-center">
        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)',
        }}></div>

        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 15% 25%, rgba(5, 150, 105, 0.5) 0%, transparent 25%),
            radial-gradient(circle at 85% 75%, rgba(16, 185, 129, 0.5) 0%, transparent 25%),
            linear-gradient(45deg, rgba(5, 150, 105, 0.1) 0%, transparent 100%)
          `,
          animation: 'gradientShift 15s ease infinite',
          backgroundSize: '200% 200%',
        }}></div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-teal-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/5 rounded-full mix-blend-overlay filter blur-2xl animate-float animation-delay-4000"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          {/* Animated Icon Container */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-6"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl transform rotate-6"></div>
            <div className="relative w-15 h-15 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
              <BsCashStack className="text-white text-4xl" />
            </div>
          </motion.div>

          {/* Animated Title */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100"
          >
            Refund Policy
          </motion.h1>
          
          {/* Animated Subtitle */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-emerald-100/90 max-w-2xl leading-relaxed"
          >
            Your satisfaction is our top priority
          </motion.p>

          {/* Decorative Elements */}
          <div className="absolute -bottom-10 left-1/4 w-32 h-32 bg-emerald-400/10 rounded-full filter blur-xl"></div>
          <div className="absolute -top-10 right-1/4 w-24 h-24 bg-teal-400/10 rounded-full filter blur-xl"></div>
        </div>

        {/* Animated Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent">
          <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-teal-400 animate-pulse"></div>
        </div>
      </section>

      <main className="relative z-10 -mt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex-1">
        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-2xl p-8 md:p-10">
          {/* Welcome Mini Card */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center">
              <FaBolt className="mr-3 text-green-400" />
              Welcome to GameBoost!
            </h2>
            <p className="text-gray-300">
              Ensuring the privacy and security of our users is a top priority at GameBoost. This Refund Policy outlines the procedures related to refunds for our services.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaMoneyBillWave className="mr-3 text-green-400" />
                Add Funds Refund
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>In case the customer faces an issue where the funds are deducted from their bank account, but not added to their GameBoost wallet, we assure a swift resolution in 7 working days.</li>
                <li>The customer is required to report such incidents to our customer support within 3 days of the transaction.</li>
                <li>Upon verification of the issue, if the funds are confirmed to be deducted and not credited to the customer's wallet, the refund will be initiated promptly.</li>
                <li>The refund amount will be credited to the customer's bank account within 7 working days from the date of the complaint.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaWallet className="mr-3 text-green-400" />
                Recharge and Bill Payment Refund
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>If a customer encounters any problem during the recharge or bill payment process, resulting in an unsuccessful transaction, the refund process will be initiated.</li>
                <li>Customers must notify our customer support within 7 days of the failed transaction for a refund request.</li>
                <li>Refunds will be processed after verifying the unsuccessful transaction, and the amount will be credited to the customer's GameBoost wallet.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaPercentage className="mr-3 text-green-400" />
                Flat Discount Refund
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>If a customer faces an issue where the flat discount is not applied correctly during a recharge, they can report the problem to our customer support.</li>
                <li>After verification, if it is confirmed that the discount was not applied as intended, the refund for the discounted amount will be credited to the customer's GameBoost wallet.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaInfoCircle className="mr-3 text-green-400" />
                General Refund Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refund requests must be made within the specified time frame mentioned for each scenario.</li>
                <li>Refunds will only be processed if the issue is reported through our official customer support channels.</li>
                <li>Customers are required to provide accurate and necessary information for the refund verification process.</li>
                <li>GameBoost reserves the right to deny refund requests if fraudulent activities or misuse of the refund policy is suspected.</li>
                <li>This refund policy is subject to change, and any updates will be communicated to the customers through the GameBoost app or official communication channels.</li>
              </ul>
              <p className="mt-4 italic text-gray-300">
                By using GameBoost, customers agree to abide by this refund policy. We are committed to providing a seamless and secure experience for all our users.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-700 text-center">
              <h2 className="text-2xl font-bold text-white mb-6">Need Help?</h2>
              <p className="mb-6 max-w-2xl mx-auto text-gray-300">
                If you have any questions about our Refund Policy, please don't hesitate to contact our support team.
              </p>
              <button
                onClick={handleContactSupport}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                <FaHeadset className="mr-2" />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}