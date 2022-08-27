import{P as Da,R as Na,S as At,U as ka,V as ba,W as Ra,X as pi,Y as _a,Z as fe,$ as xa,a0 as La,a1 as Ma,a2 as Va,a3 as Oa,a4 as Fa,a5 as Pa}from"./index.dd2daae5.js";var Ua=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},m,ms=ms||{},T=Ua||self;function Je(){}function Hn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function De(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function $a(e){return Object.prototype.hasOwnProperty.call(e,Fn)&&e[Fn]||(e[Fn]=++Ba)}var Fn="closure_uid_"+(1e9*Math.random()>>>0),Ba=0;function qa(e,t,n){return e.call.apply(e.bind,arguments)}function ja(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function K(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?K=qa:K=ja,K.apply(null,arguments)}function qe(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Q(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function vt(){this.s=this.s,this.o=this.o}var Ka=0;vt.prototype.s=!1;vt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ka!=0)&&$a(this)};vt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},dr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function Ga(e){t:{var t=Ou;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function mi(e){return Array.prototype.concat.apply([],arguments)}function ys(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Ze(e){return/^[\s\xa0]*$/.test(e)}var yi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Y(e,t){return e.indexOf(t)!=-1}function Pn(e,t){return e<t?-1:e>t?1:0}var J;t:{var vi=T.navigator;if(vi){var wi=vi.userAgent;if(wi){J=wi;break t}}J=""}function vs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function fr(e){const t={};for(const n in e)t[n]=e[n];return t}var Ei="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Ei.length;r++)n=Ei[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ws(e){return ws[" "](e),e}ws[" "]=Je;function za(e){var t=Wa;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Qa=Y(J,"Opera"),Ut=Y(J,"Trident")||Y(J,"MSIE"),pr=Y(J,"Edge"),Wn=pr||Ut,mr=Y(J,"Gecko")&&!(Y(J.toLowerCase(),"webkit")&&!Y(J,"Edge"))&&!(Y(J,"Trident")||Y(J,"MSIE"))&&!Y(J,"Edge"),Ha=Y(J.toLowerCase(),"webkit")&&!Y(J,"Edge");function yr(){var e=T.document;return e?e.documentMode:void 0}var tn;t:{var Un="",$n=function(){var e=J;if(mr)return/rv:([^\);]+)(\)|;)/.exec(e);if(pr)return/Edge\/([\d\.]+)/.exec(e);if(Ut)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ha)return/WebKit\/(\S+)/.exec(e);if(Qa)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if($n&&(Un=$n?$n[1]:""),Ut){var Bn=yr();if(Bn!=null&&Bn>parseFloat(Un)){tn=String(Bn);break t}}tn=Un}var Wa={};function Xa(){return za(function(){let e=0;const t=yi(String(tn)).split("."),n=yi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Pn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Pn(i[2].length==0,r[2].length==0)||Pn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Xn;if(T.document&&Ut){var Ti=yr();Xn=Ti||parseInt(tn,10)||void 0}else Xn=void 0;var Ya=Xn,Ja=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",Je,t),T.removeEventListener("test",Je,t)}catch{}return e}();function X(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};function ge(e,t){if(X.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(mr){t:{try{ws(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Za[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ge.Z.h.call(this)}}Q(ge,X);var Za={2:"touch",3:"pen",4:"mouse"};ge.prototype.h=function(){ge.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ne="closure_listenable_"+(1e6*Math.random()|0),tu=0;function eu(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++tu,this.ca=this.fa=!1}function pn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function mn(e){this.src=e,this.g={},this.h=0}mn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Jn(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new eu(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function Yn(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=lr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(pn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Jn(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var Es="closure_lm_"+(1e6*Math.random()|0),qn={};function vr(e,t,n,s,i){if(s&&s.once)return Er(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)vr(e,t[r],n,s,i);return null}return n=Ss(n),e&&e[Ne]?e.N(t,n,De(s)?!!s.capture:!!s,i):wr(e,t,n,!1,s,i)}function wr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=De(i)?!!i.capture:!!i,a=Is(e);if(a||(e[Es]=a=new mn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=nu(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Ja||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Ir(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nu(){function e(n){return t.call(e.src,e.listener,n)}var t=su;return e}function Er(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Er(e,t[r],n,s,i);return null}return n=Ss(n),e&&e[Ne]?e.O(t,n,De(s)?!!s.capture:!!s,i):wr(e,t,n,!0,s,i)}function Tr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Tr(e,t[r],n,s,i);else s=De(s)?!!s.capture:!!s,n=Ss(n),e&&e[Ne]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Jn(r,n,s,i),-1<n&&(pn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Is(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Jn(t,n,s,i)),(n=-1<e?t[e]:null)&&Ts(n))}function Ts(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Ne])Yn(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Ir(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Is(t))?(Yn(n,e),n.h==0&&(n.src=null,t[Es]=null)):pn(e)}}}function Ir(e){return e in qn?qn[e]:qn[e]="on"+e}function su(e,t){if(e.ca)e=!0;else{t=new ge(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Ts(e),e=n.call(s,t)}return e}function Is(e){return e=e[Es],e instanceof mn?e:null}var jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ss(e){return typeof e=="function"?e:(e[jn]||(e[jn]=function(t){return e.handleEvent(t)}),e[jn])}function B(){vt.call(this),this.i=new mn(this),this.P=this,this.I=null}Q(B,vt);B.prototype[Ne]=!0;B.prototype.removeEventListener=function(e,t,n,s){Tr(this,e,t,n,s)};function G(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new X(t,e);else if(t instanceof X)t.target=t.target||e;else{var i=t;t=new X(s,e),gr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=je(o,s,!0,t)&&i}if(o=t.g=e,i=je(o,s,!0,t)&&i,i=je(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=je(o,s,!1,t)&&i}B.prototype.M=function(){if(B.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)pn(n[s]);delete e.g[t],e.h--}}this.I=null};B.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};B.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function je(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Yn(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var As=T.JSON.stringify;function iu(){var e=Ar;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ru{constructor(){this.h=this.g=null}add(t,n){const s=Sr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Sr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ou,e=>e.reset());class ou{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function au(e){T.setTimeout(()=>{throw e},0)}function Cs(e,t){Zn||uu(),ts||(Zn(),ts=!0),Ar.add(e,t)}var Zn;function uu(){var e=T.Promise.resolve(void 0);Zn=function(){e.then(cu)}}var ts=!1,Ar=new ru;function cu(){for(var e;e=iu();){try{e.h.call(e.g)}catch(n){au(n)}var t=Sr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ts=!1}function yn(e,t){B.call(this),this.h=e||1,this.g=t||T,this.j=K(this.kb,this),this.l=Date.now()}Q(yn,B);m=yn.prototype;m.da=!1;m.S=null;m.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),G(this,"tick"),this.da&&(Ds(this),this.start()))}};m.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ds(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}m.M=function(){yn.Z.M.call(this),Ds(this),delete this.g};function Ns(e,t,n){if(typeof e=="function")n&&(e=K(e,n));else if(e&&typeof e.handleEvent=="function")e=K(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function Cr(e){e.g=Ns(()=>{e.g=null,e.i&&(e.i=!1,Cr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class hu extends vt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Cr(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pe(e){vt.call(this),this.h=e,this.g={}}Q(pe,vt);var Ii=[];function Dr(e,t,n,s){Array.isArray(n)||(n&&(Ii[0]=n.toString()),n=Ii);for(var i=0;i<n.length;i++){var r=vr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Nr(e){vs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ts(t)},e),e.g={}}pe.prototype.M=function(){pe.Z.M.call(this),Nr(this)};pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vn(){this.g=!0}vn.prototype.Aa=function(){this.g=!1};function lu(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function du(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Mt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+gu(e,n)+(s?" "+s:"")})}function fu(e,t){e.info(function(){return"TIMEOUT: "+t})}vn.prototype.info=function(){};function gu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return As(n)}catch{return t}}var Rt={},Si=null;function wn(){return Si=Si||new B}Rt.Ma="serverreachability";function kr(e){X.call(this,Rt.Ma,e)}Q(kr,X);function me(e){const t=wn();G(t,new kr(t))}Rt.STAT_EVENT="statevent";function br(e,t){X.call(this,Rt.STAT_EVENT,e),this.stat=t}Q(br,X);function Z(e){const t=wn();G(t,new br(t,e))}Rt.Na="timingevent";function Rr(e,t){X.call(this,Rt.Na,e),this.size=t}Q(Rr,X);function ke(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var En={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},_r={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ks(){}ks.prototype.h=null;function Ai(e){return e.h||(e.h=e.i())}function xr(){}var be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function bs(){X.call(this,"d")}Q(bs,X);function Rs(){X.call(this,"c")}Q(Rs,X);var es;function Tn(){}Q(Tn,ks);Tn.prototype.g=function(){return new XMLHttpRequest};Tn.prototype.i=function(){return{}};es=new Tn;function Re(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new pe(this),this.P=pu,e=Wn?125:void 0,this.W=new yn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Lr}function Lr(){this.i=null,this.g="",this.h=!1}var pu=45e3,ns={},en={};m=Re.prototype;m.setTimeout=function(e){this.P=e};function ss(e,t,n){e.K=1,e.v=Sn(ht(t)),e.s=n,e.U=!0,Mr(e,null)}function Mr(e,t){e.F=Date.now(),_e(e),e.A=ht(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Br(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Lr,e.g=ao(e.l,n?t:null,!e.s),0<e.O&&(e.L=new hu(K(e.Ia,e,e.g),e.O)),Dr(e.V,e.g,"readystatechange",e.gb),t=e.H?fr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),me(),lu(e.j,e.u,e.A,e.m,e.X,e.s)}m.gb=function(e){e=e.target;const t=this.L;t&&at(e)==3?t.l():this.Ia(e)};m.Ia=function(e){try{if(e==this.g)t:{const h=at(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||Wn||this.g&&(this.h.h||this.g.ga()||ki(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?me(3):me(2)),In(this);var n=this.g.ba();this.N=n;e:if(Vr(this)){var s=ki(this.g);e="";var i=s.length,r=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Et(this),ae(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,du(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ze(a)){var c=a;break e}}c=null}if(n=c)Mt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,is(this,n);else{this.i=!1,this.o=3,Z(12),Et(this),ae(this);break t}}this.U?(Or(this,h,o),Wn&&this.i&&h==3&&(Dr(this.V,this.W,"tick",this.fb),this.W.start())):(Mt(this.j,this.m,o,null),is(this,o)),h==4&&Et(this),this.i&&!this.I&&(h==4?so(this.l,this):(this.i=!1,_e(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Z(12)):(this.o=0,Z(13)),Et(this),ae(this)}}}catch{}finally{}};function Vr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Or(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=mu(e,n),i==en){t==4&&(e.o=4,Z(14),s=!1),Mt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ns){e.o=4,Z(15),Mt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Mt(e.j,e.m,i,null),is(e,i);Vr(e)&&i!=en&&i!=ns&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Z(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Us(t),t.L=!0,Z(11))):(Mt(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),ae(e))}m.fb=function(){if(this.g){var e=at(this.g),t=this.g.ga();this.C<t.length&&(In(this),Or(this,e,t),this.i&&e!=4&&_e(this))}};function mu(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?en:(n=Number(t.substring(n,s)),isNaN(n)?ns:(s+=1,s+n>t.length?en:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,Et(this)};function _e(e){e.Y=Date.now()+e.P,Fr(e,e.P)}function Fr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ke(K(e.eb,e),t)}function In(e){e.B&&(T.clearTimeout(e.B),e.B=null)}m.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(fu(this.j,this.A),this.K!=2&&(me(),Z(17)),Et(this),this.o=2,ae(this)):Fr(this,this.Y-e)};function ae(e){e.l.G==0||e.I||so(e.l,e)}function Et(e){In(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ds(e.W),Nr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function is(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||rs(n.i,e))){if(n.I=e.N,!e.J&&rs(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)on(n),Dn(n);else break t;Ps(n),Z(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ke(K(n.ab,n),6e3));if(1>=Kr(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Tt(n,11)}else if((e.J||n.g==e)&&on(n),!Ze(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const h=c[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const l=c[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const g=c[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=e.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.i;!r.g&&(Y(v,"spdy")||Y(v,"quic")||Y(v,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ls(r,r.h),r.h=null))}if(s.D){const N=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.sa=N,x(s.F,s.D,N))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=oo(s,s.H?s.la:null,s.W),o.J){Gr(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(In(a),_e(a)),s.g=o}else eo(s);0<n.l.length&&Nn(n)}else c[0]!="stop"&&c[0]!="close"||Tt(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Tt(n,7):Fs(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}me(4)}catch{}}function yu(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Hn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function _s(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Hn(e)||typeof e=="string")dr(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Hn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=yu(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Qt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Qt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}m=Qt.prototype;m.R=function(){xs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};m.T=function(){return xs(this),this.g.concat()};function xs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Ct(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Ct(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}m.get=function(e,t){return Ct(this.h,e)?this.h[e]:t};m.set=function(e,t){Ct(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};m.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Ct(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Pr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function vu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Dt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Dt){this.g=t!==void 0?t:e.g,nn(this,e.j),this.s=e.s,sn(this,e.i),rn(this,e.m),this.l=e.l,t=e.h;var n=new ye;n.i=t.i,t.g&&(n.g=new Qt(t.g),n.h=t.h),Ci(this,n),this.o=e.o}else e&&(n=String(e).match(Pr))?(this.g=!!t,nn(this,n[1]||"",!0),this.s=ue(n[2]||""),sn(this,n[3]||"",!0),rn(this,n[4]),this.l=ue(n[5]||"",!0),Ci(this,n[6]||"",!0),this.o=ue(n[7]||"")):(this.g=!!t,this.h=new ye(null,this.g))}Dt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ie(t,Di,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ie(t,Di,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ie(n,n.charAt(0)=="/"?Su:Iu,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ie(n,Cu)),e.join("")};function ht(e){return new Dt(e)}function nn(e,t,n){e.j=n?ue(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function sn(e,t,n){e.i=n?ue(t,!0):t}function rn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ci(e,t,n){t instanceof ye?(e.h=t,Du(e.h,e.g)):(n||(t=ie(t,Au)),e.h=new ye(t,e.g))}function x(e,t,n){e.h.set(t,n)}function Sn(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function wu(e){return e instanceof Dt?ht(e):new Dt(e,void 0)}function Eu(e,t,n,s){var i=new Dt(null,void 0);return e&&nn(i,e),t&&sn(i,t),n&&rn(i,n),s&&(i.l=s),i}function ue(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ie(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Tu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Tu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Di=/[#\/\?@]/g,Iu=/[#\?:]/g,Su=/[#\?]/g,Au=/[#\?@]/g,Cu=/#/g;function ye(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wt(e){e.g||(e.g=new Qt,e.h=0,e.i&&vu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=ye.prototype;m.add=function(e,t){wt(this),this.i=null,e=Ht(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ur(e,t){wt(e),t=Ht(e,t),Ct(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ct(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&xs(e)))}function $r(e,t){return wt(e),t=Ht(e,t),Ct(e.g.h,t)}m.forEach=function(e,t){wt(this),this.g.forEach(function(n,s){dr(n,function(i){e.call(t,i,s,this)},this)},this)};m.T=function(){wt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};m.R=function(e){wt(this);var t=[];if(typeof e=="string")$r(this,e)&&(t=mi(t,this.g.get(Ht(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=mi(t,e[n])}return t};m.set=function(e,t){return wt(this),this.i=null,e=Ht(this,e),$r(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Br(e,t,n){Ur(e,t),0<n.length&&(e.i=null,e.g.set(Ht(e,t),ys(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function Ht(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Du(e,t){t&&!e.j&&(wt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Ur(this,s),Br(this,i,n))},e)),e.j=t}var Nu=class{constructor(e,t){this.h=e,this.g=t}};function qr(e){this.l=e||ku,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ku=10;function jr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Kr(e){return e.h?1:e.g?e.g.size:0}function rs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ls(e,t){e.g?e.g.add(t):e.h=t}function Gr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}qr.prototype.cancel=function(){if(this.i=zr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function zr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ys(e.i)}function Ms(){}Ms.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};Ms.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function bu(){this.g=new Ms}function Ru(e,t,n){const s=n||"";try{_s(e,function(i,r){let o=i;De(i)&&(o=As(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function _u(e,t){const n=new vn;if(T.Image){const s=new Image;s.onload=qe(Ke,n,s,"TestLoadImage: loaded",!0,t),s.onerror=qe(Ke,n,s,"TestLoadImage: error",!1,t),s.onabort=qe(Ke,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=qe(Ke,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Ke(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function xe(e){this.l=e.$b||null,this.j=e.ib||!1}Q(xe,ks);xe.prototype.g=function(){return new An(this.l,this.j)};xe.prototype.i=function(e){return function(){return e}}({});function An(e,t){B.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Vs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Q(An,B);var Vs=0;m=An.prototype;m.open=function(e,t){if(this.readyState!=Vs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ve(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Le(this)),this.readyState=Vs};m.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ve(this)),this.g&&(this.readyState=3,ve(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Qr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}m.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Le(this):ve(this),this.readyState==3&&Qr(this)}};m.Ua=function(e){this.g&&(this.response=this.responseText=e,Le(this))};m.Ta=function(e){this.g&&(this.response=e,Le(this))};m.ha=function(){this.g&&Le(this)};function Le(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ve(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ve(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(An.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var xu=T.JSON.parse;function O(e){B.call(this),this.headers=new Qt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hr,this.K=this.L=!1}Q(O,B);var Hr="",Lu=/^https?$/i,Mu=["POST","PUT"];m=O.prototype;m.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():es.g(),this.C=this.u?Ai(this.u):Ai(es),this.g.onreadystatechange=K(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Ni(this,r);return}e=n||"";const i=new Qt(this.headers);s&&_s(s,function(r,o){i.set(o,r)}),s=Ga(i.T()),n=T.FormData&&e instanceof T.FormData,!(0<=lr(Mu,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yr(this),0<this.B&&((this.K=Vu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=K(this.pa,this)):this.A=Ns(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Ni(this,r)}};function Vu(e){return Ut&&Xa()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Ou(e){return e.toLowerCase()=="content-type"}m.pa=function(){typeof ms!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,G(this,"timeout"),this.abort(8))};function Ni(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Wr(e),Cn(e)}function Wr(e){e.D||(e.D=!0,G(e,"complete"),G(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,G(this,"complete"),G(this,"abort"),Cn(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cn(this,!0)),O.Z.M.call(this)};m.Fa=function(){this.s||(this.F||this.v||this.l?Xr(this):this.cb())};m.cb=function(){Xr(this)};function Xr(e){if(e.h&&typeof ms!="undefined"&&(!e.C[1]||at(e)!=4||e.ba()!=2)){if(e.v&&at(e)==4)Ns(e.Fa,0,e);else if(G(e,"readystatechange"),at(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Pr)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!Lu.test(i?i.toLowerCase():"")}n=s}if(n)G(e,"complete"),G(e,"success");else{e.m=6;try{var o=2<at(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Wr(e)}}finally{Cn(e)}}}}function Cn(e,t){if(e.g){Yr(e);const n=e.g,s=e.C[0]?Je:null;e.g=null,e.C=null,t||G(e,"ready");try{n.onreadystatechange=s}catch{}}}function Yr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function at(e){return e.g?e.g.readyState:0}m.ba=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}};m.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),xu(t)}};function ki(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Hr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Da=function(){return this.m};m.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fu(e){let t="";return vs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Os(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Fu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function se(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Jr(e){this.za=0,this.l=[],this.h=new vn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=se("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=se("baseRetryDelayMs",5e3,e),this.$a=se("retryDelaySeedMs",1e4,e),this.Ya=se("forwardChannelMaxRetries",2,e),this.ra=se("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new qr(e&&e.concurrentRequestLimit),this.Ca=new bu,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}m=Jr.prototype;m.ma=8;m.G=1;function Fs(e){if(Zr(e),e.G==3){var t=e.V++,n=ht(e.F);x(n,"SID",e.J),x(n,"RID",t),x(n,"TYPE","terminate"),Me(e,n),t=new Re(e,e.h,t,void 0),t.K=2,t.v=Sn(ht(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=ao(t.l,null),t.g.ea(t.v)),t.F=Date.now(),_e(t)}ro(e)}m.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Dn(e){e.g&&(Us(e),e.g.cancel(),e.g=null)}function Zr(e){Dn(e),e.u&&(T.clearTimeout(e.u),e.u=null),on(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Kn(e,t){e.l.push(new Nu(e.Za++,t)),e.G==3&&Nn(e)}function Nn(e){jr(e.i)||e.m||(e.m=!0,Cs(e.Ha,e),e.C=0)}function Pu(e,t){return Kr(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=ke(K(e.Ha,e,t),io(e,e.C)),e.C++,!0)}m.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Re(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=fr(r),gr(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=to(this,i,t),n=ht(this.F),x(n,"RID",e),x(n,"CVER",22),this.D&&x(n,"X-HTTP-Session-Id",this.D),Me(this,n),this.o&&r&&Os(n,this.o,r),Ls(this.i,i),this.Ra&&x(n,"TYPE","init"),this.ja?(x(n,"$req",t),x(n,"SID","null"),i.$=!0,ss(i,n,null)):ss(i,n,t),this.G=2}}else this.G==3&&(e?bi(this,e):this.l.length==0||jr(this.i)||bi(this))};function bi(e,t){var n;t?n=t.m:n=e.V++;const s=ht(e.F);x(s,"SID",e.J),x(s,"RID",n),x(s,"AID",e.U),Me(e,s),e.o&&e.s&&Os(s,e.o,e.s),n=new Re(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=to(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Ls(e.i,n),ss(n,s,t)}function Me(e,t){e.j&&_s({},function(n,s){x(t,s,n)})}function to(e,t,n){n=Math.min(e.l.length,n);var s=e.j?K(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let c=i[u].h;const h=i[u].g;if(c-=r,0>c)r=Math.max(0,i[u].h-100),a=!1;else try{Ru(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function eo(e){e.g||e.u||(e.Y=1,Cs(e.Ga,e),e.A=0)}function Ps(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=ke(K(e.Ga,e),io(e,e.A)),e.A++,!0)}m.Ga=function(){if(this.u=null,no(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=ke(K(this.bb,this),e)}};m.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Z(10),Dn(this),no(this))};function Us(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function no(e){e.g=new Re(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=ht(e.oa);x(t,"RID","rpc"),x(t,"SID",e.J),x(t,"CI",e.N?"0":"1"),x(t,"AID",e.U),Me(e,t),x(t,"TYPE","xmlhttp"),e.o&&e.s&&Os(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Sn(ht(t)),n.s=null,n.U=!0,Mr(n,e)}m.ab=function(){this.v!=null&&(this.v=null,Dn(this),Ps(this),Z(19))};function on(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function so(e,t){var n=null;if(e.g==t){on(e),Us(e),e.g=null;var s=2}else if(rs(e.i,t))n=t.D,Gr(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=wn(),G(s,new Rr(s,n)),Nn(e)}else eo(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Pu(e,t)||s==2&&Ps(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Tt(e,5);break;case 4:Tt(e,10);break;case 3:Tt(e,6);break;default:Tt(e,2)}}}function io(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Tt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=K(e.jb,e);n||(n=new Dt("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||nn(n,"https"),Sn(n)),_u(n.toString(),s)}else Z(2);e.G=0,e.j&&e.j.va(t),ro(e),Zr(e)}m.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Z(2)):(this.h.info("Failed to ping google.com"),Z(1))};function ro(e){e.G=0,e.I=-1,e.j&&((zr(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,ys(e.l),e.l.length=0),e.j.ua())}function oo(e,t,n){let s=wu(n);if(s.i!="")t&&sn(s,t+"."+s.i),rn(s,s.m);else{const i=T.location;s=Eu(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&vs(e.aa,function(i,r){x(s,r,i)}),t=e.D,n=e.sa,t&&n&&x(s,t,n),x(s,"VER",e.ma),Me(e,s),s}function ao(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new O(new xe({ib:!0})):new O(e.qa),t.L=e.H,t}function uo(){}m=uo.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Oa=function(){};function an(){if(Ut&&!(10<=Number(Ya)))throw Error("Environmental error: no available transport.")}an.prototype.g=function(e,t){return new st(e,t)};function st(e,t){B.call(this),this.g=new Jr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Ze(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ze(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Wt(this)}Q(st,B);st.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Cs(K(e.hb,e,t))),Z(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=oo(e,null,e.W),Nn(e)};st.prototype.close=function(){Fs(this.g)};st.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Kn(this.g,t)}else this.v?(t={},t.__data__=As(e),Kn(this.g,t)):Kn(this.g,e)};st.prototype.M=function(){this.g.j=null,delete this.j,Fs(this.g),delete this.g,st.Z.M.call(this)};function co(e){bs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Q(co,bs);function ho(){Rs.call(this),this.status=1}Q(ho,Rs);function Wt(e){this.g=e}Q(Wt,uo);Wt.prototype.xa=function(){G(this.g,"a")};Wt.prototype.wa=function(e){G(this.g,new co(e))};Wt.prototype.va=function(e){G(this.g,new ho)};Wt.prototype.ua=function(){G(this.g,"b")};an.prototype.createWebChannel=an.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;En.NO_ERROR=0;En.TIMEOUT=8;En.HTTP_ERROR=6;_r.COMPLETE="complete";xr.EventType=be;be.OPEN="a";be.CLOSE="b";be.ERROR="c";be.MESSAGE="d";B.prototype.listen=B.prototype.N;O.prototype.listenOnce=O.prototype.O;O.prototype.getLastError=O.prototype.La;O.prototype.getLastErrorCode=O.prototype.Da;O.prototype.getStatus=O.prototype.ba;O.prototype.getResponseJson=O.prototype.Qa;O.prototype.getResponseText=O.prototype.ga;O.prototype.send=O.prototype.ea;var Uu=function(){return new an},$u=function(){return wn()},Gn=En,Bu=_r,qu=Rt,Ri={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ju=xe,Ge=xr,Ku=O;const _i="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt="9.8.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new _a("@firebase/firestore");function xi(){return Nt.logLevel}function w(e,...t){if(Nt.logLevel<=fe.DEBUG){const n=t.map($s);Nt.debug(`Firestore (${Xt}): ${e}`,...n)}}function gt(e,...t){if(Nt.logLevel<=fe.ERROR){const n=t.map($s);Nt.error(`Firestore (${Xt}): ${e}`,...n)}}function Li(e,...t){if(Nt.logLevel<=fe.WARN){const n=t.map($s);Nt.warn(`Firestore (${Xt}): ${e}`,...n)}}function $s(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Xt}) INTERNAL ASSERTION FAILED: `+e;throw gt(t),new Error(t)}function R(e,t){e||I()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Na{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class Qu{constructor(t){this.t=t,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new dt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new dt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new dt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new Gu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new et(t)}}class Hu{constructor(t,n,s){this.type="FirstParty",this.user=et.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Wu{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Hu(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yu{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.p=n.token,new Xu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Ju(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function b(e,t){return e<t?-1:e>t?1:0}function $t(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return F.fromMillis(Date.now())}static fromDate(t){return F.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new F(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?b(this.nanoseconds,t.nanoseconds):b(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.timestamp=t}static fromTimestamp(t){return new A(t)}static min(){return new A(new F(0,0))}static max(){return new A(new F(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return we.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof we?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class _ extends we{construct(t,n,s){return new _(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new y(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new _(n)}static emptyPath(){return new _([])}}const Zu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends we{construct(t,n,s){return new W(t,n,s)}static isValidIdentifier(t){return Zu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new y(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new y(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(n)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(_.fromString(t))}static fromName(t){return new E(_.fromString(t).popFirst(5))}static empty(){return new E(_.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&_.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return _.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new _(t.slice()))}}function tc(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=A.fromTimestamp(s===1e9?new F(n+1,0):new F(n,s));return new pt(i,E.empty(),t)}function ec(e){return new pt(e.readTime,e.key,-1)}class pt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new pt(A.min(),E.empty(),-1)}static max(){return new pt(A.max(),E.empty(),-1)}}function nc(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:b(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ic{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==sc)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new f((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const c=u;n(t[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new f((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Oe(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Yt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function fo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bs.ot=-1;class U{constructor(t,n){this.comparator=t,this.root=n||q.EMPTY}insert(t,n){return new U(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new U(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ze(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ze(this.root,t,this.comparator,!1)}getReverseIterator(){return new ze(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ze(this.root,t,this.comparator,!0)}}class ze{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:q.RED,this.left=i!=null?i:q.EMPTY,this.right=r!=null?r:q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new q(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return q.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new q(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.comparator=t,this.data=new U(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vi(this.data.getIterator())}getIteratorFrom(t){return new Vi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof P)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new P(this.comparator);return n.data=t,n}}class Vi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new rt([])}unionWith(t){let n=new P(W.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new rt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return $t(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new z(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new z(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return b(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}z.EMPTY_BYTE_STRING=new z("");const rc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(e){if(R(!!e),typeof e=="string"){let t=0;const n=rc.exec(e);if(R(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:V(e.seconds),nanos:V(e.nanos)}}function V(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Bt(e){return typeof e=="string"?z.fromBase64String(e):z.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function po(e){const t=e.mapValue.fields.__previous_value__;return go(t)?po(t):t}function Ee(e){const t=mt(e.mapValue.fields.__local_write_time__.timestampValue);return new F(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class qt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new qt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qt&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(e){return e==null}function un(e){return e===0&&1/e==-1/0}function ac(e){return typeof e=="number"&&Number.isInteger(e)&&!un(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?go(e)?4:uc(e)?9007199254740991:10:I()}function ot(e,t){if(e===t)return!0;const n=kt(e);if(n!==kt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ee(e).isEqual(Ee(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=mt(s.timestampValue),o=mt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Bt(s.bytesValue).isEqual(Bt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return V(s.geoPointValue.latitude)===V(i.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return V(s.integerValue)===V(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=V(s.doubleValue),o=V(i.doubleValue);return r===o?un(r)===un(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return $t(e.arrayValue.values||[],t.arrayValue.values||[],ot);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Mi(r)!==Mi(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ot(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Te(e,t){return(e.values||[]).find(n=>ot(n,t))!==void 0}function jt(e,t){if(e===t)return 0;const n=kt(e),s=kt(t);if(n!==s)return b(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return b(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=V(i.integerValue||i.doubleValue),a=V(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Oi(e.timestampValue,t.timestampValue);case 4:return Oi(Ee(e),Ee(t));case 5:return b(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Bt(i),a=Bt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=b(o[u],a[u]);if(c!==0)return c}return b(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=b(V(i.latitude),V(r.latitude));return o!==0?o:b(V(i.longitude),V(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=jt(o[u],a[u]);if(c)return c}return b(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===Qe.mapValue&&r===Qe.mapValue)return 0;if(i===Qe.mapValue)return 1;if(r===Qe.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const l=b(a[h],c[h]);if(l!==0)return l;const g=jt(o[a[h]],u[c[h]]);if(g!==0)return g}return b(a.length,c.length)}(e.mapValue,t.mapValue);default:throw I()}}function Oi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return b(e,t);const n=mt(e),s=mt(t),i=b(n.seconds,s.seconds);return i!==0?i:b(n.nanos,s.nanos)}function Ot(e){return os(e)}function os(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=mt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Bt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=os(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${os(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function Fi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function as(e){return!!e&&"integerValue"in e}function qs(e){return!!e&&"arrayValue"in e}function Pi(e){return!!e&&"nullValue"in e}function Ui(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function He(e){return!!e&&"mapValue"in e}function ce(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Yt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ce(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ce(e.arrayValue.values[n]);return t}return Object.assign({},e)}function uc(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.value=t}static empty(){return new it({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!He(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ce(n)}setAll(t){let n=W.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ce(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());He(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];He(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Yt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new it(ce(this.value))}}function mo(e){const t=[];return Yt(e.fields,(n,s)=>{const i=new W([n]);if(He(s)){const r=mo(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new j(t,0,A.min(),A.min(),it.empty(),0)}static newFoundDocument(t,n,s){return new j(t,1,n,A.min(),s,0)}static newNoDocument(t,n){return new j(t,2,n,A.min(),it.empty(),0)}static newUnknownDocument(t,n){return new j(t,3,n,A.min(),it.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof j&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new j(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function $i(e,t=null,n=[],s=[],i=null,r=null,o=null){return new cc(e,t,n,s,i,r,o)}function js(e){const t=S(e);if(t.ut===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Ot(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),kn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Ot(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Ot(s)).join(",")),t.ut=n}return t.ut}function hc(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ot(s.value)}`;var s}).join(", ")}]`),kn(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Ot(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Ot(n)).join(",")),`Target(${t})`}function Ks(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!vc(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ot(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!qi(e.startAt,t.startAt)&&qi(e.endAt,t.endAt)}function us(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class tt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.ct(t,n,s):new lc(t,n,s):n==="array-contains"?new gc(t,s):n==="in"?new pc(t,s):n==="not-in"?new mc(t,s):n==="array-contains-any"?new yc(t,s):new tt(t,n,s)}static ct(t,n,s){return n==="in"?new dc(t,s):new fc(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.at(jt(n,this.value)):n!==null&&kt(this.value)===kt(n)&&this.at(jt(n,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class lc extends tt{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.at(n)}}class dc extends tt{constructor(t,n){super(t,"in",n),this.keys=yo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class fc extends tt{constructor(t,n){super(t,"not-in",n),this.keys=yo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function yo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class gc extends tt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return qs(n)&&Te(n.arrayValue,this.value)}}class pc extends tt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Te(this.value.arrayValue,n)}}class mc extends tt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Te(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Te(this.value.arrayValue,n)}}class yc extends tt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!qs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Te(this.value.arrayValue,s))}}class cn{constructor(t,n){this.position=t,this.inclusive=n}}class he{constructor(t,n="asc"){this.field=t,this.dir=n}}function vc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Bi(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=jt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function qi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ot(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.lt=null,this.ft=null,this.startAt,this.endAt}}function wc(e,t,n,s,i,r,o,a){return new Fe(e,t,n,s,i,r,o,a)}function Gs(e){return new Fe(e)}function Ec(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function vo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function wo(e){for(const t of e.filters)if(t.ht())return t.field;return null}function Eo(e){return e.collectionGroup!==null}function Ie(e){const t=S(e);if(t.lt===null){t.lt=[];const n=wo(t),s=vo(t);if(n!==null&&s===null)n.isKeyField()||t.lt.push(new he(n)),t.lt.push(new he(W.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.lt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new he(W.keyField(),r))}}}return t.lt}function bt(e){const t=S(e);if(!t.ft)if(t.limitType==="F")t.ft=$i(t.path,t.collectionGroup,Ie(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Ie(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new he(r.field,o))}const s=t.endAt?new cn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new cn(t.startAt.position,t.startAt.inclusive):null;t.ft=$i(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.ft}function Tc(e,t,n){return new Fe(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function bn(e,t){return Ks(bt(e),bt(t))&&e.limitType===t.limitType}function To(e){return`${js(bt(e))}|lt:${e.limitType}`}function cs(e){return`Query(target=${hc(bt(e))}; limitType=${e.limitType})`}function zs(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Bi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ie(n),s)||n.endAt&&!function(i,r,o){const a=Bi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ie(n),s))}(e,t)}function Ic(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Io(e){return(t,n)=>{let s=!1;for(const i of Ie(e)){const r=Sc(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Sc(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?jt(a,u):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:un(t)?"-0":t}}function Ao(e){return{integerValue:""+e}}function Ac(e,t){return ac(t)?Ao(t):So(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this._=void 0}}function Cc(e,t,n){return e instanceof hn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Se?Do(e,t):e instanceof Ae?No(e,t):function(s,i){const r=Co(s,i),o=ji(r)+ji(s._t);return as(r)&&as(s._t)?Ao(o):So(s.wt,o)}(e,t)}function Dc(e,t,n){return e instanceof Se?Do(e,t):e instanceof Ae?No(e,t):n}function Co(e,t){return e instanceof ln?as(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class hn extends Rn{}class Se extends Rn{constructor(t){super(),this.elements=t}}function Do(e,t){const n=ko(t);for(const s of e.elements)n.some(i=>ot(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ae extends Rn{constructor(t){super(),this.elements=t}}function No(e,t){let n=ko(t);for(const s of e.elements)n=n.filter(i=>!ot(i,s));return{arrayValue:{values:n}}}class ln extends Rn{constructor(t,n){super(),this.wt=t,this._t=n}}function ji(e){return V(e.integerValue||e.doubleValue)}function ko(e){return qs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Nc(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Se&&s instanceof Se||n instanceof Ae&&s instanceof Ae?$t(n.elements,s.elements,ot):n instanceof ln&&s instanceof ln?ot(n._t,s._t):n instanceof hn&&s instanceof hn}(e.transform,t.transform)}class kc{constructor(t,n){this.version=t,this.transformResults=n}}class ut{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ut}static exists(t){return new ut(void 0,t)}static updateTime(t){return new ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function We(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class _n{}function bo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new _o(e.key,ut.none()):new Pe(e.key,e.data,ut.none());{const n=e.data,s=it.empty();let i=new P(W.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new _t(e.key,s,new rt(i.toArray()),ut.none())}}function bc(e,t,n){e instanceof Pe?function(s,i,r){const o=s.value.clone(),a=Gi(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof _t?function(s,i,r){if(!We(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Gi(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ro(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function le(e,t,n,s){return e instanceof Pe?function(i,r,o,a){if(!We(i.precondition,r))return o;const u=i.value.clone(),c=zi(i.fieldTransforms,a,r);return u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof _t?function(i,r,o,a){if(!We(i.precondition,r))return o;const u=zi(i.fieldTransforms,a,r),c=r.data;return c.setAll(Ro(i)),c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return We(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Rc(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Co(s.transform,i||null);r!=null&&(n===null&&(n=it.empty()),n.set(s.field,r))}return n||null}function Ki(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&$t(n,s,(i,r)=>Nc(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Pe extends _n{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _t extends _n{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ro(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Gi(e,t,n){const s=new Map;R(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Dc(o,a,n[i]))}return s}function zi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Cc(r,o,t))}return s}class _o extends _n{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _c extends _n{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,k;function Lc(e){switch(e){default:return I();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function xo(e){if(e===void 0)return gt("GRPC error has no .code"),d.UNKNOWN;switch(e){case M.OK:return d.OK;case M.CANCELLED:return d.CANCELLED;case M.UNKNOWN:return d.UNKNOWN;case M.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case M.INTERNAL:return d.INTERNAL;case M.UNAVAILABLE:return d.UNAVAILABLE;case M.UNAUTHENTICATED:return d.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case M.NOT_FOUND:return d.NOT_FOUND;case M.ALREADY_EXISTS:return d.ALREADY_EXISTS;case M.PERMISSION_DENIED:return d.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case M.ABORTED:return d.ABORTED;case M.OUT_OF_RANGE:return d.OUT_OF_RANGE;case M.UNIMPLEMENTED:return d.UNIMPLEMENTED;case M.DATA_LOSS:return d.DATA_LOSS;default:return I()}}(k=M||(M={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Yt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return fo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new U(E.comparator);function lt(){return Mc}const Lo=new U(E.comparator);function re(...e){let t=Lo;for(const n of e)t=t.insert(n.key,n);return t}function Mo(e){let t=Lo;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function It(){return de()}function Vo(){return de()}function de(){return new Jt(e=>e.toString(),(e,t)=>e.isEqual(t))}const Vc=new U(E.comparator),Oc=new P(E.comparator);function D(...e){let t=Oc;for(const n of e)t=t.add(n);return t}const Fc=new P(b);function Oo(){return Fc}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Ue.createSynthesizedTargetChangeForCurrentChange(t,n)),new xn(A.min(),s,Oo(),lt(),D())}}class Ue{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Ue(z.EMPTY_BYTE_STRING,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,n,s,i){this.gt=t,this.removedTargetIds=n,this.key=s,this.yt=i}}class Fo{constructor(t,n){this.targetId=t,this.It=n}}class Po{constructor(t,n,s=z.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Qi{constructor(){this.Tt=0,this.Et=Wi(),this.At=z.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=D(),n=D(),s=D();return this.Et.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Ue(this.At,this.Rt,t,n,s)}Dt(){this.bt=!1,this.Et=Wi()}Ct(t,n){this.bt=!0,this.Et=this.Et.insert(t,n)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Pc{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=lt(),this.Bt=Hi(),this.Lt=new P(b)}Ut(t){for(const n of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(n,t.yt):this.Kt(n,t.key,t.yt);for(const n of t.removedTargetIds)this.Kt(n,t.key,t.yt)}Gt(t){this.forEachTarget(t,n=>{const s=this.Qt(n);switch(t.state){case 0:this.jt(n)&&s.Vt(t.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(t.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(t.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ft.forEach((s,i)=>{this.jt(i)&&n(i)})}zt(t){const n=t.targetId,s=t.It.count,i=this.Ht(n);if(i){const r=i.target;if(us(r))if(s===0){const o=new E(r.path);this.Kt(n,o,j.newNoDocument(o,A.min()))}else R(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(t){const n=new Map;this.Ft.forEach((r,o)=>{const a=this.Ht(o);if(a){if(r.current&&us(a.target)){const u=new E(a.target.path);this.$t.get(u)!==null||this.Xt(o,u)||this.Kt(o,u,j.newNoDocument(u,t))}r.vt&&(n.set(o,r.St()),r.Dt())}});let s=D();this.Bt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ht(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.$t.forEach((r,o)=>o.setReadTime(t));const i=new xn(t,n,this.Lt,this.$t,s);return this.$t=lt(),this.Bt=Hi(),this.Lt=new P(b),i}qt(t,n){if(!this.jt(t))return;const s=this.Xt(t,n.key)?2:0;this.Qt(t).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(t))}Kt(t,n,s){if(!this.jt(t))return;const i=this.Qt(t);this.Xt(t,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(t)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(t){this.Ft.delete(t)}Jt(t){const n=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let n=this.Ft.get(t);return n||(n=new Qi,this.Ft.set(t,n)),n}Zt(t){let n=this.Bt.get(t);return n||(n=new P(b),this.Bt=this.Bt.insert(t,n)),n}jt(t){const n=this.Ht(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}Ht(t){const n=this.Ft.get(t);return n&&n.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new Qi),this.Mt.getRemoteKeysForTarget(t).forEach(n=>{this.Kt(t,n,null)})}Xt(t,n){return this.Mt.getRemoteKeysForTarget(t).has(n)}}function Hi(){return new U(E.comparator)}function Wi(){return new U(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$c=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Bc{constructor(t,n){this.databaseId=t,this.dt=n}}function dn(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Uo(e,t){return e.dt?t.toBase64():t.toUint8Array()}function qc(e,t){return dn(e,t.toTimestamp())}function ct(e){return R(!!e),A.fromTimestamp(function(t){const n=mt(t);return new F(n.seconds,n.nanos)}(e))}function Qs(e,t){return function(n){return new _(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function $o(e){const t=_.fromString(e);return R(jo(t)),t}function hs(e,t){return Qs(e.databaseId,t.path)}function zn(e,t){const n=$o(t);if(n.get(1)!==e.databaseId.projectId)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Bo(n))}function ls(e,t){return Qs(e.databaseId,t)}function jc(e){const t=$o(e);return t.length===4?_.emptyPath():Bo(t)}function ds(e){return new _(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Bo(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Xi(e,t,n){return{name:hs(e,t),fields:n.value.mapValue.fields}}function Kc(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,c){return u.dt?(R(c===void 0||typeof c=="string"),z.fromBase64String(c||"")):(R(c===void 0||c instanceof Uint8Array),z.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?d.UNKNOWN:xo(u.code);return new y(c,u.message||"")}(o);n=new Po(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=zn(e,s.document.name),r=ct(s.document.updateTime),o=new it({mapValue:{fields:s.document.fields}}),a=j.newFoundDocument(i,r,o),u=s.targetIds||[],c=s.removedTargetIds||[];n=new Xe(u,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=zn(e,s.document),r=s.readTime?ct(s.readTime):A.min(),o=j.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Xe([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=zn(e,s.document),r=s.removedTargetIds||[];n=new Xe([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new xc(i),o=s.targetId;n=new Fo(o,r)}}return n}function Gc(e,t){let n;if(t instanceof Pe)n={update:Xi(e,t.key,t.value)};else if(t instanceof _o)n={delete:hs(e,t.key)};else if(t instanceof _t)n={update:Xi(e,t.key,t.data),updateMask:eh(t.fieldMask)};else{if(!(t instanceof _c))return I();n={verify:hs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof hn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Se)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ae)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ln)return{fieldPath:r.field.canonicalString(),increment:o._t};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qc(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function zc(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ct(s.updateTime):ct(i);return r.isEqual(A.min())&&(r=ct(i)),new kc(r,s.transformResults||[])}(n,t))):[]}function Qc(e,t){return{documents:[ls(e,t.path)]}}function Hc(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ls(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ls(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length===0)return;const c=u.map(h=>function(l){if(l.op==="=="){if(Ui(l.value))return{unaryFilter:{field:Lt(l.field),op:"IS_NAN"}};if(Pi(l.value))return{unaryFilter:{field:Lt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Ui(l.value))return{unaryFilter:{field:Lt(l.field),op:"IS_NOT_NAN"}};if(Pi(l.value))return{unaryFilter:{field:Lt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lt(l.field),op:Jc(l.op),value:l.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Lt(h.field),direction:Yc(h.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,c){return u.dt||kn(c)?c:{value:c}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Wc(e){let t=jc(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){R(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=qo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new he(Vt(l.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,kn(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(h){const l=!!h.before,g=h.values||[];return new cn(g,l)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const l=!h.before,g=h.values||[];return new cn(g,l)}(n.endAt)),wc(t,i,o,r,a,"F",u,c)}function Xc(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function qo(e){return e?e.unaryFilter!==void 0?[th(e)]:e.fieldFilter!==void 0?[Zc(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>qo(t)).reduce((t,n)=>t.concat(n)):I():[]}function Yc(e){return Uc[e]}function Jc(e){return $c[e]}function Lt(e){return{fieldPath:e.canonicalString()}}function Vt(e){return W.fromServerFormat(e.fieldPath)}function Zc(e){return tt.create(Vt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function th(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Vt(e.unaryFilter.field);return tt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Vt(e.unaryFilter.field);return tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Vt(e.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Vt(e.unaryFilter.field);return tt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function eh(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function jo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&bc(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=le(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=le(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Vo();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=bo(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(A.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&$t(this.mutations,t.mutations,(n,s)=>Ki(n,s))&&$t(this.baseMutations,t.baseMutations,(n,s)=>Ki(n,s))}}class Hs{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){R(t.mutations.length===s.length);let i=Vc;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Hs(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,n,s,i,r=A.min(),o=A.min(),a=z.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new St(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t){this.ne=t}}function rh(e){const t=Wc({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Tc(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.ze=new ah}addToCollectionParentIndex(t,n){return this.ze.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.ze.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(pt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(pt.min())}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class ah{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new P(_.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new P(_.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Kt(0)}static Rn(){return new Kt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.changes=new Jt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,j.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.getBaseDocument(t,n,s))).next(i=>(s!==null&&le(s.mutation,i,rt.empty(),F.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,D()).next(()=>s))}getLocalViewOfDocuments(t,n,s=D()){const i=It();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=re();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=It();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,D()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=lt();const o=de(),a=de();return n.forEach((u,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof _t)?r=r.insert(c.key,c):h!==void 0&&(o.set(c.key,h.mutation.getFieldMask()),le(h.mutation,c,h.mutation.getFieldMask(),F.now()))}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var l;return a.set(c,new ch(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=de();let i=new U((o,a)=>o-a),r=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=s.get(u)||rt.empty();h=a.applyToLocalView(c,h),s.set(u,h);const l=(i.get(a.batchId)||D()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=Vo();h.forEach(g=>{if(!r.has(g)){const p=bo(n.get(g),s.get(g));p!==null&&l.set(g,p),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Eo(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):f.resolve(It());let a=-1,u=r;return o.next(c=>f.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(h)?f.resolve():this.getBaseDocument(t,h,l).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(t,c,r)).next(()=>this.computeViews(t,u,c,D())).next(h=>({batchId:a,changes:Mo(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(s=>{let i=re();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=re();return this.indexManager.getCollectionParents(t,i).next(o=>f.forEach(o,a=>{const u=function(c,h){return new Fe(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(r=>{r.forEach((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,j.newInvalidDocument(c)))});let o=re();return i.forEach((a,u)=>{const c=r.get(a);c!==void 0&&le(c.mutation,u,rt.empty(),F.now()),zs(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):f.resolve(j.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,n){return f.resolve(this.Jn.get(n))}saveBundleMetadata(t,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:ct(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.Yn.get(n))}saveNamedQuery(t,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:rh(s.bundledQuery),readTime:ct(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.overlays=new U(E.comparator),this.Xn=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const s=It();return f.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.ie(t,n,r)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.Xn.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const i=It(),r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new U((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=It(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=It(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return f.resolve(a)}ie(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(s.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sh(n,s));let r=this.Xn.get(n);r===void 0&&(r=D(),this.Xn.set(n,r)),this.Xn.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.Zn=new P($.ts),this.es=new P($.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const s=new $(t,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.rs(new $(t,n))}os(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new E(new _([])),s=new $(n,t),i=new $(n,t+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new E(new _([])),s=new $(n,t),i=new $(n,t+1);let r=D();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new $(t,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ${constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return E.comparator(t.key,n.key)||b(t.ls,n.ls)}static ns(t,n){return b(t.ls,n.ls)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new P($.ts)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nh(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new $(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.ws(s),r=i<0?0:i;return f.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new $(n,0),i=new $(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this._s(o.ls);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new P(b);return n.forEach(i=>{const r=new $(i,0),o=new $(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),f.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new $(new E(r),0);let a=new P(b);return this.ds.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.ls)),!0)},o),f.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){R(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return f.forEach(n.mutations,i=>{const r=new $(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ds=s})}In(t){}containsKey(t,n){const s=new $(n,0),i=this.ds.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}ys(t,n){return this.ws(t)}ws(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}_s(t){const n=this.ws(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t){this.ps=t,this.docs=new U(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():j.newInvalidDocument(n))}getEntries(t,n){let s=lt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():j.newInvalidDocument(i))}),f.resolve(s)}getAllFromCollection(t,n,s){let i=lt();const r=new E(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||nc(ec(u),s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(t,n,s,i){I()}Is(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new ph(this)}getSize(t){return f.resolve(this.size)}}class ph extends uh{constructor(t){super(),this.zn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(t,i)):this.zn.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.zn.getEntry(t,n)}getAllFromCache(t,n){return this.zn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t){this.persistence=t,this.Ts=new Jt(n=>js(n),Ks),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Es=0,this.As=new Ws,this.targetCount=0,this.Rs=Kt.An()}forEachTarget(t,n){return this.Ts.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),f.resolve()}vn(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new Kt(n),this.highestTargetId=n),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,n){return this.vn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.vn(n),f.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.Ts.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.As.us(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,n){this.bs={},this.overlays={},this.Ps=new Bs(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new mh(this),this.indexManager=new oh,this.remoteDocumentCache=function(s){return new gh(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new ih(n),this.Ds=new lh(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new dh,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.bs[t.toKey()];return s||(s=new fh(n,this.referenceDelegate),this.bs[t.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,n,s){w("MemoryPersistence","Starting transaction:",t);const i=new vh(this.Ps.next());return this.referenceDelegate.Cs(),s(i).next(r=>this.referenceDelegate.xs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ns(t,n){return f.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class vh extends ic{constructor(t){super(),this.currentSequenceNumber=t}}class Xs{constructor(t){this.persistence=t,this.ks=new Ws,this.Os=null}static Ms(t){return new Xs(t)}get Fs(){if(this.Os)return this.Os;throw I()}addReference(t,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Fs.add(n.toString()),f.resolve()}removeTarget(t,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Fs.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Cs(){this.Os=new Set}xs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Fs,s=>{const i=E.fromPath(s);return this.$s(t,i).next(r=>{r||n.removeEntry(i,A.min())})}).next(()=>(this.Os=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(t){return 0}$s(t,n){return f.or([()=>f.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ns(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Pi=s,this.vi=i}static Vi(t,n){let s=D(),i=D();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ys(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.Si=!1}initialize(t,n){this.Di=t,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ci(t,n).next(r=>r||this.xi(t,n,i,s)).next(r=>r||this.Ni(t,n))}Ci(t,n){return f.resolve(null)}xi(t,n,s,i){return Ec(n)||i.isEqual(A.min())?this.Ni(t,n):this.Di.getDocuments(t,s).next(r=>{const o=this.ki(n,r);return this.Oi(n,o,s,i)?this.Ni(t,n):(xi()<=fe.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cs(n)),this.Mi(t,o,n,tc(i,-1)))})}ki(t,n){let s=new P(Io(t));return n.forEach((i,r)=>{zs(t,r)&&(s=s.add(r))}),s}Oi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(t,n){return xi()<=fe.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",cs(n)),this.Di.getDocumentsMatchingQuery(t,n,pt.min())}Mi(t,n,s,i){return this.Di.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,n,s,i){this.persistence=t,this.Fi=n,this.wt=i,this.$i=new U(b),this.Bi=new Jt(r=>js(r),Ks),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(s)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hh(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.$i))}}function Th(e,t,n,s){return new Eh(e,t,n,s)}async function Ko(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.qi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=D();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(s,u).next(c=>({Ki:c,removedBatchIds:o,addedBatchIds:a}))})})}function Ih(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const h=u.batch,l=h.keys();let g=f.resolve();return l.forEach(p=>{g=g.next(()=>c.getEntry(a,p)).next(v=>{const N=u.docVersions.get(p);R(N!==null),v.version.compareTo(N)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=D();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Go(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Vs.getLastRemoteSnapshotVersion(n))}function Sh(e,t){const n=S(e),s=t.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];t.targetChanges.forEach((h,l)=>{const g=i.get(l);if(!g)return;a.push(n.Vs.removeMatchingKeys(r,h.removedDocuments,l).next(()=>n.Vs.addMatchingKeys(r,h.addedDocuments,l)));let p=g.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(l)?p=p.withResumeToken(z.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,s)),i=i.insert(l,p),function(v,N,C){return v.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(g,p,h)&&a.push(n.Vs.updateTargetData(r,p))});let u=lt(),c=D();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Ah(r,o,t.documentUpdates).next(h=>{u=h.Gi,c=h.Qi})),!s.isEqual(A.min())){const h=n.Vs.getLastRemoteSnapshotVersion(r).next(l=>n.Vs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(r=>(n.$i=i,r))}function Ah(e,t,n){let s=D(),i=D();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=lt();return n.forEach((a,u)=>{const c=r.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(A.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Gi:o,Qi:i}})}function Ch(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Dh(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Vs.getTargetData(s,t).next(r=>r?(i=r,f.resolve(i)):n.Vs.allocateTargetId(s).next(o=>(i=new St(t,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.$i.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(t,s.targetId)),s})}async function fs(e,t,n){const s=S(e),i=s.$i.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Oe(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.$i=s.$i.remove(t),s.Bi.delete(i.target)}function Yi(e,t,n){const s=S(e);let i=A.min(),r=D();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=S(a),l=h.Bi.get(c);return l!==void 0?f.resolve(h.$i.get(l)):h.Vs.getTargetData(u,c)}(s,o,bt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,t,n?i:A.min(),n?r:D())).next(a=>(Nh(s,Ic(t),a),{documents:a,ji:r})))}function Nh(e,t,n){let s=A.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Li.set(t,s)}class Ji{constructor(){this.activeTargetIds=Oo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class kh{constructor(){this.Fr=new Ji,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Ji,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{Br(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,i,r){const o=this.oo(t,n);w("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.co(t,o,a,s).then(u=>(w("RestConnection","Received: ",u),u),u=>{throw Li("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}ao(t,n,s,i,r,o){return this.ro(t,n,s,i,r)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Xt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}oo(t,n){const s=Rh[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,i){return new Promise((r,o)=>{const a=new Ku;a.listenOnce(Bu.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Gn.NO_ERROR:const c=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Gn.TIMEOUT:w("Connection",'RPC "'+t+'" timed out'),o(new y(d.DEADLINE_EXCEEDED,"Request time out"));break;case Gn.HTTP_ERROR:const h=a.getStatus();if(w("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const g=function(p){const v=p.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(v)>=0?v:d.UNKNOWN}(l.status);o(new y(g,l.message))}else o(new y(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(d.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{w("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}ho(t,n,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Uu(),o=$u(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ju({})),this.uo(a.initMessageHeaders,n,s),La()||Ma()||Va()||Oa()||Fa()||Pa()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");w("Connection","Creating WebChannel: "+u,a);const c=r.createWebChannel(u,a);let h=!1,l=!1;const g=new _h({jr:v=>{l?w("Connection","Not sending because WebChannel is closed:",v):(h||(w("Connection","Opening WebChannel transport."),c.open(),h=!0),w("Connection","WebChannel sending:",v),c.send(v))},Wr:()=>c.close()}),p=(v,N,C)=>{v.listen(N,L=>{try{C(L)}catch(H){setTimeout(()=>{throw H},0)}})};return p(c,Ge.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),p(c,Ge.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),g.eo())}),p(c,Ge.EventType.ERROR,v=>{l||(l=!0,Li("Connection","WebChannel transport errored:",v),g.eo(new y(d.UNAVAILABLE,"The operation could not be completed")))}),p(c,Ge.EventType.MESSAGE,v=>{var N;if(!l){const C=v.data[0];R(!!C);const L=C,H=L.error||((N=L[0])===null||N===void 0?void 0:N.error);if(H){w("Connection","WebChannel received error:",H);const ee=H.status;let ne=function(Ca){const gi=M[Ca];if(gi!==void 0)return xo(gi)}(ee),fi=H.message;ne===void 0&&(ne=d.INTERNAL,fi="Unknown error status: "+ee+" with message "+H.message),l=!0,g.eo(new y(ne,fi)),c.close()}else w("Connection","WebChannel received:",C),g.no(C)}}),p(o,qu.STAT_EVENT,v=>{v.stat===Ri.PROXY?w("Connection","Detected buffering proxy"):v.stat===Ri.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.Zr()},0),g}}function Qn(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return new Bc(e,!0)}class zo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.js=t,this.timerId=n,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-s);i>0&&w("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,n,s,i,r,o,a,u){this.js=t,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new zo(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(gt(n.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===n&&this.Uo(s,i)},s=>{t(()=>{const i=new y(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Ko(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.js.enqueueAndForget(()=>this.Po===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lh extends Qo{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.wt=r}Ko(t,n){return this.bo.ho("Listen",t,n)}onMessage(t){this.So.reset();const n=Kc(this.wt,t),s=function(i){if(!("targetChange"in i))return A.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?A.min():r.readTime?ct(r.readTime):A.min()}(t);return this.listener.Go(n,s)}Qo(t){const n={};n.database=ds(this.wt),n.addTarget=function(i,r){let o;const a=r.target;return o=us(a)?{documents:Qc(i,a)}:{query:Hc(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Uo(i,r.resumeToken):r.snapshotVersion.compareTo(A.min())>0&&(o.readTime=dn(i,r.snapshotVersion.toTimestamp())),o}(this.wt,t);const s=Xc(this.wt,t);s&&(n.labels=s),this.Mo(n)}jo(t){const n={};n.database=ds(this.wt),n.removeTarget=t,this.Mo(n)}}class Mh extends Qo{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,n){return this.bo.ho("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const n=zc(t.writeResults,t.commitTime),s=ct(t.commitTime);return this.listener.Jo(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=ds(this.wt),this.Mo(t)}Ho(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Gc(this.wt,s))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(d.UNKNOWN,i.toString())})}ao(t,n,s,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(d.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class Oh{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(gt(n),this.su=!1):w("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{xt(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=S(a);u.lu.add(4),await $e(u),u._u.set("Unknown"),u.lu.delete(4),await Mn(u)}(this))})}),this._u=new Oh(s,i)}}async function Mn(e){if(xt(e))for(const t of e.fu)await t(!0)}async function $e(e){for(const t of e.fu)await t(!1)}function Ho(e,t){const n=S(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),ti(n)?Zs(n):Zt(n).Co()&&Js(n,t))}function Wo(e,t){const n=S(e),s=Zt(n);n.hu.delete(t),s.Co()&&Xo(n,t),n.hu.size===0&&(s.Co()?s.ko():xt(n)&&n._u.set("Unknown"))}function Js(e,t){e.wu.Nt(t.targetId),Zt(e).Qo(t)}function Xo(e,t){e.wu.Nt(t),Zt(e).jo(t)}function Zs(e){e.wu=new Pc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),Zt(e).start(),e._u.iu()}function ti(e){return xt(e)&&!Zt(e).Do()&&e.hu.size>0}function xt(e){return S(e).lu.size===0}function Yo(e){e.wu=void 0}async function Ph(e){e.hu.forEach((t,n)=>{Js(e,t)})}async function Uh(e,t){Yo(e),ti(e)?(e._u.uu(t),Zs(e)):e._u.set("Unknown")}async function $h(e,t,n){if(e._u.set("Online"),t instanceof Po&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(e,t)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await fn(e,s)}else if(t instanceof Xe?e.wu.Ut(t):t instanceof Fo?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(A.min()))try{const s=await Go(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.wu.Yt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.hu.get(u);c&&i.hu.set(u,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.hu.get(a);if(!u)return;i.hu.set(a,u.withResumeToken(z.EMPTY_BYTE_STRING,u.snapshotVersion)),Xo(i,a);const c=new St(u.target,a,1,u.sequenceNumber);Js(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await fn(e,s)}}async function fn(e,t,n){if(!Oe(t))throw t;e.lu.add(1),await $e(e),e._u.set("Offline"),n||(n=()=>Go(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await Mn(e)})}function Jo(e,t){return t().catch(n=>fn(e,n,t))}async function Vn(e){const t=S(e),n=yt(t);let s=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Bh(t);)try{const i=await Ch(t.localStore,s);if(i===null){t.au.length===0&&n.ko();break}s=i.batchId,qh(t,i)}catch(i){await fn(t,i)}Zo(t)&&ta(t)}function Bh(e){return xt(e)&&e.au.length<10}function qh(e,t){e.au.push(t);const n=yt(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function Zo(e){return xt(e)&&!yt(e).Do()&&e.au.length>0}function ta(e){yt(e).start()}async function jh(e){yt(e).Xo()}async function Kh(e){const t=yt(e);for(const n of e.au)t.Ho(n.mutations)}async function Gh(e,t,n){const s=e.au.shift(),i=Hs.from(s,t,n);await Jo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Vn(e)}async function zh(e,t){t&&yt(e).zo&&await async function(n,s){if(i=s.code,Lc(i)&&i!==d.ABORTED){const r=n.au.shift();yt(n).No(),await Jo(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Vn(n)}var i}(e,t),Zo(e)&&ta(e)}async function tr(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=xt(n);n.lu.add(3),await $e(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await Mn(n)}async function Qh(e,t){const n=S(e);t?(n.lu.delete(2),await Mn(n)):t||(n.lu.add(2),await $e(n),n._u.set("Unknown"))}function Zt(e){return e.mu||(e.mu=function(t,n,s){const i=S(t);return i.tu(),new Lh(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(e.datastore,e.asyncQueue,{zr:Ph.bind(null,e),Jr:Uh.bind(null,e),Go:$h.bind(null,e)}),e.fu.push(async t=>{t?(e.mu.No(),ti(e)?Zs(e):e._u.set("Unknown")):(await e.mu.stop(),Yo(e))})),e.mu}function yt(e){return e.gu||(e.gu=function(t,n,s){const i=S(t);return i.tu(),new Mh(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(e.datastore,e.asyncQueue,{zr:jh.bind(null,e),Jr:zh.bind(null,e),Yo:Kh.bind(null,e),Jo:Gh.bind(null,e)}),e.fu.push(async t=>{t?(e.gu.No(),await Vn(e)):(await e.gu.stop(),e.au.length>0&&(w("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))})),e.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new ei(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ni(e,t){if(gt("AsyncQueue",`${t}: ${e}`),Oe(e))return new y(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=re(),this.sortedSet=new U(this.comparator)}static emptySet(t){return new Ft(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ft)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ft;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.yu=new U(E.comparator)}track(t){const n=t.doc.key,s=this.yu.get(n);s?t.type!==0&&s.type===3?this.yu=this.yu.insert(n,t):t.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.yu=this.yu.remove(n):t.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):I():this.yu=this.yu.insert(n,t)}pu(){const t=[];return this.yu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Gt{constructor(t,n,s,i,r,o,a,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Gt(t,n,Ft.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&bn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.Iu=void 0,this.listeners=[]}}class Wh{constructor(){this.queries=new Jt(t=>To(t),bn),this.onlineState="Unknown",this.Tu=new Set}}async function ea(e,t){const n=S(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Hh),i)try{r.Iu=await n.onListen(s)}catch(o){const a=ni(o,`Initialization of query '${cs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Eu(n.onlineState),r.Iu&&t.Au(r.Iu)&&si(n)}async function na(e,t){const n=S(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Xh(e,t){const n=S(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&si(n)}function Yh(e,t,n){const s=S(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function si(e){e.Tu.forEach(t=>{t.next()})}class sa{constructor(t,n,s){this.query=t,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Gt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),n=!0):this.Vu(t,this.onlineState)&&(this.Su(t),n=!0),this.Pu=t,n}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),n=!0),n}Vu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!t.docs.isEmpty()||n==="Offline")}vu(t){if(t.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(t){t=Gt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t){this.key=t}}class ra{constructor(t){this.key=t}}class Jh{constructor(t,n){this.query=t,this.Fu=n,this.$u=null,this.current=!1,this.Bu=D(),this.mutatedKeys=D(),this.Lu=Io(t),this.Uu=new Ft(this.Lu)}get qu(){return this.Fu}Ku(t,n){const s=n?n.Gu:new er,i=n?n.Uu:this.Uu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const g=i.get(h),p=zs(this.query,l)?l:null,v=!!g&&this.mutatedKeys.has(g.key),N=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let C=!1;g&&p?g.data.isEqual(p.data)?v!==N&&(s.track({type:3,doc:p}),C=!0):this.Qu(g,p)||(s.track({type:2,doc:p}),C=!0,(u&&this.Lu(p,u)>0||c&&this.Lu(p,c)<0)&&(a=!0)):!g&&p?(s.track({type:0,doc:p}),C=!0):g&&!p&&(s.track({type:1,doc:g}),C=!0,(u||c)&&(a=!0)),C&&(p?(o=o.add(p),r=N?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:r}}Qu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const r=t.Gu.pu();r.sort((c,h)=>function(l,g){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return p(l)-p(g)}(c.type,h.type)||this.Lu(c.doc,h.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,u=a!==this.$u;return this.$u=a,r.length!==0||u?{snapshot:new Gt(this.query,t.Uu,i,r,t.mutatedKeys,a===0,u,!1),zu:o}:{zu:o}}Eu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new er,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=D(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return t.forEach(s=>{this.Bu.has(s)||n.push(new ra(s))}),this.Bu.forEach(s=>{t.has(s)||n.push(new ia(s))}),n}Ju(t){this.Fu=t.ji,this.Bu=D();const n=this.Ku(t.documents);return this.applyChanges(n,!0)}Yu(){return Gt.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Zh{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class tl{constructor(t){this.key=t,this.Xu=!1}}class el{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Jt(a=>To(a),bn),this.ec=new Map,this.nc=new Set,this.sc=new U(E.comparator),this.ic=new Map,this.rc=new Ws,this.oc={},this.uc=new Map,this.cc=Kt.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function nl(e,t){const n=dl(e);let s,i;const r=n.tc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await Dh(n.localStore,bt(t));n.isPrimaryClient&&Ho(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await sl(n,t,s,a==="current")}return i}async function sl(e,t,n,s){e.hc=(h,l,g)=>async function(p,v,N,C){let L=v.view.Ku(N);L.Oi&&(L=await Yi(p.localStore,v.query,!1).then(({documents:ne})=>v.view.Ku(ne,L)));const H=C&&C.targetChanges.get(v.targetId),ee=v.view.applyChanges(L,p.isPrimaryClient,H);return sr(p,v.targetId,ee.zu),ee.snapshot}(e,h,l,g);const i=await Yi(e.localStore,t,!0),r=new Jh(t,i.ji),o=r.Ku(i.documents),a=Ue.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),u=r.applyChanges(o,e.isPrimaryClient,a);sr(e,n,u.zu);const c=new Zh(t,n,r);return e.tc.set(t,c),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),u.snapshot}async function il(e,t){const n=S(e),s=n.tc.get(t),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter(r=>!bn(r,t))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await fs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Wo(n.remoteStore,s.targetId),gs(n,s.targetId)}).catch(Ve)):(gs(n,s.targetId),await fs(n.localStore,s.targetId,!0))}async function rl(e,t,n){const s=fl(e);try{const i=await function(r,o){const a=S(r),u=F.now(),c=o.reduce((g,p)=>g.add(p.key),D());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let p=lt(),v=D();return a.Ui.getEntries(g,c).next(N=>{p=N,p.forEach((C,L)=>{L.isValidDocument()||(v=v.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,p)).next(N=>{h=N;const C=[];for(const L of o){const H=Rc(L,h.get(L.key).overlayedDocument);H!=null&&C.push(new _t(L.key,H,mo(H.value.mapValue),ut.exists(!0)))}return a.mutationQueue.addMutationBatch(g,u,C,o)}).next(N=>{l=N;const C=N.applyToLocalDocumentSet(h,v);return a.documentOverlayCache.saveOverlays(g,N.batchId,C)})}).then(()=>({batchId:l.batchId,changes:Mo(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.oc[r.currentUser.toKey()];u||(u=new U(b)),u=u.insert(o,a),r.oc[r.currentUser.toKey()]=u}(s,i.batchId,n),await Be(s,i.changes),await Vn(s.remoteStore)}catch(i){const r=ni(i,"Failed to persist write");n.reject(r)}}async function oa(e,t){const n=S(e);try{const s=await Sh(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.ic.get(r);o&&(R(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?R(o.Xu):i.removedDocuments.size>0&&(R(o.Xu),o.Xu=!1))}),await Be(n,s,t)}catch(s){await Ve(s)}}function nr(e,t,n){const s=S(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.tc.forEach((r,o)=>{const a=o.view.Eu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=S(r);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const l of h.listeners)l.Eu(o)&&(u=!0)}),u&&si(a)}(s.eventManager,t),i.length&&s.Zu.Go(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ol(e,t,n){const s=S(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.ic.get(t),r=i&&i.key;if(r){let o=new U(E.comparator);o=o.insert(r,j.newNoDocument(r,A.min()));const a=D().add(r),u=new xn(A.min(),new Map,new P(b),o,a);await oa(s,u),s.sc=s.sc.remove(r),s.ic.delete(t),ii(s)}else await fs(s.localStore,t,!1).then(()=>gs(s,t,n)).catch(Ve)}async function al(e,t){const n=S(e),s=t.batch.batchId;try{const i=await Ih(n.localStore,t);ua(n,s,null),aa(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Be(n,i)}catch(i){await Ve(i)}}async function ul(e,t,n){const s=S(e);try{const i=await function(r,o){const a=S(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(R(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,t);ua(s,t,n),aa(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Be(s,i)}catch(i){await Ve(i)}}function aa(e,t){(e.uc.get(t)||[]).forEach(n=>{n.resolve()}),e.uc.delete(t)}function ua(e,t,n){const s=S(e);let i=s.oc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.oc[s.currentUser.toKey()]=i}}function gs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ec.get(t))e.tc.delete(s),n&&e.Zu.lc(s,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach(s=>{e.rc.containsKey(s)||ca(e,s)})}function ca(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);n!==null&&(Wo(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),ii(e))}function sr(e,t,n){for(const s of n)s instanceof ia?(e.rc.addReference(s.key,t),cl(e,s)):s instanceof ra?(w("SyncEngine","Document no longer in limbo: "+s.key),e.rc.removeReference(s.key,t),e.rc.containsKey(s.key)||ca(e,s.key)):I()}function cl(e,t){const n=t.key,s=n.path.canonicalString();e.sc.get(n)||e.nc.has(s)||(w("SyncEngine","New document in limbo: "+n),e.nc.add(s),ii(e))}function ii(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new E(_.fromString(t)),s=e.cc.next();e.ic.set(s,new tl(n)),e.sc=e.sc.insert(n,s),Ho(e.remoteStore,new St(bt(Gs(n.path)),s,2,Bs.ot))}}async function Be(e,t,n){const s=S(e),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,u)=>{o.push(s.hc(u,t,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c.fromCache?"not-current":"current"),i.push(c);const h=Ys.Vi(u.targetId,c);r.push(h)}}))}),await Promise.all(o),s.Zu.Go(i),await async function(a,u){const c=S(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(u,l=>f.forEach(l.Pi,g=>c.persistence.referenceDelegate.addReference(h,l.targetId,g)).next(()=>f.forEach(l.vi,g=>c.persistence.referenceDelegate.removeReference(h,l.targetId,g)))))}catch(h){if(!Oe(h))throw h;w("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const l=h.targetId;if(!h.fromCache){const g=c.$i.get(l),p=g.snapshotVersion,v=g.withLastLimboFreeSnapshotVersion(p);c.$i=c.$i.insert(l,v)}}}(s.localStore,r))}async function hl(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const s=await Ko(n.localStore,t);n.currentUser=t,function(i,r){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new y(d.CANCELLED,r))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Be(n,s.Ki)}}function ll(e,t){const n=S(e),s=n.ic.get(t);if(s&&s.Xu)return D().add(s.key);{let i=D();const r=n.ec.get(t);if(!r)return i;for(const o of r){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function dl(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=oa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ll.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ol.bind(null,t),t.Zu.Go=Xh.bind(null,t.eventManager),t.Zu.lc=Yh.bind(null,t.eventManager),t}function fl(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=al.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ul.bind(null,t),t}class gl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Ln(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,n){return null}gc(t,n){return null}wc(t){return Th(this.persistence,new wh,t.initialUser,this.wt)}_c(t){return new yh(Xs.Ms,this.wt)}dc(t){return new kh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pl{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>nr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=hl.bind(null,this.syncEngine),await Qh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Wh}createDatastore(t){const n=Ln(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new xh(i));var i;return function(r,o,a,u){return new Vh(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>nr(this.syncEngine,a,0),o=Zi.V()?new Zi:new bh,new Fh(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,c){const h=new el(s,i,r,o,a,u);return c&&(h.ac=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=S(t);w("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await $e(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=lo.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(w("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ni(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function yl(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ko(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function vl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await wl(e);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>tr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>tr(t.remoteStore,r)),e.onlineComponents=t}async function wl(e){return e.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await yl(e,new gl)),e.offlineComponents}async function la(e){return e.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await vl(e,new pl)),e.onlineComponents}function El(e){return la(e).then(t=>t.syncEngine)}async function ps(e){const t=await la(e),n=t.eventManager;return n.onListen=nl.bind(null,t.syncEngine),n.onUnlisten=il.bind(null,t.syncEngine),n}function Tl(e,t,n={}){const s=new dt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const c=new ha({next:l=>{r.enqueueAndForget(()=>na(i,h)),l.fromCache&&a.source==="server"?u.reject(new y(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),h=new sa(o,c,{includeMetadataChanges:!0,Du:!0});return ea(i,h)}(await ps(e),e.asyncQueue,t,n,s)),s.promise}const ir=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(e,t,n){if(!n)throw new y(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Il(e,t,n,s){if(t===!0&&s===!0)throw new y(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function rr(e){if(!E.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function or(e){if(E.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function On(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function Pt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=On(e);throw new y(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new y(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Il("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ar({}),this._settingsFrozen=!1,t instanceof qt?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new y(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qt(i.options.projectId)}(t))}get app(){if(!this._app)throw new y(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ar(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new zu;switch(n.type){case"gapi":const s=n.client;return R(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Wu(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new y(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ir.get(t);n&&(w("ComponentProvider","Removing Datastore"),ir.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new nt(this.firestore,t,this._key)}}class te{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new te(this.firestore,t,this._query)}}class ft extends te{constructor(t,n,s){super(t,n,Gs(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nt(this.firestore,null,new E(t))}withConverter(t){return new ft(this.firestore,t,this._path)}}function jl(e,t,...n){if(e=At(e),da("collection","path",t),e instanceof ri){const s=_.fromString(t,...n);return or(s),new ft(e,null,s)}{if(!(e instanceof nt||e instanceof ft))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(_.fromString(t,...n));return or(s),new ft(e.firestore,null,s)}}function Sl(e,t,...n){if(e=At(e),arguments.length===1&&(t=lo.I()),da("doc","path",t),e instanceof ri){const s=_.fromString(t,...n);return rr(s),new nt(e,null,new E(s))}{if(!(e instanceof nt||e instanceof ft))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(_.fromString(t,...n));return rr(s),new nt(e.firestore,e instanceof ft?e.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new zo(this,"async_queue_retry"),this.Kc=()=>{const n=Qn();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Qn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=Qn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new dt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Mc.push(t),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!Oe(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Oc.then(()=>(this.Lc=!0,t().catch(s=>{this.Bc=s,this.Lc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw gt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(t,n,s){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const i=ei.createAndSchedule(this,t,n,s,r=>this.Wc(r));return this.$c.push(i),i}Gc(){this.Bc&&I()}verifyOperationInProgress(){}async zc(){let t;do t=this.Oc,await t;while(t!==this.Oc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}function ur(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Ce extends ri{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Al,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||fa(this),this._firestoreClient.terminate()}}function Kl(e=ka()){return Da(e,"firestore").getImmediate()}function oi(e){return e._firestoreClient||fa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function fa(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new oc(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ml(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zt(z.fromBase64String(t))}catch(n){throw new y(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new zt(z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return b(this._lat,t._lat)||b(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=/^__.*__$/;class Dl{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new _t(t,this.data,this.fieldMask,n,this.fieldTransforms):new Pe(t,this.data,n,this.fieldTransforms)}}function pa(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class ci{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new ci(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ta({path:s,na:!1});return i.sa(t),i}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ta({path:s,na:!1});return i.Xc(),i}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return gn(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(t.length===0)throw this.oa("Document fields must not be empty");if(pa(this.Zc)&&Cl.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class Nl{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.wt=s||Ln(t)}aa(t,n,s,i=!1){return new ci({Zc:t,methodName:n,ca:s,path:W.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function ma(e){const t=e._freezeSettings(),n=Ln(e._databaseId);return new Nl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function kl(e,t,n,s,i,r={}){const o=e.aa(r.merge||r.mergeFields?2:0,t,n,i);wa("Data must be an object, but it was:",o,s);const a=ya(s,o);let u,c;if(r.merge)u=new rt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const l of r.mergeFields){const g=Rl(t,l,n);if(!o.contains(g))throw new y(d.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);xl(h,g)||h.push(g)}u=new rt(h),c=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,c=o.fieldTransforms;return new Dl(new it(a),u,c)}function bl(e,t,n,s=!1){return hi(n,e.aa(s?4:3,t))}function hi(e,t){if(va(e=At(e)))return wa("Unsupported field value:",t,e),ya(e,t);if(e instanceof ga)return function(n,s){if(!pa(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&t.Zc!==4)throw t.oa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=hi(o,s.ra(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=At(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ac(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=F.fromDate(n);return{timestampValue:dn(s.wt,i)}}if(n instanceof F){const i=new F(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:dn(s.wt,i)}}if(n instanceof ui)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zt)return{bytesValue:Uo(s.wt,n._byteString)};if(n instanceof nt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qs(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${On(n)}`)}(e,t)}function ya(e,t){const n={};return fo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yt(e,(s,i)=>{const r=hi(i,t.ea(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function va(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof F||e instanceof ui||e instanceof zt||e instanceof nt||e instanceof ga)}function wa(e,t,n){if(!va(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=On(n);throw s==="an object"?t.oa(e+" a custom object"):t.oa(e+" "+s)}}function Rl(e,t,n){if((t=At(t))instanceof ai)return t._internalPath;if(typeof t=="string")return Ea(e,t);throw gn("Field path arguments must be of type string or ",e,!1,void 0,n)}const _l=new RegExp("[~\\*/\\[\\]]");function Ea(e,t,n){if(t.search(_l)>=0)throw gn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ai(...t.split("."))._internalPath}catch{throw gn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function gn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new y(d.INVALID_ARGUMENT,a+e+u)}function xl(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ll(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(li("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ll extends Ta{data(){return super.data()}}function li(e,t){return typeof t=="string"?Ea(e,t):t instanceof ai?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ia extends Ta{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ye(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(li("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ye extends Ia{data(t={}){return super.data(t)}}class Sa{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new oe(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Ye(this._firestore,this._userDataWriter,s.key,s,new oe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Ye(s._firestore,s._userDataWriter,o.doc.key,o.doc,new oe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ye(s._firestore,s._userDataWriter,o.doc.key,o.doc,new oe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Ml(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ml(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vl{}function Gl(e,...t){for(const n of t)e=n._apply(e);return e}class Ol extends Vl{constructor(t,n,s){super(),this.fa=t,this.da=n,this._a=s,this.type="where"}_apply(t){const n=ma(t.firestore),s=function(i,r,o,a,u,c,h){let l;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new y(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){hr(h,c);const p=[];for(const v of h)p.push(cr(a,i,v));l={arrayValue:{values:p}}}else l=cr(a,i,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||hr(h,c),l=bl(o,r,h,c==="in"||c==="not-in");const g=tt.create(u,c,l);return function(p,v){if(v.ht()){const C=wo(p);if(C!==null&&!C.isEqual(v.field))throw new y(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${C.toString()}' and '${v.field.toString()}'`);const L=vo(p);L!==null&&Fl(p,v.field,L)}const N=function(C,L){for(const H of C.filters)if(L.indexOf(H.op)>=0)return H.op;return null}(p,function(C){switch(C){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(N!==null)throw N===v.op?new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${N.toString()}' filters.`)}(i,g),g}(t._query,"where",n,t.firestore._databaseId,this.fa,this.da,this._a);return new te(t.firestore,t.converter,function(i,r){const o=i.filters.concat([r]);return new Fe(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(t._query,s))}}function zl(e,t,n){const s=t,i=li("where",e);return new Ol(i,s,n)}function cr(e,t,n){if(typeof(n=At(n))=="string"){if(n==="")throw new y(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Eo(t)&&n.indexOf("/")!==-1)throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(_.fromString(n));if(!E.isDocumentKey(s))throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Fi(e,new E(s))}if(n instanceof nt)return Fi(e,n._key);throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${On(n)}.`)}function hr(e,t){if(!Array.isArray(e)||e.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new y(d.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Fl(e,t,n){if(!n.isEqual(t))throw new y(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{convertValue(t,n="none"){switch(kt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return V(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Yt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new ui(V(t.latitude),V(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=po(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ee(t));default:return null}}convertTimestamp(t){const n=mt(t);return new F(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=_.fromString(t);R(jo(s));const i=new qt(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||gt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}class di extends Pl{constructor(t){super(),this.firestore=t}convertBytes(t){return new zt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new nt(this.firestore,null,n)}}function Ql(e){e=Pt(e,te);const t=Pt(e.firestore,Ce),n=oi(t),s=new di(t);return Aa(e._query),Tl(n,e._query).then(i=>new Sa(t,s,e,i))}function Hl(e,t){const n=Pt(e.firestore,Ce),s=Sl(e),i=Ul(e.converter,t);return $l(n,[kl(ma(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,ut.exists(!1))]).then(()=>s)}function Wl(e,...t){var n,s,i;e=At(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||ur(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ur(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let u,c,h;if(e instanceof nt)c=Pt(e.firestore,Ce),h=Gs(e._key.path),u={next:l=>{t[o]&&t[o](Bl(c,e,l))},error:t[o+1],complete:t[o+2]};else{const l=Pt(e,te);c=Pt(l.firestore,Ce),h=l._query;const g=new di(c);u={next:p=>{t[o]&&t[o](new Sa(c,g,l,p))},error:t[o+1],complete:t[o+2]},Aa(e._query)}return function(l,g,p,v){const N=new ha(v),C=new sa(g,N,p);return l.asyncQueue.enqueueAndForget(async()=>ea(await ps(l),C)),()=>{N.Tc(),l.asyncQueue.enqueueAndForget(async()=>na(await ps(l),C))}}(oi(c),h,a,u)}function $l(e,t){return function(n,s){const i=new dt;return n.asyncQueue.enqueueAndForget(async()=>rl(await El(n),s,i)),i.promise}(oi(e),t)}function Bl(e,t,n){const s=n.docs.get(t._key),i=new di(e);return new Ia(e,i,t._key,s,new oe(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){Xt=n})(xa),ba(new Ra("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Ce(i,new Qu(n.getProvider("auth-internal")),new Yu(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),pi(_i,"3.4.11",e),pi(_i,"3.4.11","esm2017")})();export{Kl as B,Wl as E,zl as K,Hl as T,Gl as U,jl as V,Ql as w};
