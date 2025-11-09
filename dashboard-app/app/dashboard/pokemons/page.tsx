import { PokemonResponse, SimplePokemon } from "@/app/pokemons/interfaces";
import Image from "next/image";
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
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <span>{pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
