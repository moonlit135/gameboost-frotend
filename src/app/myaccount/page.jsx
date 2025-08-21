"use client";

import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";
import { FaCamera } from "react-icons/fa";
import { useState } from "react";

// Simulate fetching phone number from login/session
const getLoggedInPhoneNumber = () => {
  // Replace this with your actual session/user context logic
  return "+91 9707514942";
};

export default function MyAccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const phoneNumber = getLoggedInPhoneNumber();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
      // Here you would typically upload the image to your server
      // For example: uploadProfileImage(file);
    }
  };

  const handleCameraClick = () => {
    // Trigger the hidden file input
    document.getElementById('profile-image-upload').click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission to your backend
    setShowSuccess(true);
    
    // Hide the success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex flex-col relative overflow-hidden">
      <HeaderBar />
      
      {/* Header Section */}
      <div className="relative w-full rounded-3xl pt-16 pb-8 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900">
          {/* Dynamic Grid Pattern */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)',
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
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 bg-emerald-400/10 rounded-full mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 -ml-48 -mb-48 bg-teal-400/10 rounded-full mix-blend-overlay"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
            <div className="flex flex-col items-center">
              {/* Profile Image */}
              <div className="relative group mb-4 md:mb-6">
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-emerald-500/90 flex items-center justify-center text-4xl md:text-5xl font-bold text-white shadow-2xl border-4 border-white/90 overflow-hidden group-hover:scale-105 transition-all duration-500">
                  {previewImage ? (
                    <img 
                      src={previewImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl md:text-5xl">
                      {name ? name.charAt(0).toUpperCase() : 'U'}
                    </span>
                  )}
                </div>
                <input 
                  type="file" 
                  id="profile-image-upload"
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                <div 
                  onClick={handleCameraClick}
                  className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-emerald-100 transition-all duration-300 border-2 border-emerald-500"
                  title="Change profile picture"
                >
                  <FaCamera className="text-emerald-700 text-lg" />
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="text-center">
                <div className="inline-block px-4 py-1.5 mb-3 text-xs font-medium tracking-wide text-emerald-100 bg-emerald-800/60 rounded-full backdrop-blur-sm border border-emerald-700/50 uppercase">
                  Profile Settings
                </div>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {name || 'Welcome Back'}
                </h1>
                <p className="text-emerald-100/90 text-sm md:text-base mb-4 px-4">
                  {email || 'Update your profile information and manage your account settings'}
                </p>
                <div className="flex items-center justify-center text-xs md:text-sm text-emerald-100/80">
                  <span className="flex items-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Last updated: {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 -mt-16 md:-mt-24 mb-8 md:mb-16">
        {/* Main Form Card */}
        <form onSubmit={handleSubmit} className="w-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-emerald-500/20 shadow-xl rounded-2xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 flex flex-col gap-4 sm:gap-5 md:gap-6 hover:shadow-emerald-900/20 hover:border-emerald-500/30 transition-all duration-300">
          <div>
            <label className="block text-gray-300 font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-gray-700/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border border-gray-600/50 focus:border-emerald-400/50 transition-all duration-200"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-gray-700/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border border-gray-600/50 focus:border-emerald-400/50 transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-1">Mobile Number</label>
            <input
              type="text"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
              className="w-full bg-gray-700/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border border-gray-600/50 focus:border-emerald-400/50 transition-all duration-200"
              placeholder="Enter your mobile number"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-1">Gender</label>
            <select
              className="w-full bg-gray-700/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border border-gray-600/50 focus:border-emerald-400/50 transition-all duration-200"
              value={gender}
              onChange={e => setGender(e.target.value)}
            >
              <option value="" disabled className="text-gray-400">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-1">State</label>
            <select
              className="w-full bg-gray-700/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border border-gray-600/50 focus:border-emerald-400/50 transition-all duration-200"
              value={state}
              onChange={e => setState(e.target.value)}
            >
              <option value="" className="text-gray-400">Select State</option>
              <option value="assam">Assam</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="gujarat">Gujarat</option>
              <option value="odisha">Odisha</option>
              <option value="telangana">Telangana</option>
            </select>
          </div>
          <button 
            type="submit" 
            className="mt-6 w-full py-4 rounded-xl text-white font-semibold text-lg shadow-md transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 hover:shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
          >
            Update
          </button>
          
          {showSuccess && (
            <div className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in border border-emerald-400/30 backdrop-blur-sm">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Profile updated successfully!</span>
            </div>
          )}
          
          <style jsx global>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
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
            .animate-fade-in {
              animation: fadeIn 0.3s ease-out forwards;
            }
          `}</style>
        </form>
      </main>
      <Footer />
    </div>
  );
}
