//WikiSave!
//By: Princess Platinum
//Alpha: Do Not Use!

var buttons = '<a class="wikia-button" onclick="saveDoc()">Save</a>&nbsp;<a class="wikia-button" onclick="loadDoc()">Load</a>&nbsp;';

document.getElementById( 'cke_toolbar_source_1' ).innerHTML += buttons;

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
