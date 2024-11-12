import { DragonBallApi } from "../../infrastructure/api/DragonBallApi";
import { CharacterFactory } from "../factories/CharacterFactory";
import { Character } from "../models/Character";


export const CharacterService = {
    
    async getCharacters(): Promise<Character[]> {
        return DragonBallApi.findAll().then((response) => {
            return response.data.items.map(CharacterFactory.create)
        });
    }


}