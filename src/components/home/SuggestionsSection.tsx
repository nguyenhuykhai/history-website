import React from "react";

const SuggestionsSection = () => {
  const suggestions = [
    "Nhận thức đúng về cuộc cách mạng tinh gọn bộ máy",
    "Giữ gìn uy tín đảng viên góp phần bảo vệ nền tảng tư tưởng của Đảng",
    "Thực hiện tốt chức năng đối ngoại trong tình hình mới",
  ];

  return (
    <section className="bg-gray-100 p-4 mb-10">
      <h3 className="text-lg font-bold text-red-800 mb-4">Góp Ý Xây Dựng Đảng</h3>
      <ul className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="text-gray-700 text-sm">
            {suggestion}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SuggestionsSection;
