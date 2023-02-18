import axios from 'axios';
import { useState } from 'react';
import News from "./components/News.jsx";
import './App.css';

function App() {

  const API = process.env.REACT_APP_API_KEY;
  axios.defaults.baseURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API}`;

  const [issideOpen, setsideOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  const countries = [];
  const categories = ["business", "entertainment", "health", "science", "sports", "Technology", "general"];

  return (
    <>
      <div className='container'>

          {/* This div below contains navbar */}
          <div className='navbar'>
            <img src='/images/bars.svg' alt='bars.svg' className='bars-img'/>
            <h1 className='title'>Newsify</h1>
          </div>

          {/* This div below contains side-nav and main content */}
          <div className='content'>

              {/* side-nav */}
              <div className='side-nav'>
                <div className='side-nav-link'>

                  <div className='link'>
                    <h2 className='side-nav-title'>Categories</h2>
                    <img src='/images/down.svg' alt='/images/down.svg' className='side-nav-icon' onClick={(event) => {setIsLangOpen(!isLangOpen)}}/>
                  </div>

                  <div className='accordion'>
                    {isLangOpen && categories.map((category) => {
                        return <div className='item'><h2>{category}</h2></div>
                    })}
                  </div>

                </div>

                <div className='side-nav-link'>

                  <div className='link'>
                    <h2 className='side-nav-title'>Country</h2>
                    <img src='/images/down.svg' alt='/images/down.svg' className='side-nav-icon'/>
                  </div>

                  <div className='accordion'>
                    {/* {isOpen && categories.map((category) => {
                        return <div className='item'><h2>{category}</h2></div>
                    })} */}
                  </div>

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
