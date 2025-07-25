import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as n}from"./index.esm-DDzNsyt1.js";import{h as x,b as S}from"./exampleContent-B9pMnolB.js";import{c as u}from"./clsx-B-dksMZM.js";import{r as o}from"./index-G8LIXM5I.js";import{y as L}from"./index.esm-D3RaMjqb.js";import{g as D}from"./getHeadingTag-C4Rztoc8.js";import{I as H}from"./Icon-Pril9caF.js";import{u as V}from"./useKeyboardFocus-BsBpr6qG.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const q={headingLevel:null,sectionAs:"section"},k=o.createContext(q);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const C=o.forwardRef(({children:r,className:d,expanded:l=!1,label:p,...h},c)=>{const{headingLevel:g,sectionAs:E}=o.useContext(k),[m,R]=o.useState(l),T=D(g),w=E||"section",v=o.useId(),P=`button-${v}`,N=`panel-${v}`;return e.jsxs("div",{className:u("ams-accordion__section",d),ref:c,...h,children:[e.jsx(T,{className:"ams-accordion__header",children:e.jsxs("button",{"aria-controls":N,"aria-expanded":m,className:"ams-accordion__button",id:P,onClick:()=>R(!m),type:"button",children:[e.jsx(H,{className:"ams-accordion__icon",size:"heading-4",svg:L}),p]})}),e.jsx(w,{"aria-labelledby":P,className:u("ams-accordion__panel",{"ams-accordion__panel--expanded":m}),id:N,children:r})]})});C.displayName="Accordion.Section";try{Accordion.Section.displayName="Accordion.Section",Accordion.Section.__docgenInfo={description:"",displayName:"Accordion.Section",props:{expanded:{defaultValue:{value:"false"},description:"Whether the content is displayed initially.",name:"expanded",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The heading text.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const I=o.forwardRef(({children:r,className:d,headingLevel:l,sectionAs:p="section"},h)=>{const c=o.useRef(null);o.useImperativeHandle(h,()=>c.current);const{keyDown:g}=V(c,{focusableElements:[".ams-accordion__button:not([disabled])"],rotating:!0});return e.jsx(k.Provider,{value:{headingLevel:l,sectionAs:p},children:e.jsx("div",{className:u("ams-accordion",d),onKeyDown:g,ref:c,children:r})})});I.displayName="Accordion";const a=Object.assign(I,{Section:C});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:`The hierarchical level of this Accordion’s Section Headings within the document.
There is no default value; determine the correct level for each instance.
Note: this intentionally does not change the font size.`,name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"3"},{value:"4"},{value:"2"}]}},sectionAs:{defaultValue:{value:"section"},description:"The HTML element to use for each Accordion Section.",name:"sectionAs",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}}}catch{}const _=x(),f=x(),A=x(),y=S(),b=S(),j=S(),O={title:"Components/Containers/Accordion",component:a,args:{headingLevel:3}},i={args:{children:[e.jsx(a.Section,{label:_,children:e.jsx(n,{children:y})},1),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:b})},2),e.jsx(a.Section,{label:A,children:e.jsx(n,{children:j})},3)]}},t={args:{children:[e.jsx(a.Section,{label:_,children:e.jsx(n,{children:y})},1),e.jsx(a.Section,{expanded:!0,label:f,children:e.jsx(n,{children:b})},2),e.jsx(a.Section,{label:A,children:e.jsx(n,{children:j})},3)]}},s={args:{children:[e.jsx(a.Section,{label:_,children:e.jsx(n,{children:y})},1),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:b})},2),e.jsx(a.Section,{label:A,children:e.jsx(n,{children:j})},3)],sectionAs:"div"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section expanded key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const z=["Default","ExpandedByDefault","ReduceLandmarks"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:i,ExpandedByDefault:t,ReduceLandmarks:s,__namedExportsOrder:z,default:O},Symbol.toStringTag,{value:"Module"}));export{U as A,t as E,s as R};
