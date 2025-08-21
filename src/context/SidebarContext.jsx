"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    console.log('Opening sidebar');
    setIsOpen(true);
  };
  
  const closeSidebar = () => {
    console.log('Closing sidebar');
    setIsOpen(false);
  };
  
  const toggleSidebar = () => {
    console.log('Toggling sidebar. Current state:', isOpen);
    setIsOpen(prev => !prev);
  };

  // Close sidebar when route changes
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  useEffect(() => {
    closeSidebar();
  }, [pathname]);

  return (
    <SidebarContext.Provider 
      value={{ 
        isOpen, 
        openSidebar, 
        closeSidebar, 
        toggleSidebar 
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}
