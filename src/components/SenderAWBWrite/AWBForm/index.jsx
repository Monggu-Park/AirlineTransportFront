import React from "react";
import * as Styled from "./style";
import airWayBill from "@/assets/images/AirWayBill.png"

export default function AWBForm({ shipperInfo, consigneeInfo }) {
    return (
        <Styled.AWBContainer>
            <Styled.AWBImage src={airWayBill} alt="AWB Document" />

            {/* Shipper's Information */}
            <Styled.InputOverlay style={{ top: "45px", left: "70px" }}>
                {shipperInfo.firstName} {shipperInfo.lastName}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "70px", left: "70px" }}>
                {shipperInfo.address}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "35px", left: "190px" }}>
                {shipperInfo.accountNumber}
            </Styled.InputOverlay>

            {/* Consignee's Information */}
            <Styled.InputOverlay style={{ top: "200px", left: "100px" }}>
                {consigneeInfo.firstName} {consigneeInfo.lastName}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "250px", left: "100px" }}>
                {consigneeInfo.address}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "300px", left: "100px" }}>
                {consigneeInfo.accountNumber}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "350px", left: "100px" }}>
                {consigneeInfo.notifyParty}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "400px", left: "100px" }}>
                {consigneeInfo.accountingInfo}
            </Styled.InputOverlay>
        </Styled.AWBContainer>
    );
}