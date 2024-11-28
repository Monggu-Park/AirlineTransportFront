import styled from "styled-components";
import React from "react";


export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.justifyContent || "flex-start"};
    align-items: ${(props) => props.alignItems || "flex-start"};
    width: 100%;
`;