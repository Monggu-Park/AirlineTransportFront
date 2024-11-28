import React, { useState } from "react";
import * as Styled from "./style";
import SelectRole from "@/components/Login/SelectRole/index.jsx";
import LoginForm from "@/components/Login/LoginForm/index.jsx";
import SignupForm from "@/components/Login/SignupForm/index.jsx";
import {H1} from "@/components/Common/Font/Heading/H1/style.js";


export default function Login() {
    const [view, setView] = useState("selectRole"); // 현재 화면 상태: selectRole, login, signup
    const [role, setRole] = useState(""); // 선택한 역할

    const handleSelectRole = (selectedRole) => {
        setRole(selectedRole);
        setView("login");
    };

    return (
        <Styled.LoginContainer>
            <Styled.WelcomeSection>
                <H1>Airline</H1>
                {view === "login" && <H1>{`${role} 로그인 화면입니다.`}</H1>}
                {view === "signup" && <H1>회원가입 화면입니다.</H1>}
            </Styled.WelcomeSection>

            {view === "selectRole" && (
                <SelectRole
                    onSelectRole={handleSelectRole}
                />
            )}

            {view === "login" && (
                <LoginForm
                    role={role}
                    onSelectRole={() => setView("selectRole")}
                    onSignup={() => setView("signup")}
                />
            )}

            {view === "signup" && (
                <SignupForm
                    onBack={() => setView("login")}
                />
            )}
        </Styled.LoginContainer>
    );
}