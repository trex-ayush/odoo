import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import AboutPage from './Components/AboutPage'
import Eyes from './Components/eyes'
import Features from './Components/Features'
// import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Client from './Components/Client' ;
import ReadyToStart from './Components/ReadyToStart'  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoverPage from './Components/CoverPage';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import UserProfile from './Components/UserProfile';

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/" element={<CoverPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={
          <div className='min-h-screen w-full bg-black text-white'>
            <Navbar/>
            <LandingPage/>
            <Marquee/>
            <AboutPage/>
            <Eyes/>
            <Features/>
            <Client/>
            <ReadyToStart/>
            {/* <Cards/> */}
            <Footer/>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
