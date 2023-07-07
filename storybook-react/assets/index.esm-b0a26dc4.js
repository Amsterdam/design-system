import{_ as y,B as ne,a as h}from"./index.esm-ba8d77a4.js";import{j as i,c as u}from"./clsx.m-51e04ab1.js";import{r as d}from"./index-8db94870.js";import{d as ae,e as oe}from"./index.esm-681424b7.js";function ce(e){if(Array.isArray(e))return e}function ie(e,n){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var t,a,o,s,m=[],c=!0,v=!1;try{if(o=(r=r.call(e)).next,n===0){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=o.call(r)).done)&&(m.push(t.value),m.length!==n);c=!0);}catch(O){v=!0,a=O}finally{try{if(!c&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(v)throw a}}return m}}function k(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function se(e,n){if(e){if(typeof e=="string")return k(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,n)}}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(e,n){return ce(e)||ie(e,n)||se(e,n)||de()}var pe=["level","styleLevel","children","className"];function L(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function _(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?L(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function q(e){switch(e){case 2:return"h2";case 3:return"h3";case 4:return"h4";default:return"h1"}}var V=d.forwardRef(function(e,n){var r=e.level,t=r===void 0?1:r,a=e.styleLevel,o=e.children,s=e.className,m=y(e,pe),c=q(t);return i.jsx(c,_(_({ref:n,className:u("amsterdam-heading","amsterdam-heading-".concat(a||t),s)},m),{},{children:o}))});V.displayName="Heading";var ue=["className","size","svg"];function $(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function I(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?$(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var w=d.forwardRef(function(e,n){var r=e.className,t=e.size,a=t===void 0?"level-3":t,o=e.svg,s=y(e,ue);return i.jsx("span",I(I({ref:n,className:u("amsterdam-icon",a==="level-3"&&"amsterdam-icon-size-3",a==="level-4"&&"amsterdam-icon-size-4",a==="level-5"&&"amsterdam-icon-size-5",a==="level-6"&&"amsterdam-icon-size-6",a==="level-7"&&"amsterdam-icon-size-7",r)},s),{},{children:o()}))});w.displayName="Icon";var me=["children","variant","onBackground","className"];function R(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function z(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?R(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var G=d.forwardRef(function(e,n){var r=e.children,t=e.variant,a=e.onBackground,o=e.className,s=y(e,me);return i.jsxs("a",z(z({},s),{},{ref:n,className:u("amsterdam-link",{"amsterdam-link--inline":t==="inline","amsterdam-link--standalone-bold":t==="standaloneBold","amsterdam-link--in-list":t==="inList","amsterdam-link--on-background-light":a==="light","amsterdam-link--on-background-dark":a==="dark"},o),children:[t==="inList"&&i.jsx(w,{svg:ae,size:"level-7"}),r]}))});G.displayName="Link";var fe=["children","disabled","variant"];function E(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function H(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?E(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Oe(e){switch(e){case"secondary":return"secondary-action-button";case"tertiary":return"subtle-button";default:return"primary-action-button"}}var J=d.forwardRef(function(e,n){var r=e.children,t=e.disabled,a=e.variant,o=a===void 0?"primary":a,s=y(e,fe);return i.jsx(ne,H(H({},s),{},{appearance:Oe(o),ref:n,disabled:t,className:u("amsterdam-button",o==="secondary"&&"amsterdam-button--secondary"),children:r}))});J.displayName="Button";var ye=["children","size","className"];function K(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function U(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?K(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Q=d.forwardRef(function(e,n){var r=e.children,t=e.size,a=e.className,o=y(e,ye);return i.jsx("p",U(U({ref:n,className:u("amsterdam-paragraph",t&&"amsterdam-paragraph-".concat(t),a)},o),{},{children:r}))});Q.displayName="Paragraph";var he=["children","className"];function B(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function C(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?B(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Y=d.forwardRef(function(e,n){var r=e.children,t=e.className,a=y(e,he);return i.jsx("label",C(C({},a),{},{ref:n,className:u("amsterdam-form-label",t),children:r}))});Y.displayName="FormLabel";var ve=["children","className"],be=["children","className"];function F(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function j(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?F(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var x=d.forwardRef(function(e,n){var r=e.children,t=e.className,a=y(e,ve);return i.jsx("ul",j(j({ref:n,className:u("amsterdam-unordered-list",t)},a),{},{children:r}))});x.displayName="UnorderedList";var Z=d.forwardRef(function(e,n){var r=e.children,t=e.className,a=y(e,be);return i.jsx("li",j(j({ref:n,className:u("amsterdam-unordered-list__item",t)},a),{},{children:r}))});Z.displayName="UnorderedListItem";x.Item=Z;var ge={headingLevel:1,section:!0},ee=d.createContext(ge),je=["label","expanded","children","className"];function T(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function W(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?T(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var re=d.forwardRef(function(e,n){var r=e.label,t=e.expanded,a=t===void 0?!1:t,o=e.children,s=e.className,m=y(e,je),c=d.useContext(ee),v=c.headingLevel,O=c.section,l=d.useState(a),b=le(l,2),p=b[0],S=b[1],g=q(v),A=d.useId(),N="button-".concat(A),D="panel-".concat(A);return i.jsxs("div",W(W({className:u("amsterdam-accordion__section",s),ref:n},m),{},{children:[i.jsx(g,{className:"amsterdam-accordion__header",children:i.jsxs("button",{"aria-controls":D,"aria-expanded":p,className:"amsterdam-accordion__button",id:N,onClick:function(){return S(!p)},type:"button",children:[r,i.jsx(w,{svg:oe,size:"level-5"})]})}),O?i.jsx("section",{id:D,"aria-labelledby":N,className:u("amsterdam-accordion__panel",{"amsterdam-accordion__panel--expanded":p}),children:o}):i.jsx("div",{id:D,"aria-labelledby":N,className:u("amsterdam-accordion__panel",{"amsterdam-accordion__panel--expanded":p}),children:o})]}))});re.displayName="AccordionSection";/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */var f={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowRight:"ArrowRight",ArrowLeft:"ArrowLeft",Home:"Home",End:"End"},we=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,a=t?f.ArrowRight:f.ArrowDown,o=t?f.ArrowLeft:f.ArrowUp,s=function(c){if(n.current){var v=n.current,O=window.document.activeElement,l=Array.from(v.querySelectorAll(".amsterdam-accordion__button")),b=function(g){return g&&l.includes(g)?l.indexOf(g):0},p;switch(c.key){case a:{b(O)!==l.length-1?(p=l[b(O)+1],O&&!l.includes(O)&&(p=l[0])):r&&(p=l[0]);break}case o:{b(O)!==0?p=l[b(O)-1]:r&&(p=l[l.length-1]);break}case f.Home:{p=l[0];break}case f.End:{p=l[l.length-1];break}}(c.key===f.ArrowDown||c.key===f.ArrowUp||c.key===f.ArrowLeft||c.key===f.ArrowRight||c.key===f.Home||c.key===f.End)&&p instanceof HTMLElement&&(p.focus(),c.preventDefault())}};return{keyDown:s}},P=d.forwardRef(function(e,n){var r=e.children,t=e.className,a=e.headingLevel,o=e.section,s=o===void 0?!0:o,m=d.useRef(null);d.useImperativeHandle(n,function(){return m.current});var c=we(m,!0),v=c.keyDown;return i.jsx(ee.Provider,{value:{headingLevel:a,section:s},children:i.jsx("div",{className:u("amsterdam-accordion",t),onKeyDown:v,ref:m,children:r})})});P.displayName="Accordion";P.Section=re;P.Section.displayName="Accordion.Section";var Pe=["children","className"];function M(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function X(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?M(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var te=d.forwardRef(function(e,n){var r=e.children,t=e.className,a=y(e,Pe);return i.jsx("ul",X(X({ref:n,className:u("amsterdam-list",t)},a),{},{children:r}))});te.displayName="List";P.__docgenInfo={description:"",methods:[],displayName:"Accordion"};J.__docgenInfo={description:"",methods:[],displayName:"Button"};Y.__docgenInfo={description:"",methods:[],displayName:"FormLabel"};V.__docgenInfo={description:"",methods:[],displayName:"Heading"};w.__docgenInfo={description:"",methods:[],displayName:"Icon"};G.__docgenInfo={description:"",methods:[],displayName:"Link"};te.__docgenInfo={description:"",methods:[],displayName:"List"};Q.__docgenInfo={description:"",methods:[],displayName:"Paragraph"};x.__docgenInfo={description:"",methods:[],displayName:"UnorderedList"};export{Y as F,Q as P};
//# sourceMappingURL=index.esm-b0a26dc4.js.map
