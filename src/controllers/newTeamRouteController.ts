import { Request, Response } from "express";
import { ViewNameLookup } from "./lookups/routingLookup";
import * as CreateTeam from "./commands/createTeam";

export const start = async (req: Request, res: Response): Promise<void> => {
	return res.render(ViewNameLookup.NewTeam);
};

export const create = async (req: Request, res: Response): Promise<void> => {
	console.log(req.body.teamId, req.body.teamName, req.body.nickname, req.body.rank);
	CreateTeam.execute(req.body);
	return res.render(ViewNameLookup.MainMenu);
};