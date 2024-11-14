import { DragonBallApi } from "../../infrastructure/api/DragonBallApi";
import { CharacterFactory } from "../factories/CharacterFactory";
import { Character } from "../models/Character";


export const CharacterService = {
    
    async getCharacters(): Promise<Character[]> {
        if(localStorage.getItem('characters') === null) {
            return DragonBallApi.findAll().then((response) => {
                const characters = response.data.items.map(CharacterFactory.create);
                localStorage.setItem('characters', JSON.stringify(characters));
                
                return characters;
            });
        } else {
            return JSON.parse(localStorage.getItem('characters') || '[]');
        }
        
    }


}