import styled, { css } from 'styled-components'
import { Colors, Fonts, Styles } from '../themes/themes.js'

export const Section = Styles.SectionContainer;

export const Title = Styles.SectionTitle;

export const Content = styled.div`
  font-size: 1.5em;
  line-height: 1.5;
  letter-spacing: 1px;

`;

const keyword = css`
  border-bottom: solid ${Colors.black};
  color: ${Colors.black};

  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    color: ${props => props.color ? props.color : Colors.black};
    border-color: ${props => props.color ? props.color : Colors.black};
  }
`;

export const PlainKeyword = styled.span`
  ${keyword}


`;

export const LinkKeyword = styled.a`
  ${keyword}
  text-decoration: none;

  &:active, &:visited {
    outline: none;
  }

`;
