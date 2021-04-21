document.addEventListener("DOMContentLoaded", () => {
	const teamIdEditElement = getTeamIdEditElement();
	teamIdEditElement.focus();
	teamIdEditElement.select();
});

//Getters and setters
function getTeamIdEditElement() {
	return document.getElementById("teamId");
}
//End getters and setters