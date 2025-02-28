import React, { useState } from 'react';
import { 
  ShoppingCart, Users, BarChart, Package, 
  FileText, Settings, HelpCircle, Calendar, 
  FolderOpen, ChevronDown, Layout, Mail, 
  Brain, Boxes, Search, Bell, Menu
} from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const mainMenuItems = [
    { id: 'dashboard', label: 'DASHBOARD', icon: Layout },
    { id: 'ecommerce', label: 'Ecommerce', icon: ShoppingCart, color: 'text-blue-500' },
    { id: 'project', label: 'Project', icon: FileText },
    { id: 'marketing', label: 'Marketing', icon: Mail },
    { id: 'analytic', label: 'Analytic', icon: BarChart },
  ];

  const conceptMenuItems = [
    { id: 'ai', label: 'AI', icon: Brain, hasSubmenu: true },
    { id: 'projects', label: 'Projects', icon: Boxes, hasSubmenu: true },
    { id: 'customer', label: 'Customer', icon: Users, hasSubmenu: true },
    { id: 'products', label: 'Products', icon: Package, hasSubmenu: true },
    { id: 'orders', label: 'Orders', icon: ShoppingCart, hasSubmenu: true },
    { id: 'account', label: 'Account', icon: Settings, hasSubmenu: true },
    { id: 'help', label: 'Help Center', icon: HelpCircle, hasSubmenu: true },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'fileManager', label: 'File Manager', icon: FolderOpen },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#1E1E1E] text-gray-300 p-4 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <img src="https://ecme-react.themenate.net/img/logo/logo-dark-full.png" alt="Ecme Logo" className="w-32 h-auto" />
        </div>

        {/* Main Menu */}
        <div className="space-y-2">
          {mainMenuItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg transition-colors
                ${item.color || 'text-gray-300'} 
                ${activeSection === item.id ? 'bg-gray-700' : 'hover:bg-gray-800'}`}
              onClick={() => setActiveSection(item.id)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Concepts Section */}
        <div className="mt-8">
          <h3 className="px-3 mb-4 text-xs font-semibold text-gray-500">CONCEPTS</h3>
          <div className="space-y-1">
            {conceptMenuItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors
                  ${activeSection === item.id ? 'bg-gray-700' : 'hover:bg-gray-800'}`}
                onClick={() => {
                  setActiveSection(item.id);
                  if (item.hasSubmenu) toggleMenu(item.id);
                }}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </div>
                {item.hasSubmenu && (
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform ${expandedMenus[item.id] ? 'rotate-180' : ''}`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-16 bg-[#1E1E1E] border-b border-gray-700 flex items-center justify-between px-6">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <Menu className="text-gray-400 cursor-pointer hover:text-gray-200" size={20} />
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-gray-800 text-gray-300 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Bell className="text-gray-400 cursor-pointer hover:text-gray-200" size={20} />
            <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full cursor-pointer" />
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 bg-[#121212] p-6">
          {/* Your page content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;