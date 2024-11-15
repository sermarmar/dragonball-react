import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../providers/useCharacter";
import { Character } from "../../domain/models/Character";
import { Detail } from "../components/Detail";

export const CharacterDetailPage: FC = () => {
    const { id } = useParams();
    const { characters } = useCharacter();
    const [character, setCharacter] = useState<Character>();
    
    useEffect(() => {
        console.log(characters.find((char) => char.id === parseInt(id || '')) || undefined);
        setCharacter(characters.find((char) => char.id === parseInt(id || '')) || undefined);
    }, []);

    if(character !== undefined) {
        return(
            <Detail avatar={ character.image }>
                <h2>{ character.name }</h2>
                <p>{ character.description }</p>
            </Detail>
        )
    } else {
        return(
            <div>
                <h2>No existe ese personaje</h2>
            </div>
        )
    }
    

}