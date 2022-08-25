import{h as b,i as Me,j as T,k as le,l as qe,m as Q,u as Fe,n as ye,p as Re,q as y,v as Ae,x as P,y as Ve,z as _e,A as Be,B as Ee,C as K,D as $e,E as Oe,F as ke,G as Ie,H as J,I as G,J as ie,K as Pe,T as Te,L as ze,M as je,N as se}from"./index.46b29080.js";const Ne={dark:{type:Boolean,default:null}};function De(e,t){return b(()=>e.dark===null?t.dark.isActive:e.dark)}function Le({validate:e,resetValidation:t,requiresQForm:n}){const u=Me(qe,!1);if(u!==!1){const{props:f,proxy:h}=Q();Object.assign(h,{validate:e,resetValidation:t}),T(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),u.unbindComponent(h)):u.bindComponent(h)}),f.disable!==!0&&u.bindComponent(h),le(()=>{f.disable!==!0&&u.unbindComponent(h)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const de=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ce=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,fe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,X=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Y=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ve={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>de.test(e),hexaColor:e=>ce.test(e),hexOrHexaColor:e=>fe.test(e),rgbColor:e=>X.test(e),rgbaColor:e=>Y.test(e),rgbOrRgbaColor:e=>X.test(e)||Y.test(e),hexOrRgbColor:e=>de.test(e)||X.test(e),hexaOrRgbaColor:e=>ce.test(e)||Y.test(e),anyColor:e=>fe.test(e)||X.test(e)||Y.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const Ue={...Fe,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};function Ze(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function pt(e,t,n){if(n<=t)return t;const u=n-t+1;let f=t+(e-t)%u;return f<t&&(f=u+f),f===0?0:f}const ae=50,pe=2*ae,xe=pe*Math.PI,Ke=Math.round(xe*1e3)/1e3;ye({name:"QCircularProgress",props:{...Ue,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Q(),u=Re(e),f=b(()=>{const M=(n.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(n.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-M}deg)`:`rotate3d(0, 0, 1, ${M-90}deg)`}}),h=b(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),v=b(()=>pe/(1-e.thickness/2)),S=b(()=>`${v.value/2} ${v.value/2} ${v.value} ${v.value}`),p=b(()=>Ze(e.value,e.min,e.max)),k=b(()=>xe*(1-(p.value-e.min)/(e.max-e.min))),V=b(()=>e.thickness/2*v.value);function F({thickness:M,offset:_,color:B,cls:D}){return y("circle",{class:"q-circular-progress__"+D+(B!==void 0?` text-${B}`:""),style:h.value,fill:"transparent",stroke:"currentColor","stroke-width":M,"stroke-dasharray":Ke,"stroke-dashoffset":_,cx:v.value,cy:v.value,r:ae})}return()=>{const M=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&M.push(y("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ae-V.value/2,cx:v.value,cy:v.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&M.push(F({cls:"track",thickness:V.value,offset:0,color:e.trackColor})),M.push(F({cls:"circle",thickness:V.value,offset:k.value,color:e.color}));const _=[y("svg",{class:"q-circular-progress__svg",style:f.value,viewBox:S.value,"aria-hidden":"true"},M)];return e.showValue===!0&&_.push(y("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[y("div",p.value)])),y("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:u.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:p.value},Ae(t.internal,_))}}});const He=["rejected"],Qe=[...He,"start","finish","added","removed"],We=()=>!0;function Je(e){const t={};return e.forEach(n=>{t[n]=We}),t}Je(Qe);let ne,ee=0;const $=new Array(256);for(let e=0;e<256;e++)$[e]=(e+256).toString(16).substring(1);const Ge=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let u=t;u>0;u--)n.push(Math.floor(Math.random()*256));return n}})(),ge=4096;function Xe(){(ne===void 0||ee+16>ge)&&(ee=0,ne=Ge(ge));const e=Array.prototype.slice.call(ne,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,$[e[0]]+$[e[1]]+$[e[2]]+$[e[3]]+"-"+$[e[4]]+$[e[5]]+"-"+$[e[6]]+$[e[7]]+"-"+$[e[8]]+$[e[9]]+"-"+$[e[10]]+$[e[11]]+$[e[12]]+$[e[13]]+$[e[14]]+$[e[15]]}const Ye=[!0,!1,"ondemand"],et={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Ye.includes(e)}};function tt(e,t){const{props:n,proxy:u}=Q(),f=P(!1),h=P(null),v=P(null);Le({validate:B,resetValidation:_});let S=0,p;const k=b(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length>0),V=b(()=>n.disable!==!0&&k.value===!0),F=b(()=>n.error===!0||f.value===!0),M=b(()=>typeof n.errorMessage=="string"&&n.errorMessage.length>0?n.errorMessage:h.value);T(()=>n.modelValue,()=>{D()}),T(()=>n.reactiveRules,I=>{I===!0?p===void 0&&(p=T(()=>n.rules,()=>{D(!0)})):p!==void 0&&(p(),p=void 0)},{immediate:!0}),T(e,I=>{I===!0?v.value===null&&(v.value=!1):v.value===!1&&(v.value=!0,V.value===!0&&n.lazyRules!=="ondemand"&&t.value===!1&&R())});function _(){S++,t.value=!1,v.value=null,f.value=!1,h.value=null,R.cancel()}function B(I=n.modelValue){if(V.value!==!0)return!0;const z=++S;t.value!==!0&&n.lazyRules!==!0&&(v.value=!0);const O=(q,r)=>{f.value!==q&&(f.value=q);const o=r||void 0;h.value!==o&&(h.value=o),t.value=!1},E=[];for(let q=0;q<n.rules.length;q++){const r=n.rules[q];let o;if(typeof r=="function"?o=r(I):typeof r=="string"&&ve[r]!==void 0&&(o=ve[r](I)),o===!1||typeof o=="string")return O(!0,o),!1;o!==!0&&o!==void 0&&E.push(o)}return E.length===0?(O(!1),!0):(t.value=!0,Promise.all(E).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return z===S&&O(!1),!0;const r=q.find(o=>o===!1||typeof o=="string");return z===S&&O(r!==void 0,r),r===void 0},q=>(z===S&&(console.error(q),O(!0)),!1)))}function D(I){V.value===!0&&n.lazyRules!=="ondemand"&&(v.value===!0||n.lazyRules!==!0&&I!==!0)&&R()}const R=Ve(B,0);return le(()=>{p!==void 0&&p(),R.cancel()}),Object.assign(u,{resetValidation:_,validate:B}),_e(u,"hasError",()=>F.value),{isDirtyModel:v,hasRules:k,hasError:F,errorMessage:M,validate:B,resetValidation:_}}const me=/^on[A-Z]/;function lt(e,t){const n={listeners:P({}),attributes:P({})};function u(){const f={},h={};for(const v in e)v!=="class"&&v!=="style"&&me.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)me.test(v)===!0&&(h[v]=t.props[v]);n.attributes.value=f,n.listeners.value=h}return Be(u),u(),n}let H=[],W=[];function Ce(e){W=W.filter(t=>t!==e)}function xt(e){Ce(e),W.push(e)}function Ct(e){Ce(e),W.length===0&&H.length>0&&(H[H.length-1](),H=[])}function we(e){W.length===0?e():H.push(e)}function rt(e){H=H.filter(t=>t!==e)}function oe(e){return e===void 0?`f_${Xe()}`:e}function ue(e){return e!=null&&(""+e).length>0}const nt={...Ne,...et,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},at=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function ot(){const{props:e,attrs:t,proxy:n,vnode:u}=Q();return{isDark:De(e,n.$q),editable:b(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:P(!1),focused:P(!1),hasPopupOpen:!1,splitAttrs:lt(t,u),targetUid:P(oe(e.for)),rootRef:P(null),targetRef:P(null),controlRef:P(null)}}function ut(e){const{props:t,emit:n,slots:u,attrs:f,proxy:h}=Q(),{$q:v}=h;let S;e.hasValue===void 0&&(e.hasValue=b(()=>ue(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{n("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:s,onFocusout:d}),Object.assign(e,{clearValue:i,onControlFocusin:s,onControlFocusout:d,focus:o}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,g=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(g!==void 0?" / "+g:"")}}));const{isDirtyModel:p,hasRules:k,hasError:V,errorMessage:F,resetValidation:M}=tt(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),B=b(()=>t.bottomSlots===!0||t.hint!==void 0||k.value===!0||t.counter===!0||t.error!==null),D=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),R=b(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(z.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(V.value===!0?" q-field--error":"")+(V.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&B.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),I=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(V.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),z=b(()=>t.labelSlot===!0||t.label!==void 0),O=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&V.value!==!0?` text-${t.labelColor}`:"")),E=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:t.modelValue,emitValue:e.emitValue})),q=b(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});T(()=>t.for,l=>{e.targetUid.value=oe(l)});function r(){const l=document.activeElement;let g=e.targetRef!==void 0&&e.targetRef.value;g&&(l===null||l.id!==e.targetUid.value)&&(g.hasAttribute("tabindex")===!0||(g=g.querySelector("[tabindex]")),g&&g!==l&&g.focus({preventScroll:!0}))}function o(){we(r)}function c(){rt(r);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function s(l){clearTimeout(S),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,n("focus",l))}function d(l,g){clearTimeout(S),S=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,n("blur",l)),g!==void 0&&g())})}function i(l){Ee(l),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),K(()=>{M(),v.platform.is.mobile!==!0&&(p.value=!1)})}function x(){const l=[];return u.prepend!==void 0&&l.push(y("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},u.prepend())),l.push(y("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},m())),V.value===!0&&t.noErrorIcon===!1&&l.push(j("error",[y(ie,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(j("inner-loading-append",u.loading!==void 0?u.loading():[y(Pe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(j("inner-clearable-append",[y(ie,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),u.append!==void 0&&l.push(y("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},u.append())),e.getInnerAppend!==void 0&&l.push(j("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function m(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(y("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):u.rawControl!==void 0?l.push(u.rawControl()):u.control!==void 0&&l.push(y("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(E.value))),z.value===!0&&l.push(y("div",{class:O.value},G(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(y("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(G(u.default))}function w(){let l,g;V.value===!0?F.value!==null?(l=[y("div",{role:"alert"},F.value)],g=`q--slot-error-${F.value}`):(l=G(u.error),g="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[y("div",t.hint)],g=`q--slot-hint-${t.hint}`):(l=G(u.hint),g="q--slot-hint"));const a=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&a===!1&&l===void 0)return;const C=y("div",{key:g,class:"q-field__messages col"},l);return y("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?C:y(Te,{name:"q-transition--field-message"},()=>C),a===!0?y("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function j(l,g){return g===null?null:y("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},g)}Object.assign(h,{focus:o,blur:c});let L=!1;return $e(()=>{L=!0}),Oe(()=>{L===!0&&t.autofocus===!0&&h.focus()}),ke(()=>{Ie.value===!0&&t.for===void 0&&(e.targetUid.value=oe()),t.autofocus===!0&&h.focus()}),le(()=>{clearTimeout(S)}),function(){const g=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...q.value}:q.value;return y("label",{ref:e.rootRef,class:[R.value,f.class],style:f.style,...g},[u.before!==void 0?y("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},u.before()):null,y("div",{class:"q-field__inner relative-position col self-stretch"},[y("div",{ref:e.controlRef,class:I.value,tabindex:-1,...e.controlEvents},x()),B.value===!0?w():null]),u.after!==void 0?y("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},u.after()):null])}}const he={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Se=Object.keys(te);Se.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const it=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Se.join("")+"])|(.)","g"),be=/[.*+?^${}()|[\]\\]/g,A=String.fromCharCode(1),st={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function dt(e,t,n,u){let f,h,v,S;const p=P(null),k=P(F());function V(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}T(()=>e.type+e.autogrow,_),T(()=>e.mask,r=>{if(r!==void 0)B(k.value,!0);else{const o=E(k.value);_(),e.modelValue!==o&&t("update:modelValue",o)}}),T(()=>e.fillMask+e.reverseFillMask,()=>{p.value===!0&&B(k.value,!0)}),T(()=>e.unmaskedValue,()=>{p.value===!0&&B(k.value)});function F(){if(_(),p.value===!0){const r=z(E(e.modelValue));return e.fillMask!==!1?q(r):r}return e.modelValue}function M(r){if(r<f.length)return f.slice(-r);let o="",c=f;const s=c.indexOf(A);if(s>-1){for(let d=r-c.length;d>0;d--)o+=A;c=c.slice(0,s)+o+c.slice(s)}return c}function _(){if(p.value=e.mask!==void 0&&e.mask.length>0&&V(),p.value===!1){S=void 0,f="",h="";return}const r=he[e.mask]===void 0?e.mask:he[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",c=o.replace(be,"\\$&"),s=[],d=[],i=[];let x=e.reverseFillMask===!0,m="",w="";r.replace(it,(g,a,C,U,Z)=>{if(U!==void 0){const N=te[U];i.push(N),w=N.negate,x===!0&&(d.push("(?:"+w+"+)?("+N.pattern+"+)?(?:"+w+"+)?("+N.pattern+"+)?"),x=!1),d.push("(?:"+w+"+)?("+N.pattern+")?")}else if(C!==void 0)m="\\"+(C==="\\"?"":C),i.push(C),s.push("([^"+m+"]+)?"+m+"?");else{const N=a!==void 0?a:Z;m=N==="\\"?"\\\\\\\\":N.replace(be,"\\\\$&"),i.push(N),s.push("([^"+m+"]+)?"+m+"?")}});const j=new RegExp("^"+s.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?$"),L=d.length-1,l=d.map((g,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+c+"*"+g):a===L?new RegExp("^"+g+"("+(w===""?".":w)+"+)?"+(e.reverseFillMask===!0?"$":c+"*")):new RegExp("^"+g));v=i,S=g=>{const a=j.exec(g);a!==null&&(g=a.slice(1).join(""));const C=[],U=l.length;for(let Z=0,N=g;Z<U;Z++){const re=l[Z].exec(N);if(re===null)break;N=N.slice(re.shift().length),C.push(...re)}return C.length>0?C.join(""):g},f=i.map(g=>typeof g=="string"?g:A).join(""),h=f.split(A).join(o)}function B(r,o,c){const s=u.value,d=s.selectionEnd,i=s.value.length-d,x=E(r);o===!0&&_();const m=z(x),w=e.fillMask!==!1?q(m):m,j=k.value!==w;s.value!==w&&(s.value=w),j===!0&&(k.value=w),document.activeElement===s&&K(()=>{if(w===h){const l=e.reverseFillMask===!0?h.length:0;s.setSelectionRange(l,l,"forward");return}if(c==="insertFromPaste"&&e.reverseFillMask!==!0){const l=d-1;R.right(s,l,l);return}if(["deleteContentBackward","deleteContentForward"].indexOf(c)>-1){const l=e.reverseFillMask===!0?d===0?w.length>m.length?1:0:Math.max(0,w.length-(w===h?0:Math.min(m.length,i)+1))+1:d;s.setSelectionRange(l,l,"forward");return}if(e.reverseFillMask===!0)if(j===!0){const l=Math.max(0,w.length-(w===h?0:Math.min(m.length,i+1)));l===1&&d===1?s.setSelectionRange(l,l,"forward"):R.rightReverse(s,l,l)}else{const l=w.length-i;s.setSelectionRange(l,l,"backward")}else if(j===!0){const l=Math.max(0,f.indexOf(A),Math.min(m.length,d)-1);R.right(s,l,l)}else{const l=d-1;R.right(s,l,l)}});const L=e.unmaskedValue===!0?E(w):w;String(e.modelValue)!==L&&n(L,!0)}function D(r,o,c){const s=z(E(r.value));o=Math.max(0,f.indexOf(A),Math.min(s.length,o)),r.setSelectionRange(o,c,"forward")}const R={left(r,o,c,s){const d=f.slice(o-1).indexOf(A)===-1;let i=Math.max(0,o-1);for(;i>=0;i--)if(f[i]===A){o=i,d===!0&&o++;break}if(i<0&&f[o]!==void 0&&f[o]!==A)return R.right(r,0,0);o>=0&&r.setSelectionRange(o,s===!0?c:o,"backward")},right(r,o,c,s){const d=r.value.length;let i=Math.min(d,c+1);for(;i<=d;i++)if(f[i]===A){c=i;break}else f[i-1]===A&&(c=i);if(i>d&&f[c-1]!==void 0&&f[c-1]!==A)return R.left(r,d,d);r.setSelectionRange(s?o:c,c,"forward")},leftReverse(r,o,c,s){const d=M(r.value.length);let i=Math.max(0,o-1);for(;i>=0;i--)if(d[i-1]===A){o=i;break}else if(d[i]===A&&(o=i,i===0))break;if(i<0&&d[o]!==void 0&&d[o]!==A)return R.rightReverse(r,0,0);o>=0&&r.setSelectionRange(o,s===!0?c:o,"backward")},rightReverse(r,o,c,s){const d=r.value.length,i=M(d),x=i.slice(0,c+1).indexOf(A)===-1;let m=Math.min(d,c+1);for(;m<=d;m++)if(i[m-1]===A){c=m,c>0&&x===!0&&c--;break}if(m>d&&i[c-1]!==void 0&&i[c-1]!==A)return R.leftReverse(r,d,d);r.setSelectionRange(s===!0?o:c,c,"forward")}};function I(r){if(ze(r)===!0)return;const o=u.value,c=o.selectionStart,s=o.selectionEnd;if(r.keyCode===37||r.keyCode===39){const d=R[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];r.preventDefault(),d(o,c,s,r.shiftKey)}else r.keyCode===8&&e.reverseFillMask!==!0&&c===s?R.left(o,c,s,!0):r.keyCode===46&&e.reverseFillMask===!0&&c===s&&R.rightReverse(o,c,s,!0)}function z(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return O(r);const o=v;let c=0,s="";for(let d=0;d<o.length;d++){const i=r[c],x=o[d];if(typeof x=="string")s+=x,i===x&&c++;else if(i!==void 0&&x.regex.test(i))s+=x.transform!==void 0?x.transform(i):i,c++;else return s}return s}function O(r){const o=v,c=f.indexOf(A);let s=r.length-1,d="";for(let i=o.length-1;i>=0&&s>-1;i--){const x=o[i];let m=r[s];if(typeof x=="string")d=x+d,m===x&&s--;else if(m!==void 0&&x.regex.test(m))do d=(x.transform!==void 0?x.transform(m):m)+d,s--,m=r[s];while(c===i&&m!==void 0&&x.regex.test(m));else return d}return d}function E(r){return typeof r!="string"||S===void 0?typeof r=="number"?S(""+r):r:S(r)}function q(r){return h.length-r.length<=0?r:e.reverseFillMask===!0&&r.length>0?h.slice(0,-r.length)+r:r+h.slice(r.length)}return{innerValue:k,hasMask:p,moveCursorForPaste:D,updateMaskValue:B,onMaskedKeydown:I}}const ct={name:String};function wt(e={}){return(t,n,u)=>{t[n](y("input",{class:"hidden"+(u||""),...e.value}))}}function ft(e){return b(()=>e.name||e.for)}function vt(e,t){function n(){const u=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(h=>{f.items.add(h)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return n()}):b(n)}const gt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,mt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ht=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,bt=/[a-z0-9_ -]$/i;function yt(e){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,e(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(je.is.firefox===!0?bt.test(n.data)===!1:gt.test(n.data)===!0||mt.test(n.data)===!0||ht.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}var St=ye({name:"QInput",inheritAttrs:!1,props:{...nt,...st,...ct,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...at,"paste","change"],setup(e,{emit:t,attrs:n}){const u={};let f=NaN,h,v,S,p;const k=P(null),V=ft(e),{innerValue:F,hasMask:M,moveCursorForPaste:_,updateMaskValue:B,onMaskedKeydown:D}=dt(e,t,x,k),R=vt(e,!0),I=b(()=>ue(F.value)),z=yt(i),O=ot(),E=b(()=>e.type==="textarea"||e.autogrow===!0),q=b(()=>E.value===!0||["text","search","url","tel","password"].includes(e.type)),r=b(()=>{const a={...O.splitAttrs.listeners.value,onInput:i,onPaste:d,onChange:w,onBlur:j,onFocus:se};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=z,M.value===!0&&(a.onKeydown=D),e.autogrow===!0&&(a.onAnimationend=m),a}),o=b(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:V.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return E.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});T(()=>e.type,()=>{k.value&&(k.value.value=e.modelValue)}),T(()=>e.modelValue,a=>{if(M.value===!0){if(v===!0&&(v=!1,String(a)===f))return;B(a)}else F.value!==a&&(F.value=a,e.type==="number"&&u.hasOwnProperty("value")===!0&&(h===!0?h=!1:delete u.value));e.autogrow===!0&&K(m)}),T(()=>e.autogrow,a=>{a===!0?K(m):k.value!==null&&n.rows>0&&(k.value.style.height="auto")}),T(()=>e.dense,()=>{e.autogrow===!0&&K(m)});function c(){we(()=>{const a=document.activeElement;k.value!==null&&k.value!==a&&(a===null||a.id!==O.targetUid.value)&&k.value.focus({preventScroll:!0})})}function s(){k.value!==null&&k.value.select()}function d(a){if(M.value===!0&&e.reverseFillMask!==!0){const C=a.target;_(C,C.selectionStart,C.selectionEnd)}t("paste",a)}function i(a){if(!a||!a.target)return;if(e.type==="file"){t("update:modelValue",a.target.files);return}const C=a.target.value;if(a.target.qComposing===!0){u.value=C;return}if(M.value===!0)B(C,!1,a.inputType);else if(x(C),q.value===!0&&a.target===document.activeElement){const{selectionStart:U,selectionEnd:Z}=a.target;U!==void 0&&Z!==void 0&&K(()=>{a.target===document.activeElement&&C.indexOf(a.target.value)===0&&a.target.setSelectionRange(U,Z)})}e.autogrow===!0&&m()}function x(a,C){p=()=>{e.type!=="number"&&u.hasOwnProperty("value")===!0&&delete u.value,e.modelValue!==a&&f!==a&&(f=a,C===!0&&(v=!0),t("update:modelValue",a),K(()=>{f===a&&(f=NaN)})),p=void 0},e.type==="number"&&(h=!0,u.value=a),e.debounce!==void 0?(clearTimeout(S),u.value=a,S=setTimeout(p,e.debounce)):p()}function m(){const a=k.value;if(a!==null){const C=a.parentNode.style,{overflow:U}=a.style;C.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.overflow="hidden",a.style.height=a.scrollHeight+"px",a.style.overflow=U,C.marginBottom=""}}function w(a){z(a),clearTimeout(S),p!==void 0&&p(),t("change",a.target.value)}function j(a){a!==void 0&&se(a),clearTimeout(S),p!==void 0&&p(),h=!1,v=!1,delete u.value,e.type!=="file"&&setTimeout(()=>{k.value!==null&&(k.value.value=F.value!==void 0?F.value:"")})}function L(){return u.hasOwnProperty("value")===!0?u.value:F.value!==void 0?F.value:""}le(()=>{j()}),ke(()=>{e.autogrow===!0&&m()}),Object.assign(O,{innerValue:F,fieldClass:b(()=>`q-${E.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:k,emitValue:x,hasValue:I,floatingLabel:b(()=>I.value===!0||ue(e.displayValue)),getControl:()=>y(E.value===!0?"textarea":"input",{ref:k,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...r.value,...e.type!=="file"?{value:L()}:R.value}),getShadowControl:()=>y("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(E.value===!0?"":" text-no-wrap")},[y("span",{class:"invisible"},L()),y("span",e.shadowText)])});const l=ut(O),g=Q();return Object.assign(g.proxy,{focus:c,select:s,getNativeElement:()=>k.value}),l}});export{St as Q,De as a,xt as b,we as c,nt as d,at as e,ut as f,ot as g,ct as h,ft as i,ue as j,yt as k,wt as l,Ze as m,pt as n,Ct as r,Ne as u};
