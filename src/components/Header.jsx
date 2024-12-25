import React from 'react';
import logo from '../assets/image/home-page/banner.webp';

const Header = () => {
  return (
    <header 
      className="relative bg-cover bg-center h-48 flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-3xl font-bold">ĐẢNG BỘ HUYỆN HÓC MÔN</h1>
        <p className="text-lg py-2">BAN CHẤP HÀNH ĐẢNG BỘ XÃ TÂN XUÂN</p>
        <p className="text-2xl text-yellow-200 font-bold py-2">LỊCH SỬ ĐẢNG BỘ XÃ TÂN XUÂN GIAI ĐOẠN 2000 - 2020</p>
      </div>
    </header>
  );
};

export default Header;