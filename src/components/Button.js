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
      ${(props) =>
        props.outline &&
        css`
          color: ${selectedColor};
          background: none;
          border: 1px solid ${selectedColor};
          &:hover {
            background: ${selectedColor};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem",
  },
};

const sizeStyles = css`
  /* size */
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullwidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
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

  & + & {
    margin-left: 1rem;
  }

  ${colorStyles}
  ${sizeStyles}
  ${fullWidthStyle}
`;

const Button = ({ children, color, size, outline, fullwidth, ...rest }) => {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullwidth={fullwidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: "blue",
  size: "medium",
};

export default Button;
