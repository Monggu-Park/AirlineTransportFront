import React from "react";
import * as Styled from "./style";
import airWayBill from "@/assets/images/AirWayBill.png"

export default function AWBForm({ shipperInfo }) {
    return (
        <Styled.AWBContainer>
            <Styled.AWBImage src={airWayBill} alt="AWB Document" />
            <Styled.InputOverlay style={{ top: "45px", left: "70px" }}>
                {shipperInfo.firstName} {shipperInfo.lastName}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "70px", left: "70px" }}>
                {shipperInfo.address}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "35px", left: "190px" }}>
                {shipperInfo.accountNumber}
            </Styled.InputOverlay>
        </Styled.AWBContainer>
    );
}