import{B as w,V as _,U as D,K as O,w as k,T as M,E as V}from"./index.esm2017.77e38a2e.js";import{g as R,_ as N,o as u,c as d,d as c,a8 as T,a9 as C,t as h,S as U,P as B,U as G,R as x,V as H,W as J,X as P,f as K,aa as b,ab as y,w as Q,a6 as X,a7 as Y}from"./index.dd2daae5.js";var j={data(){return{products:[],selectedPrice:null,isLoading:!1}},mounted(){this.fetchProducts()},methods:{async fetchProducts(){const e=w(),t=_(e,"products"),n=D(t,O("active","==",!0));(await k(n)).forEach(async r=>{const i=_(e,"products",r.id,"prices"),o=await k(i);this.products.push({id:r.id,...r.data(),prices:o.docs.map(a=>({id:a.id,...a.data()}))})})},async createSub(){this.isLoading=!0;const e=w(),t=_(e,"customers",R().currentUser.uid,"checkout_sessions"),n=await M(t,{price:this.selectedPrice,success_url:window.location.origin,cancel_url:window.location.origin});V(n,s=>{const{error:r,url:i}=s.data();r&&(console.error(`An error occured: ${r.message}`),this.isLoading=!1),i&&window.location.assign(i)})}}};const q={class:"row"},W={class:"col"},z=c("h2",null,"Subscription Plans",-1),Z=c("hr",null,null,-1),ee=c("div",{class:"form-check"},null,-1),te=[ee],ne=["disabled"];function se(e,t,n,s,r,i){return u(),d("div",q,[c("div",W,[z,Z,(u(!0),d(T,null,C(e.products,(o,a)=>(u(),d("div",{key:a+"-product"},[c("h3",null,h(o.name),1),(u(!0),d(T,null,C(o.prices,(p,l)=>(u(),d("div",{key:l+"-price"},te))),128))]))),128)),c("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=(...o)=>e.createSub&&e.createSub(...o)),disabled:!e.selectedPrice||e.isLoading},h(e.isLoading?"Loading...":"Create subscription"),9,ne)])])}var re=N(j,[["render",se]]);/**
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
 */const oe="type.googleapis.com/google.protobuf.Int64Value",ie="type.googleapis.com/google.protobuf.UInt64Value";function F(e,t){const n={};for(const s in e)e.hasOwnProperty(s)&&(n[s]=t(e[s]));return n}function v(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>v(t));if(typeof e=="function"||typeof e=="object")return F(e,t=>v(t));throw new Error("Data cannot be encoded in JSON: "+e)}function m(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case oe:case ie:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>m(t)):typeof e=="function"||typeof e=="object"?F(e,t=>m(t)):e}/**
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
 */const A="functions";/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class f extends x{constructor(t,n,s){super(`${A}/${t}`,n||""),this.details=s}}function ae(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function ce(e,t){let n=ae(e),s=n,r;try{const i=t&&t.error;if(i){const o=i.status;if(typeof o=="string"){if(!I[o])return new f("internal","internal");n=I[o],s=o}const a=i.message;typeof a=="string"&&(s=a),r=i.details,r!==void 0&&(r=m(r))}}catch{}return n==="ok"?null:new f(n,s,r)}/**
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
 */class ue{constructor(t,n,s){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(r=>this.auth=r,()=>{}),this.messaging||n.get().then(r=>this.messaging=r,()=>{}),this.appCheck||s.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(!!this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){const t=await this.getAuthToken(),n=await this.getMessagingToken(),s=await this.getAppCheckToken();return{authToken:t,messagingToken:n,appCheckToken:s}}}/**
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
 */const E="us-central1";function le(e){let t=null;return{promise:new Promise((n,s)=>{t=setTimeout(()=>{s(new f("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class de{constructor(t,n,s,r,i=E,o){this.app=t,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new ue(n,s,r),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(i);this.customDomain=a.origin,this.region=E}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function pe(e,t,n){return s=>he(e,t,s,n||{})}async function fe(e,t,n,s){n["Content-Type"]="application/json";let r;try{r=await s(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await r.json()}catch{}return{status:r.status,json:i}}function he(e,t,n,s){const r=e._url(t);return ge(e,r,n,s)}async function ge(e,t,n,s){n=v(n);const r={data:n},i={},o=await e.contextProvider.getContext();o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);const a=s.timeout||7e4,p=le(a),l=await Promise.race([fe(t,r,i,e.fetchImpl),p.promise,e.cancelAllRequests]);if(p.cancel(),!l)throw new f("cancelled","Firebase Functions instance was deleted.");const S=ce(l.status,l.json);if(S)throw S;if(!l.json)throw new f("internal","Response is not valid JSON object.");let g=l.json.data;if(typeof g=="undefined"&&(g=l.json.result),typeof g=="undefined")throw new f("internal","Response is missing data field.");return{data:m(g)}}const L="@firebase/functions",$="0.8.3";/**
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
 */const _e="auth-internal",me="app-check-internal",be="messaging-internal";function ye(e,t){const n=(s,{instanceIdentifier:r})=>{const i=s.getProvider("app").getImmediate(),o=s.getProvider(_e),a=s.getProvider(be),p=s.getProvider(me);return new de(i,o,a,p,r,e)};H(new J(A,n,"PUBLIC").setMultipleInstances(!0)),P(L,$,t),P(L,$,"esm2017")}/**
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
 */function we(e=G(),t=E){return B(U(e),A).getImmediate({identifier:t})}function ke(e,t,n){return pe(U(e),t,n)}ye(fetch.bind(self));var ve={props:["subscription"],data(){return{isLoading:!1}},methods:{async openCustomerPortal(){this.isLoading=!0;const e=we(),t=ke(e,"ext-firestore-stripe-payments-createPortalLink"),{data:n}=await t({returnUrl:window.location.origin});console.log(n),window.location.assign(n.url)}}};const Ee={class:"row"},Ne={class:"col"},Ae=c("h2",null,"Subscribed Account",-1),Se={key:0,class:"alert alert-warning"},Te=c("p",null,null,-1),Ce=["disabled"],Pe=["disabled"];function Ie(e,t,n,s,r,i){return u(),d("div",Ee,[c("div",Ne,[Ae,e.subscription.cancel_at_period_end?(u(),d("div",Se," This subscription will cancel at the end of the period. ")):K("",!0),Te,c("p",null," Current period start: "+h(new Date(e.subscription.current_period_start.seconds*1e3).toLocaleString()),1),c("p",null," Current period end: "+h(new Date(e.subscription.current_period_end.seconds*1e3).toLocaleString()),1),c("button",{class:"btn btn-primary",disabled:e.isLoading,onClick:t[0]||(t[0]=(...o)=>e.openCustomerPortal&&e.openCustomerPortal(...o))},h(e.isLoading?"Loading...":"Open my billing portal"),9,Ce),c("button",{class:"btn btn-primary",disabled:e.isLoading,onClick:t[1]||(t[1]=(...o)=>e.openCustomerPortal&&e.openCustomerPortal(...o))}," Cancel My Subscription ",8,Pe)])])}var Le=N(ve,[["render",Ie]]),$e={components:{PriceSelection:re,SubscribedAccount:Le},data(){return{isLoading:!1,subscription:null}},mounted(){this.fetchSubscription()},methods:{async fetchSubscription(){this.isLoading=!0;const e=w(),t=_(e,"customers",R().currentUser.uid,"subscriptions"),n=D(t,O("status","in",["trialing","active","past_due","unpaid"]));this.subscription=await k(n).then(s=>s.docs.length>0?s.docs[0].data():null),this.isLoading=!1}}};const De=e=>(X("data-v-e3ddcb8a"),e=e(),Y(),e),Oe=De(()=>c("h1",null,"Account",-1)),Re={key:0};function Ue(e,t,n,s,r,i){const o=b("PriceSelection"),a=b("SubscribedAccount"),p=b("default-layout");return u(),y(p,null,{default:Q(()=>[Oe,e.isLoading?(u(),d("div",Re,"Loading account information...")):e.subscription?(u(),y(a,{key:2,subscription:e.subscription},null,8,["subscription"])):(u(),y(o,{key:1}))]),_:1})}var Be=N($e,[["render",Ue],["__scopeId","data-v-e3ddcb8a"]]);export{Be as default};
