(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{243:function(t,e,r){var content=r(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("dc093880",content,!0,{sourceMap:!1})},275:function(t,e,r){"use strict";var n=r(56),o=r(60),c=r.n(o),l=r(396),v=r(406),f=r(403),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("Navbar"),t._v(" "),r("v-main",[r("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[r("nuxt",{attrs:{"keep-alive":""}})],1)],1),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{Navbar:r(386).default,Footer:r(387).default}),c()(component,{VApp:l.a,VContainer:v.a,VMain:f.a})},278:function(t,e,r){r(279),t.exports=r(280)},311:function(t,e,r){"use strict";r(243)},312:function(t,e,r){var n=r(18)(!1);n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=n},385:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"getters",(function(){return o}));var n=function(){return{siteName:"SAMPLE PROJECT",companyName:"SAMPLE PROJECT LIMITED",navItems:[{title:"Home",to:"/"},{title:"Services",to:"/services"},{title:"About",to:"/about"},{title:"Contact",to:"/contact"}],socialLinks:[{icon:"mdi-facebook",url:"https://facebook.com/",text:"facebook"},{icon:"mdi-twitter",url:"https://twitter.com/",text:"twitter"},{icon:"mdi-instagram",url:"https://www.instagram.com/",text:"instagram"},{icon:"mdi-linkedin",url:"https://www.linkedin.com/company/",text:"linkedin"}]}},o={siteName:function(t){return t.siteName},companyName:function(t){return t.companyName},navItems:function(t){return t.navItems},socialLinks:function(t){return t.socialLinks}}},386:function(t,e,r){"use strict";r.r(e);r(10),r(7),r(9),r(4),r(14),r(8),r(15);var n=r(2),o=r(62);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{drawer:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["siteName","navItems"]))},v=l,f=r(56),m=r(60),d=r.n(m),O=r(405),y=r(397),x=r(207),_=r(198),w=r(129),h=r(107),j=r(404),C=r(398),P=r(399),k=r(400),E=r(272),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-navigation-drawer",{staticClass:"secondary",attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:"/",exact:""}},[r("v-system-bar",{staticClass:"secondary",attrs:{height:"55"}},[r("h6",{staticClass:"primary--text"},[t._v("SAMPLE PROJECT")])])],1),t._v(" "),r("v-list",{attrs:{nav:""}},t._l(t.navItems,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-capitalize primary--text",domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{app:"",flat:"",color:"secondary"}},[r("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",attrs:{color:"success"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("nuxt-link",{staticClass:"text-decoration-none ml-16",attrs:{to:"/",exact:""}},[r("h3",[t._v("SAMPLE PROJECT")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",{staticClass:"hidden-sm-and-down ml-16 pr-16"},t._l(t.navItems,(function(e,i){return r("v-btn",{key:i,staticClass:"primary--text text-capitalize",attrs:{to:""+e.to,tile:"",text:""}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAppBar:O.a,VAppBarNavIcon:y.a,VBtn:x.a,VList:_.a,VListItem:w.a,VListItemContent:h.a,VListItemTitle:h.b,VNavigationDrawer:j.a,VRow:C.a,VSpacer:P.a,VSystemBar:k.a,VToolbarItems:E.a})},387:function(t,e,r){"use strict";r.r(e);r(10),r(7),r(9),r(4),r(14),r(8),r(15);var n=r(2),o=r(62);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["companyName","navItems"]))},v=l,f=r(56),m=r(60),d=r.n(m),O=r(207),y=r(200),x=r(199),_=r(401),w=r(402),h=r(398),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{padless:""}},[r("v-card",{staticClass:"secondary text-center",attrs:{flat:"",tile:"",width:"100%"}},[r("v-row",{staticClass:"primary--text font-weight-thin pt-16"},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[r("h3",[t._v("Menu")]),t._v(" "),t._l(t.navItems,(function(e,i){return r("v-btn",{key:i,staticClass:"success--text text-capitalize",attrs:{to:""+e.to,tile:"",text:"",block:""}},[t._v("\n          "+t._s(e.title)+"\n        ")])}))],2),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[r("h3",[t._v("Follow Us")]),t._v(" "),r("social-links")],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[r("h3",[t._v("Contact Us")]),t._v(" "),r("p",{staticClass:"success--text"},[t._v("\n          Phone: +234 (0)90x xxx xxxx\n        ")]),t._v(" "),r("p",{staticClass:"success--text"},[t._v("\n          Email: info@example.com\n        ")]),t._v(" "),r("p",{staticClass:"success--text"},[t._v("\n          Location: Lagos\n        ")])])],1),t._v(" "),r("v-card-text",{staticClass:"success--text py-16"},[t._v("\n      © "+t._s((new Date).getFullYear())+" - "+t._s(t.companyName)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{SocialLinks:r(388).default}),d()(component,{VBtn:O.a,VCard:y.a,VCardText:x.a,VCol:_.a,VFooter:w.a,VRow:h.a})},388:function(t,e,r){"use strict";r.r(e);r(10),r(7),r(9),r(4),r(14),r(8),r(15);var n=r(2),o=r(62);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["socialLinks"]))},v=l,f=r(56),m=r(60),d=r.n(m),O=r(207),y=r(406),x=r(197),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"text-center"},t._l(t.socialLinks,(function(link,i){return r("v-btn",{key:i,staticClass:"mx-1 success--text",attrs:{icon:"",href:link.url,target:"_blank"}},[r("v-icon",{attrs:{size:"20px"}},[t._v("\n      "+t._s(link.icon)+"\n    ")])],1)})),1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:O.a,VContainer:y.a,VIcon:x.a})},89:function(t,e,r){"use strict";var n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(311),r(56)),c=r(60),l=r.n(c),v=r(396),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[278,8,2,9]]]);