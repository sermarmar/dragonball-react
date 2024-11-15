import { FC } from "react";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from "./Routers";
import { CharacterListPage } from "../pages/CharacterListPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { Navigation } from "../components/Navigation";
import { CharacterDetailPage } from "../pages/CharacterDetailPage";

export const CharacterRoutes: FC = () => {

    /*const routers = createBrowserRouter([
        {
            path: Router.INDEX,
            element: <CharacterListPage />,
            children: [
                {
                    path: Router.CHARACTER_DETAIL,
                    element: <CharacterDetailPage />
                }
            ]
        },
        {
            path: Router.FAVORITES,
            element: <FavoritesPage />
        }
    ]);*/
    
    return(
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path={Router.INDEX} element={<CharacterListPage />} />
                **<Route path={Router.CHARACTER_DETAIL} element={<CharacterDetailPage />} />**
                <Route path={Router.FAVORITES} element={<FavoritesPage />} />
            </Routes>
        </BrowserRouter>
    )
}