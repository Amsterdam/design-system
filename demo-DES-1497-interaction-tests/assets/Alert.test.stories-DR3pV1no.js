import{j as r}from"./iframe-DztCyeCK.js";import{r as i}from"./renderComponentVariants-C6G7CsgV.js";import{m as c}from"./Alert.stories-27_mSjuO.js";import{A as s}from"./Alert-aRLVnqMf.js";import"./preload-helper-PPVm8Dsz.js";import"./ChevronDown-BbBKy_OL.js";import"./Icon-_-z84NuK.js";import"./Row-MSL0xkJT.js";import"./Heading-DBPWsqZ5.js";import"./IconButton-BDCzeJ2f.js";const{expect:m,fn:l}=__STORYBOOK_MODULE_TEST__,_={...c,title:"Components/Feedback/Alert"},e={args:{closeable:!0,onClose:l()},play:async({args:t,canvas:a,userEvent:n})=>{const o=a.getByTestId("interaction-test").querySelector("button");o&&(await n.click(o),m(t.onClose).toHaveBeenCalled())},render:t=>r.jsxs(r.Fragment,{children:[i(s,{args:t}),r.jsx(s,{"data-testid":"interaction-test",...t})]}),tags:["!dev","!autodocs"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    closeable: true,
    onClose: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const interactionTest = canvas.getByTestId('interaction-test');
    const button = interactionTest.querySelector('button');
    if (!button) return;
    await userEvent.click(button);
    expect(args.onClose).toHaveBeenCalled();
  },
  render: args => <>
      {renderComponentVariants(Alert, {
      args
    })}
      <Alert data-testid="interaction-test" {...args} />
    </>,
  tags: ['!dev', '!autodocs']
}`,...e.parameters?.docs?.source}}};const E=["Test"];export{e as Test,E as __namedExportsOrder,_ as default};
