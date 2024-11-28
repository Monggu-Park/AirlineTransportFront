import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

export const WelcomeSection = styled.div`
    flex: 1;
    width: 100%;
    height: 100vh; /* 전체 화면 높이 */
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("/src/assets/images/airlineImage.jpg");
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat; 
`;
