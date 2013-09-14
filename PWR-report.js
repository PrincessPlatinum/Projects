//Simple report form for PWR
//Made by member Princess Platinum

$('#report').html('<a class="wikia-button" id="report" onclick="openForm()">Make a Report</a>');

function openForm() {
	$.showCustomModal("Report Form", '<form class="WikiaForm" method="" name=""><fieldset><strong>The area of the url that specifies the wiki, after http:// and before .wikia.com. For instance, community:</strong><br/><input id="UrlName" type="text" placeholder="Community" style="width: 500px"/><br/><strong>The wiki\'s visible name-for instance, Community Central.:</strong><br/><input id="WikiName" type="text" placeholder="Community Central" style="width: 500px"/><br/><strong>Does it need deletion, or does it need revival?:</strong><br/><input id="NeedOf" type="text" placeholder="Revival" style="width: 500px"/><br/><strong>Short 1-3 sentence description of the wiki:</strong><br/><textarea id="WikiSummary" cols="80" rows="10" placeholder="It is full of Lolruses"></textarea></feildset></form>', { id: "reportWindow", width: 650, buttons: [ { id: "cancel", message: "Cancel", handler: function() { cancelform(); } }, { id: "submit", defaultButton: true, message: "Submit", handler: function() { submitform(); setTimeout(cancelform(), 1000); } } ] });
}

//Closes the form
function cancelform() {
    $("#reportWindow").closeModal();
}

//Submits the form
function submitform() {
    var param1 = document.getElementById("UrlName").value,
        param2 = document.getElementById("WikiName").value,
        param3 = document.getElementById("NeedOf").value,
        param4 = document.getElementById("WikiSummary").value,
        full = '<div style="margin: 2px; padding: 12px; border: 10px solid #058781; background-color: #058717; color: white;">The following wiki, the [[w:c:' + param1 + '|\'\'\'<span style="color:white !important;">' + param2 + '</span>\'\'\']], is in need of ' + param3 + '. The following description has been provided for this wiki: ' + param4 + ' Thank you for helping us in our cause!</div>';

    //Ajax URL
    var url = wgServer + '/api.php?action=edit&title=' + encodeURIComponent(mw.config.get("wgPageName")) + '&section=new&text=' + encodeURIComponent(full) + '&token=' + encodeURIComponent(mw.user.tokens.values.editToken);

    $.post(url, function() {
		window.location.reload();
    });
}
