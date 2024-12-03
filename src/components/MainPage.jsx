import React from 'react';
import { Link } from 'react-router-dom';  
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="App">
      <div className="container">
        <img className="heyqueen" src="https://cms.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery" alt="heyqueen" />
        <h1 className="sigma">
         Type shi
          <hr />
        </h1>
        <p>Damnnn</p>
        
    
        

        
        <button onClick={() => alert('Button clicked!')} className="action-button">
        BRO WHAT 
        </button>
      </div>
    </div>
  );
};

export default MainPage;
