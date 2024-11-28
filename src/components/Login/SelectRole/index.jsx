import * as Styled from "./style.js"

export default function SelectRole({onSelectRole}) {

    return (
        <Styled.RoleContainer>
            <Styled.RoleButton onClick={() => onSelectRole("화주")}>
                화주 로그인
            </Styled.RoleButton>
            <Styled.RoleButton onClick={() => onSelectRole("항공사")}>
                항공사 로그인
            </Styled.RoleButton>
            <Styled.RoleButton onClick={() => onSelectRole("세관")}>
                세관 로그인
            </Styled.RoleButton>
        </Styled.RoleContainer>
    )
}