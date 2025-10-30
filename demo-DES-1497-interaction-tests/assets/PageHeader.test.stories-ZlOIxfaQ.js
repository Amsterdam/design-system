import{j as e}from"./iframe-D1_3ryCH.js";import{r as l}from"./renderComponentVariants-ocW3XWB3.js";import{m as d,P as n}from"./PageHeader.stories-BF6PNpX3.js";import"./preload-helper-PPVm8Dsz.js";import"./ChevronDown-BSG9mY9T.js";import"./useIsAfterBreakpoint-9edg35z6.js";import"./Grid-WSGDB13L.js";import"./gridCellClasses-BgQvftim.js";import"./Icon-D2X8MQVb.js";import"./Logo-CWI33Eft.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,f={...d,title:"Components/Containers/Page Header"},r={args:{brandName:"Data Amsterdam",children:e.jsx(n.GridCellNarrowWindowOnly,{span:"all",children:e.jsx("ul",{children:e.jsx("li",{children:"English"})})}),menuItems:[e.jsx(n.MenuLink,{href:"#",lang:"en",children:"English"},"1"),e.jsx(n.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"2")]},play:async({canvas:a,userEvent:t})=>{const i=a.getByRole("button"),s=await a.findByTestId("children");await t.click(i),o(s).toBeVisible(),await t.click(i),o(s).not.toBeVisible()},render:a=>l(n,{args:a}),tags:["!dev","!autodocs"]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Data Amsterdam',
    children: <PageHeader.GridCellNarrowWindowOnly span="all">
        <ul>
          <li>English</li>
        </ul>
      </PageHeader.GridCellNarrowWindowOnly>,
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
    const menuButton = canvas.getByRole('button');
    const exampleChildren = await canvas.findByTestId('children');
    await userEvent.click(menuButton);
    expect(exampleChildren).toBeVisible();
    await userEvent.click(menuButton);
    expect(exampleChildren).not.toBeVisible();
  },
  render: args => renderComponentVariants(PageHeader, {
    args
  }),
  tags: ['!dev', '!autodocs']
}`,...r.parameters?.docs?.source}}};const w=["Test"];export{r as Test,w as __namedExportsOrder,f as default};
