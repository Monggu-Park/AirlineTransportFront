import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #f9f9f9;
`;

export const LeftPane = styled.div`
    width: 30%;
    padding: 20px;
    border-right: 1px solid #e0e0e0;
    overflow-y: auto;
`;

export const RightPane = styled.div`
    width: 30%;
    padding: 20px;
    overflow-y: auto;
`;

export const Header = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
    padding: 12px;
    text-align: left;
    background-color: #007bff;
    color: white;
    font-weight: bold;
    border: 1px solid #e0e0e0;
`;

export const TableRow = styled.tr`
    background-color: ${({ isSelected }) => (isSelected ? "#f0f8ff" : "white")};
    &:hover {
        background-color: #f9f9f9;
        cursor: pointer;
    }
`;

export const TableCell = styled.td`
    padding: 12px;
    border: 1px solid #e0e0e0;
`;

export const Details = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Placeholder = styled.p`
    font-size: 16px;
    color: #999;
    text-align: center;
`;