import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./SearchField-C6b6W-wo.js";import{a as i,o as a}from"./SearchField.stories-BFtqK2sr.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o=t(),{expect:s,fn:c}=__STORYBOOK_MODULE_TEST__,l={...a,title:`Components/Forms/Search Field`},u=c(),d={args:{onSubmit:e=>{e.preventDefault();let t=e.target.querySelector(`input[type="search"]`)?.value;u(t)}},play:async({canvas:e,userEvent:t})=>{await t.type(e.getByTestId(`searchbox`),`Amsterdam`),await t.click(e.getByTestId(`button`)),s(u).toHaveBeenCalledWith(`Amsterdam`)},render:e=>(0,o.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,o.jsxs)(r,{...e,children:[(0,o.jsx)(r.Input,{"data-testid":`searchbox`,name:`search`,placeholder:`Waar ben je naar opzoek?`}),(0,o.jsx)(r.Button,{"data-testid":`button`})]}),(0,o.jsxs)(r,{...e,children:[(0,o.jsx)(r.Input,{}),(0,o.jsx)(r.Button,{})]}),(0,o.jsxs)(r,{children:[(0,o.jsx)(r.Input,{invalid:!0}),(0,o.jsx)(r.Button,{})]}),(0,o.jsxs)(r,{children:[(0,o.jsx)(r.Input,{className:`hover`,invalid:!0}),(0,o.jsx)(r.Button,{className:`hover`})]}),(0,o.jsxs)(r,{...e,children:[(0,o.jsx)(r.Input,{className:`hover`}),(0,o.jsx)(r.Button,{className:`hover`})]}),(0,o.jsxs)(r,{...e,disabled:!0,children:[(0,o.jsx)(r.Input,{}),(0,o.jsx)(r.Button,{})]}),(0,o.jsxs)(r,{...e,disabled:!0,children:[(0,o.jsx)(r.Input,{defaultValue:`Amsterdam`}),(0,o.jsx)(r.Button,{})]})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      <SearchField {...args} disabled>
        <SearchField.Input />
        <SearchField.Button />
      </SearchField>
      <SearchField {...args} disabled>
        <SearchField.Input defaultValue="Amsterdam" />
        <SearchField.Button />
      </SearchField>
    </div>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...d.parameters?.docs?.source}}},f=[`Test`]})))()}p();export{d as Test,f as __namedExportsOrder,l as default};