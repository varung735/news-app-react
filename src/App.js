import axios from 'axios';
import { useState } from 'react';
import News  from "./components/News.jsx";
import './App.css';

function App() {
  const API = process.env.REACT_APP_API_KEY;
  axios.defaults.baseURL = `https://newsdata.io/api/1/news?apikey=${API}&language=en`;

  const {isOpen, setIsOpen} = useState(true);
  
  const toggle = () => {setIsOpen(!isOpen)};

  const countries = [];
  const languages = [];
  const categories = ["business", "entertainment", "enviornment", "food", "health", "politics", "science", "sports", "Technology", "top", "world"];

  return (
    <>
      <div className='container'>

          {/* This div below contains navbar */}
          <div className='navbar'>
            <img src='/images/bars.svg' alt='bars.svg' className='bars-img' onClick={toggle}/>
            <h1 className='title'>Newsify</h1>
          </div>

          {/* This div below contains side-nav and main content */}
          <div className='content'>

              {/* side-nav */}
              <div className='side-nav'>
                <div className='side-nav-link'><h2 className='side-nav-title'>Home</h2></div>
                <div className='side-nav-link'>
                  <h2 className='side-nav-title'>Languages</h2>
                  <img src='/images/down.svg' alt='/images/down.svg' className='side-nav-icon'/>
                  <div className='hidden'></div>
                </div>
                <div className='side-nav-link'>
                  <h2 className='side-nav-title'>Country</h2>
                  <img src='/images/down.svg' alt='/images/down.svg' className='side-nav-icon'/>
                  <div className='hidden'></div>
                </div>
                <div className='side-nav-link'>
                  <h2 className='side-nav-title'>Category</h2>
                  <img src='/images/down.svg' alt='/images/down.svg' className='side-nav-icon'/>
                  <div className='hidden'></div>
                </div>
              </div>

              {/* content */}
              <div className='news-cards'>
                <News />
              </div>
          </div>

      </div>
    </>
  );
}

export default App;
