import styled, { css } from 'styled-components'
import Fonts from './fonts.js'

// border: solid red 1px;
const Styles = {
  SectionContainer: styled.div`
    padding: 0 1em;
    box-sizing: border-box;
    min-height: 100vh;
  `,
  SectionTitle: styled.h1`
    margin-bottom: 1em;
    font-size: ${Fonts.sizeTitle};
    font-weight: ${Fonts.weightBold};
  `,
  Icon: styled.img`
    height: ${props => props.size ? props.size : '1em'};
    width: ${props => props.size ? props.size : '1em'};
    color: ${props => props.color ? props.color : '#000'};
    background-color: transparent;
  `,
}

export default Styles;
