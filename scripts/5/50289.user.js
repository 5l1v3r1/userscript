// ==UserScript==
// @name           pantip-symbol
// @namespace      tag:796c39c3-c0d5-4168-be63-f822469bd72e,2009-05-28
// @description    Fix Symbol font display for TIS-620 pages
// @include        http://www.pantip.com/cafe/*.html*
// @include        http://www.pantip.com/tech/*.html*
// ==/UserScript==

// Replace Symbol characters with UNICODE characters.
// Adapted from http://userscripts.org/scripts/review/42131 
// and http://everything2.com/title/Make%2520pages%2520using%2520the%2520Symbol%2520font%2520display%2520correctly%2520in%2520Mozilla%252FFirefox
// for TIS-620 pages. 

var symbolmap1 = [
0x0000,0x0001,0x0002,0x0003,0x0004,0x0005,0x0006,0x0007,
0x0008,0x0009,0x000A,0x000B,0x000C,0x000D,0x000E,0x000F,
0x0010,0x0011,0x0012,0x0013,0x0014,0x0015,0x0016,0x0017,
0x0018,0x0019,0x001A,0x001B,0x001C,0x001D,0x001E,0x001F,
0x0020,0x0021,0x2200,0x0023,0x2203,0x0025,0x0026,0x220B,
0x0028,0x0029,0x002A,0x002B,0x002C,0x2212,0x002E,0x002F,
0x0030,0x0031,0x0032,0x0033,0x0034,0x0035,0x0036,0x0037,
0x0038,0x0039,0x003A,0x003B,0x003C,0x003D,0x003E,0x003F,
0x2245,0x0391,0x0392,0x03A7,0x0394,0x0395,0x03A6,0x0393,
0x0397,0x0399,0x03D1,0x039A,0x039B,0x039C,0x039D,0x039F,
0x03A0,0x0398,0x03A1,0x03A3,0x03A4,0x03A5,0x03C2,0x03A9,
0x039E,0x03A8,0x0396,0x005B,0x2234,0x005D,0x22A5,0x005F,
0x203E,0x03B1,0x03B2,0x03C7,0x03B4,0x03B5,0x03C6,0x03B3,
0x03B7,0x03B9,0x03D5,0x03BA,0x03BB,0x03BC,0x03BD,0x03BF,
0x03C0,0x03B8,0x03C1,0x03C3,0x03C4,0x03C5,0x03D6,0x03C9,
0x03BE,0x03C8,0x03B6,0x007B,0x007C,0x007D,0x223C,0x007F
];
var symbolmap2 = [
0x0000,0x03D2,0x2032,0x2264,0x2215,0x221E,0x0192,0x2663,
0x2666,0x2665,0x2660,0x2194,0x2190,0x2191,0x2192,0x2193,
0x00B0,0x00B1,0x2033,0x2265,0x00D7,0x221D,0x2202,0x2022,
0x00F7,0x2260,0x2261,0x2248,0x2026,0x2502,0x2500,0x21B5,
0x2135,0x2111,0x211C,0x2118,0x2297,0x2295,0x2205,0x2229,
0x222A,0x2283,0x2287,0x2284,0x2282,0x2286,0x2208,0x2209,
0x2220,0x2207,0x00AE,0x00A9,0x2122,0x220F,0x221A,0x22C5,
0x00AC,0x2227,0x2228,0x0000,0x0000,0x0000,0x0000,0x21D3,
0x25CA,0x2329,0x00AE,0x00A9,0x2122,0x2211,0x239B,0x239C,
0x239D,0x23A1,0x23A2,0x23A3,0x23A7,0x23A8,0x23A9,0x23AA,
0x0000,0x232A,0x222B,0x2320,0x23AE,0x2321,0x239E,0x239F,
0x23A0,0x23A4,0x23A5,0x23A6,0x0000,0x0000,0x0000,0x0000
];

function convertText(text) {
  var s = "";
	for (var i=0; i<text.length; ++i) {
		var cc;
    cc = text.charCodeAt(i);
		if (cc<128) {
		  if (symbolmap1[cc]>0) cc = symbolmap1[cc];
		} else if (0x0E00<=cc && cc<0x0E60) {
		  if (symbolmap2[cc-0x0E00]>0) cc = symbolmap2[cc-0x0E00];
    }
		s += String.fromCharCode(cc);
	}
	return s;
}

function check(element,fixfont) {
	var font = '';
	try {
	  font = document.defaultView.getComputedStyle(element,'').fontFamily;
	} catch (e) {/*GM_log("Err: "+e)*/}
	// Don't stop if style can't be found. Some don't work like that.
	var bfix = (font.toLowerCase()=='symbol') || (font=='' && fixfont);
	if (bfix && element.childNodes.length==0)
		element.textContent = convertText(element.textContent);
	// Go through elements inside and change them.
  for (var a=0; a<element.childNodes.length; ++a)
		check(element.childNodes[a],bfix);
}

check(document,false); // check all parts of the page recursively