"use client";

import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaBolt, FaFileContract, FaLink, FaComment, FaExclamationTriangle,FaHeadset } from 'react-icons/fa';
import { BsFileEarmarkText } from 'react-icons/bs';
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex flex-col relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute -right-1/4 -top-1/4 w-full h-full bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full filter blur-3xl opacity-70 -z-10"></div>
      <HeaderBar />
      
      
      {/* Header Section */}
      <div className="relative w-full rounded-3xl pt-40 pb-20 bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900">
        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)',
        }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
            <BsFileEarmarkText className="text-2xl text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Terms & Conditions</h1>
        </div>
      </div>
      
      <main className="relative z-10 -mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex-1">
        {/* Main Content */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-2xl p-8 md:p-10">

          <div className="prose prose-invert max-w-none">
            <section className="mb-10 bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaBolt className="mr-3 text-green-400" />
                Welcome to GameBoost!
              </h2>
                  <div className="space-y-3 text-gray-300">
                    <p>
                      These terms and conditions outline the rules and regulations for the use of GameBoost's Website, located at{' '}
                      <a href="" className="text-green-400 hover:underline font-medium"></a>.
                    </p>
                    <p className="text-gray-400 italic">
                      By accessing this website we assume you accept these terms and conditions. Do not continue to use GameBoost if you do not agree to take all of the terms and conditions stated on this page.
                    </p>
                  </div>
            </section>    
              
            

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaFileContract className="mr-2 text-green-400" />
                License & Intellectual Property
              </h2>
              <p className="mb-4">
                Unless otherwise stated, GameBoost and/or its licensors own the intellectual property rights for all material on GameBoost. All intellectual property rights are reserved. You may access this from GameBoost for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-6 mb-3 flex items-center">
                <FaExclamationTriangle className="mr-2 text-yellow-400" />
                You must not:
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Republish material from GameBoost</li>
                <li>Sell, rent or sub-license material from GameBoost</li>
                <li>Reproduce, duplicate or copy material from GameBoost</li>
                <li>Redistribute content from GameBoost</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaComment className="mr-2 text-green-400" />
                User Comments
              </h2>
              <p className="mb-4">
                Parts of this website may offer users an opportunity to post and exchange opinions and information. GameBoost does not filter, edit, publish or review comments prior to their presence on the website.
              </p>
              <p className="mb-4">
                Comments do not reflect the views and opinions of GameBoost, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts them.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaLink className="mr-2 text-green-400" />
                Hyperlinking to our Content
              </h2>
              <p className="mb-4">
                The following organizations may link to our Website without prior written approval:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Government agencies</li>
                <li>Search engines</li>
                <li>News organizations</li>
                <li>Online directory distributors</li>
              </ul>
              <p>
                These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval; and (c) fits within the context of the linking party's site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaExclamationTriangle className="mr-2 text-yellow-400" />
                Content Liability & Disclaimer
              </h2>
              <p className="mb-4">
                We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that arise on your Website.
              </p>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Need Help?</h2>
              <p className="mb-6">
                If you have any questions about these Terms and Conditions, please contact us.
              </p>
              <button
                onClick={() => router.push('/support')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 cursor-pointer"
              >
                <FaHeadset className="mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}