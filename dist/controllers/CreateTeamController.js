"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTeamController = void 0;
const CreateTeamService_1 = require("../services/CreateTeamService");
class CreateTeamController {
    async handle(request, resposne) {
        const { name, pokemons } = request.body;
        const service = new CreateTeamService_1.CreateTeamService();
        const result = await service.execute({ name, pokemons });
        return resposne.json(result);
    }
}
exports.CreateTeamController = CreateTeamController;
