import React from "react";
import * as Styled from "./style";
export default function ShipperInfoForm({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Styled.FormContainer>
            <h2>Shipper's and Receiver's Information</h2>
            {/* Sender Information */}
            <Styled.Input
                type="text"
                name="senderId"
                value={formData.senderId || ""}
                onChange={handleChange}
                placeholder="Sender ID"
            />

            {/* Receiver Information */}
            <Styled.Input
                type="text"
                name="receiverName"
                value={formData.receiverName || ""}
                onChange={handleChange}
                placeholder="Receiver Name"
            />
            <Styled.Input
                type="text"
                name="receiverAddress"
                value={formData.receiverAddress || ""}
                onChange={handleChange}
                placeholder="Receiver Address"
            />
            <Styled.Input
                type="tel"
                name="receiverTel"
                value={formData.receiverTel || ""}
                onChange={handleChange}
                placeholder="Receiver Telephone"
            />
        </Styled.FormContainer>
    );
}