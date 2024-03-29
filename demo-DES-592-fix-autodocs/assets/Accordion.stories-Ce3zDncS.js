import{j as e}from"./jsx-runtime-CKrituN3.js";import{a9 as U,P as c}from"./index.esm-6x9pi5Wx.js";import{c as S}from"./clsx-B-dksMZM.js";import{r as d}from"./index-CBqU2yxZ.js";import{g as K}from"./Heading-BvXjPwC0.js";import{I as z}from"./Icon-D7XRVDhl.js";import{c as k}from"./exampleContent-Ban077Ng.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const B={headingLevel:1,section:!0},V=d.createContext(B),M=V,v=d.forwardRef(({label:h,expanded:m=!1,children:l,className:g,...u},p)=>{const{headingLevel:f,section:T}=d.useContext(M),[a,w]=d.useState(m),s=K(f),x=d.useId(),r=`button-${x}`,i=`panel-${x}`;return e.jsxs("div",{className:S("ams-accordion__section",g),ref:p,...u,children:[e.jsx(s,{className:"ams-accordion__header",children:e.jsxs("button",{"aria-controls":i,"aria-expanded":a,className:"ams-accordion__button",id:r,onClick:()=>w(!a),type:"button",children:[h,e.jsx(z,{svg:U,size:"level-5"})]})}),T?e.jsx("section",{id:i,"aria-labelledby":r,className:S("ams-accordion__panel",{"ams-accordion__panel--expanded":a}),children:l}):e.jsx("div",{id:i,"aria-labelledby":r,className:S("ams-accordion__panel",{"ams-accordion__panel--expanded":a}),children:l})]})});v.displayName="Accordion.Section";v.__docgenInfo={description:"",methods:[],displayName:"Accordion.Section",props:{label:{required:!0,tsType:{name:"string"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const n={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowRight:"ArrowRight",ArrowLeft:"ArrowLeft",Home:"Home",End:"End"},F=["a[href]:not([disabled])","button:not([disabled])","textarea:not([disabled])",'input[type="text"]:not([disabled])','input[type="radio"]:not([disabled])','input[type="checkbox"]:not([disabled])',"select:not([disabled])"],X=(h,m)=>{const{rotating:l=!1,directChildrenOnly:g=!1,horizontally:u=!1}=m,p=u?n.ArrowRight:n.ArrowDown,f=u?n.ArrowLeft:n.ArrowUp;return{keyDown:a=>{if(h.current){const w=h.current,{activeElement:s}=window.document,x=g?":scope > ":"",r=Array.from(w.querySelectorAll(`${x}${F.join(`, ${x}`)}`)),i=j=>j&&r.includes(j)?r.indexOf(j):0;let t;switch(a.key){case p:{i(s)!==r.length-1?(t=r[i(s)+1],s&&!r.includes(s)&&(t=r[0])):l&&(t=r[0]);break}case f:{i(s)!==0?t=r[i(s)-1]:l&&(t=r[r.length-1]);break}case n.Home:{t=r[0];break}case n.End:{t=r[r.length-1];break}}(a.key===n.ArrowDown||a.key===n.ArrowUp||a.key===n.ArrowLeft||a.key===n.ArrowRight||a.key===n.Home||a.key===n.End)&&t instanceof HTMLElement&&(t.focus(),a.preventDefault())}}}},E=d.forwardRef(({children:h,className:m,headingLevel:l,section:g=!0},u)=>{const p=d.useRef(null);d.useImperativeHandle(u,()=>p.current);const{keyDown:f}=X(p,{rotating:!0});return e.jsx(M.Provider,{value:{headingLevel:l,section:g},children:e.jsx("div",{className:S("ams-accordion",m),onKeyDown:f,ref:p,children:h})})});E.displayName="Accordion";const o=Object.assign(E,{Section:v});E.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{headingLevel:{required:!0,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:`The hierarchical level of the accordion title within the document.
@default 2`},section:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const _=k(),P=k(),D=k(),G={title:"Components/Containers/Accordion",component:o,args:{headingLevel:1},argTypes:{headingLevel:{control:{type:"radio"},options:[1,2,3,4]},section:{control:{type:"boolean"}}}},b={args:{children:[e.jsx(o.Section,{label:"Eerste sectie",children:e.jsx(c,{children:_})},1),e.jsx(o.Section,{label:"Tweede sectie",children:e.jsx(c,{children:P})},2),e.jsx(o.Section,{label:"Derde sectie",children:e.jsx(c,{children:D})},3)]}},y={args:{children:[e.jsx(o.Section,{label:"Eerste sectie",children:e.jsx(c,{children:_})},1),e.jsx(o.Section,{label:"Tweede sectie",expanded:!0,children:e.jsx(c,{children:P})},2),e.jsx(o.Section,{label:"Derde sectie",children:e.jsx(c,{children:D})},3)]}},A={args:{section:!1,children:[e.jsx(o.Section,{label:"Eerste sectie",children:e.jsx(c,{children:_})},1),e.jsx(o.Section,{label:"Tweede sectie",children:e.jsx(c,{children:P})},2),e.jsx(o.Section,{label:"Derde sectie",children:e.jsx(c,{children:D})},3)]}};var L,C,N;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(N=(C=b.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var I,R,H;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie" expanded>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...(H=(R=y.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var O,$,q;A.parameters={...A.parameters,docs:{...(O=A.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=($=A.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const J=["Default","ExpandedByDefault","TooManyLandmarks"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:b,ExpandedByDefault:y,TooManyLandmarks:A,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{ne as A,y as E,A as T};
