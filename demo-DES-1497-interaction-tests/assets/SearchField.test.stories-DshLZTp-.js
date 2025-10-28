import{m as o}from"./SearchField.stories-DV79ZKWC.js";import"./iframe-Dw88OR9M.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-MCvNz10h.js";import"./Icon-BZYXeehT.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const{expect:n,fn:c}=__STORYBOOK_MODULE_TEST__,h={...o,title:"Components/Forms/Search Field"},s=c(),t={args:{onSubmit:e=>{e.preventDefault();const r=e.target.querySelector('input[type="search"]')?.value;s(r)}},play:async({canvas:e,userEvent:a})=>{await a.type(e.getByRole("searchbox"),"Amsterdam"),await a.click(e.getByRole("button")),n(s).toHaveBeenCalledWith("Amsterdam")},tags:["!dev","!autodocs"]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: event => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const searchInput = form.querySelector('input[type="search"]') as HTMLInputElement;
      const searchValue = searchInput?.value;
      testFunction(searchValue);
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByRole('searchbox'), 'Amsterdam');
    await userEvent.click(canvas.getByRole('button'));
    expect(testFunction).toHaveBeenCalledWith('Amsterdam');
  },
  tags: ['!dev', '!autodocs']
}`,...t.parameters?.docs?.source}}};const v=["Test"];export{t as Test,v as __namedExportsOrder,h as default};
