import React, { useState } from "react";
import * as Styled from "./style.js"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError("ID, PW를 모두 입력해주세요.");
            return;
        }

        console.log("Logging in:", { username, password });
        setError("");
        alert("로그인 성공!");
    };

    return (
        <Styled.Container>
            <Styled.LoginBox>
                <Styled.Title>Login</Styled.Title>
                <Styled.Form onSubmit={handleSubmit}>
                    {error && <Styled.Error>{error}</Styled.Error>}
                    <Styled.Input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Styled.Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Styled.Button type="submit">Login</Styled.Button>
                </Styled.Form>
            </Styled.LoginBox>
        </Styled.Container>
    );
};

export default Login;
