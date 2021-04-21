import { TeamModel } from "./models/teamModel";
import { NewTeam } from "../typeDefinitions";

export const execute = async (newTeam: NewTeam): Promise<void> => {

	const teamToCreate: TeamModel = <TeamModel>{
		teamId: newTeam.teamId,
		teamName: newTeam.teamName,
		nickname: newTeam.nickname,
		rank: newTeam.rank
	};
	console.log("before sync");
	TeamModel.sync().then(() => {
		console.log("after sync");
		TeamModel.create(teamToCreate);
		console.log("after create");
	});
};