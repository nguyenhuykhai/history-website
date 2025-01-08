"use client";
import React from "react";
import TanXuanLogo from "../../assets/image/home-page/tan-xuan-logo.webp";
import Facebook from "../../assets/image/social/facebook.svg";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="w-full sm:w-full lg:w-64">
      <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mb-4">
        <div className="flex items-center gap-4">
          <Image
            className="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-600"
            src={TanXuanLogo}
            alt="Tan Xuan Logo"
          />
          <div className="font-medium text-gray-900 dark:text-white">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Thực hiện bởi Đoàn
            </div>
            <div>Hội LHTN xã Tân Xuân</div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 cursor-pointer">
          {/* Facebook */}
          <div
            onClick={() =>
              window.open("https://www.facebook.com/xadoantanxuan")
            }
          >
            <div
              id="tooltip-jese"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Truy cập fanpage xã Tân Xuân
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <Image
              data-tooltip-target="tooltip-jese"
              className="w-10 h-10 rounded"
              src={Facebook}
              alt="Facebook"
            />
          </div>

          <div>
            <a
              onClick={() =>
                window.open("https://www.facebook.com/xadoantanxuan")
              }
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
            >
              Fanpage xã Tân Xuân
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
        <h3 className="font-bold text-red-800 dark:text-red-400 mb-2">LIÊN KẾT WEBSITE</h3>
        <select className="w-full border dark:border-gray-600 p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
          <option>Chọn trang liên kết</option>
        </select>
      </div>
    </aside>
  );
};

export default Sidebar;
