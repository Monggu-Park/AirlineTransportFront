import React, {useEffect, useState} from "react";
import * as Styled from "../LoginForm/style.js";
import H3 from "@/components/Common/Font/Heading/H3/index.jsx";
import {postRegisterCustoms} from "@/apis/auth/index.js";
import {getAllCustoms} from "@/apis/customs/index.js";

export default function CustomsSignupForm({ onBack }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [customsList, setCustomsList] = useState([]); // 예시로 고정된 customsId 값을 사용
    const [customsId, setCustomsId] = useState("")
    const isFormValid = id && name && customsId;

    useEffect(() => {
        getAllCustoms().then((data) => {
            localStorage.setItem("customsList", JSON.stringify(data));
            setCustomsList(data);
        }).catch((error) => {
            console.log(error);
            const storedCustoms = localStorage.getItem("customsList");
            if (storedCustoms) {
                setCustomsList(JSON.parse(storedCustoms));
            }
        })
    }, []);

    const handleSelectChange = (e) => {
        setCustomsId(e.target.value);
    };

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
                        <H3 text="세관 선택" />
                    </Styled.InputGroupSection>
                    <Styled.Select
                        value={customsId}
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="" disabled>
                            세관을 선택해주세요.
                        </option>
                        {customsList.map((customs) => (
                            <option key={customs.id} value={customs.id}>
                                {customs.region}
                            </option>
                        ))}
                    </Styled.Select>
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