// ==UserScript== 
// @name A More Pleasant Toodledo
// ==/UserScript==

html {
	overflow-y: hidden !important;
	overflow-x:auto !important;
	}

				

.pri-1 {color: #b2b2b2 !important; }
.pri0 {color:#666 !important;}
.pri1 {color:#4c4330 !important;}
.pri2,.status2 {
	font-weight: normal !important;
	color: #b09671 !important;
	text-shadow: #d6cab3 1px 1px 1px !important;
	}
.pri3,.status1 {
	font-weight: normal !important;
	color: #d59034 !important;
	text-shadow: #d6cab3 1px 1px 1px !important;
	}
.date0 {color:#999 !important;}
.date1 {color:#333 !important;}
.date2 {
	font-weight: normal !important;
	color: #d59034 !important;
	text-shadow: #d6cab3 1px 1px 1px !important;
	}
.date3 {
	font-weight: normal !important;
	color: #b04e22 !important;
	text-shadow: #d6cab3 1px 1px 1px !important;
	}

				

html, body, body.guest, .blue firefox, .blue chrome, .guest, .guest firefox, .guest chrome, #main, #left_side, #rchunk {
	font-size: 14px !important;
	font-weight: none !important;
	font-family: Proxima Nova, Verdana, Arial, Sans-serif !important;
    background-color: #fff !important;
    background-image: none !important;
    border: none !important;
	color: #333 !important;
	}

body, body.guest, .blue firefox, .blue chrome, .guest, .guest firefox, .guest chrome {
	max-width:80% !important;}

input, select, textarea {
    font-size: 14px !important;
  	font-family: Proxima Nova, Verdana !important;
  	border: 1px solid #b7bfc6 !important;
	color: #666 !important;
	}
a {color:#7f8c99 !important;}
a:hover {color:#173C60 !important;}

				

#userstylewarning {display: none !important;}
.white #rchunk {padding-top:80px !important;}
#rchunk > .notool p {max-width: 61.49em !important; margin:1em 0px 1.2em  !important;}

	
.dimish {color: #b09671 !important; background-color: inherit !important; padding: 0px 6px !important;}
#main .error {color:#b04e22 !important;}

	
#goalform .dim,#goalform .dim:hover {
	color:#999 !important; 
	background-color:inherit !important;
	}
.sptoc {padding-bottom:3px !important;}

	
table.formbox, #rchunk > .simplebox, .simplebox, .locbox, .addbox,.goalinset, table.compare, table#forum {
	-moz-border-radius:6px !important; border-radius:6px !important;
	background-color:#fdfdfa !important;
	border: 1px solid #b7bfc6 !important;
	color: #333 !important;
	}
.formbox th, #forum th {
	background-color:#f7f6f2 !important;
	border-bottom:1px solid #b7bfc6 !important;
	font-weight:bold !important;
	color: #b09671 !important;
	}
.formbox td, .info td {background-color:#fdfdfa !important; padding-right:5px !important;}
.formbox td.bottom {border-top:1px solid #b7bfc6;}
.formbox .low {color:#173c60 !important;}
.formbox input[type=text],.formbox select,.formbox textarea {
	color:#666 !important;
	border: 1px solid #b7bfc6 !important;
	}
.formbox b {color: #d59034 !important;}
.formbox hr {
	color:#e8eaed !important;
	background-color:transparent !important;
	height:1px !important;
	}
.info th {
	background-color:#f7f6f2 !important;
	border-right:1px solid #b7bfc6 !important;
	color: #666 !important;
	padding-left:5px !important;
	}
.info {font-size:.9em !important;}
#forum td {border-top:1px solid #b7bfc6; background-color:#fdfdfa !important;}
.simplebox b, .addbox b,.goalinset b, table.compare b, #tip b {color: #b09671 !important;}
.addbox {margin-top:10px !important;}

.compare th, .compare .divider, .compare .price td {
	background-color:#f7f6f2 !important;
	color: #b09671 !important;
	}
.compare th {font-weight:bold !important;}
.compare .price td.us{background-color:#fdfdfa !important;}
.compare td {border: 1px solid #b7bfc6  !important;}
.compare .yes, .compare .yesus, .compare .enhus {background-color:#74bf72 !important; color:#fff !important;}
.compare .no, .compare .nous {background-color:#c95151 !important;
	color:#fff !important;
	font-weight:bold !important;
	}
.compare .soso,.compare .sosous, .approw3 {background-color:#fcfce3 !important;}
.compare th.us {background-color:#fff !important;}
.connectbox {border:1px dotted #b7bfc6;background-color:#fdfdfa !important;}
#apirate {background-color:#f0f2f7 !important;border: 1px solid #b7bfc6 !important;}
.apiwarn {border:1px solid #d59034 !important;background-color:#fdfdfa !important;color:#333 !important;}
#formReassignCancel,#formReassignSubmit {background-color:#e8eaed !important;}

.modal{background:#fdfdfa;background-image: none !important;}
.modal .close{padding:4px !important;text-align:right !important;}

	
input.lgbutton, input.button, input.smbutton {
	font-weight:normal !important;
	background-color: #4f667f !important;
    background-image: none !important;
	border:1px solid #173c60 !important;
	color:#fff !important;
	margin:10px 5px !important;
	box-shadow: none !important;
	-moz-box-shadow: none !important;
	-webkit-box-shadow: none !important;
	text-shadow:none !important;
	height:16px !important;
	font-size:1em !important;
	}
input.lgbutton {padding:0px 8px 2px !important; height:24px !important; font-size:1.1em !important; margin:10px 10px 10px 0px}
input.button {padding:1px 6px 3px !important; height:20px !important; font-size:1em !important;}
input.smbutton {padding:0px 4px 3px !important;	height:18px !important; font-size:1em !important;}
#notebookActions input.smbutton {margin:4px 10px 4px 10px !important;}
input.button:hover,input.smbutton:hover,input.lgbutton:hover {color:#fff !important; background-color: #173c60 !important;}

				
				

#rchunk a {color:#7f8c99 !important; width:300px !important; overflow:hidden !important;}
#rchunk a:hover {color:#173C60 !important;}
#rchunk h1 {color: #b09671 !important; font-size:1.4em !important;font-weight:bold !important;}
#rchunk h2 {color: #b09671 !important; font-size:1.2em !important;font-weight:bold !important;}
#rchunk h3 {color: #b09671 !important; font-size:1.1em !important;font-weight:bold !important;}
#main .hr, .hr,#main .detail {border-top:1px solid #b7bfc6 !important;}
.detail b, .detail i {color: #b09671 !important;}

				

#signinform {
	top:70px !important;
	background-color:#f7f6f2 !important;
	-moz-border-radius-topleft:5px !important;
	-moz-border-radius-topright:5px !important;
	border-top-left-radius:5px !important;
	border-top-right-radius:5px !important;
	}
#registerform.modal{
    background-image: none !important;
	background-color:#fdfdfa !important;
	border: 1px solid #b7bfc6 !important;
	color: #333 !important;
	}
		
#mobile {position:absolute;top:465px !important;}

				

.guest #banner a.banbut {
	margin-top:40px !important;
	margin-right:90px !important;
	width:76px !important;
	height:20px !important;
	padding:2px 0 1px !important;
	border:1px solid #b7bfc6 !important;
	-moz-border-radius:5px !important; border-radius:5px !important;
	background-color:#f7f6f2  !important;
	color:#173c60 !important;
	text-shadow: none !important;
	font-weight:normal !important;
	font-size:1.1em !important;
	}
.guest #banner a.banbut:hover {
	text-decoration: none !important;
	background-color:#efede6 !important; 
	}
.guest #main {padding-top:0 !important;-moz-box-shadow:none !important;-webkit-box-shadow:none !important; box-shadow:none !important; border:none !important;}
.guest #rchunk {padding-top:10px !important;}
.guest #bottom {width:100% !important;text-align:left !important; padding-left:30px !important;}

				

		
#banner {
	height: 58px !important;
	background:#fff url(http://i1116.photobucket.com/albums/k575/nereye-boyle/t-doo-logo.png) no-repeat 26px 26px !important;
    color: #666 !important;
    border: none !important;
	}
#banner a {background-image: none !important;color: #173c60 !important;}
#banner a:hover {color: #173c60 !important; text-decoration: underline !important;}

		
#logo {display:none !important;}

		
#sec_task, #sec_notebook, #sec_organize, #sec_tool, #sec_forum, #sec_help { 
	top: 28px !important;
	height:20px !important;
	margin:0 !important;
	border:1px solid #b7bfc6 !important;
	color:#173c60 !important;
	background-color:#f7f6f2  !important;
	text-align:center !important;
	text-decoration: none !important;
	}
#sec_task, #sec_notebook { 
	padding:1px 0 2px !important;
	font-size:1.3em !important;
	}
#sec_organize, #sec_tool, #sec_forum, #sec_help { 
	padding:3px 0 0px !important;
	font-size:1.1em !important;
	}
#sec_task { 
	left: 224px !important;
	width:68px !important;
	-moz-border-radius-topleft:5px !important;border-top-left-radius:5px !important;-moz-border-radius-bottomleft:5px !important;border-bottom-left-radius:5px !important;}

#sec_notebook { 
	left: 293px !important;
	width:92px !important;
	-moz-border-radius-topright:5px !important;border-top-right-radius:5px !important;-moz-border-radius-bottomright:5px !important;border-bottom-right-radius:5px !important;}

#sec_organize {
	left:439px !important;	
	width:80px !important;
	-moz-border-radius-topleft:5px !important;border-top-left-radius:5px !important;
	-moz-border-radius-bottomleft:5px !important;border-bottom-left-radius:5px !important;}

#sec_tool {left:519px !important; width:56px !important;}
#sec_forum {left:575px !important; width:70px !important;}
#sec_help {
	left:645px !important;
	width:50px !important;
	-moz-border-radius-topright:5px !important;border-top-right-radius:5px !important;-moz-border-radius-bottomright:5px !important;border-bottom-right-radius:5px !important;}

		
#banner > .sec_btn_sel, #banner > .sec_btn_sel:hover ,#banner > .sec_btn:hover, #banner > .hov_btn:hover, #banner > .hov_btn_on {
	color:#173c60 !important; 
	text-decoration: none !important;
	font-weight:normal !important; 
	background-color:#efede6 !important; 
	border:1px solid #b7bfc6 !important;
	}

		
  ul#organizemenu > li, ul#organizemenu > li a, ul#toolsmenu > li, ul#toolsmenu > li a {
    background-color: #f7f6f2  !important;
    color: #173C60 !important;
	}
  ul#organizemenu > li:hover, ul#organizemenu > li a:hover, ul#toolsmenu > li:hover, ul#toolsmenu > li a:hover {
    background-color: #efede6 !important;
    color: #173C60 !important;
	text-decoration: none !important;
	}

		
#welcome { 
	height:40px !important;
	margin: 4px 2px 0 0  !important;
	padding:2px 4px 2px 4px !important;
	font-size: .9em !important;
	line-height: 1.4em !important;
    color: #808487 !important;
	}
#welcome a {background-image: none !important;color: #79838c !important;}
#welcome a:hover {color: #173c60 !important; text-decoration: underline !important;}
#collabSwitch {
	padding: 1px 2px !important; 
    border-color: #b7bfc6 !important;
    color: #555 !important;
	}
				

		
#rchunktop { 
	top: 77px !important;
	padding: 0 !important; 
	margin-top: 0 !important;
    background-color: #fff !important;
	-moz-border-radius-topleft:6px !important;
	border-top-left-radius:6px !important;
	}
#rchunktop, #rchunktop div {
    border-bottom: none !important;
    border-left: none !important;
	}
#rchunktop a {color:#eee !important;}
#rchunktop a:hover {text-decoration: underline !important;}

		
		
#tlbr_new {
	width:68px !important;
    background-image: none !important;
    background-color: #173C60 !important;
    color: #EEE !important;
	padding-left: 2px !important; 
    border-color: #173C60 !important;
	}
#tlbr_new:hover {text-decoration: underline !important;}

		
#rchunktop #quickAdd, #rchunktop #searchField {
	margin:1px 2px 0 2px !important;
	padding:2px 4px 2px 4px !important;
    background-color: #fdfdfa !important;
    border: 1px solid #b7bfc6 !important;
    color: #808487 !important;
	width:100px !important;
	height:10px !important;
	}
#rchunktop #quickAdd {margin-left:0 !important;}
#rchunktop #searchField {padding-left:15px !important;}

		
#head, #head.notebook {
	padding:0 !important;
	min-width:83em !important;
	max-width:83em !important;
	}
		
#tlbr_show {width:8em !important;}
#tlbr_multi {
	width:7em !important;
	border-right:none !important;
	background-color:inherit !important;
	padding-top:3px !important;
	}
#tlbr_search {background-color:#173C60 !important;}
#tlbr_search .right {padding:1px 2px 3px 0px !important;}
#modifysearch,#savesearch {margin-left:6px !important;}

		
.popmenu {background-color:#fdfdfa !important;}
.popmenu a {color:#173c60 !important;}
.popmenu a:hover {color:#d59034 !important;}
#multieditPop b {
	color:#d59034 !important;
	font-weight:normal !important;
	font-style:italic !important;
	}
		
#addtask, #searchtask { 
	background-color:#f7f6f2 !important;
	color:#000 !important;
	margin:0 !important;
    border: none !important;
	padding: 5px !important;
 	min-width: 82em !important;
 	max-width: 82em !important;
	}
#addtask a {color:#173c60 !important;}
#addtask a:hover {color:#d59034 !important;}

		
.rule {background-color: #fdfdfa !important; padding: 6px !important;}
.rulegroup {background-color: #fdfdfa !important;}

				
				
#colhead { 
	margin:0 0 2px 0 !important; 
	padding: 1px 2px 2px !important;
	font-size:1.1em !important;
	-moz-border-radius-bottomleft:6px !important;
	border-bottom-left-radius:6px !important;
	border: 1px solid #b7bfc6 !important;
	background-color: #f7f6f2 !important; 
	}
#colhead > div {
    color: #333 !important;
    background-color: inherit !important;
    border: none !important;
	}
#colhead a {
    color: #333 !important;
    background-color: inherit !important;
    border: none !important;
	}
#tb_cust {background-color:inherit !important;margin:0 !important;}

				

		
#rchunk > div#tasks > div.sep, div.sep  {
	padding:10px 2px 2px !important;
    background-color: #fff !important;
    border: none !important;
    border-bottom: 2px solid #d6cab3 !important;
    color: #666 !important;
	}
#rchunk > div#tasks > div.sep a, div.sep a {
	color:#d59034 !important;
	font-size:1.2em !important;
	}
#rchunk > div#tasks > div.sep a:hover, div.sep a:hover {
	text-decoration:underline !important;
	color:#d59034 !important;
	}


		
.rownew {background-color:#e8eaed !important;}

		
#rchunk > div#tasks {
	background-color:#fff!important;
    color:#333!important;
	}
		
#rchunk > div#tasks .cols:hover span {background-color: #f7f6f2 !important;}

		
.row .det span,.row .dets_top span,.row .dets_top2 span,.row .note div {border:1px solid #fff !important;color: #333 !important; padding:2px !important;}

.row:hover .det span,.row:hover .dets_top span,.row:hover .dets_top2 span,.row:hover .note div {border:1px solid #f7f6f2 !important;color: #333 !important; padding:2px !important;}

#rchunk > div#tasks .cols:hover {background-color: #f7f6f2 !important;}

.row:hover, .row .dett:hover {background-color:#f7f6f2 !important;}

		
.subtasks .row {border-top:1px dotted #b7bfc6 !important;}
.subtasks .row:hover,.subtasks .row .dett:hover {background-color:#f7f6f2 !important;}
.subtasks:hover {background-color:#f7f6f2 !important;}

		
#dragger {background-color:#e8eaed !important;border:1px solid #7f8c99 !important;}
.drop,.drop:hover {background-color:#f0f2f7!important;}
.moveBot {border-bottom:1px solid #d59034!important;}
.moveTop {border-top:1px solid #d59034!important;}
.moveFBot {border-bottom:2px solid #d59034!important;}
.moveFTop {border-top:2px solid #d59034!important;}

		
#rchunk > div#tasks select {background-color: #fff !important;}
#rchunk > div#tasks select:hover {
	background-color: #e8eaed !important;
	color: #333 !important;
	}

		
.dim {color:#fff !important; background-color:transparent !important;}
.dim:hover {color: #173c60 !important; background-color: inherit  !important;}
p.dim, #notebookText > .dim {color:#b09671 !important; background-color:transparent !important;}
p.dim:hover, #notebookText > .dim:hover {color:#b09671 !important; background-color:transparent !important;}

		
		
#rchunk > div#tasks .cols .note {
    background-color: #fff !important;
	color: #333 !important;
	padding: 4px 5px 5px 6px !important;
	border: 1px solid #fff !important;
	width: 400px !important;
	font-size: .9em !important;
	line-height: 1.5em !important;
	}
#rchunk > div#tasks .cols:hover .note {
    background-color: #fff !important;
	color: #333 !important;
	border: 1px solid #e8eaed !important;
	}

		
#chhover, #sbhover {
	margin-top:18px !important;
	background-color:#FFF !important;
	color:#666 !important;
	border:1px solid #b7bfc6 !important;
	padding:6px !important;
	}
#chhover {width:200px !important;}
#sbhover {width:280px !important;}
#chhover a, #sbhover a {color:#173c60 !important;}
#chhover a:hover, #sbhover a:hover {color:#d59034 !important;}

		
#repdiv, #tagdiv, #tagcloud, #filediv, #actiondiv, #duediv, #startdiv {
	background-color:#FFF !important;
	border:1px solid #b7bfc6 !important;
	padding:6px !important;
	}
#repdiv a, #tagdiv a, #tagcloud a, #filediv a, #actiondiv a, #duediv a, #startdiv a {
	color:#173c60 !important;
	}
#repdiv a:hover, #tagdiv a:hover, #tagcloud a:hover, #filediv a:hover, #actiondiv a:hover, #duediv a:hover, #startdiv a:hover {
	color:#d59034 !important;
	background-color:#FFF !important;
	}
#repdiv {width:190px !important;}
#repdiv input[type=radio] {
	background-color:#FFF !important;
	padding-right:8px !important;
	}
#tagdiv {width:250px !important;}
#tagcloud {margin-top:5px !important; white-space:normal !important;}
#filediv {width:290px !important;}
#actiondiv {width:290px !important;}
#duediv {width:300px !important;}
#startdiv {width:300px !important;}

		
#startdiv, #duediv {font-family:Verdana,Arial, Sans-serif !important;}

		
#startdiv b, #duediv b {color:#b09671 !important;}

.reminder > #remspan > .dim {
	color:#7f8c99 !important;
	background-color:inherit !important;
	}
.reminder > #remspan > .dim:hover {
	color:#173c60 !important;
	text-decoration: underline !important;
	}
		
#duediv .dim, #startdiv .dim {
	color:#333 !important;
	background-color:#f4f3ed !important;
	}
#duediv .dim:hover, #startdiv .dim:hover {text-decoration: none !important;}

		
#protocal,#protocal2 {
	background-color:#fff !important;
	border:1px solid #b7bfc6 !important;
	}
#protocal_table th, #protocal_table td {
	border:1px solid #fff !important;
	background-color:#fff !important;
	font-weight:normal !important;
	}
#protocal_table th{ color:#b09671 !important;}
#protocal_table td.today{background-color:#abb7c1 !important;}
#protocal_table td.sel{background-color:#d6cab3 !important;}
#protocal_table td.day{background-color:#e8eaed !important;}
#protocal_table td.end{background-color:#d2d6db !important;}
#protocal_table td:hover{
	color:#000 !important;
	background-color:#d6cab3 !important;
	text-decoration: none !important;
	}
		
.quickdates {line-height:1.3em !important;}
#startdiv .quickdates a:hover, #duediv .quickdates a:hover{color:#b09671 !important;}

				

#left_side {
	padding:77px 0 0 0 !important;
	border: none !important;
	color: #333 !important;
	font-size: 13px !important;
	font-family: Proxima Nova, Verdana, Arial, Sans-serif !important;
    background-color: inherit !important;
    border: none !important;
	color: #333 !important;
	}
#left_side #viewby {
    background-image: none !important;
	background-color:#f7f6f2  !important;
 	margin-bottom:12px !important;
	padding: 8px 2px 8px 6px !important;
	color: #666 !important;
	border:1px solid #b7bfc6 !important;
	border-left: none !important;
	-moz-border-radius-topright:6px !important;
	border-top-right-radius:6px !important;
	-moz-border-radius-bottomright:6px !important;
	border-bottom-right-radius:6px !important;
	}
#viewby h3 {display: none !important;}

		
#left_side .viewby {padding: 0 0 2px !important;}
#left_side #viewby a {text-decoration: none !important;color: #333 !important;}
#left_side #viewby a:hover {text-decoration: none !important;color: #222 !important;}

		
#tabs {
	margin: 0 !important;
	padding: 2px 0 3px 0 !important;
	color:#999 !important;
	}
.tab a {color:#333 !important;}
.tabon a {color:#333 !important;}
.tab a:hover {color:#333 !important;}
.tabon a:hover{color:#333 !important;}

#tabs > .tab {
	color:#333 !important;
	background-color:#fff !important;
	border:1px solid #fff !important;
	border-left: none !important;
	-moz-border-radius-topright:6px !important;
	border-top-right-radius:6px !important;
	-moz-border-radius-bottomright:6px !important;
	border-bottom-right-radius:6px !important;
	padding:3px 8px 3px 10px !important;
	margin:2px 0 2px 0 !important;
	}
#tabs > .tab:hover {
	background-color:#f7f6f2 !important;
	color:#333 !important;
	background-color:#fdfdfa !important;
	border:1px solid #e8eaed !important;
	border-left: none !important;
	-moz-border-radius-topright:6px !important;
	border-top-right-radius:6px !important;
	-moz-border-radius-bottomright:6px !important;
	border-bottom-right-radius:6px !important;
	}
#tabs > .tabon {
	color:#333 !important;
	font-weight:bold !important;
	background-color:#f7f6f2 !important;
	border:1px solid #b7bfc6 !important;
	border-left: none !important;
	-moz-border-radius-topright:6px !important;
	border-top-right-radius:6px !important;
	-moz-border-radius-bottomright:6px !important;
	border-bottom-right-radius:6px !important;
	padding:3px 8px 3px 10px !important;
	margin:2px 0 2px 0 !important;
	}

		
#left_side .badge {
	font-weight:bold !important;
	border: 1px solid #b7bfc6 !important;
	padding:0 5px !important;
	background-color: #fff !important;
	color:#b7bfc6 !important;
	}

		
#left_side #tip {
	font-size: 13px !important;
	font-family: Proxima Nova, Verdana, Arial, Sans-serif !important;
    background-color: inherit !important;
    border: none !important;
	color: #333 !important;
	}

		
#left_side input, #left_side textarea {
	padding:2px !important;
    border: 1px solid #b7bfc6 !important;
	color: #777 !important;
	}

				

.viewbycal {margin:2px 0 2px 0 !important;}
.viewbycal th, .viewbycal td.pickw {background-color:#fff !important;}
.viewbycal th {font-size:10px !important;color:#777 !important;}
.viewbycal td.pickw {font-size:11px !important;color:#666 !important;}
.viewbycal td.pickw:hover {
	background-color:#93a4b2 !important;
	color:#333 !important;
	text-decoration:none !important;
	}
.viewbycal .cbcaltitle {font-size:11px !important;color:#777 !important;}
.viewbycal .cbcaltitle:hover {color:#444 !important;}
.viewbycal td {
	border-bottom:1px solid #fff !important;
	border-right:1px solid #fff !important;
	background-color:#efede6 !important;
	font-size:10px !important;
	color:#777 !important;
	}
.viewbycal td:hover {background-color:#efede6 !important;color:#333 !important;}
.viewbycal td.day {background-color:#d2d6db !important;color:#222 !important;}
.viewbycal td.today {color:#000 !important;background-color:#e8eaed !important;}
.viewbycal td.sel {background-color:#93a4b2 !important;}
#vbcal_prev,#vbcal_next {background-color:#fff !important;}
#vbcal_next:hover,#vbcal_prev:hover {background-color:#f7f6f2 !important;}

				
				

#notebookActions {
	background-color:#f7f6f2 !important;
	border-bottom:1px solid #b7bfc6 !important;
	}
#notebookTitle {
	background-color:#f7f6f2 !important;
	border-bottom:1px solid #b7bfc6 !important;
    color: #666 !important;
	padding:4px 10px !important;
	}
#notebook_details {
	border-left:1px solid #b7bfc6 !important;
	border-right:1px solid #b7bfc6 !important;
	}
		
#notebookText > .center dim {
	color:#000 !important;
	background-color: inherit !important;
	}
#notebookText > .center dim:hover {
	color: #000 !important;
	background-color: inherit !important;
	}

				

#footpad {background-color:#fff !important;}
#bottom {
	background-color:#fff !important;
    background-image: none !important;
	margin: 0 !important;
	padding: 18px 0 3px 192px !important;
    color: #93a4b2 !important;
	width: 100% !important;
    border: none !important;
    border-top: 1px solid #b7bfc6 !important;
	}
#bottom a {color:#79838c !important;}
#bottom a:hover {color:#173C60 !important;}