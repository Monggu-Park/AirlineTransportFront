import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100% - 300px);
    height: 100vh;
    padding-left: 300px;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
`;

export const SubmitButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    width: 40%;
    right: auto;
    align-self: center;
`;