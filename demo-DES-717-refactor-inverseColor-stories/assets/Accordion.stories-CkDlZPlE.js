import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as S}from"./exampleContent-DcLVbCjv.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as n}from"./index-CBqU2yxZ.js";import{t as O}from"./index.esm-DjZ2yxjc.js";import{g as $}from"./getHeadingElement-DiRwFEz7.js";import{I as H}from"./Icon-DW52t4nJ.js";import{u as M}from"./useKeyboardFocus-CRUFsA_C.js";import{P as r}from"./Paragraph-Im3SnT_h.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const z={headingLevel:1,section:!0},B=n.createContext(z),T=B;try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const I=n.forwardRef(({label:o,expanded:h=!1,children:d,className:m,...u},c)=>{const{headingLevel:g,section:R}=n.useContext(T),[l,V]=n.useState(h),q=$(g),A=n.useId(),x=`button-${A}`,_=`panel-${A}`;return e.jsxs("div",{className:p("ams-accordion__section",m),ref:c,...u,children:[e.jsx(q,{className:"ams-accordion__header",children:e.jsxs("button",{"aria-controls":_,"aria-expanded":l,className:"ams-accordion__button",id:x,onClick:()=>V(!l),type:"button",children:[o,e.jsx(H,{svg:O,size:"level-5"})]})}),R?e.jsx("section",{id:_,"aria-labelledby":x,className:p("ams-accordion__panel",{"ams-accordion__panel--expanded":l}),children:d}):e.jsx("div",{id:_,"aria-labelledby":x,className:p("ams-accordion__panel",{"ams-accordion__panel--expanded":l}),children:d})]})});I.displayName="Accordion.Section";try{Accordion.Section.displayName="Accordion.Section",Accordion.Section.__docgenInfo={description:"",displayName:"Accordion.Section",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},expanded:{defaultValue:{value:"false"},description:"",name:"expanded",required:!1,type:{name:"boolean"}}}}}catch{}const L=n.forwardRef(({children:o,className:h,headingLevel:d,section:m=!0},u)=>{const c=n.useRef(null);n.useImperativeHandle(u,()=>c.current);const{keyDown:g}=M(c,{rotating:!0});return e.jsx(T.Provider,{value:{headingLevel:d,section:m},children:e.jsx("div",{className:p("ams-accordion",h),onKeyDown:g,ref:c,children:o})})});L.displayName="Accordion";const a=Object.assign(L,{Section:I});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:"The hierarchical level of the accordion title within the document.",name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},section:{defaultValue:{value:"true"},description:"",name:"section",required:!1,type:{name:"boolean"}}}}}catch{}const f=S(),y=S(),b=S(),K={title:"Components/Containers/Accordion",component:a,args:{headingLevel:1}},t={args:{children:[e.jsx(a.Section,{label:"Eerste sectie",children:e.jsx(r,{children:f})},1),e.jsx(a.Section,{label:"Tweede sectie",children:e.jsx(r,{children:y})},2),e.jsx(a.Section,{label:"Derde sectie",children:e.jsx(r,{children:b})},3)]}},i={args:{children:[e.jsx(a.Section,{label:"Eerste sectie",children:e.jsx(r,{children:f})},1),e.jsx(a.Section,{label:"Tweede sectie",expanded:!0,children:e.jsx(r,{children:y})},2),e.jsx(a.Section,{label:"Derde sectie",children:e.jsx(r,{children:b})},3)]}},s={args:{section:!1,children:[e.jsx(a.Section,{label:"Eerste sectie",children:e.jsx(r,{children:f})},1),e.jsx(a.Section,{label:"Tweede sectie",children:e.jsx(r,{children:y})},2),e.jsx(a.Section,{label:"Derde sectie",children:e.jsx(r,{children:b})},3)]}};var j,v,P;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(P=(v=t.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var C,E,k;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie" expanded>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(k=(E=i.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var w,N,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(N=s.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const F=["Default","ExpandedByDefault","TooManyLandmarks"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:t,ExpandedByDefault:i,TooManyLandmarks:s,__namedExportsOrder:F,default:K},Symbol.toStringTag,{value:"Module"}));export{ae as A,i as E,s as T};
