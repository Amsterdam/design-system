import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as g}from"./exampleContent-DcLVbCjv.js";import{c as T}from"./clsx-B-dksMZM.js";import{r as s}from"./index-CBqU2yxZ.js";import{u as H}from"./useKeyboardFocus-CRUFsA_C.js";import{H as m}from"./Heading-NgU1dxwu.js";import{P as u}from"./Paragraph-Im3SnT_h.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const R={activeTab:0,updateTab:()=>{},tabsId:""},h=s.createContext(R),j=s.forwardRef(({children:a,className:t,tab:r=0,...o},c)=>{const{activeTab:l,updateTab:i,tabsId:d}=s.useContext(h);return e.jsx("button",{...o,role:"tab",id:`${d}-tab-${r}`,"aria-controls":`${d}-panel-${r}`,"aria-selected":l===r,tabIndex:l===r?0:-1,ref:c,onClick:()=>{s.startTransition(()=>{i(r)})},className:T("ams-tabs__button",t),children:a})});j.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:{value:"0"},description:"",name:"tab",required:!1,type:{name:"number"}}}}}catch{}const B=s.forwardRef(({children:a,className:t,...r},o)=>e.jsx("div",{...r,role:"tablist",ref:o,className:T("ams-tabs__list",t),children:a}));B.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const N=s.forwardRef(({tab:a,children:t,className:r,...o},c)=>{const{activeTab:l,tabsId:i}=s.useContext(h);return a!==l?null:e.jsx("div",{...o,role:"tabpanel","aria-labelledby":`${i}-tab-${a}`,id:`${i}-panel-${a}`,tabIndex:0,ref:c,className:T("ams-tabs__panel",r),children:t})});N.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"",name:"tab",required:!0,type:{name:"number"}}}}}catch{}const I=s.forwardRef(({children:a,className:t,...r},o)=>{const c=s.useId(),[l,i]=s.useState(0),d=s.useRef(null),L=w=>{i(w)};s.useImperativeHandle(o,()=>d.current);const{keyDown:A}=H(d,{rotating:!0,horizontally:!0});return e.jsx(h.Provider,{value:{activeTab:l,updateTab:L,tabsId:c},children:e.jsx("div",{...r,role:"tabs",ref:d,onKeyDown:A,className:T("ams-tabs",t),children:a})})});I.displayName="Tabs";const n=Object.assign(I,{Button:j,List:B,Panel:N});try{n.displayName="Tabs",n.__docgenInfo={description:"",displayName:"Tabs",props:{}}}catch{}const S=({children:a})=>{console.log("[ARTIFICIALLY SLOW] Adding a 1000ms delay");let t=performance.now();for(;performance.now()-t<1e3;);return a},$={title:"Components/Containers/Tabs",component:n};n.Button;const b={args:{children:[e.jsxs(n.List,{children:[e.jsx(n.Button,{tab:0,children:"Gegevens"}),e.jsx(n.Button,{tab:1,children:"Aanslagen"}),e.jsx(n.Button,{tab:2,children:"Documenten"}),e.jsx(n.Button,{tab:3,children:"Acties"})]},0),e.jsx(n.Panel,{tab:0,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(m,{level:3,children:"Gegevens"}),e.jsx(u,{children:g()})]})},1),e.jsx(n.Panel,{tab:1,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(m,{level:3,children:"Aanslagen"}),e.jsx(u,{children:g()})]})},2),e.jsx(n.Panel,{tab:2,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(m,{level:3,children:"Documenten"}),e.jsx(u,{children:"(This tab panel simulates a load time of 500 milliseconds.)"}),e.jsx(S,{})]})},3),e.jsx(n.Panel,{tab:3,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(m,{level:3,children:"Acties"}),e.jsx(u,{children:g()})]})},4)]}},p={args:{children:"Gegevens",tab:0,disabled:!1},argTypes:{children:{table:{disable:!1}},tab:{control:{type:"number",min:0,max:9}}},render:({children:a,...t})=>e.jsx(n.Button,{...t,children:a})};var x,y,_;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: [<Tabs.List key={0}>
        <Tabs.Button tab={0}>Gegevens</Tabs.Button>
        <Tabs.Button tab={1}>Aanslagen</Tabs.Button>
        <Tabs.Button tab={2}>Documenten</Tabs.Button>
        <Tabs.Button tab={3}>Acties</Tabs.Button>
      </Tabs.List>, <Tabs.Panel tab={0} key={1}>
        <div style={{
        paddingTop: '2rem'
      }}>
          <Heading level={3}>Gegevens</Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </div>
      </Tabs.Panel>, <Tabs.Panel tab={1} key={2}>
        <div style={{
        paddingTop: '2rem'
      }}>
          <Heading level={3}>Aanslagen</Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </div>
      </Tabs.Panel>, <Tabs.Panel tab={2} key={3}>
        <div style={{
        paddingTop: '2rem'
      }}>
          <Heading level={3}>Documenten</Heading>
          <Paragraph>(This tab panel simulates a load time of 500 milliseconds.)</Paragraph>
          <SlowPanel />
        </div>
      </Tabs.Panel>, <Tabs.Panel tab={3} key={4}>
        <div style={{
        paddingTop: '2rem'
      }}>
          <Heading level={3}>Acties</Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </div>
      </Tabs.Panel>]
  }
}`,...(_=(y=b.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var f,v,P;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Gegevens',
    tab: 0,
    disabled: false
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    tab: {
      control: {
        type: 'number',
        min: 0,
        max: 9
      }
    }
  },
  render: ({
    children,
    ...args
  }) => <Tabs.Button {...args}>{children}</Tabs.Button>
}`,...(P=(v=p.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const C=["Default","Tab"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:b,Tab:p,__namedExportsOrder:C,default:$},Symbol.toStringTag,{value:"Module"}));export{z as T,p as a};
