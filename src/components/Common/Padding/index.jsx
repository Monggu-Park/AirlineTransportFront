import * as Styled from "./style.js";


export default function Padding(props) {
    return (
        <Styled.Padding horizontal={props.horizontal} vertical={props.vertical} all={props.all}/>
    )
}