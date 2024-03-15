import{j as e}from"./jsx-runtime-CKrituN3.js";import{_ as n,j as t,P as l}from"./index.esm-CLvyEonM.js";import{e as d}from"./exampleContent-CyZEwIqm.js";const h=({children:a})=>{console.log("[ARTIFICIALLY SLOW] Adding a 1000ms delay");let i=performance.now();for(;performance.now()-i<1e3;);return a},T={title:"Components/Containers/Tabs",component:n};n.Button;const s={args:{children:[e.jsxs(n.List,{children:[e.jsx(n.Button,{tab:0,children:"Gegevens"}),e.jsx(n.Button,{tab:1,children:"Aanslagen"}),e.jsx(n.Button,{tab:2,children:"Documenten"}),e.jsx(n.Button,{tab:3,children:"Acties"})]},0),e.jsx(n.Panel,{tab:0,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(t,{level:3,children:"Gegevens"}),e.jsx(l,{children:d()})]})},1),e.jsx(n.Panel,{tab:1,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(t,{level:3,children:"Aanslagen"}),e.jsx(l,{children:d()})]})},2),e.jsx(n.Panel,{tab:2,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(t,{level:3,children:"Documenten"}),e.jsx(l,{children:"(This tab panel simulates a load time of 500 milliseconds.)"}),e.jsx(h,{})]})},3),e.jsx(n.Panel,{tab:3,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(t,{level:3,children:"Acties"}),e.jsx(l,{children:d()})]})},4)]}},r={args:{children:"Gegevens",tab:0,disabled:!1},argTypes:{children:{table:{disable:!1}},tab:{control:{type:"number",min:0,max:9}}},render:({children:a,...i})=>e.jsx(n.Button,{...i,children:a})};var o,c,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var b,g,m;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const u=["Default","Tab"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Tab:r,__namedExportsOrder:u,default:T},Symbol.toStringTag,{value:"Module"}));export{v as T,r as a};
