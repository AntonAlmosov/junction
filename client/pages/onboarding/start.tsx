import React from "react";
import { DefaultInput } from "../../components/controls/Input";
import { OnboardingWrapper } from "../../components/misc/FullWrapper";
import { OnboardingCardWrapper } from "../../components/misc/OnboardingCardWrapper";
import { OnboardingHeading } from "../../components/misc/OnboardingHeading";

export default function Start() {
  return (
    <OnboardingWrapper>
      <OnboardingHeading
        step={1}
        heading={"Please tell a little more about yourself"}
      />
      <OnboardingCardWrapper>
        <DefaultInput
          placeholder={"Your name"}
          onChange={() => {}}
          label={"Name"}
        />
        <DefaultInput
          placeholder={"Your surname"}
          onChange={() => {}}
          label={"Your surname"}
        />
      </OnboardingCardWrapper>
    </OnboardingWrapper>
  );
}
