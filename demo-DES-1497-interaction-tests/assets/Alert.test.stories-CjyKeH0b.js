import{m as s}from"./Alert.stories-0okkokSc.js";import"./iframe-CfScnC1S.js";import"./preload-helper-PPVm8Dsz.js";import"./Alert-pDBjlsJ0.js";import"./Icon-7rI7OGwk.js";import"./Row-CI1efezf.js";import"./Heading-CI6Hfj0f.js";import"./IconButton-Bz80fY8m.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const{expect:n,fn:r}=__STORYBOOK_MODULE_TEST__,v={...s,title:"Components/Feedback/Alert"},e={args:{closeable:!0,onClose:r()},play:async({args:t,canvas:o,userEvent:a})=>{await a.click(o.getByRole("button")),n(t.onClose).toHaveBeenCalled()},tags:["!dev","!autodocs"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    closeable: true,
    onClose: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button'));
    expect(args.onClose).toHaveBeenCalled();
  },
  tags: ['!dev', '!autodocs']
}`,...e.parameters?.docs?.source}}};const _=["Test"];export{e as Test,_ as __namedExportsOrder,v as default};
