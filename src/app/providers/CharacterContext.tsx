import { createContext } from "react";
import { Character } from "../../domain/models/Character";

interface CharacterContextProps {
    characters: Character[]
    favorites: Character[]
    addFavorite(character: Character): any
    removeFavorite(characterId: number): any
}

export const CharacterContext = createContext<CharacterContextProps | undefined>(undefined);