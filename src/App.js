import axios from 'axios';
import { useState } from 'react';
import News from "./components/News.jsx";
import SideNav from "./components/SideNav";
import './App.css';

function App() {

  const [issideOpen, setsideOpen] = useState(false);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");

  const API = process.env.REACT_APP_API_KEY;
  axios.defaults.baseURL = `https://newsapi.org/v2/top-headlines?country=${country}&category${category}&apiKey=${API}`;

  // call back function to get data from side bar component
  const setCategoryData = (category) => {
      setCategory(category);
      console.log(category);
    }
    
  const setCountryData = (country) => {
      setCountry(country);
      console.log(country);
  }

  return (
    <>
      <div className='container'>

          {/* This div below contains navbar */}
          <div className='navbar'>
            <img src='/images/bars.svg' alt='bars.svg' className='bars-img' onClick={(event) => {setsideOpen(!issideOpen)}}/>
            <h1 className='title'>Newsify</h1>
          </div>

          {/* This div below contains side-nav and main content */}
          <div className='content'>

              {/* side-nav */}
              {issideOpen && <SideNav categoryProp={()=>setCategoryData} countryProp={()=>setCountryData}/>}

              {/* content */}
              <div className='news-cards' style={issideOpen ? {width: "100%"} : {className: "news-cards"}}>
                <News />
              </div>
          </div>

      </div>
    </>
  );
}

export default App;
