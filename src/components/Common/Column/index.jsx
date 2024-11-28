import React from "react";
import * as Styled from "./style.js";


export default function Column(props) {
    return (
        <Styled.Column justifyContent={props.justifyContent} alignItems={props.alignItems}>
            {props.children}
        </Styled.Column>
    )
}