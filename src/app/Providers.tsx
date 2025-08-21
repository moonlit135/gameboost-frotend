"use client";

import { SidebarProvider } from "@/context/SidebarContext";
import { ModalProvider } from "@/context/ModalContext";
import Sidemenu from "@/components/Sidemenu";
import AddMoneyModal from "@/components/AddMoneyModal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <SidebarProvider>
        <div className="relative">
          <Sidemenu />
          <div className="min-h-screen">
            {children}
            <AddMoneyModal />
          </div>
        </div>
      </SidebarProvider>
    </ModalProvider>
  );
}
