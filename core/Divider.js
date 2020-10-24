import styled, { css } from "styled-components";

const Divider = styled.hr`
border-top: 3px dashed black;

  ${props => props.dotted && css`
  border-top: 3px dotted black;
  `}

  ${props => props.solid && css`
  border-top: 3px solid black;
  `}

  ${props => props.rounded && css`
  border-top: 8px solid black;
  border-radius: 5px;
  `}
`;

export default Divider;