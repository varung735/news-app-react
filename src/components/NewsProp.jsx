import '../App.css'
import React from 'react'

function NewsProp({article}) {
  
  return (
    <div className='card'>
      <div className='card-header'><img src={article.urlToImage} alt={article.urlToImage} className='card-img'/></div>
      <div className='card-body'>
        <h3 className='Title'>{article.title}</h3>
        <p className='description'>{article.description}</p>
        <p className='author'>Author: {article.author}</p>
        <a href={article.url} className="redirect-link" target="_blank" rel='noreferrer'>Read Article</a>
      </div>
    </div>
  )
}

export default NewsProp