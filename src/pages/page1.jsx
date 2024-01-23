import React from 'react'
import './css/page1.css';
import Menu from '../Components/menu';
import Navigation from '../Components/Navigation';

export default function Frontpage (){
    const [isVisible, setIsVisible]  = React.useState(window.innerWidth > 1000)

    const updateWidth = () => {
        const newWidth = window.innerWidth > 1000;
        setIsVisible(newWidth);
    }
    React.useEffect(() => {
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth)
        }
    }, []);
    
    return(
        <div className='main'>
            <header>
                <div className='logo'>
                    <a href='mailto:hafizalasad712@gmail.com'>
                        <h3>HAF<span>FIZ</span></h3>
                    </a>
                </div>
                <Menu />            
            </header>
            <main>
                <div className='main-body'>
                    <div className='main-title'>
                        <h1> FRONTEND <br /> DEVELOPER.</h1>
                        <p>I like to craft solid and scalable frontend products with great user experiences.</p>
                        <span>I know
                            <ul className='pg1-ul'>
                                <li>React</li>
                                <li>JS</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </span>
                    </div>
                    <div className='photo-div'>
                        <img src='images/hafizz.jpg' alt='mrHafiz' className='photo' />
                    </div>
                </div>
            </main>
            {isVisible && (<Navigation />)}
            
            
        </div>
    );
}