import React, {useState} from "react";
import * as Styled from "./style.js"
import Sidebar from "@/components/Sidebar/index.jsx";
import ProgressIndicator from "@/components/SenderAWBWrite/ProgressIndicator";
import ShipperInfoForm from "@/components/SenderAWBWrite/ShipperInfoForm";
import AWBForm from "@/components/SenderAWBWrite/AWBForm";
import ConsigneeInfoForm from "@/components/SenderAWBWrite/ConsigneeInfoForm";

export default function SenderAWBWrite() {
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
                    <ProgressIndicator currentStep="Shipper's Information" />
                    <ShipperInfoForm shipperInfo={shipperInfo} setShipperInfo={setShipperInfo} />
                    <ConsigneeInfoForm consigneeInfo={consigneeInfo} setConsigneeInfo={setConsigneeInfo} />
                    <AWBForm shipperInfo={shipperInfo} consigneeInfo={consigneeInfo}/>
                </Styled.ContentContainer>
            </Styled.PageContainer>
        </div>
    )
}