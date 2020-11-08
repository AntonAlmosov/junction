import styled from "styled-components";

export const FullWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  position: relative;
`;

export const OnboardingWrapper = styled(FullWrapper)`
  flex-flow: column;
`;
