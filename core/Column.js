import styled from 'styled-components';

// let getWidthGrid = (value) => {
//   if(!value) return;

//   let width = value / 12 * 100;
//   return `width: ${width}%;`;
// } 

const Column = styled.div`
 float: left;
 padding: .25rem;
 min-height: 1px;
 box-sizing: border-box;
 width: 100%;

 @media only screen and (max-width: 768px) {
    width: ${props => (props.grid ? props.grid / 12 * 100 : '8:33')}%;
}
`;

export default Column;