import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  /* color */
  ${({ theme, color }) => {
    const selectedColor = theme.palette[color];
    return css`
      background: ${selectedColor};
      &:hover {
        ${lighten(0.1, selectedColor)}
      }
      &:active {
        ${darken(0.1, selectedColor)}
      }
    `;
  }}
`;

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;

  /* size */
  height: 2.25rem;
  font-size: 1rem;

  ${colorStyles}

  & + & {
    margin-left: 1rem;
  }
`;

const Button = ({ children, color, ...rest }) => {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: "blue",
};

export default Button;
