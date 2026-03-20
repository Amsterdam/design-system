import{r,j as e,F as D,c as A,P as n}from"./iframe-BITc4ej6.js";import{k as v,c as b}from"./exampleContent-D2tKGi5u.js";import{u as w}from"./useKeyboardFocus-CO72QOjh.js";import{I as V}from"./Icon-DY7a-sEn.js";import{H as q}from"./Heading-Dgy4sOUD.js";const O={headingLevel:2},E=r.createContext(O),I=r.forwardRef(({children:c,className:p,expanded:h=!1,label:g,...u},m)=>{const{headingLevel:o,sectionAs:S}=r.useContext(E),[x,T]=r.useState(h),H=S||"section",k=r.useId(),C=`heading-${o}`,L=`button-${k}`,N=`panel-${k}`;return e.jsxs("div",{className:A("ams-accordion__section",p),ref:m,...u,children:[e.jsx(q,{className:"ams-accordion__header",level:o,children:e.jsxs("button",{"aria-controls":N,"aria-expanded":x,className:"ams-accordion__button",id:L,onClick:()=>T(!x),type:"button",children:[e.jsx(V,{className:"ams-accordion__icon",size:C,svg:D}),g]})}),e.jsx(H,{"aria-labelledby":L,className:A("ams-accordion__panel",{"ams-accordion__panel--expanded":x}),id:N,children:c})]})});I.displayName="Accordion.Section";try{Accordion.Section.displayName="Accordion.Section",Accordion.Section.__docgenInfo={description:"",displayName:"Accordion.Section",props:{expanded:{defaultValue:{value:"false"},description:"Whether the content is displayed initially.",name:"expanded",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The heading text.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const R=r.forwardRef(({children:c,className:p,headingLevel:h,sectionAs:g="section",...u},m)=>{const o=r.useRef(null);r.useImperativeHandle(m,()=>o.current);const{keyDown:S}=w(o,{focusableElements:[".ams-accordion__button:not([disabled])"],rotating:!0});return e.jsx(E.Provider,{value:{headingLevel:h,sectionAs:g},children:e.jsx("div",{...u,className:A("ams-accordion",p),onKeyDown:S,ref:o,children:c})})});R.displayName="Accordion";const a=Object.assign(R,{Section:I});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:`The hierarchical level of this Accordion’s Section Headings within the document.
There is no default value; determine the correct level for each instance.
The value ‘1’ is deprecated.`,name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},sectionAs:{defaultValue:{value:"section"},description:"The HTML element to use for each Accordion Section.",name:"sectionAs",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}}}catch{}const _=v(),f=v(),y=v(),l=b(),j=b(),P=b(),$={title:"Components/Containers/Accordion",component:a,args:{headingLevel:3},argTypes:{headingLevel:{control:"radio",options:[2,3,4]}}},i={args:{children:[e.jsx(a.Section,{label:_,children:e.jsx(n,{children:l})},1),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:j})},2),e.jsx(a.Section,{label:y,children:e.jsx(n,{children:P})},3)]}},s={args:{children:e.jsx(a.Section,{label:"Heading level 4",children:e.jsx(n,{children:l})}),headingLevel:4}},t={args:{children:[e.jsx(a.Section,{label:_,children:e.jsx(n,{children:l})},1),e.jsx(a.Section,{expanded:!0,label:f,children:e.jsx(n,{children:j})},2),e.jsx(a.Section,{label:y,children:e.jsx(n,{children:P})},3)]}},d={args:{children:[e.jsx(a.Section,{label:_,children:e.jsx(n,{children:l})},1),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:j})},2),e.jsx(a.Section,{label:y,children:e.jsx(n,{children:P})},3)],sectionAs:"div"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Accordion.Section label="Heading level 4">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>,
    headingLevel: 4
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section expanded key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const z=["Default","Level","ExpandedByDefault","ReduceLandmarks"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:i,ExpandedByDefault:t,Level:s,ReduceLandmarks:d,__namedExportsOrder:z,default:$},Symbol.toStringTag,{value:"Module"}));export{a as A,t as E,s as L,d as R,G as a,$ as m};
