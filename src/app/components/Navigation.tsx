import styled from "@emotion/styled";
import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navigation: FC = () => {

    const Navigator = styled.nav`
        margin: 20px 0;
        padding: 20px;
    `
    const List = styled.ul`
        list-style-type: none;
        font-size: 21px;
        display: flex;
        justify-content: center;
        gap: 20px;
    `

    return(
        <Navigator>
            <List>
                <li>
                    <NavLink to="/">Lista</NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">Favoritos</NavLink>
                </li>
            </List>
        </Navigator>
    );
}