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

  ${props => props.blue && css`
  background-color: #008CBA;
  `}

  ${props => props.red && css`
  background-color: #f44336;
  `}

  ${props => props.purple && css`
  background-color: #9400D3;
  `}

  ${props => props.gray && css`
  background-color: #555555;
  `}

  ${props => props.pink && css`
  background-color: #FF69B4;
  `}
  
  ${props => props.brown && css`
  background-color: #A0522D;
  `}

  ${props => props.black && css`
  background-color: #1b1c1d;
  `}

  ${props => props.orange && css`
  background-color: #f2711c;
  `}

  ${props => props.yellow && css`
  background-color: #fbbd08;
  `}
`;

export default Button;