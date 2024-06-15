import { useEffect } from 'react';
import camera from '../images/camera.png';
import analysis from '../images/analysis.png';
import telescope from '../images/telescope.png';

function Navbar({currentTab, setCurrentTab}) {

    useEffect(() => {
        const navbarElements = document.getElementsByClassName('navbar-element');
        for (let i = 0; i < navbarElements.length; i++) {
            navbarElements[i].style.backgroundColor = '#e0e0de';
        }
        navbarElements[currentTab].style.backgroundColor = 'lightgrey';
    }, [currentTab])

    return (
    <div className="navbar">
        <div className="navbar-element" id="camera-button" onClick={() => setCurrentTab(0)}>
          <img src={camera} className="navbar-image" alt="Camera Controls"></img>
          <p className="navbar-text">Camera</p>
        </div>
        <div className="navbar-element" id="analysis-button" onClick={() => setCurrentTab(1)}>
          <img src={analysis} className="navbar-image" alt="Camera Controls"></img>
          <p className="navbar-text">Image Analysis</p>
        </div>
        <div className="navbar-element" id="telescope-button" onClick={() => setCurrentTab(2)}>
          <img src={telescope} className="navbar-image" alt="Camera Controls"></img>
          <p className="navbar-text">Telescope</p>
        </div>
      </div>)
}

export default Navbar;