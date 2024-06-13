import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{a as x}from"./exampleContent-CRK3_7Hv.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as n}from"./index-uCp2LrAq.js";import{s as M}from"./index.esm-Dr6r5gIo.js";import{g as O}from"./getHeadingElement-DiRwFEz7.js";import{I as $}from"./Icon-j44OzEOs.js";import{u as z}from"./useKeyboardFocus-CRUFsA_C.js";import{P as r}from"./Paragraph-DpVlyIEJ.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const B={headingLevel:1,sectionAs:"section"},D=n.createContext(B);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const I=n.forwardRef(({label:o,expanded:d=!1,children:l,className:p,...h},c)=>{const{headingLevel:m,sectionAs:R}=n.useContext(D),[u,V]=n.useState(d),q=O(m),H=R||"section",A=n.useId(),f=`button-${A}`,b=`panel-${A}`;return e.jsxs("div",{className:g("ams-accordion__section",p),ref:c,...h,children:[e.jsx(q,{className:"ams-accordion__header",children:e.jsxs("button",{"aria-controls":b,"aria-expanded":u,className:"ams-accordion__button",id:f,onClick:()=>V(!u),type:"button",children:[e.jsx($,{svg:M,size:"level-5",className:"ams-accordion__icon"}),o]})}),e.jsx(H,{"aria-labelledby":f,className:g("ams-accordion__panel",{"ams-accordion__panel--expanded":u}),id:b,children:l})]})});I.displayName="Accordion.Section";try{Accordion.Section.displayName="Accordion.Section",Accordion.Section.__docgenInfo={description:"",displayName:"Accordion.Section",props:{label:{defaultValue:null,description:"The heading text.",name:"label",required:!0,type:{name:"string"}},expanded:{defaultValue:{value:"false"},description:"Whether the content is displayed initially.",name:"expanded",required:!1,type:{name:"boolean"}}}}}catch{}const L=n.forwardRef(({children:o,className:d,headingLevel:l,sectionAs:p="section"},h)=>{const c=n.useRef(null);n.useImperativeHandle(h,()=>c.current);const{keyDown:m}=z(c,{rotating:!0});return e.jsx(D.Provider,{value:{headingLevel:l,sectionAs:p},children:e.jsx("div",{className:g("ams-accordion",d),onKeyDown:m,ref:c,children:o})})});L.displayName="Accordion";const a=Object.assign(L,{Section:I});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:"The hierarchical level of the Accordion Section heading(s) within the document.",name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},sectionAs:{defaultValue:{value:"section"},description:"The HTML element to use for each Accordion Section.",name:"sectionAs",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}}}catch{}const S=x(),_=x(),y=x(),K={title:"Components/Containers/Accordion",component:a,args:{headingLevel:1}},t={args:{children:[e.jsx(a.Section,{label:"Eerste sectie",children:e.jsx(r,{children:S})},1),e.jsx(a.Section,{label:"Tweede sectie",children:e.jsx(r,{children:_})},2),e.jsx(a.Section,{label:"Derde sectie",children:e.jsx(r,{children:y})},3)]}},i={args:{children:[e.jsx(a.Section,{label:"Eerste sectie",children:e.jsx(r,{children:S})},1),e.jsx(a.Section,{label:"Tweede sectie",expanded:!0,children:e.jsx(r,{children:_})},2),e.jsx(a.Section,{label:"Derde sectie",children:e.jsx(r,{children:y})},3)]}},s={args:{sectionAs:"div",children:[e.jsx(a.Section,{label:"Eerste sectie",children:e.jsx(r,{children:S})},1),e.jsx(a.Section,{label:"Tweede sectie",children:e.jsx(r,{children:_})},2),e.jsx(a.Section,{label:"Derde sectie",children:e.jsx(r,{children:y})},3)]}};var j,v,P;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(P=(v=t.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var E,T,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie" expanded>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var w,C,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    sectionAs: 'div',
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(N=(C=s.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const F=["Default","ExpandedByDefault","TooManyLandmarks"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:t,ExpandedByDefault:i,TooManyLandmarks:s,__namedExportsOrder:F,default:K},Symbol.toStringTag,{value:"Module"}));export{ae as A,i as E,s as T};
