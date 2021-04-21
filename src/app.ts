import path from "path";
import lusca from "lusca";
import dotenv from "dotenv";
import helmet from "helmet";
import express from "express";
import * as fileSystem from "fs";
import bodyParser from "body-parser";
import compression from "compression";
import session from "express-session";

// Load environment variables from .env file
dotenv.config({ path: ".env" });

// Create Express server
const app = express();

// Express configuration
app.set("port", (process.env.PORT || 15100));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(session(<session.SessionOptions>{
	resave: false,
	saveUninitialized: true,
	secret: "AAC5B99C-58ED-4FD0-A502-1489277657B0",
	cookie: <express.CookieOptions>{
		httpOnly: true,
		sameSite: "strict"
	}
}));

app.use(express.static(path.join(__dirname, "../public")));

fileSystem.readdirSync(__dirname + "/routes").forEach(function (routeConfig: string) {
	if (routeConfig.substr(-3) === ".js") {
		const route = require(__dirname + "/routes/" + routeConfig);
		route.routes(app);
	}
});

export default app;