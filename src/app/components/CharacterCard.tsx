import React from "react";
import { Character } from '../../domain/models/Character';
import styled from "@emotion/styled";

interface CharacterCardProps {
    character: Character
}

const Card = styled.div`
    border: 1px solid #d7d7d7;
    color: #313131;
    background-color: #fffaef;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    width: 20%;
`

const Avatar = styled.div`
    padding: 40px;
    min-height: 350px;
    max-height: 350px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    min-height: 400px;
    max-width: 400px;
    object-fit: contain;
    z-index: 1;
    position: relative;
`

const Description = styled.div`
    background-color: #f9ebba;
    z-index: 0;
`

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    return (
        <Card>
            <Avatar>
                <Image src={ character.image } alt={ character.name } />
            </Avatar>
            <Description>
                <ul>
                    <li>Nombre: { character.name }</li>
                    <li>Raza: { character.race }</li>
                </ul>
            </Description>
        </Card>
    );
}