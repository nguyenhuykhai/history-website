import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Documents from './pages/Document/Documents';
import News from './pages/News/News';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <Navigation />

        <main className="container mx-auto px-4 py-4 sm:py-6 lg:py-8 flex-grow">
          {/* Mobile Layout (Sidebar above Routes) */}
          <div className="block lg:hidden mb-6">
            <Sidebar />
          </div>

          {/* Desktop Layout (Sidebar beside Routes) */}
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <div className="w-full lg:flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            
            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
              <Sidebar />
            </div>
          </div>
        </main>

        <footer className="bg-red-800 text-white py-4 sm:py-5 lg:py-6 mt-8">
          <div className="container mx-auto px-4">
            <h2 className="text-lg sm:text-xl font-bold mb-2">ĐẢNG BỘ HUYỆN HÓC MÔN</h2>
            <p className="text-sm sm:text-base mb-1">
              Địa chỉ: Số 122, đường Lê Thị Hà, Ấp 2, xã Tân Xuân, huyện Hóc Môn
            </p>
            <p className="text-sm sm:text-base">Điện thoại: 028.3891.0429</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;