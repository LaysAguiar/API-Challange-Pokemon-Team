import { Router } from "express";
import { ListPokemonsController } from "./controllers/ListPokemonsController";
import { CreateTeamController } from "./controllers/CreateTeamController";
import { ListTeamController } from "./controllers/ListTeamController";

const router = Router();

router.get("/pokemons", new ListPokemonsController().handle);
router.post("/pokeTeam", new CreateTeamController().handle);
router.get("/pokeTeam", new ListTeamController().handle);

export { router };