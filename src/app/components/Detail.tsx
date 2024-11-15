import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

interface DetailProps {
    children: ReactNode
    avatar: string
    avatarName?: string
}

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
    width: 230px;
    object-fit: contain;
    min-height: 420px;
    max-height: 420px;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`

export const Detail: FC<DetailProps> = ({ children, avatar, avatarName }) => {
    return(
        <Container>
            <Avatar src={ avatar } alt={ avatarName } />
            <Description>
                { children }
            </Description>
        </Container>
    );
}