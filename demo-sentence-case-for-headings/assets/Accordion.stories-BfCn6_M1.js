import{j as e}from"./jsx-runtime-BlAj40OV.js";import{P as n}from"./index.esm-ZbIVeNIZ.js";import{b as x,g as S}from"./exampleContent-hIIPvEhU.js";import{c as u}from"./clsx-B-dksMZM.js";import{r}from"./index-Cs7sjTYM.js";import{s as K}from"./index.esm-Bsc2owIZ.js";import{g as M}from"./getHeadingTag-Dv1eMqvl.js";import{I as F}from"./Icon-msbkstIT.js";import{u as W}from"./useKeyboardFocus-CRUFsA_C.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const G={headingLevel:1,sectionAs:"section"},H=r.createContext(G);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const V=r.forwardRef(({label:o,expanded:d=!1,children:l,className:p,...h},c)=>{const{headingLevel:g,sectionAs:O}=r.useContext(H),[m,$]=r.useState(d),z=M(g),B=O||"section",j=r.useId(),P=`button-${j}`,C=`panel-${j}`;return e.jsxs("div",{className:u("ams-accordion__section",p),ref:c,...h,children:[e.jsx(z,{className:"ams-accordion__header",children:e.jsxs("button",{"aria-controls":C,"aria-expanded":m,className:"ams-accordion__button",id:P,onClick:()=>$(!m),type:"button",children:[e.jsx(F,{svg:K,size:"level-5",className:"ams-accordion__icon"}),o]})}),e.jsx(B,{"aria-labelledby":P,className:u("ams-accordion__panel",{"ams-accordion__panel--expanded":m}),id:C,children:l})]})});V.displayName="Accordion.Section";try{Accordion.Section.displayName="Accordion.Section",Accordion.Section.__docgenInfo={description:"",displayName:"Accordion.Section",props:{label:{defaultValue:null,description:"The heading text.",name:"label",required:!0,type:{name:"string"}},expanded:{defaultValue:{value:"false"},description:"Whether the content is displayed initially.",name:"expanded",required:!1,type:{name:"boolean"}}}}}catch{}const q=r.forwardRef(({children:o,className:d,headingLevel:l,sectionAs:p="section"},h)=>{const c=r.useRef(null);r.useImperativeHandle(h,()=>c.current);const{keyDown:g}=W(c,{rotating:!0});return e.jsx(H.Provider,{value:{headingLevel:l,sectionAs:p},children:e.jsx("div",{className:u("ams-accordion",d),onKeyDown:g,ref:c,children:o})})});q.displayName="Accordion";const a=Object.assign(q,{Section:V});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:"The hierarchical level of the Accordion Section heading(s) within the document.",name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},sectionAs:{defaultValue:{value:"section"},description:"The HTML element to use for each Accordion Section.",name:"sectionAs",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}}}catch{}const A=S(),_=S(),f=S(),y=x(),b=x(),v=x(),J={title:"Components/Containers/Accordion",component:a,args:{headingLevel:1}},i={args:{children:[e.jsx(a.Section,{label:A,children:e.jsx(n,{children:y})},1),e.jsx(a.Section,{label:_,children:e.jsx(n,{children:b})},2),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:v})},3)]}},t={args:{children:[e.jsx(a.Section,{label:A,children:e.jsx(n,{children:y})},1),e.jsx(a.Section,{label:_,expanded:!0,children:e.jsx(n,{children:b})},2),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:v})},3)]}},s={args:{sectionAs:"div",children:[e.jsx(a.Section,{label:A,children:e.jsx(n,{children:y})},1),e.jsx(a.Section,{label:_,children:e.jsx(n,{children:b})},2),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:v})},3)]}};var N,I,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var w,E,T;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label={heading2} expanded>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(T=(E=t.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var D,L,R;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    sectionAs: 'div',
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(R=(L=s.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const Q=["Default","ExpandedByDefault","ImproveSemantics"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:i,ExpandedByDefault:t,ImproveSemantics:s,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{ce as A,t as E,s as I};
