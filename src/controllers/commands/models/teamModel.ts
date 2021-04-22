import { DatabaseConnection } from "./databaseConnection";
import { Model, DataTypes } from "sequelize";


export class TeamModel extends Model {
	public teamId!: number;
	public teamName!: string;
	public nickname!: string;
	public rank!: number;
}

TeamModel.init({
		teamId: {
			field: "teamid",
			type: DataTypes.INTEGER,
			unique: true,
			primaryKey: true,
			allowNull: false
		},
		teamName: {
			field: "teamname",
			type: DataTypes.STRING,
			allowNull: false
		},
		nickname: {
			field: "nickname",
			type: DataTypes.STRING,
			allowNull: false
		},
		rank: {
			field: "rank",
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		modelName: "TeamModel",
		timestamps: false,
		freezeTableName: true,
		sequelize: DatabaseConnection,
		tableName: "teamtable"
	}
);