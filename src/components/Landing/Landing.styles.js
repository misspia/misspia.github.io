import styled, { css } from 'styled-components';
import { Colors, Metrics } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Title = styled.h1`
  z-index: 1;
  margin-bottom: em;
  font-size: 3em;
  text-align: center;
  letter-spacing: 0.4em;

  font-weight: 100;
  color: ${Colors.blackTranslucent};
  text-shadow: 0.02em 0.05em 0em ${Colors.whiteTinted};
`;

export const LinksContainer = styled.div`
  display: flex;
  z-index: 1;

  @media only screen and (max-width: ${Metrics.mobileWidth}) {
    flex-direction: column;
  }
`;

const linkStyles = css`
  margin: 0.4em 0.5em;
  padding: 0.3em 0.6em;
  display: flex;
  align-items: center;
  justify-content: center;

  letter-spacing: 0.2em;
  color: ${Colors.blackTranslucent};
  background-color: transparent;
  border: solid ${Colors.blackTranslucent} 0.05em;

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: ${Colors.blackTranslucent};
    color: ${Colors.white};
  }
`;

export const Link = styled.a`
  ${linkStyles}
`;

export const ProjectLink = styled.div`
  ${linkStyles}
`;

export const ContactLink = styled.div`
  ${linkStyles}

  z-index: 1;
  margin-top: 1.5em;
  border-width: 0 0 0.05em 0;
  color: ${Colors.blackTranslucent};

  cursor: auto;

  &:hover {
    background-color: transparent;
    color: ${Colors.blackTranslucent};
  }
`;
