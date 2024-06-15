import { useEffect, useState } from "react";
import './App.css';
import Evora from './components/Evora';
import Analysis from './components/Analysis';
import Telescope from './components/Telescope';
import Navbar from './components/Navbar';
import logo from './images/aueg_logo.png';
import WeatherIcon from './images/weather_icon.png';

// https://github.com/ericmandel/js9

// Use python http.server to serve downloaded files?

/**
 * Main page of MRO Controls. Contains all child elements.
 */
function App() {

  const [displayedImage, setDisplayedImage] = useState(process.env.PUBLIC_URL + '/coma.fits')
  const [isLoading, setIsLoading] = useState(true)
  const [currentTab, setCurrentTab] = useState(0)

  useEffect(
    () => {
      if (isLoading) {
        // On page load, display the default image and set the zoom to fit (after some
        // delays to allow JS9 to load and display on the image properly).
        setTimeout(
          () => {
            window.JS9.Load(displayedImage);
            setTimeout(() => window.JS9.SetZoom('toFit'), 1000);
            setIsLoading(false);
          }, 2000)
        } else {
          // For images captured by the camera after the initial load, refresh the 
          // image, which preservers the current settings (e.g. zoom, pan, etc.)
          window.JS9.RefreshImage(displayedImage);
        }
      }, [displayedImage, isLoading])

  return (
    <div className='App' >
      <h1 className='Title' style={{fontSize: '20px'}}>Manastash Ridge Observatory Controls</h1>

      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab}/>

      
      <div className="Interface">
        {currentTab === 0 && <Evora setDisplayedImage={setDisplayedImage}/>}
        {currentTab === 1 && <Analysis />}
        {currentTab === 2 && <Telescope />}
        
        <div className="display">
          <div className="JS9Menubar"></div>
          <div className="JS9"></div>
          <div className="JS9Statusbar"></div>
        </div>
      </div>

      <a href='https://sites.google.com/a/uw.edu/mro/' target='_blank' rel='noreferrer'>
        <img src={logo} className='Logo' alt='Logo'/>
      </a>

      <a href='https://www.wunderground.com/dashboard/pws/KWAELLEN214' target='_blank' rel='noreferrer'>
        <img src={WeatherIcon} className='WeatherIcon' alt='WeatherIcon'/>
      </a>
    </div>

  );
}

export default App;
