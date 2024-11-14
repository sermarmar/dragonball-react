import React from 'react'
import './App.css'
import { CharacterProvider } from './app/providers/character/CharacterProvider';
import { CharacterRoutes } from './app/router/character.routes';
import { Navigation } from './app/components/Navigation';

/**
 * TODO: usuando la api de dragon ball https://web.dragonball-api.com/
 * 1. Crear un component que muestre un personaje
 * 2. Crear un componente que muestre una lista de personajes
 * 3. Crear un componente que muestre un personaje y que permita agregarlo a un listado de personajes favoritos
 * 
 * R1. Debe tener al menos un provider con toda la data de lso personajes
 */

export const App: React.FC = () => {
    return (
        <CharacterProvider>
            <CharacterRoutes />
        </CharacterProvider>
    );
}
