import styled from "styled-components";

export const AWBContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px; /* 페이지에서 최대 크기를 제한 */
    margin: 0 auto; /* 중앙 정렬 */
    overflow: hidden; /* 필요시 잘리는 부분 처리 */
`;

export const AWBImage = styled.img`
    width: 50%; /* 부모 컨테이너의 너비를 기준으로 조정 */
    max-width: 1200px; /* 최대 크기 제한 */
    height: auto; /* 비율 유지 */
    object-fit: contain; /* 이미지 비율을 유지하며 부모에 맞춤 */
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