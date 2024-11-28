import styled from "styled-components";
import React from "react";

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.justifyContent || "flex-start"};
    align-items: ${(props) => props.alignItems || "flex-start"};
    padding: ${(props) => props.padding || "0"};
    width: 100%;
`;