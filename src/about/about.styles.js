import styled, { css } from 'styled-components'
import { Colors, Fonts, Styles } from '../themes/themes.js'

export const Section = Styles.SectionContainer.extend`
  display: flex;
  flex-direction: column;
`;

export const Title = Styles.SectionTitle;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1150px;

  font-size: 1.5em;
  line-height: 1.5;
  letter-spacing: 1px;

`;

const keyword = css`
  border-bottom: solid ${Colors.black};
  color: ${Colors.black};

  transition: 0.3s all;

  &:hover {
    color: ${props => props.color ? props.color : Colors.black};
    border-color: ${props => props.color ? props.color : Colors.black};
  }
`;
export const LinksContainer = styled.div`
  margin-top: 5%;
  display: flex;
  width: 100%;

`;

export const Keyword = styled.span`
  ${keyword}
`;


export const Link = styled.a`
  position: relative;
  padding: 0em 0.6em;
  font-size: 0.9em;
  font-weight: ${Fonts.weightBold};
  color: ${Colors.black};
  text-decoration: none;
  transition: 0.2s all;

  text-transform: uppercase;

  &:before {
    content: '';
    display: block;
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 0%;
    background-color: ${Colors.black};

    transition: inherit;
  }
  &:hover {
        color: ${Colors.white};
        &:before {
          width: 100%;
        }
  }
  &:active, &:visited {
    outline: none;
  }

`;
