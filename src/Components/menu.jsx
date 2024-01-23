import React from "react";
import './menu.css'

export default function Menu(){

    const [isOpen, setIsOpen] = React.useState(false);
    const menuRef = React.useRef(null);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const closeMenuOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
    };

    React.useEffect(() => {
        if (isOpen) {
          document.addEventListener('click', closeMenuOutsideClick);
        } else {
          document.removeEventListener('click', closeMenuOutsideClick);
        }
    
        return () => {
          document.removeEventListener('click', closeMenuOutsideClick);
        };
      }, [isOpen]);
      

    return(
        <div className="menu-main">
            <div className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className={`bar smaller ${isOpen ? 'open' : ''}`}></div>
            </div>
            {isOpen && (
                <div className='menu-overlay' ref={menuRef}>
                    <div className='menu-card'>
                        <div className='menu-items'>
                            <a href='#certification' onClick={toggleMenu} >My Certifications</a>
                            <a href='#projects' onClick={toggleMenu} >My Projects</a>
                            <a href='#contact' onClick={toggleMenu} >Contact Me</a>                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}