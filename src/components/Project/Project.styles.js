import styled from 'styled-components';
import { Colors, Metrics } from '../../themes';

export const ImageContainer = styled.div`
  height: 100%;
  width: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.4s all;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  transition: 0.4s all;
`;

export const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  padding: 0.2em 0.2em 0.2em 1em;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 245, 245, 0.6);
  opacity: 0;

  transition: 0.25s all ease-in-out 0.1s;
  & > * {
    opacity: 0;
    transition: 0.25s all ease-in-out 0.1s;
  }
`;

export const Name = styled.div`
  font-size: 2em;
  letter-spacing: 0.2em;
  text-align: center;

  transform: translateY(0.3em);
`;

export const Links = styled.div`
  margin: 0.5em 0 0 0;
  display: flex;

  transform: translateY(0.7em);
  transition-delay: 0.2s;
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

export const Wrapper = styled.div`
  position: relative;
  height: 18em;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  &:hover {
    ${InfoContainer} {
      opacity: 1;
      & > * {
        opacity: 1;
        transform: translateY(0em);
      }
    }
    ${ImageContainer} {

      ${Image} {
        filter: grayscale(70%) brightness(150%);
      }
    }
  }
`;
