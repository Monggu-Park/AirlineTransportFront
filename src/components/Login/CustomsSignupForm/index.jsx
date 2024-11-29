import React, { useState } from "react";
import * as Styled from "../LoginForm/style.js";
import H3 from "@/components/Common/Font/Heading/H3/index.jsx";
import {postRegisterCustoms} from "@/apis/auth/index.js";

export default function CustomsSignupForm({ onBack }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const exCustomId = "fafe6cc3-645d-4e36-b448-45189a046bdf"; // 예시로 고정된 customsId 값을 사용
    const [customsId, setCustomsId] = useState(exCustomId)
    const isFormValid = id && name && customId;

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            customId: id,
            name: name,
            customsId: customsId,
        };

        postRegisterCustoms(data)
            .then(() => {
                alert(`회원가입 완료: ${name}`);
                onBack(); // 가입 후 이전 단계로 돌아가기
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
                        <H3 text="세관 id" />
                    </Styled.InputGroupSection>
                    <Styled.Input
                        type="text"
                        value={customsId}
                        onChange={(e) => setCustomsId(e.target.value)}
                        placeholder="세관 id를 입력해주세요"
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