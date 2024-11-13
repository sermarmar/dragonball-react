import React, { useEffect, useState } from "react";
import { CharacterService } from "../../domain/services/CharacterService";
import { Character } from "../../domain/models/Character";
import { CharacterCard } from "../components/CharacterCard";
import { CardList } from "../components/CardList";


export const CharacterListPage: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const loanCharacter = async() => {
            const chars = await CharacterService.getCharacters();
            setCharacters(chars);
        }
        loanCharacter();
        console.log(characters);
    }, [])

    return(
        <>
            <h1>Lista de personajes de Dragón Ball Z</h1>
            <CardList list={characters} />
        </>
    );
}