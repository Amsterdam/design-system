import{j as z}from"./jsx-runtime-94f6e698.js";import{c as x}from"./clsx.m-1229b3e0.js";import{r as _}from"./index-8db94870.js";const s=_.forwardRef(({children:t,size:o,className:h,...f},y)=>z.jsx("p",{ref:y,className:x("amsterdam-paragraph",o&&`amsterdam-paragraph-${o}`,h),...f,children:t}));s.displayName="Paragraph";try{s.displayName="Paragraph",s.__docgenInfo={description:"",displayName:"Paragraph",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const v={title:"CSS Components/Paragraph",component:s,argTypes:{children:{table:{type:{summary:"string"}}},size:{control:{type:"select",labels:{undefined:"default",large:"large",small:"small"}},options:[void 0,"large","small"]}},args:{children:"Jouw typograaf biedt mij zulke exquise schreven!",size:void 0}},a={parameters:{docs:{source:{language:"html",code:'<p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>'}}}},e={args:{size:"large"},parameters:{docs:{source:{language:"html",code:'<p class="amsterdam-paragraph amsterdam-paragraph-large">Jouw typograaf biedt mij zulke exquise schreven!</p>'}}}},r={args:{size:"small"},parameters:{docs:{source:{language:"html",code:'<p class="amsterdam-paragraph amsterdam-paragraph-small">Jouw typograaf biedt mij zulke exquise schreven!</p>'}}}};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>'
      }
    }
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<p class="amsterdam-paragraph amsterdam-paragraph-large">Jouw typograaf biedt mij zulke exquise schreven!</p>'
      }
    }
  }
}`,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,i,n;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<p class="amsterdam-paragraph amsterdam-paragraph-small">Jouw typograaf biedt mij zulke exquise schreven!</p>'
      }
    }
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const b=["Default","Large","Small"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Large:e,Small:r,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{a as D,e as L,w as P,r as S};
//# sourceMappingURL=Paragraph.stories-9075a044.js.map
