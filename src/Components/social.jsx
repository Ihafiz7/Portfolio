import React from 'react'
import './social.css'

const Social = () => {
  return (
    <div className="card-social">
      <a href='https://www.instagram.com/hafiz_ahmed_11/' target='_blank' rel='noopener noreferrer' className="social-link1">
        <img className="svgs" src="logos/instagram-svgrepo-com.svg" alt="instagram" />
      </a>
      <a href='https://github.com/Ihafiz7' target='_blank' rel='noopener noreferrer ' className="social-link2">
        <img className="svgs" src='logos/git.svg' alt='git' /></a>
      <a href='mailto:hafizalasad712@gmail.com' target='_blank' rel='noopener noreferrer' className="social-link3">
        <img className="svgs" src="logos/gmail-svgrepo-com.svg" alt="mail" />
      </a>
      <a href="https://wa.me/01916119909?text=Hello%20there!" target='_blank' rel='noopener noreferrer' className="social-link4">
        <img className="svgs" src="logos/whatsapp-svgrepo-com.svg" alt="whatsapp" />
      </a>
      <a href='https://www.linkedin.com/in/hafiz-asad-a7a93b210/' target='_blank' rel='noopener noreferrer' className="social-link5">
        <img className="svgs" src="logos/linkedin-svgrepo-com.svg" alt="linkedin" />
      </a>
    </div>
  )
}

export default Social