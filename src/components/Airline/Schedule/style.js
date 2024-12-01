import styled from "styled-components";

export const Container = styled.div`
    width: 660px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
    text-align: center;
    color: #333;
    margin-bottom: 20px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Input = styled.input`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

export const Select = styled.select`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

export const Button = styled.button`
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0056b3;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

export const TableHead = styled.thead`
    background-color: #007bff;
    color: white;
`;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
    text-align: left;
    padding: 12px;
    border: 1px solid #ccc;
`;

export const TableCell = styled.td`
    padding: 12px;
    border: 1px solid #ccc;
`;

export const NoData = styled.p`
    text-align: center;
    color: #999;
    margin-top: 20px;
`;