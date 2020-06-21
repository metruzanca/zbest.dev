import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Particles from 'react-particles-js';
import { ThemeContext } from 'contexts';

const HeroSection = styled.section`
  position:relative;
  height:80vh;
  width:100%;
  background:black;
`;

const HeroText = styled.h1`
  position:absolute;
`;

const HeroParticles = styled(Particles)`
  position:absolute;
  height:100%;
  width:100%;
  /* background:red; */
`;

const particleParams = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "color": {
      "value": '#fff'
    },
    "line_linked": {
      "enable": true,
      "opacity": 0.05
    },
    "move": {
      "speed": 0.05
    },
    "size": {
      "value": 1
    },
    "opacity": {
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1
      }
    }
  },
  "interactivity": {
    "events": {
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "push": {
        "particles_nb": 1
      }
    }
  },
  "retina_detect": true
}

interface HeroProps {}

export const Hero : React.FC<HeroProps> = ({}) => {
  
  const { dark } = useContext(ThemeContext);

  return(
    <HeroSection>
      <HeroText>I'm Hero</HeroText>
      <HeroParticles params={particleParams}/>
    </HeroSection>
  )
}