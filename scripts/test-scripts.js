/* DISPLAY WHETHER ELEMENT HAS BASIC BROWSER SUPPORT
 *
 * The variable isSupported must be defined in a script
 * on the test page preceding the inclusion of this
 * script file.
 */

var addSuccessBadge = function(criteriaItem) {
	var badge = document.createElement('span');
	badge.className = 'badge-success';
	badge.textContent = 'Supported';
	criteriaItem.appendChild(badge);
};

var addFailureBadge = function(criteriaItem) {
	var badge = document.createElement('span');
	badge.className = 'badge-failure';
	badge.textContent = 'Not supported';
	criteriaItem.appendChild(badge);
};

var addManualTestBadge = function(criteriaItem) {
	var badge = document.createElement('span');
	badge.className = 'badge-manual';
	badge.textContent = '(Manually test)';
	criteriaItem.appendChild(badge);
};

var displaySupportResults = function() {

	// This ID must be on the criteria list
	var criteriaList = document.getElementById('criteria-list');

	// Look through criteria list items
	if (criteriaList && criteriaList.hasChildNodes) {
		var criteriaItems = criteriaList.childNodes;
		for (var i = 0; i < criteriaItems.length; i++) {
			if (criteriaItems[i].nodeName === 'LI') {

				// Need an extra space
				criteriaItems[i].textContent = criteriaItems[i].textContent + ' ';

				// Browser support criteria check
				if (criteriaItems[i].id === 'criteria-support') {
					if (isSupported === true) {
						addSuccessBadge(criteriaItems[i]);
					} else {
						addFailureBadge(criteriaItems[i]);
					}

				// Manually tested items
				} else {
					addManualTestBadge(criteriaItems[i]);
				}

			}
		}
	}

};

displaySupportResults();