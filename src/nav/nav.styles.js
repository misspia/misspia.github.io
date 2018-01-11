import styled, { css } from 'styled-components'
import { Colors, Fonts } from '../themes/themes.js'

export const Container = styled.div`
  font-size: 1em;

  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  height: 5em;
  width: 100%;

  box-sizing: border-box;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${Colors.white};
`;

export const Brand = styled.div`
  cursor: pointer;

`;

export const Heading = styled.div`
  font-size: 1em;
  font-weight: ${Fonts.weightBold};
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export const Subheading = styled.div`
  font-size: 0.8em;
  letter-spacing: 0.5em;
`;

const tab = css`
  padding: 0 0.5em;

  cursor: pointer;
`;

export const Tabs = styled.div`
  display: flex;

  a, div {
    ${tab}
  }
`;
