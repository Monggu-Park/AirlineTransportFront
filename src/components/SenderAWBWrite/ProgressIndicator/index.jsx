import React from "react";
import * as Styled from "./style";

export default function ProgressIndicator({ currentStep, onStepClick }) {
    const steps = [
        "Shipper's Information",
        "Cargo Information",

    ];

    return (
        <Styled.ProgressContainer>
            {steps.map((step, index) => (
                <Styled.Step
                    key={index}
                    active={step === currentStep}
                    onClick={() => onStepClick(step)}
                >
                    {step}
                </Styled.Step>
            ))}
        </Styled.ProgressContainer>
    );
}