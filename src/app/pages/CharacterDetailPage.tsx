import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../providers/useCharacter";
import { Character } from "../../domain/models/Character";
import styled from "@emotion/styled";

const Container = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    gap: 60px;
    background-color: #fffaef;
    padding: 40px 63px;
    border-radius: 16px;
    border: 1px solid #d7d7d7;
    color: #313131;
`

const Avatar = styled.img`
    width: 250px;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`

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
            <Container>
                <Avatar src={ character.image } alt={ character.name } />
                <Description>
                    <h2>{ character.name }</h2>
                    <p>{ character.description }</p>
                </Description>
            </Container>
        )
    } else {
        return(
            <div>
                <h2>No existe ese personaje</h2>
            </div>
        )
    }
    

}