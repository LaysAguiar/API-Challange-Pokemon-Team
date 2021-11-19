import { Request, Response } from "express";
import { ListPokemonsService } from "../services/ListPokemonsService";

class ListPokemonsController {
  async handle(request: Request, resposne: Response) {

    const service = new ListPokemonsService();

    const result = await service.execute();

    return resposne.json(result)
  }

}

export { ListPokemonsController }