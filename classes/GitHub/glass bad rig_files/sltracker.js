var sltracker=function(c){function p(a){r.init();c.$=a;t();for(a=0;a<c.methods.length;a++)c[c.methods[a]]=u[c.methods[a]];if(c._queue)for(a=0;a<c._queue.length;a++){var b=c._queue[a],f=b[0];b.shift();c[f].apply(null,b)}}function v(a,b){var f=document.createElement("script");f.type="text/javascript";f.readyState?f.onreadystatechange=function(){if("loaded"==f.readyState||"complete"==f.readyState)f.onreadystatechange=null,b()}:f.onload=function(){b()};f.src=a;document.getElementsByTagName("head")[0].appendChild(f)}
function w(a){v("https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",function(){var b=$.noConflict(!0);a(b)})}function x(a,b){c.$.ajax({method:"POST",url:y+a,dataType:"jsonp",data:b,success:function(a,b,c){console.log(a)},error:function(a,b,c){}})}function g(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function z(a){a=(new RegExp("[\\?&]"+a+"=([^&#]*)")).exec(window.location.search);return null==a?"":decodeURIComponent(a[1].replace(/\+/g," "))}function t(){(function(a){function b(a){a=
l.json?JSON.stringify(a):String(a);return l.raw?a:encodeURIComponent(a)}function c(b,f){var e;if(l.raw)e=b;else a:{var h=b;0===h.indexOf('"')&&(h=h.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{h=decodeURIComponent(h.replace(d," "));e=l.json?JSON.parse(h):h;break a}catch(g){}e=void 0}return a.isFunction(f)?f(e):e}var d=/\+/g,l=a.cookie=function(d,g,e){if(1<arguments.length&&!a.isFunction(g)){e=a.extend({},l.defaults,e);if("number"===typeof e.expires){var h=e.expires,k=e.expires=new Date;
k.setMilliseconds(k.getMilliseconds()+864E5*h)}return document.cookie=[l.raw?d:encodeURIComponent(d),"=",b(g),e.expires?"; expires="+e.expires.toUTCString():"",e.path?"; path="+e.path:"",e.domain?"; domain="+e.domain:"",e.secure?"; secure":""].join("")}for(var h=d?void 0:{},k=document.cookie?document.cookie.split("; "):[],q=0,p=k.length;q<p;q++){var m=k[q].split("="),n;n=m.shift();n=l.raw?n:decodeURIComponent(n);m=m.join("=");if(d===n){h=c(m,g);break}d||void 0===(m=c(m))||(h[n]=m)}return h};l.defaults=
{};a.removeCookie=function(b,c){a.cookie(b,"",a.extend({},c,{expires:-1}));return!a.cookie(b)}})(c.$)}var k=null,u={identify:function(a){k=a},track:function(a,b){if(void 0==window.sltracker_settings.sl_user_id||null==window.sltracker_settings.sl_user_id||""==window.sltracker_settings.sl_user_id)return!1;void 0==b&&(b={});void 0==a&&(a="track");if(null==d){var f=window.ga||!1,d=null;!1!==(window._gaq&&"function"===typeof window._gaq._getAsyncTracker||!1)?d=_gaq._getAsyncTracker()._getAccount():!1!==
f?ga(function(a){d=a.get("clientId")}):""!=c.$.cookie("sltracker_fp")&&void 0!=c.$.cookie("sltracker_fp")?d=c.$.cookie("sltracker_fp"):(d=(g()+g()+"-"+g()+"-4"+g().substr(0,3)+"-"+g()+"-"+g()+g()+g()).toLowerCase(),c.$.cookie("sltracker_fp",d,{expires:30}))}url_full=window.location.href;url_hostname=window.location.hostname;url_protocol=window.location.protocol;url_path=window.location.pathname;sl_code=z("slid");""!=sl_code?c.$.cookie("sltracker_data",sl_code,{expires:30}):sl_code=c.$.cookie("sltracker_data");
null==k?(k={},k={GUID:d}):k.GUID=d;k.sl_code=sl_code;b.url={full:url_full,hostname:url_hostname,protocol:url_protocol,path:url_path};x("/track.php",{sl_user_id:window.sltracker_settings.sl_user_id,key:a,identify:k,data:b})}},y="https://api.sendloop.com/t",r={init:function(){c.browser=this.searchString(this.dataBrowser)||"An unknown browser";c.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";c.OS=this.searchString(this.dataOS)||"an unknown OS"},
searchString:function(a){for(var b=0;b<a.length;b++){var c=a[b].string,d=a[b].prop;this.versionSearchString=a[b].versionSearch||a[b].identity;if(c){if(-1!=c.indexOf(a[b].subString))return a[b].identity}else if(d)return a[b].identity}},searchVersion:function(a){var b=a.indexOf(this.versionSearchString);if(-1!=b)return parseFloat(a.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",
versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},
{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",
identity:"Linux"}]};"function"==typeof jQuery&&null!==jQuery.fn.jquery.match(/^1\.9\.[\d]$/im)?p(jQuery):w(function(a){p(a)});return c}(window.__sndlp||{});