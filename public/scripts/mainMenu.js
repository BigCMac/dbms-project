document.addEventListener("DOMContentLoaded", () => {
	getNewTeamActionElement().addEventListener(
		"click",
		() => { window.location.assign("/newTeam"); });

	getNewGameActionElement().addEventListener(
		"click",
		() => { window.location.assign("/newGame"); });

	getNewResultsActionElement().addEventListener(
		"click",
		() => { window.location.assign("/newResults"); });

	getViewTeamsActionElement().addEventListener(
		"click",
		() => { window.location.assign("/viewTeams"); });

	getViewGamesActionElement().addEventListener(
		"click",
		() => { window.location.assign("/viewGames"); });

	getViewResultsActionElement().addEventListener(
		"click",
		() => { window.location.assign("/viewResults"); });
});

// Getters and setters
function getNewGameActionElement() {
	return document.getElementById("newGame");
}

function getNewResultActionElement() {
	return document.getElementById("newResult");
}

function getNewTeamActionElement() {
	return document.getElementById("newTeam");
}

function getViewTeamsActionElement() {
	return document.getElementById("viewTeams");
}

function getViewGamesActionElement() {
	return document.getElementById("viewGames");
}

function getViewResultsActionElement() {
	return document.getElementById("viewResults");
}
// End getters and setters