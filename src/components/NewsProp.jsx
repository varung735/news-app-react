import '../App.css'
import React from 'react'

function NewsProp({article}) {
  
  return (
    <div className='card'>
      <div className='card-header'><img src={article.image_url} alt={article.image_url} className='card-img'/></div>
      <div className='card-body'>
        <h3 className='Title'>{article.title}</h3>
        <p className='description'>{article.description}</p>
        <p className='author'>Author: {article.source_id}</p>
        <a href={article.link} className="redirect-link" target="_blank" rel='noreferrer'>Read Article</a>
      </div>
    </div>
  )
}

export default NewsProp