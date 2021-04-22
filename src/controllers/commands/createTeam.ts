import { TeamModel } from "./models/teamModel";
import { NewTeam } from "../typeDefinitions";
import * as DatabaseConnection from "./models/databaseConnection";

export const execute = async (req: NewTeam): Promise<void> => {

	const teamToCreate: TeamModel = <TeamModel>{
		teamId: req.teamId,
		teamName: req.teamName,
		nickname: req.nickname,
		rank: req.rank
	};

	const t = await DatabaseConnection.createTransaction();

	console.log("transacted and readdy to create");

	try {
		const teamCreated = await TeamModel.create({teamToCreate}, { transaction: t });
		await t.commit();
		console.log("something occured");
	} catch (error) {
		console.log(" and it was bad");
		await t.rollback();
	}
};