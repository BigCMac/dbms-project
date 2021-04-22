import Sequelize from "sequelize";

const defaultMaximumPoolSize: number = 5;

export const DatabaseConnection =
	new Sequelize.Sequelize(
		<string>process.env.DATABASE_URL,
		<Sequelize.Options>{
			dialect: "postgres",
			protocol: "postgres",
			dialectOptions: { ssl: true },
			omitNull: true,
			freezeTableName: true,
			pool: <Sequelize.PoolOptions>{
				min: 0,
				acquire: 30000,
				max: defaultMaximumPoolSize
			}
		});

export const createTransaction = async (): Promise<Sequelize.Transaction> => {
	console.log("transacting");
	return DatabaseConnection.transaction();
};