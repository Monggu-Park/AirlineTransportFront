import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    width: 500px;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;

    h2 {
        margin: 0;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
        color: #007bff;
    }
`;

export const ModalBody = styled.div`
    margin-top: 20px;

    table {
        width: 100%;
    }

    td {
        padding: 8px 10px;
        border-bottom: 1px solid #ddd;
    }

    td:first-child {
        font-weight: bold;
        width: 30%;
    }
`;