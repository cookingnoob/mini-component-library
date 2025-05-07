/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--radius": "4px",
    "--padding": "0px",
  },
  medium: {
    "--height": "12px",
    "--radius": "4px",
    "--padding": "0px",
  },
  large: {
    "--padding": "4px",
    "--height": "24px",
    "--radius": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  if (value > 100 || value < 0) {
    throw new Error("Value cannot be lower than 0 or higher than 100");
  }
  return (
    <Wrapper style={SIZES[size]}>
      <BarWrapper>
        <Bar
          role="progressbar"
          aria-valuenow={value}
          value={value}
          style={{ "--progress": value + "%" }}
        >
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--progress);
  height: var(--height);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  min-height: var(--height);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
`;

export default ProgressBar;
