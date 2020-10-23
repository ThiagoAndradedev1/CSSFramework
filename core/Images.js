import styled, { css } from "styled-components";

const Image = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;

    ${props => props.rounded && css`
    border-radius: 8%;
    `}

    ${props => props.small && css`
    width: 100px;
    height: 100px;
    `}
  
    ${props => props.medium && css`
    width: 200px;
    height: 200px;
    `}
  
    ${props => props.big && css`
    width: 300px;
    height: 300px;
    `}

    ${props => props.large && css`
    width: 400px;
    height: 400px;
    `}
`;


export default Image;