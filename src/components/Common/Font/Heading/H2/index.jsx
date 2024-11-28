import * as Styled from "./style.js";

export default function H2(props) {
    return (
        <Styled.H2 color={props.color} textAlign={props.text}>{props.text}</Styled.H2>
    )
}