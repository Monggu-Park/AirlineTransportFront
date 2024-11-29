import React, {useState} from "react";
import * as Styled from "./style.js"
import Sidebar from "@/components/Sidebar/index.jsx";
import ProgressIndicator from "@/components/SenderAWBWrite/ProgressIndicator";
import ShipperInfoForm from "@/components/SenderAWBWrite/ShipperInfoForm";
import AWBForm from "@/components/SenderAWBWrite/AWBForm";
import ConsigneeInfoForm from "@/components/SenderAWBWrite/ConsigneeInfoForm";

export default function SenderAWBWrite() {
    const [activeStep, setActiveStep] = useState("Shipper's Information"); // 현재 활성화된 스텝

    const renderStepComponent = () => {
        switch (activeStep) {
            case "Shipper's Information":
                return <ShipperInfoForm shipperInfo={shipperInfo} setShipperInfo={setShipperInfo} />;
            case "Consignee's Information":
                return <ConsigneeInfoForm consigneeInfo={consigneeInfo} setConsigneeInfo={setConsigneeInfo} />;
            case "Shipping Information":
                return <div>Shipping Information Component</div>; // 이후 추가할 컴포넌트
            case "Cargo Information":
                return <div>Cargo Information Component</div>; // 이후 추가할 컴포넌트
            case "Other Information":
                return <div>Other Information Component</div>; // 이후 추가할 컴포넌트
            default:
                return <ShipperInfoForm />;
        }
    };

    const [shipperInfo, setShipperInfo] = useState({
        firstName: "",
        lastName: "",
        address: "",
        accountNumber: "",
    });

    const [consigneeInfo, setConsigneeInfo] = useState({
        firstName: "",
        lastName: "",
        address: "",
        accountNumber: "",
        notifyParty: "",
        accountingInfo: "",
    });

    return (
        <div>
            <Sidebar/>
            <Styled.PageContainer>
                <Styled.ContentContainer>
                    <ProgressIndicator
                        currentStep={activeStep}
                        onStepClick={(step) => setActiveStep(step)} // 클릭 시 스텝 변경
                    />
                    {/* 현재 스텝에 맞는 컴포넌트 렌더링 */}
                    {renderStepComponent()}
                    <AWBForm shipperInfo={shipperInfo} consigneeInfo={consigneeInfo}/>
                </Styled.ContentContainer>
            </Styled.PageContainer>
        </div>
    )
}