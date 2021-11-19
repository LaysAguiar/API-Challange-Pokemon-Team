import { Request, Response } from "express";
import { CreateTeamService } from "../services/CreateTeamService";

class CreateTeamController {
  async handle(request: Request, resposne: Response) {
    const { name, pokemons } = request.body;

    const service = new CreateTeamService();

    const result = await service.execute({ name, pokemons });

    return resposne.json(result)
  }

}

export { CreateTeamController }