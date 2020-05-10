document.getElementById("button").addEventListener("click", loadData);

function loadData() {
	// create an XHR object
	const xhr = new XMLHttpRequest();

	// Open
	xhr.open("GET", "/api/todos", true);

	// Optional - Used for spinners/loaders
	// xhr.onprogress = function () {
	// 	console.log("READYSTATE", xhr.readyState);
	// };

	xhr.onload = function () {
		console.log("READYSTATE", xhr.readyState);
		if (this.status === 200) {
			console.log(this.responseText);
		}
	};

	// xhr.onreadystatechange = function () {
	// 	if (this.status === 200 && this.readyState === 4) {
	// 		console.log(this.responseText);
	// 	}
	// };

	xhr.send();
}
