import React, { useEffect, useState } from "react"
import { CharacterContext } from "./CharacterContext";
import { Character } from "../../domain/models/Character";
import { CharacterService } from "../../domain/services/CharacterService";
interface CharacterProviderProps {
    children: React.ReactNode
}

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [favorites, setFavorites] = useState<Character[]>([])

    useEffect(() => {
        const loanCharacter = async() => {
            const chars = await CharacterService.getCharacters();
            const favs = await CharacterService.getFavorites();
            setCharacters(chars);
            setFavorites(favs);
            localStorage.setItem('characters', JSON.stringify(chars));
        }
        loanCharacter();        
    }, []);

    const addFavorite = (character: Character) => {
        setFavorites((favorites) => [...favorites, character]);
        CharacterService.createFavorites([...favorites, character]);
    }

    const removeFavorite = (characterId: number) => {
        const listRemove = favorites.filter((fav) => fav.id !== characterId);
        setFavorites(listRemove);
        CharacterService.createFavorites(listRemove);
    }

    return(
       <CharacterContext.Provider value={{ characters, favorites, addFavorite, removeFavorite }}>{ children }</CharacterContext.Provider>
    );
}