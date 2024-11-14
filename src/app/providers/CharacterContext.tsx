import { createContext } from "react";
import { Character } from "../../domain/models/Character";

interface CharacterContextProps {
    characters: Character[]
}

export const CharacterContext = createContext<CharacterContextProps | undefined>(undefined);