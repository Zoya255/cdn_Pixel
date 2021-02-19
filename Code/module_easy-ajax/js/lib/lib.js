function printer (message, level = "info", multiline = false) {
	let date = new Date().toLocaleString()
	let delimiter = ""

	if (multiline) {
		delimiter = "<br>"
	}
	else {
		delimiter = " | "
	}

	if ( level === "debug" ){
		return "<p class='debug'><b>" + date + "</b>" + delimiter + message + "</p>";
	}
	else if ( level === "info" ){
		return "<p class='info'><b>" + date + "</b>" + delimiter + message + "</p>";
	}
	else if ( level === "success" ){
		return "<p class='success'><b>" + date + "</b>" + delimiter + message + "</p>";
	}
	else if ( level === "warn" ){
		return "<p class='warn'><b>" + date + "</b>" + delimiter + message + "</p>";
	}
	else if ( level === "error" ){
		return "<p class='error'><b>" + date + "</b>" + delimiter + message + "</p>";
	}
}
