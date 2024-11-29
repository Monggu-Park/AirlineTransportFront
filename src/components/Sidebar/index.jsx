import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import { useNavigate, Link } from "react-router-dom";
import flight from "@/assets/icons/flight.png";
import defectData from "@/assets/icons/defectData.png";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <Styled.SidebarContainer>
            <Styled.Logo>Airline Service</Styled.Logo>
            <Styled.MenuList>
                <Styled.MenuItem onClick={() => navigate("/home")}>
                    <Styled.MenuIcon src={flight} alt='홈 화면' />
                    홈
                </Styled.MenuItem>
                <Styled.MenuItem onClick={() => navigate("/senderAWB-write")}>
                    <Styled.MenuIcon src={defectData} alt='awb 서류 작성' />
                    AWB 서류 작성
                </Styled.MenuItem>
            </Styled.MenuList>
        </Styled.SidebarContainer>
    );
};

export default Sidebar;
