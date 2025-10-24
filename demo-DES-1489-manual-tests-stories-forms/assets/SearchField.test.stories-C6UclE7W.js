import{j as e}from"./iframe-Dm88qyNj.js";import{m as o,S as a}from"./SearchField.stories-DWOmUYFU.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CAHDspmN.js";import"./Icon-Bd5ySlQT.js";const h={...o,title:"Components/Forms/Search Field"},s="Zoeken",t="Wat kunnen we voor u vinden?",l={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ams-space-s)"},children:[e.jsxs(a,{...r,children:[e.jsx(a.Input,{label:s,placeholder:t}),e.jsx(a.Button,{})]}),e.jsxs(a,{...r,children:[e.jsx(a.Input,{className:"hover",label:s,placeholder:t}),e.jsx(a.Button,{})]}),e.jsxs(a,{invalid:!0,...r,children:[e.jsx(a.Input,{invalid:!0,label:s,placeholder:t}),e.jsx(a.Button,{})]})]}),tags:["!dev","!autodocs"]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--ams-space-s)'
  }}>
      <SearchField {...args}>
        <SearchField.Input label={label} placeholder={placeholder} />
        <SearchField.Button />
      </SearchField>
      <SearchField {...args}>
        <SearchField.Input className="hover" label={label} placeholder={placeholder} />
        <SearchField.Button />
      </SearchField>
      <SearchField invalid {...args}>
        <SearchField.Input invalid label={label} placeholder={placeholder} />
        <SearchField.Button />
      </SearchField>
    </div>,
  tags: ['!dev', '!autodocs']
}`,...l.parameters?.docs?.source}}};const u=["Test"];export{l as Test,u as __namedExportsOrder,h as default};
