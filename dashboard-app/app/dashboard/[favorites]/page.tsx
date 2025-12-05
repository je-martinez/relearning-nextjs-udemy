import { FavoritesPokemons } from "@/app/pokemons";
export const metadata = {
  title: "Pokemons",
  description: "Just a simple page to show a list of pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold p-4">Favorites Pokemons</h1>
      <FavoritesPokemons />
    </div>
  );
}
