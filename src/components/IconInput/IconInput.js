import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    "--font-size": 14 / 16 + "rem",
    "--height": "24px",
    size: "16px",
  },
  large: {
    "--font-size": 18 / 16 + "rem",
    "--height": "36px",
    size: "24px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--border": `${size === "small" ? "1px" : "2px"} solid ${COLORS.black}`,
        "--height": `${size === "small" ? "24px" : "36px"}`,
      }}
    >
      <IconWrapper>
        <Icon id={icon} size={STYLES[size].size} />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input placeholder={placeholder} style={STYLES[size]}></Input>
    </Wrapper>
  );
};
const Wrapper = styled.label`
  display: block;
  padding: 10px 0px 11px 5px;
  width: var(--width);
  height: var(--height);
  border-bottom: var(--border);

  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
const IconWrapper = styled.div`
  position: absolute;
`;

const Input = styled.input`
  display: inline-block;
  border: none;

  margin-left: 35px;
  font-size: var(--font-size);
  color: inherit;
  width: 86%;
  font-weight: 700;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:focus {
    outline: none;
  }
`;

export default IconInput;
