
import prismaClient from "../prisma";

class CreateTeamService {
  async execute({ name, pokemons }) {
    const pokeTeam = await prismaClient.team.create({
      data: {
        name: name,
        pokemons: {
          create: pokemons
        }
      },
      include: {
        pokemons: true
      }
    });

    return { pokeTeam };
  }

}

export { CreateTeamService }
