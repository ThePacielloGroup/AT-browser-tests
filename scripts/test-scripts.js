/* DISPLAY WHETHER ELEMENT HAS BASIC BROWSER SUPPORT
 *
 * The variable isSupported must be defined in a script
 * on the test page preceding the inclusion of this
 * script file.
 */
var displaySupportResults = function() {

	// This ID must be on the criteria list
	var criteriaList = document.getElementById('criteria-list');
	var badge;
	var successBadge = '<span class="badge-success">Supported</span>';
	var failureBadge = '<span class="badge-failure">Not supported</span>';
	var manualBadge = '<span class="badge-manual">(Manually test)</span>';

	// Look through criteria list items to get appropriate badges
	if (criteriaList && criteriaList.hasChildNodes) {
		var criteriaItems = criteriaList.childNodes;
		for (var i = 0; i < criteriaItems.length; i++) {
			if (criteriaItems[i].nodeName === 'LI') {

				// Browser support criteria check
				if (criteriaItems[i].id === 'criteria-support') {
					criteriaItems[i].className += ' has-badge';

					if (isSupported === true) {
						var badge = successBadge;
					} else {
						var badge = failureBadge;
					}

				// Manually tested items
				} else {
					var badge = manualBadge;
				}

				// Add the appropriate badge to the list item
				criteriaItems[i].innerHTML = '<span>' + criteriaItems[i].innerHTML + '</span> ' + badge;

			}
		}
	}

};

displaySupportResults();