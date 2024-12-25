import React from 'react';

const Sidebar = () => {
  const stats = {
    today: 10,
    week: 1000,
    total: 100000
  };

  return (
    <aside className="w-64">
      <div className="bg-white shadow rounded p-4 mb-4">
        <h3 className="font-bold text-red-800 mb-2">THỐNG KÊ TRUY CẬP</h3>
        <div className="space-y-2">
          <p>Hôm nay: {stats.today}</p>
          <p>Tuần này: {stats.week}</p>
          <p>Tất cả: {stats.total}</p>
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