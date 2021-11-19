"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTeamController = void 0;
const ListTeamService_1 = require("../services/ListTeamService");
class ListTeamController {
    async handle(request, resposne) {
        const service = new ListTeamService_1.ListTeamService();
        const result = await service.execute();
        return resposne.json(result);
    }
}
exports.ListTeamController = ListTeamController;
