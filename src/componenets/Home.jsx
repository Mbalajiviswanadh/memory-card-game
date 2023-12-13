import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css";
import mewo from '../images/mewo.png';

const Home = () => {
  return (
    <div className='divider'>
      <div className="content">
        <h1>Hey Fellows! 😸</h1>
        <p>Play Memory cards Game</p>
        <div className="pixel2">
          <Link to="/memorygame">
            <span style={{ color: 'white' }}>Start the Game</span>
          </Link>
        </div>
      </div>
      <div className="cat-img">
        <img src={mewo} alt='cat-img' />
      </div>
    </div>
  );
}

export default Home;
