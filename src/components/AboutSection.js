import React from 'react';
import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>We work to make</h2>
          </div>
          <div className='hide'>
            <h2>
              your <span>Visions</span> come
            </h2>
          </div>
          <div className='hide'>
            <h2>
              <strong>back.</strong>
            </h2>
          </div>
        </div>
        <p>
          Contact us for any Vision you've had. We have professional hypnotists
          that make your forgotten dreams come back and resurface as vividly as
          they were the last time you saw them.
        </p>
        <button>Visualize with Us</button>
      </div>
      <div className='image'>
        <img src={home1} alt='guy with a camera' />
      </div>
    </div>
  );
};

export default AboutSection;
