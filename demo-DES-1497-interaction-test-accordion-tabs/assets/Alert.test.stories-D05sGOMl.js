import{m as s}from"./Alert.stories-COf6YpAk.js";import"./iframe-DLo72SoR.js";import"./preload-helper-PPVm8Dsz.js";import"./Alert-8iHvajpG.js";import"./Icon-ugyQ9keY.js";import"./Row-DBGNqmvR.js";import"./Heading-DVUUpeY6.js";import"./IconButton-B4TA1KDO.js";/**
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
