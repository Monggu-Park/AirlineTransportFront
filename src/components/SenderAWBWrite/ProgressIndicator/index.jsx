import React from "react";
import * as Styled from "./style";

export default function ProgressIndicator({ currentStep, onStepClick }) {
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
                <Styled.Step
                    key={index}
                    active={step === currentStep} // 활성화된 스텝 스타일링
                    onClick={() => onStepClick(step)} // 클릭 시 상위 컴포넌트로 스텝 전달
                >
                    {step}
                </Styled.Step>
            ))}
        </Styled.ProgressContainer>
    );
}