import * as Styled from "./style.js";

export default function H3(props) {
    return (
        <Styled.H3 color={props.color} textAlign={props.text}>{props.text}</Styled.H3>
    )
}