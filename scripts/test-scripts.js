/* DISPLAY WHETHER ELEMENT HAS BASIC BROWSER SUPPORT
 *
 * The variable isSupported must be defined in a script
 * on the test page preceding the inclusion of this
 * script file.
 */

// This ID must be on the criteria list
var criteriaList = document.getElementById('criteria-list');

// This ID must be set on the criteria list item requiring basic browser support
var criteriaSupport = document.getElementById('criteria-support');

var addSuccessBadge = function(criteriaElement) {
	var successBadge = document.createElement('span');
	successBadge.className = 'badge-success';
	successBadge.textContent = 'Support detected!';
	criteriaElement.textContent = criteriaSupport.textContent + ' ';
	criteriaElement.appendChild(successBadge);
};

var addFailureBadge = function(criteriaElement) {
	var failureBadge = document.createElement('span');
	failureBadge.className = 'badge-failure';
	failureBadge.textContent = 'No support detected';
	criteriaElement.textContent = criteriaSupport.textContent + ' ';
	criteriaElement.appendChild(failureBadge);
};

var addManualSupportMsgs = function() {
	var criteriaItems = criteriaList.childNodes;
	for (var i = 0; i < criteriaItems.length; i++) {
		if (criteriaItems[i].nodeName === 'LI' && criteriaItems[i] !== criteriaSupport) {
			criteriaItems[i].textContent = criteriaItems[i].textContent + ' (Manually test)';
			criteriaElement.appendChild(manualTestBadge);
		}
	}
};

var displaySupportResults = function() {
	if (isSupported === true) {
		addSuccessBadge(criteriaSupport);
		addManualSupportMsgs();
	} else {
		addFailureBadge(criteriaSupport);
	}
};

displaySupportResults();