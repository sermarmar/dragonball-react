export interface CharacterDTO {
    id: number;
    name: string;
    description: string;
    'image': URL;
    race?: string;
}