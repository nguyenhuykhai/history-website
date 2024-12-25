import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navItems = [
    { title: 'Trang chủ', path: '/' },
    { title: 'Giới thiệu', path: '/about' },
    { title: 'Tin tức', path: '/news' },
    { title: 'Hệ thống tài liệu', path: '/documents' },
    { title: 'Dịch vụ công trực tuyến', path: '/services' },
    { title: 'Liên hệ', path: '/contact' }
  ];

  return (
    <nav className="bg-red-800">
      <div className="container mx-auto px-4">
        <ul className="flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className="text-white px-4 py-3 block hover:bg-red-700"
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