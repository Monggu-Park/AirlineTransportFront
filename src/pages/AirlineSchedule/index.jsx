import React, {useEffect, useState} from "react";
import * as Styled from "./style.js";
import Schedule from "@/components/Airline/Schedule/index.jsx";

export default function AWBAndSchedule() {
    const [selectedAWB, setSelectedAWB] = useState(null);
    const [awbList, setAwbList] = useState([]);

    useEffect(() => {
        const storedAwbList = localStorage.getItem("AllAwb");
        if (storedAwbList) {
            try {
                setAwbList(JSON.parse(storedAwbList)); // JSON 파싱 후 상태로 설정
            } catch (error) {
                console.error("Error parsing AWB data from localStorage:", error);
                setAwbList([]); // 에러가 발생하면 빈 리스트로 초기화
            }
        } else {
            setAwbList([]); // localStorage에 데이터가 없으면 빈 리스트로 초기화
        }
    }, []);

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
                        <Styled.TableHeader>CargoStatus</Styled.TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    {awbList.map((awb) => (
                        <Styled.TableRow
                            key={awb.id}
                            onClick={() => handleRowClick(awb)}
                            isSelected={selectedAWB && selectedAWB.id === awb.id}
                        >
                            <Styled.TableCell>{awb.id}</Styled.TableCell>
                            <Styled.TableCell>{awb.sender.name}</Styled.TableCell>
                            <Styled.TableCell>{awb.cargo.status}</Styled.TableCell>
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
            <Schedule selectedAwbId={selectedAWB ? selectedAWB.id : null}/>
        </Styled.Container>
    );
}