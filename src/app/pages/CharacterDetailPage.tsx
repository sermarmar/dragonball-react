import { FC } from "react";
import { Character } from "../../domain/models/Character";

interface CharacterDetailProps {
    character: Character
}

export const CharacterDetail: FC<CharacterDetailProps> = ({ character }) => {

    return(
        <div>
            <img src={ character.image } alt={ character.name } />
            <div>
                
            </div>
        </div>
    )

}