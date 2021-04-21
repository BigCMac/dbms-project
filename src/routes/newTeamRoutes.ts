import express from "express";
import { RouteLookup } from "../controllers/lookups/routingLookup";
import * as NewTeamRouteController from "../controllers/newTeamRouteController";

function newTeamRoutes(server: express.Express) {
	server.get(RouteLookup.NewTeam, NewTeamRouteController.start);

	server.post(RouteLookup.NewTeam, NewTeamRouteController.create);
}

module.exports.routes = newTeamRoutes;