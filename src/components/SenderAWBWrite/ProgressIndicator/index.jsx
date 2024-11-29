import React from "react";
import * as Styled from "./style";

export default function ProgressIndicator({ currentStep }) {
    const steps = [
        "Shipper's Information",
        "Consignee's Information",
        "Shipping Information",
        "Cargo Information",
        "Other Information",
    ];

    return (
        <Styled.ProgressContainer>
            {steps.map((step, index) => (
                <Styled.Step key={index} active={step === currentStep}>
                    {step}
                </Styled.Step>
            ))}
        </Styled.ProgressContainer>
    );
}