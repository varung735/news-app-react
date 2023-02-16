import React, { useState } from 'react';
import axios from 'axios';
import NewsProp from "./NewsProp.jsx";

function News() {

  const [article, setArticle] = useState();

  const getNews = async () => {
    try {
      const response = await axios.get("");
      setArticle(...[response.data.results]);
    } catch (error) {
      console.log(error);
    }
  }
  
  getNews();

  return (
    <>
      {article && article.map((article) => {
        return <NewsProp key={article.source_id} article={article} />
      })}
    </>
  )
}

export default News;