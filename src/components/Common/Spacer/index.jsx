import * as Styled from "./style.js";

// Direction = "horizontal" | "vertical";


export default function Spacer(props) {
    return (
        <Styled.Spacer flex={props.flex} direction={props.direction}/>
    )
}