import styled from "styled-components";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Hero } from "./Hero";
import { Projects } from "./Projects";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const App = () => {
  return (
    <Container>
      <Hero />
      <Projects />
    </Container>
  );
};
