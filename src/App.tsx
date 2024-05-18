import styled from "styled-components";
import { Hero } from "./Hero";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const App = () => {
  return (
    <Container>
      <Hero />
    </Container>
  );
};
