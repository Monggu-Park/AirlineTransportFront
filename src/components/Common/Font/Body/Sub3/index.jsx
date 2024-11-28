import * as Styled from "./style.js";

export default function Sub3(props) {
    return (
        <Styled.Sub3
            color={props.isActive ? "#007bff" : props.color}
            textAlign={props.textAlign}
        >
            {props.text}
        </Styled.Sub3>
    )
}