// ==UserScript==
// @name	Automatic Refresh (PRO)
// @copyright   Tony White
// @description Reloads pages at intervals you set. Customizable intervals for different sites.
// @include      *
// @exclude      about:*
// @exclude      chrome:*

// ==/UserScript==
var dtime, sites, timeS;
sites = new Array();
dtime = new Array();
timeS = new Array();

//////////////////////////////////////////////////////////////////////////////
////////////////////////// SET HERE //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////// Create more sites following the pattern if needed ///////////////////
//////// For the timeS, enter minutes, hours, or seconds /////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
sites[0] = 'http://www.facebook.com/?ref=home'; // site one
dtime[0] = 5; // time for site one
timeS[0] = 'minutes'; // time type for site one

sites[1] = 'domainhere.com'; // site two
dtime[1] = 5; // time for site two
timeS[1] = 'minutes'; // time type for site two

sites[2] = 'domainhere.com'; // site three
dtime[2] = 5; // time for site three
timeS[2] = 'minutes'; // time type for site three
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////







function reload(site,theTime,timeSS) {
var time = 9999*9999*9999;
if(timeSS == 'minutes') {time = theTime * 60 * 1000;}
if(timeSS == 'hours') {time = theTime * 1000 * 60 * 60;}
if(timeSS == 'seconds') {time = theTime * 1000;}
var to = window.setTimeout("document.location.reload();", time);
window.addEventListener("click", function(){if(to) clearTimeout(to); to = window.setTimeout("document.location.reload();", time);}, false);
window.addEventListener("keyup", function(){if(to) clearTimeout(to); to = window.setTimeout("document.location.reload();", time);}, false);
}

for(var i=0; i<sites.length; i++) {
if(!!~location.href.indexOf(sites[i])) {
reload(sites[i], dtime[i], timeS[i]);
}
}