// ==UserScript==
// @name         M51
// @id           M51
// @idspace      Whirlpool
// @description    Refining
// @include        http://cyberdine-inc.org/*
// ==/UserScript==

function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function main() {
var strVar="";
strVar += "<script type=\"text\/javascript\">";
strVar += "function calc() {";
strVar += "	var alligior = new Array(       0 ,   0 , 133 ,   0 , 311 , 177 ,   0 ,   0);";
strVar += "	var chollonin = new Array(      0 ,   0 , 133 ,   0 ,   0 ,   0 ,   0 ,   0);";
strVar += "	var Espitium = new Array(       0 ,   0 ,   0 ,  89 ,   0 , 133 ,   0 ,  89);";
strVar += "	var hydrobenol = new Array(     0 , 222 ,   0 , 133 ,   0 ,   0 , 266 , 133);";
strVar += "	var isopropentol = new Array(   0 ,   0 ,   0 ,   0 ,   0 ,   0 ,  44 ,   0);";
strVar += "	var metachropin = new Array(    0 ,   0 ,   0 ,  35 ,   0 ,   0 ,   0 ,   0);";
strVar += "	var phlobotil = new Array(     53 ,   0 ,   0 ,   0 ,   0 ,   0 ,  89 ,   0);";
strVar += "	var plasteosine = new Array(    9 ,   0 ,   0 ,   0 ,  18 ,   0 ,   0 ,   0);";
strVar += "	var polynitrocol = new Array( 177 ,   0 , 177 ,   0 ,   0 ,   0 ,   0 ,   0);";
strVar += "	var polynucleit = new Array(    0 , 177 ,   0 ,   0 ,   0 ,   0 , 177 ,   0);";
strVar += "	var prilumium = new Array(      0 ,   0 ,   0 ,  71 ,   0 ,   0 ,   0 ,   0);";
strVar += "	var statichnol = new Array(     0 ,   0 , 106 ,   0 ,   0 ,   0 ,   0 ,   0);";
strVar += "	var titanium = new Array(       0 ,   0 ,   0 ,   0 ,  27 ,   0 ,   0 ,   0);";
strVar += "	var vitricyl = new Array(       0 ,   0 ,   0 ,   0 ,   0 ,   0 ,  89 ,  89);";
strVar += "";
strVar += "	var e = document.getElementById(\"commodities\");";
strVar += "	var com = e.options[e.selectedIndex].value;";
strVar += "	var amount = document.getElementById(\"amount\").value;";
strVar += "	switch(com)";
strVar += "	{";
strVar += "	case \"1\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*alligior[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*alligior[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*alligior[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*alligior[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*alligior[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*alligior[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*alligior[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*alligior[7];";
strVar += "	break;";
strVar += "	case \"2\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*chollonin[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*chollonin[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*chollonin[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*chollonin[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*chollonin[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*chollonin[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*chollonin[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*chollonin[7];";
strVar += "	break;";
strVar += "	case \"3\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*Espitium[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*Espitium[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*Espitium[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*Espitium[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*Espitium[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*Espitium[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*Espitium[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*Espitium[7];";
strVar += "	break;";
strVar += "	case \"4\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*hydrobenol[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*hydrobenol[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*hydrobenol[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*hydrobenol[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*hydrobenol[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*hydrobenol[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*hydrobenol[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*hydrobenol[7];";
strVar += "	break;";
strVar += "	case \"5\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*isopropentol[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*isopropentol[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*isopropentol[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*isopropentol[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*isopropentol[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*isopropentol[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*isopropentol[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*isopropentol[7];";
strVar += "	break;";
strVar += "	case \"6\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*metachropin[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*metachropin[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*metachropin[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*metachropin[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*metachropin[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*metachropin[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*metachropin[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*metachropin[7];";
strVar += "	break;";
strVar += "	case \"7\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*phlobotil[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*phlobotil[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*phlobotil[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*phlobotil[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*phlobotil[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*phlobotil[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*phlobotil[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*phlobotil[7];";
strVar += "	break;";
strVar += "	case \"8\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*plasteosine[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*plasteosine[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*plasteosine[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*plasteosine[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*plasteosine[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*plasteosine[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*plasteosine[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*plasteosine[7];";
strVar += "	break;";
strVar += "	case \"9\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*polynitrocol[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*polynitrocol[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*polynitrocol[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*polynitrocol[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*polynitrocol[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*polynitrocol[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*polynitrocol[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*polynitrocol[7];";
strVar += "	break;";
strVar += "	case \"10\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*polynucleit[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*polynucleit[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*polynucleit[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*polynucleit[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*polynucleit[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*polynucleit[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*polynucleit[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*polynucleit[7];";
strVar += "	break;";
strVar += "	case \"11\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*prilumium[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*prilumium[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*prilumium[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*prilumium[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*prilumium[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*prilumium[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*prilumium[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*prilumium[7];";
strVar += "	break;";
strVar += "	case \"12\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*statichnol[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*statichnol[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*statichnol[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*statichnol[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*statichnol[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*statichnol[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*statichnol[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*statichnol[7];";
strVar += "	break;";
strVar += "	case \"13\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*titanium[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*titanium[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*titanium[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*titanium[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*titanium[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*titanium[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*titanium[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*titanium[7];";
strVar += "	break;";
strVar += "	case \"14\":";
strVar += "	document.getElementById(\"Helioptris\").value = amount*vitricyl[0];";
strVar += "	document.getElementById(\"Triandlus\").value = amount*vitricyl[1];";
strVar += "	document.getElementById(\"Imentium\").value = amount*vitricyl[2];";
strVar += "	document.getElementById(\"Stermonit\").value = amount*vitricyl[3];";
strVar += "	document.getElementById(\"Titanore\").value = amount*vitricyl[4];";
strVar += "	document.getElementById(\"Epriton\").value = amount*vitricyl[5];";
strVar += "	document.getElementById(\"HDT\").value = amount*vitricyl[6];";
strVar += "	document.getElementById(\"Liquizit\").value = amount*vitricyl[7];";
strVar += "	break;";
strVar += "	default : break;";
strVar += "	}";
strVar += "}";
strVar += "<\/script>";
strVar += "";
strVar += "<form id=\"refining\" style=\"position:absolute;buttom:5px;left:5px;\">";
strVar += "	<table>";
strVar += "		<tr>";
strVar += "			<td>Amount<\/td>";
strVar += "			<td><input type=\"text\" size=\"15\" id=\"amount\"\/><\/td>			";
strVar += "		<\/tr>";
strVar += "		<tr>";
strVar += "			<td>Commodity<\/td>";
strVar += "			<td>";
strVar += "				<select id=\"commodities\">";
strVar += "					<option value=\"1\">Alligior<\/option>";
strVar += "					<option value=\"2\">Chollonin<\/option>";
strVar += "					<option value=\"3\">Espitium<\/option>";
strVar += "					<option value=\"4\">Hydrobenol<\/option>";
strVar += "					<option value=\"5\">Isopropentol<\/option>";
strVar += "					<option value=\"6\">Metachropin<\/option>";
strVar += "					<option value=\"7\">Phlobotil<\/option>";
strVar += "					<option value=\"8\">Plasteosine<\/option>";
strVar += "					<option value=\"9\">Polynitrocol<\/option>";
strVar += "					<option value=\"10\">Polynucleit<\/option>";
strVar += "					<option value=\"11\">Prilumium<\/option>";
strVar += "					<option value=\"12\">Statichnol<\/option>";
strVar += "					<option value=\"13\">Titanium<\/option>";
strVar += "					<option value=\"14\">Vitricyl<\/option>";
strVar += "				<\/select>";
strVar += "			<\/td>";
strVar += "		<\/tr>";
strVar += "		<tr>";
strVar += "			<td><button type=\"button\" onclick=\"calc();\">calc<\/button><\/td>";
strVar += "			<td><\/td>";
strVar += "		<\/tr>";
strVar += "";
strVar += "		<tr>";
strVar += "			<td>Helioptris<\/td>";
strVar += "			<td><input type=\"text\" size=\"15\" id=\"Helioptris\"\/><\/td>";
strVar += "		<\/tr>		";
strVar += "		<tr>";
strVar += "			<td>Triandlus<\/td>";
strVar += "			<td><input type=\"text\" size=\"15\" id=\"Triandlus\"\/><\/td>";
strVar += "		<\/tr>		";
strVar += "		<tr>";
strVar += "			<td>Imentium<\/td>";
strVar += "			<td><input type=\"text\" size=\"15\" id=\"Imentium\"\/><\/td>";
strVar += "		<\/tr>		";
strVar += "		<tr>";
strVar += "			<td>Stermonit<\/td>";
strVar += "			<td><input type=\"text\" size=\"15\" id=\"Stermonit\"\/><\/td>";
strVar += "		<\/tr>		";
strVar += "		<tr>";
strVar += "			<td>Titan ore<\/td>";
strVar += "			<td><input type=\"text\" size=\"15\" id=\"Titanore\"\/><\/td>";
strVar += "		<\/tr>		";
strVar += "		<tr>";
strVar += "			<td>Epriton<\/td>";
strVar += "			<td><input type=\"text\" size=\"15\" id=\"Epriton\"\/><\/td>";
strVar += "		<\/tr>		";
strVar += "		<tr>";
strVar += "			<td>HDT<\/td>";
strVar += "			<td><input type=\"text\" size=\"15\" id=\"HDT\"\/><\/td>";
strVar += "		<\/tr>		";
strVar += "		<tr>";
strVar += "			<td>Liquizit<\/td>";
strVar += "			<td><input type=\"text\" size=\"15\" id=\"Liquizit\"\/><\/td>";
strVar += "		<\/tr>";
strVar += "	<\/table>";
strVar += "<\/form>";


	
	
	jQuery(function($) {
		$("body").append(strVar);
	});
}

addJQuery(main);