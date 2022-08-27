import{i as h,j as Fe,k as P,l as re,m as Re,n as H,u as _e,p as ae,q as Ae,r as y,v as Ve,x as I,y as Be,z as Ee,A as $e,B as Oe,C as K,D as ze,E as Ie,F as ke,H as Pe,I as X,J as W,K as se,L as Te,T as je,M as De,N as Ne,O as de}from"./index.87a63b34.js";const pe={dark:{type:Boolean,default:null}};function xe(e,t){return h(()=>e.dark===null?t.dark.isActive:e.dark)}function Le({validate:e,resetValidation:t,requiresQForm:l}){const o=Fe(Re,!1);if(o!==!1){const{props:s,proxy:b}=H();Object.assign(b,{validate:e,resetValidation:t}),P(()=>s.disable,v=>{v===!0?(typeof t=="function"&&t(),o.unbindComponent(b)):o.bindComponent(b)}),s.disable!==!0&&o.bindComponent(b),re(()=>{s.disable!==!0&&o.unbindComponent(b)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const ce=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,fe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ve=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Y=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,G=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ge={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ce.test(e),hexaColor:e=>fe.test(e),hexOrHexaColor:e=>ve.test(e),rgbColor:e=>Y.test(e),rgbaColor:e=>G.test(e),rgbOrRgbaColor:e=>Y.test(e)||G.test(e),hexOrRgbColor:e=>ce.test(e)||Y.test(e),hexaOrRgbaColor:e=>fe.test(e)||G.test(e),anyColor:e=>ve.test(e)||Y.test(e)||G.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const Ue={..._e,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};function Ze(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function pt(e,t,l){if(l<=t)return t;const o=l-t+1;let s=t+(e-t)%o;return s<t&&(s=o+s),s===0?0:s}const oe=50,Ce=2*oe,we=Ce*Math.PI,Ke=Math.round(we*1e3)/1e3;ae({name:"QCircularProgress",props:{...Ue,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=H(),o=Ae(e),s=h(()=>{const M=(l.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(l.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-M}deg)`:`rotate3d(0, 0, 1, ${M-90}deg)`}}),b=h(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),v=h(()=>Ce/(1-e.thickness/2)),S=h(()=>`${v.value/2} ${v.value/2} ${v.value} ${v.value}`),p=h(()=>Ze(e.value,e.min,e.max)),k=h(()=>we*(1-(p.value-e.min)/(e.max-e.min))),A=h(()=>e.thickness/2*v.value);function F({thickness:M,offset:V,color:B,cls:N}){return y("circle",{class:"q-circular-progress__"+N+(B!==void 0?` text-${B}`:""),style:b.value,fill:"transparent",stroke:"currentColor","stroke-width":M,"stroke-dasharray":Ke,"stroke-dashoffset":V,cx:v.value,cy:v.value,r:oe})}return()=>{const M=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&M.push(y("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:oe-A.value/2,cx:v.value,cy:v.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&M.push(F({cls:"track",thickness:A.value,offset:0,color:e.trackColor})),M.push(F({cls:"circle",thickness:A.value,offset:k.value,color:e.color}));const V=[y("svg",{class:"q-circular-progress__svg",style:s.value,viewBox:S.value,"aria-hidden":"true"},M)];return e.showValue===!0&&V.push(y("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[y("div",p.value)])),y("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:o.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:p.value},Ve(t.internal,V))}}});const Qe=["rejected"],He=[...Qe,"start","finish","added","removed"],We=()=>!0;function Je(e){const t={};return e.forEach(l=>{t[l]=We}),t}Je(He);let ne,ee=0;const $=new Array(256);for(let e=0;e<256;e++)$[e]=(e+256).toString(16).substring(1);const Xe=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const l=new Uint8Array(t);return e.getRandomValues(l),l}}return t=>{const l=[];for(let o=t;o>0;o--)l.push(Math.floor(Math.random()*256));return l}})(),me=4096;function Ye(){(ne===void 0||ee+16>me)&&(ee=0,ne=Xe(me));const e=Array.prototype.slice.call(ne,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,$[e[0]]+$[e[1]]+$[e[2]]+$[e[3]]+"-"+$[e[4]]+$[e[5]]+"-"+$[e[6]]+$[e[7]]+"-"+$[e[8]]+$[e[9]]+"-"+$[e[10]]+$[e[11]]+$[e[12]]+$[e[13]]+$[e[14]]+$[e[15]]}const Ge=[!0,!1,"ondemand"],et={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Ge.includes(e)}};function tt(e,t){const{props:l,proxy:o}=H(),s=I(!1),b=I(null),v=I(null);Le({validate:B,resetValidation:V});let S=0,p;const k=h(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length>0),A=h(()=>l.disable!==!0&&k.value===!0),F=h(()=>l.error===!0||s.value===!0),M=h(()=>typeof l.errorMessage=="string"&&l.errorMessage.length>0?l.errorMessage:b.value);P(()=>l.modelValue,()=>{N()}),P(()=>l.reactiveRules,z=>{z===!0?p===void 0&&(p=P(()=>l.rules,()=>{N(!0)})):p!==void 0&&(p(),p=void 0)},{immediate:!0}),P(e,z=>{z===!0?v.value===null&&(v.value=!1):v.value===!1&&(v.value=!0,A.value===!0&&l.lazyRules!=="ondemand"&&t.value===!1&&R())});function V(){S++,t.value=!1,v.value=null,s.value=!1,b.value=null,R.cancel()}function B(z=l.modelValue){if(A.value!==!0)return!0;const T=++S;t.value!==!0&&l.lazyRules!==!0&&(v.value=!0);const O=(q,a)=>{s.value!==q&&(s.value=q);const u=a||void 0;b.value!==u&&(b.value=u),t.value=!1},E=[];for(let q=0;q<l.rules.length;q++){const a=l.rules[q];let u;if(typeof a=="function"?u=a(z):typeof a=="string"&&ge[a]!==void 0&&(u=ge[a](z)),u===!1||typeof u=="string")return O(!0,u),!1;u!==!0&&u!==void 0&&E.push(u)}return E.length===0?(O(!1),!0):(t.value=!0,Promise.all(E).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return T===S&&O(!1),!0;const a=q.find(u=>u===!1||typeof u=="string");return T===S&&O(a!==void 0,a),a===void 0},q=>(T===S&&(console.error(q),O(!0)),!1)))}function N(z){A.value===!0&&l.lazyRules!=="ondemand"&&(v.value===!0||l.lazyRules!==!0&&z!==!0)&&R()}const R=Be(B,0);return re(()=>{p!==void 0&&p(),R.cancel()}),Object.assign(o,{resetValidation:V,validate:B}),Ee(o,"hasError",()=>F.value),{isDirtyModel:v,hasRules:k,hasError:F,errorMessage:M,validate:B,resetValidation:V}}const he=/^on[A-Z]/;function rt(e,t){const l={listeners:I({}),attributes:I({})};function o(){const s={},b={};for(const v in e)v!=="class"&&v!=="style"&&he.test(v)===!1&&(s[v]=e[v]);for(const v in t.props)he.test(v)===!0&&(b[v]=t.props[v]);l.attributes.value=s,l.listeners.value=b}return $e(o),o(),l}let Q=[],J=[];function Se(e){J=J.filter(t=>t!==e)}function xt(e){Se(e),J.push(e)}function Ct(e){Se(e),J.length===0&&Q.length>0&&(Q[Q.length-1](),Q=[])}function Me(e){J.length===0?e():Q.push(e)}function at(e){Q=Q.filter(t=>t!==e)}function ue(e){return e===void 0?`f_${Ye()}`:e}function ie(e){return e!=null&&(""+e).length>0}const lt={...pe,...et,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},nt=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function ot(){const{props:e,attrs:t,proxy:l,vnode:o}=H();return{isDark:xe(e,l.$q),editable:h(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:rt(t,o),targetUid:I(ue(e.for)),rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function ut(e){const{props:t,emit:l,slots:o,attrs:s,proxy:b}=H(),{$q:v}=b;let S;e.hasValue===void 0&&(e.hasValue=h(()=>ie(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{l("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:d,onFocusout:c}),Object.assign(e,{clearValue:i,onControlFocusin:d,onControlFocusout:c,focus:u}),e.computedCounter===void 0&&(e.computedCounter=h(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,g=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(g!==void 0?" / "+g:"")}}));const{isDirtyModel:p,hasRules:k,hasError:A,errorMessage:F,resetValidation:M}=tt(e.focused,e.innerLoading),V=e.floatingLabel!==void 0?h(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):h(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),B=h(()=>t.bottomSlots===!0||t.hint!==void 0||k.value===!0||t.counter===!0||t.error!==null),N=h(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),R=h(()=>`q-field row no-wrap items-start q-field--${N.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(V.value===!0?" q-field--float":"")+(T.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(A.value===!0?" q-field--error":"")+(A.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&B.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),z=h(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(A.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),T=h(()=>t.labelSlot===!0||t.label!==void 0),O=h(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&A.value!==!0?` text-${t.labelColor}`:"")),E=h(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:V.value,modelValue:t.modelValue,emitValue:e.emitValue})),q=h(()=>{const r={for:e.targetUid.value};return t.disable===!0?r["aria-disabled"]="true":t.readonly===!0&&(r["aria-readonly"]="true"),r});P(()=>t.for,r=>{e.targetUid.value=ue(r)});function a(){const r=document.activeElement;let g=e.targetRef!==void 0&&e.targetRef.value;g&&(r===null||r.id!==e.targetUid.value)&&(g.hasAttribute("tabindex")===!0||(g=g.querySelector("[tabindex]")),g&&g!==r&&g.focus({preventScroll:!0}))}function u(){Me(a)}function f(){at(a);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function d(r){clearTimeout(S),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",r))}function c(r,g){clearTimeout(S),S=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,l("blur",r)),g!==void 0&&g())})}function i(r){Oe(r),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",t.modelValue),K(()=>{M(),v.platform.is.mobile!==!0&&(p.value=!1)})}function x(){const r=[];return o.prepend!==void 0&&r.push(y("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},o.prepend())),r.push(y("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},m())),A.value===!0&&t.noErrorIcon===!1&&r.push(j("error",[y(se,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(j("inner-loading-append",o.loading!==void 0?o.loading():[y(Te,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(j("inner-clearable-append",[y(se,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),o.append!==void 0&&r.push(y("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},o.append())),e.getInnerAppend!==void 0&&r.push(j("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function m(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(y("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):o.rawControl!==void 0?r.push(o.rawControl()):o.control!==void 0&&r.push(y("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},o.control(E.value))),T.value===!0&&r.push(y("div",{class:O.value},W(o.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(y("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(W(o.default))}function w(){let r,g;A.value===!0?F.value!==null?(r=[y("div",{role:"alert"},F.value)],g=`q--slot-error-${F.value}`):(r=W(o.error),g="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[y("div",t.hint)],g=`q--slot-hint-${t.hint}`):(r=W(o.hint),g="q--slot-hint"));const n=t.counter===!0||o.counter!==void 0;if(t.hideBottomSpace===!0&&n===!1&&r===void 0)return;const C=y("div",{key:g,class:"q-field__messages col"},r);return y("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?C:y(je,{name:"q-transition--field-message"},()=>C),n===!0?y("div",{class:"q-field__counter"},o.counter!==void 0?o.counter():e.computedCounter.value):null])}function j(r,g){return g===null?null:y("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},g)}Object.assign(b,{focus:u,blur:f});let L=!1;return ze(()=>{L=!0}),Ie(()=>{L===!0&&t.autofocus===!0&&b.focus()}),ke(()=>{Pe.value===!0&&t.for===void 0&&(e.targetUid.value=ue()),t.autofocus===!0&&b.focus()}),re(()=>{clearTimeout(S)}),function(){const g=e.getControl===void 0&&o.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...q.value}:q.value;return y("label",{ref:e.rootRef,class:[R.value,s.class],style:s.style,...g},[o.before!==void 0?y("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},o.before()):null,y("div",{class:"q-field__inner relative-position col self-stretch"},[y("div",{ref:e.controlRef,class:z.value,tabindex:-1,...e.controlEvents},x()),B.value===!0?w():null]),o.after!==void 0?y("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},o.after()):null])}}const be={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},qe=Object.keys(te);qe.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const it=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+qe.join("")+"])|(.)","g"),ye=/[.*+?^${}()|[\]\\]/g,_=String.fromCharCode(1),st={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function dt(e,t,l,o){let s,b,v,S;const p=I(null),k=I(F());function A(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}P(()=>e.type+e.autogrow,V),P(()=>e.mask,a=>{if(a!==void 0)B(k.value,!0);else{const u=E(k.value);V(),e.modelValue!==u&&t("update:modelValue",u)}}),P(()=>e.fillMask+e.reverseFillMask,()=>{p.value===!0&&B(k.value,!0)}),P(()=>e.unmaskedValue,()=>{p.value===!0&&B(k.value)});function F(){if(V(),p.value===!0){const a=T(E(e.modelValue));return e.fillMask!==!1?q(a):a}return e.modelValue}function M(a){if(a<s.length)return s.slice(-a);let u="",f=s;const d=f.indexOf(_);if(d>-1){for(let c=a-f.length;c>0;c--)u+=_;f=f.slice(0,d)+u+f.slice(d)}return f}function V(){if(p.value=e.mask!==void 0&&e.mask.length>0&&A(),p.value===!1){S=void 0,s="",b="";return}const a=be[e.mask]===void 0?e.mask:be[e.mask],u=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",f=u.replace(ye,"\\$&"),d=[],c=[],i=[];let x=e.reverseFillMask===!0,m="",w="";a.replace(it,(g,n,C,U,Z)=>{if(U!==void 0){const D=te[U];i.push(D),w=D.negate,x===!0&&(c.push("(?:"+w+"+)?("+D.pattern+"+)?(?:"+w+"+)?("+D.pattern+"+)?"),x=!1),c.push("(?:"+w+"+)?("+D.pattern+")?")}else if(C!==void 0)m="\\"+(C==="\\"?"":C),i.push(C),d.push("([^"+m+"]+)?"+m+"?");else{const D=n!==void 0?n:Z;m=D==="\\"?"\\\\\\\\":D.replace(ye,"\\\\$&"),i.push(D),d.push("([^"+m+"]+)?"+m+"?")}});const j=new RegExp("^"+d.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?$"),L=c.length-1,r=c.map((g,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+f+"*"+g):n===L?new RegExp("^"+g+"("+(w===""?".":w)+"+)?"+(e.reverseFillMask===!0?"$":f+"*")):new RegExp("^"+g));v=i,S=g=>{const n=j.exec(g);n!==null&&(g=n.slice(1).join(""));const C=[],U=r.length;for(let Z=0,D=g;Z<U;Z++){const le=r[Z].exec(D);if(le===null)break;D=D.slice(le.shift().length),C.push(...le)}return C.length>0?C.join(""):g},s=i.map(g=>typeof g=="string"?g:_).join(""),b=s.split(_).join(u)}function B(a,u,f){const d=o.value,c=d.selectionEnd,i=d.value.length-c,x=E(a);u===!0&&V();const m=T(x),w=e.fillMask!==!1?q(m):m,j=k.value!==w;d.value!==w&&(d.value=w),j===!0&&(k.value=w),document.activeElement===d&&K(()=>{if(w===b){const r=e.reverseFillMask===!0?b.length:0;d.setSelectionRange(r,r,"forward");return}if(f==="insertFromPaste"&&e.reverseFillMask!==!0){const r=c-1;R.right(d,r,r);return}if(["deleteContentBackward","deleteContentForward"].indexOf(f)>-1){const r=e.reverseFillMask===!0?c===0?w.length>m.length?1:0:Math.max(0,w.length-(w===b?0:Math.min(m.length,i)+1))+1:c;d.setSelectionRange(r,r,"forward");return}if(e.reverseFillMask===!0)if(j===!0){const r=Math.max(0,w.length-(w===b?0:Math.min(m.length,i+1)));r===1&&c===1?d.setSelectionRange(r,r,"forward"):R.rightReverse(d,r,r)}else{const r=w.length-i;d.setSelectionRange(r,r,"backward")}else if(j===!0){const r=Math.max(0,s.indexOf(_),Math.min(m.length,c)-1);R.right(d,r,r)}else{const r=c-1;R.right(d,r,r)}});const L=e.unmaskedValue===!0?E(w):w;String(e.modelValue)!==L&&l(L,!0)}function N(a,u,f){const d=T(E(a.value));u=Math.max(0,s.indexOf(_),Math.min(d.length,u)),a.setSelectionRange(u,f,"forward")}const R={left(a,u,f,d){const c=s.slice(u-1).indexOf(_)===-1;let i=Math.max(0,u-1);for(;i>=0;i--)if(s[i]===_){u=i,c===!0&&u++;break}if(i<0&&s[u]!==void 0&&s[u]!==_)return R.right(a,0,0);u>=0&&a.setSelectionRange(u,d===!0?f:u,"backward")},right(a,u,f,d){const c=a.value.length;let i=Math.min(c,f+1);for(;i<=c;i++)if(s[i]===_){f=i;break}else s[i-1]===_&&(f=i);if(i>c&&s[f-1]!==void 0&&s[f-1]!==_)return R.left(a,c,c);a.setSelectionRange(d?u:f,f,"forward")},leftReverse(a,u,f,d){const c=M(a.value.length);let i=Math.max(0,u-1);for(;i>=0;i--)if(c[i-1]===_){u=i;break}else if(c[i]===_&&(u=i,i===0))break;if(i<0&&c[u]!==void 0&&c[u]!==_)return R.rightReverse(a,0,0);u>=0&&a.setSelectionRange(u,d===!0?f:u,"backward")},rightReverse(a,u,f,d){const c=a.value.length,i=M(c),x=i.slice(0,f+1).indexOf(_)===-1;let m=Math.min(c,f+1);for(;m<=c;m++)if(i[m-1]===_){f=m,f>0&&x===!0&&f--;break}if(m>c&&i[f-1]!==void 0&&i[f-1]!==_)return R.leftReverse(a,c,c);a.setSelectionRange(d===!0?u:f,f,"forward")}};function z(a){if(De(a)===!0)return;const u=o.value,f=u.selectionStart,d=u.selectionEnd;if(a.keyCode===37||a.keyCode===39){const c=R[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];a.preventDefault(),c(u,f,d,a.shiftKey)}else a.keyCode===8&&e.reverseFillMask!==!0&&f===d?R.left(u,f,d,!0):a.keyCode===46&&e.reverseFillMask===!0&&f===d&&R.rightReverse(u,f,d,!0)}function T(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return O(a);const u=v;let f=0,d="";for(let c=0;c<u.length;c++){const i=a[f],x=u[c];if(typeof x=="string")d+=x,i===x&&f++;else if(i!==void 0&&x.regex.test(i))d+=x.transform!==void 0?x.transform(i):i,f++;else return d}return d}function O(a){const u=v,f=s.indexOf(_);let d=a.length-1,c="";for(let i=u.length-1;i>=0&&d>-1;i--){const x=u[i];let m=a[d];if(typeof x=="string")c=x+c,m===x&&d--;else if(m!==void 0&&x.regex.test(m))do c=(x.transform!==void 0?x.transform(m):m)+c,d--,m=a[d];while(f===i&&m!==void 0&&x.regex.test(m));else return c}return c}function E(a){return typeof a!="string"||S===void 0?typeof a=="number"?S(""+a):a:S(a)}function q(a){return b.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?b.slice(0,-a.length)+a:a+b.slice(a.length)}return{innerValue:k,hasMask:p,moveCursorForPaste:N,updateMaskValue:B,onMaskedKeydown:z}}const ct={name:String};function wt(e={}){return(t,l,o)=>{t[l](y("input",{class:"hidden"+(o||""),...e.value}))}}function ft(e){return h(()=>e.name||e.for)}function vt(e,t){function l(){const o=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(o)===o&&("length"in o?Array.from(o):[o]).forEach(b=>{s.items.add(b)}),{files:s.files}}catch{return{files:void 0}}}return t===!0?h(()=>{if(e.type==="file")return l()}):h(l)}const gt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,mt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ht=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,bt=/[a-z0-9_ -]$/i;function yt(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(Ne.is.firefox===!0?bt.test(l.data)===!1:gt.test(l.data)===!0||mt.test(l.data)===!0||ht.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}var St=ae({name:"QInput",inheritAttrs:!1,props:{...lt,...st,...ct,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...nt,"paste","change"],setup(e,{emit:t,attrs:l}){const o={};let s=NaN,b,v,S,p;const k=I(null),A=ft(e),{innerValue:F,hasMask:M,moveCursorForPaste:V,updateMaskValue:B,onMaskedKeydown:N}=dt(e,t,x,k),R=vt(e,!0),z=h(()=>ie(F.value)),T=yt(i),O=ot(),E=h(()=>e.type==="textarea"||e.autogrow===!0),q=h(()=>E.value===!0||["text","search","url","tel","password"].includes(e.type)),a=h(()=>{const n={...O.splitAttrs.listeners.value,onInput:i,onPaste:c,onChange:w,onBlur:j,onFocus:de};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=T,M.value===!0&&(n.onKeydown=N),e.autogrow===!0&&(n.onAnimationend=m),n}),u=h(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:A.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return E.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});P(()=>e.type,()=>{k.value&&(k.value.value=e.modelValue)}),P(()=>e.modelValue,n=>{if(M.value===!0){if(v===!0&&(v=!1,String(n)===s))return;B(n)}else F.value!==n&&(F.value=n,e.type==="number"&&o.hasOwnProperty("value")===!0&&(b===!0?b=!1:delete o.value));e.autogrow===!0&&K(m)}),P(()=>e.autogrow,n=>{n===!0?K(m):k.value!==null&&l.rows>0&&(k.value.style.height="auto")}),P(()=>e.dense,()=>{e.autogrow===!0&&K(m)});function f(){Me(()=>{const n=document.activeElement;k.value!==null&&k.value!==n&&(n===null||n.id!==O.targetUid.value)&&k.value.focus({preventScroll:!0})})}function d(){k.value!==null&&k.value.select()}function c(n){if(M.value===!0&&e.reverseFillMask!==!0){const C=n.target;V(C,C.selectionStart,C.selectionEnd)}t("paste",n)}function i(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const C=n.target.value;if(n.target.qComposing===!0){o.value=C;return}if(M.value===!0)B(C,!1,n.inputType);else if(x(C),q.value===!0&&n.target===document.activeElement){const{selectionStart:U,selectionEnd:Z}=n.target;U!==void 0&&Z!==void 0&&K(()=>{n.target===document.activeElement&&C.indexOf(n.target.value)===0&&n.target.setSelectionRange(U,Z)})}e.autogrow===!0&&m()}function x(n,C){p=()=>{e.type!=="number"&&o.hasOwnProperty("value")===!0&&delete o.value,e.modelValue!==n&&s!==n&&(s=n,C===!0&&(v=!0),t("update:modelValue",n),K(()=>{s===n&&(s=NaN)})),p=void 0},e.type==="number"&&(b=!0,o.value=n),e.debounce!==void 0?(clearTimeout(S),o.value=n,S=setTimeout(p,e.debounce)):p()}function m(){const n=k.value;if(n!==null){const C=n.parentNode.style,{overflow:U}=n.style;C.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.overflow="hidden",n.style.height=n.scrollHeight+"px",n.style.overflow=U,C.marginBottom=""}}function w(n){T(n),clearTimeout(S),p!==void 0&&p(),t("change",n.target.value)}function j(n){n!==void 0&&de(n),clearTimeout(S),p!==void 0&&p(),b=!1,v=!1,delete o.value,e.type!=="file"&&setTimeout(()=>{k.value!==null&&(k.value.value=F.value!==void 0?F.value:"")})}function L(){return o.hasOwnProperty("value")===!0?o.value:F.value!==void 0?F.value:""}re(()=>{j()}),ke(()=>{e.autogrow===!0&&m()}),Object.assign(O,{innerValue:F,fieldClass:h(()=>`q-${E.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:h(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:k,emitValue:x,hasValue:z,floatingLabel:h(()=>z.value===!0||ie(e.displayValue)),getControl:()=>y(E.value===!0?"textarea":"input",{ref:k,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...u.value,...a.value,...e.type!=="file"?{value:L()}:R.value}),getShadowControl:()=>y("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(E.value===!0?"":" text-no-wrap")},[y("span",{class:"invisible"},L()),y("span",e.shadowText)])});const r=ut(O),g=H();return Object.assign(g.proxy,{focus:f,select:d,getNativeElement:()=>k.value}),r}}),Mt=ae({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const l=h(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>y(e.tag,{class:l.value},W(t.default))}}),qt=ae({name:"QCard",props:{...pe,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const l=H(),o=xe(e,l.proxy.$q),s=h(()=>"q-card"+(o.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>y(e.tag,{class:s.value},W(t.default))}});export{qt as Q,Mt as a,St as b,xt as c,xe as d,Me as e,lt as f,nt as g,ut as h,ot as i,ct as j,ft as k,ie as l,yt as m,pt as n,wt as o,Ze as p,Ct as r,pe as u};
