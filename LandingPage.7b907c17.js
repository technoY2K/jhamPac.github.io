parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"2Tay":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=l(require("react")),t=require("react-router-dom");function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,l):{};a.get||a.set?Object.defineProperty(t,l,a):t[l]=e[l]}return t.default=e,t}function a(){return e.default.createElement("div",{id:"landing-page",className:"container"},e.default.createElement("div",{className:"row top-half"},e.default.createElement("div",{className:"col s12 text-box"},e.default.createElement("p",{className:"title-name"},"Kevia Cloud"),e.default.createElement("h3",null,"Software Engineer"),e.default.createElement("div",{className:"divider"}))),e.default.createElement("div",{className:"row bottom-half"},e.default.createElement("div",{className:"col s12 m6 bio"},e.default.createElement("p",null,"Currently working with:"),e.default.createElement("p",null,"React 🥇"),e.default.createElement("p",null,"Parcel 🥇"),e.default.createElement("p",null,"GraphQL 🥈"),e.default.createElement("p",null,"Firebase 🥈"),e.default.createElement("span",null,"I love movies from the 1990s like The 5th Element and even terrible ones like Demolition Man. Prada > Gucci right now and Mokba is the jamz!")),e.default.createElement("div",{className:"col s12 m6 contact"},e.default.createElement("ul",null,e.default.createElement("li",null,e.default.createElement("div",{className:"padded-multiline purple darken-4"},e.default.createElement("a",{href:"https://www.linkedin.com/in/kevia-cloud/",target:"_blank"},"linkedin"))),e.default.createElement("li",null,e.default.createElement("div",{className:"padded-multiline purple darken-4"},e.default.createElement("a",{href:"https://twitter.com/keviaDotMe",target:"_blank"},"twitter"))),e.default.createElement("li",null,e.default.createElement("div",{className:"padded-multiline purple darken-4"},e.default.createElement("a",{href:"https://github.com/jhamPac",target:"_blank"},"github"))),e.default.createElement("li",null,e.default.createElement("div",{className:"padded-multiline black center-align"},e.default.createElement(t.Link,{to:"/1717"},"17:17")))))))}
},{"react":"1n8/","react-router-dom":"obMO"}]},{},[], null)
//# sourceMappingURL=/LandingPage.7b907c17.map