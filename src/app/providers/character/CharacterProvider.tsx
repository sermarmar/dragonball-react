import React, { useEffect, useState } from "react"
import { Character } from "../../../domain/models/Character";
import { CharacterService } from "../../../domain/services/CharacterService";
import { CharacterContext } from "./CharacterContext";

interface CharacterProviderProps {
    children: React.ReactNode
}

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [favorites, setFavorites] = useState<Character[]>([])

    useEffect(() => {
        //if(localStorage.getItem('characters') === null) {
            const loanCharacter = async() => {
                const chars = await CharacterService.getCharacters();
                setCharacters(chars);
                localStorage.setItem('characters', JSON.stringify(chars));
            }
            loanCharacter();
        /*} else {
            setCharacters(JSON.parse(localStorage.getItem('characters') || '[]'));
        }*/
        
    }, []);

    const addFavorite = (character: Character) => {
        setFavorites((favorites) => [...favorites, character]);
        //localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    return(
       <CharacterContext.Provider value={{ characters, favorites, addFavorite }}>{ children }</CharacterContext.Provider>
    );
}