import { Request, Response } from "express";
import { ListTeamService } from "../services/ListTeamService";

class ListTeamController {
  async handle(request: Request, resposne: Response) {

    const service = new ListTeamService();

    const result = await service.execute();

    return resposne.json(result)
  }

}

export { ListTeamController }