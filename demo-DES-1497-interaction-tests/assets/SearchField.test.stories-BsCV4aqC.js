import{j as e}from"./iframe-D1_3ryCH.js";import{m as l,S as a}from"./SearchField.stories-CHhSoFiC.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CLKcx4ER.js";import"./Icon-D2X8MQVb.js";const{expect:c,fn:i}=__STORYBOOK_MODULE_TEST__,m={...l,title:"Components/Forms/Search Field"},d=i(),s={play:async({canvas:t,userEvent:r})=>{await r.type(t.getByRole("searchbox"),"Amsterdam"),await r.click(t.getByRole("button")),c(d).toHaveBeenCalledWith("Amsterdam")},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ams-space-s)"},children:[e.jsxs(a,{...t,children:[e.jsx(a.Input,{placeholder:"Waar ben je naar opzoek?"}),e.jsx(a.Button,{})]}),e.jsxs(a,{...t,children:[e.jsx(a.Input,{}),e.jsx(a.Button,{})]}),e.jsxs(a,{children:[e.jsx(a.Input,{invalid:!0}),e.jsx(a.Button,{})]}),e.jsxs(a,{children:[e.jsx(a.Input,{className:"hover",invalid:!0}),e.jsx(a.Button,{className:"hover"})]}),e.jsxs(a,{...t,children:[e.jsx(a.Input,{className:"hover"}),e.jsx(a.Button,{className:"hover"})]}),e.jsxs(a,{...t,children:[e.jsx(a.Input,{disabled:!0}),e.jsx(a.Button,{disabled:!0})]})]}),tags:["!dev","!autodocs"]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByRole('searchbox'), 'Amsterdam');
    await userEvent.click(canvas.getByRole('button'));
    expect(testFn).toHaveBeenCalledWith('Amsterdam');
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--ams-space-s)'
  }}>
      <SearchField {...args}>
        <SearchField.Input placeholder="Waar ben je naar opzoek?" />
        <SearchField.Button />
      </SearchField>
      <SearchField {...args}>
        <SearchField.Input />
        <SearchField.Button />
      </SearchField>
      <SearchField>
        <SearchField.Input invalid />
        <SearchField.Button />
      </SearchField>
      <SearchField>
        <SearchField.Input className="hover" invalid />
        <SearchField.Button className="hover" />
      </SearchField>
      <SearchField {...args}>
        <SearchField.Input className="hover" />
        <SearchField.Button className="hover" />
      </SearchField>
      <SearchField {...args}>
        <SearchField.Input disabled />
        <SearchField.Button disabled />
      </SearchField>
    </div>,
  tags: ['!dev', '!autodocs']
}`,...s.parameters?.docs?.source}}};const x=["Test"];export{s as Test,x as __namedExportsOrder,m as default};
