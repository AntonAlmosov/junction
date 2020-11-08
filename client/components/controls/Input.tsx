import React from "react";
import styled from "styled-components";
import { Paragraph2 } from "../typography/Paragraph2";

export const DefaultInput = ({
  label,
  placeholder,
  onChange,
  defaultValue,
  type,
}: {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  defaultValue?: string;
  type?: string;
}) => {
  return (
    <DefaultInputWrapper>
      <Paragraph2>{label}</Paragraph2>
      <Input
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type || "text"}
      />
    </DefaultInputWrapper>
  );
};

export const DefaultInputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
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
