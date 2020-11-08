import React from "react";
import styled from "styled-components";
import { OnboardingWrapper } from "../../components/misc/FullWrapper";
import { OnboardingCardWrapper } from "../../components/misc/OnboardingCardWrapper";
import { OnboardingHeading } from "../../components/misc/OnboardingHeading";
import ReactSlider from "react-slider";

export default function Personality() {
  const nextStep = () => {};
  return (
    <OnboardingWrapper>
      <OnboardingHeading
        step={2}
        heading={
          "Tell us about ur social life so we can find for you a perfect match"
        }
      />
      <OnboardingCardWrapper>
        <SliderWrapper>
          <ReactSlider
            min={-10}
            max={10}
            defaultValue={0}
            minDistance={1}
            className={"slider-wrapper"}
            thumbClassName={"thumb"}
          />
        </SliderWrapper>
      </OnboardingCardWrapper>
    </OnboardingWrapper>
  );
}

const SliderWrapper = styled.div`
  width: 100%;
  height: 10px;
  .slider-wrapper {
    width: 100%;
    height: 32px;
  }
`;

const SliderThumb = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background: #ffffff;
  box-shadow: 0px 2px 10px -2px rgba(20, 20, 20, 0.13);
`;

const SliderTrack = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 4px;
`;
