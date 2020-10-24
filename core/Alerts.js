import styled, { css } from 'styled-components'

const Alert = styled.div`
padding: 20px;
background-color: gray;
color: white;

${props => props.danger && css`
  background-color: #f44336;
  `}

  ${props => props.success && css`
  background-color: #4CAF50;
  `}

  ${props => props.info && css`
  background-color: #2196F3;
  `}

  ${props => props.warning && css`
  background-color: #ff9800;
  `}
`

export default Alert