import{r as o,j as e,c as v,a3 as D,P as n}from"./iframe-My6AE4GV.js";import{j,b}from"./exampleContent-DRope23M.js";import{I as V}from"./Icon-CK61XdRZ.js";import{H as q}from"./Heading-DVxrD13v.js";import{u as O}from"./useKeyboardFocus-BsBpr6qG.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const $={headingLevel:2},C=o.createContext($);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const N=o.forwardRef(({children:r,className:g,expanded:u=!1,label:m,...S},x)=>{const{headingLevel:i,headingSize:d,sectionAs:w}=o.useContext(C),[A,E]=o.useState(u),R=w||"section",H=o.useId(),T=`heading-${d?d.slice(-1):3}`,L=`button-${H}`,k=`panel-${H}`;return e.jsxs("div",{className:v("ams-accordion__section",g),ref:x,...S,children:[e.jsx(q,{level:i,size:d,children:e.jsxs("button",{"aria-controls":k,"aria-expanded":A,className:"ams-accordion__button",id:L,onClick:()=>E(!A),type:"button",children:[e.jsx(V,{className:"ams-accordion__icon",size:T,svg:D}),m]})}),e.jsx(R,{"aria-labelledby":L,className:v("ams-accordion__panel",{"ams-accordion__panel--expanded":A}),id:k,children:r})]})});N.displayName="Accordion.Section";try{Accordion.Section.displayName="Accordion.Section",Accordion.Section.__docgenInfo={description:"",displayName:"Accordion.Section",props:{expanded:{defaultValue:{value:"false"},description:"Whether the content is displayed initially.",name:"expanded",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The heading text.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const I=o.forwardRef(({children:r,className:g,headingLevel:u,headingSize:m="level-3",sectionAs:S="section"},x)=>{const i=o.useRef(null);o.useImperativeHandle(x,()=>i.current);const{keyDown:d}=O(i,{focusableElements:[".ams-accordion__button:not([disabled])"],rotating:!0});return e.jsx(C.Provider,{value:{headingLevel:u,headingSize:m,sectionAs:S},children:e.jsx("div",{className:v("ams-accordion",g),onKeyDown:d,ref:i,children:r})})});I.displayName="Accordion";const a=Object.assign(I,{Section:N});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:`The hierarchical level of this Accordion’s Section Headings within the document.
There is no default value; determine the correct level for each instance.
The value ‘1’ is deprecated.`,name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"3"},{value:"4"},{value:"2"}]}},headingSize:{defaultValue:{value:"level-3"},description:"Uses larger or smaller text without changing its position in the heading hierarchy.",name:"headingSize",required:!1,type:{name:"enum",value:[{value:'"level-2"'},{value:'"level-3"'},{value:'"level-4"'},{value:'"level-5"'}]}},sectionAs:{defaultValue:{value:"section"},description:"The HTML element to use for each Accordion Section.",name:"sectionAs",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}}}catch{}const _=j(),y=j(),f=j(),c=b(),P=b(),z=b(),F={title:"Components/Containers/Accordion",component:a,args:{headingLevel:3}},l={args:{children:[e.jsx(a.Section,{label:_,children:e.jsx(n,{children:c})},1),e.jsx(a.Section,{label:y,children:e.jsx(n,{children:P})},2),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:z})},3)]}},s={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(a,{...r,headingLevel:2,children:e.jsx(a.Section,{label:"Heading level 2",children:e.jsx(n,{children:c})})}),e.jsx(a,{...r,headingLevel:3,children:e.jsx(a.Section,{label:"Heading level 3",children:e.jsx(n,{children:c})})}),e.jsx(a,{...r,headingLevel:4,children:e.jsx(a.Section,{label:"Heading level 4",children:e.jsx(n,{children:c})})})]})},t={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(a,{...r,headingSize:"level-2",children:e.jsx(a.Section,{label:"Heading size 2",children:e.jsx(n,{children:c})})}),e.jsx(a,{...r,headingSize:"level-3",children:e.jsx(a.Section,{label:"Heading size 3",children:e.jsx(n,{children:c})})}),e.jsx(a,{...r,headingSize:"level-4",children:e.jsx(a.Section,{label:"Heading size 4",children:e.jsx(n,{children:c})})}),e.jsx(a,{...r,headingSize:"level-5",children:e.jsx(a.Section,{label:"Heading size 5",children:e.jsx(n,{children:c})})})]})},h={args:{children:[e.jsx(a.Section,{label:_,children:e.jsx(n,{children:c})},1),e.jsx(a.Section,{expanded:!0,label:y,children:e.jsx(n,{children:P})},2),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:z})},3)]}},p={args:{children:[e.jsx(a.Section,{label:_,children:e.jsx(n,{children:c})},1),e.jsx(a.Section,{label:y,children:e.jsx(n,{children:P})},2),e.jsx(a.Section,{label:f,children:e.jsx(n,{children:z})},3)],sectionAs:"div"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Accordion {...args} headingLevel={2}>
        <Accordion.Section label="Heading level 2">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
      <Accordion {...args} headingLevel={3}>
        <Accordion.Section label="Heading level 3">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
      <Accordion {...args} headingLevel={4}>
        <Accordion.Section label="Heading level 4">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
    </>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Accordion {...args} headingSize="level-2">
        <Accordion.Section label="Heading size 2">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
      <Accordion {...args} headingSize="level-3">
        <Accordion.Section label="Heading size 3">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
      <Accordion {...args} headingSize="level-4">
        <Accordion.Section label="Heading size 4">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
      <Accordion {...args} headingSize="level-5">
        <Accordion.Section label="Heading size 5">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
    </>
}`,...t.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section expanded key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const B=["Default","Levels","Sizes","ExpandedByDefault","ReduceLandmarks"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:l,ExpandedByDefault:h,Levels:s,ReduceLandmarks:p,Sizes:t,__namedExportsOrder:B,default:F},Symbol.toStringTag,{value:"Module"}));export{J as A,h as E,s as L,p as R,t as S};
