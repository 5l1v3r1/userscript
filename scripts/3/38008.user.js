// ==UserScript==
// @name           Download YouTube Videos as MP4
// @description    Adds an option to download YouTube videos.
// @namespace      http://googlesystem.blogspot.com
// @include        http://*.youtube.com/watch?*
// @include        http://youtube.com/watch?*
// @version        0.3
// ==/UserScript==

(function () {

  if (document.getElementById('download-youtube-video')) return;

  var video_id = null;
  var video_hash = null;
  var video_player = document.getElementById('movie_player');
  
  if (video_player) {
    var flash_variables = video_player.attributes.getNamedItem('flashvars');  
    if (flash_variables) {
      var flash_values = flash_variables.value;
      if (flash_values) {
        var video_id_match = flash_values.match(/video_id=([^(\&|$)]*)/);
        if (video_id_match!=null) video_id = video_id_match[1];
        var video_hash_match = flash_values.match(/t=([^(\&|$)]*)/);
        if (video_hash_match!=null) video_hash = video_hash_match[1];        
      }
    }
  }
  
  if (video_id==null || video_hash==null) {
    var args = unsafeWindow.swfArgs;
    if (args) {
      video_id = args['video_id'];
      video_hash = args['t'];  
    }
  }
  
  if (video_id==null || video_hash==null) return;
 
   var yt_mp4_path ='http://www.youtube.com/get_video?fmt=18&amp;video_id='+video_id+'&amp;t='+video_hash; 
   var div_embed = document.getElementById('watch-embed-div');
   if (div_embed) {
      div_embed.innerHTML = div_embed.innerHTML + '<br /> <span id=\'download-youtube-video\'> <a href=\''+yt_mp4_path+'\'>Download as MP4</a> (right-click and select <i>Save '+ (navigator.appName=='Microsoft Internet Explorer'?'target':'link') +' as</i>)</span>';
  }

	 var yth_mp4_path ='http://www.youtube.com/get_video?fmt=22&amp;video_id='+video_id+'&amp;t='+video_hash; 
   var div_hembed = document.getElementById('watch-embed-div');
   if (div_embed) {
      div_embed.innerHTML = div_embed.innerHTML + '<br /> <span id=\'download-youtube-video\'> <a href=\''+yth_mp4_path+'\'>Download as 720p HD MP4</a> (right-click and select <i>Save '+ (navigator.appName=='Microsoft Internet Explorer'?'target':'link') +' as</i>)</span>';
  }


  
})();