export interface CharacterDTO {
    id: string;
    name: string;
    description: string;
    'image': URL;
    race?: string;
}