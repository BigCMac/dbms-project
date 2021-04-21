import { TeamModel } from "./models/teamModel";
import { NewTeam } from "../typeDefinitions";

export const execute = async (newTeam: NewTeam): Promise<void> => {

	console.log(newTeam.teamId, newTeam.teamName, newTeam.nickname, newTeam.rank);

	const teamToCreate: TeamModel = <TeamModel>{
		teamId: newTeam.teamId,
		teamName: newTeam.teamName,
		nickname: newTeam.nickname,
		rank: newTeam.rank
	};

	TeamModel.create(teamToCreate);
};