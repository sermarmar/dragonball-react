import { FC } from "react";
import { CardList } from "../components/CardList";
import { useCharacter } from "../providers/character/useCharacter";
import { Navigation } from "../components/Navigation";


export const CharacterListPage: FC = () => {
    const { characters } = useCharacter();

    return(
        <>
            <h1>Lista de personajes de Dragón Ball Z</h1>
            <Navigation />
            <CardList list={characters} />
        </>
    );
}