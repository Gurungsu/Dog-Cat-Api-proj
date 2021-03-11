!function(){var e,t={};e=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}};var n,r,o,i=!1;function a(e){return"[object Array]"===o.call(e)}function s(e){return void 0===e}function u(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===o.call(e)}function f(e){return"undefined"!=typeof FormData&&e instanceof FormData}function d(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function l(e){return"string"==typeof e}function p(e){return"number"==typeof e}function h(e){return null!==e&&"object"==typeof e}function m(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function g(e){return"[object Date]"===o.call(e)}function v(e){return"[object File]"===o.call(e)}function y(e){return"[object Blob]"===o.call(e)}function w(e){return"[object Function]"===o.call(e)}function b(e){return h(e)&&w(e.pipe)}function E(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function T(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function C(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function S(){var e={};function t(t,n){m(e[n])&&m(t)?e[n]=S(e[n],t):m(t)?e[n]=S({},t):a(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)C(arguments[n],t);return e}function j(e,t,n){return C(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e}function A(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}function O(){return i||(i=!0,n={},r=e,o=Object.prototype.toString,n={isArray:a,isArrayBuffer:c,isBuffer:u,isFormData:f,isArrayBufferView:d,isString:l,isNumber:p,isObject:h,isPlainObject:m,isUndefined:s,isDate:g,isFile:v,isBlob:y,isFunction:w,isStream:b,isURLSearchParams:E,isStandardBrowserEnv:x,forEach:C,merge:S,extend:j,trim:T,stripBOM:A}),n}var R,N,L=O(),U={},B=O(),k=!1;function P(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function q(){return k||(k=!0,R={},N=O(),R=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(N.isURLSearchParams(t))r=t.toString();else{var o=[];N.forEach(t,(function(e,t){null!=e&&(N.isArray(e)?t+="[]":e=[e],N.forEach(e,(function(e){N.isDate(e)?e=e.toISOString():N.isObject(e)&&(e=JSON.stringify(e)),o.push(P(t)+"="+P(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e}),R}var D=q(),F={},M=O();function H(){this.handlers=[]}H.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},H.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},H.prototype.forEach=function(e){M.forEach(this.handlers,(function(t){null!==t&&e(t)}))},F=H;var I,_,z=O(),X=O();_=function(e,t,n){return X.forEach(n,(function(n){e=n(e,t)})),e};var J;J=function(e){return!(!e||!e.__CANCEL__)};var V,$,G,K,Q=!1,W=$={};function Y(){throw new Error("setTimeout has not been defined")}function Z(){throw new Error("clearTimeout has not been defined")}function ee(e){if(G===setTimeout)return setTimeout(e,0);if((G===Y||!G)&&setTimeout)return G=setTimeout,setTimeout(e,0);try{return G(e,0)}catch(t){try{return G.call(null,e,0)}catch(t){return G.call(this,e,0)}}}!function(){try{G="function"==typeof setTimeout?setTimeout:Y}catch(e){G=Y}try{K="function"==typeof clearTimeout?clearTimeout:Z}catch(e){K=Z}}();var te,ne=[],re=!1,oe=-1;function ie(){re&&te&&(re=!1,te.length?ne=te.concat(ne):oe=-1,ne.length&&ae())}function ae(){if(!re){var e=ee(ie);re=!0;for(var t=ne.length;t;){for(te=ne,ne=[];++oe<t;)te&&te[oe].run();oe=-1,t=ne.length}te=null,re=!1,function(e){if(K===clearTimeout)return clearTimeout(e);if((K===Z||!K)&&clearTimeout)return K=clearTimeout,clearTimeout(e);try{K(e)}catch(t){try{return K.call(null,e)}catch(t){return K.call(this,e)}}}(e)}}function se(e,t){this.fun=e,this.array=t}function ue(){}function ce(){return Q||(Q=!0,V={},V=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}),V}W.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];ne.push(new se(e,t)),1!==ne.length||re||ee(ae)},se.prototype.run=function(){this.fun.apply(null,this.array)},W.title="browser",W.browser=!0,W.env={},W.argv=[],W.version="",W.versions={},W.on=ue,W.addListener=ue,W.once=ue,W.off=ue,W.removeListener=ue,W.removeAllListeners=ue,W.emit=ue,W.prependListener=ue,W.prependOnceListener=ue,W.listeners=function(e){return[]},W.binding=function(e){throw new Error("process.binding is not supported")},W.cwd=function(){return"/"},W.chdir=function(e){throw new Error("process.chdir is not supported")},W.umask=function(){return 0};var fe,de=O();fe=function(e,t){de.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))};var le,pe,he=!1;function me(){return he||(he=!0,le={},pe=ce(),le=function(e,t,n,r,o){var i=new Error(e);return pe(i,t,n,r,o)}),le}var ge,ve,ye=!1;function we(){return ye||(ye=!0,ge={},ve=me(),ge=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(ve("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}),ge}var be,Ee,Te=!1;function xe(){return Te||(Te=!0,be={},Ee=O(),be=Ee.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),Ee.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),Ee.isString(r)&&a.push("path="+r),Ee.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}),be}var Ce,Se=!1;function je(){return Se||(Se=!0,Ce={},Ce=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}),Ce}var Ae,Oe=!1;function Re(){return Oe||(Oe=!0,Ae={},Ae=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}),Ae}var Ne,Le,Ue,Be=!1;function ke(){return Be||(Be=!0,Ne={},Le=je(),Ue=Re(),Ne=function(e,t){return e&&!Le(t)?Ue(e,t):t}),Ne}var Pe,qe,De,Fe=!1;function Me(){return Fe||(Fe=!0,Pe={},qe=O(),De=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Pe=function(e){var t,n,r,o={};return e?(qe.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=qe.trim(e.substr(0,r)).toLowerCase(),n=qe.trim(e.substr(r+1)),t){if(o[t]&&De.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}),Pe}var He,Ie,_e=!1;function ze(){return _e||(_e=!0,He={},Ie=O(),He=Ie.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=Ie.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}),He}var Xe,Je,Ve,$e,Ge,Ke,Qe,We,Ye,Ze=!1;function et(){return Ze||(Ze=!0,Xe={},Je=O(),Ve=we(),$e=xe(),Ge=q(),Ke=ke(),Qe=Me(),We=ze(),Ye=me(),Xe=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;Je.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",s=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(a+":"+s)}var u=Ke(e.baseURL,e.url);if(i.open(e.method.toUpperCase(),Ge(u,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in i?Qe(i.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:r,config:e,request:i};Ve(t,n,o),i=null}},i.onabort=function(){i&&(n(Ye("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(Ye("Network Error",e,null,i)),i=null},i.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(Ye(t,e,"ECONNABORTED",i)),i=null},Je.isStandardBrowserEnv()){var c=(e.withCredentials||We(u))&&e.xsrfCookieName?$e.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}if("setRequestHeader"in i&&Je.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)})),Je.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){i&&(i.abort(),n(e),i=null)})),r||(r=null),i.send(r)}))}),Xe}var tt,nt=O(),rt={"Content-Type":"application/x-www-form-urlencoded"};function ot(e,t){!nt.isUndefined(e)&&nt.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var it,at={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==$&&"[object process]"===Object.prototype.toString.call($))&&(it=et()),it),transformRequest:[function(e,t){return fe(t,"Accept"),fe(t,"Content-Type"),nt.isFormData(e)||nt.isArrayBuffer(e)||nt.isBuffer(e)||nt.isStream(e)||nt.isFile(e)||nt.isBlob(e)?e:nt.isArrayBufferView(e)?e.buffer:nt.isURLSearchParams(e)?(ot(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):nt.isObject(e)?(ot(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};function st(e){e.cancelToken&&e.cancelToken.throwIfRequested()}at.headers={common:{Accept:"application/json, text/plain, */*"}},nt.forEach(["delete","get","head"],(function(e){at.headers[e]={}})),nt.forEach(["post","put","patch"],(function(e){at.headers[e]=nt.merge(rt)})),tt=at,I=function(e){return st(e),e.headers=e.headers||{},e.data=_(e.data,e.headers,e.transformRequest),e.headers=z.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),z.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||tt.adapter)(e).then((function(t){return st(e),t.data=_(t.data,t.headers,e.transformResponse),t}),(function(t){return J(t)||(st(e),t&&t.response&&(t.response.data=_(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))};var ut,ct=O();function ft(e){this.defaults=e,this.interceptors={request:new F,response:new F}}function dt(t){var n=new U(t),r=e(U.prototype.request,n);return L.extend(r,U.prototype,n),L.extend(r,n),r}ut=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return ct.isPlainObject(e)&&ct.isPlainObject(t)?ct.merge(e,t):ct.isPlainObject(t)?ct.merge({},t):ct.isArray(t)?t.slice():t}function u(r){ct.isUndefined(t[r])?ct.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(e[r],t[r])}ct.forEach(r,(function(e){ct.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),ct.forEach(o,u),ct.forEach(i,(function(r){ct.isUndefined(t[r])?ct.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(void 0,t[r])})),ct.forEach(a,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var c=r.concat(o).concat(i).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return ct.forEach(f,u),n},ft.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=ut(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[I,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},ft.prototype.getUri=function(e){return e=ut(this.defaults,e),D(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},B.forEach(["delete","get","head","options"],(function(e){ft.prototype[e]=function(t,n){return this.request(ut(n||{},{method:e,url:t,data:(n||{}).data}))}})),B.forEach(["post","put","patch"],(function(e){ft.prototype[e]=function(t,n,r){return this.request(ut(r||{},{method:e,url:t,data:n}))}})),U=ft;var lt=dt(tt);lt.Axios=U,lt.create=function(e){return dt(ut(lt.defaults,e))};var pt={};function ht(e){this.message=e}ht.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},ht.prototype.__CANCEL__=!0,pt=ht,lt.Cancel=pt;var mt;function gt(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new pt(e),t(n.reason))}))}gt.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},gt.source=function(){var e;return{token:new gt((function(t){e=t})),cancel:e}},mt=gt,lt.CancelToken=mt,lt.isCancel=J,lt.all=function(e){return Promise.all(e)};var vt;vt=function(e){return function(t){return e.apply(null,t)}},lt.spread=vt;var yt;yt=function(e){return"object"==typeof e&&!0===e.isAxiosError},lt.isAxiosError=yt;var wt=lt;(t=lt).default=wt;var bt,Et=(bt=t)&&bt.__esModule?bt.default:bt;Et.get("https://dog.ceo/api/breeds/image/random/3").then((function(e){return e.data})).then((function(e){console.log(e),console.log(e.message)}));var Tt=Number(void 0);isNaN(Tt)&&(Tt=2);Et.get("https://api.thecatapi.com/v1/breeds",{params:{limit:Tt}}).then((function(e){return e.data})).then((function(e){return e.map((function(e){return{name:e.name,description:e.description,image:e.image}}))})).then((function(e){var t;t=document.querySelector("#progOutput table > tbody"),e.forEach((function(e){var n,r=document.createElement("img");r.setAttribute("src",e.image.url);var o=document.createElement("tr"),i=document.createElement("td"),a=document.createElement("td"),s=document.createElement("td");s.appendChild(r),o.appendChild(s),o.appendChild(a),o.appendChild(i),i.appendChild(document.createTextNode(e.name)),a.appendChild(document.createTextNode(e.description)),null===(n=t)||void 0===n||n.appendChild(o)}))}));var xt=document.getElementById("DogSelector"),Ct=document.querySelector(".list");function St(){var e=xt.options[xt.selectedIndex].value,t="https://dog.ceo/api/breed/".concat(e,"/images");fetch(t).then(jt).then((function(e){return e.json()})).then((function(e){return function(e){var t=e[Math.floor(Math.random()*e.length)+1];listImageContainer.innerHTML='<img src="'.concat(t,'" alt="').concat(function(e){return At(/https:\/\/images\.dog\.ceo\/breeds\/(\w+-?\w+)\/\w+\.\w+/g.exec(e)[1])}(e),'"/>')}(e.message)})).catch((function(e){return console.log(e)}))}function jt(e){return e.ok?Promise.resolve(e):Promise.reject(new Error(e.statusText))}function At(e){return"germanshepherd"===e?"German Shepherd":"mexicanhairless"===e?"Mexican Hairless":function(e){return e.replace(/\-/g," ").split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}(e)}addEventListener("load",(function(){fetch("https://dog.ceo/api/breeds/list/all").then(jt).then((function(e){return e.json()})).then((function(e){return function(e){var t="";Object.keys(e).forEach((function(e){return t+='<option value="'.concat(e,'">').concat(At(e),"</option>")})),document.getElementById("DogSelector").innerHTML=t}(e.message)})).catch((function(e){return function(e){throw new Error("Function not implemented.")}()}))})),addEventListener("load",xt),xt.addEventListener("change",St),null==Ct||Ct.addEventListener("click",St)}();
//# sourceMappingURL=main.5b64c045.js.map
