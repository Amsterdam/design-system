const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axe-CMnRUl9W.js","./_commonjsHelpers-CqkleIqs.js"])))=>i.map(i=>d[i]);
import{_ as Ge}from"./iframe-FYChcdDV.js";import{e as we}from"./index-BFxVgPxr.js";const ee=10,_e=(e=0)=>t=>`\x1B[${t+e}m`,ve=(e=0)=>t=>`\x1B[${38+e};5;${t}m`,he=(e=0)=>(t,n,i)=>`\x1B[${38+e};2;${t};${n};${i}m`,A={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};Object.keys(A.modifier);const Ve=Object.keys(A.color),We=Object.keys(A.bgColor);[...Ve,...We];function Ye(){const e=new Map;for(const[t,n]of Object.entries(A)){for(const[i,f]of Object.entries(n))A[i]={open:`\x1B[${f[0]}m`,close:`\x1B[${f[1]}m`},n[i]=A[i],e.set(f[0],f[1]);Object.defineProperty(A,t,{value:n,enumerable:!1})}return Object.defineProperty(A,"codes",{value:e,enumerable:!1}),A.color.close="\x1B[39m",A.bgColor.close="\x1B[49m",A.color.ansi=_e(),A.color.ansi256=ve(),A.color.ansi16m=he(),A.bgColor.ansi=_e(ee),A.bgColor.ansi256=ve(ee),A.bgColor.ansi16m=he(ee),Object.defineProperties(A,{rgbToAnsi256:{value(t,n,i){return t===n&&n===i?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(i/255*5)},enumerable:!1},hexToRgb:{value(t){const n=/[a-f\d]{6}|[a-f\d]{3}/i.exec(t.toString(16));if(!n)return[0,0,0];let[i]=n;i.length===3&&(i=[...i].map(g=>g+g).join(""));const f=Number.parseInt(i,16);return[f>>16&255,f>>8&255,f&255]},enumerable:!1},hexToAnsi256:{value:t=>A.rgbToAnsi256(...A.hexToRgb(t)),enumerable:!1},ansi256ToAnsi:{value(t){if(t<8)return 30+t;if(t<16)return 90+(t-8);let n,i,f;if(t>=232)n=((t-232)*10+8)/255,i=n,f=n;else{t-=16;const l=t%36;n=Math.floor(t/36)/5,i=Math.floor(l/6)/5,f=l%6/5}const g=Math.max(n,i,f)*2;if(g===0)return 30;let d=30+(Math.round(f)<<2|Math.round(i)<<1|Math.round(n));return g===2&&(d+=60),d},enumerable:!1},rgbToAnsi:{value:(t,n,i)=>A.ansi256ToAnsi(A.rgbToAnsi256(t,n,i)),enumerable:!1},hexToAnsi:{value:t=>A.ansi256ToAnsi(A.hexToAnsi256(t)),enumerable:!1}}),A}const F=Ye(),Oe=(()=>{if(!("navigator"in globalThis))return 0;if(globalThis.navigator.userAgentData){const e=navigator.userAgentData.brands.find(({brand:t})=>t==="Chromium");if(e&&e.version>93)return 3}return/\b(Chrome|Chromium)\//.test(globalThis.navigator.userAgent)?1:0})(),Ee=Oe!==0&&{level:Oe},Ke={stdout:Ee,stderr:Ee};function He(e,t,n){let i=e.indexOf(t);if(i===-1)return e;const f=t.length;let g=0,d="";do d+=e.slice(g,i)+t+n,g=i+f,i=e.indexOf(t,g);while(i!==-1);return d+=e.slice(g),d}function Je(e,t,n,i){let f=0,g="";do{const d=e[i-1]==="\r";g+=e.slice(f,d?i-1:i)+t+(d?`\r
`:`
`)+n,f=i+1,i=e.indexOf(`
`,f)}while(i!==-1);return g+=e.slice(f),g}const{stdout:$e,stderr:Se}=Ke,ne=Symbol("GENERATOR"),Y=Symbol("STYLER"),H=Symbol("IS_EMPTY"),Me=["ansi","ansi","ansi256","ansi16m"],K=Object.create(null),Xe=(e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const n=$e?$e.level:0;e.level=t.level===void 0?n:t.level},Ze=e=>{const t=(...n)=>n.join(" ");return Xe(t,e),Object.setPrototypeOf(t,J.prototype),t};function J(e){return Ze(e)}Object.setPrototypeOf(J.prototype,Function.prototype);for(const[e,t]of Object.entries(F))K[e]={get(){const n=X(this,ie(t.open,t.close,this[Y]),this[H]);return Object.defineProperty(this,e,{value:n}),n}};K.visible={get(){const e=X(this,this[Y],!0);return Object.defineProperty(this,"visible",{value:e}),e}};const ae=(e,t,n,...i)=>e==="rgb"?t==="ansi16m"?F[n].ansi16m(...i):t==="ansi256"?F[n].ansi256(F.rgbToAnsi256(...i)):F[n].ansi(F.rgbToAnsi(...i)):e==="hex"?ae("rgb",t,n,...F.hexToRgb(...i)):F[n][e](...i),Qe=["rgb","hex","ansi256"];for(const e of Qe){K[e]={get(){const{level:n}=this;return function(...i){const f=ie(ae(e,Me[n],"color",...i),F.color.close,this[Y]);return X(this,f,this[H])}}};const t="bg"+e[0].toUpperCase()+e.slice(1);K[t]={get(){const{level:n}=this;return function(...i){const f=ie(ae(e,Me[n],"bgColor",...i),F.bgColor.close,this[Y]);return X(this,f,this[H])}}}}const et=Object.defineProperties(()=>{},{...K,level:{enumerable:!0,get(){return this[ne].level},set(e){this[ne].level=e}}}),ie=(e,t,n)=>{let i,f;return n===void 0?(i=e,f=t):(i=n.openAll+e,f=t+n.closeAll),{open:e,close:t,openAll:i,closeAll:f,parent:n}},X=(e,t,n)=>{const i=(...f)=>tt(i,f.length===1?""+f[0]:f.join(" "));return Object.setPrototypeOf(i,et),i[ne]=e,i[Y]=t,i[H]=n,i},tt=(e,t)=>{if(e.level<=0||!t)return e[H]?"":t;let n=e[Y];if(n===void 0)return t;const{openAll:i,closeAll:f}=n;if(t.includes("\x1B"))for(;n!==void 0;)t=He(t,n.close,n.open),n=n.parent;const g=t.indexOf(`
`);return g!==-1&&(t=Je(t,f,i,g)),i+t+f};Object.defineProperties(J.prototype,K);const W=J();J({level:Se?Se.level:0});var rt=Object.create,Ie=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,Re=Object.getOwnPropertyNames,at=Object.getPrototypeOf,it=Object.prototype.hasOwnProperty,D=(e,t)=>function(){return t||(0,e[Re(e)[0]])((t={exports:{}}).exports,t),t.exports},lt=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let f of Re(t))!it.call(e,f)&&f!==n&&Ie(e,f,{get:()=>t[f],enumerable:!(i=nt(t,f))||i.enumerable});return e},ot=(e,t,n)=>(n=e!=null?rt(at(e)):{},lt(Ie(n,"default",{value:e,enumerable:!0}),e)),Pe=D({"node_modules/pretty-format/node_modules/ansi-styles/index.js"(e,t){var n=10,i=(d=0)=>l=>`\x1B[${38+d};5;${l}m`,f=(d=0)=>(l,v,o)=>`\x1B[${38+d};2;${l};${v};${o}m`;function g(){const d=new Map,l={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};l.color.gray=l.color.blackBright,l.bgColor.bgGray=l.bgColor.bgBlackBright,l.color.grey=l.color.blackBright,l.bgColor.bgGrey=l.bgColor.bgBlackBright;for(const[v,o]of Object.entries(l)){for(const[m,c]of Object.entries(o))l[m]={open:`\x1B[${c[0]}m`,close:`\x1B[${c[1]}m`},o[m]=l[m],d.set(c[0],c[1]);Object.defineProperty(l,v,{value:o,enumerable:!1})}return Object.defineProperty(l,"codes",{value:d,enumerable:!1}),l.color.close="\x1B[39m",l.bgColor.close="\x1B[49m",l.color.ansi256=i(),l.color.ansi16m=f(),l.bgColor.ansi256=i(n),l.bgColor.ansi16m=f(n),Object.defineProperties(l,{rgbToAnsi256:{value:(v,o,m)=>v===o&&o===m?v<8?16:v>248?231:Math.round((v-8)/247*24)+232:16+36*Math.round(v/255*5)+6*Math.round(o/255*5)+Math.round(m/255*5),enumerable:!1},hexToRgb:{value:v=>{const o=/(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(v.toString(16));if(!o)return[0,0,0];let{colorString:m}=o.groups;m.length===3&&(m=m.split("").map(a=>a+a).join(""));const c=Number.parseInt(m,16);return[c>>16&255,c>>8&255,c&255]},enumerable:!1},hexToAnsi256:{value:v=>l.rgbToAnsi256(...l.hexToRgb(v)),enumerable:!1}}),l}Object.defineProperty(t,"exports",{enumerable:!0,get:g})}}),Z=D({"node_modules/pretty-format/build/collections.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.printIteratorEntries=n,e.printIteratorValues=i,e.printListItems=f,e.printObjectProperties=g;var t=(d,l)=>{const v=Object.keys(d).sort(l);return Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(d).forEach(o=>{Object.getOwnPropertyDescriptor(d,o).enumerable&&v.push(o)}),v};function n(d,l,v,o,m,c,a=": "){let u="",p=0,_=d.next();if(!_.done){u+=l.spacingOuter;const y=v+l.indent;for(;!_.done;){if(u+=y,p++===l.maxWidth){u+="…";break}const s=c(_.value[0],l,y,o,m),E=c(_.value[1],l,y,o,m);u+=s+a+E,_=d.next(),_.done?l.min||(u+=","):u+=`,${l.spacingInner}`}u+=l.spacingOuter+v}return u}function i(d,l,v,o,m,c){let a="",u=0,p=d.next();if(!p.done){a+=l.spacingOuter;const _=v+l.indent;for(;!p.done;){if(a+=_,u++===l.maxWidth){a+="…";break}a+=c(p.value,l,_,o,m),p=d.next(),p.done?l.min||(a+=","):a+=`,${l.spacingInner}`}a+=l.spacingOuter+v}return a}function f(d,l,v,o,m,c){let a="";if(d.length){a+=l.spacingOuter;const u=v+l.indent;for(let p=0;p<d.length;p++){if(a+=u,p===l.maxWidth){a+="…";break}p in d&&(a+=c(d[p],l,u,o,m)),p<d.length-1?a+=`,${l.spacingInner}`:l.min||(a+=",")}a+=l.spacingOuter+v}return a}function g(d,l,v,o,m,c){let a="";const u=t(d,l.compareKeys);if(u.length){a+=l.spacingOuter;const p=v+l.indent;for(let _=0;_<u.length;_++){const y=u[_],s=c(y,l,p,o,m),E=c(d[y],l,p,o,m);a+=`${p+s}: ${E}`,_<u.length-1?a+=`,${l.spacingInner}`:l.min||(a+=",")}a+=l.spacingOuter+v}return a}}}),ut=D({"node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=Z(),n=globalThis["jest-symbol-do-not-touch"]||globalThis.Symbol,i=typeof n=="function"&&n.for?n.for("jest.asymmetricMatcher"):1267621,f=" ",g=(o,m,c,a,u,p)=>{const _=o.toString();if(_==="ArrayContaining"||_==="ArrayNotContaining")return++a>m.maxDepth?`[${_}]`:`${_+f}[${(0,t.printListItems)(o.sample,m,c,a,u,p)}]`;if(_==="ObjectContaining"||_==="ObjectNotContaining")return++a>m.maxDepth?`[${_}]`:`${_+f}{${(0,t.printObjectProperties)(o.sample,m,c,a,u,p)}}`;if(_==="StringMatching"||_==="StringNotMatching"||_==="StringContaining"||_==="StringNotContaining")return _+f+p(o.sample,m,c,a,u);if(typeof o.toAsymmetricMatcher!="function")throw new Error(`Asymmetric matcher ${o.constructor.name} does not implement toAsymmetricMatcher()`);return o.toAsymmetricMatcher()};e.serialize=g;var d=o=>o&&o.$$typeof===i;e.test=d;var l={serialize:g,test:d},v=l;e.default=v}}),st=D({"node_modules/ansi-regex/index.js"(e,t){t.exports=({onlyFirst:n=!1}={})=>{const i=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(i,n?void 0:"g")}}}),ct=D({"node_modules/pretty-format/build/plugins/ConvertAnsi.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=i(st()),n=i(Pe());function i(o){return o&&o.__esModule?o:{default:o}}var f=o=>o.replace((0,t.default)(),m=>{switch(m){case n.default.red.close:case n.default.green.close:case n.default.cyan.close:case n.default.gray.close:case n.default.white.close:case n.default.yellow.close:case n.default.bgRed.close:case n.default.bgGreen.close:case n.default.bgYellow.close:case n.default.inverse.close:case n.default.dim.close:case n.default.bold.close:case n.default.reset.open:case n.default.reset.close:return"</>";case n.default.red.open:return"<red>";case n.default.green.open:return"<green>";case n.default.cyan.open:return"<cyan>";case n.default.gray.open:return"<gray>";case n.default.white.open:return"<white>";case n.default.yellow.open:return"<yellow>";case n.default.bgRed.open:return"<bgRed>";case n.default.bgGreen.open:return"<bgGreen>";case n.default.bgYellow.open:return"<bgYellow>";case n.default.inverse.open:return"<inverse>";case n.default.dim.open:return"<dim>";case n.default.bold.open:return"<bold>";default:return""}}),g=o=>typeof o=="string"&&!!o.match((0,t.default)());e.test=g;var d=(o,m,c,a,u,p)=>p(f(o),m,c,a,u);e.serialize=d;var l={serialize:d,test:g},v=l;e.default=v}}),ft=D({"node_modules/pretty-format/build/plugins/DOMCollection.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=Z(),n=" ",i=["DOMStringMap","NamedNodeMap"],f=/^(HTML\w*Collection|NodeList)$/,g=c=>i.indexOf(c)!==-1||f.test(c),d=c=>c&&c.constructor&&!!c.constructor.name&&g(c.constructor.name);e.test=d;var l=c=>c.constructor.name==="NamedNodeMap",v=(c,a,u,p,_,y)=>{const s=c.constructor.name;return++p>a.maxDepth?`[${s}]`:(a.min?"":s+n)+(i.indexOf(s)!==-1?`{${(0,t.printObjectProperties)(l(c)?Array.from(c).reduce((E,C)=>(E[C.name]=C.value,E),{}):{...c},a,u,p,_,y)}}`:`[${(0,t.printListItems)(Array.from(c),a,u,p,_,y)}]`)};e.serialize=v;var o={serialize:v,test:d},m=o;e.default=m}}),mt=D({"node_modules/pretty-format/build/plugins/lib/escapeHTML.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t;function t(n){return n.replace(/</g,"&lt;").replace(/>/g,"&gt;")}}}),ce=D({"node_modules/pretty-format/build/plugins/lib/markup.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.printText=e.printProps=e.printElementAsLeaf=e.printElement=e.printComment=e.printChildren=void 0;var t=n(mt());function n(o){return o&&o.__esModule?o:{default:o}}var i=(o,m,c,a,u,p,_)=>{const y=a+c.indent,s=c.colors;return o.map(E=>{const C=m[E];let B=_(C,c,y,u,p);return typeof C!="string"&&(B.indexOf(`
`)!==-1&&(B=c.spacingOuter+y+B+c.spacingOuter+a),B=`{${B}}`),`${c.spacingInner+a+s.prop.open+E+s.prop.close}=${s.value.open}${B}${s.value.close}`}).join("")};e.printProps=i;var f=(o,m,c,a,u,p)=>o.map(_=>m.spacingOuter+c+(typeof _=="string"?g(_,m):p(_,m,c,a,u))).join("");e.printChildren=f;var g=(o,m)=>{const c=m.colors.content;return c.open+(0,t.default)(o)+c.close};e.printText=g;var d=(o,m)=>{const c=m.colors.comment;return`${c.open}<!--${(0,t.default)(o)}-->${c.close}`};e.printComment=d;var l=(o,m,c,a,u)=>{const p=a.colors.tag;return`${p.open}<${o}${m&&p.close+m+a.spacingOuter+u+p.open}${c?`>${p.close}${c}${a.spacingOuter}${u}${p.open}</${o}`:`${m&&!a.min?"":" "}/`}>${p.close}`};e.printElement=l;var v=(o,m)=>{const c=m.colors.tag;return`${c.open}<${o}${c.close} …${c.open} />${c.close}`};e.printElementAsLeaf=v}}),dt=D({"node_modules/pretty-format/build/plugins/DOMElement.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=ce(),n=1,i=3,f=8,g=11,d=/^((HTML|SVG)\w*)?Element$/,l=y=>{try{return typeof y.hasAttribute=="function"&&y.hasAttribute("is")}catch{return!1}},v=y=>{const s=y.constructor.name,{nodeType:E,tagName:C}=y,B=typeof C=="string"&&C.includes("-")||l(y);return E===n&&(d.test(s)||B)||E===i&&s==="Text"||E===f&&s==="Comment"||E===g&&s==="DocumentFragment"},o=y=>{var s;return(y==null||(s=y.constructor)===null||s===void 0?void 0:s.name)&&v(y)};e.test=o;function m(y){return y.nodeType===i}function c(y){return y.nodeType===f}function a(y){return y.nodeType===g}var u=(y,s,E,C,B,q)=>{if(m(y))return(0,t.printText)(y.data,s);if(c(y))return(0,t.printComment)(y.data,s);const V=a(y)?"DocumentFragment":y.tagName.toLowerCase();return++C>s.maxDepth?(0,t.printElementAsLeaf)(V,s):(0,t.printElement)(V,(0,t.printProps)(a(y)?[]:Array.from(y.attributes).map(U=>U.name).sort(),a(y)?{}:Array.from(y.attributes).reduce((U,h)=>(U[h.name]=h.value,U),{}),s,E+s.indent,C,B,q),(0,t.printChildren)(Array.prototype.slice.call(y.childNodes||y.children),s,E+s.indent,C,B,q),s,E)};e.serialize=u;var p={serialize:u,test:o},_=p;e.default=_}}),pt=D({"node_modules/pretty-format/build/plugins/Immutable.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=Z(),n="@@__IMMUTABLE_ITERABLE__@@",i="@@__IMMUTABLE_LIST__@@",f="@@__IMMUTABLE_KEYED__@@",g="@@__IMMUTABLE_MAP__@@",d="@@__IMMUTABLE_ORDERED__@@",l="@@__IMMUTABLE_RECORD__@@",v="@@__IMMUTABLE_SEQ__@@",o="@@__IMMUTABLE_SET__@@",m="@@__IMMUTABLE_STACK__@@",c=h=>`Immutable.${h}`,a=h=>`[${h}]`,u=" ",p="…",_=(h,M,N,T,P,I,L)=>++T>M.maxDepth?a(c(L)):`${c(L)+u}{${(0,t.printIteratorEntries)(h.entries(),M,N,T,P,I)}}`;function y(h){let M=0;return{next(){if(M<h._keys.length){const N=h._keys[M++];return{done:!1,value:[N,h.get(N)]}}return{done:!0,value:void 0}}}}var s=(h,M,N,T,P,I)=>{const L=c(h._name||"Record");return++T>M.maxDepth?a(L):`${L+u}{${(0,t.printIteratorEntries)(y(h),M,N,T,P,I)}}`},E=(h,M,N,T,P,I)=>{const L=c("Seq");return++T>M.maxDepth?a(L):h[f]?`${L+u}{${h._iter||h._object?(0,t.printIteratorEntries)(h.entries(),M,N,T,P,I):p}}`:`${L+u}[${h._iter||h._array||h._collection||h._iterable?(0,t.printIteratorValues)(h.values(),M,N,T,P,I):p}]`},C=(h,M,N,T,P,I,L)=>++T>M.maxDepth?a(c(L)):`${c(L)+u}[${(0,t.printIteratorValues)(h.values(),M,N,T,P,I)}]`,B=(h,M,N,T,P,I)=>h[g]?_(h,M,N,T,P,I,h[d]?"OrderedMap":"Map"):h[i]?C(h,M,N,T,P,I,"List"):h[o]?C(h,M,N,T,P,I,h[d]?"OrderedSet":"Set"):h[m]?C(h,M,N,T,P,I,"Stack"):h[v]?E(h,M,N,T,P,I):s(h,M,N,T,P,I);e.serialize=B;var q=h=>h&&(h[n]===!0||h[l]===!0);e.test=q;var V={serialize:B,test:q},U=V;e.default=U}}),yt=D({"node_modules/react-is/cjs/react-is.production.min.js"(e){var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),l=Symbol.for("react.context"),v=Symbol.for("react.server_context"),o=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),c=Symbol.for("react.suspense_list"),a=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.for("react.offscreen"),_;_=Symbol.for("react.module.reference");function y(s){if(typeof s=="object"&&s!==null){var E=s.$$typeof;switch(E){case t:switch(s=s.type,s){case i:case g:case f:case m:case c:return s;default:switch(s=s&&s.$$typeof,s){case v:case l:case o:case u:case a:case d:return s;default:return E}}case n:return E}}}e.ContextConsumer=l,e.ContextProvider=d,e.Element=t,e.ForwardRef=o,e.Fragment=i,e.Lazy=u,e.Memo=a,e.Portal=n,e.Profiler=g,e.StrictMode=f,e.Suspense=m,e.SuspenseList=c,e.isAsyncMode=function(){return!1},e.isConcurrentMode=function(){return!1},e.isContextConsumer=function(s){return y(s)===l},e.isContextProvider=function(s){return y(s)===d},e.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===t},e.isForwardRef=function(s){return y(s)===o},e.isFragment=function(s){return y(s)===i},e.isLazy=function(s){return y(s)===u},e.isMemo=function(s){return y(s)===a},e.isPortal=function(s){return y(s)===n},e.isProfiler=function(s){return y(s)===g},e.isStrictMode=function(s){return y(s)===f},e.isSuspense=function(s){return y(s)===m},e.isSuspenseList=function(s){return y(s)===c},e.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===i||s===g||s===f||s===m||s===c||s===p||typeof s=="object"&&s!==null&&(s.$$typeof===u||s.$$typeof===a||s.$$typeof===d||s.$$typeof===l||s.$$typeof===o||s.$$typeof===_||s.getModuleId!==void 0)},e.typeOf=y}}),bt=D({"node_modules/react-is/index.js"(e,t){t.exports=yt()}}),gt=D({"node_modules/pretty-format/build/plugins/ReactElement.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=f(bt()),n=ce();function i(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,p=new WeakMap;return(i=function(_){return _?p:u})(a)}function f(a,u){if(a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var p=i(u);if(p&&p.has(a))return p.get(a);var _={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in a)if(s!=="default"&&Object.prototype.hasOwnProperty.call(a,s)){var E=y?Object.getOwnPropertyDescriptor(a,s):null;E&&(E.get||E.set)?Object.defineProperty(_,s,E):_[s]=a[s]}return _.default=a,p&&p.set(a,_),_}var g=(a,u=[])=>(Array.isArray(a)?a.forEach(p=>{g(p,u)}):a!=null&&a!==!1&&u.push(a),u),d=a=>{const u=a.type;if(typeof u=="string")return u;if(typeof u=="function")return u.displayName||u.name||"Unknown";if(t.isFragment(a))return"React.Fragment";if(t.isSuspense(a))return"React.Suspense";if(typeof u=="object"&&u!==null){if(t.isContextProvider(a))return"Context.Provider";if(t.isContextConsumer(a))return"Context.Consumer";if(t.isForwardRef(a)){if(u.displayName)return u.displayName;const p=u.render.displayName||u.render.name||"";return p!==""?`ForwardRef(${p})`:"ForwardRef"}if(t.isMemo(a)){const p=u.displayName||u.type.displayName||u.type.name||"";return p!==""?`Memo(${p})`:"Memo"}}return"UNDEFINED"},l=a=>{const{props:u}=a;return Object.keys(u).filter(p=>p!=="children"&&u[p]!==void 0).sort()},v=(a,u,p,_,y,s)=>++_>u.maxDepth?(0,n.printElementAsLeaf)(d(a),u):(0,n.printElement)(d(a),(0,n.printProps)(l(a),a.props,u,p+u.indent,_,y,s),(0,n.printChildren)(g(a.props.children),u,p+u.indent,_,y,s),u,p);e.serialize=v;var o=a=>a!=null&&t.isElement(a);e.test=o;var m={serialize:v,test:o},c=m;e.default=c}}),_t=D({"node_modules/pretty-format/build/plugins/ReactTestComponent.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=ce(),n=globalThis["jest-symbol-do-not-touch"]||globalThis.Symbol,i=typeof n=="function"&&n.for?n.for("react.test.json"):245830487,f=o=>{const{props:m}=o;return m?Object.keys(m).filter(c=>m[c]!==void 0).sort():[]},g=(o,m,c,a,u,p)=>++a>m.maxDepth?(0,t.printElementAsLeaf)(o.type,m):(0,t.printElement)(o.type,o.props?(0,t.printProps)(f(o),o.props,m,c+m.indent,a,u,p):"",o.children?(0,t.printChildren)(o.children,m,c+m.indent,a,u,p):"",m,c);e.serialize=g;var d=o=>o&&o.$$typeof===i;e.test=d;var l={serialize:g,test:d},v=l;e.default=v}}),vt=D({"node_modules/pretty-format/build/index.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.DEFAULT_OPTIONS=void 0,e.format=ge,e.plugins=void 0;var t=m(Pe()),n=Z(),i=m(ut()),f=m(ct()),g=m(ft()),d=m(dt()),l=m(pt()),v=m(gt()),o=m(_t());function m(r){return r&&r.__esModule?r:{default:r}}var c=Object.prototype.toString,a=Date.prototype.toISOString,u=Error.prototype.toString,p=RegExp.prototype.toString,_=r=>typeof r.constructor=="function"&&r.constructor.name||"Object",y=r=>typeof window<"u"&&r===window,s=/^Symbol\((.*)\)(.*)$/,E=/\n/gi,C=class extends Error{constructor(r,b){super(r),this.stack=b,this.name=this.constructor.name}};function B(r){return r==="[object Array]"||r==="[object ArrayBuffer]"||r==="[object DataView]"||r==="[object Float32Array]"||r==="[object Float64Array]"||r==="[object Int8Array]"||r==="[object Int16Array]"||r==="[object Int32Array]"||r==="[object Uint8Array]"||r==="[object Uint8ClampedArray]"||r==="[object Uint16Array]"||r==="[object Uint32Array]"}function q(r){return Object.is(r,-0)?"-0":String(r)}function V(r){return`${r}n`}function U(r,b){return b?`[Function ${r.name||"anonymous"}]`:"[Function]"}function h(r){return String(r).replace(s,"Symbol($1)")}function M(r){return`[${u.call(r)}]`}function N(r,b,O,S){if(r===!0||r===!1)return`${r}`;if(r===void 0)return"undefined";if(r===null)return"null";const $=typeof r;if($==="number")return q(r);if($==="bigint")return V(r);if($==="string")return S?`"${r.replace(/"|\\/g,"\\$&")}"`:`"${r}"`;if($==="function")return U(r,b);if($==="symbol")return h(r);const w=c.call(r);return w==="[object WeakMap]"?"WeakMap {}":w==="[object WeakSet]"?"WeakSet {}":w==="[object Function]"||w==="[object GeneratorFunction]"?U(r,b):w==="[object Symbol]"?h(r):w==="[object Date]"?isNaN(+r)?"Date { NaN }":a.call(r):w==="[object Error]"?M(r):w==="[object RegExp]"?O?p.call(r).replace(/[\\^$*+?.()|[\]{}]/g,"\\$&"):p.call(r):r instanceof Error?M(r):null}function T(r,b,O,S,$,w){if($.indexOf(r)!==-1)return"[Circular]";$=$.slice(),$.push(r);const R=++S>b.maxDepth,j=b.min;if(b.callToJSON&&!R&&r.toJSON&&typeof r.toJSON=="function"&&!w)return z(r.toJSON(),b,O,S,$,!0);const x=c.call(r);return x==="[object Arguments]"?R?"[Arguments]":`${j?"":"Arguments "}[${(0,n.printListItems)(r,b,O,S,$,z)}]`:B(x)?R?`[${r.constructor.name}]`:`${j||!b.printBasicPrototype&&r.constructor.name==="Array"?"":`${r.constructor.name} `}[${(0,n.printListItems)(r,b,O,S,$,z)}]`:x==="[object Map]"?R?"[Map]":`Map {${(0,n.printIteratorEntries)(r.entries(),b,O,S,$,z," => ")}}`:x==="[object Set]"?R?"[Set]":`Set {${(0,n.printIteratorValues)(r.values(),b,O,S,$,z)}}`:R||y(r)?`[${_(r)}]`:`${j||!b.printBasicPrototype&&_(r)==="Object"?"":`${_(r)} `}{${(0,n.printObjectProperties)(r,b,O,S,$,z)}}`}function P(r){return r.serialize!=null}function I(r,b,O,S,$,w){let R;try{R=P(r)?r.serialize(b,O,S,$,w,z):r.print(b,j=>z(j,O,S,$,w),j=>{const x=S+O.indent;return x+j.replace(E,`
${x}`)},{edgeSpacing:O.spacingOuter,min:O.min,spacing:O.spacingInner},O.colors)}catch(j){throw new C(j.message,j.stack)}if(typeof R!="string")throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof R}".`);return R}function L(r,b){for(let O=0;O<r.length;O++)try{if(r[O].test(b))return r[O]}catch(S){throw new C(S.message,S.stack)}return null}function z(r,b,O,S,$,w){const R=L(b.plugins,r);if(R!==null)return I(R,r,b,O,S,$);const j=N(r,b.printFunctionName,b.escapeRegex,b.escapeString);return j!==null?j:T(r,b,O,S,$,w)}var Q={comment:"gray",content:"reset",prop:"yellow",tag:"cyan",value:"green"},me=Object.keys(Q),k={callToJSON:!0,compareKeys:void 0,escapeRegex:!1,escapeString:!0,highlight:!1,indent:2,maxDepth:1/0,maxWidth:1/0,min:!1,plugins:[],printBasicPrototype:!0,printFunctionName:!0,theme:Q};e.DEFAULT_OPTIONS=k;function ke(r){if(Object.keys(r).forEach(b=>{if(!Object.prototype.hasOwnProperty.call(k,b))throw new Error(`pretty-format: Unknown option "${b}".`)}),r.min&&r.indent!==void 0&&r.indent!==0)throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');if(r.theme!==void 0){if(r.theme===null)throw new Error('pretty-format: Option "theme" must not be null.');if(typeof r.theme!="object")throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof r.theme}".`)}}var Fe=r=>me.reduce((b,O)=>{const S=r.theme&&r.theme[O]!==void 0?r.theme[O]:Q[O],$=S&&t.default[S];if($&&typeof $.close=="string"&&typeof $.open=="string")b[O]=$;else throw new Error(`pretty-format: Option "theme" has a key "${O}" whose value "${S}" is undefined in ansi-styles.`);return b},Object.create(null)),Ue=()=>me.reduce((r,b)=>(r[b]={close:"",open:""},r),Object.create(null)),de=r=>{var b;return(b=r==null?void 0:r.printFunctionName)!==null&&b!==void 0?b:k.printFunctionName},pe=r=>{var b;return(b=r==null?void 0:r.escapeRegex)!==null&&b!==void 0?b:k.escapeRegex},ye=r=>{var b;return(b=r==null?void 0:r.escapeString)!==null&&b!==void 0?b:k.escapeString},be=r=>{var b,O,S,$,w,R,j;return{callToJSON:(b=r==null?void 0:r.callToJSON)!==null&&b!==void 0?b:k.callToJSON,colors:r!=null&&r.highlight?Fe(r):Ue(),compareKeys:typeof(r==null?void 0:r.compareKeys)=="function"?r.compareKeys:k.compareKeys,escapeRegex:pe(r),escapeString:ye(r),indent:r!=null&&r.min?"":ze((O=r==null?void 0:r.indent)!==null&&O!==void 0?O:k.indent),maxDepth:(S=r==null?void 0:r.maxDepth)!==null&&S!==void 0?S:k.maxDepth,maxWidth:($=r==null?void 0:r.maxWidth)!==null&&$!==void 0?$:k.maxWidth,min:(w=r==null?void 0:r.min)!==null&&w!==void 0?w:k.min,plugins:(R=r==null?void 0:r.plugins)!==null&&R!==void 0?R:k.plugins,printBasicPrototype:(j=r==null?void 0:r.printBasicPrototype)!==null&&j!==void 0?j:!0,printFunctionName:de(r),spacingInner:r!=null&&r.min?" ":`
`,spacingOuter:r!=null&&r.min?"":`
`}};function ze(r){return new Array(r+1).join(" ")}function ge(r,b){if(b&&(ke(b),b.plugins)){const S=L(b.plugins,r);if(S!==null)return I(S,r,be(b),"",0,[])}const O=N(r,de(b),pe(b),ye(b));return O!==null?O:T(r,be(b),"",0,[])}var qe={AsymmetricMatcher:i.default,ConvertAnsi:f.default,DOMCollection:g.default,DOMElement:d.default,Immutable:l.default,ReactElement:v.default,ReactTestComponent:o.default};e.plugins=qe;var xe=ge;e.default=xe}}),le=ot(vt()),{AsymmetricMatcher:ht,DOMCollection:Ot,DOMElement:Et,Immutable:$t,ReactElement:St,ReactTestComponent:Mt}=le.plugins,Ae=[Mt,St,Et,Ot,$t,ht],G=W.dim,Te=W.green,je=W.red,At="·";function oe(e,t=10,n=10){let i=1e4,f;try{f=(0,le.format)(e,{maxDepth:t,maxWidth:n,min:!0,plugins:Ae})}catch{f=(0,le.format)(e,{callToJSON:!1,maxDepth:t,maxWidth:n,min:!0,plugins:Ae})}return f.length>=i&&t>1?oe(e,Math.floor(t/2),n):f.length>=i&&n>1?oe(e,t,Math.floor(n/2)):f}function Tt(e){return e.replace(/\s+$/gm,t=>At.repeat(t.length))}function Nt(e){return je(Tt(oe(e)))}function Ct(e,t="received",n="expected",i={}){const{comment:f="",expectedColor:g=Te,isDirectExpectCall:d=!1,isNot:l=!1,promise:v="",receivedColor:o=je,secondArgument:m="",secondArgumentColor:c=Te}=i;let a="",u="expect";return!d&&t!==""&&(a+=G(`${u}(`)+o(t),u=")"),v!==""&&(a+=G(`${u}.`)+v,u=""),l&&(a+=`${G(`${u}.`)}not`,u=""),e.includes(".")?u+=e:(a+=G(`${u}.`)+e,u=""),n===""?u+="()":(a+=G(`${u}(`)+g(n),m&&(a+=G(", ")+c(m)),u=")"),f!==""&&(u+=` // ${f}`),u!==""&&(a+=G(u)),a}/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function wt(e){if(typeof e.violations>"u")throw new Error("No violations found in aXe results object");let t=It(e.violations,e.toolOptions?e.toolOptions.impactLevels:[]);function n(d){if(d.length===0)return[];let l=`

`;return d.map(o=>o.nodes.map(c=>`Expected the HTML found at $('${c.target.join(", ")}') to have no violations:`+l+W.grey(c.html)+l+"Received:"+l+Nt(`${o.help} (${o.id})`)+l+W.yellow(c.failureSummary)+l+(o.helpUrl?`You can find more information on this issue here: 
${W.blue(o.helpUrl)}`:"")).join(l)).join(l+"────────"+l)}let i=n(t),f=i.length===0;function g(){if(!f)return Ct(".toHaveNoViolations")+`

${i}`}return{actual:t,message:g,pass:f}}function It(e,t){return t&&t.length>0?e.filter(n=>t.includes(n.impact)):e}const Rt=Object.freeze(Object.defineProperty({__proto__:null,toHaveNoViolations:wt},Symbol.toStringTag,{value:"Module"})),{addons:Pt}=__STORYBOOK_MODULE_PREVIEW_API__,{global:jt}=__STORYBOOK_MODULE_GLOBAL__;var fe="storybook/a11y",Bt=`${fe}/result`,Lt=`${fe}/error`,Dt=`${fe}/manual`,te={RESULT:Bt,ERROR:Lt,MANUAL:Dt},kt="a11y-test",{document:Ne}=jt,re=Pt.getChannel(),Be={config:{},options:{}},Ft=["region"],ue=[],se=!1,Le=async()=>{if(ue.length===0){se=!1;return}se=!0;let e=ue.shift();e&&await e(),Le()},De=async(e=Be)=>{let{default:t}=await Ge(async()=>{const{default:l}=await import("./axe-CMnRUl9W.js").then(v=>v.a);return{default:l}},__vite__mapDeps([0,1]),import.meta.url),{element:n="body",config:i={},options:f={}}=e,g=Ne.querySelector(n)??Ne.body;if(!g)return;t.reset();let d={...i,rules:[...Ft.map(l=>({id:l,enabled:!1})),...(i==null?void 0:i.rules)??[]]};return t.configure(d),new Promise((l,v)=>{let o=async()=>{try{let m=await t.run(g,f);l(m)}catch(m){v(m)}};ue.push(o),se||Le()})};re.on(te.MANUAL,async(e,t=Be)=>{try{let n=await De(t),i=JSON.parse(JSON.stringify(n));re.emit(te.RESULT,i,e)}catch(n){re.emit(te.ERROR,n)}});function Ce(){try{return!1}catch{return!1}}function Ut(){try{return!1}catch{return!1}}we.extend(Rt);var xt=async({reporting:e,parameters:t,globals:n,tags:i})=>{let f=t.a11y,g=n.a11y;if((f==null?void 0:f.manual)!==!0&&(f==null?void 0:f.disable)!==!0&&(g==null?void 0:g.manual)!==!0){if(Ut()&&!i.includes(kt))return;try{let d=await De(f);if(d){let l=((d==null?void 0:d.violations.length)??0)>0;e.addReport({type:"a11y",version:1,result:d,status:l?"failed":"passed"}),Ce()&&l&&we(d).toHaveNoViolations()}}catch(d){if(e.addReport({type:"a11y",version:1,result:{error:d},status:"failed"}),Ce())throw d}}},Gt={a11y:{manual:!1}};export{xt as experimental_afterEach,Gt as initialGlobals};
