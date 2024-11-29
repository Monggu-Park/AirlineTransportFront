import React, { useState } from "react";
import * as Styled from "./style";
import SelectRole from "@/components/Login/SelectRole";
import LoginForm from "@/components/Login/LoginForm";
import SenderSignupForm from "@/components/Login/SenderSignupForm";
import {H1} from "@/components/Common/Font/Heading/H1/style.js";
import AirlineSignupForm from "@/components/Login/AirlineSignupForm";
import CustomsSignupForm from "@/components/Login/CustomsSignupForm";


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
                {view === "signup" && <H1>{role} 회원가입 화면입니다.</H1>}
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
                // role에 따라 해당하는 회원가입 폼 컴포넌트로 이동
                role === "화주" ? (
                    <SenderSignupForm role={role} onBack={() => setView("login")} />
                ) : role === "항공사" ? (
                    <AirlineSignupForm role={role} onBack={() => setView("login")} />
                ) : role === "세관" ? (
                    <CustomsSignupForm role={role} onBack={() => setView("login")} />
                ) : null
            )}
        </Styled.LoginContainer>
    );
}