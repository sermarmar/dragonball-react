import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Router } from "./Routers";
import { CharacterListPage } from "../pages/CharacterListPage";
import { Favorites } from "../pages/Favorites";

export const CharacterRoutes: FC = () => {

    const router = createBrowserRouter([
        {
            path: Router.INDEX,
            element: <CharacterListPage />,
        },
        {
            path: Router.FAVORITES,
            element: <Favorites />
        }
    ]);
    
    return(
        <RouterProvider router={ router } />
    )
}