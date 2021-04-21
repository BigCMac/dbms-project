// AJAX
function ajaxGet(resourceRelativeUri, callback) {
	return ajax(resourceRelativeUri, "GET", null, callback);
}

function ajaxPut(resourceRelativeUri, data, callback) {
	return ajax(resourceRelativeUri, "PUT", data, callback);
}

function ajaxPatch(resourceRelativeUri, data, callback) {
	return ajax(resourceRelativeUri, "PATCH", data, callback);
}

function ajaxPost(resourceRelativeUri, data, callback) {
	return ajax(resourceRelativeUri, "POST", data, callback);
}

function ajaxDelete(resourceRelativeUri, callback) {
	return ajax(resourceRelativeUri, "DELETE", null, callback);
}

function ajax(resourceRelativeUri, verb, data, callback) {
	const httpRequest = new XMLHttpRequest();

	return httpRequest;
}