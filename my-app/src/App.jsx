import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Amenities from './pages/Amenities';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Inquiry from './pages/Inquiry';
import './App.css';
import Login from './components/Login';
import ContactCards from './pages/ContactCards';
import InquiryList from './pages/InquiryList';
import Pack from './pages/Pack';
import GalleryAdmin from './pages/GalleryAdmin';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/contact-details" element={<ContactCards/>}/>
            <Route path="/inquiry-details" element={<InquiryList/>}/>
            <Route path="/manage-packages" element={<Pack/>}/>
            <Route path="/manage-images" element={<GalleryAdmin/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;