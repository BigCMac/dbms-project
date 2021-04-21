import Sequelize from "sequelize";
import { DatabaseConnection } from "./databaseConnection";
import { Model, InitOptions, ModelAttributes, ModelAttributeColumnOptions } from "sequelize";

export class TeamModel extends Model {
	public teamId!: number;
	public teamName!: string;
	public nickname!: string;
	public rank!: number;
}

TeamModel.init(
	<ModelAttributes>{
		teamId: <ModelAttributeColumnOptions>{
			field: "teamid",
			type: Sequelize.INTEGER,
			unique: true,
			primaryKey: true,
			allowNull: false
		},
		teamName: <ModelAttributeColumnOptions>{
			field: "teamname",
			type: Sequelize.STRING,
			allowNull: false
		},
		nickname: <ModelAttributeColumnOptions>{
			field: "nickname",
			type: Sequelize.STRING,
			allowNull: false
		},
		rank: <ModelAttributeColumnOptions>{
			field: "rank",
			type: Sequelize.INTEGER,
			allowNull: false
		}
	}, <InitOptions>{
		modelName: "teammodel",
		timestamps: false,
		freezeTableName: true,
		sequelize: DatabaseConnection,
		tableName: "teamtable"
	}
);