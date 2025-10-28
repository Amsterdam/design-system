import{j as s}from"./iframe-ZT1ZFgwQ.js";import{m as r}from"./PageHeader.stories-D0I_GGr_.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsAfterBreakpoint-CA_XQZxq.js";import"./Grid-8KwUVHZX.js";import"./gridCellClasses-BgQvftim.js";import"./Icon-DzYgoSyb.js";import"./Logo-B2SOTTAq.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const{expect:n}=__STORYBOOK_MODULE_TEST__,x={...r,title:"Components/Containers/Page Header"},e={args:{children:s.jsx("p",{"data-testid":"children",children:"Children"})},play:async({canvas:t,userEvent:a})=>{const o=t.getByRole("button"),i=await t.findByTestId("children");await a.click(o),n(i).toBeVisible(),await a.click(o),n(i).not.toBeVisible()},tags:["!dev","!autodocs"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <p data-testid="children">Children</p>
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const menuButton = canvas.getByRole('button');
    const exampleChildren = await canvas.findByTestId('children');
    await userEvent.click(menuButton);
    expect(exampleChildren).toBeVisible();
    await userEvent.click(menuButton);
    expect(exampleChildren).not.toBeVisible();
  },
  tags: ['!dev', '!autodocs']
}`,...e.parameters?.docs?.source}}};const g=["Test"];export{e as Test,g as __namedExportsOrder,x as default};
