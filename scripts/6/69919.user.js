// ==UserScript==
// @name           Redeem Quick - Login
// @namespace      k0st4s
// @description      This baby will autofill the fields in the ptzplace login page!
// @include        *k0st4s.org*
// @include        *ptzplace.lockerz.com*
// ==/UserScript==

var email = "emailadres"; //emailaddress
var combination = "wachtwoord"; //password

document.getElementById("email").value = email;
document.getElementById("combination").value = combination;