import React from "react";
import * as Styled from "./style.js";


export default function SizedBox(props) {

    return (
        <Styled.SizedBox height={props.height} width={props.width}>{props.children}</Styled.SizedBox>
    );
}