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
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque vestibulum dignissim. Quisque ornare egestas gravida. Integer quis ex vulputate, mollis velit ac, condimentum turpis. Nam suscipit sollicitudin lacinia. Fusce sit amet turpis lectus. Sed non libero id metus ornare vulputate eget eget urna. Proin sit amet aliquet ipsum. Proin eu lorem laoreet, pharetra tellus sed, volutpat nisl. Proin consectetur vitae augue sit amet suscipit. Pellentesque venenatis libero justo, nec ornare sapien interdum sed.</Description>
                    <Button variant={'contained'} fullWidth>Adotar</Button>
                </Info>
            </ItemList>
            <ItemList>
                <Photo src={'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQq3cRj6OTuIS3F66-rs1I55ayBShO9ojDJ8K1jCzg5jo-LFlfgCnl4ZNl-SEu5nuOFr1Uizy7qM2trmHDSwsJPieWIkmT_yah44pxTqKJ0BZLgMSIr-pzn&usqp=CAE'}></Photo>
                <Info>
                    <Name>Rex</Name>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque vestibulum dignissim. Quisque ornare egestas gravida. Integer quis ex vulputate, mollis velit ac, condimentum turpis. Nam suscipit sollicitudin lacinia. Fusce sit amet turpis lectus. Sed non libero id metus ornare vulputate eget eget urna. Proin sit amet aliquet ipsum. Proin eu lorem laoreet, pharetra tellus sed, volutpat nisl. Proin consectetur vitae augue sit amet suscipit. Pellentesque venenatis libero justo, nec ornare sapien interdum sed.</Description>
                    <Button variant={'contained'} fullWidth>Adotar</Button>
                </Info>
            </ItemList>
        </ListStyled>
    )
}