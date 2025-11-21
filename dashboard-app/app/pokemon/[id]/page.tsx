import { PokemonDetailsResponse } from "@/app/pokemons";
import { Metadata } from "next";

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const { name, sprites } = await getPokemon(id);
  return {
    title: `#${id} - ${capitalize(name)} - Pokemon`,
    description: `${capitalize(name)} is a pokemon from the Pokémon series.`,
    openGraph: {
      title: `#${id} - ${capitalize(name)} - Pokemon`,
      description: `${capitalize(name)} is a pokemon from the Pokémon series.`,
      images: [
        {
          url: sprites.front_default,
        },
      ],
    },
  } satisfies Metadata;
}

interface Props {
  params: { id: string };
}
const getPokemon = async (id: string): Promise<PokemonDetailsResponse> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  });
  const data = await response.json();
  return data;
};

export default async function PokemonPage({ params }: Props) {
  const { id } = await params;
  const pokemon = await getPokemon(id);
  return <div>PokemonPage {pokemon.name}</div>;
}
