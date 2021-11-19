"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTeamService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class ListTeamService {
    async execute() {
        const team = await prisma_1.default.team.findMany({
            include: {
                pokemons: true,
            },
        });
        return { team };
    }
}
exports.ListTeamService = ListTeamService;
