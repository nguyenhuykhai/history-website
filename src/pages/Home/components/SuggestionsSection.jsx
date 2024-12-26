import React from "react";
import { suggestions } from "../../../data/mockSuggestions";

const SuggestionsSection = () => {
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
