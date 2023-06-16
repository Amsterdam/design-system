import{j as q}from"./jsx-runtime-94f6e698.js";import{c as w}from"./clsx.m-1229b3e0.js";import{r as z}from"./index-8db94870.js";function L(e){switch(e){case 2:return"h2";case 3:return"h3";case 4:return"h4";default:return"h1"}}const l=z.forwardRef(({level:e=1,styleLevel:f,children:b,className:x,...H},j)=>{const _=L(e);return q.jsx(_,{ref:j,className:w("amsterdam-heading",`amsterdam-heading-${f||e}`,x),...H,children:b})});l.displayName="Heading";try{l.displayName="Heading",l.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},styleLevel:{defaultValue:null,description:"",name:"styleLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const k={title:"CSS Components/Heading",component:l,argTypes:{level:{table:{disable:!0}},styleLevel:{options:[1,2,3,4],control:"select",table:{type:{summary:"number"},defaultValue:{summary:"1"}}}},args:{children:"Jouw typograaf biedt mij zulke exquise schreven!",level:1,styleLevel:1}},a={parameters:{docs:{source:{language:"html",code:'<h1 class="amsterdam-heading amsterdam-heading-1">Jouw typograaf biedt mij zulke exquise schreven!</h1>'}}}},s={args:{level:2,styleLevel:2},parameters:{docs:{source:{language:"html",code:'<h2 class="amsterdam-heading amsterdam-heading-2">Jouw typograaf biedt mij zulke exquise schreven!</h2>'}}}},r={args:{level:3,styleLevel:3},parameters:{docs:{source:{language:"html",code:'<h3 class="amsterdam-heading amsterdam-heading-3">Jouw typograaf biedt mij zulke exquise schreven!</h3>'}}}},t={args:{level:4,styleLevel:4},parameters:{docs:{source:{language:"html",code:'<h4 class="amsterdam-heading amsterdam-heading-4">Jouw typograaf biedt mij zulke exquise schreven!</h4>'}}}};var o,d,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h1 class="amsterdam-heading amsterdam-heading-1">Jouw typograaf biedt mij zulke exquise schreven!</h1>'
      }
    }
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,n,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    level: 2,
    styleLevel: 2
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h2 class="amsterdam-heading amsterdam-heading-2">Jouw typograaf biedt mij zulke exquise schreven!</h2>'
      }
    }
  }
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var u,g,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    level: 3,
    styleLevel: 3
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h3 class="amsterdam-heading amsterdam-heading-3">Jouw typograaf biedt mij zulke exquise schreven!</h3>'
      }
    }
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var p,v,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    level: 4,
    styleLevel: 4
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h4 class="amsterdam-heading amsterdam-heading-4">Jouw typograaf biedt mij zulke exquise schreven!</h4>'
      }
    }
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const J=["Heading1","Heading2","Heading3","Heading4"],O=Object.freeze(Object.defineProperty({__proto__:null,Heading1:a,Heading2:s,Heading3:r,Heading4:t,__namedExportsOrder:J,default:k},Symbol.toStringTag,{value:"Module"}));export{O as H,a,s as b,r as c,t as d};
//# sourceMappingURL=Heading.stories-935991c3.js.map
