
import axios from "axios";

class ListPokemonsService {
  async execute() {
    const pokeAPI = "https://pokeapi.co/api/v2/pokemon"

    try {

      const { data } = await axios.get(`${pokeAPI}?limit=30&offset=0/`);

      const { next, previous, results } = data;

      const arrPokemons = results.map((item) => {
        const urlSplited = item.url.split("/");


        return {
          id: Number(urlSplited?.[6]),
          name: item.name,
        }
      })


      const pokemons = await Promise.all(
        arrPokemons.map(async (element) => {
          const { data } = await axios.get(`${pokeAPI}/${element.id}`);
          const { types, sprites } = data;

          return {
            id: element.id,
            name: element.name,
            types: types,
            img: sprites.other.dream_world.front_default,
          };
        }))




      return { pokemons };

    } catch (error) {
      throw new Error('Error List');
    }

  }
}

export { ListPokemonsService }