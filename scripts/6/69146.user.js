// ==UserScript==
// @name           flaschensuch script beim fighten alle games
// Version         1.1
// @namespace      by basti1012 (visit http://pennerhack.foren-city.de)
// @description    schaltet das flaschensameln frei wehrend des fightens
// @include        http://*pennergame.de/activities/*
// @include        http://*dossergame.co.uk/activities/*
// @include        http://*menelgame.pl/activities/*
// @include        http://*clodogame.fr/activities/*
// @include        http://*mendigogame.es/activities/*
// @include        http://*serserionline.com/activities/*
// @include        http://*bumrise.com/activities/*
// ==/UserScript==



document.getElementsByClassName('button_skill')[0].disabled = false;

// Copyright by basti1012 fixed by dartchecker777