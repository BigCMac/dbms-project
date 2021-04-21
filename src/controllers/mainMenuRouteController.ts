import { Request, Response } from "express";
import { ViewNameLookup } from "./lookups/routingLookup";

export const start = async (req: Request, res: Response): Promise<void> => {
	return res.render(ViewNameLookup.MainMenu);
};