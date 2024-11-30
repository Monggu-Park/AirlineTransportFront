import React, { useState } from "react";
import * as Styled from "./style";
import Sidebar from "@/components/Sidebar/index.jsx";
import ProgressIndicator from "@/components/SenderAWBWrite/ProgressIndicator";
import ShipperInfoForm from "@/components/SenderAWBWrite/ShipperInfoForm";
import AWBForm from "@/components/SenderAWBWrite/AWBForm";
import CargoInfoForm from "@/components/SenderAWBWrite/CargoInfoForm";
import {SubmitButton} from "./style";
import {useNavigate} from "react-router-dom";
export default function SenderAWBWrite() {
    const [activeStep, setActiveStep] = useState("Shipper's Information");

    const [formData, setFormData] = useState({
        senderId: "",
        description: "",
        weight: 0,
        width: 0,
        height: 0,
        receiverName: "",
        receiverAddress: "",
        receiverTel: "",
    });

    const renderStepComponent = () => {
        switch (activeStep) {
            case "Shipper's Information":
                return (
                    <ShipperInfoForm
                        formData={formData}
                        setFormData={setFormData}
                    />
                );
            case "Cargo Information":
                return (
                    <CargoInfoForm
                        formData={formData}
                        setFormData={setFormData}
                    />
                );
            default:
                return null;
        }
    };
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            senderId: formData.senderId,
            cargo: {
                description: formData.description,
                weight: formData.weight,
                width: formData.width,
                height: formData.height,
            },
            receiverName: formData.receiverName,
            receiverAddress: formData.receiverAddress,
            receiverTel: formData.receiverTel,
        };

        createAWB(data).then(() => {
            localStorage.removeItem("myAwb");
            const getResponse = getMyAwb();
            if (getResponse) {
                localStorage.setItem("myAwb", JSON.stringify(getResponse));
            }
            navigate("/home");
            alert('등록완료');
        }).catch((e) => {
            console.error(e);
        })

        //
        // try {
        //     const response = await fetch("https://example.com/api/awb", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(payload),
        //     });
        //
        //     if (response.ok) {
        //         const data = await response.json();
        //         alert("데이터 전송 성공: " + JSON.stringify(data));
        //     } else {
        //         alert("데이터 전송 실패: " + response.status);
        //     }
        // } catch (error) {
        //     console.error("에러 발생:", error);
        //     alert("서버와의 통신 중 오류가 발생했습니다.");
        // }    return (
        //         <div>
        //             <Sidebar/>
        //             <Styled.PageContainer>
        //
        //                 <Styled.ContentContainer>
        //                     <ProgressIndicator
        //                         currentStep={activeStep}
        //                         onStepClick={(step) => setActiveStep(step)}
        //                     />
        //                     {renderStepComponent()}
        //                     <AWBForm formData={formData}/>
        //                     <Styled.SubmitButton onClick={handleSubmit}>sdasf9</Styled.SubmitButton>
        //                 </Styled.ContentContainer>
        //             </Styled.PageContainer>
        //         </div>
        //     );
    };

    return (
        <div>
            <Sidebar/>
            <Styled.PageContainer>

                <Styled.ContentContainer>
                    <ProgressIndicator
                        currentStep={activeStep}
                        onStepClick={(step) => setActiveStep(step)}
                    />
                    {renderStepComponent()}
                    <AWBForm formData={formData}/>
                    <Styled.SubmitButton onClick={handleSubmit}>제출하기</Styled.SubmitButton>
                </Styled.ContentContainer>
            </Styled.PageContainer>
        </div>
    );
}