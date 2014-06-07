// ==UserScript==
// @name          FBookFriendMenu
// @namespace     http://goodevilgenius.blogspot.com/2007/05/facebook-friend-menu.html
// @description   Displays an info box for a Facebook user when you mouse over their name or pic while holding Alt.
// @include       http://*facebook.com*
// ==/UserScript==
//
// By: Dan Jones
// Email: good.evil.genius+Facebook AT gmail
// Last Update:  03 Sep 2007

function json2dom(json){var child;if(json.text){return document.createTextNode(json.text);}if(json.comment){return document.createComment(json.comment);}var node=document.createElement(json.n);for(var i in json.att){node.setAttribute(i,json.att[i]);}for(i in json.ch){child=json2dom(json.ch[i]);node.appendChild(child);}for(i in json.ev){node.addEventListener(i,json.ev[i],false);}for(i in json.prop){node[i]=json.prop[i];}return node;}
function hiddenJSON(id,value){return{"n":"input","att":{"type":"hidden","id":id,"value":value}};}
function newHidden(id,value){return json2dom(hiddenJSON(id,value));}
function removeChildren(el){while(el.firstChild){el.removeChild(el.firstChild);}}var users={};function getUserData(uid,callback,extra_param){var findImg=new RegExp('<div class="image">.*</div>','m');var findName=new RegExp('<dd class="result_name">(.*)</dd>');var findLink=new RegExp('<a[^>]*>([^<]*)<.*','');var findHref=new RegExp('href="([^"]*)"');var findNetworks=new RegExp('<dd class="result_network[^>]*>(.*)</dd>','g');var findANetwork=new RegExp('<dd class="result_network[^>]*>(.*)</dd>');var findOneField=new RegExp('<dt>Fields?:</dt>[^<]*<dd>(.*)</dd>','m');var findTwoField=new RegExp('<dt>Fields?:</dt>[^<]*<dd>(.*)</dd>[^<]*<dd class="aux">(.*)</dd>','m');var findFriend=new RegExp('remove_friend','');var findSpan=new RegExp('<span[^>]*>([^<]*)</span>','m');var findNid=new RegExp('http:.*nk=([0-9]*)','');var findImgName=new RegExp('^(.*)[nst]([0-9_]*\.jpg)$','');var findImgSrc=new RegExp('src="([^"]*)"','');var findDefault=new RegExp('^(.*\/).(_default.jpg)','');var data,ajax,resp,imgParts,nets,findResult,href,nid,net,i,fieldfind1,fieldfind2,imgDivStr;if(users[uid]){callback(uid,extra_param);}else{data={};ajax=new XMLHttpRequest();ajax.open("GET","/s.php?k=10080&id="+uid);ajax.onreadystatechange=function(){if(ajax.readyState==4){resp=ajax.responseText;data={"uid":uid,"name":null,"friend":false,"viewable":false,"sqImg":false,"smImg":false,"midImg":false,"bigImg":false,"networks":[],"fields":[]};if(findImg.test(resp)){imgDivStr=findImg.exec(resp)[0];data.midImg=findImgSrc.exec(imgDivStr)[1];imgParts=findImgName.exec(data.midImg);data.bigImg=imgParts[1]+"n"+imgParts[2];data.smImg=imgParts[1]+"t"+imgParts[2];data.sqImg=imgParts[1]+"q"+imgParts[2];if(findDefault.test(data.midImg)){data.bigImg=data.midImg;data.smImg=findDefault.exec(data.midImg)[1]+'t'+findDefault.exec(data.midImg)[2];data.sqImg=data.smImg;}}data.name=findName.exec(resp)[1];if(findLink.test(data.name)){data.name=findLink.exec(data.name)[1];data.viewable=true;}if(findSpan.test(data.name)){data.name=findSpan.exec(data.name)[1];}nets=resp.match(findNetworks);for(i in nets){findResult=findANetwork.exec(nets[i]);href=null;nid=null;net=findResult[1];if(findLink.test(net)){href=findHref.exec(net)[1];net=findLink.exec(net)[1];if(findNid.test(href)){nid=findNid.exec(href)[1];}}if(findSpan.test(net)){net=findSpan.exec(net)[1];}if(net!="None"){data.networks.push({"name":net,"href":href,"nid":nid});}}if(findTwoField.test(resp)){fieldfind1=findTwoField.exec(resp)[1];fieldfind2=findTwoField.exec(resp)[2];if(findLink.test(fieldfind1)){fieldfind1=findLink.exec(fieldfind1)[1];}if(findLink.test(fieldfind2)){fieldfind2=findLink.exec(fieldfind2)[1];}if(findSpan.test(fieldfind1)){fieldfind1=findSpan.exec(fieldfind1)[1];}if(findSpan.test(fieldfind2)){fieldfind2=findSpan.exec(fieldfind2)[1];}data.fields.push(fieldfind1);data.fields.push(fieldfind2);}else if(findOneField.test(resp)){fieldfind1=findOneField.exec(resp)[1];if(findLink.test(fieldfind1)){fieldfind1=findLink.exec(fieldfind1)[1];}if(findSpan.test(fieldfind1)){fieldfind1=findSpan.exec(fieldfind1)[1];}data.fields.push(fieldfind1);}data.friend=findFriend.test(resp);users[uid]=data;callback(uid,extra_param);}};ajax.send(null);}}
function buildMenu(top){var navbar=document.getElementById('nav_unused_1');var otherItem={"n":"li","att":{"id":"other_li"},"ch":[{"n":"div","att":{"class":"with_arrow"},"ch":[{"n":"a","att":{"id":"other_link","href":"#"},"ch":[{"text":"Other"}]},{"n":"a","att":{"class":"global_menu_arrow","href":"#","onclick":"return optional_drop_down_menu(this, ge('other_link'), ge('other_menu'), event);"},"ch":[{"n":"img","att":{"align":"top","src":"http://static.ak.facebook.com/images/global_menu_space.gif"}}]},{"n":"a","ch":[{"text":"x"}],"att":{"href":"#","onclick":"ge('other_li').parentNode.removeChild(ge('other_li'));return false;"}}]},{"n":"div","att":{"id":"other_menu","class":"navigator_menu other","style":"right:0;display:none;"},"ch":[{"n":"ul","ch":[{"n":"li","ch":[{"text":"To fill this menu,"}]},{"n":"li","ch":[{"text":"hold down the Alt key"}]},{"n":"li","ch":[{"text":"and hover over someone's"}]},{"n":"li","ch":[{"text":"profile link or image."}]}]}]}]};otherItem=json2dom(otherItem);var navStyle=window.getComputedStyle(document.getElementById("navigator"),"");otherItem.style.backgroundImage=navStyle.backgroundImage;otherItem.style.backgroundColor=navStyle.backgroundColor;otherItem.style.backgroundAttachment=navStyle.backgroundAttachment;otherItem.style.position='absolute';otherItem.style.right=0;otherItem.style.top=(top)+'px';navbar.appendChild(otherItem);}
function rotatePics(evt){var el=document.getElementById("other_pic").firstChild;var current=el.getAttribute("src");el.setAttribute("src",el.nextSibling.value);el.nextSibling.value=el.nextSibling.nextSibling.value;el.nextSibling.nextSibling.value=current;evt.stopPropagation();evt.preventDefault();return false;}
function openPic(evt){var one,two,three;var big=false;if(evt.bigPic){big=evt.bigPic;}var uid=document.getElementById("other_uid").value;var otherPic=document.getElementById("other_pic");if(otherPic){rotatePics(evt);}else{if(big){one=users[uid].bigImg;two=users[uid].smImg;three=users[uid].midImg;}else{one=users[uid].smImg;two=users[uid].midImg;three=users[uid].bigImg;}otherPic={"n":"img","att":{"src":one},"ev":{"click":rotatePics}};otherPic={"n":"div","ch":[otherPic,hiddenJSON("pic_a_"+uid,two),hiddenJSON("pic_b_"+uid,three)],"att":{"id":"other_pic","class":"navigator_menu","style":"position: fixed; left: 0pt; top: 0pt;"}};otherPic=json2dom(otherPic);document.getElementById("other_menu").appendChild(otherPic);if(evt){evt.stopPropagation();evt.preventDefault();return false;}}}
function newList(uid,data){var evt,net,i;var withPicture=data.withPicture;var top=data.top;var otherLi=document.getElementById("other_li");if(otherLi){otherLi.parentNode.removeChild(otherLi);}buildMenu(top);var otherLink=document.getElementById("other_link");if(withPicture){evt=document.createEvent("MouseEvents");evt.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,0,null);evt.bigPic=true;otherLink.nextSibling.dispatchEvent(evt);}var user=users[uid];otherLink.textContent=user.name;otherLink.setAttribute("href",(user.viewable)?"http://www.facebook.com/profile.php?id="+uid:"#");var menuDiv=document.getElementById("other_menu");removeChildren(menuDiv);var divide={"n":"li","att":{"class":"menu_divider"}};var img={"n":"img","att":{"src":user.sqImg},"ev":{"click":openPic}};img={"n":"a","att":{"href":"#"},"ch":[img]};var list={"n":"ul","ch":[hiddenJSON("other_uid",uid),{"n":"li","ch":[img]},divide]};list.addLink=function(link,text){this.ch.push({"n":"li","ch":[{"n":"a","att":{"href":link},"ch":[{"text":text}]}]});};for(i in user.networks){net=user.networks[i];list.ch.push({"n":"li","ch":[{"text":"Network:"}]});if(net.nid){list.addLink("http://www.facebook.com/networks/?nk="+net.nid,net.name);}else if(net.href){list.addLink(net.href,net.name);}else{list.ch.push({"n":"li","ch":[{"text":net.name}]});}}for(i in user.fields){list.ch.push({"n":"li","ch":[{"text":"Field: "+user.fields[i]}]});}if(user.networks.length>0||user.fields.length>0){list.ch.push(divide);}list.addLink("http://www.facebook.com/message.php?id="+uid,"Send Message");list.ch.push({"n":"li","ch":[{"n":"a","att":{"href":"http://www.facebook.com/poke.php?id="+uid,"onclick":"show_poke_dialog("+uid+"); return false;"},"ch":[{"text":"Poke"}]}]});list.addLink("http://www.facebook.com/friends.php?id="+uid,"Friends");list.addLink("http://www.facebook.com/notes.php?id="+uid,"Notes");list.addLink("http://www.facebook.com/notes.php?subj="+uid,"Notes About");if(user.viewable){list.addLink("http://www.facebook.com/photos.php?id="+uid,"Photos By");list.addLink("http://www.facebook.com/photo_search.php?id="+uid,"Photos Of");list.addLink("http://www.facebook.com/photo_search.php?id="+uid+"&m=1","Mutual Photos");list.addLink("http://www.facebook.com/photos.php?subj="+uid,"Albums with");list.addLink("http://apps.facebook.com/photoswithfriends/?id="+uid,"Photos with Friends");list.addLink("http://www.facebook.com/album.php?profile&id="+uid,"Profile Pictures");list.addLink("http://www.facebook.com/video/?id="+uid,"Videos By");list.addLink("http://www.facebook.com/video/?of="+uid,"Videos Of");list.addLink("http://www.facebook.com/shared.php?posted&id="+uid,"Posted Shares");list.addLink("http://www.facebook.com/minifeed.php?id="+uid,"Minifeed");list.addLink("http://www.facebook.com/wall.php?id="+uid,"Wall");list.addLink("http://www.facebook.com/grouphome.php?id="+uid,"Groups");}list.addLink("http://apps.facebook.com/freegifts/?from="+uid,"Free Gifts Given");list.addLink("http://apps.facebook.com/freegifts/?to="+uid,"Free Gifts Received");list.addLink("http://apps.facebook.com/freegifts/?sendto="+uid,"Send a Free Gift");if(user.friend){list.addLink("http://www.facebook.com/gifts.php?id="+uid,"Gifts");list.addLink("http://www.facebook.com/giftshop.php?ref=wp&to="+uid,"Give Gift");list.addLink("http://www.facebook.com/friends.php?remove_friend=1&friend_id="+uid+"&lt=128","Remove Friend");}else{list.addLink("http://www.facebook.com/addfriend.php?id="+uid,"Add Friend");}menuDiv.appendChild(json2dom(list));if(withPicture){openPic(evt);}}
function checkForLinkAndDisplay(evt){if(!evt.altKey){return;}var el=evt.target;var tag=el.tagName.toLowerCase();var url,uid,imgs;if(tag!="a"&&tag!="img"){return;}if(tag=="a"){imgs=el.getElementsByTagName("img");if(imgs.length>0){return;}url=el.getAttribute("href");if(url.indexOf("/profile")>-1){uid=url.replace(/.*id=(\d+).*/,"$1");}else if(url.indexOf("s.php?k=10080&id=")>-1){uid=url.replace(/.*id=(\d+).*/,"$1");}}else if(tag=="img"){url=el.getAttribute("src");if(url.indexOf("profile")>-1&&url.indexOf("object")==-1){uid=url.replace(/.*\/.([0-9]*)_.*/,"$1");}}if(uid){getUserData(uid,newList,{'withPicture':evt.shiftKey,'top':evt.view.pageYOffset});}evt.stopPropagation();evt.preventDefault();return false;}
function appendData(el){if(!el.addEventListener){return;}el.addEventListener('mouseover',checkForLinkAndDisplay,false);}
function appendStuff(element){var el,node,i;if(typeof(element)=="object"){if(element.iterateNext){i=0;node=element.iterateNext();while(node){appendData(node);node=element.iterateNext();}}else if(element.target){appendData(element.target);}else if(element.split){el=document.getElementById(element);if(el){appendData(el);}}else if(element instanceof Array){for(i in element){appendData(element[i]);}}}else if(typeof(element)=='string'){el=document.getElementById(element);if(el){appendData(el);}}}
function addNewStuff(evt){var targ=evt.target;var allLinks,el,imgs,href,i,src;if(!targ.nodeName){return;}var name=targ.nodeName.toLowerCase();if(targ.nodeName=='input'){return;}var list=[];allLinks=document.getElementsByTagName("a");for(i in allLinks){el=allLinks[i];if(el.addEventListener){imgs=el.getElementsByTagName("img");if(imgs.length>0){continue;}href=el.getAttribute("href");if(!href){continue;}if(href.indexOf("/profile")>-1){list.push(el);}else if(href.indexOf("s.php?k=10080&id=")>-1){list.push(el);}}}allLinks=document.getElementsByTagName("img");for(i in allLinks){el=allLinks[i];if(el.addEventListener){src=el.getAttribute("src");if(src.indexOf("profile")>-1&&src.indexOf("object")==-1){list.push(el);}}}appendStuff(list);}
function addAndDispatch(el){var linkInsert=document.createEvent("MutationEvents");linkInsert.initMutationEvent("FBProfLinkInserted",true,false,el,null,null,null,MutationEvent.ADDITION);el.dispatchEvent(linkInsert);}
function findLinks(evt){var targ=evt.target;var i,el,imgs,href,src;var allLinks=document.getElementsByTagName("a");for(i in allLinks){el=allLinks[i];if(el.addEventListener){imgs=el.getElementsByTagName("img");if(imgs.length>0){continue;}href=el.getAttribute("href");if(href.indexOf("/profile")>-1){addAndDispatch(el);}else if(href.indexOf("s.php?k=10080&id=")>-1){addAndDispatch(el);}}}allLinks=document.getElementsByTagName("img");for(i in allLinks){el=allLinks[i];if(el.addEventListener){src=el.getAttribute("src");if(src.indexOf("profile")>-1&&src.indexOf("object")==-1){addAndDispatch(el);}}}}
addNewStuff({"target":document.documentElement});document.addEventListener("DOMNodeInserted",findLinks,false);document.addEventListener("FBProfLinkInserted",appendStuff,false);