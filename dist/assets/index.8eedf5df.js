import{Q as r}from"./QInput.18a79e05.js";import{g as i,O as n,r as c,_ as p,c as t,t as m,e as u,b as o,d as _,a as l,o as d,P as h,R as g}from"./index.90bad9b0.js";var f={name:"Register",data(){return{email:"",password:"",error:""}},methods:{pressed:async function(){try{const e=i(),s=await n(e,this.email,this.password);console.log(s),c.replace({name:"Dashbaord"})}catch(e){console.log(e.message)}}}};const w=e=>(h("data-v-42c35239"),e=e(),g(),e),v={class:"register"},y={key:0,class:"error"},V={class:"form-signin"},b=w(()=>o("h1",{class:"alert"},"Registration is closed at this time.",-1)),I={class:"form_inputs"},k={class:"email",style:{"background-color":"white"}},P={class:"password",style:{"background-color":"white"}};function S(e,s,U,$,B,E){return d(),t("div",v,[e.error?(d(),t("div",y,m(e.error.message),1)):u("",!0),o("main",V,[o("form",{onSubmit:s[2]||(s[2]=_((...a)=>e.pressed&&e.pressed(...a),["prevent"]))},[b,o("div",I,[o("div",k,[l(r,{outlined:"",label:"Email",modelValue:e.email,"onUpdate:modelValue":s[0]||(s[0]=a=>e.email=a),type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com"},null,8,["modelValue"])]),o("div",P,[l(r,{outlined:"",modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.password=a),type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password",label:"Password"},null,8,["modelValue"])])])],32)])])}var A=p(f,[["render",S],["__scopeId","data-v-42c35239"]]);export{A as default};
