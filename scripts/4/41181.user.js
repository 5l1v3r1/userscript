// ==UserScript==
// @name OGame : Smilies
// @description OGame : Smilies in messages
// @include http://*/game/index.php?page=messages*
// @include http://*/game/index.php?page=writemessages*
// @include http://*/game/index.php?page=allianzen*&a=17*
// @exclude	
// *Script edit by Phoenix Achill @ Uni50
// ==/UserScript==

smilies = new Array();
smilies.push(new Array("[img]http://www.abload.de/img/sadwehz.gif[/img]","http://www.abload.de/img/sadwehz.gif"));
smilies.push(new Array("[img]http://www.abload.de/img/tongued0t1.gif[/img]","http://www.abload.de/img/tongued0t1.gif"));
smilies.push(new Array("[img]http://www.abload.de/img/rolleyesxbhi.gif[/img]","http://www.abload.de/img/rolleyesxbhi.gif"));
smilies.push(new Array("[img]http://www.abload.de/img/drye54s.gif[/img]","http://www.abload.de/img/drye54s.gif"));
smilies.push(new Array("[img]http://www.abload.de/img/ohmybfk1.gif[/img]","http://www.abload.de/img/ohmybfk1.gif"));
smilies.push(new Array("[img]http://www.abload.de/img/blushbbhu.gif[/img]","http://www.abload.de/img/blushbbhu.gif"));
smilies.push(new Array("[img]http://www.abload.de/img/biggrin73eq.gif[/img]","http://www.abload.de/img/biggrin73eq.gif"));
smilies.push(new Array("[img]http://www.abload.de/img/blinkraju.gif[/img]","http://www.abload.de/img/blinkraju.gif"));
smilies.push(new Array("[img]http://www.abload.de/img/angryn2ku.gif[/img]","http://www.abload.de/img/angryn2ku.gif"));


if (document.location.href.indexOf('=messages') != -1) {
	function sort_smilies(a,b) { return b[0].length-a[0].length; }
	smilies.sort(sort_smilies);
	var messages = document.evaluate("//tr/th/input[2]/../../preceding::tr[1]/td[@colspan and @class='b']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
	for (var i = 0; i < smilies.length; i++) {
		var smiley = smilies[i][0];
		smiley = smiley.replace(/\\/g,"\\\\");
		smiley = smiley.replace(/\[/g,"\\\[").replace(/\]/g,"\\\]");
		smiley = smiley.replace(/\(/g,"\\\(").replace(/\)/g,"\\\)");
		smiley = smiley.replace(/\{/g,"\\\{").replace(/\}/g,"\\\}");
		smiley = smiley.replace(/\./g,"\\\.").replace(/\+/g,"\\\+").replace(/\*/g,"\\\*").replace(/\?/g,"\\\?");
		smiley = smiley.replace(/\^/g,"\\\^").replace(/\$/g,"\\\$").replace(/\|/g,"\\\|").replace(/\-/g,"\\\-");
		var expression = new RegExp("(^|[^\"'])"+smiley+"([^\"']|$)","gi");
		for (var j = 0; j < messages.snapshotLength; j++) {
			var thisMessage = messages.snapshotItem(j);
			thisMessage.innerHTML = thisMessage.innerHTML.replace(expression,"$1<img src='"+smilies[i][1]+"' alt='"+smilies[i][0]+"' border='0' />$2");
		}
	}
} else {
	var script = document.createElement('span');
	script.innerHTML = '<script type="text/javascript" language="javascript">function addSmiley(smiley) { var message = document.getElementsByName("text")[0]; var str = " " + smiley; message.focus(); var start = message.selectionStart; var starttext = message.value.substring(0,start); var endtext = message.value.substring(message.selectionEnd,message.textLength); message.value = starttext + str + endtext; start += str.length; message.selectionStart = start; message.selectionEnd = start; message.focus(); }</script>';
	var form = document.getElementsByTagName('form')[0];
	form.parentNode.insertBefore(script,form);
	var table = document.evaluate("//textarea/ancestor::table[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
	var row = document.createElement("tr");
	var cell = document.createElement("th");
	cell.setAttribute("colspan","2");
	row.appendChild(cell);
	table.appendChild(row);
	for (var i = 0; i < smilies.length; i++) {
		cell.innerHTML += "<a href=\"javascript:addSmiley('"+smilies[i][0]+"')\"><img src='"+smilies[i][1]+"' alt='"+smilies[i][0]+"' border='0' /></a> ";
	}
}