// ==UserScript==
// @name           MinichanCleaner
// @namespace      Minichan
// @description    Filters Dutchfag, improved by r04r
// @include        http://minichan.org/topic/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js

// ==/UserScript==
 
$("h3.c strong:contains('Dutchfag'), h3.c strong:contains('Hollanderfaggot')").parent().next().hide().after("<div class='body'>(Dutchfag hidden <a href='javascript:void(0);' onClick='$(this).parent().prev().show();$(this).parent().remove();'>show</a>)</div>");