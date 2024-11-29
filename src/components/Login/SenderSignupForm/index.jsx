import React, { useState } from "react";
import * as Styled from "../LoginForm/style.js";
import H3 from "@/components/Common/Font/Heading/H3/index.jsx";
import {postRegisterSender} from "@/apis/auth/index.js";

export default function SignupForm({ onBack }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");

    const isFormValid = id && name && location && phone;

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "customId": id,
            "name": name,
            "address": location,
            "phoneNumber": phone
        };
        postRegisterSender(data).then(() => {
            alert(`회원가입 완료: ${name}`);
            onBack();
        }).catch((e) => {
            alert(`회원가입 실패`);
            console.error(e);
        });

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
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="아이디를 입력해주세요"
                        required
                    />
                </Styled.InputGroup>

                <Styled.InputGroup>
                    <Styled.InputGroupSection>
                        <H3 text="이름" />
                    </Styled.InputGroupSection>
                    <Styled.Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="이름을 입력해주세요"
                        required
                    />
                </Styled.InputGroup>

                <Styled.InputGroup>
                    <Styled.InputGroupSection>
                        <H3 text="거주지" />
                    </Styled.InputGroupSection>
                    <Styled.Input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="거주지를 입력해주세요"
                        required
                    />
                </Styled.InputGroup>

                <Styled.InputGroup>
                    <Styled.InputGroupSection>
                        <H3 text="휴대폰 번호" />
                    </Styled.InputGroupSection>
                    <Styled.Input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="휴대폰 번호를 입력해주세요"
                        required
                    />
                </Styled.InputGroup>

                <Styled.SignInButton type="submit" disabled={!isFormValid}>
                    회원가입
                </Styled.SignInButton>
                <Styled.SignInButton type="button" onClick={onBack}>
                    이전
                </Styled.SignInButton>
            </Styled.Form>
        </Styled.LoginSection>
    );
}