import React from 'react';
import './navi.css';

const Navigation = () => {
  const [activePage, setActivePage] = React.useState('frontpage');

  const handlePageChange = (pageId) => {
    const element = document.getElementById(pageId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setActivePage(pageId);
  };

  return (
    <ul className='navi-ul'>
      <li onClick={() => handlePageChange('frontpage')}>{activePage === 'frontpage' ? "□" : "◆"}</li>
      <li onClick={() => handlePageChange('certification')}>{activePage === 'certification'? "□" : "◆"}</li>
      <li onClick={() => handlePageChange('project')}>{activePage === 'project' ? "□" : "◆"}</li>
      <li onClick={() => handlePageChange('contact')}>{activePage === 'contact' ? "□" : "◆"}</li>
    </ul>
  );
};

export default Navigation;
