import React, { useState } from 'react';

function SideNav({ childData }) {

  const [isOpen, setIsOpen] = useState(false);
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);

  const countries = [
    {"country": "India", "code": "in"},
    {"country": "Argentina", "code": "ar"},
    {"country": "Austria", "code": "at"},
    {"country": "Indonesia", "code": "id"},
    {"country": "Ireland", "code": "ie"},
    {"country": "Czech Republic", "code": "cz"},
    {"country": "Russia", "code": "ru"},
    {"country": "USA", "code": "us"},
    {"country": "Ukraine", "code": "ua"},
    {"country": "Sweden", "code": "se"},
  ];
  const categories = ["business", "entertainment", "health", "science", "sports", "Technology", "general"];

  return (
    <div className='side-nav'>
       
      <div className='side-nav-link'>

        <div className='link'>
          <h4 className='link-title'>Categories</h4>
          <img src='/images/down.svg' alt='/images/down.svg' className='link-img' onClick={(event) => {setIsOpen(!isOpen)}}/>
        </div>

        {isOpen && <div className='child-links'>
          {categories && categories.map((category) => {
            return <div className='child-link' onClick={(event) => {childData(category)}}>
              <h4 className='link-title text-align'>{category}</h4>
            </div>
          })}
        </div>}

      </div>

      <div className='side-nav-link'>

        <div className='link'>
          <h4 className='link-title'>Countries</h4>
          <img src='/images/down.svg' alt='/images/down.svg' className='link-img' onClick={(event) => {setIsCountriesOpen(!isCountriesOpen)}}/>
        </div>

        {isCountriesOpen && <div className='child-links'>
          {countries && countries.map((country) => {
            return <div className='child-link' onClick={(event)=>{childData(country.code)}}>
              <h4 className='link-title text-align'>{country.country}</h4>
            </div>
          })}
        </div>}

      </div>

    </div>
  )
}

export default SideNav