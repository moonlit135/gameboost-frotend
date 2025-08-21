"use client";

import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook Page",
    url: "",
    icon: FaFacebook,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500",
    hoverColor: "hover:bg-blue-600"
  },
  {
    name: "Instagram Page", 
    url: "",
    icon: FaInstagram,
    color: "from-pink-500 via-purple-500 to-orange-500",
    bgColor: "bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500",
    hoverColor: "hover:from-pink-600 hover:via-purple-600 hover:to-orange-600"
  },
  {
    name: "WhatsApp Channel",
    url: "", 
    icon: FaWhatsapp,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500",
    hoverColor: "hover:bg-green-600"
  },
  {
    name: "YouTube Channel",
    url: "",
    icon: FaYoutube, 
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500",
    hoverColor: "hover:bg-red-600"
  }
];

export default function FollowUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-gray-100 relative">
      <HeaderBar className="relative z-20" />

      <main className="relative z-10">
        {/* Modern Hero Banner */}
        <section className="relative w-full rounded-b-3xl min-h-[280px] md:min-h-[280px] overflow-hidden bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 -mt-9 pt-20">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(5, 150, 105, 0.8) 0%, transparent 50%),
              linear-gradient(135deg, rgba(16, 185, 129, 0.6) 0%, transparent 70%),
              linear-gradient(225deg, rgba(5, 150, 105, 0.4) 0%, transparent 50%),
              url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2310b981' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")
          `,
            animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }} />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center py-12">
            <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-emerald-100 bg-emerald-800/50 rounded-full backdrop-blur-sm border border-emerald-700/50">
              Join Our Community
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
              Stay Connected
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-100/90">
              Follow us on social media for the latest updates, gaming content, and exclusive offers!
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.slice(0, 3).map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-emerald-800/50 border border-emerald-700/50 flex items-center justify-center text-emerald-100 hover:bg-emerald-700/70 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent"></div>
        </section>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-10 pb-24">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm p-6 md:p-8 mb-8">
            {/* Social Media Section */}
            <div className="mt-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Our Social Channels
            </h2>
            <p className="text-emerald-100/80 max-w-2xl mx-auto">
              Connect with us across platforms to never miss an update, event, or exclusive content.
            </p>
          </div>

          {/* Social Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700/50 backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-900/20 hover:border-emerald-500/50 ${social.hoverColor}`}
                >
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r ${social.color}`} />
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-full ${social.bgColor} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/20`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                        {social.name}
                      </h3>
                      <p className="text-emerald-100/70 text-sm group-hover:text-emerald-100 transition-colors">
                        {social.url.replace('https://', '')}
                      </p>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="text-gray-500 group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r ${social.color}`} />
                </Link>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Level Up?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of gamers who are already part of our community. Get exclusive content, 
                early access to features, and connect with fellow gaming enthusiasts!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 rounded-full ${social.bgColor} text-white font-semibold hover:scale-105 transition-transform duration-200 flex items-center space-x-2 shadow-lg`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>Follow</span>
                    </Link>
                  );
                })}
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
