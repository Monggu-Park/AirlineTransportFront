import React, { useState } from "react";
import * as Styled from "./style.js";
import Schedule from "@/components/Airline/Schedule/index.jsx";

export default function AWBAndSchedule() {
    const [selectedAWB, setSelectedAWB] = useState(null);

    const mockAWBList = [
        {
            id: "dbbce3fa-63db-4574-a124-4fd7d1f55bf1",
            sender: {
                id: "b0bdc624-1dad-4aaa-85fe-76c9bacc236f",
                customId: "tomas",
                name: "park",
                address: "Incheon",
                phoneNumber: "010-0000-0001",
            },
            cargo: {
                id: "1faf2d3d-28d6-4879-b2c2-e7c8672d15ba",
                description: "knife, gun",
                status: "Waiting",
                weight: 4.0,
                width: 8.0,
                height: 9.0,
            },
            schedule: null,
            receiverName: "kiki",
        },
        {
            id: "703ba816-5a68-4819-9728-81711f7ae348",
            sender: {
                id: "1c22c345-91d5-4ddf-9372-51db8e0b9c10",
                customId: "lee",
                name: "john",
                address: "Seoul",
                phoneNumber: "010-1111-2222",
            },
            cargo: {
                id: "2cfdc8ad-0f3f-41e7-a017-d2c6c920529b",
                description: "electronics",
                status: "Approved",
                weight: 10.0,
                width: 15.0,
                height: 20.0,
            },
            schedule: "2023-12-01",
            receiverName: "jane",
        },
    ];

    const handleRowClick = (awb) => {
        setSelectedAWB(awb);
    };

    return (
        <Styled.Container>
            <Styled.LeftPane>
                <Styled.Header>AWB 목록</Styled.Header>
                <Styled.Table>
                    <thead>
                    <tr>
                        <Styled.TableHeader>ID</Styled.TableHeader>
                        <Styled.TableHeader>Sender</Styled.TableHeader>
                        <Styled.TableHeader>Cargo</Styled.TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    {mockAWBList.map((awb) => (
                        <Styled.TableRow
                            key={awb.id}
                            onClick={() => handleRowClick(awb)}
                            isSelected={selectedAWB && selectedAWB.id === awb.id}
                        >
                            <Styled.TableCell>{awb.id}</Styled.TableCell>
                            <Styled.TableCell>{awb.sender.name}</Styled.TableCell>
                            <Styled.TableCell>{awb.cargo.description}</Styled.TableCell>
                        </Styled.TableRow>
                    ))}
                    </tbody>
                </Styled.Table>
            </Styled.LeftPane>

            <Styled.RightPane>
                <Styled.Header>AWB 확인</Styled.Header>
                {selectedAWB ? (
                    <Styled.Details>
                        <p>
                            <strong>AWB ID:</strong> {selectedAWB.id}
                        </p>
                        <p>
                            <strong>Sender:</strong> {selectedAWB.sender.name} ({selectedAWB.sender.address})
                        </p>
                        <p>
                            <strong>Sender Phone:</strong> {selectedAWB.sender.phoneNumber}
                        </p>
                        <p>
                            <strong>Receiver:</strong> {selectedAWB.receiverName}
                        </p>
                        <p>
                            <strong>Cargo:</strong> {selectedAWB.cargo.description} - {selectedAWB.cargo.status}
                        </p>
                    </Styled.Details>
                ) : (
                    <Styled.Placeholder>AWB를 선택해주세요.</Styled.Placeholder>
                )}
            </Styled.RightPane>
            <Schedule/>
        </Styled.Container>
    );
}