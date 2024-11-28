import styled from "styled-components";

export const SizedBox = styled.div`
    width: ${(props) => props.width || "0px"};
    height: ${(props) => props.height || "0px"};
`;