import{U as L,D as I,A as R,R as U,K as F,Q as M,g as x}from"./index.esm2017.fe74b9ee.js";import{g as P,_ as S,c as f,d as c,t as g,o as u,R as B,P as D,S as V,U as G,V as H,W as T,Y,f as $,h as _,a9 as b,w as J,aa as y}from"./index.c72d262d.js";var K={data(){return{selectedPrice:"price_1Lat4VGrTucbD8SBxtUFHJR3",isLoading:!1}},methods:{async createSub(){this.isLoading=!0;const e=L(),t=I(e,"customers",P().currentUser.uid,"checkout_sessions"),n=await R(t,{price:this.selectedPrice,success_url:window.location.origin,cancel_url:window.location.origin});U(n,s=>{const{error:i,url:o}=s.data();i&&(console.error(`An error occured: ${i.message}`),this.isLoading=!1),o&&window.location.assign(o)})}}};const X={class:"sub-container"},j=c("ul",{id:"fresh"},[c("li",{id:"hot-sub"},[c("b",null,"Your Subscription Is Inactive!")]),c("li",{id:"big-banna"},[c("b",null,"WOULD YOU LIKE AN ALL-ACCESS PASS FOR $5 A MONTH?")])],-1),Q=["disabled"];function W(e,t,n,s,i,o){return u(),f("div",X,[j,c("div",null,[c("button",{class:"button-24",onClick:t[0]||(t[0]=(...r)=>e.createSub&&e.createSub(...r)),disabled:e.isLoading},g(e.isLoading?"Loading...":"Start Subscription"),9,Q)])])}var q=S(K,[["render",W]]);/**
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
 */const z="type.googleapis.com/google.protobuf.Int64Value",Z="type.googleapis.com/google.protobuf.UInt64Value";function O(e,t){const n={};for(const s in e)e.hasOwnProperty(s)&&(n[s]=t(e[s]));return n}function A(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>A(t));if(typeof e=="function"||typeof e=="object")return O(e,t=>A(t));throw new Error("Data cannot be encoded in JSON: "+e)}function m(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case z:case Z:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>m(t)):typeof e=="function"||typeof e=="object"?O(e,t=>m(t)):e}/**
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
 */const N="functions";/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Y{constructor(t,n,s){super(`${N}/${t}`,n||""),this.details=s}}function ee(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function te(e,t){let n=ee(e),s=n,i;try{const o=t&&t.error;if(o){const r=o.status;if(typeof r=="string"){if(!k[r])return new p("internal","internal");n=k[r],s=r}const a=o.message;typeof a=="string"&&(s=a),i=o.details,i!==void 0&&(i=m(i))}}catch{}return n==="ok"?null:new p(n,s,i)}/**
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
 */class ne{constructor(t,n,s){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){const t=await this.getAuthToken(),n=await this.getMessagingToken(),s=await this.getAppCheckToken();return{authToken:t,messagingToken:n,appCheckToken:s}}}/**
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
 */const w="us-central1";function se(e){let t=null;return{promise:new Promise((n,s)=>{t=setTimeout(()=>{s(new p("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class ie{constructor(t,n,s,i,o=w,r){this.app=t,this.fetchImpl=r,this.emulatorOrigin=null,this.contextProvider=new ne(n,s,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(o);this.customDomain=a.origin,this.region=w}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function oe(e,t,n){return s=>ce(e,t,s,n||{})}async function re(e,t,n,s){n["Content-Type"]="application/json";let i;try{i=await s(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}function ce(e,t,n,s){const i=e._url(t);return ae(e,i,n,s)}async function ae(e,t,n,s){n=A(n);const i={data:n},o={},r=await e.contextProvider.getContext();r.authToken&&(o.Authorization="Bearer "+r.authToken),r.messagingToken&&(o["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(o["X-Firebase-AppCheck"]=r.appCheckToken);const a=s.timeout||7e4,l=se(a),d=await Promise.race([re(t,i,o,e.fetchImpl),l.promise,e.cancelAllRequests]);if(l.cancel(),!d)throw new p("cancelled","Firebase Functions instance was deleted.");const E=te(d.status,d.json);if(E)throw E;if(!d.json)throw new p("internal","Response is not valid JSON object.");let h=d.json.data;if(typeof h=="undefined"&&(h=d.json.result),typeof h=="undefined")throw new p("internal","Response is missing data field.");return{data:m(h)}}const v="@firebase/functions",C="0.8.4";/**
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
 */const ue="auth-internal",le="app-check-internal",de="messaging-internal";function pe(e,t){const n=(s,{instanceIdentifier:i})=>{const o=s.getProvider("app").getImmediate(),r=s.getProvider(ue),a=s.getProvider(de),l=s.getProvider(le);return new ie(o,r,a,l,i,e)};G(new H(N,n,"PUBLIC").setMultipleInstances(!0)),T(v,C,t),T(v,C,"esm2017")}/**
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
 */function fe(e=V(),t=w){return B(D(e),N).getImmediate({identifier:t})}function he(e,t,n){return oe(D(e),t,n)}pe(fetch.bind(self));var ge={props:["subscription"],data(){return{isLoading:!1}},methods:{async openCustomerPortal(){this.isLoading=!0;const e=fe(),t=he(e,"ext-firestore-stripe-payments-createPortalLink"),{data:n}=await t({returnUrl:window.location.origin});console.log(n),window.location.assign(n.url)}}};const _e={class:"space-box"},me={class:"child-box"},be={class:"info-container"},ye={key:0,class:"alert alert-warning",style:{color:"red"}},Ae={id:"fresh"},we=c("li",null,[c("b",null,"Status:"),_(" Active")],-1),Se=c("li",null,[c("b",null,"Subscription:"),_(" RHC $5/Monthly")],-1),Ne=c("b",null,"Current Period Start:",-1),Ee=c("b",null,"Current Period End:",-1),Te=["disabled"];function ke(e,t,n,s,i,o){return u(),f("div",_e,[c("div",me,[c("div",be,[e.subscription.cancel_at_period_end?(u(),f("div",ye," This subscription will cancel at the end of the period! ")):$("",!0),c("ul",Ae,[we,Se,c("li",null,[Ne,_(" "+g(new Date(e.subscription.current_period_start.seconds*1e3).toLocaleString()),1)]),c("li",null,[Ee,_(" "+g(new Date(e.subscription.current_period_end.seconds*1e3).toLocaleString()),1)])])])]),c("div",null,[c("button",{class:"button-24",disabled:e.isLoading,onClick:t[0]||(t[0]=(...r)=>e.openCustomerPortal&&e.openCustomerPortal(...r))},g(e.isLoading?"Loading...":"Open Billing Portal"),9,Te)])])}var ve=S(ge,[["render",ke]]),Ce={components:{PriceSelection:q,SubscribedAccount:ve},data(){return{isLoading:!1,subscription:null}},mounted(){this.fetchSubscription()},methods:{async fetchSubscription(){this.isLoading=!0;const e=L(),t=I(e,"customers",P().currentUser.uid,"subscriptions"),n=F(t,M("status","in",["trialing","active","past_due","unpaid"]));this.subscription=await x(n).then(s=>s.docs.length>0?s.docs[0].data():null),this.subscription==null?console.log("You are NOT subscribed!!!"):(console.log("You are subscribed!!!"),this.$store.commit("SET_ISSUBSCRIBED",!0)),this.isLoading=!1}}};const Le={key:0},Ie={key:1};function Pe(e,t,n,s,i,o){const r=y("PriceSelection"),a=y("SubscribedAccount"),l=y("default-layout");return u(),b(l,null,{default:J(()=>[e.subscription?(u(),f("h2",Le,"Account Details")):$("",!0),e.isLoading?(u(),f("div",Ie,"Loading account information...")):e.subscription?(u(),b(a,{key:3,subscription:e.subscription},null,8,["subscription"])):(u(),b(r,{key:2}))]),_:1})}var Re=S(Ce,[["render",Pe],["__scopeId","data-v-84f73eea"]]);export{Re as default};
