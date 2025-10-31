import{r,j as e,c as S,a2 as H,P as n}from"./iframe-QqMjMkKP.js";import{j as _,b as A}from"./exampleContent-DRope23M.js";import{u as D}from"./useKeyboardFocus-abfWH8iU.js";import{I as V}from"./Icon-D1Rwr300.js";import{H as q}from"./Heading-BYf4bGeg.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const O={headingLevel:2},L=r.createContext(O);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const N=r.forwardRef(({children:o,className:h,expanded:g=!1,label:u,...m},c)=>{const{headingLevel:l,sectionAs:E}=r.useContext(L),[x,R]=r.useState(g),T=E||"section",P=r.useId(),w=`heading-${l}`,k=`button-${P}`,C=`panel-${P}`;return e.jsxs("div",{className:S("ams-accordion__section",h),ref:c,...m,children:[e.jsx(q,{className:"ams-accordion__header",level:l,children:e.jsxs("button",{"aria-controls":C,"aria-expanded":x,className:"ams-accordion__button",id:k,onClick:()=>R(!x),type:"button",children:[e.jsx(V,{className:"ams-accordion__icon",size:w,svg:H}),u]})}),e.jsx(T,{"aria-labelledby":k,className:S("ams-accordion__panel",{"ams-accordion__panel--expanded":x}),id:C,children:o})]})});N.displayName="Accordion.Section";try{Accordion.Section.displayName="Accordion.Section",Accordion.Section.__docgenInfo={description:"",displayName:"Accordion.Section",props:{expanded:{defaultValue:{value:"false"},description:"Whether the content is displayed initially.",name:"expanded",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The heading text.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const I=r.forwardRef(({children:o,className:h,headingLevel:g,sectionAs:u="section"},m)=>{const c=r.useRef(null);r.useImperativeHandle(m,()=>c.current);const{keyDown:l}=D(c,{focusableElements:[".ams-accordion__button:not([disabled])"],rotating:!0});return e.jsx(L.Provider,{value:{headingLevel:g,sectionAs:u},children:e.jsx("div",{className:S("ams-accordion",h),onKeyDown:l,ref:c,children:o})})});I.displayName="Accordion";const a=Object.assign(I,{Section:N});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:`The hierarchical level of this Accordion’s Section Headings within the document.
There is no default value; determine the correct level for each instance.
The value ‘1’ is deprecated.`,name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"3"},{value:"4"},{value:"2"}]}},sectionAs:{defaultValue:{value:"section"},description:"The HTML element to use for each Accordion Section.",name:"sectionAs",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}}}catch{}const y=_(),b=_(),v=_(),p=A(),f=A(),j=A(),$={title:"Components/Containers/Accordion",component:a,args:{headingLevel:3},argTypes:{headingLevel:{control:"radio",options:[2,3,4]}}},i={args:{children:[e.jsx(a.Section,{label:y,children:e.jsx(n,{children:p})},1),e.jsx(a.Section,{label:b,children:e.jsx(n,{children:f})},2),e.jsx(a.Section,{label:v,children:e.jsx(n,{children:j})},3)]}},t={args:{children:e.jsx(a.Section,{label:"Heading level 4",children:e.jsx(n,{children:p})}),headingLevel:4}},s={args:{children:[e.jsx(a.Section,{label:y,children:e.jsx(n,{children:p})},1),e.jsx(a.Section,{expanded:!0,label:b,children:e.jsx(n,{children:f})},2),e.jsx(a.Section,{label:v,children:e.jsx(n,{children:j})},3)]}},d={args:{children:[e.jsx(a.Section,{label:y,children:e.jsx(n,{children:p})},1),e.jsx(a.Section,{label:b,children:e.jsx(n,{children:f})},2),e.jsx(a.Section,{label:v,children:e.jsx(n,{children:j})},3)],sectionAs:"div"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Accordion.Section label="Heading level 4">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>,
    headingLevel: 4
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section expanded key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const z=["Default","Level","ExpandedByDefault","ReduceLandmarks"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:i,ExpandedByDefault:s,Level:t,ReduceLandmarks:d,__namedExportsOrder:z,default:$},Symbol.toStringTag,{value:"Module"}));export{a as A,s as E,t as L,d as R,G as a,$ as m};
