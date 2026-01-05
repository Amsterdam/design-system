import{j as e,n as l}from"./iframe-B9v5y6Hj.js";import{l as c}from"./ExampleLogo-Bl7KqnQ7.js";import{m as u,P as n,a as m}from"./PageHeader.stories-TmU2olGD.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsAfterBreakpoint-DRXaia_V.js";import"./Grid-BIzTQA-t.js";import"./gridCellClasses-DKw8XbSK.js";import"./Icon-4jp1wfK8.js";const{expect:d}=__STORYBOOK_MODULE_TEST__,L={...u,title:"Components/Containers/Page Header"},g=m,p=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts","WithCustomLogo"],r={args:{brandName:"Data Amsterdam",children:e.jsx("p",{children:"test"}),menuItems:[e.jsx(n.MenuLink,{href:"#",lang:"en",children:"English"},"1"),e.jsx(n.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"2")]},play:async({canvas:a,userEvent:t})=>{const s=(await a.findByTestId("interaction-test")).querySelector("button"),o=await a.findByTestId("children");s&&(await t.click(s),d(o).toBeVisible(),await t.click(s),d(o).not.toBeVisible())},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(n,{"data-testid":"interaction-test",...a,children:e.jsx("ul",{children:e.jsx("li",{"data-testid":"children",children:"English"})})}),p.map(t=>{const i=g[t];return i?e.jsx(n,{...i.args},t):null}),c.map(t=>e.jsx(n,{brandName:"Voorbeeld",logoBrand:t,menuItems:e.jsx(n.MenuLink,{fixed:!0,href:"#",icon:l,children:"Inloggen"})},t))]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      {/* Interaction test */}
      <PageHeader data-testid="interaction-test" {...args}>
        <ul>
          <li data-testid="children">English</li>
        </ul>
      </PageHeader>

      {/* All existing public stories */}
      {orderedStoryKeys.map(key => {
      const story = pageHeaderStories[key];
      return story ? <PageHeader key={key} {...story.args} /> : null;
    })}

      {/* All logo brands */}
      {logoBrands.map(brand => <PageHeader brandName="Voorbeeld" key={brand} logoBrand={brand} menuItems={<PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
              Inloggen
            </PageHeader.MenuLink>} />)}
    </>
}`,...r.parameters?.docs?.source}}};const I=["Test"];export{r as Test,I as __namedExportsOrder,L as default};
