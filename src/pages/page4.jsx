import React from 'react';
import './css/page4.css';
import Logo from '../Components/logo';
import Menu from '../Components/menu';
import Social from '../Components/social';

export default function Contact(){
  return(
    <div className='page4' id='contact'>
      <div className='body-header'>
        <Logo />
        <Menu />
      </div>
      <div className='page4-title'>
        <h1>Send me a message!</h1>
        <h3>Got a question or a proposal, or just want to say hello? Go ahead.</h3>
      </div>
      <div className='page4-social'>
        <Social />
      </div>
      <div className='page4-footer'>
        <p>HandCrafted by me ©twentytwentyfour</p>
      </div>
    </div>
  );
}