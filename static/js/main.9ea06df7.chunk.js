(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{16:function(e,a,t){},17:function(e,a,t){},20:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),l=t(10),i=t.n(l),s=(t(16),t(7)),r=t(3),o=(t(17),t(11)),j=t.n(o),d=t(6),u=(t(20),t(0)),h=function(e){var a=e.airlineData,t=Object(c.useState)(!1),n=Object(r.a)(t,2),l=n[0],i=n[1];return Object(u.jsx)("div",{className:"card__root",children:Object(u.jsxs)("div",{className:"card__card",onMouseEnter:function(){i(!0)},onMouseLeave:function(){i(!1)},children:[Object(u.jsx)("img",{src:"https://www.kayak.com".concat(a.logoURL),alt:"not available",className:"card__img"}),Object(u.jsxs)("div",{className:"card__content",children:[Object(u.jsx)("h4",{className:"card__hoveredTitle",children:a.name}),l?Object(u.jsxs)("div",{className:"card__hoveredContent",children:[Object(u.jsx)("p",{className:"card__hoveredText",children:a.alliance}),Object(u.jsx)("p",{className:"card__hoveredText",children:a.phone}),Object(u.jsx)("p",{className:"card__hoveredURL",children:a.site})]}):null]})]})})},b=t.p+"static/media/Logo.b8d2da75.svg",p=(t(22),function(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("img",{src:b,alt:"Kayak Logo - Not available"})})});var O=function(){var e=Object(c.useState)([]),a=Object(r.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)([]),i=Object(r.a)(l,2),o=i[0],b=i[1];Object(c.useEffect)((function(){j.a.ajax({url:"https://www.kayak.com/h/mobileapis/directory/airlines/homework",jsonp:"jsonp",type:"GET",headers:{"X-Requested-With":"XMLHttpRequest"},crossDomain:!0,dataType:"jsonp"}).then((function(e){return e.filter((function(e){return"ST"!==e.alliance&&"OW"!==e.alliance&&"SA"!==e.alliance||n((function(a){return[].concat(Object(s.a)(a),[{logoURL:e.logoURL,name:e.name,alliance:e.alliance,phone:e.phone,site:e.site}])})),null}))}))}),[]);var O=function(e){if(o.includes(e.target.value)){var a=o.filter((function(a){return a!==e.target.value}));b(a)}else b((function(a){return[].concat(Object(s.a)(a),[e.target.value])}))};return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(p,{}),Object(u.jsx)("h1",{className:"app__title",children:"Airlines"}),Object(u.jsxs)("div",{className:"app__filterContainer",children:[Object(u.jsx)("h5",{className:"app__filterTitle",children:"Filter by Alliances"}),Object(u.jsxs)("div",{className:"app__filters",children:[Object(u.jsxs)("div",{className:"app__filter",children:[Object(u.jsx)("input",{value:"OW",name:"Oneworld",onChange:O,type:"checkbox"}),Object(u.jsx)("label",{htmlFor:"Oneworld",children:"Oneworld"})]}),Object(u.jsxs)("div",{className:"app__filter",children:[Object(u.jsx)("input",{value:"ST",name:"Sky Team",onChange:O,type:"checkbox"}),Object(u.jsx)("label",{htmlFor:"Sky Team",children:"Sky Team"})]}),Object(u.jsxs)("div",{className:"app__filter",children:[Object(u.jsx)("input",{value:"SA",name:"Star Alliance",onChange:O,type:"checkbox"}),Object(u.jsx)("label",{htmlFor:"Star Alliance",children:"Star Alliance"})]})]})]}),Object(u.jsx)("div",{className:"app__content",children:Object(u.jsx)("div",{className:"app__grid",children:null===t||void 0===t?void 0:t.map((function(e){return 0===o.length||o.includes(e.alliance)?Object(u.jsx)(h,{airlineData:e},Object(d.v4)()):null}))})})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,l=a.getLCP,i=a.getTTFB;t(e),c(e),n(e),l(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),m()}},[[23,1,2]]]);
//# sourceMappingURL=main.9ea06df7.chunk.js.map