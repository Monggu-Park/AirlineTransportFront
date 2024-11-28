import * as Styled from "./style";

export default function Sub1(props) {
    return (
        <Styled.Sub1 color={props.color} textAlign={props.textAlign}>{props.text}</Styled.Sub1>
    )
}