import styled from "@emotion/styled";
import { CharacterCard } from "./CharacterCard";

interface CardListProps{
    list: any[]
}

export const CardList: React.FC<CardListProps> = ({list}) => {
    
    const List = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: center;
    `

    const cards = list.map(character => {
        return <CharacterCard character={character}/>
    });
    
    return (
        <List>
            { cards }
        </List>
    );
}