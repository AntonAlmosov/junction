import React from "react";
import styled from "styled-components";
import { DefaultButton } from "../../components/controls/DefaultButton";
import { DefaultInput } from "../../components/controls/Input";
import { OnboardingWrapper } from "../../components/misc/FullWrapper";
import { OnboardingCardWrapper } from "../../components/misc/OnboardingCardWrapper";
import { OnboardingHeading } from "../../components/misc/OnboardingHeading";
import { Paragraph2 } from "../../components/typography/Paragraph2";

export default function Start() {
  const nextStep = () => {};
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
        <PickerRowWrapper>
          <Picker
            placeholder={"Set gender"}
            label={"Gender"}
            onChange={() => {}}
            items={["Male", "Female", "Other"]}
          />
          <Picker
            placeholder={"1-4"}
            label={"Course"}
            onChange={() => {}}
            items={[
              "First course",
              "Second course",
              "Third course",
              "Fifth course",
            ]}
          />
        </PickerRowWrapper>
        <ButtonRow>
          <ButtonWrapper>
            <DefaultButton onClick={() => nextStep()}>NEXT</DefaultButton>
          </ButtonWrapper>
        </ButtonRow>
      </OnboardingCardWrapper>
    </OnboardingWrapper>
  );
}

const PickerRowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Picker = ({
  label,
  placeholder,
  items,
  onChange,
}: {
  label: string;
  placeholder: string;
  items: string[];
  onChange: (value: string) => void;
  defaultValue?: string;
}) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(true);
  const [value, setValue] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!value) {
      return;
    }
    onChange(value);
  }, [value]);

  return (
    <PickerContainer>
      <PickerHeading>{label}</PickerHeading>
      <PickerWrapper>
        {collapsed && (
          <PickerValueWrapper onClick={() => setCollapsed(false)}>
            <p>{value || placeholder}</p>
            <img src="/chevron.svg" />
          </PickerValueWrapper>
        )}
        {!collapsed && (
          <PickerItemsWrapper>
            {items.map((item) => (
              <p
                key={item}
                onClick={() => {
                  setCollapsed(true);
                  setValue(item);
                }}
              >
                {item}
              </p>
            ))}
          </PickerItemsWrapper>
        )}
      </PickerWrapper>
    </PickerContainer>
  );
};

const PickerContainer = styled.div`
  width: 330px;
`;

const PickerWrapper = styled.div`
  width: 330px;
  height: 52px;
  position: relative;
`;

const PickerHeading = styled(Paragraph2)`
  margin-bottom: 6px;
`;

const PickerValueWrapper = styled.div`
  width: 100%;
  height: 52px;
  background: #ffffff;
  border: 1px solid #dadde0;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 12px 0 16px;
  box-sizing: border-box;
  p {
    width: 300px;
    font-family: Muller;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    user-select: none;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

const PickerItemsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 330px;
  box-sizing: border-box;
  padding: 12px 15px 12px 15px;
  background: #ffffff;
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12);
  border-radius: 4px;
  p {
    padding: 12px 0;
    font-family: Muller;
    font-size: 14px;
    user-select: none;
    &:hover {
      color: #ffab2b;
    }
  }
`;

const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
  width: 103px;
  margin-top: 64px;
`;
