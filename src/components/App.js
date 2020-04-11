import React from 'react';
import './App.css';
import LandingPage from './LandingPage'
import NavigationBar from './NavigationBar'
function App() {
  return (
    <>
      <div className="App">
        <NavigationBar/> 
        <LandingPage/>
    </div>
       </>
  );
}

export default App;
