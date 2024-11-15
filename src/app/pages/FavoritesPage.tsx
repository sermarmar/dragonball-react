import { FC } from "react";
import styled from "@emotion/styled";
import { CardList } from '../components/CardList';
import { useCharacter } from "../providers/useCharacter";

export const FavoritesPage: FC = () => {
    const { favorites } = useCharacter();

    const Title = styled.h1`
        text-align: center;
        margin-bottom: 40px;
    `

    return(
        <>
            <Title>Favoritos</Title>
            <CardList list={favorites}></CardList>
        </>
    );
}