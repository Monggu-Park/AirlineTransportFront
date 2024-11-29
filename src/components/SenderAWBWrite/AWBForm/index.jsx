import React from "react";
import * as Styled from "./style";
import airWayBill from "@/assets/images/AirWayBill.png"
export default function AWBForm({ formData }) {
    return (
        <Styled.AWBContainer>
            <Styled.AWBImage src={airWayBill} alt="AWB Document" />

            {/* Shipper's Information */}
            <Styled.InputOverlay style={{ top: "45px", left: "70px" }}>
                {formData.senderId ?? ""}
            </Styled.InputOverlay>

            {/* Receiver's Information */}
            <Styled.InputOverlay style={{ top: "115px", left: "70px" }}>
                {formData.receiverName ?? ""}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "140px", left: "70px" }}>
                {formData.receiverAddress ?? ""}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "105px", left: "190px" }}>
                {formData.receiverTel ?? ""}
            </Styled.InputOverlay>

            {/* Cargo Information */}
            <Styled.InputOverlay style={{ top: "330px", left: "70px" }}>
                {formData.description ?? ""}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "390px", left: "95px" }}>
                {formData.weight ?? 0}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "330px", left: "200px" }}>
                {formData.width ?? 0}
            </Styled.InputOverlay>
            <Styled.InputOverlay style={{ top: "330px", left: "250px" }}>
                {formData.height ?? 0}
            </Styled.InputOverlay>
        </Styled.AWBContainer>
    );
}