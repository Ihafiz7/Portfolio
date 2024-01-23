import React from 'react';
import { cardData2 } from '../Components/data';
import Logo from '../Components/logo';
import Menu from '../Components/menu';
import './css/page3.css';

export default function Projects(){
  return(
    <div className='page3' id='projects'>
      <div className='body-header'>
        <Logo />
        <Menu />
      </div>
      <div className='page3-card'>
        <div className="card2-container ">
          {cardData2.map(card => (
            <div className="card2" key={card.id}>
              <div className="img-content">
                <h1>{card.title}</h1>
              </div>
              <div className="content">
                <p className="heading">{card.heading}</p>
                <a href={card.websiteUrl} target="_blank" rel="noopener noreferrer">Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}