import{r,j as e,c as x,w as C,P as n}from"./iframe-DFZ1N6nG.js";import{j as A,b}from"./exampleContent-Du2yH2Fl.js";import{u as D}from"./useKeyboardFocus-CO72QOjh.js";import{I as V}from"./Icon-da-RaQcE.js";import{H as q}from"./Heading-BBDSfmPx.js";const O={headingLevel:2},N=r.createContext(O),E=r.forwardRef(({children:o,className:h,expanded:g=!1,label:u,...m},c)=>{const{headingLevel:l,sectionAs:R}=r.useContext(N),[S,T]=r.useState(g),H=R||"section",P=r.useId(),w=`heading-${l}`,L=`button-${P}`,k=`panel-${P}`;return e.jsxs("div",{className:x("ams-accordion__section",h),ref:c,...m,children:[e.jsx(q,{className:"ams-accordion__header",level:l,children:e.jsxs("button",{"aria-controls":k,"aria-expanded":S,className:"ams-accordion__button",id:L,onClick:()=>T(!S),type:"button",children:[e.jsx(V,{className:"ams-accordion__icon",size:w,svg:C}),u]})}),e.jsx(H,{"aria-labelledby":L,className:x("ams-accordion__panel",{"ams-accordion__panel--expanded":S}),id:k,children:o})]})});E.displayName="Accordion.Section";try{Accordion.Section.displayName="Accordion.Section",Accordion.Section.__docgenInfo={description:"",displayName:"Accordion.Section",props:{expanded:{defaultValue:{value:"false"},description:"Whether the content is displayed initially.",name:"expanded",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The heading text.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const I=r.forwardRef(({children:o,className:h,headingLevel:g,sectionAs:u="section"},m)=>{const c=r.useRef(null);r.useImperativeHandle(m,()=>c.current);const{keyDown:l}=D(c,{focusableElements:[".ams-accordion__button:not([disabled])"],rotating:!0});return e.jsx(N.Provider,{value:{headingLevel:g,sectionAs:u},children:e.jsx("div",{className:x("ams-accordion",h),onKeyDown:l,ref:c,children:o})})});I.displayName="Accordion";const a=Object.assign(I,{Section:E});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:`The hierarchical level of this Accordion’s Section Headings within the document.
There is no default value; determine the correct level for each instance.
The value ‘1’ is deprecated.`,name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"3"},{value:"4"},{value:"2"}]}},sectionAs:{defaultValue:{value:"section"},description:"The HTML element to use for each Accordion Section.",name:"sectionAs",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}}}catch{}const v=A(),_=A(),f=A(),p=b(),y=b(),j=b(),$={title:"Components/Containers/Accordion",component:a,args:{headingLevel:3},argTypes:{headingLevel:{control:"radio",options:[2,3,4]}}},i={args:{children:[e.jsx(a.Section,{label:v,children:e.jsx(n,{children:p})},1),e.jsx(a.Section,{label:_,children:e.jsx(n,{children:y})},2),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:j})},3)]}},s={args:{children:e.jsx(a.Section,{label:"Heading level 4",children:e.jsx(n,{children:p})}),headingLevel:4}},t={args:{children:[e.jsx(a.Section,{label:v,children:e.jsx(n,{children:p})},1),e.jsx(a.Section,{expanded:!0,label:_,children:e.jsx(n,{children:y})},2),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:j})},3)]}},d={args:{children:[e.jsx(a.Section,{label:v,children:e.jsx(n,{children:p})},1),e.jsx(a.Section,{label:_,children:e.jsx(n,{children:y})},2),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:j})},3)],sectionAs:"div"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
