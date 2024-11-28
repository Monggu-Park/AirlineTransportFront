import styled from "styled-components";
import theme from "@/shared/theme";

export const H5 = styled.div`
    color: ${(props) => props.color || theme.colorSystem.black};
    font-size: ${theme.fontSystem.h5.fontSize};
    font-weight: ${theme.fontSystem.h5.fontWeight};
    line-height: ${theme.fontSystem.h5.lineHeight};
    text-align: ${(props) => props.textAlign || "center"};
`;