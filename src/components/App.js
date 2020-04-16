import React from 'react';
import './App.css';
import LandingPage from './LandingPage'
import NavigationBar from './NavigationBar'
import Mission from './Mission'
import ImgMediaCard from './MediaCard'
import ComposedTextField from './ComposedTextField'
import ImageAvatars from './ImageAvatars'
import Footer from './Footer'

function App() {
  return (
    <>
        <NavigationBar/> 
      <LandingPage />
      <Mission />
      <ImageAvatars />
      <hr/>
      <ImgMediaCard />
      <hr/>
      <ComposedTextField />
      <Footer/>


       </>
  );
}

export default App;
