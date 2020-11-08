import React from "react";
import styled from "styled-components";
import { OnboardingWrapper } from "../../components/misc/FullWrapper";
import { OnboardingCardWrapper } from "../../components/misc/OnboardingCardWrapper";
import { OnboardingHeading } from "../../components/misc/OnboardingHeading";
import { DefaultButton } from "../../components/controls/DefaultButton";

export default function Personality() {
  const nextStep = () => {};
  return (
    <OnboardingWrapper>
      <OnboardingHeading
        step={2}
        heading={
          "Tell us about your skills (also can upload thos from student program)"
        }
      />
      <OnboardingCardWrapper>
        <ButtonRow>
          <ButtonWrapper>
            <DefaultButton onClick={() => nextStep()}>NEXT</DefaultButton>
          </ButtonWrapper>
        </ButtonRow>
      </OnboardingCardWrapper>
    </OnboardingWrapper>
  );
}

const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
  width: 103px;
  margin-top: 64px;
`;
