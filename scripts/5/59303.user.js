// ==UserScript==
// @name           Google Minimalism
// @namespace      mavrev.com
// @version        0.1.0
// @description    Removes all elements except the Google logo (or doodle) and the search box. 
// @include         http://*google*
// @include         https://*google*
// ==/UserScript==

var gec = function(className) {
	return document.getElementsByClassName(className);
}

var get = function(tagName) {
	return document.getElementsByTagName(tagName);
}

var ge = function(id) {
    return document.getElementById(id);
}

ge('ghead').style.display = 'none'; // navigation links
get('font')[0].style.display = 'none'; // search options
gec('lsb')[0].style.display = 'none'; // google search
gec('lsb')[1].style.display = 'none'; // im feeling lucky
ge('footer').style.display = 'none'; // copyright and links