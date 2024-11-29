import React from "react";
import * as Styled from "./style";

export default function ShipperInfoForm({ shipperInfo, setShipperInfo }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setShipperInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Styled.FormContainer>
            <h2>Shipper's Information</h2>
            <Styled.Input
                type="text"
                name="firstName"
                value={shipperInfo.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <Styled.Input
                type="text"
                name="lastName"
                value={shipperInfo.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <Styled.Input
                type="text"
                name="address"
                value={shipperInfo.address}
                onChange={handleChange}
                placeholder="Address"
            />
            <Styled.Input
                type="text"
                name="accountNumber"
                value={shipperInfo.accountNumber}
                onChange={handleChange}
                placeholder="Account Number"
            />
        </Styled.FormContainer>
    );
}