// ==UserScript==
// @name         fanfou filter for chrome
// @namespace    http://fanfou.com/*
// @include      http://fanfou.com/*
// @exclude        http://fanfou.com/mentions*
// @author       Rex Zhasm (http://fanfou.com/zhasm)
// @version        0.0.0.7
// ==/UserScript==


function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://code.jquery.com/jquery-1.4.4.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}



// the guts of this userscript
function main() {
    var g_keywords="轮功, ^@, 绑定手机"; // you may add your own ',' separeted keywords;
    var g_sources="街旁, 开开Kai";    
    var g_case=0;           //set this to 1 for case sensitive search. default 0, case in-sensitive;

    function str2regex(s, g_case)
    {
        //'abc,xyz'=> /abc|xyz/i

        var s=s.replace(/\s*,\s*/g, '|'); 
        s=s.trim();
        s=s.replace(/[\|,]+$/m, '');
        if (!s)
        {
            return false;
        }
        if (g_case==0)  //default 0
        {
            s="/"+s+"/im";
            return eval(s); 
        }
        else
        {
            return eval("/"+s+"/"); 
        }
    }

    function hideItem(item)
    {
        //item is a child
        var parent=item.parent();
        var sibling=parent.children();
        parent.click(function () {
            var style=parent.attr('style');
            if (style)
            {
                parent.attr("style","");    //reset style to default;
                sibling.fadeIn('slow');     //show('slow'); 
            }
            else
            {
                sibling.hide();
                parent.attr("style", "min-height:0px; height:5px"); 
            }
        });
        sibling.hide();
        parent.attr("style", "min-height:0px; height:5px"); 

    }

    function filter(k, s)
    {
        //filter content that is matched regex k
        //and source that is matched by regex s
        if (s)
        {
            $(".method").each(function(){
                var content=$(this).html();
                var result=content.search(s);
                result=parseInt(result);
                if ( result != -1 ) //-1 means not found; != -1 means found
                {
                    hideItem($(this).parent());
                }
            });
        }

        if (k)
        {
            $(".content").each(function(){
                var content=$(this).html();
                var result=content.search(k);
                result=parseInt(result);
                if ( result !=-1 ) // -1 means not found
                {
                    hideItem($(this));
                }
            });
        } 
    }



//repalce the search with advanced search:
    $("li a[href='http://fanfou.com/search']").each(function(){
        $(this).html("高级搜索"); 
        $(this).attr("href", "http://fanfou.com/advancedsearch");
    });

    //get background image
    //global function
    var x=$(".vcard li:eq(1)").after('<li>背景：<a id="xbgimg" title="点击查看本页背景图" target="_blank" class="url" href="">点击查看</a>');
    $("#xbgimg").click(function(){
        var url=$("body").css("background-image");
        url=url.replace(/^url|[('")]/gi,"");
        window.open(url);
        return false;
    });

//  page spacific function
    var path=window.location.pathname; 

    if (path.search("/home") !==-1)
    {
        var kr=str2regex(g_keywords, g_case);
        var sr=str2regex(g_sources, g_case);

        //when loading the page, filter:
        var kr=str2regex(g_keywords);
        var sr=str2regex(g_sources);
        filter(kr, sr);
        $("#pagination-more, #timeline-notification").click(function(){
                setTimeout(function(){
                    filter(kr, sr);
                }, 3000);
            filter(kr, sr);
        });  

    }

    else if (path.search("advancedsearch") !==-1)
    {
        $("#pagination-more").click(function(){ 
                var href=$(this).attr("href");
                href=href.replace("/search","/advancedsearch");
                window.location.href=href;
        });

        $(".act #keyword + .formbutton").click(function(){
                var keyword=$("#keyword").val();
                var url="http://fanfou.com/advancedsearch?q="+keyword; 
                window.location.href=url;
                return false; 
        }); 
    }
    
}

// load jQuery and execute the main function
addJQuery(main);

