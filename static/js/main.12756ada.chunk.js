(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(13),s=n.n(r),i=(n(21),n(22),n(3)),o=n(6),l=n.n(o),u=n(9),j=n(4),b=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.latitude?"lat=".concat(t.latitude,"&lon=").concat(t.longitude):"".concat(t.param,"=").concat(t.value,",us"),e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?".concat(n,"&appid=5261ae218e7be91538dfa119b6491587&units=imperial"));case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=(n(24),n(0)),p=function(e){return Object(d.jsx)("div",{className:"weather-container",children:Object(d.jsx)("div",{className:"spinner",children:e.children})})},h=function(e){var t=e.setlookupParams;return Object(d.jsx)("div",{children:Object(d.jsx)("input",{id:"lookUpParams",type:"text",onChange:function(e){setTimeout((function(){var n,a=e.target.value.trim();if(n=a,new RegExp(/\b\d{5}\b/g).test(n)||/\b[a-zA-Z]+,[ ]?[A-Z]{2}\b/.test(n)){var c=parseInt(a)?"zip":"q";t((function(e){return Object(i.a)(Object(i.a)({},e),{},{isvalid:!0,param:c,value:a.replace(/\s+/g,"")})}))}else t((function(e){return Object(i.a)(Object(i.a)({},e),{},{isvalid:!1})}))}),500)},placeholder:"97015 or Clackamas, OR"})})},O=(n(26),function(e){var t=Object(a.useState)({param:null,value:"",isvalid:!1}),n=Object(j.a)(t,2),c=n[0],r=n[1];return Object(d.jsxs)("div",{className:"lookup-container",children:[Object(d.jsx)("h1",{children:"Check The Weather"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=Object(i.a)({},c),a={param:n.param,value:n.value};e.setUserLocation(a)},style:{backgroundColor:e.mainPage?"#3652b1":"rgba(27,27,27,0"},children:[Object(d.jsx)(h,{setlookupParams:r,value:c.value}),Object(d.jsx)("button",{type:"submit",value:"Submit",disabled:!c.isvalid,children:"Submit"})]})]})}),m=(n(27),function(e){var t=e.setUserLocation,n=e.close;return Object(d.jsxs)("div",{className:"layover-search-container",children:[Object(d.jsx)("span",{className:"icon-container",onClick:function(){n(!1)},children:Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",children:[Object(d.jsx)("path",{fill:"none",stroke:"#af3648",strokeMiterlimit:"10",strokeWidth:"32",d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z",className:"colorStrokecurrentColor svgStroke"}),Object(d.jsx)("path",{fill:"none",stroke:"#af3648",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M320 320L192 192M192 320l128-128",className:"colorStrokecurrentColor svgStroke"})]})}),Object(d.jsx)(O,{setUserLocation:t})]})}),f=(n(28),function(e){var t=e.name,n=e.coord,r=n.lat,s=n.lon,i=e.main,o=i.temp,l=i.feels_like,u=e.weather,b=e.setUserLocation,p=Object(a.useState)(!1),h=Object(j.a)(p,2),O=h[0],f=h[1],v="http://openweathermap.org/img/wn/".concat(u[0].icon,"@2x.png");Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]);return Object(d.jsxs)(c.a.Fragment,{children:[O?Object(d.jsx)(m,{close:f,setUserLocation:b}):Object(d.jsx)("span",{className:"icon-container",onClick:function(){f((function(e){return!e}))},children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon-search",viewBox:"0 0 512 512",children:Object(d.jsx)("path",{d:"M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z",fill:"#af3648",className:"color000 svgShape"})})}),Object(d.jsxs)("div",{className:"weather-stats",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"weather-icon",src:v,alt:"weather icon"})}),Object(d.jsx)("div",{className:"temp",children:o.toString().split(".")[0]}),Object(d.jsx)("div",{className:"description",children:u[0].description}),Object(d.jsx)("div",{className:"cityName",children:t}),Object(d.jsxs)("div",{className:"coordinates",children:[r,Object(d.jsx)("span",{children:"\xa0"}),s]}),Object(d.jsxs)("div",{children:["Feels like:",l.toString().split(".")[0]]})]})]})}),v=(n(29),function(e){return Object(d.jsx)("p",{className:"error-banner",children:e.children})}),x=(n(30),function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),o=s[0],h=s[1],m=Object(a.useState)(!1),x=Object(j.a)(m,2),g=x[0],w=x[1],k=Object(a.useState)(""),N=Object(j.a)(k,2),S=N[0],L=N[1],C=function(e){c(e.coords),w(!1)},y=function(){w(!1)};Object(a.useEffect)((function(){window.navigator.geolocation&&(w(!0),window.navigator.geolocation.getCurrentPosition(C,y))}),[]),Object(a.useEffect)((function(){L("");var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}return w(!0),e.next=4,b(n);case 4:200===(t=e.sent).cod?h(t):(L(t.message),h("")),w(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]);if(g)return Object(d.jsx)(p,{children:Object(d.jsx)("div",{children:"Currently Loading location"})});var U=o&&o.weather[0].icon;return"50"===U.substring(0,2)&&(U=o.weather[0].main.toLowerCase()),Object(d.jsxs)("div",{className:"weather-container ".concat(o?"background-image":""),style:{backgroundImage:o?"linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.15)),url(\n        https://weatherappreat.s3.us-west-2.amazonaws.com/weather-app-images/tinified/".concat(U,".jpg)"):"none"},children:[S&&Object(d.jsx)(v,{children:S}),(!n||S)&&Object(d.jsx)(O,{setUserLocation:c,mainPage:!0}),!!o&&Object(d.jsx)(f,Object(i.a)(Object(i.a)({},o),{},{setUserLocation:c}))]})});var g=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(x,{})})},w=n(14),k=n.n(w);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(k.a,{basename:"/weatherapp1",children:Object(d.jsx)(g,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.12756ada.chunk.js.map