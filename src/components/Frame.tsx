import React from 'react';
import styled, { css } from "styled-components";
import { colors } from "@theme";

const Container = styled.div`
  position: relative;

  width: 90%;
  height: 90%;
  border: solid 0.5px ${colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
`

const Line = styled.div`
  position: absolute;
  width: 0.5px;
  height: 0.5px;
  background-color: ${colors.white};
`

const Mask = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: ${colors.black};
`

const LeftLine = styled(Line)`
  left: 0px;
  top: 10%;
  height: 80%;
`
const LeftMask = styled(Mask)`
  left: -2px;
  top: 5%;
  height: 90%;
`

const RightLine = styled(Line)`
  right: 0px;
  top: 10%;
  height: 80%;
`
const RightMask = styled(Mask)`
  right: -2px;
  top: 5%;
  height: 90%;
`

const TopLine = styled(Line)`
  left: 1%;
  top: -15px;
  width: 98%;
`
const TopMask = styled(Mask)`
  left: 5%;
  top: -2px;
  width: 90%;
`
const BottomLine = styled(Line)`
  left: 1%;
  bottom: -15px;
  width: 98%;
`
const BottomMask = styled(Mask)`
  left: 5%;
  bottom: -2px;
  width: 90%;
`

export const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <LeftMask />
      <LeftLine />
      <RightMask />
      <RightLine />
      <TopMask />
      <TopLine />
      <BottomMask />
      <BottomLine />
      {children}
    </Container>
  )
}

// const LeftLine = styled(Line)`
//   left: -15px;
//   top: 0%;
//   height: 100%;
// `
// const LeftMask = styled(Mask)`
//   left: -1px;
//   top: 5%;
//   height: 90%;
// `

// const RightLine = styled(Line)`
//   right: -15px;
//   top: 0%;
//   height: 100%;
// `
// const RightMask = styled(Mask)`
//   right: -1px;
//   top: 5%;
//   height: 90%;
// `

// const TopLine = styled(Line)`
//   left: 0%;
//   top: -15px;
//   width: 100%;
// `
// const TopMask = styled(Mask)`
//   left: 5%;
//   top: -1px;
//   width: 90%;
// `
// const BottomLine = styled(Line)`
//   left: 1%;
//   bottom: -15px;
//   width: 100%;
// `
// const BottomMask = styled(Mask)`
//   left: 5%;
//   bottom: -1px;
//   width: 90%;
// `
