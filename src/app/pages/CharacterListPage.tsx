import React, { useEffect, useState } from "react";
import { CharacterService } from "../../domain/services/CharacterService";
import { Character } from "../../domain/models/Character";


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

    const cardsCharacter = characters.map(character => 
        <div className="card">
            <div className="character">
                <img src={ character.image } alt={ character.name } />
            </div>
            <div className="description">
                <ul>
                    <li>Nombre: { character.name }</li>
                    <li>Raza: { character.race }</li>
                    <li>Descripcion: { character.description }</li>
                </ul>
            </div>
        </div>
    );

    return(
        <>
            <h1>Lista de personajes de Dragón Ball Z</h1>
            { cardsCharacter }
        </>
    );
}