import styled from "styled-components";
import theme from "@/shared/theme.js";

export const RoleContainer = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colorSystem.neutral["100"]};
    
`

export const RoleButton = styled.button`
    width: 400px;
    height: 200px;
    margin: 20px;
    border: none;
    border-radius: 16px;
    background-color: ${theme.colorSystem.neutral["300"]};
    color: ${theme.colorSystem.black};
    font-size: 2.5rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${theme.colorSystem.blue["200"]};
    }
`