(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(9),r=n.n(i),c=(n(16),n(2)),o=(n(17),n(0));var l=function(e){var t=e.left,n=e.right;return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("div",{className:"left",children:t}),Object(o.jsx)("div",{className:"right",children:n})]})})};var u,h=function(e){var t=e.goNextPage;return Object(o.jsx)(l,{left:Object(o.jsx)("div",{className:"circle"}),right:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"heading-text",children:"#neverforgotten"}),Object(o.jsx)("p",{className:"content-text",children:"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),Object(o.jsx)("button",{className:"home-button",onClick:t,children:"Take the pledge"})]})})},m=n(3),p=n(7),d=n(10),j=n(11),b=n.n(j),g=n(6),f=n(8),x=n.n(f),y=(n(19),Object(g.css)(u||(u=Object(d.a)(["\n  width: 10px;\n  height: 10px;\n  margin-left: 10px;\n"]))));var O=[h,function(e){var t=e.goNextPage,n=Object(s.useState)(!1),a=Object(c.a)(n,2),i=a[0],r=a[1],u=Object(s.useState)({name:"",email:"",phone:"",whatsapp:"",country:"",region:""}),h=Object(c.a)(u,2),d=h[0],j=h[1],g=function(e,t){j(Object(p.a)(Object(p.a)({},d),{},Object(m.a)({},e,t)))};return Object(o.jsx)(l,{left:Object(o.jsx)("p",{className:"content-text",children:"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),right:Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{className:"main-form",onSubmit:function(e){r(!0),e.preventDefault(),function(e){var t=e.name,n=e.email,s=e.phone,a=e.whatsapp,i=e.country,r=e.region,c=new Headers;c.append("Content-Type","application/json");var o=JSON.stringify({name:t,email:n,phone:s,whatsapp:a,country:i,region:r});return fetch("https://www.prolifearmy.org/api/web/oath",{method:"POST",headers:c,body:o,redirect:"follow"}).then((function(e){return e.text()}))}(d).then((function(){r(!1),t()})).catch((function(){alert("Something went wrong, please try again!"),r(!1)}))},children:[Object(o.jsxs)("div",{className:"main-form-top",children:[Object(o.jsxs)("label",{children:["Name:",Object(o.jsx)("input",{value:d.name,required:!0,type:"text",onChange:function(e){return g("name",e.target.value)}})]}),Object(o.jsxs)("label",{children:["Email:",Object(o.jsx)("input",{value:d.email,required:!0,type:"email",onChange:function(e){return g("email",e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"main-form-bottom",children:[Object(o.jsxs)("label",{children:["Phone:",Object(o.jsx)(x.a,{value:d.phone,country:"in",onChange:function(e){return g("phone",e)}})]}),Object(o.jsxs)("label",{children:["WhatsApp:",Object(o.jsx)(x.a,{country:"in",onChange:function(e){return g("whatsapp",e)}})]}),Object(o.jsxs)("label",{children:["Country:",Object(o.jsx)("input",{value:d.country,type:"text",onChange:function(e){return g("country",e.target.value)}})]}),Object(o.jsxs)("label",{children:["Region:",Object(o.jsx)("input",{value:d.region,type:"text",onChange:function(e){return g("region",e.target.value)}})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{type:"submit",className:"pledge-button",children:"Sign"}),i&&Object(o.jsx)(b.a,{color:"#fff",loading:!0,size:150,css:y})]})]})})})},function(){return Object(o.jsx)("div",{className:"done-page",children:Object(o.jsx)(l,{left:Object(o.jsx)("div",{className:"circle"}),right:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"heading-text",children:"Thank you"}),Object(o.jsx)("p",{className:"content-text",children:"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})})})}];var v=function(){var e=Object(s.useState)(0),t=Object(c.a)(e,2),n=t[0],a=t[1],i=O[n];return Object(o.jsx)(i,{goNextPage:function(){return a(n+1)}})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),w()}},[[27,1,2]]]);
//# sourceMappingURL=main.6695f9c5.chunk.js.map