import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Home from './pages/Home';
import Documents from './pages/Documents';
import News from './pages/News';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Navigation />

        <main className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Sidebar />
          </div>
        </main>

        <footer className="bg-red-800 text-white py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-2">ĐẢNG BỘ HUYỆN HÓC MÔN</h2>
            <p>
              Địa chỉ: Số 122, đường Lê Thị Hà, Ấp 2, xã Tân Xuân, huyện Hóc Môn
            </p>
            <p>Điện thoại: 028.3891.0429</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;