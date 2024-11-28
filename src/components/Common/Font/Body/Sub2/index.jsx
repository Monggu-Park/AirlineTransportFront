import * as Styled from "./style.js";

export default function Sub2(props) {
    return (
        <Styled.Sub2 color={props.color} textAlign={props.textAlign}>{props.text}</Styled.Sub2>
    )
}