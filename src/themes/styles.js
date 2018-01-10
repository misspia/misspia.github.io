import styled from 'styled-components'
import Fonts from './fonts.js'

const Styles = {
  SectionContainer: styled.div`
    border: solid red 1px;
    min-height: 100vh;
  `,
  SectionTitle: styled.div`
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
