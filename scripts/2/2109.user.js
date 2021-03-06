// ==UserScript==
// @name          MSN Alerts Subscribe
// @namespace     http://www.lysator.liu.se/~jhs/userscript
// @description   Adds links to subscribe to site feeds via MSN Alerts
// ==/UserScript==

var feeds = [], links = document.getElementsByTagName( 'link' );
var types = [ 'rdf', 'atom', 'rss' ], i, j, div, g, c, node, feed, id;
var named = 'MSNAlerts', urlprefix = 'http://www.messagecast.net/alerts/login.do?PINID=1441&returnURL=';
var color = '#FF9933';

for( i=0; i<links.length; i++ )
  if( links[i].rel.match( /alternate/i ) )
    for( j=0; j<types.length; j++ )
      if( links[i].type.toLowerCase().match( types[j] ) ||
	  links[i].href.toLowerCase().match( types[j] ) )
      {
	feeds.push({type:types[j], href:links[i].href, title:links[i].title});
	break;
      }

if( feeds.length )
{
  div = document.createElement( 'div' );
  node = document.createElement( 'img' );
  node.style.margin = '1px 1px -3px 0';
  node.src = 'data:image/gif;base64,R0lGODlhWAAMAPcAACJOp93k8f9VDaq73TNcrYigz3eSyRFBoERptLvJ5GaFwoKCgpmt1v/NmygoKP/JlFV3u8zW6/+uXf+pU/9hFP+rV/+lS/+tXP/06v/58//z52ZOCfX08v/WrLi0pcyxHX1aEf//OP/QoHFVFEs/FaGIHOTp9P/566ebdKOUZv9pKv+6dN6aHvn49+SdIfvz5P7iqZZxEoWdzv/Chv/hkXJjN/+3b/bmNL+BGvm0KJlyCf9cEf+XMv/Ro768sb+6qZCm03xwTf/3M//WLMjEtnZQCtCVFv/upGFLEdjX0IBVEGlRBsSJHP9oGP/351JDEZJrDIdlCbB6FOLh2+Pg2p5xCGREDZOp1FBADP7+/YGazf/VPqd7Gf7+/v39/f/w0P/qJv+dOv/MQP+9KP/OnlVHEaN2DpaWlv+8eZ6x2MO/sK2SXP/gMf/tM3KOx1JSUv/xlLKrkWhYJuaRHGhoaNDIrHJODemhHoRjFVhFC3mUyf/+/al9GAICAv92H8KKG42k0f/XJvWzJf/lJ+vv9/79/P+4IzksAv+sIsnU6dTd7u3r56Cz2VxDEqe53OLh2f+aNf/Vq9i/ipmZmfLy7/9zOJSp1MC8rFZAE9nSvv+sWdubIWVWIt2oI//tw3hmNO7x+AoKCgAAAP+ZMwAzmf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAABYAAwAAAj/ACedWUCwoMGCdP6VWsiwocOHECNKnDhxjycYLxa+6RCpgcePIBvM4KGQosmTKFHSABPojqRCDlaIeECzBwYMZGjSDLOjJChQDn8yjDAgwEKgDZFCNHq0QMqIXwaFGMKiSh0HEySM2lphoYWtWykIUAiKFCkCDBGY/anW7IABpA4gJUBKaUMGpBIsDACA4oAIEp1sEdJG0J8oKLBq5eoV7CixZM2SAhxAMigFpBQMKJAALikIC+naTUsAdCm+DEcvBMAg9cITR+CIMTQmxyY+S4goHpXhoYawY0uVVeu0wNm6xBnCpTuglOiHfBPIPd03AIIDBBKAQqAAwHUABQoA/zjQfI2ODzfYIJrDJIacFrt7O/z9OHhZAwDQIkAg2jMCo3AZQAAAoDznUAGgEeAUaggYEAADBARwQAERgAIeKAckEIBRPhyCyQgldOICDlDEUcpumlyAxkI2XFABcJEZgBlcBTyXgFoHEEWKAXApIFoiMlxhwmoMBFAjdZUpoCQpEiLFmnMKMFWKGmU0ogQIeHBhRiYnZgVWV6V8BRZkwu2YwHEBGFiKATsGWApmB9RliR5upFGKdADkmSNflRXAwJ+oEXmaAhkylEQNRkhhBRIbpNCFA5D4IcCklSykwqSY2rejc6QgwOl2BQxAnJsWrgUEIFo0B4EBDK2K2pPCBW5aypNGydgQB5/kYUcRT2BBRR9NZCqssDGWYpxTokEgGWhuluIZKIow4gghGOq10AA59oUneLJ2J16e1jJEySOXBEECJ4v8o+667Lar7lGuwSvcAErZJZRDUu4l3FFFybuQdqBoF5EXU3jwQxYBAQA7';
  node.alt = named + ' logo';
  div.appendChild( node );
  div.style.font = 'xx-small bolder Helvetica,Arial,sans-serif';
  div.title = "Subscribe to this site's feeds via "+named+"!";
  for( i=0; i<feeds.length; i++ )
  {
    feed = feeds[i];
    node = document.createElement( 'a' );
    node.title = 'Subscribe to ' + feed.title;
    node.href = urlprefix + feed.href;
    node.innerHTML = feed.type.toUpperCase();
    node.setAttribute( 'style', 'margin:0 2px; background-color:'+color+'; '+
		       'padding:2px; color:white; text-decoration:none;' );
    div.appendChild( node );
  }
  node = document.createElement( 'a' );
  node.innerHTML = 'X';
  node.title = 'Close';
  node.href = 'javascript:void document.body.removeChild(document.getElementById("tab-'+named+'-subscribe"))';
  node.setAttribute( 'style', 'padding:1px 2px; background-color:white; ' +
		     'margin:1px 2px; color:'+color+'; text-decoration:none;' +
		     'border:1px solid '+color+';' );
  div.appendChild( node );
  tab( div, 'tab-'+named+'-subscribe', 2 );
}

function tab( node, id, corner, action, fg, bg, border )
{
  border = border || 'black';
  fg = fg || border;
  bg = bg || 'white';

  function addStyles( node, styles )
  {
    for( var i in styles )
      node.style[i] = styles[i];
  };

  function borderize( node )
  {
    var container = document.createElement( 'div' );
    var div = document.createElement( 'div' ), i;
    var hor = corner&1 ? 'Right' : 'Left', ch = corner&1 ? 'Left' : 'Right';
    var ver = corner&2 ? 'Bottom' : 'Top', cv = corner&2 ? 'Top' : 'Bottom';
    var styles = { zIndex:'99999', position:'fixed', width:'auto',
		   padding:'0px', border:'0px' };
    styles[hor.toLowerCase()] = styles[ver.toLowerCase()] = '0px';
    styles[ch.toLowerCase()] = 'auto';
    var common = { border:'0px solid '+border, overflow:'hidden',
  		 display:'block', backgroundColor:bg, fontSize:'1px',
  		 padding:'0px', width:'auto' },
        divstyle = { border:'0px solid '+border, background:bg,
		     width:'auto', paddingLeft:'5px', paddingRight:'5px',
		     cursor:'pointer' },
        round = [{height:'2px'},{height:'1px'},{height:'1px'},{height:'0px'}];
    for( i=0; i<round.length; i++ )
    {
      round[i]['margin'+ch] = [1,2,3,5][i] + 'px';
      round[i]['border'+ch+'Width'] = [1,1,2,0][i] + 'px';
    }
    round[3]['border'+ver+'Width'] = '1px';
    divstyle['padding'+cv+'Width'] = '1px';
    divstyle['padding'+ver+'Width'] = '2px';
    divstyle['border'+ch+'Width'] = '1px';

    div.appendChild( node );
    addStyles( div, divstyle );
    addStyles( container, styles );
    if( ver == 'Top' )
      container.appendChild( div );
    for( var i=0; i<round.length; i++ )
    {
      node = document.createElement( 'div' );
      addStyles( node, common );
      addStyles( node, round[ver=='Top' ? i : 3-i] );
      container.appendChild( node );
    }
    if( ver != 'Top' )
      container.appendChild( div );
    return container;
  };

  function addTab( node, id )
  {
    var a = document.getElementById( id );
    var style = { textDecoration:'none', background:bg, color:fg,
		  paddingBottom:(corner&2?'5px':'1px'),
		  paddingTop:(corner&2?'1px':'5px') };
    if( a )
      return; // done that
    else
    {
      a = document.createElement( 'div' );
      addStyles( a, style );
      a.id = id + '-link';
      if( action )
	a.addEventListener( 'click', action, false );
      var div = borderize( a );
      div.id = id;
      document.body.appendChild( div );
    }
    a.appendChild( node );
  };

  addTab( node, id );
}
