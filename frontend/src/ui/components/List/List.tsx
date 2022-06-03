import {Info,
Description,
ItemList,
Name,
Photo,
ListStyled} from './List.style'
import {Button} from "@mui/material";

export default function List(){
    return(
        <ListStyled>
            <ItemList>
                <Photo src={'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQq3cRj6OTuIS3F66-rs1I55ayBShO9ojDJ8K1jCzg5jo-LFlfgCnl4ZNl-SEu5nuOFr1Uizy7qM2trmHDSwsJPieWIkmT_yah44pxTqKJ0BZLgMSIr-pzn&usqp=CAE'}></Photo>
                <Info>
                    <Name>Rex</Name>
                    <Description>lorem</Description>
                    <Button variant={'contained'}>Adotar</Button>
                </Info>
            </ItemList>
        </ListStyled>
    )
}