// ==UserScript==
// @name                豆藤 Bean vine
// @namespace           http://userscripts.org/scripts/show/49911
// @description         为豆瓣(www.douban.com)添加各种人性化的功能。
// @require             http://autoupdate.sinaapp.com/autoupdatehelper.js
// @include             http*
// @version             2014.02.13
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// @grant GM_log
// @grant GM_openInTab
// @grant GM_registerMenuCommand
/* @reason
增加：豆瓣FM pro版下载链接
增加：豆瓣FM 单曲重放
增加：豆瓣FM 百度音乐搜索
增加：支持按发布者屏蔽广播
增加：播放器歌曲下载
增加：音乐专辑歌曲下载
增加：音乐专辑播放功能
增加：音乐节目单下载链接
修复：音乐人小站下载链接
修复：小组分类
修复：滑动导航更新
修复：小组自动电梯
修复：书籍显示Kindle商店结果
@end*/
// ==/UserScript==

/* ************************ 备注 ************************ */
/**
 * 看到这的同学，如果希望帮助完善豆藤，请在豆瓣回复: http://www.douban.com/note/125348304/
 *
 */


if(typeof isChromeExtension == 'undefined'){
	init();
}else{
	function onReadyGM(){
		init();
	};
};

function init(){

	/* ************************ 基本函数准备 ************************ */

	// 获取URL参数
	function QueryString(item){
		var sValue=location.search.match(new RegExp('[\?\&]'+item+'=([^\&]*)','i'));
		return (sValue && sValue[1]!= '')?sValue[1]:0;
	};

	// 操作Cookie
	function getCookie(c_name){
		if (document.cookie.length > 0){
			c_start = document.cookie.indexOf(c_name + '=');
			if (c_start!=-1){ 
				c_start = c_start + c_name.length + 1;
				c_end = document.cookie.indexOf(';',c_start);
				if (c_end == -1){ c_end = document.cookie.length;}
				return unescape(document.cookie.substring(c_start,c_end));
			}
		}
		return '';
	};
	function setCookie(c_name, value, expiredays, path, domain, secure){
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		document.cookie =
			c_name+ '=' +escape(value)+
			((expiredays==null) ? '' : ';expires='+exdate.toGMTString()) +
			(path ? ';path=' + path : '' ) +
			(domain ? ';domain=' + domain : '' ) +
			(secure ? ';secure' : '' );
	};

	// 自造 selector
	function $$(w, dom){
		return (dom || document).querySelectorAll(w);
	};
	function $(select){
		var name = select.substring(1);
		switch(select.charAt(0)){
			case '#':
				return document.getElementById(name);
			case '.':
				return document.getElementsByClassName(name);
			case '/':
				return document.getElementsByTagName(name);
			default:
				return document.getElementsByName(select);
		};
	};

	// 赋予多个对象统一样式
	function setStyles(obj, css){
		for (var o=obj,i=0,j=o.length; i<j; i++){
			o[i].style.cssText = css;
		};
	};

	// Xpath
	function xpath(query, context){
		return document.evaluate(context?(query.indexOf('.')==0?query:'.' + query):query, context || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	};

	// 拓展 insertAfter
	function insertAfter(newEl, targetEl){
		var parentEl = targetEl.parentNode;
		if(parentEl.lastChild == targetEl){
			parentEl.appendChild(newEl);
		}else{
			parentEl.insertBefore(newEl, targetEl.nextSibling);
		};
	};

	// 隐藏或显示
	function toggle(obj){
		obj.style.display = (obj.style.display == 'none')?'':'none';
		return true;
	};

	// keycode 转换
	function getKeys(e){
		var codetable={'96':'Numpad 0','97':'Numpad 1','98':'Numpad 2','99':'Numpad 3','100':'Numpad 4','101':'Numpad 5','102':'Numpad 6','103':'Numpad 7','104':'Numpad 8','105':'Numpad 9','106':'Numpad *','107':'Numpad +','108':'Numpad Enter','109':'Numpad -','110':'Numpad .','111':'Numpad /','112':'F1','113':'F2','114':'F3','115':'F4','116':'F5','117':'F6','118':'F7','119':'F8','120':'F9','121':'F10','122':'F11','123':'F12','8':'BackSpace','9':'Tab','12':'Clear','13':'Enter','16':'Shift','17':'Ctrl','18':'Alt','20':'Cape Lock','27':'Esc','32':'Spacebar','33':'Page Up','34':'Page Down','35':'End','36':'Home','37':'←','38':'↑','39':'→','40':'↓','45':'Insert','46':'Delete','144':'Num Lock','186':';:','187':'=+','188':',<','189':'-_','190':'.>','191':'/?','192':'`~','219':'[{','220':'\|','221':']}','222':'"','224':'Cmd','91':'Cmd','93':'Cmd'};
		var Keys = '';
		e.shiftKey && (e.keyCode != 16) && (Keys += 'Shift+');
		e.ctrlKey && (e.keyCode != 17) && (Keys += 'Ctrl+');
		e.altKey && (e.keyCode != 18) && (Keys += 'Alt+');
		e.metaKey && (e.keyCode != 224 && e.keyCode != 91 && e.keyCode != 93) && (Keys += 'Cmd+'); // Command = metaKey => Firefox: 224 Opera: 17 WebKit : 91 (Left) or 93 (Right)
		return Keys + (codetable[e.keyCode] || String.fromCharCode(e.keyCode) || '');
	};

	// 即时显示快捷键
	function trans_code(ID, codes){
		var cobj = $('#'+ID);
		cobj.value = GM_getValue(ID, codes);
		cobj.addEventListener('keydown',function(e){
			// alert(e.keyCode)
			this.value = getKeys(e);
			e.preventDefault();
			e.stopPropagation();
		},false);
	};

	// 监视并执行快捷键对应的函数
	function addHotKey(codes,func){
		document.addEventListener('keydown', function(e){
			if( (e.target.tagName != 'INPUT') && (e.target.tagName != 'TEXTAREA') && (getKeys(e).toUpperCase() == codes.toUpperCase()) ){
				func();
				e.preventDefault();
				e.stopPropagation();
			}
		}, false);
	};

	//向页面注入functions
	function injectFun(fun, time){
		function infun(){
			var script = document.createElement('script');
			script.textContent = '(' + fun.toString() + ')();'; //后续无法复用
			// script.textContent = fun.toString() + ';' + fun.name + '();'; //可以复用
			document.body.appendChild(script);
		};
		setTimeout(infun, time||0);
	};

	// 识别本次登录用户名
	function getUserName(){
		var ck = getCookie('ck'), mixName = GM_getValue('mixName', false);
		
		if(ck){//是否已登录
			if(mixName && mixName.indexOf('@'+ck) > 0){//本次登录是否上次保存用户
				return mixName.replace('@'+ck, '');
			}
			GM_xmlhttpRequest({
				method: 'GET',
				url: 'http://www.douban.com/mine/',
				onload: function(resp){
					if(resp.status < 200 || resp.status > 300) {return;};
					var name = String(resp.responseText).match(/douban\.com\/people\/([^\/]+)\//i)[1];
					GM_setValue('mixName', name + '@' + getCookie('ck'));
					return name;
				}
			});
		}
		return false;
	};

	/* ************************ 豆藤设置界面 ************************ */

	// 添加导航栏按钮
	function settingBar(){
		var db_hp = document.createElement('a');
		db_hp.id = 'db_BeanVine';
		db_hp.href = 'javascript:';
		db_hp.innerHTML = '豆藤';
		var _status = $$('.top-nav-info ul, .top-nav-info, #user_info .profile')[0];

		if(_status){
			_status.appendChild(db_hp);
			$('#db_BeanVine').addEventListener('click', function(){sw_set(false);}, false);
			
			// 加载HTML等
			GM_addStyle('\
				#db_div {\
					background:#fff;\
					position:fixed;\
					width:500px;\
					top:20%;\
					left:30%;\
					border:1px solid #bbb;\
					z-index:100;\
				}\
				#db_shadow {\
					position:absolute;\
					width:100%;\
					height:100%;\
					top:-12px;\
					left:-12px;\
					border:12px solid #000;\
					opacity:0.2;\
					z-index:-1;\
				}\
				#db_div_a {\
					position:absolute;\
					left:-81px;\
				}\
				#db_div_a>a {\
					display:block;\
					font-weight:bold;\
					background:#E0E0E0;\
					padding:8px;\
					border-left:12px solid #E0E0E0;\
					border-right:1px solid #969696;\
					border-top:1px solid #FFF;\
					color:#000;\
				}\
				#db_div div {\
					padding:20px;\
				}\
				#db_div label {\
					cursor:pointer;\
					margin:0 40px 0 0;\
					padding:2px;\
				}\
				#db_div label:hover {\
					background:#83bf73;\
					color:#fff;\
					-moz-border-radius:3px;\
					-webkit-border-radius:3px;\
					border-radius:3px;\
				}\
				#db_div textarea {\
					font-size:12px;\
				}\
				#db_div .gact a {\
					-moz-border-radius:10px;\
					-webkit-border-radius:10px;\
					border-radius:10px;\
					padding:2px 20px;\
				}\
				#db_btm {\
					background:#fff;\
					display:block;\
					position:absolute;\
					top:'+(/chrome/i.test(navigator.userAgent)?'-32px;':'-35px;')+'\
					left:-12px;\
					border-right:12px solid #E0E0E0;\
					border-top:12px solid #E0E0E0;\
					border-left:12px solid #E0E0E0;\
					text-align:center;\
				}\
			');
			var db_div = document.createElement('div');
			db_div.id = 'db_div';
			db_div.style.display = 'none';
			db_div.innerHTML = '\
					<span id="db_shadow">\
					</span>\
					<span id="db_div_a">\
						<a href="javascript:"  style="border-right:1px solid #fff;background:#fff;border-left:12px solid #83bf73;">功能介绍</a>\
						<a href="javascript:">友邻广播</a>\
						<a href="javascript:">沟通辅助</a>\
						<a href="javascript:">搜索下载</a>\
						<a href="javascript:">相册图片</a>\
						<a href="javascript:">页面加载</a>\
						<a href="javascript:">导航定位</a>\
					</span>\
					<div id="功能介绍">\
						　　【版本：V' + doubanHelper.version +'】\
						<br>　　<label>豆藤设置中心快捷键<input size=8 id="hk_db"/></label>\
						<br>　　\
						<br>　　豆藤，方便【沟通】与【获得】的工具。\
						<br>　　\
						<br>　　简单地说，使用豆藤可以更方便地“看帖”、“回帖”；\
						<br>　　更轻松地“搜索”或“下载” 相册、书籍、电影、音乐。\
						<br>　　\
						<br>　　豆藤有数十项功能，但您不需要设置。\
						<br>　　轻松地使用吧，豆藤会在您需要的地方出现。\
						<br>　　如果您是喜欢配置各种参数达人，豆藤也提供了丰富的选项。\
						<br>　　\
						<br>　　<label><input type="checkbox" id="supportHelper" />通过在卓越、淘宝商城上买书支持豆藤</label>\
						<br>　　<label><a href="http://www.douban.com/note/125348304/" target=_blank>【反馈意见】</a></label>\
						<br>　　<label><a href="http://www.douban.com/note/213064280/" target="_blank">【全部功能说明】</a></label>\
					</div>\
					<div id="友邻广播" style="display:none;">\
							<label><input type="checkbox" id="friendsTool" />友邻广播下方增加快捷工具条</label>\
							<br>\
							<br>\
							<label><input type="checkbox" id="myGFW" />开启友邻广播过滤</label>\
							<br>\
							屏蔽关键词：\
							<br>\
							<textarea rows="4" cols="81" id="blockWords" style="width:450px;" placeholder="【每行】一个关键词"></textarea><br>\
							屏蔽发布者：\
							<textarea rows="4" cols="81" id="blockPeople" style="width:450px;" placeholder="【每行】一个发布者，可以是发布者的名字或URL"></textarea><br>\
							【广播过滤说明】：<br>\
							1、支持按【关键词】或发布者的【名字】屏蔽友邻广播;<br>\
							2、【每行】输入一个关键词<br>\
							3、关键词可为中文、日文、英文以及标点符号等字符；<br>\
							4、发布者可输入名字或其主页URL地址<br>\
					</div>\
					<div id="沟通辅助" style="display:none;">\
							<label><input type="checkbox" id="count" />允许显示楼层数</label>\
							<label><input type="checkbox" id="just_view" />允许只看、高亮、忽略某人发言</label>\
							<br>\
							<label><input type="checkbox" id="tidybar" />使用紧凑工具条</label>\
							<label><input type="checkbox" id="requote" />允许引用、回复某人发言</label>\
							<br>\
							<label><input type="checkbox" id="sortGroup" />开启小组分类　</label>\
							<label><input type="checkbox" id="auto_hide" />自动隐藏工具条</label>\
							<br>\
							<label><input type="checkbox" id="exBoard" />增强留言板功能</label>\
							<label><input type="checkbox" id="hide_grpinfo" />自动折叠小组公告</label>\
							<br>\
							<br>\
							<label><input id="hlcolor" size=6 onMouseover="this.style.background=\'#fff\';" onKeyup="this.style.background=this.value" onMouseout="this.style.background=this.value" />高亮背景色</label>\
							<br>\
							<label><input id="diylen" size=4 />当引用文字超过该长度，提示是否截断</label><br>\
							<textarea rows="2" cols="81" id="diyword" style="width:450px;"></textarea><br>\
							<br>\
							【快捷键】：<br>\
							打开浮动回复框为 Shift+Enter<br>\
							退出浮动回复框为 Esc（会清空内容）<br>\
							提交发言为 Ctrl+Enter（适用于豆瓣大部分输入框）<br>\
							个性签名使用快捷键为 Alt+Enter，可瞬间输入设定文字。（适用于豆瓣大部分输入框）\
					</div>\
					<div id="相册图片" style="display:none;">\
							<label><input type="checkbox" id="highslide" />开启相册影院模式</label>\
							<br>\
							<label><input type="checkbox" id="alb_big" />允许缩略图上点击鼠标中键显示大图</label>\
							<br>\
							<label><input type="checkbox" id="loadAllPic" />允许一键显示全部大图</label>\
							<br>\
							<label><input type="checkbox" id="down_photo" />允许批量下载大图</label>\
							<br>\
							<p>开启相册影院模式后，将提供前所未有的相册浏览体验。\
							<br>  此功能配合豆藤自带的加载全部页面功能一起使用，效果更佳。\
							<br>\
							<br>\
							贴图识别：<br>\
							<label><input type="radio" name="showpic" />不开启图片识别</label><br>\
							<label><input type="radio" name="showpic" />只对豆瓣网开启</label><br>\
							<label><input type="radio" name="showpic" />对所有网页开启</label><br>\
							<label><input type="radio" name="showpic" />对所有网页开启，点击鼠标中键时才加载（速度最快，推荐选项）</label>\
							<br>\
							<p>本功能为自动识别网页中文字链接中的图片，并将其显示出来。\
							<br>  主要用于克服豆瓣小组不能贴图的缺陷，方便看图。\
							<br>  （此功能对所有网站适用，默认只识别豆瓣中的图片；可用鼠标中键单击显示/隐藏图片）</p>\
					</div>\
					<div id="页面加载" style="display:none;">\
							<label><input type="checkbox" id="addPageLoader" />开启页面加载功能</label>\
							<br>\
							<label><input type="checkbox" id="autoLoadPage" />自动加载下一页</label>\
							<br>\
							<label>加载多个分页时，每次加载<input id="loadPageNum" size=1 />页</label>\
							<br>\
							<p>开启页面加载后，点击“加载下一页”按钮可将下一页显示在当前页面。\
							<br>  若开启“自动加载下一页”功能，浏览到网页底部时，豆藤会自动加载下一页。</p>\
							<br>\
							<br>\
							<br>\
							<br>\
							<br>\
					</div>\
					<div id="搜索下载" style="display:none;">\
							<label><input type="checkbox" id="sourceSearcher" />书影音条目展示网盘、BT、电子书等下载资源</label>\
							<br>\
							<label><input type="checkbox" id="kindle" />读书页面显示Kindle商店条目</label>\
							<br>\
							<label><input type="checkbox" id="musicLink" />破解音乐人下载链接</label>\
							<br>\
							<label><input type="checkbox" id="FMdownLoad" />开启豆瓣FM破解&nbsp;&nbsp; </label>\
							<br>\
							<br>\
							<label><input type="checkbox" id="search_bar" />开启快速搜索条</label>\
							<label>添加自定义搜索引擎↓</label>\
							<textarea rows="8" cols="81" id="otherEngines" style="width:450px;"></textarea>\
							<br><strong>添加其他引擎的使用说明：</strong><br>\
							打开 “豆藤” 界面后看到添加其他搜索引擎文本框里有默认的如下内容：<br>\
							----------------------------------------------------------<br>\
							豆瓣小组|http://www.douban.com/group/search?q={word}<br>\
							百度知道|http://zhidao.baidu.com/q?word={gb:word}&amp;ct=17&amp;tn=ikaslist&amp;rn=10<br>\
							----------------------------------------------------------<br>\
							1、以花括号括起来的部分 {word} 代表搜索的关键字，该关键字将会以 UTF-8 方式编码。如果想要以 GB2312 方式编码，请使用{gb:word}，编写地址时要注意这点。<br>\
							2、以竖线 | 为分隔符，前面的 “豆瓣小组” 是在页面上显示的链接名称，后面的 http://www.douban.com/group/search?q={word} 是发起搜索的链接地址。<br>\
							3、每行对应一个搜索引擎。特别注意每行中必须有个竖线 | 分隔前后两部分。<br>\
							你可以仿照例子添加其他搜索，比如雅虎、wiki等等的。\
					</div>\
					<div id="导航定位" style="display:none;">\
							<label><input type="checkbox" id="hl_input" />高亮焦点输入框　</label>\
							<br>\
							<label><input type="checkbox" id="settler" />开启浮动定位条　</label>\
							<br>\
							<label><input type="checkbox" id="autoElevator" />开启自动电梯</label>\
							<br>\
							<label><input type="checkbox" id="slideBar" />开启顶部滑动导航条</label>\
							<br>\
							<label><input type="checkbox" id="addTopPager" />置顶翻页导航条</label>\
							<br>\
							<label>浮动定位条快捷键↓</label><br>\
							<label>置顶：<input size=8 id="hk_top"/></label>\
							<label>置底：<input size=8 id="hk_btm"/></label><br>\
							<label>上页：<input size=8 id="hk_pre"/></label>\
							<label>下页：<input size=8 id="hk_nxt"/></label><br>\
							<label>浮动定位条自定义链接↓(用法与添加自定义搜索引擎类似)</label><br>\
							<textarea rows="6" cols="81" id="otherLinks" style="width:450px;"></textarea>\
					</div>\
					<span id="db_btm">\
						<input type="button" title="部分选项需要刷新页面才能生效" id="s_ok" value="√ 确认">\
						<input type="button" title="取消本次设定，所有选项还原" id="s_cl" value="X 取消">\
					</span>\
			';
			$('/body')[0].appendChild(db_div);
			$('#s_ok').addEventListener('click', function(){sw_set(true);}, false);
			$('#s_cl').addEventListener('click', function(){sw_set(false);}, false);

			$('#db_div_a').addEventListener('mouseover', function(e){
				if(!e.target.id){
					setStyles($$('#db_div DIV'), 'display:none;');//隐藏选项页面
					$('#'+e.target.innerHTML).style.display = 'block';//显示当前选项页面
					setStyles($$('#db_div_a A'), '');//清空左侧标签样式
					e.target.style.cssText = 'border-right:1px solid #fff;background:#fff;border-left:12px solid #83bf73;';//凸显左侧当前标签
				}
			}, false);
			
			// 豆藤更名升级提醒
			// try{
			// 	if(!$('#rename_update_link')){
			// 		if($('#db_hp') && !$('#rename_update_link')){
			// 			var uplk = document.createElement('div');
			// 			uplk.id = 'rename_update_link';
			// 			GM_addStyle('#rename_update_link span {background:#FAEFE3;border:1px solid #EEE;color:#666;margin:2px;padding:0 2px;float:right;}');
			// 			uplk.innerHTML = '<span><a href="http://www.douban.com/note/125348304/" title="豆瓣助手已更名“豆藤”，您同时安装了新版与旧版，请卸载旧版" target="_blank">豆瓣助手已更名“豆藤”，您同时安装了新版与旧版，请卸载旧版</a> <a id="forgetIt_" href=# style="float:right;" title="不再提醒">&nbsp;X&nbsp;</a></span>';
			// 			var topnav = $$('.top-nav>.bd')[0];
			// 			$('#db_BeanVine').style.cssText = 'background: #FAEFE3;padding: 4px;';
						
			// 			if(topnav && !getCookie('__gare')){
			// 				topnav.appendChild(uplk);
			// 				$('#forgetIt_').addEventListener('click', function(){
			// 					setCookie('__gare', '1', 1000, '/', '.douban.com');
			// 					$('#rename_update_link').style.display = 'none';
			// 				}, false);
			// 			};
			// 		};
			// 	};
			// }catch(e){};
			
		};
	};

	// 显示\隐藏设置栏
	function sw_set(ch){
		toggle($('#db_div'));
		if (ch){
			//写入图片识别选项
			var pic_sw = $('showpic');
			for (var i=0,j=pic_sw.length; i<j; i++){if (pic_sw[i].checked){GM_setValue('choice', i);}};
			GM_setValue('hlcolor', $('#hlcolor').value);//写入高亮背景色
			GM_setValue('otherEngines', $('#otherEngines').value);//写入自定义搜索引擎
			GM_setValue('otherLinks', $('#otherLinks').value);//写入自定义链接
			GM_setValue('diyword', $('#diyword').value);//写入个性签名
			GM_setValue('diylen', parseInt($('#diylen').value));//自定义引文截断长度
			GM_setValue('loadPageNum', parseInt($('#loadPageNum').value));//加载多个分页的页数
			db_write('just_view');//写入只看、高亮、忽略选项
			db_write('search_bar');//写入搜索条选项
			db_write('hl_input');//写入高亮输入框选项
			db_write('count');//写入数楼选项
			db_write('auto_hide');//写入自动隐藏选项
			db_write('tidybar');//写入工具条样式
			db_write('requote');//写入引用回复选项
			db_write('settler');//写入浮动定位工具选项
			db_write('hide_grpinfo'); //写入折叠小组公告选项
			db_write('friendsTool'); //写入友邻工具选项
			// db_write('multiSearch'); //写入全站搜索选项
			db_write('slideBar'); //写入滑动导航条选项
			db_write('autoElevator'); //写入自动电梯选项
			db_write('exBoard'); //写入留言板增强选项
			db_write('musicLink'); //写入音乐下载链接选项
			db_write('sortGroup'); //写入小组分类选项
			db_write('alb_big');//中键相册大图
			db_write('highslide'); //相册影院模式
			db_write('loadAllPic'); //一键显示全部大图
			db_write('down_photo'); //批量下载大图
			db_write('supportHelper'); //通过在卓越、淘宝商城上买书支持豆藤
			db_write('addPageLoader'); //开启加载下一页功能
			db_write('autoLoadPage'); //自动加载下一页功能
			db_write('sourceSearcher'); //展示下载网盘、BT等资源
			db_write('FMdownLoad'); //开启豆瓣FM破解
			db_write('addTopPager'); //置顶翻页导航条
			db_write('kindle'); //显示kindle商店结果
			// db_write('topNotification'); //置顶消息提醒
			db_write('myGFW'); //广播过滤
			GM_setValue('hk_db', $('#hk_db').value);//写入自定义搜索引擎
			GM_setValue('hk_top', $('#hk_top').value);//写入置顶快捷键
			GM_setValue('hk_btm', $('#hk_btm').value);//写入置底快捷键
			GM_setValue('hk_pre', $('#hk_pre').value);//写入上一页快捷键
			GM_setValue('hk_nxt', $('#hk_nxt').value);//写入下一页快捷键
			GM_setValue('blockWords', $('#blockWords').value);//写入广播过滤关键词
			GM_setValue('blockPeople', $('#blockPeople').value);//写入广播过滤关键词
		}else{                                           
			//读取高亮背景色
			$('#hlcolor').value = GM_getValue('hlcolor', '#eeffee');
			$('#hlcolor').style.background = GM_getValue('hlcolor');
			$('showpic')[GM_getValue('choice', 1)].checked = true;//读取图片识别选项
			$('#otherEngines').value = GM_getValue('otherEngines', '百度一下|http://www.baidu.com/s?ie=utf-8&wd={word}\nGoogle|http://www.google.com.hk/search?&q={word}\nVeryCD|http://www.verycd.com/search/folders/{word}\n维基百科|http://zh.wikipedia.org/w/index.php?search={word}\n谷歌书籍|http://books.google.com/books?q={word}\n射手字幕|http://shooter.cn/search/{word}\n新浪爱问|http://ishare.iask.sina.com.cn/search.php?key={gb:word}\n百度文库|http://wenku.baidu.com/search?word={gb:word}\nED2K|http://www.google.com.hk/search?&q=ed2k+{word}\n土豆豆单|http://so.tudou.com/psearch/{word}\n土豆视频|http://so.tudou.com/isearch/{word}\n优酷视频|http://so.youku.com/search_video/q_{word}\n优酷列表|http://so.youku.com/search_playlist/q_{word}\n豆瓣小组|http://www.douban.com/group/search?q={word}\n百度知道|http://zhidao.baidu.com/q?word={gb:word}&ct=17&tn=ikaslist&rn=10');//读取自定义搜索引擎
			$('#otherLinks').value = GM_getValue('otherLinks', '豆藤主页|http://www.douban.com/note/125348304/\n');//读取自定义链接
			$('#diyword').value = GM_getValue('diyword', '个性签名');//读取个性签名
			$('#diylen').value = GM_getValue('diylen', 500);//自定义引文截断长度
			$('#loadPageNum').value = GM_getValue('loadPageNum', 10);//加载多个分页的页数
			db_read('just_view',true);//读取只看、高亮、忽略选项
			db_read('search_bar',true);//读取搜索条选项
			db_read('hl_input',true);//读取高亮输入框选项
			db_read('count',true);//读取数楼选项
			db_read('auto_hide',false);//读取自动隐藏选项
			db_read('tidybar', true);//读取工具条样式
			db_read('requote', true);//读取引用回复选项
			db_read('settler', true);//读取浮动定位工具选项
			db_read('hide_grpinfo',true);//读取折叠小组公告选项
			db_read('friendsTool',true);//读取友邻工具选项
			// db_read('multiSearch',true);//读取全站搜索选项
			db_read('slideBar',true);//读取滑动导航条选项
			db_read('autoElevator',true);//读取自动电梯选项
			db_read('exBoard',true);//读取留言板增强选项
			db_read('musicLink',true);//读取音乐下载链接选项
			db_read('sortGroup',true);//读取小组分类选项
			db_read('alb_big',true);//中键相册大图
			db_read('highslide',false);//相册影院模式
			db_read('loadAllPic',true);//一键显示全部大图
			db_read('down_photo',true);//批量下载大图
			db_read('supportHelper',true);//通过在卓越、淘宝商城上买书支持豆藤
			db_read('addPageLoader',true);//加载下一页功能
			db_read('autoLoadPage',true);//自动加载下一页功能
			db_read('sourceSearcher',true);//展示下载网盘、BT等资源
			db_read('FMdownLoad',true);//开启豆瓣FM破解
			db_read('addTopPager',true);//置顶翻页导航条
			db_read('kindle',true);//显示kindle商店结果
			// db_read('topNotification',true);//置顶消息提醒
			db_read('myGFW',true);//广播过滤
			trans_code('hk_db', 'Alt+Q');//显示豆藤设置界面快捷键
			trans_code('hk_top', 'W');//显示置顶快捷键
			trans_code('hk_btm', 'S');//显示置底快捷键
			trans_code('hk_pre', 'A');//显示上一页快捷键
			trans_code('hk_nxt', 'D');//显示下一页快捷键
			$('#blockWords').value = GM_getValue('blockWords', '');//读取广播过滤关键词
			$('#blockPeople').value = GM_getValue('blockPeople', '');//读取广播过滤关键词
		}              
	};

	//checkbox通用读取、写入函数
	function db_read(id,value){$('#'+id).checked = GM_getValue(id, value);};
	function db_write(id){GM_setValue(id, $('#'+id).checked);};


	/* ************************ 豆瓣相册处理 ************************ */

	// 相册增强
	function exAlbum(){
		var photitle = $$('.article>.photitle, .bd>.photitle, .article>.opt-bar-line')[0];// 相册、活动,  小站、阿尔法城图片墙, 剧照、海报
					// GM_addStyle('.event-photo-list li {min-width:33%!important;} .photo_wrap {min-width:170px!important;}');
					
		if (/album|photos(?!\/photo)/i.test(location.href) && photitle){
		
			if(!$('#switchHighslide')){//避免加载下一页后重复操作
				
				// 添加相册工具条
				photitle.innerHTML += '<br/>'
					+ (GM_getValue('highslide', false)
						? '<a href="javascript:" id="switchHighslide" class="lnk-sharing fleft" style="border-color:#e3f1ed;background-color:#f2f8f2;color:#4f946e;" title="点击关闭相册影院模式">关闭影院模式</a>'
						: '<a href="javascript:" id="switchHighslide" class="btn-donate fleft" style="border-color:#edceba;background-color:#fff0e2;color:#99776b;" title="点击开启相册影院模式，享受浏览图片的乐趣 by豆藤">开启影院模式</a>'
						)
					+ '&nbsp;&nbsp;&gt;<a href="javascript:" class="all_page" title="在本页面合并显示多个分页的图片，若分页较多，需耗时较长">加载多个分页</a>'
					+ (GM_getValue('loadAllPic', true) && '&nbsp;&nbsp;&gt;<a href="javascript:" id="showAllBig" title="点击显示本页全部大图，再次点击全部还原">显示全部大图</a>')
					+ (GM_getValue('down_photo', true) && '&nbsp;&nbsp;&gt;<a href="javascript:" id="downPhoto" title="批量下载全部大图的方法介绍，点击后请看右侧栏说明">批量下载大图</a>');
				
				$('#switchHighslide').addEventListener('click', function(){// 切换相册影院模式
					GM_setValue('highslide', !GM_getValue('highslide', false));
					location.reload();
				}, false);
				$('.all_page')[0].addEventListener('click', function(){loadPage(false, runHelper)}, false);// 顶部加载多个分页
				$('#showAllBig') && $('#showAllBig').addEventListener('click', function(){alb_all(false);}, false);// 一键显示全部大图
				$('#downPhoto') && $('#downPhoto').addEventListener('click', function(){down_photo();}, false);// 批量下载大图
			};
			
			// 允许缩略图上点击鼠标中键显示大图
			GM_getValue('alb_big', true) && alb_all(true);
			
			// 相册影院模式
			/** 
			 * Name:    Highslide JS
			 * Version: 4.1.9 (2010-07-05)
			 * Author:  Torstein HÃ¸nsi
			 * Support: www.highslide.com/support
			 * License: www.highslide.com/#license
			 */
			if(GM_getValue('highslide', true)){
			
				albMark();// set highslide mark
				
				// add JS
				!GM_getValue('highslide_js', false) && GM_xmlhttpRequest({
					method: 'GET',
					url: 'http://douban8.sinaapp.com/files/highslide.js',
					onload: function(xhr){
						if(xhr.status == 200){
							GM_setValue('highslide_js', xhr.responseText);
							var a = document.createElement('script');
							a.innerHTML = xhr.responseText;
							$$('head')[0].appendChild(a);//xhr为异步操作，所以第一次加载时，需要先执行
						}
					}
				});
				var a = document.createElement('script');
				a.id = 'highslide_js';
				a.innerHTML = GM_getValue('highslide_js', '');
				$('#highslide_js') || $$('head')[0].appendChild(a);
				
				
				// add css
				!GM_getValue('highslide_css', false) && GM_xmlhttpRequest({
					method: 'GET',
					url: 'http://douban8.sinaapp.com/files/highslide.css',
					onload: function(xhr){
						if(xhr.status == 200){
							GM_setValue('highslide_css', xhr.responseText);
							GM_addStyle(xhr.responseText);
						}
					}
				});
				GM_addStyle(GM_getValue('highslide_css', ''));
				
				// add config
				var a = document.createElement('script');
				a.id = 'highslide_config'
				a.innerHTML = "\
					hs.align            = 'center';\
					hs.transitions      = ['expand', 'crossfade'];\
					hs.fadeInOut        = true;\
					hs.dimmingOpacity   = 0.8;\
					hs.wrapperClassName = 'dark borderless floating-caption';\
					hs.captionEval      = 'this.thumb.alt';\
					hs.marginBottom     = 200;\
					hs.numberPosition   = 'caption';\
	\
					hs.addSlideshow({\
						interval       : 2000,\
						repeat         : false,\
						useControls    : true,\
						overlayOptions : {\
							className  : 'text-controls',\
							position   : 'bottom center',\
							relativeTo : 'viewport',\
							offsetY    : -60\
						},\
						thumbstrip     : {\
							position   : 'bottom center',\
							mode       : 'horizontal',\
							relativeTo : 'viewport'\
						}\
					});\
				";
				$('#highslide_config') || $$('head')[0].appendChild(a);
			};
		};
	};

	// 添加相册影院模式标记
	function albMark(){
		var unitBox = $$('.photo_wrap, .event-photo-list>ul>li, .poster-col4>li');// 相册、活动,  小站、阿尔法城图片墙, 剧照、海报 图片单元
		for (var a,img,photoNum,photoPath,i=0,j=unitBox.length; i<j; i++){
			img = unitBox[i].getElementsByTagName('img')[0];
			if(img && !img.alt){
				a = unitBox[i].getElementsByTagName('a')[0];
				a.className += ' highslide';
				if(/movie\.douban/i.test(location.href)){
					photoPath = 'raw';
				}else{
					photoNum = img.src.match(/\/p(\d+)\.jpg/i), photoPath = 'photo';
					!!photoNum && (Number(photoNum[1]) > 1770000000) && (photoPath = 'large');//1770000000号以后的照片都有更大尺寸的原图，url中含large
				};
				a.setAttribute('onclick', 'return hs.expand(this, {src:"'+img.src.replace(/thumb/, photoPath)+'"});');//暂不支持私密相册，有时间再配合chk_big()支持
				
				comm = unitBox[i].getElementsByTagName('div')[unitBox[i].getElementsByTagName('div').length-1];//回应
				!/\/#comments/i.test(comm.innerHTML) && (comm.innerHTML += ' <a href="'+ a.href +'">0回应</a>');//如果没有回应，就增加0回应的入口，方便开启影院模式的情况进入图片页面
				img.alt = a.title + '<br/>' + comm.innerHTML.replace(/<p>.*<\/p>/, '');//去除小站、阿尔法城图片墙的双重说明文字
			};
		};
	};

	// 批量下载大图 
	function down_photo(){
		$('.aside')[0].innerHTML = '\
			<p style="background:#E9F4E9;color:#0C7823;font-size:14px;padding:10px;">批量下载全部大图的两种方式：</p>\
			<p>【方式一】：点击以下链接，右键点击“另存为”该页面，保存类型选择“网页，全部”，即可在与页面同名文件夹下得到全部大图；</p>\
			<p><a target="_blank" href="javascript:void(0);" id="allPhotoPage" class="btn-donate" title="点击后打开全部大图（包含所有分页）  by豆藤"><img border="0" src="data:image/gif;base64,R0lGODlhCgAKAJEDAMzMzP9mZv8AAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAADACwAAAAACgAKAAACF5wncgaAGgJzJ647cWua4sOBFEd62VEAACH5BAUAAAMALAEAAAAIAAMAAAIKnBM2IoMDAFMQFAAh+QQFAAADACwAAAAABgAGAAACDJwHMBGofKIRItJYAAAh+QQFAAADACwAAAEAAwAIAAACChxgOBPBvpYQYxYAIfkEBQAAAwAsAAAEAAYABgAAAgoEhmPJHOGgEGwWACH5BAUAAAMALAEABwAIAAMAAAIKBIYjYhOhRHqpAAAh+QQFAAADACwEAAQABgAGAAACDJwncqi7EQYAA0p6CgAh+QQJAAADACwHAAEAAwAIAAACCpRmoxoxvQAYchQAOw==">读取到前<span id="loadingPage"></span>页(<span id="loadPercent"></span>)</a></p>\
			<hr>\
			<p>【方式二】：使用迅雷、旋风等工具下载以下大图链接：</p>\
			<p>（以下链接为当前页面往后全部分页的大图链接集合）</p>\
			<p><textarea id="photoLinks" rows="20" style="width:100%;font-size:9px;"></textarea></p>';
		
		// 读取并写出指定页面的大图链接
		var RnWPhotoLink = function(dom){
			var imgs = $$('.photo_wrap img, .photo-item img, .cover img', dom||document);
			for (var i=0,j=imgs.length; i<j; i++){
				chk_big(imgs[i].parentNode, $('#photoLinks'));
			};
		};
		
		// 操作当前页面
		RnWPhotoLink();
		
		// 操作后续页面
		endlessPage(
			function(dom){
				RnWPhotoLink(dom);
				var totalNum = $$('.paginator>a')[$$('.paginator>a').length-1].textContent, loadingPage = $$('.paginator .thispage', dom)[0].textContent;
				$('#loadPercent').innerHTML = parseInt(eval(loadingPage + '/' + totalNum)*100).toString() + '%';
				$('#loadingPage').innerHTML = loadingPage;
			},
			function(){$('#allPhotoPage').innerHTML = '[打开全部大图]'}
		);
		
		// 新页面打开全部大图
		$('#allPhotoPage').addEventListener('click', function(){
			//构造全部大图HTML页面代码
			var photoSrc = $('#photoLinks').value.match(/\S+\n/g);
			var html = '<head>\
				<meta content=\"text/html;charset=UTF-8\" http-equiv=\"Content-Type\">\
				<title>'+document.title+'</title>\
				<style>p{font-family:微软雅黑;font-size:14px;} img{height:180px;width:320px;} img:hover{height:auto;width:auto;position:relative;left:-60px;top:-50px;z-index:2;border:10px solid #FFF;} div{float:left;height:180px;width:320px;margin:2px} body{padding:50px;}</style>\
				<script></script>\
				</head><body>\
				<p>【相册标题】：'+document.title+'</p>\
				<p>【相册来源】：<a target="_blank" href="'+location.href+'">'+location.href+'</a></p>\
				<p>【相片数量】：'+photoSrc.length+'</p>\
				<p>【下载说明】：点击“另存为”该页面，保存类型选择“网页，全部”，即可在与页面同名文件夹下得到全部大图</p>\
				<p>（以下图片均为最大尺寸原图，鼠标悬停可查看原始尺寸。建议在图片全部显示完毕后再保存，若有图片加载失败，可按下 Ctrl + F5 强制刷新）</p>';
			for (var i=0,j=photoSrc.length; i<j; i++){
				html += '<div><img src="'+photoSrc[i]+'"></div>';
			};
			html += '</body>';
			/chrome/i.test(navigator.userAgent)
				? (location.href = "javascript:'"+html+"'")
				: window.open("javascript:'"+html+"'");
		}, false);
	};

	// 监视中键或全部显示
	function alb_all(b){
		var imgs = $$('.photo_wrap img, .photo-item img, .cover img');
		for (var i=0,j=imgs.length; i<j; i++){
			b && imgs[i].parentNode.addEventListener('mousedown', function(e){// 鼠标中键点击
				if (e.button == 1){// 0左键; 1中键; 2右键
					chk_big(this);
					e.preventDefault();
					e.stopPropagation();
				};
			}, false);
			!b && chk_big(imgs[i].parentNode);// 批量大图
		};
	};

	// 相册切换大小图
	// p：小图img的父节点； toURL：是否改为输出大图url； textarea是否输出到指定textarea
	function chk_big(p, textarea){
		var h = p.innerHTML;
		if(/otho\.douban/i.test(h)){
			// 私密相册
			p.innerHTML += '';
			var img = p.getElementsByTagName('img')[0];
			if(!img.getAttribute('srcx')){
				GM_xmlhttpRequest({
					method: 'GET',
					url: p.href,
					onload: function(resp){
						if(resp.status < 200 || resp.status > 300) {return;};
						img.setAttribute('srcx', img.src);
						var bigSrc = String(resp.responseText.match(/img\ssrc="(http:\/\/otho\.[^'"]+)"/i)[1]);
						if(!!textarea){
							textarea.value += bigSrc+'\n';
						}else{
							img.src = bigSrc;
						};
					},
					onerror: function(){return;}
				});
			}else{
				var l = img.src;
				img.src = img.getAttribute('srcx');
				img.setAttribute('srcx', l);
			};
		}else{
			// 公共相册
			// 1770000000
			// http://img3.douban.com/view/photo/thumb/public/p2083803372.jpg
			var photoNum = h.match(/\/p(\d+)\.jpg['"]/i), photoPath = ['photo', /photo\/photo/];
			!!photoNum && (Number(photoNum[1]) > 1770000000) && (photoPath = ['large', /photo\/large/]);//1770000000号以后的照片都有更大尺寸的原图，url中含large

			var bigPhotoREG = /movie\.douban/i.test(location.href) ? ['raw', /photo\/raw/] : photoPath;
			if(!!textarea){
				textarea.value += p.getElementsByTagName('img')[0].src.replace(/thumb/, bigPhotoREG[0]) + '\n';
			}else{
				p.innerHTML = /thumb/i.test(h) ? h.replace(/thumb/, bigPhotoREG[0]) : h.replace(bigPhotoREG[1], 'photo/thumb');
			};
		};
		
		// 添加css样式，使大图方便查看
		if(!textarea){//只输出链接时不执行
			var parent2 = p.parentNode.parentNode;
			p.querySelector('img').style.cssText = 'max-width:600px';
			if(p.className == 'album_photo'){
				// 小站
				parent2.style.cssText = (parent2.style.width == 'auto') ? '':'width:auto;min-width:33%;';
			}else if(p.parentNode.className == 'cover'){
				// 剧照
				parent2.style.cssText = (parent2.style.width == 'auto') ? '':'width:auto;min-width:136px;position:relative;z-index:100;';
				p.getElementsByTagName('img')[0].style.cssText = 'max-width:960px;';
			}else{
				// 相册、活动
				p.parentNode.style.width = (p.parentNode.style.width == 'auto') ? '170px': 'auto';
			};
		};
	};

	/* ************************ 个人资料备份处理 ************************ */


	// 写过2篇日记
	// http://www.douban.com/people/iRSS/notes

	// 我看：http://movie.douban.com/mine
	// 我听：http://music.douban.com/mine
	// 我读：http://book.douban.com/mine

	// 共有4个相册
	// http://www.douban.com/people/iRSS/photos
	// 参加了54个小组
	// http://www.douban.com/people/iRSS/groups
	// 关注过26个小站
	// http://www.douban.com/people/iRSS/minisite
	// 关注的人
	// http://www.douban.com/contacts/list
	// 推荐
	// http://www.douban.com/people/iRSS/recs
	// 加心26首音乐
	// http://douban.fm/mine?type=liked
	// 我喜欢的歌手
	// http://douban.fm/mine?type=liked


	// starBackup();
	// function starBackup(){
		// var user = $('#edit_signature');
		// if(user){
			// //添加备份按钮
			// var span = document.createElement('span');
			// span.innerHTML = '<a href="javascript:void(0);" id="starBackup" class="btn-donate" title="点击后备份日记  by豆藤">[资料备份]</a>';
			// user.appendChild(span);
			
			// //捆绑备份事件
			// $('#starBackup').addEventListener('click', function(){
				// var textarea = document.createElement('div');
				// textarea.style.cssText = 'position:relative;width:940px;z-index:10;top:20px;';
				// textarea.innerHTML = '<span id="loadPercent"></span><a id="closeBTM" title="关闭">X</a><textarea rows="20" style="width:100%;"></textarea>';
				// $('#db-nav-main').appendChild(textarea);
				// GM_addStyle('#closeBTM{background:#FFF;border:1px solid #BBB;border-radius:10px;color:#BBB;display:block;height:17px;position:absolute;right:-17px;text-align:center;top:26px;width:17px;} #closeBTM:hover{background:#733;border:1px solid #F33;color:#FFF;}')
			
				
			// }, false)
			
			
		// }
	// };


	/* ************************ 书影音页面处理 ************************ */

	// 添加搜索条
	function addSearchBar() {
		if ($('#mainpic') && GM_getValue('search_bar', true) && !$('.s_bar')[0]){
		
			GM_getValue('otherEngines','') == '' && GM_setValue('otherEngines','百度一下|http://www.baidu.com/s?ie=utf-8&wd={word}\nGoogle|http://www.google.com.hk/search?&q={word}\n维基百科|http://zh.wikipedia.org/w/index.php?search={word}\n谷歌书籍|http://books.google.com/books?q={word}\n射手字幕|http://shooter.cn/search/{word}\n新浪爱问|http://ishare.iask.sina.com.cn/search.php?key={gb:word}\n百度文库|http://wenku.baidu.com/search?word={gb:word}\nED2K|http://www.google.com.hk/search?&q=ed2k+{word}\n土豆视频|http://so.tudou.com/isearch/{word}\n优酷视频|http://so.youku.com/search_video/q_{word}\n豆瓣小组|http://www.douban.com/group/search?q={word}\n百度知道|http://zhidao.baidu.com/q?word={gb:word}&ct=17&tn=ikaslist&rn=10');
		
			var engineLength = GM_getValue('otherEngines','|').match(/\|/ig).length + 1;

			GM_addStyle('\
				#mainpic {\
					overflow: visible;\
				}\
				.s_bar {\
					z-index: 97;\
					position: absolute;\
				}\
				.s_lin {\
					position: absolute;\
					top: -'+(engineLength/10*50)+'px;\
					left: 0px;\
					visibility: hidden;\
					width: '+ (engineLength<5 ? '60' : (engineLength<18 ? '130' : '190') ) +'px;\
				}\
				.s_bar a {\
					display: block;\
					background: '+ getComputedStyle($('.nav')[0]).backgroundColor +';\
					padding: 5px;\
					width: 50px;\
					border: 1px solid #fff;\
					line-height: 160%;\
					float: left;\
				}\
				.s_bar a:hover {\
					background: #3377AA;\
					color: #fff;\
				}\
				.s_bar:hover .s_tt {\
					visibility: hidden;\
				}\
				.s_bar:hover .s_lin {\
					visibility: visible;\
				}\
				.s_bar .s_tt {\
					border: 1px solid #E3EBEC;\
					width: 90px;\
					line-height: 100%;\
				}\
				.indent {\
					overflow: visible;\
				}\
			');
			
			var keyword = document.title.replace(/\s*\(豆瓣\)/, '');//取得书影音标题
			var keyWd = encodeURIComponent(keyword);
			var s_div = document.createElement('div');
			s_div.className = 's_bar';
			s_div.innerHTML = '\
				<a href="javascript:" class="s_tt">Search <font color="red"><b>!</b></font></a>\
				<span class="s_lin">\
				</span>\
			';
			$('#mainpic').appendChild(s_div);
			otherEngines(keyword);
			
		}
	};

	// 添加其他搜索引擎
	function otherEngines(keyword){
		var engines = GM_getValue('otherEngines', '').split(/\n/);
		for(i=0,j=engines.length; i<j; i++){
			var engine = engines[i].split('|');
			if (engine.length > 1) {
				if (engine[1].indexOf('{gb:word}') >= 0){
					replace2GB(keyword, engines[i], engine[0]);
				}else{
					var searchlinks = '<a href="'+ engines[i].replace(engine[0] + '|', '').replace(/{word}/ig, encodeURIComponent(keyword)) +'" target="_blank" >'+ engine[0].replace(/{word}|{gb:word}/ig, keyword.replace('<', '&lt;').replace('>', '&gt;')) +'</a>';
					$('.s_lin')[0].innerHTML += searchlinks;
				}
			}
		}
	};


	// 将其他搜索引擎中的搜索关键字替换成 GB2312 编码格式。编码通过查询 baidu 获得
	// 感谢 Googlekingkong 的作者，这是他想出的方法
	function replace2GB(keyword, enginesi, engine0){
		GM_xmlhttpRequest({
			method: 'GET',
			url: 'http://www.baidu.com/s?ie=utf-8&wd=' + encodeURIComponent(keyword),
			overrideMimeType: 'text/xml; charset=gb2312',
			onload: function(resp){
				if (resp.status < 200 || resp.status > 300) {
					return;
				};
				var keywordGB = String(resp.responseText.match(/word=[^'"&]+['"&]/i)).replace(/word=|['"&]/ig,'');
				var searchlinks = '<a href="'+ enginesi.replace(engine0 + '|', '').replace(/{gb:word}/ig, keywordGB) +'" target="_blank" >'+ engine0.replace(/{word}|{gb:word}/ig, keyword.replace('<', '&lt;').replace('>', '&gt;')) +'</a>';
				$('.s_lin')[0].innerHTML += searchlinks;
			},
			onerror: function(){
				return;
			}
		});
	};


	//下载资源搜索
	function sourceSearcher(){
		if(GM_getValue('sourceSearcher', true) && ((/(book|movie)\.douban\.com\/subject/.test(location.href) && $('#mainpic')) || (/read\.douban\.com\/ebook\/\d+/.test(location.href) && $('.app-article')[0]) )){
			var keyword = encodeURIComponent(document.title.replace(/-?\s*豆瓣阅读|\s*\(豆瓣\)/, '').replace(/[\[【\(（].*[\]】\)）]/gi, ''));
			var btBox = document.createElement('div');
			btBox.id = 'btBox';
			btBox.className = 'gray_ad section';
			$$('.aside')[0].insertBefore(btBox, $$('.aside')[0].firstChild);
			btBox.innerHTML = '<h2>资源下载</h2>\
				<div id="searchType" style="text-align:center;">\
					<span id="movieClass" style="display:none;">\
						<div class="srType" id="netDiseSource">网盘搜索(<a href="http://www.google.com/cse?cx=016039034221689005018:-tkkudop77s&ie=UTF-8&q=&ref=#gsc.q='+keyword+'" title="点击打开全部搜索结果" target="_blank">全部</a>)</div> |\
						<div class="srTypeOn" id="emuleSource">电驴搜索(<a href="http://www.google.com/cse?cx=016039034221689005018:5m7nq2x7-lc&ie=UTF-8&q=&ref=#gsc.q='+keyword+'" title="点击打开全部搜索结果" target="_blank">全部</a>)</div> |\
						<div class="srType" id="BTSource">BT搜索(<a href="http://torrentproject.com/?safe=on&orderby=best&s='+keyword+'" title="点击打开全部搜索结果" target="_blank">全部</a>)</div>\
					</span>\
					<span id="bookClass" style="display:none;">\
						<div class="srTypeOn" id="bookSource">电子书(<a href="http://www.google.com/cse?cx=016039034221689005018:ydhqa4tnacs&ie=UTF-8&q=&ref=#gsc.q='+keyword+'" title="点击打开全部搜索结果" target="_blank">全部</a>)</div> |\
						<div class="srType" id="onlineRead">在线阅读(<a href="http://www.google.com/cse?cx=016039034221689005018:r2jpcxd4ch0&ie=UTF-8&q=&ref=#gsc.q='+keyword+'" title="点击打开全部搜索结果" target="_blank">全部</a>)</div> |\
						<div class="srType" id="netDiseSource2">网盘搜索(<a href="http://www.google.com/cse?cx=016039034221689005018:-tkkudop77s&ie=UTF-8&q=&ref=#gsc.q='+keyword+'" title="点击打开全部搜索结果" target="_blank">全部</a>)</div>\
					</span>\
					<br>\
				</div>\
				<ul class="bs" style="">\
					<li id="loadingSource"><a href="#" target="_blank"><img border="0" src="data:image/gif;base64,R0lGODlhCgAKAJEDAMzMzP9mZv8AAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAADACwAAAAACgAKAAACF5wncgaAGgJzJ647cWua4sOBFEd62VEAACH5BAUAAAMALAEAAAAIAAMAAAIKnBM2IoMDAFMQFAAh+QQFAAADACwAAAAABgAGAAACDJwHMBGofKIRItJYAAAh+QQFAAADACwAAAEAAwAIAAACChxgOBPBvpYQYxYAIfkEBQAAAwAsAAAEAAYABgAAAgoEhmPJHOGgEGwWACH5BAUAAAMALAEABwAIAAMAAAIKBIYjYhOhRHqpAAAh+QQFAAADACwEAAQABgAGAAACDJwncqi7EQYAA0p6CgAh+QQJAAADACwHAAEAAwAIAAACCpRmoxoxvQAYchQAOw=="> 努力加载中...</a></li>\
					<li id="noSource" style="display:none;">找不到相关资源，<a href="#" target="_blank">手动搜索</a></li>\
					<li id="googleBlock" style="display:none;">杯具……Google又被抽风了，请稍候再试</li>\
					<div id="showSource"></div>\
				</ul>\
				<span class="toCopyRight" style="float:left;margin-left:10px">← 请支持正版</span>\
				<span class="functionFrom">by 豆藤</span>\
				<a id="showMore" href="javascript:;" style="display:none;float:right;margin-right:10px"> &gt; 展开/ 收起更多</a>\
				<br>';
				
			GM_addStyle('#btBox ul li{white-space:nowrap;text-overflow:ellipsis;}\
				#searchType div{cursor:pointer;vertical-align:middle;display:inline-block;text-align:center;width:90px;}\
				#searchType div:hover{background-color:#ffeada;color:#4F946E;}\
				.srType{color:#BBB;}\
				.srTypeOn{color:#4F946E;}\
				.srType a{color:#BBB;}\
				.toCopyRight{display:none;color:#666;}\
				.functionFrom{display:none;}\
				#btBox:hover .functionFrom{display:block;color:#BBB;float:left;fontsize:12px;}\
				');
			
			// BT搜索
			var loadBT = function(keyw){
				$$('#noSource a')[0].href = $$('#loadingSource a')[0].href = 'http://torrentproject.com/?safe=on&orderby=best&s=' + keyw;
				$('#loadingSource').style.display = '';
				$('#noSource').style.display = 'none';
				$('#showMore').style.display = 'none';
				$('#googleBlock').style.display = 'none';
				$('#showSource').innerHTML = '';
				GM_xmlhttpRequest({
					method: 'GET',
					url: 'http://torrentproject.com/?safe=on&orderby=best&out=json&s=' + keyw,
					onload: function(resp){
						if (resp.status < 200 || resp.status > 300) {
							$('#noSource').style.display = '';
							return;
						};
						var date = JSON.parse(resp.responseText);
						var itemNum = date.total_found>15 ? 15 : date.total_found; //搜索结果条目数
						if(itemNum == 0){
							$('#noSource').style.display = '';
						};
						$('#loadingSource').style.display = 'none';
						
						for(var i=1,j=itemNum+1; i<j; i++){
							var itemi = date[i];//itemi 搜索结果条目i
							var size = itemi.torrent_size; 
							var size = size>Math.pow(1024,3) ? (Math.round(size/Math.pow(1024,3)*10)/10+'G') : 
									( size<1024*1024 ? (Math.round(size/1024*10)/10+'K') : (Math.round(size/1024/1024*10)/10+'M') );
							$('#showSource').innerHTML += '<li style="'+ (i>5?'display:none" class="after5" ':'"') +'><span class="pl">【'+ size +'】</span><a href="http://torrentproject.com/' + itemi.torrent_hash + '/" title="' + itemi.title + '" target="_blank">' + itemi.title.replace(/[\[【\(（].*\.(com|cn|net|org|cc)[\]】\)）]/gi, '') + '</a></li>';
						};
						
						if(itemNum>5){
							$('#showMore').style.display = '';
						};
					},
					onerror: function(){
						$('#noSource').style.display = '';
						return;
					}
				});
			};

			// google自定义搜索
			var loadGoogle = function(cid, keyw, click){
				$$('#noSource a')[0].href = $$('#loadingSource a')[0].href = 'http://www.google.com/cse?cx='+cid+'&ie=UTF-8&q=&ref=#gsc.q=' + keyw;
				$('#loadingSource').style.display = '';
				$('#noSource').style.display = 'none';
				$('#showMore').style.display = 'none';
				$('#googleBlock').style.display = 'none';
				$('#showSource').innerHTML = '';


				var googleLoader = function(site){
					var path = site || 'http://www.google.com/';
					GM_xmlhttpRequest({
						method: 'GET',
						url: path + 'uds/GwebSearch?rsz=filtered_cse&hl=zh_CN&cx='+cid+'&v=1.0&key=notsupplied&q=allintitle%3A' + keyw,
						onload: function(resp){
							if(resp.status < 200 || resp.status > 300){
								googleLoader('https://www.google.com/');
								return;
							};
							var date = JSON.parse(resp.responseText);
							var itemNum = date.responseData.results.length; //搜索结果条目数
							if(itemNum == 0){
								$('#noSource').style.display = '';
							};
							$('#loadingSource').style.display = 'none';
							
							for(var i=0,j=itemNum; i<j; i++){
								var itemi = date.responseData.results[i]; //itemi 搜索结果条目i
								var webSite = !!itemi.perResultLabels && itemi.perResultLabels[0].anchor || ''; 
								
								//如果是图书，则将来源网站改为文档类型
								if(/(read|book)\.douban\.com\//.test(location.href)){
									var docType = itemi.title.match(/\.(txt|pdf|doc|ppt|chm|rar|exe|zip|epub|mobi|caj|jar)/i);
									!!docType && (webSite = '【' + docType[1].toUpperCase() + '】');
								};						
								//如果是电影，则将来源网站改为清晰度
								if(/movie\.douban\.com\//.test(location.href)){
									var docType = itemi.title.match(/(480p|720p|1080p|DVDRip|BDRip|BD|Blu-ray|Bluray|Blue-Ray|BlueRay|HDTV|HDRip|HALFCD|MiniSD|DVDSCR|枪版|CAM|TS|mkv|avi|rmvb|mp4|MP3|双语|预告片|人人影视|原声)/i);
									!!docType && (webSite = '【' + docType[1].toUpperCase() + '】');
								};
								
								$('#showSource').innerHTML += '<li style="'+ (i>4?'display:none" class="after5" ':'"') +'><span class="pl">'+ webSite +'</span><a href="' + decodeURIComponent(itemi.url) + '" title="' + itemi.titleNoFormatting + '" target="_blank">' + itemi.title.replace(/_免费高速下载_新浪爱问共享资料|-epub电子书下载.*|–华为网盘.*|-在线下载.*|网盘下载\|115网盘.*|迅雷快传-|\| IMAX\.im 高清影院|资源下载,中文字幕下载,|电影,|下载,|已上映,|,下载《.*|\| 720p 高清电影\(imax.im\)|[\[【\(（][^\[\]]*\.(com|cn|net|org|cc)[\]】\)）]/gi, '') + '</a></li>';
							};
							
							if(itemNum>5){
								$('#showMore').style.display = '';
							};
							
						},
						onerror: function(){
							googleLoader('https://www.google.com/');
							// loadBT(keyw);//google被抽风时，加载BT结果
							if(!!site){
								$('#googleBlock').style.display = '';
								$('#loadingSource').style.display = 'none';
							};
							return;
						}
					});
				};
				googleLoader();


			};
			
			//点击切换搜索引擎
			var keywordEncode = encodeURIComponent(document.title.replace(/\s*\(豆瓣\)/, ''));
			
			var changTab = function(e){
				var srTypeOn = $$('.srTypeOn');
				srTypeOn[0].className = 'srType';
				srTypeOn[1] && (srTypeOn[1].className = 'srType');
				e.target.className = 'srTypeOn';
			};
			
			$('#netDiseSource').addEventListener('click', function(e){
				if(!e.target.href){
					loadGoogle('016039034221689005018:-tkkudop77s', keywordEncode, true);// 网盘搜索 (排除点击链接的情况)
					changTab(e);
				};
			} , false);
			
			$('#netDiseSource2').addEventListener('click', function(e){
				if(!e.target.href){
					loadGoogle('016039034221689005018:-tkkudop77s', keywordEncode, true);// 网盘搜索2 电子书
					changTab(e);
				};
			} , false);
			
			$('#emuleSource').addEventListener('click', function(e){
				if(!e.target.href){
					loadGoogle('016039034221689005018:5m7nq2x7-lc', keywordEncode, true);// 电驴搜索
					changTab(e);
				};
			} , false);
			
			$('#BTSource').addEventListener('click', function(e){
				if(!e.target.href){
					loadBT(keywordEncode); //BT搜索
					changTab(e);
				};
			} , false);
			
			$('#bookSource').addEventListener('click', function(e){
				if(!e.target.href){
					loadGoogle('016039034221689005018:ydhqa4tnacs', keywordEncode, true);// 电子书搜索
					changTab(e);			
				};
			} , false);
			
			$('#onlineRead').addEventListener('click', function(e){
				if(!e.target.href){
					loadGoogle('016039034221689005018:r2jpcxd4ch0', keywordEncode, true);// 在线阅读搜索
					changTab(e);
				};
			} , false);
			
			//展示更多搜索结果
			$('#showMore').addEventListener('click', function(){
				setStyles($$('#btBox .after5'), 'display:' + ($$('#btBox .after5')[0].style.display=='none'?'':'none') );
			} , false);
			
			//初始化搜索
			if(/book\.douban\.com\/subject|read\.douban\.com\/ebook\/\d+/.test(location.href)){
				$('#bookClass').style.display = '';
				loadGoogle('016039034221689005018:ydhqa4tnacs', keyword+'%20more%3Akindle');// 默认加载 电子书搜索 kindle版本优先
				
				//豆瓣阅读处理
				if(/read\.douban\.com\/ebook\/\d+/.test(location.href)){
					$$('#btBox h2')[0].innerHTML = '<div class="hd tags-heading"><h3>' + $$('#btBox h2')[0].innerHTML + '</h3></div>';
					GM_addStyle('#btBox:hover .toCopyRight{display:block;}');//支持正版提示
				};
				
			}else{
				$('#movieClass').style.display = '';
				loadGoogle('016039034221689005018:5m7nq2x7-lc', keyword);// 默认加载 电驴搜索
			};
			
		};
	};

	function kindle(){
		if(GM_getValue('kindle', true) && /book\.douban\.com\/subject/.test(location.href) && $('#buyinfo')){
			var keyword = encodeURIComponent(document.title.replace(/-?\s*豆瓣阅读|\s*\(豆瓣\)/, '').replace(/[\[【\(（].*[\]】\)）]/gi, ''));
			var ISBN = $$('#info')[0].textContent.match(/978\d{10}/)+'';
			var kdbox = document.createElement('div');
			kdbox.id = 'kdbox';
			kdbox.style.display = 'none';
			$('#buyinfo').insertBefore(kdbox, $$('#buyinfo>div')[0]);
			var kindleURL = 'http://www.amazon.cn/s?url=search-alias%3Ddigital-text&field-keywords=' + ISBN;
			kdbox.innerHTML = '<h2>亚马逊Kindle(<a target="_blank" href="http://www.amazon.cn/s?url=search-alias%3Ddigital-text&field-keywords='+keyword+'">全部</a>) </h2>\
				<ul class="bs noline more-after" id="showKindle"></ul>';
			GM_addStyle('#kdbox ul li{white-space:nowrap; text-overflow:ellipsis;}');

			GM_xmlhttpRequest({
				method: 'GET',
				url: kindleURL,
				onload: function(resp){
					if(resp.status < 200 || resp.status > 300){
						$('#noKindleSource').style.display = '';
						return;
					};

					var pageDOM = document.createElement('html');
					pageDOM.innerHTML = resp.responseText;

					//剔除非kindle结果
					var otherResults = pageDOM.querySelector('#categoryCorrectedResults');
					!!otherResults && otherResults.parentNode.removeChild(otherResults); 

					var prodUnit = pageDOM.querySelector('.prod');
					if(!!prodUnit){
						var title = prodUnit.querySelector('h3>a').textContent;;
						var brackets = title.match(/[\(（].*[）\)]/);
						if(!!brackets && brackets[0].length > 7){
							title = title.replace(/[\(（].*[）\)]/, '');
						};
						var href = prodUnit.querySelector('a');
						var priceNum = prodUnit.querySelector('.newp a .red').textContent.replace(/[^-\.\d]/g, '');
						var price = (Number(priceNum) > 0) ? ('RMB '+priceNum) : '<b>免费</b>';

						$('#showKindle').innerHTML += '<li>\
							<a target="_blank" href="'+href+'" title="'+title+'">\
								<span>'+title+'</span>\
								<span class="buylink-price">( <span>'+price+'</span> )</span>\
							</a>\
						</li>';
						kdbox.style.display = '';
					};
				},
				onerror: function(){
					return;
				}
			});
		};
	};

	/* ************************ 图片识别处理 ************************ */

	// 贴图识别
	function showPic(){
		var a_links = document.links;
		switch ( parseInt(GM_getValue('choice', 1)) ){
		case 0:
			break;
		case 1:
			if (Douban || location.href == 'http://userscripts.org/scripts/show/49911') {
			}else{
				break;
			};
		case 2:
			for (var i=0,n=a_links.length; i<n; i++){
				checkIMG(a_links[i]);
			};
			break;
		case 3:// 点击时才检测图片
			for (var i=0,n=a_links.length; i<n; i++){
				a_links[i].addEventListener('mousedown', function(e){
					(e.button == 1) && checkIMG(this)
				}, false);
			};
			break;
		}
	};

	//检测图片
	function checkIMG(link){
		var href = link.href;
		var inner = link.innerHTML;
		if (/^http.*\.(?:jpg|jpeg|jpe|jfif|bmp|png|gif|tif|tiff|ico)/i.test(href) && !/<img\s|查看原图|推荐/i.test(inner)){
			link.addEventListener('mousedown', function(e){
				(e.button == 1) && toggle(this.childNodes[0]) && toggle(this.childNodes[1])// 图片\链接切换
			}, false);
			link.innerHTML = '<img style="max-width:520px;" alt="图片载入ing..." title="点击鼠标中键可切换链接/图片 by豆藤" src="' + href + '" /><span style="display:none;">' + inner + '</span>';
		}
	};

	/* ************************ 阿尔法城， 小组， 书影音评论 + 论坛 + 相册 增强处理 ************************ */

	// 折叠小组公告
	function hideMSG(){
		var groupBoard = $('.group-board')[0];
		if(groupBoard){
			GM_addStyle('.autoHide{overflow-y:scroll; max-height:190px;}');

			$$('.group-board>p')[0].innerHTML += '<a id="toggleG" style="float:right;">&gt;'+(GM_getValue('hide_grpinfo',true) ? '展开' : '折叠')+'小组公告</a>';

			var grpinfo = $('.group-intro')[0];
			GM_getValue('hide_grpinfo',true) && (grpinfo.className += ' autoHide');

			$('#toggleG').addEventListener('click',function(){
				if(/autoHide/.test(grpinfo.className)){
					grpinfo.className = grpinfo.className.replace(' autoHide', '');
					$('#toggleG').innerHTML = '&gt;折叠小组公告';
				}else{
					grpinfo.className += ' autoHide';
					$('#toggleG').innerHTML = '&gt;展开小组公告';
				};
				GM_setValue('hide_grpinfo', !GM_getValue('hide_grpinfo',true))
			} ,false);


		};
	};

	// 自动电梯
	function autoElevator(){
		if(GM_getValue('autoElevator',true)){
			var reLines = $$('table[class="list-b"] tr:not([dbmark]), table[class="olt"] tr:not([dbmark])');//每一行话题

			if(reLines.length>0){
				var children = reLines[0].children, replyNum = 2;
				for(var i=0,j=children.length; i<j; i++){
					if(/回应/.test(children[i].textContent)){
						replyNum = i; //回复数字所在位置
						break;
					};
				};

				for(var i=0,j=reLines.length; i<j; i++){
					var title     = reLines[i].children[0],//话题标题
						numWord   = reLines[i].children[replyNum].textContent.replace(/[\s\D]*/g,''),//回复数
						num       = Number(numWord),
						lastPage,
						href,
						linkCache = '<span class="pageNum">';
					reLines[i].setAttribute('dbmark', '1');//已处理标记，加载下一页后不重复处理
					if(!isNaN(num) && num>100){
						lastPage = numWord.slice(0, -2);
						href = title.getElementsByTagName('a')[0].href;
						// num > 200 && (linkCache += ' <a href="'+ href +'?start='+ (lastPage-1) +'00" title="倒数第二页">&nbsp;'+ lastPage +'&nbsp;</a>');
						linkCache += ' <a href="'+ href +'?start='+ lastPage +'00#last" title="自动电梯：最后一页" class="lnk-sharing">&nbsp;'+ (lastPage-1+2) +'&nbsp;</a></span>';
						title.innerHTML = linkCache + title.innerHTML;
					};
				};

				//自动电梯链接样式
				GM_addStyle('.pageNum{float:right;}');
			};
		};
	};

	// 添加交流拓展工具条
	function exGroup(){
		var ct = GM_getValue('count', true), jv = GM_getValue('just_view', true), re = GM_getValue('requote', true);
		var postArea = $$('div.comment-item, ul.topic-reply, div#comments')[0];// 回复区域
		// 阿尔法城*， 小组*， 书影音评论!， 论坛* + 相册*
		
		if ( (ct || jv || re) && postArea && location.hostname != 'movie.douban.com' && !/music\.douban\.com\/programme\//.test(location.href)){
			
			// 书影音评论 重构
			var chgArea = $$('div#comments>span.wrap')[0];
			if (chgArea){
				chgArea.parentNode.innerHTML = chgArea.parentNode.innerHTML
				.replace(/(<h2>|<div)/, '</p><div class="group_banned"></div><br/></div>$1')// 末尾补完
				.replace(/<span class="wrap">/, '<div class="dbhp"><span class="wrap">')
				.replace(/<\/h3><\/span>/g, '</h3></span><p>')// 以p包围发言
				.replace(/<span class="wrap">/g, '</p><div class="group_banned"></div><br/></div> <div class="dbhp"><span class="wrap">')// 首位嵌套
				.replace(/<\/p><div class="group_banned"><\/div><br\/><\/div> <div class="dbhp">/, '');// 去除开头多余
			};
			
			// 论坛 + 相册 重构
			// if ($$('div#comments>table')[0]){
				// postArea.innerHTML = postArea.innerHTML
					// .replace(/<\/h4><\/span>/g, '</h4> </span><p>')
					// .replace(/<\/td><\/tr>/g, '</p></td> </tr>');
			// };
			
			//修复字体变灰问题
			GM_addStyle('div#comments td,div#comments p{color:#111 !important;} div#comments .wrap a{color:#369 !important;} div#comments a:hover,div#comments a:active{background:#039 !important;color:#FFF !important;text-decoration:none;}');
			//修复豆瓣小组 加载下一页后 回复工具条不出现的问题
			//TODO  (豆瓣小组修复有缺陷，删除回复和举报广告无法出现，有空再处理)
			GM_addStyle('.topic-reply li:hover .operation_div{display:block!important;}');
			
			// 未处理的回复楼层
			var replys = xpath(
				'.//div[contains(@class,"comment-item") and not(@dbmark)]' +
				'|.//ul[contains(@class,"topic-reply")]/li[not(@dbmark)]' + // 小组
				'|.//div[@id="comments"]/div[contains(@class,"dbhp") and not(@dbmark)]' + // 书影音评论
				'|.//div[@id="comments"]/table[not(@dbmark)]'// 电影海报
				);
			
			var layerNum = $('.layerNum'), start = Number(layerNum[0] ? layerNum[layerNum.length-1].textContent : QueryString('start')) + 1;

			//工具条CSS & HTML
			GM_addStyle('a.ln-report{position:static;} .ctrl_tool{display:block;} .ctrl_tool a{margin-left:0px;}');//修复“举报广告”阻挡工具条的问题等样式问题
			GM_addStyle(GM_getValue('auto_hide', false)?'.ctrl_tool{visibility: hidden;} li:hover .ctrl_tool{visibility: visible;} .comment-item:hover .ctrl_tool{visibility: visible;}':'');
			var re_s = re?'<a name="db_re" href="javascript:" title="回复该用户发言 by豆藤" >回</a>\
						<a name="db_qt" href="javascript:" title="引用该用户发言" >引</a> ':'';
			var re_l = re?'&gt;<a name="db_re" href="javascript:" title="回复该用户发言 by豆藤" >回复</a>&nbsp;&nbsp;\
						&gt;<a name="db_qt" href="javascript:" title="引用该用户发言" >引用</a>&nbsp;&nbsp;':'';
			var jv_s = jv?'<a name="db_jv" href="javascript:" title="只看该用户所有发言" >只</a>\
						<a name="db_hl" href="javascript:" title="高亮该用户所有发言，再次点击取消高亮" >亮</a>\
						<a name="db_ig" href="javascript:" title="忽略该用户所有发言" >略</a>\
						<a name="db_bk" href="javascript:" title="复原所有发言" >原</a>':'';
			var jv_l = jv?'&gt;<a name="db_jv" href="javascript:" title="只看该用户所有发言" >只看</a>&nbsp;&nbsp;\
						&gt;<a name="db_hl" href="javascript:" title="高亮该用户所有发言，再次点击取消高亮" >高亮</a>&nbsp;&nbsp;\
						&gt;<a name="db_ig" href="javascript:" title="忽略该用户所有发言" >忽略</a>&nbsp;&nbsp;\
						&gt;<a name="db_bk" href="javascript:" title="复原所有发言" >复原</a>&nbsp;&nbsp;':'';
			// var clibtn = GM_getValue('tidybar', true) ? '&gt;'+re_s+jv_s+'&nbsp;&nbsp;' : re_l+jv_l;
			var clibtn = GM_getValue('tidybar', true) ? ' '+re_s+jv_s+'&nbsp;&nbsp;' : re_l+jv_l;

			//逐楼添加工具条
			for (var i=0,l=replys.snapshotLength; i<l; i++){
				var replyI = replys.snapshotItem(i);
				var rehead = replyI.querySelector('div.author, div.bg-img-green>h4, h3>span.pl, td>span.wrap>h4');// 留言头部标题
				replyI.setAttribute('dbmark', '1');//已处理标记，加载下一页后不重复处理
				if (ct){//数楼
					// rehead.firstChild.insertData(0,Number(i) + start + '楼 ');
					// body.setAttribute('startNum', Number(i) + start);
					rehead.innerHTML = '<span class="layerNum">' + String(i+start) + '</span>楼 ' + rehead.innerHTML;
				};
				var bar = replyI.querySelector('div.group_banned, td:last-child, .operation_div');//小组 论坛 ...
				if (clibtn && bar){
					var span = document.createElement('span');
					span.className = /\/group\/topic\//i.test(location.href) ? 'ctrl_tool admin-lnks' : 'fright ctrl_tool admin-lnks';
					span.innerHTML = clibtn;
					bar.appendChild(span);
				};
			};
			
			//监听交流拓展功能按钮
			if(!window.exGroupEven){
				window.exGroupEven = true;
				document.body.addEventListener('click',function(e){
					var tar = e.target;
					switch(tar.name || tar.id){
						case 'db_re':
						case 'db_qt':
							re && requote(tar);//引用回复
							break;
						case 'db_jv':
						case 'db_hl':
						case 'db_ig':
						case 'db_bk':
							jv && just_view(tar);//只看高亮等
							break;
					};
				} ,false);
			};
			
			//楼主工具条
			var LZbar = $$('div.note-ft, div.post-content, div.topic-opt, div.review-panel, .wr td>div.pl')[0];// 日记， 阿尔法城， 小组， 书影音评论， 论坛
			var LZbarlink = $$('#db-usr-profile a, .post-info>.from>a, h3>.from>a, .piir a, .wr a, .aside>.p12>a, .aside>.pl2>a')[0];// .aside>.p12>a, .aside>.pl2>a 豆瓣日记页面的楼主链接
			if (jv && LZbar && LZbarlink && !$('#autolift')){
				var toptool = document.createElement('span');
				toptool.className='fleft';
				toptool.id = LZbarlink.href.replace(/notes$/i, '');//在豆瓣日记的情况下，移除多余部分，间接获取楼主链接

				// 为还有回复的小组主贴增加删除按钮
				// var groupTp = $$('div.topic-opt')[0];
				// if(groupTp && getCookie('ck') && !!groupTp.innerHTML.match('修改') && !groupTp.innerHTML.match('删除')){
				// 	toptool.innerHTML = '&gt;<a href="'+location.pathname+'remove?ck='+getCookie('ck').replace(/"|'/g, '')+'" class="j a_confirm_link" data-title="删除主贴" title="删除主贴">删除</a>&nbsp;&nbsp;';
				// };
				
				toptool.innerHTML += '\
					&gt;<a href="javascript:" id="db_jv" title="只看楼主发言" >只看</a>&nbsp;&nbsp;\
					&gt;<a href="javascript:" id="db_hl" title="高亮楼主所有发言，再次点击取消高亮" >高亮</a>&nbsp;&nbsp;\
					&gt;<a href="javascript:" id="db_ig" title="忽略楼主所有发言" >忽略</a>&nbsp;&nbsp;\
					&gt;<a href="javascript:" id="db_bk" title="复原所有发言" >复原</a>&nbsp;&nbsp;\
					&gt;<a href="javascript:" id="livemod" title="开启直播模式，刷新及 翻页后自动只看楼主" >直播模式</a>&nbsp;&nbsp;\
					&gt;<a href="http://www.douban.com/doumail/write?to='+LZbarlink.href.replace(/notes$/i, '').match(/people\/([^\/\s]+)\/?/)[1]+'" id="douMail" title="给楼主写豆邮" target="_blank" >豆邮</a>&nbsp;&nbsp;\
					&gt;<a href="javascript:" id="autolift" title="点击生成电梯链接" >生成电梯</a>&nbsp;&nbsp;';
				LZbar.appendChild(toptool);
				
				//直播按钮
				$('#livemod').addEventListener('click', function(){
					// location.href = location.href.replace(location.search,'').replace(location.hash,'') + '?jv=' + xpath('.//a[contains(@href,"/people/") and not(./child::img)]', this.parentNode.parentNode.parentNode).snapshotItem(0).href.match(/people\/([^\/\s]+)\/?/)[1];
					location.href = location.href.replace(location.search,'').replace(location.hash,'') + '?jv=' + this.parentNode.id.match(/people\/([^\/\s]+)\/?/)[1];
				}, false);
				
				// 电梯助手
				$('#autolift').addEventListener('click', function(){
					if($('.paginator')[0]){
						var autolift = '请把以下内容粘帖进帖子\n直达电梯：';
						for (var p=$$('.aside .paginator>a'),i=0,l=p.length; i<l; i++){
							autolift += '\n第' + p[i].textContent + '页:' + p[i].href;
						}
						var re_text = $('#re_text');
						re_text.value += autolift + '#last\nby 豆藤';
						$('#re_f').style.display = 'block';
						re_text.focus();
					}else{
						alert('只有一页无需电梯');
					}
				}, false);
			};
			
			// 检测是否直播模式
			islivemod();
			
			// 添加快速回复框
			if (re && !$('#re_f')){
				var re_f = document.createElement('div');
				re_f.id = 're_f';
				re_f.style.cssText = 'position:fixed;top:25%;border:1px solid #ccc;display:none;';
				var action = /review|discussion/.test(location.href)? '?post=ok#last':'add_comment';
				re_f.innerHTML = '\
					<form name="comment_form" method="post" action="'+ action +'" >\
						<div style="display: none;"><input name="ck" value='+ getCookie('ck') +' type="hidden"></div>\
						<textarea id="re_text" name="rv_comment" rows="20" style="font-size:12px;font-family:Arial;width:310px;border:0px;border-bottom:1px solid #ccc;"></textarea><br>\
						<input value="加上去" type="submit">\
						<input value="取消" type="button" onClick="document.getElementById(\'re_f\').style.display=\'none\'">\
						<input value="清空" type="button" onClick="document.getElementById(\'re_text\').value=\'\';document.getElementById(\'re_text\').focus();">\
						<a class="fright gact" href="javascript:;" title=" \n快捷键：\n打开为Shift+Enter\n退出为Esc（会清空内容）\n提交为Ctrl+Enter\n个性签名为Alt+Enter（在豆藤中设置）。\n\n在输入框内除Ctrl+Enter以及Esc外，其他快捷键无效。\n发言失败时，请自行判断是否已经登录并有权发言。" onClick="document.getElementById(\'re_text\').value+=this.title;document.getElementById(\'re_text\').focus();">[使用说明]</a>\
						<a class="fright gact" href="javascript:;" title=" \n'+GM_getValue('diyword', '个性签名')+'" onClick="document.getElementById(\'re_text\').value+=this.title;document.getElementById(\'re_text\').focus();">[个性签名]</a>\
					</form>';
				$('.aside')[0].appendChild(re_f);

				// <div class="reply-comment" style="width:308px;">\
					// <a class="lnk-close" href="#close_reply">x</a>\
					// <input type="hidden" value="{{ref_cid}}" name="ref_cid">\
					// <p style="width:100%;">{{ref_con}}<span class="pubdate"><a href="{{ref_url}}">{{ref_name}}</a></span></p>\
				// </div>\
				
				//修复豆瓣相册在输入框内按方向键翻页的UBG
				unsafeWindow.input_ban && unsafeWindow.input_ban();
				
				//加载 Shift + Enter 开关回复框快捷键
				addHotKey('Shift+Enter',function(){
					var re_text = $('#re_text');
					toggle($('#re_f'));
					re_text.focus();
				});
				//退出快捷键为 Esc
				$('#re_f').addEventListener('keydown', function(e){
					if (e.keyCode == '27'){
						toggle($('#re_f'));
						$('#re_text').value = '';
					}
				}, false); 
				//个性签名快捷键为 Alt + Enter
				for(var i=0,j=$('rv_comment').length;i<j;i++){
					$('rv_comment')[i].addEventListener('keydown', function(e){
						if (e.altKey && e.keyCode == '13'){
							this.value += '\n'+ GM_getValue('diyword', '个性签名');
						}
					}, false);
				}
			}
		}
	};

	// 只看\高亮\忽略\复原 操作
	function just_view(tar){
		var isLive = (typeof(tar) == 'string')?true:false;// 是否直播
		var to_do = isLive ? 'db_jv' : (tar.name || tar.id);// 点击按钮类别
		var parent_3 = isLive ? '' : tar.parentNode.parentNode.parentNode;// 加三元选择符是为了兼容“直播模式”
		var clickNameUrl = isLive ? tar : (tar.parentNode.id || xpath('.//a[contains(@href,"/people/") and not(./child::img)]', parent_3).snapshotItem(0).href).match(/people\/([^\/\s]+)\/?/)[1];// 楼主||楼层发言人url
		var replys = $$('div.comment-item, ul.topic-reply>li, div#comments>div.dbhp, div#comments>table');
		for (var i=0,j=replys.length; i<j; i++){
			var reply = replys[i];
			var isit = (xpath('.//a[contains(@href,"/people/")]', reply).snapshotItem(0).href.indexOf(clickNameUrl) >= 0)?true:false;
			if (to_do == 'db_jv'){
				reply.style.display = isit?'':'none';
			}else if(to_do == 'db_hl' && isit){
				reply.style.background = (reply.style.background)?'':GM_getValue('hlcolor', '#eeffee');
			}else if(to_do == 'db_ig' && isit){
				reply.style.display = 'none';
			}else if(to_do == 'db_bk'){
				reply.style.display = '';
				reply.style.background = '';
			}
		}
	};

	// 直播模式
	function islivemod(){
		var name = QueryString('jv');
		if (name !== 0){
			just_view(decodeURIComponent(name));
			var live = $('#livemod');
			if (live){
				live.textContent = '关闭直播';
				live.title = '已开启直播模式，点击取消直播; 点击“复原”按钮可临时查看全部帖子';
				live.style.background = '#fffe15';
				live.href = location.href.replace(location.search,'');
			};
			if ($('.paginator')[0]){
				var next = $$('.paginator a');
				for (var i=0,j=next.length; i<j; i++){
					next[i].href += '&jv='+name;
				}
			}
		}
	};

	// 引用回复
	// 感谢 NullPointer ，该功能参照了他的 Reply buttons for new Douban 中的格式
	function requote(tar){
		var re_f = $('#re_f'), re_text = $('#re_text');// 回复浮层与输入框
		var to_do = tar.name || tar.id;// 点击按钮类别
		var parent_3 = tar.parentNode.parentNode.parentNode;
		var clickname = xpath('.//a[contains(@href,"/people/") and not(./child::img)]', parent_3).snapshotItem(0).textContent;// 楼层发言人名
		var rn = (re_text.value == '')?'':'\n';
		if (to_do == 'db_re'){
			var alltext = rn + '@' + clickname + '\n';
		}else if(to_do == 'db_qt'){
			var rehead = parent_3.querySelector('div.author, div.bg-img-green>h4, h3>span.pl, td>span.wrap>h4').textContent.replace(/\s+/g,' ');// 留言头部标题内容
			var redoc = window.getSelection().toString() || // 选中内容
						parent_3.getElementsByTagName('p')[0].textContent.replace(/\n\s*\n/g, '\n').replace(/^\s{7}/g, '');// 留言正文内容
			if (redoc.search(/(-{50,})[\s\S]+\1/g)>-1){
				if (confirm('是否删去引文中的引文？')){redoc = redoc.replace(/(-{50,})[\s\S]+\1/g,'').replace(/\n\s*\n/g, '\n');}
			};
			var len = redoc.length;
			var diylen = GM_getValue('diylen', 500);
			if (len > diylen){
				if (confirm('引文太长，是否省略一部分？')){redoc = redoc.substr(0,diylen)+ '......\n(以上引文省略'+ (len-diylen) +'字)';}
			};
			var sepr = '----------------------------------------------------------';
			var alltext  =  rn+sepr+'\n'+rehead+'\n'+redoc+'\n'+sepr+'\n';
		};
		re_text.value += alltext;
		re_f.style.display='';
		re_text.focus();
		re_text.setSelectionRange(re_text.value.length, re_text.value.length); // 修正chrome版输入框光标定位问题
	};  

	/* ************************ 豆瓣社区处理 ************************ */
	
	//广播过滤
	function myGFW(){
		if(GM_getValue('myGFW', true) && $('#db-isay')){
			
			if(!$('#myGFWbar')){
				//过滤设置项 
				var toggle = document.createElement('div');
				toggle.id = 'myGFWbar';
				toggle.innerHTML = '<a id="setMyGFW" href="javascript:;" title="设置屏蔽规则(已屏蔽广播数) by 豆藤">屏蔽(<em id="blockNum">0</em>)</a> | <a id="showBlock" href="javascript:;" title="显示被屏蔽广播 by 豆藤" >显示</a> |&nbsp;';
				$$('.statuses-setting .hd')[0].appendChild(toggle);
				
				GM_addStyle('#myGFWbar{position:absolute;right:60px;top:-28px;color:#CCC;} #myGFWbar a:hover{background-color:#3377AA;} .beBlock{display:none;background-color:#edf4ed;}');

				//操作栏事件捆绑
				$('#showBlock').addEventListener('click', function(){
					if($('#showBlock').innerHTML == '显示'){
						GM_addStyle('.beBlock{display:block;}');
						$('#showBlock').innerHTML = '隐藏';
					}else{
						GM_addStyle('.beBlock{display:none;}');
						$('#showBlock').innerHTML = '显示';
					};
				}, false);

				$('#setMyGFW').addEventListener('click', function(){
					sw_set(false);
					setStyles($$('#db_div DIV'), 'display:none;');//隐藏选项页面
					$('#友邻广播').style.display = 'block';//显示当前选项页面
					setStyles($$('#db_div_a A'), '');//清空左侧标签样式
					$$('#db_div_a A')[1].style.cssText = 'border-right:1px solid #fff;background:#fff;border-left:12px solid #83bf73;';//凸显左侧当前标签
				}, false);
			};
			
			//读取屏蔽关键词
			var blockWords = GM_getValue('blockWords', '')
				.replace(/^\s+|\s+$|\r/mg, '') //去头尾空白和\r
				.replace(/\n+|\n\s+\n/g, '\n') //去除连续换行
				.replace(/([\.\+\?\*\(\)\[\]\{\}\|\^\$\/\\])/g, '\\$1') //转义特殊符号
				.replace(/\n/g, '|');

			//读取屏蔽发布者
			var blockPeople = GM_getValue('blockPeople', '')
				.replace(/^\s+|\s+$|\r/mg, '') //去头尾空白和\r
				.replace(/\n+|\n\s+\n/g, '\n') //去除连续换行
				.replace(/([\.\+\?\*\(\)\[\]\{\}\|\^\$\/\\])/g, '\\$1') //转义特殊符号
				.replace(/\n/g, '|');

			if(blockWords.length + blockPeople.length){
				var blockWordsRE = new RegExp(blockWords, 'i'),
					blockPeopleRE = new RegExp(blockPeople, 'i');

				//遍历友邻广播
				var items = $$('.status-item:not([myGFW])'), blockNum = Number($('#blockNum').innerHTML);
				for(var i=0,j=items.length; i<j; i++){
					items[i].setAttribute('myGFW', '1');//已处理标记

					if( (blockWords.length && blockWordsRE.test(items[i].textContent)) || (blockPeople.length && blockPeopleRE.test(items[i].querySelector('.usr-pic').innerHTML)) ){
						items[i].className += ' beBlock';//屏蔽标记
						blockNum++;
					};

				};
				$('#blockNum').innerHTML = blockNum;
			};

		};
	};

	// 友邻工具条
	function friendsTool(){
		if(GM_getValue('friendsTool', true) && $('#db-isay')){
			GM_addStyle('.Friends_Tool_Bar{visibility:hidden;bottom:0;position:absolute;left:88px;} .status-item:hover .Friends_Tool_Bar{visibility:visible;}');
			// 友邻
			// var firends = xpath('.//li[@class="mbtr" and not(@dbmark)]//a[contains(@href,"/people/") and not(@onclick) and not(@class) and not(contains(@href,"recs?rid=")) and not(../self::*[@class="pl"]) and not(../self::*[@class="indentrec"]) and not(contains(preceding-sibling::text(),"、"))]');
			// var firends = $$('.status-item:not([dbmark]) p.text>a[href*="people"]');//每一条友邻动态中的用户名字链接
			var firends = $$('.status-item:not([dbmark]) .usr-pic>a[href*="people"]');//每一条友邻动态中的用户名字链接
			for(var i=0,j=firends.length; i<j; i++){
				var firend = firends[i], name = firend.href, nname = firend.title;
				var toolBar = document.createElement('div');// 必须放在循环内
				toolBar.className = 'Friends_Tool_Bar';
				toolBar.innerHTML = '<div class="clear"></div><span>\
					<a href="'+name.replace('www','book')+'" target="_blank">书</a> |\
					<a href="'+name.replace('www','movie')+'" target="_blank">影</a> |\
					<a href="'+name.replace('www','music')+'" target="_blank">音</a> |\
					<a href="'+name+'statuses" target="_blank">广播</a>|\
					<a href="'+name+'statuses?type=rec" target="_blank">推荐</a>|\
					<a href="'+name+'reviews" target="_blank">评论</a>|\
					<a href="'+name+'notes" target="_blank">日记</a>|\
					<a href="'+name+'photos" target="_blank">相册</a>|\
					<a href="'+name+'groups" target="_blank">小组</a>|\
					<a href="'+name+'board" target="_blank">留言板</a>|\
					<a href="'+name+'contacts'+'" target="_blank">关注</a>|\
					<a href="/doumail/write?to='+name.slice(29,-1)+'" target="_blank">发豆邮</a>\
					<a href="javascript:" style="color:#83bf73;" title="点击展开更多"\
						onclick="this.target=\'\';\
						this.innerHTML=/gt/.test(this.innerHTML)?\'&lt;&lt;&lt;\':\'&gt;&gt;&gt;\';\
						var obj=this.parentNode.getElementsByTagName(\'span\')[0];\
						obj.style.display=obj.style.display?\'\':\'none\';">&gt;&gt;&gt;</a>\
					<span style="display:none;">\
					<a href="'+name+'event?g=w" target="_blank">同城</a>|\
					<a href="'+name+'online" target="_blank">线上</a>|\
					<a href="'+name+'offers" target="_blank">二手</a>|\
					<a href="'+name+'doulists" target="_blank">豆列</a>|\
					<a href="'+name+'minisite" target="_blank">小站</a>|\
					</span>\
					<a href="#" onclick="$(\'textarea\').attr(\'value\',\'@\'+\''+nname+'\'+\'　\'); $(\'textarea\').focus()">对<span style="color:#83bf73;">'+nname+'</span>说</a>\
					</span>';
				firends[i].parentNode.parentNode.parentNode.appendChild(toolBar);
				firends[i].parentNode.parentNode.parentNode.parentNode.setAttribute('dbmark', '1');//已处理标记，加载下一页后不重复处理
			}
			// 音乐人
			// TODO 音乐人友邻和小站混在一起，日后再区分处理
			// var firends = xpath('.//li[@class="mbtr" and not(@dbmark)]//a[contains(@href,"/artist/") and not(@onclick) and not(@class) and not(contains(@href,"recs?rid=")) and not(../self::*[@class="pl"]) and not(../self::*[@class="indentrec"]) and not(contains(preceding-sibling::text(),"、"))]');
			// for(var i=0,j=firends.snapshotLength; i<j; i++){
			// 	var toolBar = document.createElement('div'), firend = firends.snapshotItem(i), name = firend.href, nname = firend.innerHTML;
			// 	toolBar.className = 'Friends_Tool_Bar';
			// 	toolBar.innerHTML = '<div class="clear"></div><span>\
			// 		<a href="'+name+'miniblogs">广播</a> |\
			// 		<a href="'+name+'notes">日记</a> |\
			// 		<a href="'+name+'photos">相册</a> |\
			// 		<a href="'+name+'public_album">乐迷相册</a> |\
			// 		<a href="'+name+'videos'+'">视频</a> |\
			// 		<a href="'+name+'subjects'+'">专辑</a> |\
			// 		<a href="'+name+'discussion">论坛</a> |\
			// 		<a href="'+name+'board">留言板</a> |\
			// 		<a href="'+name+'events">活动</a> |\
			// 		<a href="#" onclick="$(\'textarea\').attr(\'value\',\'@\'+\''+nname+'\'+\'　\'); $(\'textarea\').focus()">对<span style="color:#83bf73;">'+nname+'</span>说</a>\
			// 		</span>';
			// 	var theLi = (firend.parentNode.tagName == 'LI') ? firend.parentNode : firend.parentNode.parentNode;
			// 	theLi.appendChild(toolBar);
			// 	theLi.setAttribute('dbmark', '1');//已处理标记，加载下一页后不重复处理
			// }
		}
	};

	// 小组分类
	function sortGroup(){
		if(/\/group\/people\/\w+\/joins/i.test(location.href) && GM_getValue('sortGroup', true)){
			GM_addStyle('\
				h1 {width:590px;}\
				h1 span{font-weight:normal;}\
				#bydbhp {visibility:hidden;color:#BBB;font-size:12px;}\
				h1:hover #bydbhp {visibility:visible;}\
				legend{font-weight:bold;font-size:14px;}\
				.group-cards fieldset{border:1px dashed #ddd; padding:0 0 10px 0; margin-bottom:15px;}\
				fieldset li{margin: 7px 3px 0 4px!important;}\
				.group-cards li{cursor:move;}\
				.group-cards li:hover{background:#efe;}\
				.cancelSort{border-radius:10px;background:#FFF;border:1px solid #BBB;color:#BBB;display:block;width:17px;height:17px;bottom:20px;left:580px;position:relative;text-align:center;}\
				.cancelSort:hover{background:#733;border:1px solid #f33;color:#fff}\
				');
			
			// 定义分类容器响应
			var sortEven = function(obj){

				var input = obj.querySelector('input'),
					title = obj.querySelector('.sortTitle>span');

				if(title){
					// 单机可修改分类标题
					title.addEventListener('click', function(){
						input.value = title.textContent;
						toggle(title);
						toggle(input);
						input.focus();
						input.select();
					}, false);

					// 回车保留标题修改
					input.addEventListener('keydown', function(e){
						if (e.keyCode == '13'){
							input.value = (input.value == '' ? title.innerHTML : input.value);
							title.innerHTML = input.value;
							input.style.display = 'none';
							title.style.display ='block';
						};
					}, false);
					
					// 失去焦点保留标题修改
					input.addEventListener('blur', function(){
						input.value = (input.value == '' ? title.innerHTML : input.value);
						title.innerHTML = input.value;
						input.style.display = 'none';
						title.style.display ='block';
					}, false);
					
					// 解散本分类
					obj.querySelector('.cancelSort').addEventListener('click', function(){
						if(confirm('确定要解散本分类？')){
							var fs = this.parentNode.parentNode;
							for(var i=0,li=fs.querySelectorAll('li'),l=li.length; i<l; i++){
								$('.'+li[i].className)[1].style.display = '';
							};
							fs.parentNode.removeChild(fs);
						};
					}, false);
				};
				
				// 拖动经过的效果
				obj.addEventListener('dragover', function(e){
					e.preventDefault(); 
					e.dataTransfer.dropEffect = 'move'; // 拖动时的鼠标样式
					this.style.background = '#efe';
				}, false);

				// 拖动离开的效果
				obj.addEventListener('dragleave', function(e){
					this.style.background = '';
				}, false);
				
				// 拖动放置的逻辑
				obj.addEventListener('drop', function(e){
					e.preventDefault();
					// e.stopPropagation();
					var el = $('.'+e.dataTransfer.getData('text/plain'))[0]; // 获取被拖拽节点
	
					if(obj.tagName.toUpperCase() == 'FIELDSET'){

						// 拖动对象来自非分类区域
						if(el.parentNode.tagName.toUpperCase() == 'UL'){
							this.appendChild(el.cloneNode(true));
							el.style.display = 'none';
						// 拖动对象来自分类区域
						}else{
							this.appendChild(el);
						};
						this.getElementsByTagName('b')[0].style.display = 'none';

					}else if(obj.tagName.toUpperCase() == 'UL' && el.parentNode.tagName.toUpperCase() == 'FIELDSET'){ // 从分类区拖回原区域，排除在原区域拖放的情况
						el.parentNode.removeChild(el);
						$('.'+e.dataTransfer.getData('text/plain'))[0].style.display = '';
					};
					
					this.style.background = '';

				}, false);
			}; 
			
			// 增加分类区
			var groupArea = document.createElement('div');
			groupArea.id = 'groupArea';
			$$('.group-cards')[0].insertBefore(groupArea, $$('.group-cards>ul')[0]);
			groupArea = $$('#groupArea')[0];
			
			// 添加按钮
			$$('h1')[0].innerHTML += '\<span class="gact fright">\
				&nbsp;&gt;<a title="添加新的小组分类" href="javascript:" id="addSort">添加分类</a>\
				&nbsp;&gt;<a title="保存小组分类数据" href="javascript:" id="saveSort">保存</a>\
				&nbsp;&gt;<a title="清空分类，恢复原始状态" href="javascript:" id="recoverSort">还原</a>\
				</span>\
				<span id="bydbhp" class="gact fright">分类完毕后别忘了点击保存(by豆藤)&nbsp;&nbsp;&nbsp;</span>';

			// 判断用户执行读取分类信息
			if(getUserName()){
					var cname = 'sortGroupHTML' + getUserName();
					
					// 读取写入小组分类
					GM_getValue(cname, false) && (groupArea.innerHTML =  GM_getValue(cname));
					
					// 使小组图标可拖拽 去重 
					for(var i=0, groupCards=$$('.group-cards li'), lastLink=$$('.group-cards li a:last-child'), groupCard, l=groupCards.length; i<l; i++){
						groupCard = groupCards[i];
						href = lastLink[i].href;
						groupCard.className = href.match(/\/group\/(\w+)/)[1];
						
						// 设置拖拽属性
						groupCard.setAttribute('draggable', 'true');
						groupCard.setAttribute('onDragstart', 'event.dataTransfer.effectAllowed="all"; event.dataTransfer.setData("text/plain", this.className);');
						
						// 隐藏已被分类的小组的本体
						var theSame = $('.'+groupCard.className)[1]; // 已被分类的小组，在原区域的本体
						if(theSame){
							groupCard.style.display = 'none';

						// 剔除已退出小组 
						}else if($$('.group-cards>ul')[0].innerHTML.indexOf(href)<0){
							groupArea.removeChild(groupCard);

						};
					};
					
					// 为原小组区域设置拖动还原事件
					sortEven($$('.group-cards>ul')[0]);

					// 为现有分类附加事件响应
					for(var i=0,fs=$$('.article fieldset'),l=fs.length; i<l; i++){
						sortEven(fs[i]);
					};
					
					// 添加分类
					$('#addSort').addEventListener('click', function(){
						var sort = document.createElement('fieldset');
						sort.innerHTML = '<legend class="sortTitle"><span>类别标题(点击修改)</span><input value="" style="display:none;"></legend><div><a class="cancelSort" title="解散本分类">X</a></div><b>&nbsp;&nbsp;拖拽小组到此区域<br><br></b>';
						groupArea.appendChild(sort);
						sortEven(sort);
					}, false);
					
					// 保存分类
					$('#saveSort').addEventListener('click', function(){
						GM_setValue(cname, groupArea.innerHTML);
						alert('小组分类保存成功！');
					}, false);
					
					// 还原
					$('#recoverSort').addEventListener('click', function(){
						if(confirm('确定要清空分类，恢复原始状态？')){
							GM_setValue(cname, false);
							location.reload();
						}
					}, false);
			};
		};
	};

	/* ************************ 其他杂项功能 ************************ */

	// 豆瓣FM下载破解
	function FMdownLoad(){
		if(location.host == 'douban.fm' && $('#fm-player') && GM_getValue('FMdownLoad', true)){
			var downDiv = document.createElement('div');
			downDiv.style.width = '510px';
			downDiv.innerHTML = '\
				<a id="singleReplay" href="javascript:;">\
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFfSURBVFhH7ZXhTQMxDEZvhI7ACB2hIzACo7BB2aArsAmMwAZlA/BDTWWZxHbO+YV40idde/F3Tuwk2z8OD6KL6Cr62ili8cBriqOo8mErvPBMQbYrP96EZ2olWLKewQrhHWJn/yZ6FM1CDLHaC+8QHYD2fLxBrPU7iFxsQJVpv+mAgNDP1skTY/US8vx8026y244xdi+/itr7Er1msXoSNZj5i0i/L3MWaUMtvX9ZsQ+RHbOEXj/Yup9E/P8per89Iw8mwARDbD/06s5vlp+xNF+UAKVrY1Jniu4HXfceUQL2UuM5dR+wXJlz20uAso1KugwvAe9SS/VDhlECuu4jVe6YO70EbN1HSveDh01gVPeRuv1gB3kwA84FNGLG74fpgIBpPxtQaZbeHRNiG4g6YaSP4wzE2H7AO8Tbv1VlDrdf98EqTW277F7OCi97qYWQLUtWSYRYPMoHzl9l274B9Id1om3xwP8AAAAASUVORK5CYII=" alt="单曲重放"/>\
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGFSURBVFhH7ZbRUcMwDIYzQkboCDxDe0nX4I5dOLoAo7ABjMAIjMAENZIil0SWbcnOY787PWBZvxRJ7jHcyRG+PkO4vIXw8hzC+dRmGIsaoMWyNih5T2JpqGUtYvfk0axFUMs0gT0MtDlNnuTrW2YIqJ2Ev9mdZxOA1pA8QkUIPTgeF28GJaALt547oEJVz7V0yxLdWhimaYTzVzQ+auJgenbKM7qejx/Rz0dtaMuS2Co5fjkkf1/72dVOsYht8sN1Pv3IO+zuQ92HJflq7k8znc/HXyjkO95jtwrpLvtThrqw3gdl7mF6fKD2QyfgDi5gsYBNZ4WWiicA7hQLIK3KB6lYW1YqgJJrI7WMwgoI5gvQkkfbqwgQUwvYjDFnllHUAKGkgGTuObPuQwkQkgWMxdZL00YhL/GxCj1F/F0A46MEjx7hDqjg1pMBPXPSlpFdeZIFwpkuRZT/kxFQcrkPoM3uPK4l8pq2dBKq3PKMvOZ5drsX4Ukeuc2wpxCM/d+hOwrD8AeSKE7AYPITagAAAABJRU5ErkJggg==" alt="单曲重放" style="display:none;"/>\
					<span>单曲重放</span>\
				</a>\
				<a id="playPrevious" href="javascript:;">\
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK+SURBVFhH7ZY7j1JBFMfJRs32fgdjLAiwsLxhKUgoYddQyLLI+50FAoHw6CyNX8LK72FjjLGy3crSr0DG+Y33sFeWwLVRC05yOHdmzuN/HncuriMd6Uj/Az25vb29HA6Hr/r9fsbac0zz+fz9crn8bi0dk7b5pvnONR6Pu6FQSHm9XqVBKOv8IE0mk0o2m1XY1mo1x3bT6fRNLpdTsVjsl91gMMifnZ0ZR5VK5aCjUqn0vN1uK7/fr3w+n0okEo4A9Hq9aLPZVOfn58rj8ahgMHgPgOAclMvlbUcnloROKTWB4WQyaZwAol6vi90jS0Kn/AQCgafabo0NVY5EIoZJutvtKpcu+7VWMs4ajcbOTGaz2btUKmUCR6NRI7E5YHeiA3+9uLgwOiRIYCT27JmE9QzcyOF2CxhMTUZZAlItHGATDoeN3G4BgJkPzshU9GABA5vK6SA3bOK01WoZR8Vi8RkDibE4sQcWQKzZFzveJubDXh3JFjvZEx8bAGzAhUJB6bJ9sSvDVAcpjiUjcZ7P57FbA1Qypt+AswO3A4B/A8AhEmNxLIxT9jgTJ0icS0BsWfPMHrMiurAEtT+b1v0NABIQtq9NBWQIUXbSAgGCDoHYt7dAzne1ALYDeFCB7SEUQ6Rky5pn+/6+IUSiK4y+gDAA/uQ1lOyQrKUS+15DseFZQAkA04LRaFRhA8U9F9HbdDq96TeOyAQJ77uI5MaESZJrGNtNPJ3lNRt8HPQ9vxMApANxpd7hiP5KVjjijrfU7FfxY34suzW6brfbDKe0odPpmG/BSzID3Y5vwQPS5fYQkMyxi8fjqlqtHrTTcxKi5AAhAQCY1ukW1FiQifk4OCRt9zqTyRgQMoROiM/x1dXV/edYZ/1isVh81GX6xPBYeo5J/yH5sFqtnALYtEjH+6z5h7U80pGO9K/I5foJZ1Guhm08AMsAAAAASUVORK5CYII=" alt="上一首"/>\
					<span>上一首</span>\
				</a>\
				<span style="float:left;max-width:200px;">\
					<a href="javascript:;" id="playPreSong" title="播放上一首　　by豆藤">« 上一首</a>\
				</span>\
				<span id="songInfo" title="Hack by 豆藤">\
					<a href="javascript:;" id="searchIcon" title="搜索音乐" target="_blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFeSURBVEhLzdXBR0RRFMfxR0RERETEEK1iGNr2B/QfRKuIaNUqIqJVq2FoFcPQKqJtRES0imjVNlq1ioio748ex3Hvuye9RT8+jHHvOe+9e+971X/ICjZxjAOsYw5/yji28IKvjEv08OvM4hqpot4ndhDOFB6QKtZkD6Gcwk/Wo9AaLGMVKuYfne5Ea9UYFfCTtKCpTEKN7fg7NMZffem21eQJds4SsnlFPVC/tZNK2YZtsItkpmEHXiCSBdh5J0hGB8cOHCESf2FnSEaPww68RSRd2Hk67dnY/a8dtIhSjmAb6PRncwg7WHcxhly0799Rj9dFzSObGbzBNtErowOfNdjiMkQxftuJmmrx9jGADpQfI1eYQDEqkioQEW6iN+QHUkUsPXf/X7iJFkx38wxf5AYb0Lrd//xnhZvUUTN9XMRP1GFrpUlTck3O0VpyTVqNb/KI1qPPrt4K/aqqOt+Hb8ajE8/ViAAAAABJRU5ErkJggg==" alt="搜索"/></a>\
					<span id="songKpbs"></span>\
					<span id="downWords">下载：</span>\
					<a href="javascript:;" id="downloadLink" title="'+ (navigator.userAgent.indexOf('Chrome')>0 ? '点击下载音乐' : '请右键另存为或使用下载工具下载') +'　by豆藤" target="_blank">暂无下载</a>\
				</span>';
			$('#fm-player').appendChild(downDiv);
			GM_addStyle('\
				#fm-player span{color:#999;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-top:2px;}\
				#fm-player span a{color:#4e5553;}\
				#fm-player span a:hover{color:#4e5553;background:#9dd6c5;}\
				#songKpbs{border-radius:2px; border:1px solid;padding: 0 1px;}\
				#songKpbs{display:none;}\
				#songInfo{float:right;max-width:300px;}\
				#songInfo:hover #downWords{display:none;}\
				#songInfo:hover #songKpbs{display:inline;}\
				#singleReplay{opacity:0.8; left:276px; bottom:45px; position:absolute;user-select:none; -webkit-user-select:none; -moz-user-select:none; display:none;}\
				#singleReplay:hover{opacity:0.6;}\
				#singleReplay span{position:absolute; bottom:37px; right:-9px; display:none;}\
				#singleReplay:hover span{display:inline;}\
				#playPrevious{left:213px; bottom:45px; position:absolute;user-select:none; -webkit-user-select:none; -moz-user-select:none; display:none;}\
				#playPrevious:hover{opacity:0.8;}\
				#playPrevious span{position:absolute; bottom:37px; right:-2px; display:none;}\
				#playPrevious:hover span{display:inline;}\
				#downloadLink{text-overflow:ellipsis;overflow:hidden;}\
				#searchIcon{padding:0 2px; float:right;display:none;}\
				#searchIcon img{max-height:15px; opacity:0.5;}\
				');


		function hackFMscript(){
			(function hackFM(){

				if(!!window.extStatusHandler){
					window.extStatusHandlerBak = window.extStatusHandler;
					window.extStatusHandler = function(o){
						extStatusHandlerBak(o);
						var date = JSON.parse(o);// 数据包
						var replay = $('#singleReplay');
						
						// console.log('*******.log:'+o);
						// console.log('$$$$$$$.is_pro:'+user_record.is_pro);

						switch(date.type){
							case 'pause': // 暂停
								replay.css({'opacity':'0.15'});
								break;
							case 'gotoplay': // 重新播放
								replay.css({'opacity':  replay.hasClass('clicked') ? '1' : '0.8' });
								break;
							case 'fixchannel': // 切换频道
								replay.hasClass('clicked') && replay.click();//取消单曲重放
								break;
							case 's': // 未完成播放，手动点击下一首(DBR.act('skip')也会触发)
								break;
							case 'e': // 完成播放，播放下一首
								DBR.act('skip'); // 触发下一首，迫使吐出data.type=nl（启动adblock时会没有data.type=start，只有nl）
								if(replay.hasClass('clicked')){
									// 设置循环, 当'start' = s.sid + 'g' + s.ssid + 'g0'时，FM下一首会设为该歌曲，并删除该cookies
									set_cookie({'start': $(JSON.parse(localStorage['preSongs'])).last()[0].url.match(/start=([^&]+)/i)[1]}, 365, 'douban.fm');
								};
								break;
							case 'nl': // 开始播放
								replay.css({'display':'inline'}); // 展示单曲重放按钮

								setTimeout(function(){
									var nowSong = JSON.parse(FM.getCurrentSongInfo().get_action_props()); // 正在播放的歌曲

									if(date.type=='nl' && date.playlist[0].title==nowSong.title){ // 多种状态都会触发 type=='nl'，需要过滤播放状态
										var s = date.playlist[0];
										
										// 下载链接
										$('#downloadLink')
											.attr('href', s.url)
											.attr('download', s.artist+ ' - ' + s.title)
											.html('<img src=http://t.douban.com/pics/download.gif> ' + s.artist + ' - ' + s.title);
										
										// 码率
										$('#songKpbs').text(s.kbps + 'kbps');

										// 站外搜索音乐
										$('#searchIcon')
											.css({'display':'inline'}) // 展示搜索按钮
											.attr('title', '去百度搜索《'+s.title+'》')
											.attr('href', 'http://music.baidu.com/search?key=' + encodeURIComponent(s.title + ' ' + s.artist));

										var playPre = $('#playPreSong'); // 上一首
										
										// 初始化播放记录
										if(!localStorage['preSongs']){
											localStorage['preSongs'] = '[]';
										};

										var preSongs = JSON.parse(localStorage['preSongs']),
											preSong = $(preSongs).last()[0];

										// 只保存最近30首歌
										if(preSongs.length > 29){
											preSongs.shift();
										};

										// 如果当前歌曲 不是上一首
										if(!preSong || (nowSong.title != preSong.title)){

											// 展示上一首歌
											// preSong && playPre.attr('href', preSong.url).text('« 上一首：' + preSong.title);
											preSong && playPre.text('« 上一首：' + preSong.title);
											
											// 当前歌曲写入播放历史
											preSongs.push(nowSong);
											localStorage['preSongs'] = JSON.stringify(preSongs);
										}else{
											playPre.text('« 上一首：' + preSongs[preSongs.length-2].title);
										};

										// 给手动下一首的取消循环									
										if(replay.hasClass('clicked') && (nowSong.title != preSong.title)){
											replay.click();
										};

									};
								}, 100); // end of setTimeout
								break;
							// default:
							// 	return;
						};
			

					};// end of window.extStatusHandler 

					// 点击上一首后，要删除最后两个记录（当前歌曲和上一首）
					$('#playPreSong').click(function(){
						$('#singleReplay').hasClass('clicked') && replay.click(); //取消单曲重放

						var preSongs = JSON.parse(localStorage['preSongs']);

						// 剔除最后2首歌（上一首+当前），准备播放上一首
						set_cookie({'start': preSongs.splice(-2, 2)[0].url.match(/start=([^&]+)/i)[1]}, 365, 'douban.fm');
						DBR.act('skip');

						// 更新播放历史
						localStorage['preSongs'] = JSON.stringify(preSongs);
					});

					// 单曲重放按钮监听
					$('#singleReplay').click(function(){
						$('#singleReplay img').toggle();

						// 单曲循环中
						if($(this).hasClass('clicked')){
							$(this).removeClass('clicked').css({'opacity':'0.8'});
							// set_cookie({'start': ''}, 365, 'douban.fm'); // 取消循环

						// 未单曲循环
						}else{
							$(this).addClass('clicked').css({'opacity':'1'});
						};
					});

				}else{
					setTimeout(hackFM, 500);
				};
			})();
		};

		injectFun(hackFMscript);

		};
	};


	// 输入框高亮
	function hl_input() {
		if (GM_getValue('hl_input', true)){
			GM_addStyle('input:focus, select:focus, textarea:focus {-moz-outline: 2px solid -moz-rgba(255,153,0,0.5);outline: 2px solid -moz-rgba(255,153,0,0.5);-moz-outline-radius: 3px;-webkit-outline-radius: 3px;outline-radius: 3px;}');
		}
	};

	// 浮动定位工具
	function settle(){
		if ($('.aside')[0] && GM_getValue('settler', true)){
			var settler = document.createElement('div');
			settler.className = 'gact';
			settler.style.cssText = 'position:fixed;bottom:0;border:1px solid #ccc;z-index:10;';
			settler.innerHTML = '\
				<a href="javascript:;" title="置顶，快捷键为：'+GM_getValue('hk_top', 'W')+'" onclick="scrollTo(0,0);">&nbsp;Top↑&nbsp;</a>\
				<a href="javascript:;" title="置底，快捷键为：'+GM_getValue('hk_btm', 'S')+'" onclick="scrollTo(0,9999999);">&nbsp;Btm↓&nbsp;</a>\
				<a href="javascript:;" title="上一页，快捷键为：'+GM_getValue('hk_pre', 'A')+'" id="prev_">&nbsp;Prev←&nbsp;</a>\
				<a href="javascript:;" title="下一页，快捷键为：'+GM_getValue('hk_nxt', 'D')+'" id="next_">&nbsp;Next→&nbsp;</a>';
			
			// 添加自定义链接
			var links = GM_getValue('otherLinks', '豆藤主页|http://www.douban.com/note/125348304/').split(/\n/);
			for (i=0,j=links.length; i<j; i++) {
				var l = links[i].split('|');
				if (l.length > 1){
					settler.innerHTML += '<a href="'+ links[i].replace(l[0] + '|', '') +'">'+ l[0] +'</a>';
				}
			}
			
			$('.aside')[0].appendChild(settler);
			addHotKey(GM_getValue('hk_top', 'W'),function(){scrollTo(0,0)});
			addHotKey(GM_getValue('hk_btm', 'S'),function(){scrollTo(0,9999999)});
			addHotKey(GM_getValue('hk_pre', 'A'),function(){gotopage($('#pre_photo'), $('.prev')[0])});
			addHotKey(GM_getValue('hk_nxt', 'D'),function(){gotopage($('#next_photo'), $('.next')[0])});
			$('#prev_').addEventListener('click', function(){gotopage($('.prev')[0])}, false); 
			$('#next_').addEventListener('click', function(){gotopage($('.next')[0])}, false); 
		}
	};

	// 翻页
	function gotopage(obj1, obj2, obj3){
		var going = obj1 || obj2 || obj3, h = going && (going.href || going.getElementsByTagName('a')[0].href) || false;
		h && (location.href = h)||alert('呃……翻不动了');
	};

	// 全站搜索
	// function multiSearch(){
	// 	if($$('form[name=ssform] span')[1] && GM_getValue('multiSearch', true)){
	// 		$$('form[name=ssform] span')[1].innerHTML += '\
	// 			<div id="db_scr_btm" title="双击：立即搜索；单击：选择搜索范围">\
	// 			<div class="db_scr_btm">综合</div>\
	// 			<div class="db_scr_btm">社区</div>\
	// 			<div class="db_scr_btm">读书</div>\
	// 			<div class="db_scr_btm">电影</div>\
	// 			<div class="db_scr_btm">音乐</div>\
	// 			<input type="hidden" value="" name="cat">\
	// 			</div>';
	// 		GM_addStyle('.db_scr_btm{background:#E9F4E9;color:#0C7823;cursor:pointer;display:none;float:left;text-align:center;position:relative;width:19%;border-left:1px solid #E9F4E9;border-right:1px solid #E9F4E9;} .db_scr_btm:hover{position:relative;top:-1px;border-bottom:1px solid #a6d098;border-left:1px solid #a6d098;border-right:1px solid #a6d098;background:#fff;} .nav-srh:hover .db_scr_btm{display:block;}');
	// 		$('#db_scr_btm').addEventListener('click', function(e){
	// 			if(!e.target.id){
	// 				setStyles($('.db_scr_btm'), '');
	// 				e.target.style.cssText = 'position:relative;top:-1px;border-bottom:1px solid #a6d098;border-left:1px solid #a6d098;border-right:1px solid #a6d098;background:#fff;';
	// 				var n = e.target.innerHTML;
	// 				n == '综合' && ($('ssform')[0].action = 'http://www.douban.com/subject_search') && ($('cat')[0].value = '');
	// 				n == '社区' && ($('ssform')[0].action = 'http://www.douban.com/search') && ($('cat')[0].value = '');
	// 				n == '读书' && ($('ssform')[0].action = 'http://book.douban.com/subject_search') && ($('cat')[0].value = '1001');
	// 				n == '电影' && ($('ssform')[0].action = 'http://movie.douban.com/subject_search') && ($('cat')[0].value = '1002');
	// 				n == '音乐' && ($('ssform')[0].action = 'http://music.douban.com/subject_search') && ($('cat')[0].value = '1003');
	// 			}
	// 		}, false);
	// 		$('#db_scr_btm').addEventListener('dblclick', function(e){if(!e.target.id){$('ssform')[0].submit();}}, false);
	// 	}
	// };

	// 顶部滑动导航条
	function slideBar(){
		if($('.global-nav-items')[0] && GM_getValue('slideBar', true)){
			var name = getUserName();
			
			//添加我的豆瓣
			if(name){
				var myDouban = document.createElement('li');
				myDouban.innerHTML = '<a href="http://www.douban.com/mine/" title="by 豆藤">自己</a>';
				$$('.global-nav-items ul')[0].insertBefore(myDouban, $$('.global-nav-items ul li')[0]);
			};
			
			//添加豆瓣说到导航条 因为遮挡搜索按钮暂时去除
			// if($('.top-nav-more-items')[0]){
				// $$('.top-nav-more-items ul')[0].innerHTML += '<li><a href="http://shuo.douban.com/" target="_blank" title="by 豆藤">豆瓣说</a></li>';
				// $('.top-nav-more-items')[0].style.height = ($$('.top-nav-more-items ul li').length == 3) ? '78px' : '';
			// };
			
			//二级导航
			var subNavItems = document.createElement('div');
			subNavItems.id = 'my-nav-items';
			subNavItems.innerHTML = '\
					'+ (name ? '\
					<ul id="自己" style="display:none;">\
					<li><a href="http://www.douban.com/people/'+name+'/notes">日记</a></li>\
					<li><a href="http://www.douban.com/people/'+name+'/photos">相册</a></li>\
					<li><a href="http://www.douban.com/mine/discussions">讨论</a></li>\
					<li><a href="http://www.douban.com/people/'+name+'/recs">推荐</a></li>\
					<li><a href="http://www.douban.com/people/'+name+'/favorites">喜欢</a></li>\
					<li><a href="http://www.douban.com/people/'+name+'/statuses">广播</a></li>\
					<li><a href="http://www.douban.com/people/'+name+'/offers">二手</a></li>\
					<li><a href="http://www.douban.com/mine/doulists">豆列</a></li>\
					<li><a href="http://www.douban.com/people/'+name+'/board">留言板</a></li>\
					<li><a href="http://www.douban.com/settings/">设置</a></li>\
					</ul>\
					' : '') + '\
					<ul id="豆瓣" style="display:none;">\
					<li><a href="http://www.douban.com/update/">广播</a></li>\
					<li><a href="http://www.douban.com/site/">小站</a></li>\
					<li><a href="http://www.douban.com/tribe/">部落</a></li>\
					<li><a href="http://dongxi.douban.com/">东西</a></li>\
					<li><a href="http://www.douban.com/thing/">事情</a></li>\
					<li><a href="http://www.douban.com/explore/">浏览发现</a></li>\
					<li><a href="http://www.douban.com/subject/explore">喜欢条目</a></li>\
					</ul>\
					<ul id="读书" style="display:none;">\
					<li><a href="http://book.douban.com/mine">我读</a></li>\
					<li><a href="http://book.douban.com/updates">阅读动态</a></li>\
					<li><a href="http://book.douban.com/recommended">豆瓣猜</a></li>\
					<li><a href="http://book.douban.com/chart">排行榜</a></li>\
					<li><a href="http://book.douban.com/tag/">分类浏览</a></li>\
					<li><a href="http://book.douban.com/review/best/">书评</a></li>\
					<li><a href="http://book.douban.com/cart">购书单</a></li>\
					</ul>\
					<ul id="电影" style="display:none;">\
					<li><a href="http://movie.douban.com/mine">我看</a></li>\
					<li><a href="http://movie.douban.com/nowplaying/">影讯&订票</a></li>\
					<li><a href="http://movie.douban.com/tv">电视剧</a></li>\
					<li><a href="http://movie.douban.com/chart">排行榜</a></li>\
					<li><a href="http://movie.douban.com/tag/">分类</a></li>\
					<li><a href="http://movie.douban.com/review/best/">影评</a></li>\
					<li><a href="http://movie.douban.com/trailers">预告片</a></li>\
					<li><a href="http://movie.douban.com/notifications">提醒</a></li>\
					<li><a href="http://movie.douban.com/celebrities/">影人</a></li>\
					</ul>\
					<ul id="音乐" style="display:none;">\
					<li>　　　　</li>\
					<li><a href="http://music.douban.com/artists/">音乐人</a></li>\
					<li><a href="http://music.douban.com/chart">排行榜</a></li>\
					<li><a href="http://music.douban.com/tag/">分类浏览</a></li>\
					<li><a href="http://music.douban.com/mine">我的音乐</a></li>\
					<li><a target="blank" href="http://douban.fm/">豆瓣FM</a></li>\
					<li><a href="http://music.douban.com/my2013">我听2013</a></li>\
					</ul>\
					<ul id="同城" style="display:none;">\
					<li>　　　　　　　　　　　　</li>\
					<li><a href="http://www.douban.com/location/people/'+name+'/">我的同城</a></li>\
					<li><a href="http://www.douban.com/location/world/events">同城活动</a></li>\
					<li><a href="http://www.douban.com/location/world/hosts">主办方</a></li>\
					<li><a href="http://www.douban.com/location/drama/">舞台剧</a></li>\
					</ul>\
					<ul id="小组" style="display:none;">\
					'+ (name ? '\
					<li>　　　　　　</li>\
					<li><a href="http://www.douban.com/group/people/'+name+'/">小组主页</a></li>\
					<li><a href="http://www.douban.com/group/people/'+name+'/publish">发起的话题</a></li>\
					<li><a href="http://www.douban.com/group/people/'+name+'/reply">回应</a></li>\
					<li><a href="http://www.douban.com/group/people/'+name+'/likes">喜欢</a></li>\
					<li><a href="http://www.douban.com/group/people/'+name+'/recommendations">推荐</a></li>\
					<li><a href="http://www.douban.com/group/people/'+name+'/joins">小组分类</a></li>\
					' : '') + '\
					</ul>\
					<ul id="阅读" style="display:none;">\
					<li>　　　　　　</li>\
					<li><a href="http://read.douban.com/ebooks/">电子图书</a></li>\
					<li><a href="http://read.douban.com/category/free/">免费</a></li>\
					<li><a href="http://read.douban.com/columns/">专栏</a></li>\
					<li><a href="http://read.douban.com/serials/">连载</a></li>\
					<li><a href="http://read.douban.com/translation/">译者项目</a></li>\
					<li><a href="http://read.douban.com/competition/">征文大赛</a></li>\
					<li><a href="http://read.douban.com/category/new">分类浏览</a></li>\
					</ul>\
					<ul id="豆瓣FM" style="display:none;">\
					<li>　　　　　　</li>\
					<li><a href="http://douban.fm/mine">我的电台</a></li>\
					<li><a href="http://muggy.labs.douban.com/">音乐基因</a></li>\
					<li><a href="http://douban.fm/mine#!type=played">累计收听</a></li>\
					<li><a href="http://douban.fm/mine#!type=liked">加红心</a></li>\
					<li><a href="http://douban.fm/mine#!type=banned">不再播放</a></li>\
					<li><a href="http://douban.fm/mine#!type=faved_chl">收藏兆赫</a></li>\
					</ul>\
					<ul id="东西" style="display:none;">\
					<li>　　　　　　　　　　　　　　　　　　　　　　　　　　　</li>\
					<li><a href="http://dongxi.douban.com/shows/new">全部东西</a></li>\
					<li><a href="http://dongxi.douban.com/articles/">图文</a></li>\
					<li><a href="http://dongxi.douban.com/doulists/">豆列</a></li>\
					</ul>\
					<ul id="九点" style="display:none;">\
					<li>　　　　　　　　　　　　　　　　　　　</li>\
					<li><a href="http://9.douban.com/channel/culture">文化</a></li>\
					<li><a href="http://9.douban.com/channel/life">生活</a></li>\
					<li><a href="http://9.douban.com/channel/fun">趣味</a></li>\
					<li><a href="http://9.douban.com/channel/technology">科技</a></li>\
					<li><a href="http://9.douban.com/reader/">我的订阅</a></li>\
					</ul>\
			';
			$('.global-nav-items')[0].appendChild(subNavItems);

			GM_addStyle('#my-nav-items{position:absolute;z-index:10;} #my-nav-items a{color:#545652;} #my-nav-items a:hover{font-weight:600;}');
			
			//滑动效果
			$$('.global-nav-items ul')[0].addEventListener('mouseover', function(e){
				if(e.target.href){
					setStyles($$('#my-nav-items ul'), 'display:none;');
					$('#'+e.target.innerHTML) && ($('#'+e.target.innerHTML).style.display = 'block');
				}
			}, false);

			//鼠标移到内容区后隐藏滑动导航条
			$('#content') && $('#content').addEventListener('mouseover', function(e){
				setStyles($$('#my-nav-items ul'), 'display:none;');
			}, false);
		}
	};

	// 破解音乐人下载链接
	function musicLink(){
		if(GM_getValue('musicLink', true)){

			// 音乐播放器
			if(location.href == 'http://music.douban.com/artists/player/'){

				// // 破解下载链接，可惜新增歌曲或者点击下一首后无法识别
				// function getPopupMusic(){
				// 	if(!!window.__bootstrap_data && document.getElementById('main-cont')){
				// 		// 获取页面中的播放列表
				// 		var playlist = __bootstrap_data.playlist;
				// 		for(var i=0,j=playlist.length; i<j; i++){
				// 			document.getElementById(playlist[i].sid).innerHTML
				// 				+= '<a target="_blank" title="'+ (navigator.userAgent.indexOf('Chrome')>0 ? '点击下载《'+songs[i].title+'》 by豆藤' : '请右键另存为或使用下载工具下载 by豆藤')
				// 				+ '"  href="'+ playlist[i].url +'" download="'+playlist[i].title+'"><span class="icon icon-playlist-download"></span></a>';
				// 		};
				// 	}else{
				// 		setTimeout(getPopupMusic, 500);
				// 	};
				// };
				// injectFun(getPopupMusic, 500);

				function ajaxPopupMusic(){
					var analysisMusic = function(){
						var newSongs = $('td.fav:not(:has(.icon-playlist-download))');
						if(newSongs.length > 0){
							$.ajax({
								url :'http://music.douban.com/j/artist/playlist',
								type:'POST',
								data:{
									sids: newSongs.map(function(){ return $(this).attr('id')} ).get().join(',')
								}
							}).done(function(rData){
								if(rData.r == 0 && rData.songs.length > 0){
									$(rData.songs).each(function(){
										!$('#'+this.sid+' .icon-playlist-download').length && $('#'+this.sid).append('<a target="_blank" title="'+ (navigator.userAgent.indexOf('Chrome')>0 ? '下载《'+this.title+'》 by豆藤' : '请右键另存为或使用下载工具下载 by豆藤') + '"  href="'+ this.url +'" download="'+this.artist.name+' - '+this.title+'"><span class="icon icon-playlist-download"></span></a>')
									});
								};
							});
						};
					};

					// 方法1：简单粗暴定时器
					setInterval(analysisMusic, 1000);
					// 方法2：通过监听歌曲变化来识别，减少cpu损耗
					// (function musicMonitor(){
					// 	analysisMusic();
					// 	var songCount = $('.song-count');
					// 	if(songCount.length){
					// 		songCount[0].addEventListener("DOMSubtreeModified", analysisMusic, false);
					// 	}else{
					// 		setTimeout(musicMonitor, 500);
					// 	};
					// })();

					// 批量下载音乐
					(function multiDownLoad(){
						var head = $('#main-head');
						if(head.length){
							head.append('<span class="pull-right"><a id="multiDownLoad" href="javascript:;" style="margin-right: 10px;">批量下载</a></span>');
							$('#multiDownLoad').on('click', function(){
								if(/open/i.test($('.pl-lyricbox')[0].className)){
									$('.pl-btn-hidelyric').click();
								}else{
									$('.pl-btn-showlyric').click();
									$('.pl-lyric-content').html('请使用下载工具下载以下链接：<br><textarea readonly="readonly" style="resize:none; width:100%; height:1080px; overflow:auto; border:0px solid #2C2933; color:#57555C; background:#2C2933; font-size:10px;">' + $('a[download]').map(function(){ return $(this).attr('href')} ).get().join('\n') + '</textarea>');
								};
							});
						}else{
							setTimeout(multiDownLoad, 500);
						};
					})();

				};
				injectFun(ajaxPopupMusic, 500);

			};

			// 音乐人小站
			if(location.host == 'site.douban.com' && $('.playlist').length > 0){
				var noDownloadSongs = $$('td.download:not(.clickable)');
				if(noDownloadSongs.length){
					var songID = [];
					for(var i=noDownloadSongs.length-1; i>=0; i--){
						songID.push(noDownloadSongs[i].parentNode.getAttribute('song_id'));
					};
					songID = songID.join('%2C');

					GM_xmlhttpRequest({
						method: 'POST',
						url: 'http://music.douban.com/j/artist/playlist',
						data: 'sids='+ songID +'&ck=' + (getCookie('ck').replace(/"|'/g, '') || 'xxxx'),
						headers: {
							// 'Accept-Encoding': 'gzip, deflate',
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						},
						onload: function(resp){
							var rData = JSON.parse(resp.responseText);
							if(rData.r == 0 && rData.songs.length > 0){
								for(var i=0,songs=rData.songs,j=songs.length; i<j; i++){
									$$('#s'+songs[i].sid+' .download')[0].innerHTML = '<a target="_blank" title="'+ (navigator.userAgent.indexOf('Chrome')>0 ? '点击下载《'+songs[i].title+'》 by豆藤' : '请右键另存为或使用下载工具下载 by豆藤') + '"  href="'+ songs[i].url +'" download="'+songs[i].artist.name+' - '+songs[i].title+'"><span class="icon icon-playlist-download"></span></a>';
								};
							};
						}
					});

					// 批量下载音乐
					function multiDownload(){
						$('th:contains(下载)').each(function(){
							this.innerHTML = '<a href="javascript:;" style="color:#61C2BD;">批量下载</a>';
							$(this).click(function(){
								var thisTable = $(this).parent().parent();
								if(!$('.multiDownload', thisTable).length){
									thisTable.append('<textarea class="multiDownload" style="width:572px;height:100px;font-size:10px;">'+ $('td.download a', thisTable.parent()).map(function(){ return $(this).attr('href')} ).get().join('\n') +'</textarea>');
								}else{
									$('.multiDownload', thisTable).fadeToggle();
								};
							});
						});
					};
					injectFun(multiDownload);

				};
			};


			// 节目单歌曲列表
			if(/music\.douban\.com\/programme\/\d+/i.test(location.href)){
				function getProgramme(){
					var songlist = $('#songlist>li>.song-item');
					if(songlist.length){
						songlist.each(function(){
							var songid = $(this).data('songid'),
								ssid = $(this).data('ssid'),
								performer = $(this).data('performer'),
								title = $(this).data('title');
							$.ajax({
								url : 'http://music.douban.com/j/songlist/get_song_url?sid=' + songid + '&ssid=' + ssid,
								type : 'get',
								dataType : 'json',
								async : false,
								success : function(rData){
									if(rData.r.length){
										$('#'+ songid +' .song-info').prepend('<span>\
											<a style="display:block; text-align:center; width:20px;" target="_blank" title="'+ (navigator.userAgent.indexOf('Chrome')>0 ? '下载《'+ title +'》 by豆藤' : '请右键另存为或使用下载工具下载 by豆藤') + '"  href="'+ rData.r +'" download="'+ performer +' - '+ title +'"><img src="http://t.douban.com/pics/download.gif"></a>\
											</span>');
									};
								}
							});
						});
					}else{
						setTimeout(getProgramme, 1000);
					};
				};
				injectFun(getProgramme);
				
			};
			
			
			// 音乐专辑&艺术家
			if(/music\.douban\.com\/(subject|musician)\/\d+/i.test(location.href)){
				function getMusicSubject(){
					var songlist = $('.song-item');
					if(songlist.length){
						songlist.each(function(){
							var songid = $(this).attr('id'),
								ssid = $(this).data('ssid'),
								performer = $('span:contains(表演者)>a').text(),
								title = $('.song-name', $(this)).data('title');
							$.ajax({
								url : 'http://music.douban.com/j/songlist/get_song_url?sid=' + songid + '&ssid=' + ssid,
								type : 'get',
								dataType : 'json',
								async : false,
								success : function(rData){
									if(rData.r.length && !$('#'+ songid + ' .audioControls').length){
										$('#'+ songid + ' .song-name').prepend('<span>\
											<a style="float:left;" href="javascript:;" class="audioControls" title="播放/暂停">\
												<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADRSURBVDhPY6AqCN7vuST4gGd76G4XfqgQaSDkgOcOIP4fvN9jb+h+DxuoMPEA6IKNIAOg+E3IAY86klwTst9zE5IBYAz00uGgfZ7WUCX4ATYDwIbs9/wIxLUEXYPLADje77EPGD4xUOWYgKABELwKqhwT4DMAaPMlYKAGRh32FoQqxwRYA3G/xzeg/+dE7PEVhyrDDbAYcAXo7xCoNGEASwdA+hdQ45SQg66KUCniADDODwD9+SB4n5c/w38GRqgw8SDkoEdy4EF3Iyh3SAAGBgDhsbHTl5ox+gAAAABJRU5ErkJggg==" alt="播放" style="max-width:16px;" />\
												<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABDSURBVDhPY6AqCDng+R+GA/d7WECFGUBsZDmoMCZAVkSxAcH7vMyhwgwgNrIcVBgTICsaNWDUABCm2ICByQukAwYGAKvJ8hljIU15AAAAAElFTkSuQmCC" alt="暂停" style="max-width:16px; display:none;" />\
												<audio preload="none" src="'+rData.r+'"></audio>\
											</a>\
											<a style="float:left; display:block; text-align:center; width:20px;" target="_blank" title="'+ (navigator.userAgent.indexOf('Chrome')>0 ? '下载《'+ title +'》 by豆藤' : '请右键另存为或使用下载工具下载 by豆藤') + '"  href="'+ rData.r +'" download="'+ performer +' - '+ title +'"><img src="http://t.douban.com/pics/download.gif">\
											</a>\
											</span>');
										
										$('#'+ songid + ' .audioControls').click(function(){
											$('img', this).toggle();
											var audio = $('audio', this)[0];
											if($(this).hasClass('onPlaying')){
												audio.pause();
												$(this).removeClass('onPlaying');
											}else{
												audio.play();
												$('.onPlaying').click();
												$(this).addClass('onPlaying');
											};
										});
									};
								}
							});
						});
					}else{
						setTimeout(getMusicSubject, 1000);
					};
				};
				injectFun(getMusicSubject);
				
			};


		};
	};

	// 留言板增强
	function exBoard(){
		if(/douban\.com\/(?:[^\/]+\/[^\/]+|widget)\/board/i.test(location.href) && GM_getValue('exBoard', true)){
			if(!$('#board')){//加载下一页后不再重复处理标记
				GM_addStyle('\
					#board #bydbhp {\
						display:none;\
						float:right;\
						color:#BBBBBB;\
						font-size:12px;\
					}\
					#board:hover #bydbhp {\
						display:block;\
					}\
				');
				var mainArea = $$('#content .indent')[0] || $$('#content .mod')[0];
				var action = /\/\/site/i.test(location.href) && (location.href.replace(/\?.*/, '') + 'add_board') || '';
				mainArea.innerHTML = '\
					<div id="board">\
						<form id="fboard" style="margin-bottom: 12px;" method="post" name="bpform" action='+ action +'>\
							<div style="display: none;"><input type="hidden" value='+ getCookie('ck') +' name="ck"></div>\
							<textarea style="width: 97%; height:100px; margin-bottom: 5px;" name="bp_text"></textarea>\
							<span class="bn-flat"><input type="submit" value=" 留言 " name="bp_submit"></span><span id="bydbhp">by豆藤</span>\
							<a style="display:none;" href=# onclick="this.style.display=\'none\';var form=$(\'#fboard\');form.attr(\'action\',\'\');form.find(\'input:visible\').val(\'留言\');">点击恢复原状</a>\
						</form>\
					</div>\
				' + mainArea.innerHTML;
			};
			
			
			for (var i=0,r=$$('.mbtrdot, .update-item .author'),l=r.length; i<l; i++){
				if(!/dbmark/.test(r[i].className)){
					r[i].innerHTML += '<span class="gact"><a title="留言到对方的留言板 by豆藤" onclick="var link=this.parentNode.parentNode.getElementsByTagName(\'a\')[0];var form=$(\'#fboard\');form.attr(\'action\',link.href+\'board\');form.find(\'input:visible\').val(\'留言到\'+link.innerHTML+\'的留言板\');form.find(\'textarea\').focus();form.find(\'a\').attr(\'style\',\'\');" href=#>回复</a></span>';
					r[i].className += ' dbmark';//加载下一页后不再重复处理标记
				}
			}
		}
	};

	// Ctrl + Enter 回复快捷键
	function ctrlEnter(){
		var form = document.forms;
		for (var i=0,j=form.length; i<j; i++){
			form[i].addEventListener('keydown', function(e){
				if ( e.ctrlKey && e.keyCode == '13'){
					var submit = this.querySelector('input[type="submit"]');
					if(!!submit){
						submit.click();
					}else{
						this.submit();
					};
				};
			}, false);
		};
	};


	// 通用页面加载函数
	/*
		islimit：true为单页，false为全部(可选，默认全部)
		func：执行函数(可选)
		tarXpath：目标加载位置(可选)
		nextLink：下一页的链接(可选，默认paginator后页)
		baseDOM：下一页的链接的母体(可选，默认当前document)
	*/
	function loadPage(islimit, func, tarXpath, nextLink, baseDOM){
		var nextLink = nextLink || './/div[@class="paginator" and not(@id)]/span[@class="next"]/a';
		var link = xpath(nextLink, baseDOM||document).snapshotItem(0);//需要加载的页面链接
		window.autoLoading = true;//开始加载标记
		
		// 友邻页面特殊处理：避免重复捆绑友邻事件，修复点击回应打开新页面的BUG 第一步，第二步重新捆绑时间在加载下一页后执行
		// TODO 同样以后有时间再处理
		// if($('#db-isay')){
		// 	var obj = $$('.j');
		// 	for (var i=0,j=obj.length; i<j; i++){
		// 		obj[i].className = obj[i].className.replace(/^j\s/, '');
		// 	};
		// };
		
		if(link){
			// 下一页加载中提示
			$('#nextPageLoder') && ($('#nextPageLoder').innerHTML = '努力加载中<img border="0" src="data:image/gif;base64,R0lGODlhCgAKAJEDAMzMzP9mZv8AAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAADACwAAAAACgAKAAACF5wncgaAGgJzJ647cWua4sOBFEd62VEAACH5BAUAAAMALAEAAAAIAAMAAAIKnBM2IoMDAFMQFAAh+QQFAAADACwAAAAABgAGAAACDJwHMBGofKIRItJYAAAh+QQFAAADACwAAAEAAwAIAAACChxgOBPBvpYQYxYAIfkEBQAAAwAsAAAEAAYABgAAAgoEhmPJHOGgEGwWACH5BAUAAAMALAEABwAIAAMAAAIKBIYjYhOhRHqpAAAh+QQFAAADACwEAAQABgAGAAACDJwncqi7EQYAA0p6CgAh+QQJAAADACwHAAEAAwAIAAACCpRmoxoxvQAYchQAOw==">');
			
			//加载页面
			GM_xmlhttpRequest({
				method: 'GET',
				url: link.href,
				onload: function(xhr){
					var nextPageDOM = document.createElement('div');
					nextPageDOM.innerHTML = xhr.responseText;
					
					//函数内嵌、还是随其他函数而定
					tarXpath = tarXpath || 
						($$('#miniblog')[0] && './/*[@id="miniblog"]')||//友邻
						($$('ul.topic-reply, div#comments, div.post-comments')[0] && './/ul[contains(@class,"topic-reply")]|.//div[@id="comments" or @class="post-comments"]')||//小组 、 书影音评论 、 阿尔法城
						($$('.photolst, .event-photo-list, .poster-col4')[0] && './/*[@class="photolst clearfix" or @class="photolst clearbox" or @class="event-photo-list" or @class="poster-col4 clearfix"]')||//相册、活动,  小站、阿尔法城图片墙, 剧照、海报
						($$('div#comment-section')[0] && './/div[@id="comment-section"]')||//电视剧讨论区
						($$('table.olt, table.list-b')[0] && './/table[@class="olt" or @class="list-b"]/tbody')||//邮箱、论坛列表、阿尔法城话题列表
						($$('.clearfix>div.article')[0] && './/div[contains(@class,"clearfix")]/div[@class="article"]')||//豆单、留言板、单页相册 等等通用模块
						($$('body')[0] && './/body');//最后必杀
						// alert(tarXpath)
					
					//将加载的下一页内容
					var theTar = xpath(tarXpath, nextPageDOM).snapshotItem(0);
					
					if($$('div.post-comments, table.olt, table.list-b')[0]){ //使用appendChild操作会导致嵌套样式变化的: 阿尔法城、邮箱、阿尔法城话题列表等
					
						// 方法1：innerHTML操作，没有父节点嵌套但丢失捆绑事件 且加载多页后重新排版消耗资源较多
						// xpath(tarXpath).snapshotItem(0).innerHTML += theTar.innerHTML;
						
						// 方法2: insertAfter，没有嵌套，但可能由于节点排序与xpath规则不一致导致加载混乱
						insertAfter(theTar.cloneNode(true), xpath(tarXpath).snapshotItem(xpath(tarXpath).snapshotLength - 1));
					}else{
					
						// 方法3：带有父节点嵌套的DOM操作，保留捆绑事件但造成结构嵌套
						xpath(tarXpath).snapshotItem(0).appendChild(theTar.cloneNode(true));
					};
					
					// 恢复加载按钮文本
					$('#nextPageLoder') && ($('#nextPageLoder').innerHTML = '加载下一页∨');
					
					// 若加载页面含有翻页控件，则删除前一个，以保持翻页控件唯一
					var paginator = $('.paginator'), theParent = paginator[0] && paginator[0].parentNode;
					xpath('.//div[@class="paginator"]', theTar).snapshotItem(0) && theParent && theParent.removeChild(paginator[0]);
					
					if( !islimit && xpath(nextLink, nextPageDOM).snapshotItem(0)){// 若无限制，继续加载下一页
						setTimeout(function(){
							var pageCount = Number(window.pageCount || 0);
							if(pageCount < GM_getValue('loadPageNum', 10)-2){ //pageCount<N，即加载后续N+2页
								window.pageCount = pageCount+1;
								loadPage(islimit, func, tarXpath, nextLink, nextPageDOM);
							}else{
								window.pageCount = 0;
								loadPage(true, func, tarXpath, nextLink, nextPageDOM);
							};
						},500);
						return;
					}else{//加载完毕
						
						//若加载内容没有翻页控件，则更新当前页面的翻页控件
						if(!xpath('.//div[@class="paginator"]', theTar).snapshotItem(0)){
							paginator = $('.paginator'), theParent = paginator[0] && paginator[0].parentNode;
							theParent && theParent.removeChild(paginator[0]);
							theParent && theParent.appendChild(
								xpath('.//div[@class="paginator"]', nextPageDOM).snapshotItem(0)
							);
						};
						
						//若有第二个翻页控件，和第一个同步刷新 出现未知错误，待查
						paginator = $('.paginator');//原集合可能已经更改，重新获取
						paginator[1] && (paginator[1].innerHTML = paginator[0].innerHTML);
						
						//执行绑定操作
						!!func && func();
						
						// 检查是否还有下一页
						if(!$$('.paginator:not(#secPaginator)>.next>a')[0] && $('#nextPageLoder')){
							$('#nextPageLoder').style.background = '#fff';
							$('#nextPageLoder').textContent = '已经是最后一页';
						};
						
						// 修复Tampermonkey怪异BUG
						$('#TM_tmp_xpath') && ($('#TM_tmp_xpath').style.display = 'none');
						
						// 重新捆绑友邻事件，修复点击回应打开新页面的BUG
						// TODO 豆瓣函数更新，以后有时间再修复友邻回应新页面打开问题
						// $('#db-isay') && (location.href = 'javascript:$(function(){load_event_monitor(document)});void(0);');
						
						
						// 去除加载下一页后重复的内容
						var removeDouble = function(x){
							var obj = xpath(x).snapshotItem(1);//用xpath比CSS选择符能避免重复ID选择不能问题
							obj && (obj.parentNode.removeChild(obj));
							xpath(x).snapshotItem(1) && needRemove(x);
						};
						removeDouble('.//*[@id="db-isay"]');//删除加载页面后，重复出现的豆瓣说部分
						
						//加载完标记
						window.autoLoading = false;
					}
				}
			});
		};
	};

	// 页面加载按钮
	function addPageLoader(){
		var paginator = $('.paginator')[0];
		if(paginator && GM_getValue('addPageLoader', true)){
			
			//加载按钮样式
			GM_addStyle('.btn-donate{display:inline-block;*display:inline;zoom:1;padding:0 8px;vertical-align:middle;*vertical-align:baseline;height:19px;line-height:19px;line-height:21px\9;overflow:hidden;border:1px solid#edceba;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px}a.btn-donate:link,a.btn-donate:visited{border-color:#f2ece7;background-color:#fff6ee;color:#99776b}a.btn-donate:hover,a.btn-donate:active{border-color:#edceba;background-color:#fff0e2;color:#99776b}');
			
			//第一个翻页控件下增加加载按钮
			var next = document.createElement('span');
			next.id = 'pageLoader';
			next.innerHTML = '<br><a id="nextPageLoder" style="text-align:center;width:80%;margin:0;font:12px/162% Arial,Helvetica,sans-serif;" href="#nothing" title="将下一页加载到当前页面" class="btn-donate">加载下一页∨</a>'
				+ '<a id="allPageLoder" style="text-align:center;width:15%;margin:0;font:12px/162% Arial,Helvetica,sans-serif;" href="#nothing" title="在本页面合并显示多个个分页，页数可自行设置" class="btn-donate">加载多个分页</a>';
			$('#nextPageLoder') || paginator.appendChild(next);
			
			if($('#nextPageLoder')){
				
				// 加载下一页
				$('#nextPageLoder').addEventListener('click', function(){
					loadPage(true, runHelper);
				}, false);
				
				// 加载多个分页
				$('#allPageLoder').addEventListener('click', function(){
					if(!!$$('.paginator>span.break')[0]){//超过10页
						if(!window.loadPageConfirm){//本页未提示过
							window.loadPageConfirm = true;
							confirm('检测到分页较多，可能耗时较长，是否加载？\n（当前设定为每次加载'+GM_getValue('loadPageNum', 10)+'页，可点击“豆藤”设置）') && loadPage(false, runHelper);
						}else{//本页已提示过
							loadPage(false, runHelper);
						};
					}else{
						loadPage(false, runHelper);
					};
				}, false);
				
				// 自动加载下一页
				GM_getValue('autoLoadPage', true) && document.body.addEventListener(navigator.userAgent.indexOf('Chrome')>0 ? 'mousewheel' : 'DOMMouseScroll', function(){//firefox使用DOMMouseScroll chrome使用mousewheel
					var pageLoaderY = $('#pageLoader').offsetTop, loader = $('#pageLoader');
					do {
						loader = loader.offsetParent;
						pageLoaderY += loader.offsetTop;//offsetTop只是离上层对象的高度，要递归获取到body的高度
					} while( loader.tagName != "BODY" );
					if(pageLoaderY - window.scrollY <= window.innerHeight*2 && $$('.paginator:not(#secPaginator)>.next>a')[0] && window.autoLoading !== true){// 滚动到加载控件所在位置，存在下一页，且不在加载中，则自动加载
						// alert("$('#pageLoader').offsetTop--"+$('#pageLoader').offsetTop+"\nwindow.scrollY--" + window.scrollY +"\nwindow.innerHeight--"+ window.innerHeight)
						loadPage(true, runHelper);
					};
				}, false);
			}
		}
	};

	// 无尽处理下一页
	// func 对下一页dom所进行的操作函数；noNextPageFunc 当前页面为最终页面的操作函数；dom初始操作对象
	function endlessPage(func, noNextPageFunc, dom){
		var nextPage = $$('.paginator>.next>a', dom||document)[0];
		if(nextPage){
			GM_xmlhttpRequest({
				method: 'GET',
				url: nextPage.href,
				onload: function(resp){
					if(resp.status < 200 || resp.status > 300) {return;};
					var nextPageDOM = document.createElement('div');
					nextPageDOM.innerHTML = resp.responseText;
					
					func(nextPageDOM);
					
					var andNextPage = $$('.paginator>.next>a', nextPageDOM)[0];
					if(andNextPage){
					endlessPage(func, noNextPageFunc, nextPageDOM);
					}else{
						noNextPageFunc();
					}
				},
				onerror: function(){return;}
			})
		}else{
			noNextPageFunc();
		}
	};

	//置顶翻页导航条
	function addTopPager(){
		if(GM_getValue('addTopPager', true)){
			$('.paginator')[0] && $$('.aside>*')[0] && ($$('.aside>*')[0].innerHTML += ('<div class="paginator" id="secPaginator">' + $('.paginator')[0].innerHTML + '</div>'));
		};
	};

	// 彩蛋（Konami Code）：在非豆瓣页面依次按下 ↑↑↓↓←→←→ 键，可在新标签中打开豆瓣
	function openDouban(){
		var k=[];
		document.addEventListener('keydown', function(e){
			k.push(e.keyCode);
			if(k.toString().indexOf('38,38,40,40,37,39,37,39')>=0){
			   GM_openInTab('http://www.douban.com/');
			   k=[];
			}
		}, false); 
	};

	//每次升级后执行
	function afterUpdateFirstLoad(){
		if( (GM_getValue('helperVersion', '0') != doubanHelper.version) && (setCookie('helperVersion') != doubanHelper.version) ){
			GM_setValue('helperVersion', doubanHelper.version);//保存版本号
			setCookie('helperVersion', doubanHelper.version, 9999, '/', '.douban.com');
		
			// if(confirm('恭喜升级成功！\n\n豆藤的最新功能：\n    豆瓣FM 音乐下载 + 播放上一首\n\n想马上体验吗？')){
				// location.href = 'http://douban.fm/';
			// };
		};
	};
	
	//顶部消息提醒
	// function topNotification(){
	// 	var topNav = $('.top-nav-info')[0];
	// 	var thisTime = Date.now().toString();//超出GM保存的整形上限，需要转换为字符型
	// 	if(GM_getValue('topNotification', true) && topNav && (thisTime - GM_getValue('noteLastCheck', 0) > 2*1000)){
	// 		GM_xmlhttpRequest({
	// 			method: 'GET',
	// 			url: 'http://www.douban.com/',
	// 			onload: function(resp){
	// 				if(resp.status < 200 || resp.status > 300) {return;};
	// 				var pageDOM = document.createElement('div');
	// 				pageDOM.innerHTML = resp.responseText;
	// 				var cont = xpath('.//div[@class="infobox"]', pageDOM).snapshotItem(0);
	// 				var noticeNum = cont.innerHTML.match(/\/notification\/.*(\d+)个提醒/);
					
	// 				if(!!noticeNum && noticeNum[1]){
	// 					var notification = document.createElement('a');
	// 					notification.href = 'http://www.douban.com/notification/';
	// 					notification.innerHTML = '提醒<em>('+noticeNum[1]+')</em>';
	// 					topNav.insertBefore(notification, $$('.top-nav-info>a')[0]);
	// 				};
					
	// 				GM_setValue('noteLastCheck', thisTime);
	// 			}
	// 		});
	// 	};
	// };


	// 修复制定页面的BUG
	function bugFix(){
		
		// 修复首页去新版失效问题
		// if(location == 'http://www.douban.com/' && $$('.lnk-sw-new').length>0 ){
			// location.href = 'javascript:$(".lnk-sw-new").click(function(e){e.preventDefault();$.post_withck("/j/remain_oldstyle",function(){location.href="/";});});void(0);';
		// };
		
	};




	/* ************************ 判断执行 ************************ */

	var Douban = /douban\.(com|fm)/i.test(location.href), doubanHelper = {name: '豆藤',id: '49911',version: '2014.02.13'};
	if(!GM_getValue('supportHelper', true)){
		unsafeWindow.__done__ = window.__done__ = true;
		var hpd = document.createElement('script');
		hpd.id = 'hp_done_';
		document.documentElement.firstChild.appendChild(hpd);
	};
	typeof(Updater)!='undefined' && new Updater(doubanHelper).check();//自动更新
	var runHelper = function(){
		autoElevator();//自动电梯*
		exBoard();// 留言板增强*
		exGroup();//交流拓展
		exAlbum(); //相册增强*
		friendsTool();//友邻工具条*
		myGFW();//友邻广播过滤
		addPageLoader();//页面加载控件*
	};
	if(Douban){
	// if(self.location == top.location && Douban){
		var t1 = new Date();//时间1
		hl_input(); //输入框高亮
		addSearchBar(); //添加搜索条
		hideMSG();//折叠小组公告
		settingBar();//添加豆藤设置按钮
		addTopPager();//置顶翻页导航条
		sourceSearcher();//下载资源搜索
		kindle();//显示kindle商店条目
		
		runHelper();//需重复运行的部分
		
		// topNotification();//顶部消息提醒
		// multiSearch();//全站搜索
		ctrlEnter();//快速回复
		slideBar();//顶部滑动导航条
		sortGroup();//小组分类
		settle();//浮动定位工具
		addHotKey(GM_getValue('hk_db', 'Alt+Q'),function(){sw_set(false)});//添加快捷键
		musicLink();//破解音乐人下载链接
		FMdownLoad(); //豆瓣FM下载破解
		afterUpdateFirstLoad();//每次升级后执行
		bugFix();//修复指定页面的BUG
		$('#db_BeanVine') && ($('#db_BeanVine').title = '版本：V' + doubanHelper.version + ' 运行耗时：' + (new Date() - t1)/1000 + ' 秒');//记录豆藤耗时
		// }else{
		// parent && parent.document.getElementById('fulliframe') && (top.location = self.location);// 对付ISP广告
	};
	!Douban && openDouban();//秘籍 '↑↑↓↓←→←→' 打开豆瓣
	showPic(); //显示链接图片

};

