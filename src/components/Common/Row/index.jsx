import * as Styled from "./style.js";
import React from "react";

export default function Row(props) {
    return (
        <Styled.Row justifyContent={props.justifyContent} alignItems={props.alignItems} padding={props.padding}>
            {props.children}
        </Styled.Row>
    )
}