import * as Styled from "./style";
import React, { useState } from "react";
import H1 from "@/components/Common/Font/Heading/H1";
import LoginForm from "@/components/Login/LoginForm/index.jsx";
import SelectRole from "@/components/Login/SelectRole/index.jsx";

export default function Login() {
    const [selectedRole, setSelectedRole] = useState("");

    return (
        <Styled.LoginContainer>
            <Styled.WelcomeSection>
                {selectedRole? (
                    <H1 text={selectedRole} />
                ) : (
                    <H1 text='Airline' />
                )
                }
                <H1 text='로그인 페이지 입니다' />
            </Styled.WelcomeSection>
            {selectedRole ? (
                <LoginForm role={selectedRole} onSelectRole={(role) => setSelectedRole(role)}/> // role 선택 시 LoginForm 렌더링
            ) : (
                <SelectRole onSelectRole={(role) => setSelectedRole(role)} /> // role 선택 화면 렌더링
            )}


        </Styled.LoginContainer>
    );
}
