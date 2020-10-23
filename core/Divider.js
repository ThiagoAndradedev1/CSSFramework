import styled, { css } from "styled-components";

const Divider = styled.hr`
border-top: 3px dashed #bbb;

  ${props => props.dotted && css`
  border-top: 3px dotted #bbb;
  `}

  ${props => props.solid && css`
  border-top: 3px solid #bbb;
  `}

  ${props => props.rounded && css`
  border-top: 8px solid #bbb;
  border-radius: 5px;
  `}
`;

export default Divider;