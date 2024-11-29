import styled from "styled-components";

export const ProgressContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: 20px;
    gap: 20px;
`;

export const Step = styled.div`
    padding: 10px;
    border: 1px solid ${({ active }) => (active ? "#007bff" : "#ccc")};
    background-color: ${({ active }) => (active ? "#007bff" : "white")};
    color: ${({ active }) => (active ? "white" : "black")};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ active }) => (active ? "#0056b3" : "#f0f0f0")};
    }
`;