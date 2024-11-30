import styled from "styled-components";

export const HomeContainer = styled.div`
    width: calc(100% - 300px);
    padding-left: 300px;
`;

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

export const AwbContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
`;

export const AwbBox = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    cursor: pointer;
    width: 200px;
    text-align: center;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: #f0f0f0;
        transform: scale(1.05);
    }
`;