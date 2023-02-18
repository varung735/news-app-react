import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsProp from "./NewsProp.jsx";

function News() {

  const [article, setArticle] = useState();

  useEffect(() => {
    axios.get().then(response => setArticle(...[response.data.articles])).catch(error => console.log(error));
  }, [])

  return (
    <>
      {article && article.map((article) => {
        return <NewsProp article={article} />
      })}
    </>
  )
}

export default News;