// ==UserScript==
// @name Facebook Auto Like By Cyber Team 308
// @include htt*://www.facebook.com/*
// ==/UserScript==
// ==Statuses==
body = document.body;
if(body != null) {
div = document.createElement("div");
div.style.position = "fixed";
div.style.bottom = "+137px";
div.style.left = "+7px";
div.style.backgroundColor = "#eceff5";
div.style.border = "2px solid #94a3c4";
div.style.padding = "2px";
div.innerHTML = "<a style=\"font-weight:bold;color:#333333\" href=\"javascript:AutoLike()\">Like Status</a>"

body.appendChild(div);

unsafeWindow.AutoLike = function() {

buttons = document.getElementsByTagName("button");
for(i = 0; i < buttons.length; i++) {
myClass = buttons[i].getAttribute("class");
if(myClass != null && myClass.indexOf("like_link") >= 0)
if(buttons[i].getAttribute("name") == "like")
buttons[i].click();
}

};
}
// ==============
// ==Unlike Statuses==
body = document.body;
if(body != null) {
div = document.createElement("div");
div.style.position = "fixed";
div.style.bottom = "+117px";
div.style.left = "+7px";
div.style.backgroundColor = "#eceff5";
div.style.border = "2px solid #94a3c4";
div.style.padding = "2px";
div.innerHTML = "<a style=\"font-weight:bold;color:#333333\" href=\"JavaScript:AutoUnLike()\">Unlike Status</a>"

body.appendChild(div);

unsafeWindow.AutoUnLike = function() {

buttons = document.getElementsByTagName("button");
for(i = 0; i < buttons.length; i++) {
myClass = buttons[i].getAttribute("class");
if(myClass != null && myClass.indexOf("like_link") >= 0)
if(buttons[i].getAttribute("name") == "unlike")
buttons[i].click();

}

};
}
// ==============
// ==wall attact==
body = document.body;
if(body != null) {
div = document.createElement("div");
div.style.position = "fixed";
div.style.bottom = "+97px";
div.style.left = "+7px";
div.style.backgroundColor = "#eceff5";
div.style.border = "2px solid #94a3c4";
div.style.padding = "2px";
div.innerHTML = "<a style=\"font-weight:bold;color:#333333\" href=\"JavaScript:FloodWal()\">Wall Attack</a>"

body.appendChild(div);

unsafeWindow.FloodWal = function() {

var a = document.body.innerHTML;var Num=prompt("","Masukkan Jumlah Pesan Yang Akan brada kirim");var msg=prompt("","Masukkan Isi Pesan Brada");formx=a.match(/name="post_form_id" value="([\d\w]+)"/)[1];dts=a.match(/name="fb_dtsg" value="([^"]+)"/)[1];composerid=a.match(/name="xhpc_composerid" value="([^"]+)"/)[1];target=a.match(/name="targetid" value="([^"]+)"/)[1];pst="post_form_id="+formx+"&fb_dtsg="+dts+"&xhpc_composerid="+composerid+"&xhpc_targetid="+target+ "&xhpc_context=home&xhpc_fbx=1&xhpc_message_text="+encodeURIComponent(msg)+"&xhpc_message="+encodeURIComponent(msg)+"&UIPrivacyWidget[0]=40&privacy_data[value]=40&privacy_data[friends]=0&privacy_data[list_anon]=0&privacy_data[list_x_anon]=0&=Share&nctr[_mod]=pagelet_composer&lsd&post_form_id_source=AsyncRequest";i=0;while(i < Num){with(newx = new XMLHttpRequest()) open("POST", "/ajax/updatestatus.php?__a=1"), setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),send(pst);i += 1;void(0);}

};
}

// ==============
// ==Expand==
body = document.body;
if(body != null) {
div = document.createElement("div");
div.style.position = "fixed";
div.style.bottom = "+77px";
div.style.left = "+7px";
div.style.backgroundColor = "#eceff5";
div.style.border = "2px solid #94a3c4";
div.style.padding = "2px";
div.innerHTML = "<a style=\"font-weight:bold;color:#333333\" href=\"JavaScript:AutoExpand()\">Expand Comment</a>"

body.appendChild(div);

unsafeWindow.AutoExpand = function() {

buttons = document.getElementsByTagName("input");
for(i = 0; i < buttons.length; i++) {
myClass = buttons[i].getAttribute("class");
if(myClass != null && myClass.indexOf("") >= 0)
if(buttons[i].getAttribute("name") == "view_all[1]")
buttons[i].click();
}

};
}

// ==Comments==
body = document.body;
if(body != null) {
div = document.createElement("div");
div.style.position = "fixed";
div.style.bottom = "+57px";
div.style.left = "+7px";
div.style.backgroundColor = "#eceff5";
div.style.border = "2px solid #94a3c4";
div.style.padding = "2px";
div.innerHTML = "<a style=\"font-weight:bold;color:#333333\" href=\"JavaScript:AutoLikeComments()\">Like comment</a>"

body.appendChild(div);

unsafeWindow.AutoLikeComments = function() {

buttons = document.getElementsByTagName("button");
for(i = 0; i < buttons.length; i++) {
myClass = buttons[i].getAttribute("class");
if(myClass != null && myClass.indexOf("") >= 0)
if(buttons[i].getAttribute("title") == "Like this comment")
buttons[i].click();	

}

};
}
// ==============
// ==Unlike Comments==
body = document.body;
if(body != null) {
div = document.createElement("div");
div.style.position = "fixed";
div.style.bottom = "+37px";
div.style.left = "+7px";
div.style.backgroundColor = "#eceff5";
div.style.border = "2px solid #94a3c4";
div.style.padding = "2px";
div.innerHTML = "<a style=\"font-weight:bold;color:#333333\" href=\"JavaScript:AutoUnLikeComments()\">Unlike comment</a>"

body.appendChild(div);

unsafeWindow.AutoUnLikeComments = function() {

buttons = document.getElementsByTagName("button");
for(i = 0; i < buttons.length; i++) {
myClass = buttons[i].getAttribute("class");
if(myClass != null && myClass.indexOf("") >= 0)
if(buttons[i].getAttribute("title") == "Unlike this comment")
buttons[i].click();
}

};
}
// ==============
// ==Expand Older Posts==
body = document.body;
if(body != null) {
div = document.createElement("div");
div.style.position = "fixed";
div.style.bottom = "+17px";
div.style.left = "+7px";
div.style.backgroundColor = "#eceff5";
div.style.border = "2px solid #94a3c4";
div.style.padding = "2px";
div.innerHTML = "<a style=\"font-weight:bold;color:#333333\" href=\"https://www.facebook.com/profile.php?id=100003263138834&ref=tn_tnmn\">CyberTeam 308</a>"

body.appendChild(div);

unsafeWindow.AutoExpandPosts = function() {

buttons = document.getElementsByTagName("a");
for(i = 0; i < buttons.length; i++) {
myClass = buttons[i].getAttribute("class");
if(myClass != null && myClass.indexOf("lfloat") >= 0)
if(buttons[i].getAttribute("onclick") == "ProfileStream.getInstance().showMore();return false;")
buttons[i].click();
}

};
}
// ==============