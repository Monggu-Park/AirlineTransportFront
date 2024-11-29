import React, { useState } from "react";
import * as Styled from "../LoginForm/style.js";
import H3 from "@/components/Common/Font/Heading/H3/index.jsx";
import {postRegisterAirline} from "@/apis/auth/index.js";

export default function AirlineSignupForm({ role, onBack }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const exAirlineId = "1eb3cbbe-ebcc-4cad-9653-8c0d10d16e7d";  // 예시 airlineId
    const [airlineId, setAirlineId] = useState(exAirlineId);

    const isFormValid = id && name && location && airlineId;

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            customId: id,
            name: name,
            airlineId: airlineId,
            role: role,
        };

        postRegisterAirline(data)
            .then(() => {
                alert(`회원가입 완료: ${name}`);
                onBack();
            })
            .catch((e) => {
                alert("회원가입 실패");
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
                        <H3 text="항공사 id" />
                    </Styled.InputGroupSection>
                    <Styled.Input
                        type="text"
                        value={airlineId}
                        onChange={(e) => setAirlineId(e.target.value)}
                        placeholder="항공사 id를 입력해주세요"
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