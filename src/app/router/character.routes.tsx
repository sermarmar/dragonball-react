import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from "./Routers";
import { CharacterListPage } from "../pages/CharacterListPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { Navigation } from "../components/Navigation";

export const CharacterRoutes: FC = () => {

    /*const router = createBrowserRouter([
        {
            path: Router.INDEX,
            element: <CharacterListPage />,
        },
        {
            path: Router.FAVORITES,
            element: <Favorites />
        }
    ]);*/
    
    return(
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path={Router.INDEX} element={<CharacterListPage />} />
                <Route path={Router.FAVORITES} element={<FavoritesPage />} />
            </Routes>
        </BrowserRouter>
    )
}