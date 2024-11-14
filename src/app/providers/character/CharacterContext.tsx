import { createContext } from "react";
import { Character } from "../../../domain/models/Character";

interface CharacterContextProps {
    characters: Character[]
    favorites: Character[]
    addFavorite(character: Character): any
}

export const CharacterContext = createContext<CharacterContextProps | undefined>(undefined);