import React, { useState } from "react";
import * as Styled from "./style";
import H3 from "@/components/Common/Font/Heading/H3/index.jsx";

export default function LoginForm({ role, onSelectRole, onSignup }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const isFormValid = username !== "" && password !== "";

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${role} 사용자로 로그인 완료`);
    };

    return (
        <Styled.LoginSection>
            <Styled.Form onSubmit={handleSubmit}>
                <Styled.InputGroup>
                    <Styled.InputGroupSection>
                        <H3 text="아이디" />
                    </Styled.InputGroupSection>
                    <Styled.Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="아이디를 입력해주세요"
                        required
                    />
                </Styled.InputGroup>

                <Styled.InputGroup>
                    <Styled.InputGroupSection>
                        <H3 text="비밀번호" />
                    </Styled.InputGroupSection>
                    <Styled.Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력해주세요"
                        required
                    />
                    <Styled.ShowPasswordBtn
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "숨기기" : "보이기"}
                    </Styled.ShowPasswordBtn>
                </Styled.InputGroup>

                <Styled.SignInButton type="submit" disabled={!isFormValid}>
                    로그인
                </Styled.SignInButton>
                <Styled.SignInButton onClick={onSignup}>
                    회원가입
                </Styled.SignInButton>
                <Styled.SignInButton type="button" onClick={onSelectRole}>
                    이전
                </Styled.SignInButton>
            </Styled.Form>
        </Styled.LoginSection>
    );
}