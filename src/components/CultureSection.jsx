import React from 'react';

const CultureSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-800 mb-4">Di sản Văn hóa</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Đình Tân Thới Trung – “Địa chỉ đỏ” lịch sử cách mạng.</li>
          <li>Chùa Vạn Phước – nơi nuôi giấu cán bộ cách mạng trong kháng chiến.</li>
          <li>Nhà Ông Võ Văn Thu – di tích gắn liền với các hoạt động cách mạng.</li>
        </ul>
      </div>
    </section>
  );
};

export default CultureSection;