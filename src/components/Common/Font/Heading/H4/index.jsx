import * as Styled from "./style.js";

export default function H4(props) {
    return (
        <Styled.H4 color={props.color} textAlign={props.text}>{props.text}</Styled.H4>
    )
}