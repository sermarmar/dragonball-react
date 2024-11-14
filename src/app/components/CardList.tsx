import styled from "@emotion/styled";
import { CharacterCard } from "./CharacterCard";
import { Character } from "../../domain/models/Character";

interface CardListProps{
    list: Character[]
}

export const CardList: React.FC<CardListProps> = ({list}) => {
    
    const List = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: center;
    `

    const cards = list.map(character => {
        return <CharacterCard key={character.id} character={character}/>
    });
    
    return (
        <List>
            { cards }
        </List>
    );
}