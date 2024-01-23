import React from 'react'
import DOMPurify from 'dompurify';
import './css/page2.css';
import { cardData } from '../Components/data';
import Logo from '../Components/logo';
import Menu from '../Components/menu';


export default function CertificationPage(){

  return(
    <div className='body' id='certification'>
      <div className='body-header'>
        <Logo />
        <Menu />
      </div>
      <div className='body-title'>
        <h1>Certification Accomplishments</h1>
      </div>
      <div className='grid-container'>
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={(`images/${card.imagePath}`)} alt={`Card ${index + 1}`} />
            <div className="card__content">
              <p className="card__title">{card.title}</p>
              <p className="card__description" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(card.description,{
                ADD_ATTR: ['target'],}) 
              }} />
            </div>
          </div>
        ))}
      </div>
        
    </div>
  );
}

