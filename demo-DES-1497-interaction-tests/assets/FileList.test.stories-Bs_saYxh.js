import{r as n}from"./renderComponentVariants-BRwNFyvi.js";import{m as s,F as r}from"./FileList.stories-RjKbHpLk.js";import"./iframe-dLGoZOzx.js";import"./preload-helper-PPVm8Dsz.js";import"./ChevronDown-_sQlIss0.js";import"./Icon-sSmztMo8.js";import"./Button-BfsO9txH.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const{expect:o,fn:i}=__STORYBOOK_MODULE_TEST__,g={...s,title:"Components/Forms/File List"},c=i(),e={play:async({canvas:t,userEvent:a})=>{await a.click(t.getByRole("button")),await o(c).toHaveBeenCalled()},render:t=>n(r,{args:t}),tags:["!dev","!autodocs"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button'));
    await expect(testFn).toHaveBeenCalled();
  },
  render: args => renderComponentVariants(FileList, {
    args
  }),
  tags: ['!dev', '!autodocs']
}`,...e.parameters?.docs?.source}}};const F=["Test"];export{e as Test,F as __namedExportsOrder,g as default};
