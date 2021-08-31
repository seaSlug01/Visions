import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';
import { ContainerLayout, Description, Image, Hide } from '../styles';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>Visions</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>
              <strong>back.</strong>
            </h2>
          </Hide>
        </div>
        <p>
          Contact us for any Vision you've had. We have professional hypnotists
          that make your forgotten dreams come back and resurface as vividly as
          they were the last time you saw them.
        </p>
        <button>Visualize Again With Us</button>
      </Description>
      <Image>
        <img src={home1} alt='guy with a camera' />
      </Image>
    </About>
  );
};

const About = styled(ContainerLayout)``;

export default AboutSection;
