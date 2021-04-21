import Sequelize from "sequelize";
import { DatabaseConnection } from "./databaseConnection";
import { Model, DataTypes, InitOptions, ModelAttributes, ModelAttributeColumnOptions } from "sequelize";

export class TeamModel extends Model {
	public teamId!: string;
	public teamName!: string;
	public nickname!: string;
	public rank!: string;
}

TeamModel.init(
	<ModelAttributes>{
		teamId: <ModelAttributeColumnOptions>{
			field: "teamid",
			type: Sequelize.UUID,
			primaryKey: true
		},
		teamName: <ModelAttributeColumnOptions>{
			field: "teamname",
			type: new DataTypes.STRING(128)
		},
		nickname: <ModelAttributeColumnOptions>{
			field: "nickname",
			type: new DataTypes.STRING(128)
		},
		rank: <ModelAttributeColumnOptions>{
			field: "rank",
			type: Sequelize.INTEGER
		}
	}, <InitOptions>{
		timestamps: false,
		freezeTableName: true,
		sequelize: DatabaseConnection,
		tableName: "teamtable"
	}
);