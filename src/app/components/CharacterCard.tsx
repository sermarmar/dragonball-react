import { FC } from "react";
import { Character } from '../../domain/models/Character';
import styled from "@emotion/styled";
import { useCharacter } from "../providers/useCharacter";
import { Link } from "react-router-dom";
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
    width: 350px;
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
    &:hover {
        background-color: #904258;
    }
    &:active {
        background-color: #6c3142;
    }
`

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
    const { favorites, addFavorite, removeFavorite } = useCharacter();

    const isFavorite:boolean = favorites.some((fav) => fav.id === character.id);

    const buttonFavorite = () => {
        if(!isFavorite) {
            return (<Button onClick={() => addFavorite(character)}>Añadir favorito</Button>)
        } else {
            return (<Button onClick={() => removeFavorite(character.id)}>Quitar favorito</Button>)
        }
    }

    return (
        <Card>
            <Avatar>
                <Link to={'/detail/' + character.id}>
                    <Image src={ character.image } alt={ character.name } />
                </Link>
            </Avatar>
            <Description>
                <List>
                    <li>Nombre: { character.name }</li>
                    <li>Raza: { character.race }</li>
                </List>
                { buttonFavorite() }
            </Description>
        </Card>
    );
}