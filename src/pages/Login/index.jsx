import * as Styled from "./style";
import React, { useState } from "react";
import H1 from "@/components/Common/Font/Heading/H1";
import LoginForm from "@/components/Login/LoginForm/index.jsx";
import SelectRole from "@/components/Login/SelectRole/index.jsx";

export default function Login() {

    return (
        <Styled.LoginContainer>
            <Styled.WelcomeSection>
                <H1 text='Airline' />
                <H1 text='로그인 페이지 입니다' />
            </Styled.WelcomeSection>
            <SelectRole/>
            {/*<LoginForm/>*/}


        </Styled.LoginContainer>
    );
}
