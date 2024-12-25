import React from 'react';

const Documents = () => {
  return (
    <section className="bg-gray-100 p-4">
        <div className="container mx-auto">
            <h2 className="text-xl font-bold bg-red-800 text-white p-2 mb-4">TÀI LIỆU</h2>
            <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold">Danh sách tài liệu</h3>
            <ul>
                <li><a href="/documents/1">Tài liệu số 1</a></li>
                <li><a href="/documents/2">Tài liệu số 2</a></li>
                <li><a href="/documents/3">Tài liệu số 3</a></li>
            </ul>
            </div>
        </div>
    </section>
  );
};

export default Documents;
