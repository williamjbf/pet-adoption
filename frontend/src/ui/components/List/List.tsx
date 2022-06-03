import {Info,
Description,
ItemList,
Name,
Photo,
ListStyled} from './List.style'
import {Button} from "@mui/material";
import {Pet} from "../../../data/@types/Pet";
import {TextService} from "../../../data/services/TextService";

interface ListProps{
    pets: Pet[];
}

export default function List(props: ListProps){
    const maxtextSize = 200
    return(
        <ListStyled>
            {props.pets.map(pet =>(
                <ItemList key={pet.id}>
                    <Photo src={pet.photo}/>
                    <Info>
                        <Name>{pet.name}</Name>
                        <Description>{TextService.limitText(pet.history,200)}</Description>
                        <Button variant={'contained'} fullWidth>Adotar</Button>
                    </Info>
                </ItemList>
                )
            )}
        </ListStyled>
    )
}