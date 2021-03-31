var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};/* eslint-disable no-unused-vars */// Check view width, add navbar height as offset if on desktop
function checkWidth(){var mq=window.matchMedia('(max-width: 1199px)');return mq.matches?50:(document.getElementById('navigation')||'').scrollHeight}function toggleMobileMenu(){var toggleButton=document.getElementById('toggle-menu');if(!toggleButton)return;var navbar=document.getElementById('navigation');var navbar_item=document.getElementsByClassName('navbar-collapse')[0];var el_language_dropdown=document.getElementsByClassName('language-dropdown')[0];toggleButton.addEventListener('click',function(e){e.stopPropagation();navbar.classList.toggle('expand');navbar_item.classList.toggle('expand');if(el_language_dropdown&&/show/.test(el_language_dropdown.classList)){toggleAllSiblings(el_language_dropdown.parentNode,filterById,'invisible');el_language_dropdown.classList.remove('show')}})}function collapseMenu(){var navbar=document.getElementById('navigation');var navbar_item=document.getElementsByClassName('navbar-collapse')[0];if(navbar&&navbar_item){navbar.classList.remove('expand');navbar_item.classList.remove('expand')}}// scrollTo function with animation
// - Gist reference: https://gist.github.com/andjosh/6764939
function scrollTo(to){var duration=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1000;if(typeof to==='undefined')return;var start=window.pageYOffset;var change=to-start;var increment=20;var currentTime=0;var animateScroll=function animateScroll(){currentTime+=increment;var val=Math.easeInOutQuad(currentTime,start,change,duration);document.body.scrollTop=val;document.documentElement.scrollTop=val;if(currentTime<duration){setTimeout(animateScroll,increment)}};animateScroll()}Math.easeInOutQuad=function(current_time,start_value,change_in_value,duration){var curr_time=current_time;curr_time/=duration/2;if(curr_time<1)return change_in_value/2*curr_time*curr_time+start_value;curr_time--;return-change_in_value/2*(curr_time*(curr_time-2)-1)+start_value};function getParamValue(url,key){var regex=new RegExp('[?&]'+key+'(=([^&#]*)|&|#|$)');var results=regex.exec(url);if(!results||!results[2])return'';return decodeURIComponent(results[2].replace(/\+/g,' '))}function allLanguages(){// TODO: add 'de' after 'en' in the array below to enable German language
// TODO: add 'th' after 'ru' in the array below to enable Thai language
return['en','es','fr','id','it','ko','pl','pt','ru','vi','zh_cn','zh_tw','ach']}function getLanguage(){var language=void 0;window.location.href.toLowerCase().split('/').slice(3).forEach(function(l){// forEach() has more browser compatibility than 'Array.find()'
if(!language&&allLanguages().indexOf(l)>=0)language=l});return language||'en'}function urlFor(path){var lang=getLanguage();var url=window.location.href;return''+url.substring(0,url.indexOf('/'+lang+'/')+lang.length+2)+path+'.html'}function wsConnect(){var config_server=localStorage.getItem('config.server_url');var server_url=config_server||'frontend.binaryws.com';endpointNotification(config_server);return new WebSocket('wss://'+server_url+'/websockets/v3?app_id='+getAppId()+'&l='+getLanguage())}function isBinaryApp(){return /desktop-app/i.test(window.location.href)||localStorage.getItem('config.is_desktop_app')}function getAppId(){if(localStorage.getItem('config.app_id')){return localStorage.getItem('config.app_id')}if(isBinaryApp()){return'14473'}if(/staging\.binary\.com/i.test(window.location.hostname)){return'1098'}return'1'}function wsSend(ws,request){if(ws&&request&&(typeof request==='undefined'?'undefined':_typeof(request))==='object'){ws.send(JSON.stringify(request))}}function endpointNotification(config_server){if(config_server&&config_server.length>0&&!document.getElementById('end_note')){var el_end_note=document.createElement('div');el_end_note.setAttribute('id','end_note');el_end_note.innerHTML='The server <a href="'+urlFor('endpoint')+'">endpoint</a> is: '+config_server;document.body.appendChild(el_end_note);document.body.style['padding-bottom']=el_end_note.offsetHeight+'px'}}// NodeList foreach polyfill
if(window.NodeList&&!NodeList.prototype.forEach){NodeList.prototype.forEach=function(callback){var thisArg=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;for(var i=0;i<this.length;i++){callback.call(thisArg,this[i],i,this)}}}function filterById(elem){return!/^(language)$/i.test(elem.id)}function toggleAllSiblings(elem,filter,class_name){var el=elem.parentNode.firstChild;do{if(el.nodeType!==3&&(!filter||filter(el))){el.classList.toggle(class_name)}el=el.nextSibling}while(el)}function setupCrowdin(){var isInContextEnvironment=function isInContextEnvironment(){return /ach/i.test(getLanguage())};if(isInContextEnvironment()){var el_lang=document.getElementById('language');if(el_lang)el_lang.style.display='none';/* eslint-disable no-underscore-dangle */window._jipt=[];window._jipt.push(['project','dsmarttrader']);/* eslint-enable no-underscore-dangle */if(document.body){var crowdinScript=document.createElement('script');crowdinScript.setAttribute('src',document.location.protocol+'//cdn.crowdin.com/jipt/jipt.js');crowdinScript.setAttribute('type','text/javascript');document.body.appendChild(crowdinScript)}}}function commonOnload(){setupCrowdin();dataLayer.push({event:'page_load'})}// displays notification on outdated browsers
function outdatedBrowser(){var src='//browser-update.org/update.min.js';if(document.querySelector('script[src*="'+src+'"]'))return;var el_message=document.getElementById('outdated_browser_message');var message=el_message?el_message.innerHTML:'Your web browser ({brow_name}) is out of date and may affect your trading experience. Proceed at your own risk. <a href="https://browsehappy.com/" target="_blank">Update browser</a>';window.$buoop={vs:{i:11,f:-4,o:-4,s:9,c:-4},api:4,url:'https://browsehappy.com/',noclose:true,// Do not show the 'ignore' button to close the notification
text:message,reminder:0// show all the time
};if(document.body){var script=document.createElement('script');script.setAttribute('src',src);document.body.appendChild(script)}}window.addEventListener('load',function(){// being called before js code of each page
outdatedBrowser()});
//# sourceMappingURL=common.js.map
