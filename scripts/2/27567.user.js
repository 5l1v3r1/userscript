// ==UserScript==
// @name           SequentialGlitchMonkey
// @namespace      http://polog.org/
// @include        *
// ==/UserScript==
// based on 
// GlitchMonkey http://userscripts.org/scripts/show/9653 
// LDR - Signal http://userscripts.org/scripts/show/12781


var w = unsafeWindow;
var MP3_L = 'data:audio/mpeg;base64,'+
    'SUQzAgAAAAAQNFRUMgAAAwBMAENPTQAAEABlbmdpVHVuUEdBUAAwAABURU4AAA8AaVR1bmVzIHY3'+
    'LjYuMgBDT00AAGgAZW5naVR1bk5PUk0AIDAwMDAwMUEyIDgwMDAwMDAwIDAwMDAwMkUwIDAwMDAw'+
    'MDAyIDAwMDAwMDAwIDAwMDAwMDAwIDAwMDA2MTQ3IDAwMDAwMjE2IDAwMDAwMDAwIDAwMDAwMDAw'+
    'AENPTQAAggBlbmdpVHVuU01QQgAgMDAwMDAwMDAgMDAwMDAyMTAgMDAwMDA4RDUgMDAwMDAwMDAw'+
    'MDAwMTQ5QiAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAw'+
    'MDAwMCAwMDAwMDAwMCAwMDAwMDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    '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'+
    'QUSIaexoqqoagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AP/7kkDSAAGnBzeD+8CQAaAm8CwAAAPMGt4P6eJABQBbwHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAA=';
var MP3_R = 'data:audio/mpeg;base64,'+
    'SUQzAgAAAAAQNFRUMgAAAwBSAENPTQAAEABlbmdpVHVuUEdBUAAwAABURU4AAA8AaVR1bmVzIHY3'+
    'LjYuMgBDT00AAGgAZW5naVR1bk5PUk0AIDgwMDAwMDAwIDAwMDAwMUM5IDAwMDAwMDAwIDAwMDAw'+
    'MzM1IDAwMDAwMDAwIDAwMDAwMDAwIDAwMDAwMDFBIDAwMDA1QzEwIDAwMDAwMDAwIDAwMDAwMDAw'+
    'AENPTQAAggBlbmdpVHVuU01QQgAgMDAwMDAwMDAgMDAwMDAyMTAgMDAwMDA4Q0EgMDAwMDAwMDAw'+
    'MDAwMTRBNiAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAw'+
    'MDAwMCAwMDAwMDAwMCAwMDAwMDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    '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'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AP/7kkD/gAAHALeAQAAAM0Dm8H94EgAQAt4AgAAAeINbwf08SAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAA=';	


var $X = function (exp, context) {
    if (!context) context = document;
    var resolver = function (prefix) {
        var o = document.createNSResolver(context)(prefix);
        return o ? o : (document.contentType == "text/html") ? "" : "http://www.w3.org/1999/xhtml";
    }
    var exp = document.createExpression(exp, resolver);

    var result = exp.evaluate(context, XPathResult.ANY_TYPE, null);
    switch (result.resultType) {
    case XPathResult.STRING_TYPE : return result.stringValue;
    case XPathResult.NUMBER_TYPE : return result.numberValue;
    case XPathResult.BOOLEAN_TYPE: return result.booleanValue;
    case XPathResult.UNORDERED_NODE_ITERATOR_TYPE: {
        result = exp.evaluate(context, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        var ret = [];
        for (var i = 0, len = result.snapshotLength; i < len ; i++) {
            ret.push(result.snapshotItem(i));
        }
        return ret;
    }
    }
    return null;
}



// -- MP3 UTILS --
function update(obj, params){
    if(obj.setAttribute){
	for(var key in params)
	    obj.setAttribute(key, params[key]);
    } else {
	for(var key in params)
	    obj[key] = params[key];
    }
    return obj;
}

var dummy = w.document.body.appendChild(update(document.createElement('div'), {
    'style' : 'position:fixed;top:0px;left:0px;z-index:100;height:1px;'
}));

function qts(src, num) {
    var res = [];
    for(var i=0 ; i<num ; i++)
	res.push(embed_qt(src));
    return circulation(res);
}

function circulation(list){
    return function(){
	var item = list.shift();
	list.push(item);
	return item;
    }
}

function embed_qt(src){
    return dummy.appendChild(update(unsafeWindow.document.createElement('embed'), {
	src : src,
	type : 'video/quicktime',
	controller : 'false',
	autoplay : 'false', 
	loop : 'false',
	width : '2px',
	height : '2px'
    }));
}

function set_rate(m){
    var rate = Math.random() * 2;
    m.SetRate(rate)
    return rate;
}

function revert_rate(m, rate){
    m.SetRate(1/rate)
}
// -- /MP3 UTILS --



w.mp3_l = qts(MP3_L, 5);
w.mp3_r = qts(MP3_R, 5);



//-- GlitchMonkeyMod --
var Corruptions = {
    'image/jpeg': function() {
	var source = Math.floor(Math.random() * 10);
	return this.replace(new RegExp(source, 'g'), Math.floor(Math.random() * 10));
    },
    'image/gif': function() {
	return this.replace(/x/ig, Math.floor(Math.random() * 10));
    },
    'image/png': function() {
	return this.replace(/x/ig, Math.floor(Math.random() * 10));
    }
};


images = [];
Array.filter(document.images, is_glitchable).forEach(init_glitch);
function init_glitch(element) {
    GM_xmlhttpRequest({
	method: "GET",
	overrideMimeType: "text/plain; charset=x-user-defined",
	url: element.src,
	onload: function (res) {
	    var type = contentType(res.responseHeaders);
	    var oldsrc = element.src;
	    if(typeof Corruptions[type] != 'undefined') {
		element.addEventListener('error', function() {
		    this.src = oldsrc;
		}, false);
		
		element.src =
		    [
			'data:',
			type,
			';base64,',
			base64encode(res.responseText),
		    ].join('');

		images.push({
		    element: element,
		    type: type,
		    data: res.responseText
		});
	    }
	}
    });
}

function contentType(headers) {
    return headers.match(/Content-Type: (.*)/i)[1];
}

function base64encode(data) {
    return btoa(data.replace(/[\u0100-\uffff]/g, function(c) {
	return String.fromCharCode(c.charCodeAt(0) & 0xff);
    }));
}

function is_glitchable(img) {
    return img.src.match(/\.(gif|jpe?g)/i);
}
//-- /GlitchMonkeyMod --



Number.prototype.rand = function(){
    return Math.floor(Math.random() * this)
}

function Glitch(){
    this.NEXT_MS = 1000;
    this.GLITCH_MS = 200;
    this.GLITCH_TIMES = 15;
}
Glitch.prototype = {
    get: function(){
	return this.nodes;
    },
    
    // setTimeout後thisを見る方法がわかんないです＞＜
    do_next: function(self, ms){
	setTimeout(
	    self.do_glitch,
	    self.GLITCH_MS.rand(),
	    self,
	    self.get_rand_node(),
	    self.GLITCH_TIMES
	);
	setTimeout(
	    self.do_next,
	    ms,
	    self,
	    self.NEXT_MS.rand()
	);
    },
    get_rand_node: function(){
	return this.nodes[this.nodes.length.rand()];
    },
    do_glitch: function(self, node, times){
	if(times == 0 || !node){
	    return false;
	}
	self.glitch(node);
	setTimeout(
	    self.do_glitch,
	    self.GLITCH_MS.rand(),
	    self,
	    node,
	    times - 1
	);
    }
};

function ImageGlitch(nodes){
    this.nodes = images;
    this.do_next(this, 0);
}
ImageGlitch.prototype = new Glitch();
ImageGlitch.prototype.glitch = function(node){
    node.element.src = [
	'data:',
	node.type,
	';base64,',
	base64encode(Corruptions[node.type].apply(node.data)),
    ].join('');
    var mp3 = w.mp3_l()
    var rate = set_rate(mp3);
    mp3.Play();
    revert_rate(mp3, rate)
}

function TextGlitch(nodes){
    this.nodes = $X('//text()', document.body).filter(
	function(e){return e && e.data && !e.data.match(/^[\r\n 　(?:<br ?\/?>)]+$/) && e.data.length > 5}
    );
    this.do_next(this, 0);
}
TextGlitch.prototype = new Glitch();
TextGlitch.prototype.glitch = function(node){
    var data = node.data;
    var points = [
	data.length.rand(),
	data.length.rand(),
	data.length.rand()
    ].sort(function(a,b){return a - b});
    node.data = data.slice(points[0], points[1]) +
	data.slice(0, points[0]) +
	data.slice(points[2], data.length) +
	data.slice(points[1], points[2]);

    var mp3 = w.mp3_r()
    var rate = set_rate(mp3);
    console.log(rate);
    mp3.Play();
    revert_rate(mp3, rate)
}

new ImageGlitch();
new TextGlitch();
