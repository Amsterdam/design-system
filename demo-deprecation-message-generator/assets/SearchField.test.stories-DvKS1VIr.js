import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{k as n,t as r}from"./src-BhkAA4SA.js";import i,{n as a}from"./SearchField.stories-BhscBha0.js";var o,s,c,l,u,d,f;e((()=>{r(),a(),o=t(),{expect:s,fn:c}=__STORYBOOK_MODULE_TEST__,l={...i,title:`Components/Forms/Search Field`},u=c(),d={args:{onSubmit:e=>{e.preventDefault();let t=e.target.querySelector(`input[type="search"]`)?.value;u(t)}},play:async({canvas:e,userEvent:t})=>{await t.type(e.getByTestId(`searchbox`),`Amsterdam`),await t.click(e.getByTestId(`button`)),s(u).toHaveBeenCalledWith(`Amsterdam`)},render:e=>(0,o.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,o.jsxs)(n,{...e,children:[(0,o.jsx)(n.Input,{"data-testid":`searchbox`,name:`search`,placeholder:`Waar ben je naar opzoek?`}),(0,o.jsx)(n.Button,{"data-testid":`button`})]}),(0,o.jsxs)(n,{...e,children:[(0,o.jsx)(n.Input,{}),(0,o.jsx)(n.Button,{})]}),(0,o.jsxs)(n,{children:[(0,o.jsx)(n.Input,{invalid:!0}),(0,o.jsx)(n.Button,{})]}),(0,o.jsxs)(n,{children:[(0,o.jsx)(n.Input,{className:`hover`,invalid:!0}),(0,o.jsx)(n.Button,{className:`hover`})]}),(0,o.jsxs)(n,{...e,children:[(0,o.jsx)(n.Input,{className:`hover`}),(0,o.jsx)(n.Button,{className:`hover`})]}),(0,o.jsxs)(n,{...e,children:[(0,o.jsx)(n.Input,{disabled:!0}),(0,o.jsx)(n.Button,{disabled:!0})]})]}),tags:[`!dev`,`!autodocs`]},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  render: args => <div className="_ams-tests-stack">
      <SearchField {...args}>
        <SearchField.Input data-testid="searchbox" name="search" placeholder="Waar ben je naar opzoek?" />
        <SearchField.Button data-testid="button" />
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
}`,...d.parameters?.docs?.source}}},f=[`Test`]}))();export{d as Test,f as __namedExportsOrder,l as default};