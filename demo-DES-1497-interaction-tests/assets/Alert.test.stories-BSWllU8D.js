import{r as o}from"./renderComponentVariants-BRwNFyvi.js";import{m as n}from"./Alert.stories-B7CJXPvZ.js";import{A as s}from"./Alert-n8Eg5OIM.js";import"./iframe-dLGoZOzx.js";import"./preload-helper-PPVm8Dsz.js";import"./ChevronDown-_sQlIss0.js";import"./Icon-sSmztMo8.js";import"./Row-DYLhvKBd.js";import"./Heading-BnSpMyv3.js";import"./IconButton-CBe45F__.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const{expect:m}=__STORYBOOK_MODULE_TEST__,y={...n,title:"Components/Feedback/Alert"},e={play:async({args:t,canvas:r,userEvent:a})=>{await a.click(r.getByRole("button")),m(t.onClose).toHaveBeenCalled()},render:t=>o(s,{args:t}),tags:["!dev","!autodocs"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button'));
    expect(args.onClose).toHaveBeenCalled();
  },
  render: args => renderComponentVariants(Alert, {
    args
  }),
  tags: ['!dev', '!autodocs']
}`,...e.parameters?.docs?.source}}};const B=["Test"];export{e as Test,B as __namedExportsOrder,y as default};
