import styled, { css } from 'styled-components'

const Card = styled.div`
border-radius: 5px;
background-color: #f2f2f2;
padding: 20px;

${props => props.gray && css`
background-color: gray;
`}
`

export default Card