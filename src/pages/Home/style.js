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

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

export const TableHeader = styled.th`
    background-color: #f9f9f9;
    color: #555;
    padding: 10px 15px;
    border-bottom: 2px solid #e0e0e0;
    font-weight: bold;
    text-align: left;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #fafafa;
    }

    &:hover {
        background-color: #f1f1f1;
    }
`;

export const TableCell = styled.td`
    padding: 10px 15px;
    border-bottom: 1px solid #e0e0e0;
    color: #333;
`;

export const ActionButton = styled.button`
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    ${(props) =>
    props.approve
        ? `
        background-color: green;
        color: white;
    `
        : `
        background-color: red;
        color: white;
    `}
`;

export const StatusBadge = styled.span`
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    color: ${(props) =>
    props.status === "Approved" ? "#2e7d32" : props.status === "Reject" ? "#d32f2f" : "#ff9800"};
    background-color: ${(props) =>
    props.status === "Approved" ? "#c8e6c9" : props.status === "Reject" ? "#ffcdd2" : "#fff8e1"};
`;