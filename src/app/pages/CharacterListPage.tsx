import { CardList } from "../components/CardList";
import { useCharacter } from "../providers/useCharacter";


export const CharacterListPage: React.FC = () => {
    const { characters } = useCharacter();

    return(
        <>
            <h1>Lista de personajes de Dragón Ball Z</h1>
            <CardList list={characters} />
        </>
    );
}