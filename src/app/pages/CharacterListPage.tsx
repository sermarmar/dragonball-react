import { FC } from "react";
import { CardList } from "../components/CardList";
import styled from "@emotion/styled";
import { useCharacter } from "../providers/useCharacter";

const Title = styled.h1`
        text-align: center;
        margin-bottom: 40px;
    `

export const CharacterListPage: FC = () => {
    const { characters } = useCharacter();

    return(
        <>
            <Title>Lista de personajes de Dragón Ball Z</Title>          
            <CardList list={characters} />
        </>
    );
}