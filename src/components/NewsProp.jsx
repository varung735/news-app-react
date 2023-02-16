import '../App.css'
import React from 'react'

function NewsProp({article}) {
  
  return (
    <div className='card'>
      <div className='card-header'><img src={article.image_url} alt={article.image_url} className='card-img'/></div>
      <div className='card-body'>
        <h3 className='Title'>{article.title}</h3>
        <p className='description'>{article.description}</p>
        <p className='pubDate'>{article.pubDate}</p>
      </div>
    </div>
  )
}

export default NewsProp