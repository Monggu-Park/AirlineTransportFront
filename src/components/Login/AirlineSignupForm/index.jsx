import React, {useEffect, useState} from "react";
import * as Styled from "../LoginForm/style.js";
import H3 from "@/components/Common/Font/Heading/H3/index.jsx";
import {postRegisterAirline} from "@/apis/auth/index.js";
import {getAllAirline} from "@/apis/airline/index.js";
import {data} from "react-router-dom";

export default function AirlineSignupForm({ onBack }) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [airlineList, setAirlineList] = useState([]);  // 예시 airlineId
    const [airlineId, setAirlineId] = useState("");

    const isFormValid = id && name && location && airlineId;

    useEffect(() => {
        getAllAirline().then(data => {
            localStorage.setItem("airlineList", JSON.stringify(data));
            setAirlineList(data);
        }).catch((error) => {
            console.log(error);
            const storedAirline = localStorage.getItem("airlineList");
            if (storedAirline) {
                setAirlineList(JSON.parse(storedAirline));
            }
        })
    })

    const handleSelectChange = (e) => {
        setAirlineId(e.target.value);
    }

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
                        <H3 text="항공사 선택"/>
                    </Styled.InputGroupSection>
                    <Styled.Select
                        value={airlineId}
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="" disabled>
                            항공사를 선택해주세요.
                        </option>
                        {airlineList.map((airline) => (
                            <option key={airline.id} value={airline.id}>
                                {airline.name}
                            </option>
                        ))}
                    </Styled.Select>
                </Styled.InputGroup>
                <Styled.InputGroup>
                    <Styled.InputGroupSection>
                        <H3 text="역할 선택" />
                    </Styled.InputGroupSection>
                    <Styled.Select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            역할을 선택해주세요.
                        </option>
                        <option value="Administrator">Administrator</option>
                        <option value="Captain">Captain</option>
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