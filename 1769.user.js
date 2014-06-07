// ==UserScript==
// @include		http://urbandead.com/map.cgi*
var tables = document.getElementsByTagName("table");
if (tables.length > 0) {
	var table = tables[0];
	if (table.rows.length > 0) {
		var row = table.rows.item(0);
		if (row.cells.length > 1) {
			var ps = row.cells.item(1).getElementsByTagName("p");
			if (ps.length > 0) {
				var p = ps.item(0);
				var bs = p.getElementsByTagName("b");
				if (bs.length > 0) {
					var b = bs.item(0);
					for (var i=0; i < b.childNodes.length; ++i) {
						var n = b.childNodes.item(i);
						if (n.nodeType == 8) {
							var newText = document.createTextNode(n.nodeValue);
							b.appendChild(newText);
						} 
					}
				}
			}
		}
	}
}