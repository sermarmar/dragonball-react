import { CharacterDTO } from "../dtos/CharacterDTO";

export const CharacterFactory = {
    create(data: CharacterDTO) {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            image: data.image,
            race: data.race ?? "No description available"
        }
    }
}