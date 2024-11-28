import * as Styled from "./style.js";

export default function H6(props) {
    return (
        <Styled.H6 color={props.color} textAlign={props.text}>{props.text}</Styled.H6>
    )
}