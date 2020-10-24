import styled from 'styled-components';

const Container = styled.div`
  max-width: 1360px;
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  &:before,
  &:after {
    content: " ";
  display: table;  
  }
  &:after {
    clear: both;
  }
`;

export default Container;