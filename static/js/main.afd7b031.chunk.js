(this["webpackJsonpweb-api-test"]=this["webpackJsonpweb-api-test"]||[]).push([[0],{25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(18),i=n.n(r),o=(n(25),n(9),n(8)),a=n(1),l=function(){return Object(a.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(a.jsxs)("form",{className:"container-fluid justify-content-start",children:[Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("button",{className:"btn btn-primary m-3",type:"button",children:"Home"})}),Object(a.jsx)(o.b,{to:"/counter",children:Object(a.jsx)("button",{className:"btn btn-sm btn-secondary m-3",type:"button",children:"Counter"})}),Object(a.jsx)(o.b,{to:"/get_from_api",children:Object(a.jsx)("button",{className:"btn btn-sm btn-secondary m-3",type:"button",children:"Get From API"})})]})})},b=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"This is a Demo App made in:"}),Object(a.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(a.jsx)("li",{className:"list-group-item",children:"ASP.NET Core with C#"}),Object(a.jsx)("li",{className:"list-group-item",children:"React with TypeScript"}),Object(a.jsx)("li",{className:"list-group-item",children:"PostgreSQL"}),Object(a.jsx)("li",{className:"list-group-item",children:"GitHub Pages"}),Object(a.jsx)("li",{className:"list-group-item",children:"Heroku"})]})]})},j=n(11),h=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{style:{fontSize:25},className:"badge rounded-pill bg-success m-4",children:n}),Object(a.jsx)("button",{style:{fontSize:25,fontWeight:"bold"},className:"btn btn-info m-2",onClick:function(){s(n+1)},children:"Increment"}),Object(a.jsx)("button",{style:{fontSize:25,fontWeight:"bold"},className:"btn btn-warning m-2",onClick:function(){s(n-n)},children:"Reset"})]})},d=n(2),u=n(16),m=n.n(u),p=n(20),x=function(){Object(c.useEffect)((function(){r()}),[]);var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],r=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://asp-net-web-api-demo.herokuapp.com/api/user/");case 3:if(!(t=e.sent).ok){e.next=8;break}console.log("Response Received \ud83d\ude03"),e.next=9;break;case 8:throw new Error;case 9:return e.next=11,t.json();case 11:n=e.sent,s(n),console.log(n),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log("Bad Request \ud83d\ude25");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Fetching the list of Users from the ASP.NET Core Web API..."}),Object(a.jsx)("br",{}),Object(a.jsxs)("table",{className:"table table-striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"User ID"}),Object(a.jsx)("th",{scope:"col",children:"Name"}),Object(a.jsx)("th",{scope:"col",children:"Email ID"})]})}),Object(a.jsx)("tbody",{children:n.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.id}),Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.email})]},e.email)}))})]})]})},O=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(l,{}),Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/",exact:!0,component:b}),Object(a.jsx)(d.a,{path:"/counter",exact:!0,component:h}),Object(a.jsx)(d.a,{path:"/get_from_api",exact:!0,component:x})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.afd7b031.chunk.js.map