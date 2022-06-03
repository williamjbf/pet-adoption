import {TitleStyled, SubtitleStyled} from "./Title.style";

interface TitleProps{
    title:String;
    subtitle?:String | JSX.Element;
}

export default function Title(props: TitleProps){
    return (
        <>
            <TitleStyled>{props.title}</TitleStyled>
            <SubtitleStyled>{props.subtitle}</SubtitleStyled>
        </>
    )
}