import styled from "styled-components";

 // Direction = 'vertical' | 'horizontal';


export const Spacer = styled.div`
    flex: ${(props) => props.flex};
    ${({direction}) => direction === 'vertical' ? 'height: 100%;' : 'width: 100%;'}
`;