import{j as e}from"./jsx-runtime-ffb262ed.js";/* empty css                  */import{I as T}from"./Icon-65b888a8.js";import{c as w}from"./clsx-1229b3e0.js";import{r as d}from"./index-76fb7be0.js";import{e as I}from"./index.esm-63fc0a45.js";import{g as R}from"./Heading-de553b97.js";import{P as s}from"./Paragraph-89479e9a.js";const H={headingLevel:1,section:!0},C=d.createContext(H),L=C,A=d.forwardRef(({label:i,expanded:p=!1,children:l,className:g,...y},m)=>{const{headingLevel:a,section:j}=d.useContext(L),[t,r]=d.useState(p),h=R(a),n=d.useId(),u=`button-${n}`,_=`panel-${n}`;return e.jsxs("div",{className:w("amsterdam-accordion__section",g),ref:m,...y,children:[e.jsx(h,{className:"amsterdam-accordion__header",children:e.jsxs("button",{"aria-controls":_,"aria-expanded":t,className:"amsterdam-accordion__button",id:u,onClick:()=>r(!t),type:"button",children:[i,e.jsx(T,{svg:I,size:"level-5"})]})}),j?e.jsx("section",{id:_,"aria-labelledby":u,className:w("amsterdam-accordion__panel",{"amsterdam-accordion__panel--expanded":t}),children:l}):e.jsx("div",{id:_,"aria-labelledby":u,className:w("amsterdam-accordion__panel",{"amsterdam-accordion__panel--expanded":t}),children:l})]})});A.displayName="AccordionSection";try{A.displayName="AccordionSection",A.__docgenInfo={description:"",displayName:"AccordionSection",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},expanded:{defaultValue:{value:"false"},description:"",name:"expanded",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const c={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowRight:"ArrowRight",ArrowLeft:"ArrowLeft",Home:"Home",End:"End"},k=(i,p=!1,l=!1)=>{const g=l?c.ArrowRight:c.ArrowDown,y=l?c.ArrowLeft:c.ArrowUp;return{keyDown:a=>{if(i.current){const j=i.current,{activeElement:t}=window.document,r=Array.from(j.querySelectorAll(".amsterdam-accordion__button")),h=u=>u&&r.includes(u)?r.indexOf(u):0;let n;switch(a.key){case g:{h(t)!==r.length-1?(n=r[h(t)+1],t&&!r.includes(t)&&(n=r[0])):p&&(n=r[0]);break}case y:{h(t)!==0?n=r[h(t)-1]:p&&(n=r[r.length-1]);break}case c.Home:{n=r[0];break}case c.End:{n=r[r.length-1];break}}(a.key===c.ArrowDown||a.key===c.ArrowUp||a.key===c.ArrowLeft||a.key===c.ArrowRight||a.key===c.Home||a.key===c.End)&&n instanceof HTMLElement&&(n.focus(),a.preventDefault())}}}},F=k;try{k.displayName="useFocusWithArrows",k.__docgenInfo={description:"Focus on children with arrow keys and home / end buttons.",displayName:"useFocusWithArrows",props:{}}}catch{}const o=d.forwardRef(({children:i,className:p,headingLevel:l,section:g=!0},y)=>{const m=d.useRef(null);d.useImperativeHandle(y,()=>m.current);const{keyDown:a}=F(m,!0);return e.jsx(L.Provider,{value:{headingLevel:l,section:g},children:e.jsx("div",{className:w("amsterdam-accordion",p),onKeyDown:a,ref:m,children:i})})});o.displayName="Accordion";o.Section=A;o.Section.displayName="Accordion.Section";try{o.displayName="Accordion",o.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:"",name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},section:{defaultValue:null,description:"",name:"section",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Accordion",component:o,args:{headingLevel:1},argTypes:{children:{table:{disable:!0}},headingLevel:{control:{type:"select"},options:[1,2,3,4]},section:{control:{type:"boolean"}}}},f={args:{children:[e.jsx(o.Section,{label:"Eerste sectie",children:e.jsx(s,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},1),e.jsx(o.Section,{label:"Tweede sectie",children:e.jsx(s,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},2),e.jsx(o.Section,{label:"Derde sectie",children:e.jsx(s,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},3)]}},x={args:{children:[e.jsx(o.Section,{label:"Eerste sectie",children:e.jsx(s,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},1),e.jsx(o.Section,{label:"Tweede sectie",expanded:!0,children:e.jsx(s,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},2),e.jsx(o.Section,{label:"Derde sectie",children:e.jsx(s,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},3)]}},b={args:{section:!1,children:[e.jsx(o.Section,{label:"Eerste sectie",children:e.jsx(s,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},1),e.jsx(o.Section,{label:"Tweede sectie",children:e.jsx(s,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},2),e.jsx(o.Section,{label:"Derde sectie",children:e.jsx(s,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},3)]}};var v,S,q;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>]
  }
}`,...(q=(S=f.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var E,P,D;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie" expanded>
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>]
  }
}`,...(D=(P=x.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var z,J,N;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    section: false,
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>]
  }
}`,...(N=(J=b.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};const M=["Default","ExpandedByDefault","TooManyLandmarks"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:f,ExpandedByDefault:x,TooManyLandmarks:b,__namedExportsOrder:M,default:V},Symbol.toStringTag,{value:"Module"}));export{Q as A,x as E,b as T};
//# sourceMappingURL=Accordion.stories-2b8a27ff.js.map
