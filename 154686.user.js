﻿// ==UserScript==
// @name           Sitemap Widget for Blogger
// @namespace      http://www.hootoh.my
// @description    Show sitemap in blogger page
// @version        Edit version by Hootoh Tudia
// ==/UserScript==

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5(2b 2c==\'2d\'){V={};V.s=c.2e(\'2f\');V.s.1F=\'1a://1G.2g.1b/1G/2h/1H/1.3.2/1H.2i.2j\';c.2k(\'2l\')[0].2m(V.s)}4 6=E F();4 o=E F();4 r=E F();4 h=E F();4 e=E F();4 u=E F();4 9="G";4 1c=1I;4 2n=2o;4 v=\'\';4 1d=0;m 2p(W){m 1J(){5("b"1K W.1e){4 1f=W.1e.b.p;1d=1f;w=0;A(4 i=0;i<1f;i++){4 b=W.1e.b[i];4 1L=b.X.$t;4 1M=b.2q.$t.1N(0,10);4 1g;A(4 k=0;k<b.H.p;k++){5(b.H[k].1O==\'2r\'){1g=b.H[k].q;Y}}4 1h=\'\';A(4 k=0;k<b.H.p;k++){5(b.H[k].1O==\'2s\'){1h=b.H[k].q;Y}}4 I=\'\';5("1i"1K b){A(4 k=0;k<b.1i.p;k++){I=b.1i[k].2t;4 l=I.1P(\';\');5(l!=-1){I=I.1N(0,l)}e[w]=I;6[w]=1L;h[w]=1M;o[w]=1g;r[w]=1h;5(i<10){u[w]=1j}C{u[w]=1I};w=w+1}}}}}1J();9="G";P(9);1k();1c=1j;1Q();c.n(\'</D><a q="1a://2u.2v-2w.1b" 1R="2x-2y: 2z; 2A-2B:2C; 1S: #2D;">2E 2F 2G 2H</a>\')}m 2I(Q){1T(0,0);v=Q;J(v)}m 1U(){1k();v=\'\';J(v)}m P(9){m K(x,y){4 7=6[x];6[x]=6[y];6[y]=7;4 7=h[x];h[x]=h[y];h[y]=7;4 7=o[x];o[x]=o[y];o[y]=7;4 7=e[x];e[x]=e[y];e[y]=7;4 7=r[x];r[x]=r[y];r[y]=7;4 7=u[x];u[x]=u[y];u[y]=7}A(4 i=0;i<6.p-1;i++){A(4 j=i+1;j<6.p;j++){5(9=="G"){5(6[i]>6[j]){K(i,j)}}5(9=="1l"){5(6[i]<6[j]){K(i,j)}}5(9=="1m"){5(h[i]>h[j]){K(i,j)}}5(9=="Z"){5(h[i]<h[j]){K(i,j)}}5(9=="1V"){5(e[i]>e[j]){K(i,j)}}}}}m 1k(){9="1V";P(9);4 j=0;4 i=0;11(i<6.p){R=e[i];12=j;1W{j=j+1}11(e[j]==R);i=j;1n(12,j);5(i>6.p)Y}}m 1n(1X,1o){m 1Y(x,y){4 7=6[x];6[x]=6[y];6[y]=7;4 7=h[x];h[x]=h[y];h[y]=7;4 7=o[x];o[x]=o[y];o[y]=7;4 7=e[x];e[x]=e[y];e[y]=7;4 7=r[x];r[x]=r[y];r[y]=7;4 7=u[x];u[x]=u[y];u[y]=7}A(4 i=1X;i<1o-1;i++){A(4 j=i+1;j<1o;j++){5(6[i]>6[j]){1Y(i,j)}}}}m J(Q){4 S=0;4 d=\'\';4 1Z=\'2J 1p\';4 L=\'1q 1r 2K 2L 1s\';4 20=\'2M\';4 M=\'1q 1r 2N 2O 2P\';4 21=\'2Q\';4 1t=\'\';5(9=="G"){L+=\' (2R)\';M+=\' (1u 13)\'}5(9=="1l"){L+=\' (1v)\';M+=\' (1u 13)\'}5(9=="1m"){L+=\' (1v)\';M+=\' (1u 13)\'}5(9=="Z"){L+=\' (1v)\';M+=\' (2S 13)\'}5(v!=\'\'){1t=\'1q 1r 2T 2U\'}d+=\'<22>\';d+=\'<N>\';d+=\'<8 f="g-14-1w">\';d+=\'<a q="1x:23();" X="\'+L+\'">\'+1Z+\'</a>\';d+=\'</8>\';d+=\'<8 f="g-14-1y">\';d+=\'<a q="1x:24();" X="\'+M+\'">\'+20+\'</a>\';d+=\'</8>\';d+=\'<8 f="g-14-1z">\';d+=\'<a q="1x:1U();" X="\'+1t+\'">\'+21+\'</a>\';d+=\'</8>\';d+=\'<8 f="g-14-1A">\';d+=\'15 2V\';d+=\'</8>\';d+=\'</N>\';A(4 i=0;i<6.p;i++){5(Q==\'\'){d+=\'<N><8 f="g-b-1w"><a q="\'+o[i]+\'">\'+6[i]+\'</a></8><8 f="g-b-1y">\'+h[i]+\'</8><8 f="g-b-1z">\'+e[i]+\'</8><8 f="g-b-1A">\'+\'<a q="\'+r[i]+\'">\'+\'15\'+\'</a>\'+\'</8></N>\';S++}C{z=e[i].1P(Q);5(z!=-1){d+=\'<N><8 f="g-b-1w"><a q="\'+o[i]+\'">\'+6[i]+\'</a></8><8 f="g-b-1y">\'+h[i]+\'</8><8 f="g-b-1z">\'+e[i]+\'</8><8 f="g-b-1A">\'+\'<a q="\'+r[i]+\'">\'+\'15\'+\'</a>\'+\'</8></N>\';S++}}}d+=\'</22>\';5(S==6.p){4 16=\'<O f="g-25">1B 2W \'+6.p+\' 1p<D/></O>\'}C{4 16=\'<O f="g-25">1B \'+S+\' 2X 2Y 2Z \\\'\';16+=v+\'\\\' 30 \'+6.p+\' 31 1p<D/></O>\'}4 17=c.18("g");17.1C=16+d}m 1Q(){4 j=0;4 i=0;c.n(\'<B 32="33-34">\');11(i<6.p){R=e[i];c.n(\'<B f="35">\');c.n(\'<B f="1s-36">\'+R+\'</B>\');c.n(\'<B f="1s-T"><26>\');12=j;4 19=\'1D\';1W{5(19==\'1D\'){c.n(\'<1E f="27-T T-37">\');19=\'38\'}C{c.n(\'<1E f="27-T T-39">\');19=\'1D\'}c.n(\'<a q="\'+o[j]+\'">\'+6[j]+\'</a>\');5(u[j]==1j){c.n(\' - <28><29><O 1R="1S: 3a(3b, 0, 0);">3c !!</O> </29></28>\')};c.n(\'</1E>\');j=j+1}11(e[j]==R);i=j;c.n(\'</26></B></B>\');1n(12,j);5(i>6.p)Y}c.n(\'</B>\')}m 23(){5(9=="G"){9="1l"}C{9="G"}P(9);J(v)}m 24(){5(9=="Z"){9="1m"}C{9="Z"}P(9);J(v)}m 2a(){5(1c){J(v);4 U=c.18("U")}C{3d("3e 3f... 3g 3h 3i")}}m 3j(){4 17=c.18("g");17.1C=\'\';4 U=c.18("U");U.1C=\'<a q="#" 3k="1T(0,0); 2a(); 3l.3m(\'+"\'g-3n\',\'3o\');"+\'">¡í 1B 3p 3q</a> <3r 1F="1a://3s.3t.1b/3u.3v"/>\'}m 3w(){A(4 i=0;i<1d;i++){c.n(\'<D>\');c.n(\'3x 3y		  : \'+\'<a q="\'+o[i]+\'">\'+6[i]+\'</a>\'+\'<D>\');c.n(\'15 3z  : \'+\'<a q="\'+r[i]+\'">\'+6[i]+\'</a>\'+\'<D>\');c.n(\'<D>\')}}',62,222,'||||var|if|postTitle|temp|td|sortBy||entry|document|tocTable|postLabels|class|toc|postDate|||||function|write|postUrl|length|href|postMp3|||postBaru|postFilter|ii||||for|div|else|br|new|Array|titleasc|link|pll|displayToc|swapPosts|tocTool1|tocTool2|tr|span|sortPosts|filter|temp1|numDisplayed|list|toclink|cekjq|json|title|break|datenewest||while|firsti|first|header|Download|tocNote|tocdiv|getElementById|tempposition|http|com|tocLoaded|numberfeed|feed|numEntries|posturl|postmp3|category|true|sortlabel|titledesc|dateoldest|sortPosts2|lastvar|Artikel|Klik|untuk|judul|tocTool3|newest|ascending|col1|javascript|col2|col3|col4|Menampilkan|innerHTML|odd|li|src|ajax|jquery|false|getPostData|in|posttitle|postdate|substring|rel|lastIndexOf|displayToc2|style|color|scroll|allPosts|orderlabel|do|firstvar|swapPosts2|tocHead1|tocHead2|tocHead3|table|toggleTitleSort|toggleDateSort|note|ol|data|strong|em|showToc|typeof|jQuery|undefined|createElement|script|googleapis|libs|min|js|getElementsByTagName|head|appendChild|numChars|250|loadtoc|published|alternate|enclosure|term|www|hootoh|blogspot|font|size|8px|text|decoration|none|616469|Widget|by|Hootoh|Tudia|filterPosts|Judul|sortir|berdasarkan|Tanggal|Sortir|bedasarkan|tanggal|Kategori|descending|oldest|menampilkan|semua|MP3|Semua|artikel|dengan|kategori|dari|Total|id|daftar|isi|sublabel|label|ganjil|even|genap|rgb|255|New|alert|Just|wait|TOC|is|loading|hideToc|onclick|Effect|toggle|result|blind|Daftar|Isi|img|radiorodja|googlepages|new_1|gif|looptemp2|Post|Link|mp3'.split('|'),0,{}))