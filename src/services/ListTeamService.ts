
import prismaClient from "../prisma";

class ListTeamService {
  async execute() {
    const team = await prismaClient.team.findMany({
      include: {
        pokemons: true,
      },
    });
    return { team };
  }
}

export { ListTeamService }