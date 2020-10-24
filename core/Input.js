import styled, { css } from "styled-components";

const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
color: black;
background: white;
border: none;
border-radius: 3px;
width: 50%;

  ${props => props.small && css`
   width: 15%;
  `}

  ${props => props.medium && css`
   width: 25%;
  `}

  ${props => props.big && css`
   width: 35%;
  `}

  ${props => props.large && css`
   width: 45%;
  `}

  ${props => props.fluid && css`
  width: 100%
  `}

  @media(max-width: 768px) {
    width: 80%
  }
`;

export default Input;