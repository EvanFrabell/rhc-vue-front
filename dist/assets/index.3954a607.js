import{Q as y,a as R,b as p}from"./QCard.7ae6085e.js";import{g as d,a6 as S,G as v,s as V,_ as C,c as h,b as a,w as n,o as m,d as o,Q as w,h as f,t as g,f as k,a7 as L,a8 as P}from"./index.c72d262d.js";import{U as _,D as b,K as U,Q as A,g as Q,A as E,R as I}from"./index.esm2017.fe74b9ee.js";var $={name:"Register",data(){return{email:"",password:"",passwordCopy:"",error:"",products:[],selectedPrice:"price_1Lat4VGrTucbD8SBxtUFHJR3",isLoading:!1}},methods:{async emailRegister(){if(this.password!==this.passwordCopy)alert("Passwords do not match.");else try{const s=d(),e=await S(s,this.email,this.password);await this.fetchSubscription()}catch(s){console.log(s.message),s.message=="Firebase: Error (auth/email-already-in-use)."?alert("Email is already in use."):s.message=="Firebase: Password should be at least 6 characters (auth/weak-password)."&&alert("Password must be at least 6 characters in length.")}},async googleRegister(){try{const s=d(),e=new v,t=await V(s,e);await this.fetchSubscription()}catch(s){console.log(s.message)}},async fetchSubscription(){this.isLoading=!0;const s=_(),e=b(s,"customers",d().currentUser.uid,"subscriptions"),t=U(e,A("status","in",["trialing","active","past_due","unpaid"]));this.subscription=await Q(t).then(i=>i.docs.length>0?i.docs[0].data():null),this.subscription==null?(console.log("You are NOT subscribed!!!"),this.createSub()):(console.log("You are already subscribed!!!"),this.$store.commit("SET_ISSUBSCRIBED",!0),this.isLoading=!1,this.$router.replace({name:"Account"}))},async createSub(){const s=_(),e=b(s,"customers",d().currentUser.uid,"checkout_sessions"),t=await E(e,{price:this.selectedPrice,success_url:window.location.origin,cancel_url:window.location.origin});I(t,i=>{const{error:c,url:u}=i.data();c&&(console.error(`An error occured: ${c.message}`),this.isLoading=!1),u&&window.location.assign(u)})}}};const l=s=>(L("data-v-39ad46cf"),s=s(),P(),s),B={class:"register"},D={class:"login_form"},N=l(()=>o("h2",{class:"form-title"},"$5/Month All Access Subscription",-1)),G=l(()=>o("p",{class:"form-info"},"Please fill in registration form!",-1)),T={class:"form_inputs"},F={class:"email",style:{"background-color":"white"}},K={class:"password",style:{"background-color":"white"}},O=l(()=>o("br",null,null,-1)),W={class:"password-copy",style:{"background-color":"white"}},Y=l(()=>o("br",null,null,-1)),H=l(()=>o("p",{style:{"margin-bottom":"0"}},"OR",-1)),J={key:0,class:"error"};function M(s,e,t,i,c,u){return m(),h("section",B,[a(y,{class:"login-card text-white"},{default:n(()=>[a(R,null,{default:n(()=>[o("div",null,[o("form",D,[N,G,o("div",T,[o("div",F,[a(p,{filled:"",label:"Email",modelValue:s.email,"onUpdate:modelValue":e[0]||(e[0]=r=>s.email=r),type:"email",id:"login-email"},null,8,["modelValue"])]),o("div",K,[a(p,{filled:"",modelValue:s.password,"onUpdate:modelValue":e[1]||(e[1]=r=>s.password=r),type:"password",id:"registration-password",label:"Password"},null,8,["modelValue"])]),O,o("div",W,[a(p,{filled:"",modelValue:s.passwordCopy,"onUpdate:modelValue":e[2]||(e[2]=r=>s.passwordCopy=r),type:"password",id:"registration-password",label:"Re-type Password"},null,8,["modelValue"])])]),Y,a(w,{onClick:s.emailRegister,outline:"",color:"white",class:"email-register-btn",disabled:s.isLoading},{default:n(()=>[f(g(s.isLoading?"Loading...":"Register with Email"),1)]),_:1},8,["onClick","disabled"]),H,a(w,{onClick:s.googleRegister,outline:"",color:"white",class:"google-register-btn",disabled:s.isLoading},{default:n(()=>[f(g(s.isLoading?"Loading...":"Register with Gmail Account"),1)]),_:1},8,["onClick","disabled"])]),s.error?(m(),h("div",J,g(s.error.message)+" 1234",1)):k("",!0)])]),_:1})]),_:1})])}var X=C($,[["render",M],["__scopeId","data-v-39ad46cf"]]);export{X as default};
