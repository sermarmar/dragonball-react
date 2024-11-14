import { FC } from "react";
import { Character } from '../../domain/models/Character';
import styled from "@emotion/styled";
import { useCharacter } from "../providers/character/useCharacter";
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
    padding: 20px 40px;
    z-index: 0;
    display: flex;
    justify-content: space-between;
`
const List = styled.ul`
    list-style-type: none;
`

const Button = styled.button`
    padding: 10px 20px;
    background-color: #a64c65;
    color: white;
    font-weight: bold;
    border-radius: 3px;
    border: none;
`

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
    //const { addFavorite } = useCharacter();

    return (
        <Card>
            <Avatar>
                <Image src={ character.image } alt={ character.name } />
            </Avatar>
            <Description>
                <List>
                    <li>Nombre: { character.name }</li>
                    <li>Raza: { character.race }</li>
                </List>
                <Button>Añadir favorito</Button>
            </Description>
        </Card>
    );
}