import styled from "styled-components";
import theme from "@/shared/theme";

export const Sub3 = styled.div`
    color: ${(props) => props.color || theme.colorSystem.black};
    font-size: ${theme.fontSystem.sub3.fontSize};
    font-weight: ${theme.fontSystem.sub3.fontWeight};
    line-height: ${theme.fontSystem.sub3.lineHeight};
    text-align: ${(props) => props.textAlign || "center"};
`;