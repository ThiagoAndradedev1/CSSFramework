import styled, { css } from "styled-components";

const Button = styled.button`
background-color: #4CAF50; 
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;

  ${props => props.blue && css`
  background-color: #008CBA;
  `}

  ${props => props.red && css`
  background-color: #f44336;
  `}

  ${props => props.gray && css`
  background-color: #e7e7e7;
  `}

  ${props => props.black && css`
  background-color: #555555;
  `}
`;

export default Button;