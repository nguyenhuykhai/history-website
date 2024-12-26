import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: 'Trang chủ', path: '/' },
    { title: 'Giới thiệu', path: '/about' },
    { title: 'Tin tức', path: '/news' },
    { title: 'Hệ thống tài liệu', path: '/documents' },
    { title: 'Dịch vụ công trực tuyến', path: '/services' },
    { title: 'Liên hệ', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-800">
      <div className="container mx-auto px-4">
        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center justify-end py-4">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className="text-white px-4 py-3 block hover:bg-red-700 text-sm xl:text-base"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile navigation */}
        <ul className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className="text-white px-4 py-3 block hover:bg-red-700 border-b border-red-700"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;