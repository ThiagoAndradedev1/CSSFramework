import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid rgb(229, 49, 112);
  border-right: 2px solid rgb(229, 49, 112);
  border-bottom: 2px solid rgb(229, 49, 112);
  border-left: 4px solid grey;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;

  ${props => props.blue && css`
  background-color: #008CBA;
  `}

  ${props => props.red && css`
  background-color: #f44336;
  `}
`;

export default Spinner;