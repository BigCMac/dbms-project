import { Request, Response } from "express";
import { ViewNameLookup } from "./lookups/routingLookup";
import * as Helper from "./commands/createTeam";

export const start = async (req: Request, res: Response): Promise<void> => {
	return res.render(ViewNameLookup.NewTeam);
};

export const create = async (req: Request, res: Response): Promise<void> => {
	Helper.execute(req.body);
	return res.render(ViewNameLookup.MainMenu);
};