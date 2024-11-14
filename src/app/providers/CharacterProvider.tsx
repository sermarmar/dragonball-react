import React, { useEffect, useState } from "react"
import { Character } from "../../domain/models/Character";
import { CharacterService } from "../../domain/services/CharacterService";
import { CharacterContext } from "./CharacterContext";

interface CharacterProviderProps {
    children: React.ReactNode
}

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const loanCharacter = async() => {
            const chars = await CharacterService.getCharacters();
            setCharacters(chars);
        }
        loanCharacter();
    }, []);

    return(
       <CharacterContext.Provider value={{ characters }}>{ children }</CharacterContext.Provider>
    );
}