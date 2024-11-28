import * as Styled from "./style.js";

export default function H1(props) {
    return (
        <Styled.H1 color={props.color} textAlign={props.text}>{props.text}</Styled.H1>
    )
}