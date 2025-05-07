import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <StyledSelect>{displayedValue}</StyledSelect>
      <PositionedIcon id={"chevron-down"} size={24} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 10px;
  color: inherit;
  pointer-events: none;
`;

const NativeSelect = styled.select`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0%;
`;

const StyledSelect = styled.div`
  height: 100%;
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  color: inherit;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default Select;
