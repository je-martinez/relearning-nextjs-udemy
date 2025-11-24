import { PokemonDetailsResponse, PokemonResponse } from "@/app/pokemons";
import { Result } from "@/app/pokemons/interfaces/pokemons-response";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export async function generateStaticParams() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data: PokemonResponse = await response.json();
  return data.results.map((pokemon: Result) => ({
    id: pokemon.url.split("/").at(-2)!,
  })) as { id: string }[];
}

export async function generateMetadata({ params }: Props) {
  try {
    const { id } = await params;
    const { name, sprites } = await getPokemon(id);
    return {
      title: `#${id} - ${capitalize(name)} - Pokemon`,
      description: `${capitalize(name)} is a pokemon from the Pokémon series.`,
      openGraph: {
        title: `#${id} - ${capitalize(name)} - Pokemon`,
        description: `${capitalize(
          name
        )} is a pokemon from the Pokémon series.`,
        images: [
          {
            url: sprites.front_default,
          },
        ],
      },
    } satisfies Metadata;
  } catch (error) {
    return {
      title: "404 - Page Not Found",
      description: "The page you are looking for does not exist.",
    } satisfies Metadata;
  }
}

const getPokemon = async (id: string): Promise<PokemonDetailsResponse> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: "force-cache",
      // Revalidate the page every 24 hours
      // next: {
      //   revalidate: 60 * 60 * 24,
      // },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    notFound();
  }
};

export default async function PokemonPage({ params }: Props) {
  const { id } = await params;
  const pokemon = await getPokemon(id);
  const { sprites } = pokemon;
  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />

            <div className="flex flex-wrap">
              {pokemon.moves.map((move) => (
                <p key={move.move.name} className="mr-2 capitalize">
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
