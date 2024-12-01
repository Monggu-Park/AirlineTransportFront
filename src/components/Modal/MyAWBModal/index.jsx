import React from "react";
import * as Styled from "./style";

export default function MyAwbModal({ isOpen, onClose, awbData }) {
    if (!isOpen) return null; // 모달이 열리지 않았으면 렌더링하지 않음

    return (
        <Styled.Overlay>
            <Styled.ModalContainer>
                <Styled.ModalHeader>
                    <h2>AWB Details</h2>
                    <button onClick={onClose}>Close</button>
                </Styled.ModalHeader>
                <Styled.ModalBody>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <tbody>
                        <tr>
                            <td><strong>ID:</strong></td>
                            <td>{awbData.id}</td>
                        </tr>
                        <tr>
                            <td><strong>Sender Name:</strong></td>
                            <td>{awbData.sender.name}</td>
                        </tr>
                        <tr>
                            <td><strong>Sender Address:</strong></td>
                            <td>{awbData.sender.address}</td>
                        </tr>
                        <tr>
                            <td><strong>Receiver Name:</strong></td>
                            <td>{awbData.receiverName}</td>
                        </tr>
                        <tr>
                            <td><strong>Cargo Description:</strong></td>
                            <td>{awbData.cargo.description}</td>
                        </tr>
                        <tr>
                            <td><strong>Cargo Status:</strong></td>
                            <td>{awbData.cargo.status}</td>
                        </tr>
                        <tr>
                            <td><strong>Weight:</strong></td>
                            <td>{awbData.cargo.weight} kg</td>
                        </tr>
                        <tr>
                            <td><strong>Dimensions:</strong></td>
                            <td>{awbData.cargo.width} x {awbData.cargo.height} cm</td>
                        </tr>
                        </tbody>
                    </table>
                </Styled.ModalBody>
            </Styled.ModalContainer>
        </Styled.Overlay>
    );
}