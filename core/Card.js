import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  width: 100px;
  height: 150px;
  border: 3px solid ${props => props.color};
  border-radius: 15px;
  justify-content: space-around;
  font-size: 5em;
  color: ${props => props.color};
`;


export default Card;