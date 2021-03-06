// ==UserScript==
// @name  2ch RSS Icon
// @namespace  http://d.hatena.ne.jp/youpy/
// @include  http://*.2ch.net/test/read.cgi/*
// @exclude  http://b.hatena.ne.jp/*
// ==/UserScript==

(function () {
 var a = document.createElement('a');
 a.href = location.href.replace(/^http:\/\/(\w+\.2ch\.net\/)test\/read\.cgi\/(.+)$/, "http://rss.s2ch.net/test/-/$1$2");
 var image = document.createElement('img'); 
 image.src = 'data:image/png;base64,'+
    'iVBORw0KGgoAAAANSUhEUgAAACQAAAAOCAMAAABw6U76AAAAA3NCSVQICAjb4U/gAAADAFBMVEX/'+
    '///18e346N3/5tXv5Nz33czw2svo18z20rvw0Lv/yKTmzLrwxqrgyrreybrowqrwvJnfv6nvsYj0'+
    'qXflrYjxqHfTsJnlo3fVp4f/mlfgoXfunGbeoHbWnXbjmGbFoIfflma7nIfJmHffjFXsh0TmhUS6'+
    'kXe5kXf0gDPUiFXufjPfgkTNhVX2dyLHglXxdSLSfUTkdy6zhWXedzO+f1WqgWa3fFT/ZgDScjPd'+
    'bSLraBH3YwCseFXFbTPvYACkdFTsXgDmXADiXQW4aDPGYyLUXxGzZjPeWQDNXBGhaUTZVwDGWRGm'+
    'YTPTVADPUwDHUACyURGUWjPFSgC7SwCcUyK1SACsRQCbSBGoQwCNQxGcPgCZPQCTOwB9MwI/GgEh'+
    'DgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJnr9zAAABHUlEQVR4nIWRWVODMBSFL5XWJVbc60K1'+
    '7gvuVYNGUuIWRQMtSNG6/f9/YQLTaRkfel7Omcw3uWfuhaGxgTqFRaxElHAWKaVp7Dr+zqDdum3b'+
    'T4IRTLZM8+BeUHK9YladgJEeBKnKbX5cSNOdmE4dRW4/dPG4p8FZWICdTmAZzgboH/FDzQhyUCti'+
    'o7AdAawlgcfZHOjPseDcJfmfTIBEjMgZ+nxT7KthE+fRv05aK3bJpKZSIjZL6mk1zndaB2hIiPGr'+
    'mibncs4tA+CL5zuNg/YWFJ3Q80pwUzVDn1ugf+agV58WQW/LRkiH4feKXEgZ4DK87UEzSy8MH1bM'+
    'k/osQlNHEafLBkILTZ/2QTi7AFVijFGVpbvds3R+Bur3DxzBWgFMxGSIAAAAAElFTkSuQmCC';
 image.width = 36;
 image.height = 14;
 a.appendChild(image);
 document.body.appendChild(a);
})();
