import styled from 'styled-components';
import { Colors, Metrics } from '../../themes';

export const Container = styled.div`
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Metrics.mobileQuery} {
    width: 100%;
    padding: 0.1em;
  }
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

  ${Metrics.mobileQuery} {
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

export const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: ${Metrics.maxWidth};

 ${Metrics.mobileQuery} {
    grid-template-columns: 1fr;
  }
`;

