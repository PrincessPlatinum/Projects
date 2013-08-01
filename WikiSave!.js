//WikiSave! adds the ability to save an article to your browser so that you may continue working on it later. This only works if you are editing in source mode!
//By: Princess Platinum
//Alpha: Do Not Use!

setInterval(addButtons, 1000);

function addButtons() {
	var buttons = '<a id="save-button" class="wikia-button" onclick="saveDoc()">Save</a>&nbsp;<a id="load-button" class="wikia-button" onclick="loadDoc()">Load</a>&nbsp;';
	if (document.getElementById( 'save-button' ) || document.getElementById( 'load-button' )) {
		return;
	} else {
		document.getElementById( 'cke_toolbar_source_1' ).innerHTML += buttons;
	}
}

function saveDoc() {
    var Document = document.getElementById( 'cke_contents_wpTextbox1' ).getElementsByTagName( 'textarea' )[0].value || 'No Content Saved!';
    if (typeof (Storage) !== "undefined") {
        localStorage.wikisave = Document;
        alert("Document Saved");
    } else {
        alert("Please use a modern browser");
    }
}

function loadDoc() {
    if (typeof (Storage) !== "undefined") {
        document.getElementById( 'cke_contents_wpTextbox1' ).getElementsByTagName( 'textarea' )[0].value = localStorage.wikisave;
    } else {
        alert("Please use a modern browser or save some content");
    }
}
