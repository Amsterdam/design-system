import{j as e}from"./iframe-B-c3jkFP.js";import{m as l,S as t}from"./SearchField.stories-54T5gT6T.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DbptsAw0.js";import"./Icon-DcIGz3I9.js";const{expect:o,fn:d}=__STORYBOOK_MODULE_TEST__,x={...l,title:"Components/Forms/Search Field"},c=d(),s={args:{onSubmit:a=>{a.preventDefault();const n=a.target.querySelector('input[type="search"]')?.value;c(n)}},play:async({canvas:a,userEvent:r})=>{await r.type(a.getByTestId("searchbox"),"Amsterdam"),await r.click(a.getByTestId("button")),o(c).toHaveBeenCalledWith("Amsterdam")},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--ams-space-s)"},children:[e.jsxs(t,{...a,children:[e.jsx(t.Input,{"data-testid":"searchbox",placeholder:"Waar ben je naar opzoek?"}),e.jsx(t.Button,{"data-testid":"button",onClick:c})]}),e.jsxs(t,{...a,children:[e.jsx(t.Input,{}),e.jsx(t.Button,{})]}),e.jsxs(t,{children:[e.jsx(t.Input,{invalid:!0}),e.jsx(t.Button,{})]}),e.jsxs(t,{children:[e.jsx(t.Input,{className:"hover",invalid:!0}),e.jsx(t.Button,{className:"hover"})]}),e.jsxs(t,{...a,children:[e.jsx(t.Input,{className:"hover"}),e.jsx(t.Button,{className:"hover"})]}),e.jsxs(t,{...a,children:[e.jsx(t.Input,{disabled:!0}),e.jsx(t.Button,{disabled:!0})]})]}),tags:["!dev","!autodocs"]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: event => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const searchInput = form.querySelector('input[type="search"]') as HTMLInputElement;
      const searchValue = searchInput?.value;
      testFn(searchValue);
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByTestId('searchbox'), 'Amsterdam');
    await userEvent.click(canvas.getByTestId('button'));
    expect(testFn).toHaveBeenCalledWith('Amsterdam');
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--ams-space-s)'
  }}>
      <SearchField {...args}>
        <SearchField.Input data-testid="searchbox" placeholder="Waar ben je naar opzoek?" />
        <SearchField.Button data-testid="button" onClick={testFn} />
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
}`,...s.parameters?.docs?.source}}};const F=["Test"];export{s as Test,F as __namedExportsOrder,x as default};
