const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axe-pnu75rwz.js","./_commonjsHelpers-CqkleIqs.js"])))=>i.map(i=>d[i]);
import{_ as Ge}from"./iframe-DkFnAjtj.js";import{e as we}from"./index-bcAmebcY.js";const re=10,he=(e=0)=>t=>`\x1B[${t+e}m`,Oe=(e=0)=>t=>`\x1B[${38+e};5;${t}m`,ve=(e=0)=>(t,n,u)=>`\x1B[${38+e};2;${t};${n};${u}m`,A={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};Object.keys(A.modifier);const Ve=Object.keys(A.color),We=Object.keys(A.bgColor);[...Ve,...We];function Ye(){const e=new Map;for(const[t,n]of Object.entries(A)){for(const[u,f]of Object.entries(n))A[u]={open:`\x1B[${f[0]}m`,close:`\x1B[${f[1]}m`},n[u]=A[u],e.set(f[0],f[1]);Object.defineProperty(A,t,{value:n,enumerable:!1})}return Object.defineProperty(A,"codes",{value:e,enumerable:!1}),A.color.close="\x1B[39m",A.bgColor.close="\x1B[49m",A.color.ansi=he(),A.color.ansi256=Oe(),A.color.ansi16m=ve(),A.bgColor.ansi=he(re),A.bgColor.ansi256=Oe(re),A.bgColor.ansi16m=ve(re),Object.defineProperties(A,{rgbToAnsi256:{value(t,n,u){return t===n&&n===u?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(u/255*5)},enumerable:!1},hexToRgb:{value(t){const n=/[a-f\d]{6}|[a-f\d]{3}/i.exec(t.toString(16));if(!n)return[0,0,0];let[u]=n;u.length===3&&(u=[...u].map(g=>g+g).join(""));const f=Number.parseInt(u,16);return[f>>16&255,f>>8&255,f&255]},enumerable:!1},hexToAnsi256:{value:t=>A.rgbToAnsi256(...A.hexToRgb(t)),enumerable:!1},ansi256ToAnsi:{value(t){if(t<8)return 30+t;if(t<16)return 90+(t-8);let n,u,f;if(t>=232)n=((t-232)*10+8)/255,u=n,f=n;else{t-=16;const i=t%36;n=Math.floor(t/36)/5,u=Math.floor(i/6)/5,f=i%6/5}const g=Math.max(n,u,f)*2;if(g===0)return 30;let m=30+(Math.round(f)<<2|Math.round(u)<<1|Math.round(n));return g===2&&(m+=60),m},enumerable:!1},rgbToAnsi:{value:(t,n,u)=>A.ansi256ToAnsi(A.rgbToAnsi256(t,n,u)),enumerable:!1},hexToAnsi:{value:t=>A.ansi256ToAnsi(A.hexToAnsi256(t)),enumerable:!1}}),A}const F=Ye(),Z=(()=>{if(!("navigator"in globalThis))return 0;if(globalThis.navigator.userAgentData){const e=navigator.userAgentData.brands.find(({brand:t})=>t==="Chromium");if(e&&e.version>93)return 3}return/\b(Chrome|Chromium)\//.test(globalThis.navigator.userAgent)?1:0})(),Ee=Z!==0&&{level:Z,hasBasic:!0,has256:Z>=2,has16m:Z>=3},Ke={stdout:Ee,stderr:Ee};function He(e,t,n){let u=e.indexOf(t);if(u===-1)return e;const f=t.length;let g=0,m="";do m+=e.slice(g,u)+t+n,g=u+f,u=e.indexOf(t,g);while(u!==-1);return m+=e.slice(g),m}function Je(e,t,n,u){let f=0,g="";do{const m=e[u-1]==="\r";g+=e.slice(f,m?u-1:u)+t+(m?`\r
`:`
`)+n,f=u+1,u=e.indexOf(`
`,f)}while(u!==-1);return g+=e.slice(f),g}const{stdout:$e,stderr:Se}=Ke,ue=Symbol("GENERATOR"),Y=Symbol("STYLER"),H=Symbol("IS_EMPTY"),Me=["ansi","ansi","ansi256","ansi16m"],K=Object.create(null),Xe=(e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const n=$e?$e.level:0;e.level=t.level===void 0?n:t.level},Ze=e=>{const t=(...n)=>n.join(" ");return Xe(t,e),Object.setPrototypeOf(t,J.prototype),t};function J(e){return Ze(e)}Object.setPrototypeOf(J.prototype,Function.prototype);for(const[e,t]of Object.entries(F))K[e]={get(){const n=Q(this,le(t.open,t.close,this[Y]),this[H]);return Object.defineProperty(this,e,{value:n}),n}};K.visible={get(){const e=Q(this,this[Y],!0);return Object.defineProperty(this,"visible",{value:e}),e}};const ie=(e,t,n,...u)=>e==="rgb"?t==="ansi16m"?F[n].ansi16m(...u):t==="ansi256"?F[n].ansi256(F.rgbToAnsi256(...u)):F[n].ansi(F.rgbToAnsi(...u)):e==="hex"?ie("rgb",t,n,...F.hexToRgb(...u)):F[n][e](...u),Qe=["rgb","hex","ansi256"];for(const e of Qe){K[e]={get(){const{level:n}=this;return function(...u){const f=le(ie(e,Me[n],"color",...u),F.color.close,this[Y]);return Q(this,f,this[H])}}};const t="bg"+e[0].toUpperCase()+e.slice(1);K[t]={get(){const{level:n}=this;return function(...u){const f=le(ie(e,Me[n],"bgColor",...u),F.bgColor.close,this[Y]);return Q(this,f,this[H])}}}}const et=Object.defineProperties(()=>{},{...K,level:{enumerable:!0,get(){return this[ue].level},set(e){this[ue].level=e}}}),le=(e,t,n)=>{let u,f;return n===void 0?(u=e,f=t):(u=n.openAll+e,f=t+n.closeAll),{open:e,close:t,openAll:u,closeAll:f,parent:n}},Q=(e,t,n)=>{const u=(...f)=>tt(u,f.length===1?""+f[0]:f.join(" "));return Object.setPrototypeOf(u,et),u[ue]=e,u[Y]=t,u[H]=n,u},tt=(e,t)=>{if(e.level<=0||!t)return e[H]?"":t;let n=e[Y];if(n===void 0)return t;const{openAll:u,closeAll:f}=n;if(t.includes("\x1B"))for(;n!==void 0;)t=He(t,n.close,n.open),n=n.parent;const g=t.indexOf(`
`);return g!==-1&&(t=Je(t,f,u,g)),u+t+f};Object.defineProperties(J.prototype,K);const W=J();J({level:Se?Se.level:0});var rt=Object.create,Ie=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,Re=Object.getOwnPropertyNames,at=Object.getPrototypeOf,ut=Object.prototype.hasOwnProperty,D=(e,t)=>function(){return t||(0,e[Re(e)[0]])((t={exports:{}}).exports,t),t.exports},it=(e,t,n,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let f of Re(t))!ut.call(e,f)&&f!==n&&Ie(e,f,{get:()=>t[f],enumerable:!(u=nt(t,f))||u.enumerable});return e},lt=(e,t,n)=>(n=e!=null?rt(at(e)):{},it(Ie(n,"default",{value:e,enumerable:!0}),e)),Pe=D({"node_modules/pretty-format/node_modules/ansi-styles/index.js"(e,t){var n=10,u=(m=0)=>i=>`\x1B[${38+m};5;${i}m`,f=(m=0)=>(i,h,l)=>`\x1B[${38+m};2;${i};${h};${l}m`;function g(){const m=new Map,i={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};i.color.gray=i.color.blackBright,i.bgColor.bgGray=i.bgColor.bgBlackBright,i.color.grey=i.color.blackBright,i.bgColor.bgGrey=i.bgColor.bgBlackBright;for(const[h,l]of Object.entries(i)){for(const[d,c]of Object.entries(l))i[d]={open:`\x1B[${c[0]}m`,close:`\x1B[${c[1]}m`},l[d]=i[d],m.set(c[0],c[1]);Object.defineProperty(i,h,{value:l,enumerable:!1})}return Object.defineProperty(i,"codes",{value:m,enumerable:!1}),i.color.close="\x1B[39m",i.bgColor.close="\x1B[49m",i.color.ansi256=u(),i.color.ansi16m=f(),i.bgColor.ansi256=u(n),i.bgColor.ansi16m=f(n),Object.defineProperties(i,{rgbToAnsi256:{value:(h,l,d)=>h===l&&l===d?h<8?16:h>248?231:Math.round((h-8)/247*24)+232:16+36*Math.round(h/255*5)+6*Math.round(l/255*5)+Math.round(d/255*5),enumerable:!1},hexToRgb:{value:h=>{const l=/(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(h.toString(16));if(!l)return[0,0,0];let{colorString:d}=l.groups;d.length===3&&(d=d.split("").map(a=>a+a).join(""));const c=Number.parseInt(d,16);return[c>>16&255,c>>8&255,c&255]},enumerable:!1},hexToAnsi256:{value:h=>i.rgbToAnsi256(...i.hexToRgb(h)),enumerable:!1}}),i}Object.defineProperty(t,"exports",{enumerable:!0,get:g})}}),ee=D({"node_modules/pretty-format/build/collections.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.printIteratorEntries=n,e.printIteratorValues=u,e.printListItems=f,e.printObjectProperties=g;var t=(m,i)=>{const h=Object.keys(m).sort(i);return Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(m).forEach(l=>{Object.getOwnPropertyDescriptor(m,l).enumerable&&h.push(l)}),h};function n(m,i,h,l,d,c,a=": "){let o="",p=0,_=m.next();if(!_.done){o+=i.spacingOuter;const y=h+i.indent;for(;!_.done;){if(o+=y,p++===i.maxWidth){o+="…";break}const s=c(_.value[0],i,y,l,d),E=c(_.value[1],i,y,l,d);o+=s+a+E,_=m.next(),_.done?i.min||(o+=","):o+=`,${i.spacingInner}`}o+=i.spacingOuter+h}return o}function u(m,i,h,l,d,c){let a="",o=0,p=m.next();if(!p.done){a+=i.spacingOuter;const _=h+i.indent;for(;!p.done;){if(a+=_,o++===i.maxWidth){a+="…";break}a+=c(p.value,i,_,l,d),p=m.next(),p.done?i.min||(a+=","):a+=`,${i.spacingInner}`}a+=i.spacingOuter+h}return a}function f(m,i,h,l,d,c){let a="";if(m.length){a+=i.spacingOuter;const o=h+i.indent;for(let p=0;p<m.length;p++){if(a+=o,p===i.maxWidth){a+="…";break}p in m&&(a+=c(m[p],i,o,l,d)),p<m.length-1?a+=`,${i.spacingInner}`:i.min||(a+=",")}a+=i.spacingOuter+h}return a}function g(m,i,h,l,d,c){let a="";const o=t(m,i.compareKeys);if(o.length){a+=i.spacingOuter;const p=h+i.indent;for(let _=0;_<o.length;_++){const y=o[_],s=c(y,i,p,l,d),E=c(m[y],i,p,l,d);a+=`${p+s}: ${E}`,_<o.length-1?a+=`,${i.spacingInner}`:i.min||(a+=",")}a+=i.spacingOuter+h}return a}}}),ot=D({"node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=ee(),n=globalThis["jest-symbol-do-not-touch"]||globalThis.Symbol,u=typeof n=="function"&&n.for?n.for("jest.asymmetricMatcher"):1267621,f=" ",g=(l,d,c,a,o,p)=>{const _=l.toString();if(_==="ArrayContaining"||_==="ArrayNotContaining")return++a>d.maxDepth?`[${_}]`:`${_+f}[${(0,t.printListItems)(l.sample,d,c,a,o,p)}]`;if(_==="ObjectContaining"||_==="ObjectNotContaining")return++a>d.maxDepth?`[${_}]`:`${_+f}{${(0,t.printObjectProperties)(l.sample,d,c,a,o,p)}}`;if(_==="StringMatching"||_==="StringNotMatching"||_==="StringContaining"||_==="StringNotContaining")return _+f+p(l.sample,d,c,a,o);if(typeof l.toAsymmetricMatcher!="function")throw new Error(`Asymmetric matcher ${l.constructor.name} does not implement toAsymmetricMatcher()`);return l.toAsymmetricMatcher()};e.serialize=g;var m=l=>l&&l.$$typeof===u;e.test=m;var i={serialize:g,test:m},h=i;e.default=h}}),st=D({"node_modules/ansi-regex/index.js"(e,t){t.exports=({onlyFirst:n=!1}={})=>{const u=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(u,n?void 0:"g")}}}),ct=D({"node_modules/pretty-format/build/plugins/ConvertAnsi.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=u(st()),n=u(Pe());function u(l){return l&&l.__esModule?l:{default:l}}var f=l=>l.replace((0,t.default)(),d=>{switch(d){case n.default.red.close:case n.default.green.close:case n.default.cyan.close:case n.default.gray.close:case n.default.white.close:case n.default.yellow.close:case n.default.bgRed.close:case n.default.bgGreen.close:case n.default.bgYellow.close:case n.default.inverse.close:case n.default.dim.close:case n.default.bold.close:case n.default.reset.open:case n.default.reset.close:return"</>";case n.default.red.open:return"<red>";case n.default.green.open:return"<green>";case n.default.cyan.open:return"<cyan>";case n.default.gray.open:return"<gray>";case n.default.white.open:return"<white>";case n.default.yellow.open:return"<yellow>";case n.default.bgRed.open:return"<bgRed>";case n.default.bgGreen.open:return"<bgGreen>";case n.default.bgYellow.open:return"<bgYellow>";case n.default.inverse.open:return"<inverse>";case n.default.dim.open:return"<dim>";case n.default.bold.open:return"<bold>";default:return""}}),g=l=>typeof l=="string"&&!!l.match((0,t.default)());e.test=g;var m=(l,d,c,a,o,p)=>p(f(l),d,c,a,o);e.serialize=m;var i={serialize:m,test:g},h=i;e.default=h}}),ft=D({"node_modules/pretty-format/build/plugins/DOMCollection.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=ee(),n=" ",u=["DOMStringMap","NamedNodeMap"],f=/^(HTML\w*Collection|NodeList)$/,g=c=>u.indexOf(c)!==-1||f.test(c),m=c=>c&&c.constructor&&!!c.constructor.name&&g(c.constructor.name);e.test=m;var i=c=>c.constructor.name==="NamedNodeMap",h=(c,a,o,p,_,y)=>{const s=c.constructor.name;return++p>a.maxDepth?`[${s}]`:(a.min?"":s+n)+(u.indexOf(s)!==-1?`{${(0,t.printObjectProperties)(i(c)?Array.from(c).reduce((E,C)=>(E[C.name]=C.value,E),{}):{...c},a,o,p,_,y)}}`:`[${(0,t.printListItems)(Array.from(c),a,o,p,_,y)}]`)};e.serialize=h;var l={serialize:h,test:m},d=l;e.default=d}}),dt=D({"node_modules/pretty-format/build/plugins/lib/escapeHTML.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t;function t(n){return n.replace(/</g,"&lt;").replace(/>/g,"&gt;")}}}),de=D({"node_modules/pretty-format/build/plugins/lib/markup.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.printText=e.printProps=e.printElementAsLeaf=e.printElement=e.printComment=e.printChildren=void 0;var t=n(dt());function n(l){return l&&l.__esModule?l:{default:l}}var u=(l,d,c,a,o,p,_)=>{const y=a+c.indent,s=c.colors;return l.map(E=>{const C=d[E];let B=_(C,c,y,o,p);return typeof C!="string"&&(B.indexOf(`
`)!==-1&&(B=c.spacingOuter+y+B+c.spacingOuter+a),B=`{${B}}`),`${c.spacingInner+a+s.prop.open+E+s.prop.close}=${s.value.open}${B}${s.value.close}`}).join("")};e.printProps=u;var f=(l,d,c,a,o,p)=>l.map(_=>d.spacingOuter+c+(typeof _=="string"?g(_,d):p(_,d,c,a,o))).join("");e.printChildren=f;var g=(l,d)=>{const c=d.colors.content;return c.open+(0,t.default)(l)+c.close};e.printText=g;var m=(l,d)=>{const c=d.colors.comment;return`${c.open}<!--${(0,t.default)(l)}-->${c.close}`};e.printComment=m;var i=(l,d,c,a,o)=>{const p=a.colors.tag;return`${p.open}<${l}${d&&p.close+d+a.spacingOuter+o+p.open}${c?`>${p.close}${c}${a.spacingOuter}${o}${p.open}</${l}`:`${d&&!a.min?"":" "}/`}>${p.close}`};e.printElement=i;var h=(l,d)=>{const c=d.colors.tag;return`${c.open}<${l}${c.close} …${c.open} />${c.close}`};e.printElementAsLeaf=h}}),mt=D({"node_modules/pretty-format/build/plugins/DOMElement.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=de(),n=1,u=3,f=8,g=11,m=/^((HTML|SVG)\w*)?Element$/,i=y=>{try{return typeof y.hasAttribute=="function"&&y.hasAttribute("is")}catch{return!1}},h=y=>{const s=y.constructor.name,{nodeType:E,tagName:C}=y,B=typeof C=="string"&&C.includes("-")||i(y);return E===n&&(m.test(s)||B)||E===u&&s==="Text"||E===f&&s==="Comment"||E===g&&s==="DocumentFragment"},l=y=>{var s;return(y==null||(s=y.constructor)===null||s===void 0?void 0:s.name)&&h(y)};e.test=l;function d(y){return y.nodeType===u}function c(y){return y.nodeType===f}function a(y){return y.nodeType===g}var o=(y,s,E,C,B,q)=>{if(d(y))return(0,t.printText)(y.data,s);if(c(y))return(0,t.printComment)(y.data,s);const V=a(y)?"DocumentFragment":y.tagName.toLowerCase();return++C>s.maxDepth?(0,t.printElementAsLeaf)(V,s):(0,t.printElement)(V,(0,t.printProps)(a(y)?[]:Array.from(y.attributes).map(U=>U.name).sort(),a(y)?{}:Array.from(y.attributes).reduce((U,O)=>(U[O.name]=O.value,U),{}),s,E+s.indent,C,B,q),(0,t.printChildren)(Array.prototype.slice.call(y.childNodes||y.children),s,E+s.indent,C,B,q),s,E)};e.serialize=o;var p={serialize:o,test:l},_=p;e.default=_}}),pt=D({"node_modules/pretty-format/build/plugins/Immutable.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=ee(),n="@@__IMMUTABLE_ITERABLE__@@",u="@@__IMMUTABLE_LIST__@@",f="@@__IMMUTABLE_KEYED__@@",g="@@__IMMUTABLE_MAP__@@",m="@@__IMMUTABLE_ORDERED__@@",i="@@__IMMUTABLE_RECORD__@@",h="@@__IMMUTABLE_SEQ__@@",l="@@__IMMUTABLE_SET__@@",d="@@__IMMUTABLE_STACK__@@",c=O=>`Immutable.${O}`,a=O=>`[${O}]`,o=" ",p="…",_=(O,M,N,T,P,I,L)=>++T>M.maxDepth?a(c(L)):`${c(L)+o}{${(0,t.printIteratorEntries)(O.entries(),M,N,T,P,I)}}`;function y(O){let M=0;return{next(){if(M<O._keys.length){const N=O._keys[M++];return{done:!1,value:[N,O.get(N)]}}return{done:!0,value:void 0}}}}var s=(O,M,N,T,P,I)=>{const L=c(O._name||"Record");return++T>M.maxDepth?a(L):`${L+o}{${(0,t.printIteratorEntries)(y(O),M,N,T,P,I)}}`},E=(O,M,N,T,P,I)=>{const L=c("Seq");return++T>M.maxDepth?a(L):O[f]?`${L+o}{${O._iter||O._object?(0,t.printIteratorEntries)(O.entries(),M,N,T,P,I):p}}`:`${L+o}[${O._iter||O._array||O._collection||O._iterable?(0,t.printIteratorValues)(O.values(),M,N,T,P,I):p}]`},C=(O,M,N,T,P,I,L)=>++T>M.maxDepth?a(c(L)):`${c(L)+o}[${(0,t.printIteratorValues)(O.values(),M,N,T,P,I)}]`,B=(O,M,N,T,P,I)=>O[g]?_(O,M,N,T,P,I,O[m]?"OrderedMap":"Map"):O[u]?C(O,M,N,T,P,I,"List"):O[l]?C(O,M,N,T,P,I,O[m]?"OrderedSet":"Set"):O[d]?C(O,M,N,T,P,I,"Stack"):O[h]?E(O,M,N,T,P,I):s(O,M,N,T,P,I);e.serialize=B;var q=O=>O&&(O[n]===!0||O[i]===!0);e.test=q;var V={serialize:B,test:q},U=V;e.default=U}}),yt=D({"node_modules/react-is/cjs/react-is.production.min.js"(e){var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),i=Symbol.for("react.context"),h=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),c=Symbol.for("react.suspense_list"),a=Symbol.for("react.memo"),o=Symbol.for("react.lazy"),p=Symbol.for("react.offscreen"),_;_=Symbol.for("react.module.reference");function y(s){if(typeof s=="object"&&s!==null){var E=s.$$typeof;switch(E){case t:switch(s=s.type,s){case u:case g:case f:case d:case c:return s;default:switch(s=s&&s.$$typeof,s){case h:case i:case l:case o:case a:case m:return s;default:return E}}case n:return E}}}e.ContextConsumer=i,e.ContextProvider=m,e.Element=t,e.ForwardRef=l,e.Fragment=u,e.Lazy=o,e.Memo=a,e.Portal=n,e.Profiler=g,e.StrictMode=f,e.Suspense=d,e.SuspenseList=c,e.isAsyncMode=function(){return!1},e.isConcurrentMode=function(){return!1},e.isContextConsumer=function(s){return y(s)===i},e.isContextProvider=function(s){return y(s)===m},e.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===t},e.isForwardRef=function(s){return y(s)===l},e.isFragment=function(s){return y(s)===u},e.isLazy=function(s){return y(s)===o},e.isMemo=function(s){return y(s)===a},e.isPortal=function(s){return y(s)===n},e.isProfiler=function(s){return y(s)===g},e.isStrictMode=function(s){return y(s)===f},e.isSuspense=function(s){return y(s)===d},e.isSuspenseList=function(s){return y(s)===c},e.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===u||s===g||s===f||s===d||s===c||s===p||typeof s=="object"&&s!==null&&(s.$$typeof===o||s.$$typeof===a||s.$$typeof===m||s.$$typeof===i||s.$$typeof===l||s.$$typeof===_||s.getModuleId!==void 0)},e.typeOf=y}}),bt=D({"node_modules/react-is/index.js"(e,t){t.exports=yt()}}),gt=D({"node_modules/pretty-format/build/plugins/ReactElement.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=f(bt()),n=de();function u(a){if(typeof WeakMap!="function")return null;var o=new WeakMap,p=new WeakMap;return(u=function(_){return _?p:o})(a)}function f(a,o){if(a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var p=u(o);if(p&&p.has(a))return p.get(a);var _={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in a)if(s!=="default"&&Object.prototype.hasOwnProperty.call(a,s)){var E=y?Object.getOwnPropertyDescriptor(a,s):null;E&&(E.get||E.set)?Object.defineProperty(_,s,E):_[s]=a[s]}return _.default=a,p&&p.set(a,_),_}var g=(a,o=[])=>(Array.isArray(a)?a.forEach(p=>{g(p,o)}):a!=null&&a!==!1&&o.push(a),o),m=a=>{const o=a.type;if(typeof o=="string")return o;if(typeof o=="function")return o.displayName||o.name||"Unknown";if(t.isFragment(a))return"React.Fragment";if(t.isSuspense(a))return"React.Suspense";if(typeof o=="object"&&o!==null){if(t.isContextProvider(a))return"Context.Provider";if(t.isContextConsumer(a))return"Context.Consumer";if(t.isForwardRef(a)){if(o.displayName)return o.displayName;const p=o.render.displayName||o.render.name||"";return p!==""?`ForwardRef(${p})`:"ForwardRef"}if(t.isMemo(a)){const p=o.displayName||o.type.displayName||o.type.name||"";return p!==""?`Memo(${p})`:"Memo"}}return"UNDEFINED"},i=a=>{const{props:o}=a;return Object.keys(o).filter(p=>p!=="children"&&o[p]!==void 0).sort()},h=(a,o,p,_,y,s)=>++_>o.maxDepth?(0,n.printElementAsLeaf)(m(a),o):(0,n.printElement)(m(a),(0,n.printProps)(i(a),a.props,o,p+o.indent,_,y,s),(0,n.printChildren)(g(a.props.children),o,p+o.indent,_,y,s),o,p);e.serialize=h;var l=a=>a!=null&&t.isElement(a);e.test=l;var d={serialize:h,test:l},c=d;e.default=c}}),_t=D({"node_modules/pretty-format/build/plugins/ReactTestComponent.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.serialize=e.default=void 0;var t=de(),n=globalThis["jest-symbol-do-not-touch"]||globalThis.Symbol,u=typeof n=="function"&&n.for?n.for("react.test.json"):245830487,f=l=>{const{props:d}=l;return d?Object.keys(d).filter(c=>d[c]!==void 0).sort():[]},g=(l,d,c,a,o,p)=>++a>d.maxDepth?(0,t.printElementAsLeaf)(l.type,d):(0,t.printElement)(l.type,l.props?(0,t.printProps)(f(l),l.props,d,c+d.indent,a,o,p):"",l.children?(0,t.printChildren)(l.children,d,c+d.indent,a,o,p):"",d,c);e.serialize=g;var m=l=>l&&l.$$typeof===u;e.test=m;var i={serialize:g,test:m},h=i;e.default=h}}),ht=D({"node_modules/pretty-format/build/index.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.DEFAULT_OPTIONS=void 0,e.format=_e,e.plugins=void 0;var t=d(Pe()),n=ee(),u=d(ot()),f=d(ct()),g=d(ft()),m=d(mt()),i=d(pt()),h=d(gt()),l=d(_t());function d(r){return r&&r.__esModule?r:{default:r}}var c=Object.prototype.toString,a=Date.prototype.toISOString,o=Error.prototype.toString,p=RegExp.prototype.toString,_=r=>typeof r.constructor=="function"&&r.constructor.name||"Object",y=r=>typeof window<"u"&&r===window,s=/^Symbol\((.*)\)(.*)$/,E=/\n/gi,C=class extends Error{constructor(r,b){super(r),this.stack=b,this.name=this.constructor.name}};function B(r){return r==="[object Array]"||r==="[object ArrayBuffer]"||r==="[object DataView]"||r==="[object Float32Array]"||r==="[object Float64Array]"||r==="[object Int8Array]"||r==="[object Int16Array]"||r==="[object Int32Array]"||r==="[object Uint8Array]"||r==="[object Uint8ClampedArray]"||r==="[object Uint16Array]"||r==="[object Uint32Array]"}function q(r){return Object.is(r,-0)?"-0":String(r)}function V(r){return`${r}n`}function U(r,b){return b?`[Function ${r.name||"anonymous"}]`:"[Function]"}function O(r){return String(r).replace(s,"Symbol($1)")}function M(r){return`[${o.call(r)}]`}function N(r,b,v,S){if(r===!0||r===!1)return`${r}`;if(r===void 0)return"undefined";if(r===null)return"null";const $=typeof r;if($==="number")return q(r);if($==="bigint")return V(r);if($==="string")return S?`"${r.replace(/"|\\/g,"\\$&")}"`:`"${r}"`;if($==="function")return U(r,b);if($==="symbol")return O(r);const w=c.call(r);return w==="[object WeakMap]"?"WeakMap {}":w==="[object WeakSet]"?"WeakSet {}":w==="[object Function]"||w==="[object GeneratorFunction]"?U(r,b):w==="[object Symbol]"?O(r):w==="[object Date]"?isNaN(+r)?"Date { NaN }":a.call(r):w==="[object Error]"?M(r):w==="[object RegExp]"?v?p.call(r).replace(/[\\^$*+?.()|[\]{}]/g,"\\$&"):p.call(r):r instanceof Error?M(r):null}function T(r,b,v,S,$,w){if($.indexOf(r)!==-1)return"[Circular]";$=$.slice(),$.push(r);const R=++S>b.maxDepth,j=b.min;if(b.callToJSON&&!R&&r.toJSON&&typeof r.toJSON=="function"&&!w)return z(r.toJSON(),b,v,S,$,!0);const x=c.call(r);return x==="[object Arguments]"?R?"[Arguments]":`${j?"":"Arguments "}[${(0,n.printListItems)(r,b,v,S,$,z)}]`:B(x)?R?`[${r.constructor.name}]`:`${j||!b.printBasicPrototype&&r.constructor.name==="Array"?"":`${r.constructor.name} `}[${(0,n.printListItems)(r,b,v,S,$,z)}]`:x==="[object Map]"?R?"[Map]":`Map {${(0,n.printIteratorEntries)(r.entries(),b,v,S,$,z," => ")}}`:x==="[object Set]"?R?"[Set]":`Set {${(0,n.printIteratorValues)(r.values(),b,v,S,$,z)}}`:R||y(r)?`[${_(r)}]`:`${j||!b.printBasicPrototype&&_(r)==="Object"?"":`${_(r)} `}{${(0,n.printObjectProperties)(r,b,v,S,$,z)}}`}function P(r){return r.serialize!=null}function I(r,b,v,S,$,w){let R;try{R=P(r)?r.serialize(b,v,S,$,w,z):r.print(b,j=>z(j,v,S,$,w),j=>{const x=S+v.indent;return x+j.replace(E,`
${x}`)},{edgeSpacing:v.spacingOuter,min:v.min,spacing:v.spacingInner},v.colors)}catch(j){throw new C(j.message,j.stack)}if(typeof R!="string")throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof R}".`);return R}function L(r,b){for(let v=0;v<r.length;v++)try{if(r[v].test(b))return r[v]}catch(S){throw new C(S.message,S.stack)}return null}function z(r,b,v,S,$,w){const R=L(b.plugins,r);if(R!==null)return I(R,r,b,v,S,$);const j=N(r,b.printFunctionName,b.escapeRegex,b.escapeString);return j!==null?j:T(r,b,v,S,$,w)}var te={comment:"gray",content:"reset",prop:"yellow",tag:"cyan",value:"green"},me=Object.keys(te),k={callToJSON:!0,compareKeys:void 0,escapeRegex:!1,escapeString:!0,highlight:!1,indent:2,maxDepth:1/0,maxWidth:1/0,min:!1,plugins:[],printBasicPrototype:!0,printFunctionName:!0,theme:te};e.DEFAULT_OPTIONS=k;function ke(r){if(Object.keys(r).forEach(b=>{if(!Object.prototype.hasOwnProperty.call(k,b))throw new Error(`pretty-format: Unknown option "${b}".`)}),r.min&&r.indent!==void 0&&r.indent!==0)throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');if(r.theme!==void 0){if(r.theme===null)throw new Error('pretty-format: Option "theme" must not be null.');if(typeof r.theme!="object")throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof r.theme}".`)}}var Fe=r=>me.reduce((b,v)=>{const S=r.theme&&r.theme[v]!==void 0?r.theme[v]:te[v],$=S&&t.default[S];if($&&typeof $.close=="string"&&typeof $.open=="string")b[v]=$;else throw new Error(`pretty-format: Option "theme" has a key "${v}" whose value "${S}" is undefined in ansi-styles.`);return b},Object.create(null)),Ue=()=>me.reduce((r,b)=>(r[b]={close:"",open:""},r),Object.create(null)),pe=r=>{var b;return(b=r==null?void 0:r.printFunctionName)!==null&&b!==void 0?b:k.printFunctionName},ye=r=>{var b;return(b=r==null?void 0:r.escapeRegex)!==null&&b!==void 0?b:k.escapeRegex},be=r=>{var b;return(b=r==null?void 0:r.escapeString)!==null&&b!==void 0?b:k.escapeString},ge=r=>{var b,v,S,$,w,R,j;return{callToJSON:(b=r==null?void 0:r.callToJSON)!==null&&b!==void 0?b:k.callToJSON,colors:r!=null&&r.highlight?Fe(r):Ue(),compareKeys:typeof(r==null?void 0:r.compareKeys)=="function"?r.compareKeys:k.compareKeys,escapeRegex:ye(r),escapeString:be(r),indent:r!=null&&r.min?"":ze((v=r==null?void 0:r.indent)!==null&&v!==void 0?v:k.indent),maxDepth:(S=r==null?void 0:r.maxDepth)!==null&&S!==void 0?S:k.maxDepth,maxWidth:($=r==null?void 0:r.maxWidth)!==null&&$!==void 0?$:k.maxWidth,min:(w=r==null?void 0:r.min)!==null&&w!==void 0?w:k.min,plugins:(R=r==null?void 0:r.plugins)!==null&&R!==void 0?R:k.plugins,printBasicPrototype:(j=r==null?void 0:r.printBasicPrototype)!==null&&j!==void 0?j:!0,printFunctionName:pe(r),spacingInner:r!=null&&r.min?" ":`
`,spacingOuter:r!=null&&r.min?"":`
`}};function ze(r){return new Array(r+1).join(" ")}function _e(r,b){if(b&&(ke(b),b.plugins)){const S=L(b.plugins,r);if(S!==null)return I(S,r,ge(b),"",0,[])}const v=N(r,pe(b),ye(b),be(b));return v!==null?v:T(r,ge(b),"",0,[])}var qe={AsymmetricMatcher:u.default,ConvertAnsi:f.default,DOMCollection:g.default,DOMElement:m.default,Immutable:i.default,ReactElement:h.default,ReactTestComponent:l.default};e.plugins=qe;var xe=_e;e.default=xe}}),oe=lt(ht()),{AsymmetricMatcher:Ot,DOMCollection:vt,DOMElement:Et,Immutable:$t,ReactElement:St,ReactTestComponent:Mt}=oe.plugins,Ae=[Mt,St,Et,vt,$t,Ot],G=W.dim,Te=W.green,je=W.red,At="·";function se(e,t=10,n=10){let u=1e4,f;try{f=(0,oe.format)(e,{maxDepth:t,maxWidth:n,min:!0,plugins:Ae})}catch{f=(0,oe.format)(e,{callToJSON:!1,maxDepth:t,maxWidth:n,min:!0,plugins:Ae})}return f.length>=u&&t>1?se(e,Math.floor(t/2),n):f.length>=u&&n>1?se(e,t,Math.floor(n/2)):f}function Tt(e){return e.replace(/\s+$/gm,t=>At.repeat(t.length))}function Nt(e){return je(Tt(se(e)))}function Ct(e,t="received",n="expected",u={}){const{comment:f="",expectedColor:g=Te,isDirectExpectCall:m=!1,isNot:i=!1,promise:h="",receivedColor:l=je,secondArgument:d="",secondArgumentColor:c=Te}=u;let a="",o="expect";return!m&&t!==""&&(a+=G(`${o}(`)+l(t),o=")"),h!==""&&(a+=G(`${o}.`)+h,o=""),i&&(a+=`${G(`${o}.`)}not`,o=""),e.includes(".")?o+=e:(a+=G(`${o}.`)+e,o=""),n===""?o+="()":(a+=G(`${o}(`)+g(n),d&&(a+=G(", ")+c(d)),o=")"),f!==""&&(o+=` // ${f}`),o!==""&&(a+=G(o)),a}/**
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
 */function wt(e){if(typeof e.violations>"u")throw new Error("No violations found in aXe results object");let t=It(e.violations,e.toolOptions?e.toolOptions.impactLevels:[]);function n(m){if(m.length===0)return[];let i=`

`;return m.map(l=>l.nodes.map(c=>`Expected the HTML found at $('${c.target.join(", ")}') to have no violations:`+i+W.grey(c.html)+i+"Received:"+i+Nt(`${l.help} (${l.id})`)+i+W.yellow(c.failureSummary)+i+(l.helpUrl?`You can find more information on this issue here: 
${W.blue(l.helpUrl)}`:"")).join(i)).join(i+"────────"+i)}let u=n(t),f=u.length===0;function g(){if(!f)return Ct(".toHaveNoViolations")+`

${u}`}return{actual:t,message:g,pass:f}}function It(e,t){return t&&t.length>0?e.filter(n=>t.includes(n.impact)):e}const Rt=Object.freeze(Object.defineProperty({__proto__:null,toHaveNoViolations:wt},Symbol.toStringTag,{value:"Module"})),{addons:Pt}=__STORYBOOK_MODULE_PREVIEW_API__,{global:jt}=__STORYBOOK_MODULE_GLOBAL__;var X="storybook/a11y",Bt=`${X}/result`,Lt=`${X}/request`,Dt=`${X}/running`,kt=`${X}/error`,Ft=`${X}/manual`,ne={RESULT:Bt,REQUEST:Lt,RUNNING:Dt,ERROR:kt,MANUAL:Ft},Ut="a11y-test",{document:Ne}=jt,ae=Pt.getChannel(),Be={config:{},options:{}},zt=["region"],ce=[],fe=!1,Le=async()=>{if(ce.length===0){fe=!1;return}fe=!0;let e=ce.shift();e&&await e(),Le()},De=async(e=Be)=>{let{default:t}=await Ge(async()=>{const{default:i}=await import("./axe-pnu75rwz.js").then(h=>h.a);return{default:i}},__vite__mapDeps([0,1]),import.meta.url),{element:n="body",config:u={},options:f={}}=e,g=Ne.querySelector(n)??Ne.body;if(!g)return;t.reset();let m={...u,rules:[...zt.map(i=>({id:i,enabled:!1})),...(u==null?void 0:u.rules)??[]]};return t.configure(m),new Promise((i,h)=>{let l=async()=>{try{let d=await t.run(g,f);i(d)}catch(d){h(d)}};ce.push(l),fe||Le()})};ae.on(ne.MANUAL,async(e,t=Be)=>{try{let n=await De(t),u=JSON.parse(JSON.stringify(n));ae.emit(ne.RESULT,u,e)}catch(n){ae.emit(ne.ERROR,n)}});function Ce(){try{return!1}catch{return!1}}function qt(){try{return!1}catch{return!1}}we.extend(Rt);var Vt=async({reporting:e,parameters:t,globals:n,tags:u})=>{let f=t.a11y,g=n.a11y;if((f==null?void 0:f.manual)!==!0&&(f==null?void 0:f.disable)!==!0&&(g==null?void 0:g.manual)!==!0){if(qt()&&!u.includes(Ut))return;try{let m=await De(f);if(m){let i=((m==null?void 0:m.violations.length)??0)>0;e.addReport({type:"a11y",version:1,result:m,status:i?"failed":"passed"}),Ce()&&i&&we(m).toHaveNoViolations()}}catch(m){if(e.addReport({type:"a11y",version:1,result:{error:m},status:"failed"}),Ce())throw m}}},Wt={a11y:{manual:!1}};export{Vt as experimental_afterEach,Wt as initialGlobals};
