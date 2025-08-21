"use client";
import "../app/global.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaNewspaper,
  FaHouse,
  FaGear,
  FaUsers,
  FaHeadset
} from "react-icons/fa6";

const navItems = [
  {
    href: "/support",
    label: "Need Support",
    icon: FaHeadset,
    aria: "NeedSupport",
  },
  {
    href: "/followus",
    label: "Follow Us",
    icon: FaUsers,
    aria: "Contact Us",
  },
  {
    href: "/",
    label: "Home",
    icon: FaHouse,
    aria: "Home",
  },
  {
    href: "/news",
    label: "News",
    icon: FaNewspaper,
    aria: "News",
  },
  {
    href: "/settings",
    label: "Settings",
    icon: FaGear,
    aria: "Settings",
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 w-full z-[9999] h-14 rounded-t-2xl px-2 pb-1 pt-2 backdrop-blur-lg bg-gradient-to-t from-black/95 to-black/80"
      role="navigation"
      aria-label="Bottom Navigation"
      style={{
        borderTop: '1px solid rgba(34, 197, 94, 0.2)',
        boxShadow: '0 -10px 30px -10px rgba(16, 185, 129, 0.2)',
        backgroundImage: 'radial-gradient(at top, rgba(16, 185, 129, 0.1) 0%, transparent 70%)'
      }}
    >
      <ul className="flex items-center h-full w-full px-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <li key={item.href} className="flex-1 h-full">
              <Link
                href={item.href}
                aria-label={item.aria}
                className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 focus:outline-none relative group ${
                  isActive 
                    ? "text-green-400" 
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {isActive && (
                  <div className="absolute -top-2 w-10 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                )}
                <div className={`p-1.5 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br from-green-500/20 to-emerald-600/20' 
                    : 'hover:bg-white/5'
                }`}>
                  <Icon
                    className={`w-5 h-5 transition-all duration-300 ${
                      isActive 
                        ? 'scale-110 text-green-400' 
                        : 'group-hover:scale-105 text-current'
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <span className={`text-[10px] font-medium mt-1 transition-all duration-300 ${
                  isActive ? 'text-green-400 font-semibold' : 'text-gray-400'
                }`}>
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}