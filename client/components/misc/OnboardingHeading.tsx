import React from "react";
import styled from "styled-components";
import { H4 } from "../../components/typography/H4";
import { H3 } from "../typography/H3";

export const OnboardingHeading = ({
  step,
  heading,
}: {
  step: 1 | 2 | 3 | 4;
  heading: string;
}) => {
  return (
    <OnboardingHeadingWrapper>
      <OnboardingStep>
        <H4>{step}</H4>
      </OnboardingStep>
      <Heading>{heading}</Heading>
    </OnboardingHeadingWrapper>
  );
};

const OnboardingHeadingWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const OnboardingStep = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background-color: #e8ecef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled(H3)`
  width: 775px;
  margin-top: 20px;
  text-align: center;
`;
