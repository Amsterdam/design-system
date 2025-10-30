import{r as o}from"./renderComponentVariants-ocW3XWB3.js";import{m as n}from"./Alert.stories-CUu2L4VQ.js";import{A as s}from"./Alert-0jhYZDjZ.js";import"./iframe-D1_3ryCH.js";import"./preload-helper-PPVm8Dsz.js";import"./ChevronDown-BSG9mY9T.js";import"./Icon-D2X8MQVb.js";import"./Row-Fv2L5qBz.js";import"./Heading-BlZeCySG.js";import"./IconButton-DFpGKged.js";/**
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
