"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPokemonsController = void 0;
const ListPokemonsService_1 = require("../services/ListPokemonsService");
class ListPokemonsController {
    async handle(request, resposne) {
        const service = new ListPokemonsService_1.ListPokemonsService();
        const result = await service.execute();
        return resposne.json(result);
    }
}
exports.ListPokemonsController = ListPokemonsController;
