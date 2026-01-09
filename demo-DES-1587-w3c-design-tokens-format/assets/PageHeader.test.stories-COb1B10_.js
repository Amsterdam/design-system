import{j as e}from"./iframe-io1_ciOy.js";import{r as o}from"./renderComponentVariants-B7SKvPeu.js";import{m as c,P as a}from"./PageHeader.stories-C4I10BFr.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsAfterBreakpoint-BQlrlF2p.js";import"./Grid-DhipDxBY.js";import"./gridCellClasses-DKw8XbSK.js";import"./Icon-C0baAkIV.js";import"./Logo-Bhcgem5d.js";const{expect:d}=__STORYBOOK_MODULE_TEST__,H={...c,title:"Components/Containers/Page Header"},n={args:{brandName:"Data Amsterdam",children:e.jsx("p",{children:"test"}),menuItems:[e.jsx(a.MenuLink,{href:"#",lang:"en",children:"English"},"1"),e.jsx(a.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"2")]},play:async({canvas:t,userEvent:i})=>{const r=(await t.findByTestId("interaction-test")).querySelector("button"),s=await t.findByTestId("children");r&&(await i.click(r),d(s).toBeVisible(),await i.click(r),d(s).not.toBeVisible())},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(a,{"data-testid":"interaction-test",...t,children:e.jsx("ul",{children:e.jsx("li",{"data-testid":"children",children:"English"})})}),o(a,{args:t})]}),tags:["!dev","!autodocs"]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Data Amsterdam',
    children: <p>test</p>,
    menuItems: [<PageHeader.MenuLink href="#" key="1" lang="en">
        English
      </PageHeader.MenuLink>, <PageHeader.MenuLink fixed href="#" key="2">
        Zoeken
      </PageHeader.MenuLink>]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const pageHeader = await canvas.findByTestId('interaction-test');
    const menuButton = pageHeader.querySelector('button');
    const exampleChildren = await canvas.findByTestId('children');
    if (!menuButton) return;
    await userEvent.click(menuButton);
    expect(exampleChildren).toBeVisible();
    await userEvent.click(menuButton);
    expect(exampleChildren).not.toBeVisible();
  },
  render: args => <>
      <PageHeader data-testid="interaction-test" {...args}>
        <ul>
          <li data-testid="children">English</li>
        </ul>
      </PageHeader>
      {renderComponentVariants(PageHeader, {
      args
    })}
    </>,
  tags: ['!dev', '!autodocs']
}`,...n.parameters?.docs?.source}}};const y=["Test"];export{n as Test,y as __namedExportsOrder,H as default};
