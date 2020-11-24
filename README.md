AT-browser-tests
================
Mapping of HTML features Aural UI and how these features are conveyed to users of AT. We will test and record results for:
 * Firefox and Internet Explorer on Windows.
 * Safari and Chrome on OSX
 
Results page: https://thepaciellogroup.github.io/AT-browser-tests/ 

Test Files: https://github.com/ThePacielloGroup/AT-browser-tests/tree/gh-pages/test-files

Process
=======
Initial: fork repo.

* test file (linked from first column of results page) for each element with screen reader(s)
* add results to Results page
* get information about interaction/navigation for element from screen reader documentation and add to Results page
* record audio of interaction with element ONLY, then add audio to Results page
* add any notes
* Create Pull request to this repo.
* repeat above.

Conventions
=======

Test cases:
* Test case file names must be "element.html", "element-element.html" or "element-attribute.html". For example "img.html", "fieldset-legend.html" or "iframe-title.html".
* Page titles and h1 headings for test cases with multiple elements must be "elementName element with elementName element". For example "fieldset element with legend element".

Audio recordings:
* Audio file names must match the corresponding test case file name.
* Audio files must be both .mp3 and .ogg format.
