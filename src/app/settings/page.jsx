"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaArrowLeft, 
  FaUser, 
  FaBell, 
  FaLock, 
  FaCog, 
  FaQuestionCircle, 
  FaInfoCircle,
  FaSignOutAlt,
  FaFileAlt,
  FaMoneyBillWave,
  FaShieldAlt,
  FaUserCog,
  FaPhone,
  FaCamera,
  FaTimes,
  FaEnvelope,
  FaUserFriends,
  FaChild,
  

} from 'react-icons/fa';
import { MdAccountBalanceWallet } from 'react-icons/md';
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';



export default function SettingsPage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch user data and profile image
  useEffect(() => {
    const userPhone = localStorage.getItem('userPhone') || '';
    const savedImage = localStorage.getItem('profileImage');
    setPhoneNumber(userPhone);

    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userPhone');
    router.push('/login');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const settingItems = [
    { icon: <FaUser className="text-blue-500" />, label: 'My Account', path: '/myaccount' },
    { icon: <FaShieldAlt className="text-green-400" />, label: 'Privacy Policy', path: '/Privacypolicy' },
    { icon: <FaFileAlt className="text-gray-500" />, label: 'Terms & Conditions', path: '/termsandcondition' },
    { icon: <FaMoneyBillWave className="text-green-600" />, label: 'Refund Policy', path: '/refundpolicy' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-gray-100 overflow-x-hidden">
      <HeaderBar />

      {/* Header Section */}
      <div className="relative w-full rounded-3xl pt-40 pb-20 bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900">
        {/* Dynamic Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)',
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4">
            <FaUserCog className="text-white text-3xl md:text-4xl" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Account Settings
          </h1>
          <p className="text-green-100 max-w-lg mx-auto">
            Manage your profile and account preferences
          </p>
        </div>
      </div> 

      <main className="relative z-10 -mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex-1">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-2xl p-8 md:p-10">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-green-500/30">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-green-100 bg-gray-800">
                    {phoneNumber ? phoneNumber.charAt(0).toUpperCase() : 'U'}
                  </div>
                )}
                <button
                  className="absolute -bottom-2 right-0 bg-green-600 hover:bg-green-500 text-white rounded-full p-2 shadow-lg transition-all duration-300 transform hover:scale-110"
                  onClick={() =>
                    document.getElementById('profileImageInput').click()
                  }
                >
                  <FaCamera className="text-sm" />
                </button>
                <input
                  type="file"
                  id="profileImageInput"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-4">John Doe</h2>
            <p className="text-gray-400 mt-1">
              {phoneNumber || 'No phone number'}
            </p>
          </div>

          {/* Settings List */}
          <div className="space-y-6">
            {settingItems.map((item, index) => (
              <div
                key={index}
                onClick={() => router.push(item.path)}
                className="flex items-center p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/70 cursor-pointer transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 mr-4">
                  {item.icon}
                </div>
                <span className="flex-1 text-gray-200 font-medium">
                  {item.label}
                </span>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            ))}

            {/* Logout Button */}
            <div
              onClick={handleLogout}
              className="flex items-center p-4 bg-red-900/30 rounded-xl hover:bg-red-900/50 cursor-pointer transition-all duration-300 border border-red-900/50 hover:border-red-800/70 mt-8"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-900/50 mr-4">
                <FaSignOutAlt className="text-red-400" />
              </div>
              <span className="flex-1 text-red-300 font-medium">Logout</span>
              <svg
                className="w-5 h-5 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
