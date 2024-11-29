import React, {useState} from "react";
import * as Styled from "./style.js"
import Sidebar from "@/components/Sidebar/index.jsx";
import ProgressIndicator from "@/components/SenderAWBWrite/ProgressIndicator/index.jsx";
import ShipperInfoForm from "@/components/SenderAWBWrite/ShipperInfoForm/index.jsx";
import AWBForm from "@/components/SenderAWBWrite/AWBForm/index.jsx";

export default function SenderAWBWrite() {
    const [shipperInfo, setShipperInfo] = useState({
        firstName: "",
        lastName: "",
        address: "",
        accountNumber: "",
    });

    return (
        <div>
            <Sidebar/>
            <Styled.PageContainer>
                <Styled.ContentContainer>
                    <ProgressIndicator currentStep="Shipper's Information" />
                    <ShipperInfoForm shipperInfo={shipperInfo} setShipperInfo={setShipperInfo} />
                    <AWBForm shipperInfo={shipperInfo} />
                </Styled.ContentContainer>
            </Styled.PageContainer>
        </div>
    )
}