import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as n}from"./index.esm-C5sO23TF.js";import{h as x,b as S}from"./exampleContent-r-zRGsZY.js";import{c as u}from"./clsx-B-dksMZM.js";import{r as o}from"./index-G8LIXM5I.js";import{r as K}from"./index.esm-C_dxfMQN.js";import{g as M}from"./getHeadingTag-C4Rztoc8.js";import{I as F}from"./Icon-BBW_x4VP.js";import{u as W}from"./useKeyboardFocus-BsBpr6qG.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const G={headingLevel:null,sectionAs:"section"},H=o.createContext(G);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const V=o.forwardRef(({children:r,className:d,expanded:l=!1,label:p,...h},c)=>{const{headingLevel:g,sectionAs:O}=o.useContext(H),[m,z]=o.useState(l),$=M(g),B=O||"section",v=o.useId(),P=`button-${v}`,N=`panel-${v}`;return e.jsxs("div",{className:u("ams-accordion__section",d),ref:c,...h,children:[e.jsx($,{className:"ams-accordion__header",children:e.jsxs("button",{"aria-controls":N,"aria-expanded":m,className:"ams-accordion__button",id:P,onClick:()=>z(!m),type:"button",children:[e.jsx(F,{className:"ams-accordion__icon",size:"heading-4",svg:K}),p]})}),e.jsx(B,{"aria-labelledby":P,className:u("ams-accordion__panel",{"ams-accordion__panel--expanded":m}),id:N,children:r})]})});V.displayName="Accordion.Section";try{Accordion.Section.displayName="Accordion.Section",Accordion.Section.__docgenInfo={description:"",displayName:"Accordion.Section",props:{expanded:{defaultValue:{value:"false"},description:"Whether the content is displayed initially.",name:"expanded",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The heading text.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const q=o.forwardRef(({children:r,className:d,headingLevel:l,sectionAs:p="section"},h)=>{const c=o.useRef(null);o.useImperativeHandle(h,()=>c.current);const{keyDown:g}=W(c,{focusableElements:[".ams-accordion__button:not([disabled])"],rotating:!0});return e.jsx(H.Provider,{value:{headingLevel:l,sectionAs:p},children:e.jsx("div",{className:u("ams-accordion",d),onKeyDown:g,ref:c,children:r})})});q.displayName="Accordion";const a=Object.assign(q,{Section:V});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:`The hierarchical level of this Accordion’s Section Headings within the document.
There is no default value; determine the correct level for each instance.
Note: this intentionally does not change the font size.`,name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"3"},{value:"4"},{value:"2"}]}},sectionAs:{defaultValue:{value:"section"},description:"The HTML element to use for each Accordion Section.",name:"sectionAs",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}}}catch{}const _=x(),f=x(),A=x(),y=S(),b=S(),j=S(),J={title:"Components/Containers/Accordion",component:a,args:{headingLevel:3}},i={args:{children:[e.jsx(a.Section,{label:_,children:e.jsx(n,{children:y})},1),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:b})},2),e.jsx(a.Section,{label:A,children:e.jsx(n,{children:j})},3)]}},t={args:{children:[e.jsx(a.Section,{label:_,children:e.jsx(n,{children:y})},1),e.jsx(a.Section,{expanded:!0,label:f,children:e.jsx(n,{children:b})},2),e.jsx(a.Section,{label:A,children:e.jsx(n,{children:j})},3)]}},s={args:{children:[e.jsx(a.Section,{label:_,children:e.jsx(n,{children:y})},1),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:b})},2),e.jsx(a.Section,{label:A,children:e.jsx(n,{children:j})},3)],sectionAs:"div"}};var k,C,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var E,R,T;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section expanded key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(T=(R=t.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var w,L,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>],
    sectionAs: 'div'
  }
}`,...(D=(L=s.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const Q=["Default","ExpandedByDefault","ReduceLandmarks"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:i,ExpandedByDefault:t,ReduceLandmarks:s,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{ce as A,t as E,s as R};
