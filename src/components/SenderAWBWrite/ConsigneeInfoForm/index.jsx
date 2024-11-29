import React from "react";
import * as Styled from "./style";

export default function ConsigneeInfoForm({ consigneeInfo, setConsigneeInfo }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setConsigneeInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Styled.FormContainer>
            <h2>Consignee's Information</h2>
            <Styled.Input
                type="text"
                name="firstName"
                value={consigneeInfo.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <Styled.Input
                type="text"
                name="lastName"
                value={consigneeInfo.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <Styled.Input
                type="text"
                name="address"
                value={consigneeInfo.address}
                onChange={handleChange}
                placeholder="Address"
            />
            <Styled.Input
                type="text"
                name="accountNumber"
                value={consigneeInfo.accountNumber}
                onChange={handleChange}
                placeholder="Account Number"
            />
            <Styled.Input
                type="text"
                name="notifyParty"
                value={consigneeInfo.notifyParty}
                onChange={handleChange}
                placeholder="Notify Party (Same as Consignee)"
            />
            <Styled.Input
                type="text"
                name="accountingInfo"
                value={consigneeInfo.accountingInfo}
                onChange={handleChange}
                placeholder="Accounting Information"
            />
        </Styled.FormContainer>
    );
}