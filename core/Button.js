import styled, { css } from "styled-components";

const Button = styled.button`
  background: black;
  border-radius: 3px;
  border: 2px;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

export default Button;