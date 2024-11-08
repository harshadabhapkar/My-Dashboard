"use client";
import './styles/globals.css';
import Sidebar from './components/Sidebar';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
      </head>
      <body>
        <div className="flex h-screen overflow-hidden">
          <div className={`fixed md:relative z-20 ${isSidebarOpen ? 'block' : 'hidden'} md:block h-full`}>
            <Sidebar />
          </div>

          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
              onClick={toggleSidebar}
            ></div>
          )}

          <main className="flex-1 p-4 overflow-y-auto">
            <button
              className="md:hidden text-2xl p-2 focus:outline-none"
              onClick={toggleSidebar}
            >
              <HiMenu />
            </button>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
