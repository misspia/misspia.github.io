import styled from 'styled-components';
import { Colors, Fonts, Metrics } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeButton = styled.div`
  z-index: 999;
  position: fixed;
  top: 1em;
  left: 1em;

  font-size: 1.5em;

  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 1.8em;
  width: 1.8em;

  border-radius: 0.1em;
  border: solid 0.1em ${Colors.black};
  background-color: ${Colors.black};
  color: ${Colors.white};

  cursor: pointer;

  @media only screen and (max-width: ${Metrics.mobileWidth}) {
    left: 0.3em;
    top: 0.3em;
    
    height: 1em;
    width: 1em;
    
  }
`;

export const Title = styled.h1`
  text-align: center;
  letter-spacing: 0.3em;

  @media only screen and (max-width: ${Metrics.mobileWidth}) {
   margin-top: 1em;
  }
`;

export const ImageContainer = styled.div`
  height: 60%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  transition: 0.4s all;
`;

export const Image = styled.img`
  height: auto;
  width: 100;

  transition: 0.4s all;
`;


export const InfoContainer = styled.div`
  position: absolute;
  margin: auto auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 40%;

  height: 40%;
  width: 60%;

  padding: 0.2em 0.2em 0.2em 1em;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${Colors.whiteTinted};
  opacity: 0;
  
  transition: 0.25s all;
  transition-delay: 0.1s;

  @media only screen and (max-width: ${Metrics.mobileWidth}) {
    width: 100%;
  }
`;

export const Name = styled.div`
  font-family: ${Fonts.familyAccent};
  font-size: 2em;
  letter-spacing: 0.2em;

`;

export const Links = styled.div`
  margin: 0.5em 0 0 0;
  display: flex;
`;

export const Link = styled.a`
  margin: 0 0.8em 0 0;
  padding: 0.2em 0.7em;
  letter-spacing: 0.2em;

  color: ${Colors.black};
  border: solid 0.05em ${Colors.black};

  transition: 0.3s all;

  &:hover {
    background-color: ${Colors.black};
    color: ${Colors.white};
  }
`;

export const ProjectContainer = styled.div`
  //border: solid red 0.1em;

  position: relative;
  margin: 0.7em 0;
  height: 30em;
  width: 95%;
  max-width: 800px; 

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    ${InfoContainer} {
      opacity: 1;
    }
    ${ImageContainer} {
      height: 100%;
      width: 60%;

      ${Image} {
        filter: grayscale(70%) brightness(150%);
      }
    }
  }

`;