import styled from 'styled-components'
import { Colors, Fonts, Styles } from '../themes/themes.js'

export const Container = Styles.SectionContainer.extend`

`;

export const Content = styled.div`

`;

export const Title = Styles.SectionTitle;

export const ProjectContainer = styled.div`
  margin: 0;
  position: relative;
  width: 95%;
  height: 90%;
  overflow: hidden;

  box-shadow: 0em 0em 3em 0.1em ${Colors.shadow};
  transition: 0.4s all;

  &:hover {
    transform: translateX(5%);
  }
`;

export const BGImage = styled.img`
  z-index: -1;
  position: absolute;
  margin: auto;
  top: -50%;
  width: 100%;
  height: auto;
`;

export const HiddenInfo = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  background-color: ${Colors.black};
  color: ${Colors.white};
  text-transform: uppercase;

  transition 0.4s all;
  opacity: 0;

  ${ProjectContainer}:hover & {
    opacity: 1;
  }
`;

export const Subtitle = styled.div`
  font-size: 1.5em;
  font-weight: ${Fonts.weightBold};
  letter-spacing: 0.2em;
`;

export const LinksRow = styled.div`
  margin-top: 1em;
  display: flex;
  width: 100%;
  height 2.5em;
`;

export const LinkButton = styled.a`
  margin-right: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5em 1em;
  box-sizing: border-box;

  cursor: pointer;

  color: ${Colors.white};
  background-color: transparent;
  border: solid 0.1em ${Colors.white};
  text-decoration: none;

  transition: 0.4s all;

  &:hover {
      color: ${Colors.black};
      background-color: ${Colors.white};
  }
  &:visited, &:active {
    outline: none;
  }

`;


export const Icon = Styles.Icon;
