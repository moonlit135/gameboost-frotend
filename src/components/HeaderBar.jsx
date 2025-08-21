"use client";

import { FaBars, FaUserCircle, FaSignOutAlt, FaPowerOff } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { useModal } from "@/context/ModalContext";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function HeaderBar() {
  const { toggleSidebar } = useSidebar();
  const { openAddMoney } = useModal();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Clear any user data from localStorage
    localStorage.removeItem('userPhone');
    localStorage.removeItem('profileImage');
    localStorage.removeItem('userName');
    
    // Redirect to login page or home page
    router.push('/');
    setIsMenuOpen(false);
  };

  const navigateToAccount = () => {
    router.push('/myaccount');
    setIsMenuOpen(false);
  };
  return (
    <div style={{
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      transition: 'all 0.3s ease',
      padding: '0.5rem 1rem',
      background: 'rgba(0, 0, 0, 0.19)',
      borderBottom: '1px solid rgba(34, 197, 94, 0.2)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backgroundImage: 'radial-gradient(at bottom, rgba(10, 160, 129, 0.1) 0%, transparent 70%)',
      borderBottomLeftRadius: '3rem',
      borderBottomRightRadius: '3rem'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4rem',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          height: '100%'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            paddingTop: '0.80rem'
          }}>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleSidebar();
              }}
              style={{
                padding: '0.5rem',
                borderRadius: '9999px',
                color: '#4ade80',
                transition: 'all 0.2s',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translateY(-0.90rem)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#f0fdf4';
              e.currentTarget.style.color = '#16a34a';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#4ade80';
            }}
            aria-label="Toggle menu"
          >
              <FaBars style={{ width: '1.25rem', height: '1.25rem' }} />
            </button>
          </div>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            style={{ height: '3.5rem', width: 'auto' }}
            priority
          />
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'flex-start',  /* Changed from 'center' to 'flex-start' */
          gap: '1.5rem',
          marginLeft: 'auto',
          paddingTop: '0.25rem'  /* Added to move everything down slightly */
        }}>
          <button 
            onClick={openAddMoney}
            className="flex items-center justify-center w-8 h-8 rounded-full focus:outline-none"
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              margin: 0,
              cursor: 'pointer',
              transition: 'transform 0.2s ease-in-out',
              transform: 'translateY(-0.25rem)'  /* Moves the coin icon up slightly */
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Wallet"
          >
            <FaCoins style={{ 
              width: '1.5rem', 
              height: '1.5rem', 
              color: '#FFD700',
              filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.2))'
            }} />
          </button>

          <div style={{ 
            position: 'relative',
            transform: 'translateY(-0.25rem)'  /* Moves the profile icon up slightly */
          }} ref={menuRef}>
            <button
              onClick={toggleMenu}
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '9999px',
                background: 'linear-gradient(to bottom right, #f0fdf4, #dcfce7)',
                border: '1px solid #dcfce7',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
                margin: 0
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
              }}
              aria-label="User menu"
              aria-expanded={isMenuOpen}
            >
              <FaUserCircle style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} />
            </button>

            {isMenuOpen && (
              <div style={{
                position: 'absolute',
                right: 0,
                marginTop: '0.5rem',
                width: '14rem',
                borderRadius: '0.75rem',
                backgroundColor: 'rgba(16, 185, 129, 0.1) 0%',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
                zIndex: 50,
                overflow: 'hidden',
                transition: 'all 0.2s',
                border: '1px solid rgba(34, 197, 94, 0.2)'
              }}>
                <div style={{ padding: '0.25rem 0' }}>
                  <button
                    onClick={navigateToAccount}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      fontSize: '0.875rem',
                      color: '#e5e7eb',
                      display: 'flex',
                      alignItems: 'center',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0fdf4';
                      e.currentTarget.style.color = '#166534';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#e5e7eb';
                    }}
                  >
                    <FaUserCircle style={{ marginRight: '0.75rem', color: '#9ca3af' }} />
                    My Account
                  </button>
                  <div style={{ borderTop: '1px solid #f3f4f6', margin: '0.25rem 0' }}></div>
                  <button
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      fontSize: '0.875rem',
                      color: '#dc2626',
                      display: 'flex',
                      alignItems: 'center',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#fef2f2';
                      e.currentTarget.style.color = '#991b1b';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#dc2626';
                    }}
                  >
                    <FaSignOutAlt style={{ marginRight: '0.75rem' }} />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
