import * as Styled from "./style.js"

export default function SelectRole() {

    return (
        <Styled.RoleContainer>
            <Styled.RoleButton>화주 로그인</Styled.RoleButton>
            <Styled.RoleButton>항공사 로그인</Styled.RoleButton>
            <Styled.RoleButton>세관 로그인</Styled.RoleButton>
        </Styled.RoleContainer>
    )
}