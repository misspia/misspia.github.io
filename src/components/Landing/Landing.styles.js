import styled from 'styled-components';
import { Colors } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  &.fade-enter {
    opacity: 0.01;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;

  }
  &.fade-leave {
    opacity: 1;
  }
  &.fade-leave {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Title = styled.h1`
  z-index: 1;
  font-size: 3em;
  text-align: center;
  letter-spacing: 0.4em;
`;

export const LinksContainer = styled.div`
  display: flex;
  z-index: 1;
`;

export const Link = styled.a`
  margin: 0.2em 0.5em;
  padding: 0.3em 0.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  
  letter-spacing: 0.2em;
  color: ${Colors.black};
  background-color: transparent;
  border: solid ${Colors.black} 0.05em;

  cursor: pointer;
  transition: all 0.4s;

  text-decoration: none;

  &:visited, &:active, &:focus {
    color: ${Colors.black};
    outline: none;
    text-decoration: none;
  }
  &:hover {
    background-color: ${Colors.black};
    color: ${Colors.white};
  }
`;

export const ContactLink = styled(Link)`
  z-index: 1;
  margin-top: 1.5em;
  border-width: 0 0 0.05em 0;

  cursor: auto;

  &:hover {
    background-color: transparent;
    color: ${Colors.black};
  }
`;