import { useContext } from "react"
import { CharacterContext } from "./CharacterContext"

export const useCharacter = () => {
    const context = useContext(CharacterContext);
    
    if(!context) {
        throw new Error("useCharacter debe usarse dentro CharacterProvider");
    }
    return context;
}