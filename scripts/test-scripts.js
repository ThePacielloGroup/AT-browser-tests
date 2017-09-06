/* DISPLAY WHETHER ELEMENT HAS BASIC BROWSER SUPPORT
 *
 * The variable isSupported must be defined in a script
 * on the test page preceding the inclusion of this
 * script file.
 */
var displaySupportResults = function(test) {

	// This ID must be on the criteria list
	var criteriaList = document.getElementById("criteria-list");
	var badge = null;
	var successBadge = '<span class="badge-success">Supported</span>';
	var failureBadge = '<span class="badge-failure">Not supported</span>';
	var manualBadge = '<span class="badge-manual">(Manually test)</span>';

	// Look through criteria list items to get appropriate badges
	if (criteriaList && criteriaList.hasChildNodes) {
		var criteriaItems = criteriaList.childNodes;
		for (var i = 0; i < criteriaItems.length; i++) {
			if (criteriaItems[i].nodeName === "LI") {

				for (var j = 0; j < test.length; j++) {

					// Browser support criteria check
					if (criteriaItems[i].id === test[j].id) {
						criteriaItems[i].className += " has-badge";
						if (test[j].pass === true) {
							badge = successBadge;
						} else {
							badge = failureBadge;
						}
						break;
					// Manually tested items
					} else {
						badge = manualBadge;
					}
				}

				// Add the appropriate badge to the list item
				criteriaItems[i].innerHTML = "<span>" + criteriaItems[i].innerHTML + "</span> " + badge;
			}
		}
	}
};

/**
 * Function to get characters from a string
 * and replace them with escaped characters
 * for fancy code printing
 */
function escapeHtml ( text ) {

	var map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;'
	};

	return text.replace(/[&<>"']/g, function ( m ) {
		return map[m];
	});
}


/**
 * Parse test code to copy and reprint inside of
 * generated pre/code blocks
 */
var copyTest = function ( doc ) {

	// get each test-case and copy the markup to be
	// printed as a code block
	var tests = doc.querySelectorAll('.test');

	for ( var i = 0; i < tests.length; i++ ) {
		var codeHeading = doc.createElement('h3');
		var codePre = doc.createElement('pre');
		codePre.innerHTML = '<code class="code-block"></code>';
		codeHeading.classList.add('code-title');
		codeHeading.innerHTML = "Code";
		tests[i].append(codeHeading);
		tests[i].append(codePre);

		// after creating the code block, get the test-case
		// code and re-print inside of it.
		var codeBlock = tests[i].querySelector('.code-block');
		var getCode = tests[i].querySelector('.test-case').innerHTML;

		codeBlock.innerHTML = escapeHtml(getCode).trim();
	}
}
// run!
copyTest( document );
