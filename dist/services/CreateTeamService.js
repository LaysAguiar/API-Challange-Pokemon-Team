"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTeamService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class CreateTeamService {
    async execute({ name, pokemons }) {
        const pokeTeam = await prisma_1.default.team.create({
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
exports.CreateTeamService = CreateTeamService;
