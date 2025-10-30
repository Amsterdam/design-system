import{j as e}from"./iframe-dLGoZOzx.js";import{r as l}from"./renderComponentVariants-BRwNFyvi.js";import{m as d,P as n}from"./PageHeader.stories-CVmBvx1Y.js";import"./preload-helper-PPVm8Dsz.js";import"./ChevronDown-_sQlIss0.js";import"./useIsAfterBreakpoint-BiXtMw3Z.js";import"./Grid-CEci6C97.js";import"./gridCellClasses-BgQvftim.js";import"./Icon-sSmztMo8.js";import"./Logo-DuN6l5yM.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,f={...d,title:"Components/Containers/Page Header"},r={args:{brandName:"Data Amsterdam",children:e.jsx(n.GridCellNarrowWindowOnly,{span:"all",children:e.jsx("ul",{children:e.jsx("li",{children:"English"})})}),menuItems:[e.jsx(n.MenuLink,{href:"#",lang:"en",children:"English"},"1"),e.jsx(n.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"2")]},play:async({canvas:a,userEvent:t})=>{const i=a.getByRole("button"),s=await a.findByTestId("children");await t.click(i),o(s).toBeVisible(),await t.click(i),o(s).not.toBeVisible()},render:a=>l(n,{args:a}),tags:["!dev","!autodocs"]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
