import * as Styled from "./style.js";

export default function H5(props) {
    return (
        <Styled.H5 color={props.color} textAlign={props.text}>{props.text}</Styled.H5>
    )
}