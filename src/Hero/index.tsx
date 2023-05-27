import styled from "styled-components";
import { Section } from "../components";
import { colors } from "@theme";

const Title = styled.h1`
  color: ${colors.white};
  letter-spacing: 0.5em;
  text-transform: uppercase;
`;

const Container = styled(Section)``;
export const Hero = () => {
  return (
    <Container>
      <Title>misspia</Title>
    </Container>
  );
};
