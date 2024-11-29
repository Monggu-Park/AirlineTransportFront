import styled from "styled-components";

export const AWBContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto; 
    overflow: hidden; 
`;

export const AWBImage = styled.img`
    width: 50%; 
    max-width: 1200px; 
    height: auto; 
    object-fit: contain; 
`;

export const InputOverlay = styled.div`
    position: absolute;
    font-size: 14px;
    color: black;
    background: rgba(255, 255, 255, 0.8);
    padding: 2px 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;