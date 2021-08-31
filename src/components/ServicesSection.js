import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import styled from 'styled-components';
import { ContainerLayout, Description, Image } from '../styles';

function ServicesSection() {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> visualizing services
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={clock} alt='icon' />
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              velit!
            </p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={diaphragm} alt='icon' />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={money} alt='icon' />
              <h3>Affordable</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.
            </p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={teamwork} alt='icon' />
              <h3>Teamwork Therapism</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              assumenda beatae aliquid et esse distinctio.
            </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt='' />
      </Image>
    </Services>
  );
}

const Services = styled(ContainerLayout)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 75%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 50%;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: #eeeeee;
      color: black;
      padding: 0.4rem 0.8rem;
      border-radius: 3px;
    }
  }
`;

export default ServicesSection;
