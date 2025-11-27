import { PokemonGrid } from "../../pokemons/components/PokemonGrid";
import { PokemonResponse, SimplePokemon } from "@/app/pokemons";
const getPokemons = async ({
  limit = 10,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
}): Promise<SimplePokemon[]> => {
  const response: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const { results: pokemons } = response;

  // throw new Error("Error fetching pokemons");

  return pokemons.map((pokemon) => ({
    id: Number(pokemon.url.split("/").at(-2)!),
    name: pokemon.name,
  }));
};

export const metadata = {
  title: "Pokemons",
  description: "Just a simple page to show a list of pokemons",
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons({ limit: 250, offset: 0 });
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold p-4">Pokemons</h1>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
