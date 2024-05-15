import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{a as S}from"./exampleContent-CRK3_7Hv.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as n}from"./index-BwDkhjyp.js";import{t as O}from"./index.esm-DQkeu4as.js";import{g as H}from"./getHeadingElement-DiRwFEz7.js";import{I as M}from"./Icon-CuaumHXX.js";import{u as $}from"./useKeyboardFocus-CRUFsA_C.js";import{P as r}from"./Paragraph-C4jU4-Z4.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const z={headingLevel:1,section:!0},T=n.createContext(z);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const I=n.forwardRef(({label:o,expanded:h=!1,children:d,className:m,...u},c)=>{const{headingLevel:g,section:R}=n.useContext(T),[l,V]=n.useState(h),q=H(g),A=n.useId(),x=`button-${A}`,_=`panel-${A}`;return e.jsxs("div",{className:p("ams-accordion__section",m),ref:c,...u,children:[e.jsx(q,{className:"ams-accordion__header",children:e.jsxs("button",{"aria-controls":_,"aria-expanded":l,className:"ams-accordion__button",id:x,onClick:()=>V(!l),type:"button",children:[e.jsx(M,{svg:O,size:"level-5",className:"ams-accordion__icon"}),o]})}),R?e.jsx("section",{id:_,"aria-labelledby":x,className:p("ams-accordion__panel",{"ams-accordion__panel--expanded":l}),children:d}):e.jsx("div",{id:_,"aria-labelledby":x,className:p("ams-accordion__panel",{"ams-accordion__panel--expanded":l}),children:d})]})});I.displayName="Accordion.Section";try{Accordion.Section.displayName="Accordion.Section",Accordion.Section.__docgenInfo={description:"",displayName:"Accordion.Section",props:{label:{defaultValue:null,description:"The heading text.",name:"label",required:!0,type:{name:"string"}},expanded:{defaultValue:{value:"false"},description:"Whether the content is displayed initially.",name:"expanded",required:!1,type:{name:"boolean"}}}}}catch{}const L=n.forwardRef(({children:o,className:h,headingLevel:d,section:m=!0},u)=>{const c=n.useRef(null);n.useImperativeHandle(u,()=>c.current);const{keyDown:g}=$(c,{rotating:!0});return e.jsx(T.Provider,{value:{headingLevel:d,section:m},children:e.jsx("div",{className:p("ams-accordion",h),onKeyDown:g,ref:c,children:o})})});L.displayName="Accordion";const a=Object.assign(L,{Section:I});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:"The hierarchical level of the Accordion Title within the document.",name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},section:{defaultValue:{value:"true"},description:"Whether to use a ‘section’ element and ‘region’ landmark for each Accordion Section.",name:"section",required:!1,type:{name:"boolean"}}}}}catch{}const y=S(),f=S(),b=S(),B={title:"Components/Containers/Accordion",component:a,args:{headingLevel:1}},t={args:{children:[e.jsx(a.Section,{label:"Eerste sectie",children:e.jsx(r,{children:y})},1),e.jsx(a.Section,{label:"Tweede sectie",children:e.jsx(r,{children:f})},2),e.jsx(a.Section,{label:"Derde sectie",children:e.jsx(r,{children:b})},3)]}},i={args:{children:[e.jsx(a.Section,{label:"Eerste sectie",children:e.jsx(r,{children:y})},1),e.jsx(a.Section,{label:"Tweede sectie",expanded:!0,children:e.jsx(r,{children:f})},2),e.jsx(a.Section,{label:"Derde sectie",children:e.jsx(r,{children:b})},3)]}},s={args:{section:!1,children:[e.jsx(a.Section,{label:"Eerste sectie",children:e.jsx(r,{children:y})},1),e.jsx(a.Section,{label:"Tweede sectie",children:e.jsx(r,{children:f})},2),e.jsx(a.Section,{label:"Derde sectie",children:e.jsx(r,{children:b})},3)]}};var j,v,P;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(P=(v=t.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var k,E,N;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie" expanded>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var w,C,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    section: false,
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const K=["Default","ExpandedByDefault","TooManyLandmarks"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:t,ExpandedByDefault:i,TooManyLandmarks:s,__namedExportsOrder:K,default:B},Symbol.toStringTag,{value:"Module"}));export{ee as A,i as E,s as T};
