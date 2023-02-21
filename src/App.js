import axios from 'axios';
import { useState, useEffect } from 'react';
import News from "./components/News.jsx";
import SideNav from "./components/SideNav";
import './App.css';

function App() {

  const [issideOpen, setsideOpen] = useState(false);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  const [article, setArticle] = useState([]);

  const API = process.env.REACT_APP_API_KEY;
  axios.defaults.baseURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API}`;
  
  useEffect(() => {
    axios.get().then(response => setArticle(...[response.data.articles])).catch(error => console.log(error));
  }, [category, country])

  console.log(axios.defaults.baseURL);
  console.log(article);

  const getData = (data) => {
    console.log("data args : " + data);
    if(data.length <= 2){
      console.log(data.length);
      setCountry(data);
      console.log("country useState Value : " + country);
    }else{
      setCategory(data);
      console.log("category useState Value : " + category);
    }
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
              {issideOpen && <SideNav childData={getData} />}

              {/* content */}
              <div className='news-cards' style={issideOpen ? {width: "100%"} : {className: "news-cards"}}>
                <News articles={article}/>
              </div>
          </div>

      </div>
    </>
  );
}

export default App;
