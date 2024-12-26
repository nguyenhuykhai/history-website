import React from "react";
import { TanXuanLogo, Facebook } from "../assets";

const Sidebar = () => {
  return (
    <aside className="w-full sm:w-full lg:w-64">
      <div className="bg-white shadow rounded p-4 mb-4">
        <div class="flex items-center gap-4">
          <img
            class="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={TanXuanLogo}
            alt=""
          />
          <div class="font-medium dark:text-white">
            <div class="text-sm text-gray-500 dark:text-gray-400">
              Thực hiện bởi Đoàn
            </div>
            <div>Hội LHTN xã Tân Xuân</div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 cursor-pointer">
          {/* Facebook */}
          <div onClick={() => window.open("https://www.facebook.com/xadoantanxuan")}>
            <div
              id="tooltip-jese"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
             Truy cập fanpage xã Tân Xuân
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <img
              data-tooltip-target="tooltip-jese"
              class="w-10 h-10 rounded"
              src={Facebook}
              alt="Medium avatar"
            />
          </div>

          <div>
            <a onClick={() => window.open("https://www.facebook.com/xadoantanxuan")} class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Fanpage xã Tân Xuân</a>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h3 className="font-bold text-red-800 mb-2">LIÊN KẾT WEBSITE</h3>
        <select className="w-full border p-2">
          <option>Chọn trang liên kết</option>
        </select>
      </div>
    </aside>
  );
};

export default Sidebar;
