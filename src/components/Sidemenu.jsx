"use client";

import { usePathname, useRouter } from 'next/navigation';
import { FaHome, FaWallet, FaTrophy, FaHistory, FaGift, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState, useContext } from 'react';
import { useSidebar } from "@/context/SidebarContext";
import { useModal } from "@/context/ModalContext";

export default function Sidemenu() {
  const { isOpen, closeSidebar } = useSidebar();
  const { openAddMoney } = useModal();
  const router = useRouter();
  const pathname = usePathname();
  const [profileImage, setProfileImage] = useState('');
  const [userName, setUserName] = useState('User');
  const [phoneNumber, setPhoneNumber] = useState('');

  console.log('Sidemenu rendered. isOpen:', isOpen);

  // Fetch user data from localStorage
  useEffect(() => {
    console.log('Fetching user data from localStorage');
    const savedImage = localStorage.getItem('profileImage');
    const userName = localStorage.getItem('userName') || 'User';
    const userPhone = localStorage.getItem('userPhone') || '';
    
    console.log('Loaded user data:', { savedImage, userName, userPhone });
    if (savedImage) setProfileImage(savedImage);
    setUserName(userName);
    setPhoneNumber(userPhone);
  }, []);

  const navItems = [
    { icon: <FaHome className="text-xl" />, label: 'Home', path: '/' },
    { icon: <FaWallet className="text-xl" />, label: 'Add Money', path: '/add-money' },
    { icon: <FaTrophy className="text-xl" />, label: 'Leaderboard', path: '/leaderboard' },
    { icon: <FaHistory className="text-xl" />, label: 'Purchase History', path: '/purchasehistory' },
    { icon: <FaGift className="text-xl" />, label: 'Redeem Code', path: '/redeemcode' },
  ];

  const handleNavigation = (item) => {
    if (item.path === '/add-money') {
      openAddMoney();
    } else {
      router.push(item.path);
    }
    closeSidebar();
  };

  return (
    <div 
      className={`fixed inset-0 z-[10000] overflow-hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ zIndex: 10000 }}
    >
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 z-[9999] ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: 9999 }}
        onClick={closeSidebar}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 w-64 bg-black text-white transform transition-transform duration-300 ease-in-out z-[10000] rounded-r-3xl flex flex-col border-r border-white/20 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          zIndex: 10000,
          boxShadow: '-4px 0 15px rgba(134, 239, 172, 0.3)',
        }}
      >
        {/* Close Button */}
        <button 
          onClick={closeSidebar}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
        >
          <FaTimes className="text-2xl" />
        </button>

        {/* Logo Section */}
        <div className="pt-6 pb-4 px-6 flex justify-center">
          <div className="relative w-32 h-16">
            <Image 
              src="/images/logo.png" 
              alt="Credimi" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center pt-4 pb-1 px-6">
          <div className="w-full h-px bg-gray-700  mb-10"></div>
          <div className="relative mb-4">
            <div className="w-48 h-32 rounded-xl bg-gray-700 overflow-hidden border-2 border-green-400/70 shadow-[0_0_15px_rgba(134,239,172,0.3)]">
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">
                  {userName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>
          <h3 className="text-lg font-bold text-center">{userName}</h3>
          <p className="text-sm text-gray-400 mb-4">{phoneNumber || 'No number'}</p>
          <div className="w-full h-px bg-gray-700"></div>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => handleNavigation(item)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 transform hover:translate-x-2 w-full text-left ${
                    pathname === item.path 
                      ? 'bg-gradient-to-r from-green-900/30 to-transparent text-green-300 border-l-4 border-green-400 shadow-[0_0_15px_rgba(134,239,172,0.2)]' 
                      : 'text-gray-300 hover:bg-gradient-to-r from-green-900/20 to-transparent hover:text-green-300 hover:border-l-4 hover:border-green-400/50'
                  }`}
                >
                  <span className="mr-4">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
       
        
      </div>
    </div>
  );
}