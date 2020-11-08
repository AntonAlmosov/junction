import React from "react";
import styled from "styled-components";

export const DefaultInput = ({
  label,
  placeholder,
  onChange,
  defaultValue,
}: {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  defaultValue?: string;
}) => {
  return (
    <DefaultInputWrapper>
      <span>{label}</span>
      <Input
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </DefaultInputWrapper>
  );
};

const DefaultInputWrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 52px;
  background-color: #fff;
  border: 1px solid #e8ecef;
  padding: 0 18px;
  box-sizing: border-box;
  font-family: "Muller";
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  outline: none;
  border-radius: 4px;
  ::placeholder {
    color: #98a9bc;
  }
`;
