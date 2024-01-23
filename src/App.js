import React from 'react'
import './App.css';
import Frontpage from './pages/page1';
import CertificationPage from './pages/page2';
import Projects from './pages/page3';
import Contact from './pages/page4';

const App = () => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      const windowWidth = window.innerWidth;
      if(windowWidth > 900){
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          window.scrollTo(0, window.scrollY + window.innerHeight);
        }else if (event.key === 'ArrowUp') {
          event.preventDefault();
          window.scrollTo(0, window.scrollY - window.innerHeight);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className='app'>
      <div id='frontpage'>
        <Frontpage />
      </div>
      <div id='certification'>
        <CertificationPage />
      </div>
      <div id='project'>
        <Projects />
      </div>
      <div id='contact'>
        <Contact />
      </div> 
    </div>
  )
}
export default App