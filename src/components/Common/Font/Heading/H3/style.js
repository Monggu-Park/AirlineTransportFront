import styled from "styled-components";
import theme from "@/shared/theme";

export const H3 = styled.div`
    color: ${(props) => props.color || theme.colorSystem.black};
    font-size: ${theme.fontSystem.h3.fontSize};
    font-weight: ${theme.fontSystem.h3.fontWeight};
    line-height: ${theme.fontSystem.h3.lineHeight};
    text-align: ${(props) => props.textAlign || "center"};
`;