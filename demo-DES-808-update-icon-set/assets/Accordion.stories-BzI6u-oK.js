import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{b as x,h as S}from"./exampleContent-BEbrefRz.js";import{c as u}from"./clsx-B-dksMZM.js";import{r as o}from"./index-uCp2LrAq.js";import{w as B}from"./index.esm-BYEJ3b8o.js";import{g as K}from"./getHeadingElement-DiRwFEz7.js";import{I as F}from"./Icon-j44OzEOs.js";import{u as W}from"./useKeyboardFocus-CRUFsA_C.js";import{P as n}from"./Paragraph-DpVlyIEJ.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const X={headingLevel:1,sectionAs:"section"},H=o.createContext(X);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const V=o.forwardRef(({label:r,expanded:d=!1,children:l,className:p,...h},c)=>{const{headingLevel:g,sectionAs:M}=o.useContext(H),[m,O]=o.useState(d),$=K(g),z=M||"section",v=o.useId(),P=`button-${v}`,k=`panel-${v}`;return e.jsxs("div",{className:u("ams-accordion__section",p),ref:c,...h,children:[e.jsx($,{className:"ams-accordion__header",children:e.jsxs("button",{"aria-controls":k,"aria-expanded":m,className:"ams-accordion__button",id:P,onClick:()=>O(!m),type:"button",children:[e.jsx(F,{svg:B,size:"level-5",className:"ams-accordion__icon"}),r]})}),e.jsx(z,{"aria-labelledby":P,className:u("ams-accordion__panel",{"ams-accordion__panel--expanded":m}),id:k,children:l})]})});V.displayName="Accordion.Section";try{Accordion.Section.displayName="Accordion.Section",Accordion.Section.__docgenInfo={description:"",displayName:"Accordion.Section",props:{label:{defaultValue:null,description:"The heading text.",name:"label",required:!0,type:{name:"string"}},expanded:{defaultValue:{value:"false"},description:"Whether the content is displayed initially.",name:"expanded",required:!1,type:{name:"boolean"}}}}}catch{}const q=o.forwardRef(({children:r,className:d,headingLevel:l,sectionAs:p="section"},h)=>{const c=o.useRef(null);o.useImperativeHandle(h,()=>c.current);const{keyDown:g}=W(c,{rotating:!0});return e.jsx(H.Provider,{value:{headingLevel:l,sectionAs:p},children:e.jsx("div",{className:u("ams-accordion",d),onKeyDown:g,ref:c,children:r})})});q.displayName="Accordion";const a=Object.assign(q,{Section:V});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:"The hierarchical level of the Accordion Section heading(s) within the document.",name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},sectionAs:{defaultValue:{value:"section"},description:"The HTML element to use for each Accordion Section.",name:"sectionAs",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}}}catch{}const A=S(),_=S(),y=S(),f=x(),b=x(),j=x(),G={title:"Components/Containers/Accordion",component:a,args:{headingLevel:1}},i={args:{children:[e.jsx(a.Section,{label:A,children:e.jsx(n,{children:f})},1),e.jsx(a.Section,{label:_,children:e.jsx(n,{children:b})},2),e.jsx(a.Section,{label:y,children:e.jsx(n,{children:j})},3)]}},t={args:{children:[e.jsx(a.Section,{label:A,children:e.jsx(n,{children:f})},1),e.jsx(a.Section,{label:_,expanded:!0,children:e.jsx(n,{children:b})},2),e.jsx(a.Section,{label:y,children:e.jsx(n,{children:j})},3)]}},s={args:{sectionAs:"div",children:[e.jsx(a.Section,{label:A,children:e.jsx(n,{children:f})},1),e.jsx(a.Section,{label:_,children:e.jsx(n,{children:b})},2),e.jsx(a.Section,{label:y,children:e.jsx(n,{children:j})},3)]}};var C,N,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(I=(N=i.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var w,E,T;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label={heading2} expanded>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(T=(E=t.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var L,D,R;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=(D=s.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const J=["Default","ExpandedByDefault","TooManyLandmarks"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:i,ExpandedByDefault:t,TooManyLandmarks:s,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{ce as A,t as E,s as T};
