import styled from "styled-components";
import theme from "@/shared/theme";

export const H6 = styled.div`
    color: ${(props) => props.color || theme.colorSystem.black};
    font-size: ${theme.fontSystem.h6.fontSize};
    font-weight: ${theme.fontSystem.h6.fontWeight};
    line-height: ${theme.fontSystem.h6.lineHeight};
    text-align: ${(props) => props.textAlign || "center"};
`;