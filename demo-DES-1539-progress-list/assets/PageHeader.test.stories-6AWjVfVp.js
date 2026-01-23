import{j as e,o as c}from"./iframe-Dd1N4tqo.js";import{l as m}from"./ExampleLogo-Dr4Co0OK.js";import{m as g,P as r,a as u}from"./PageHeader.stories-D2Ktr0kO.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsAfterBreakpoint-BfP5-rIw.js";import"./Grid-D0X5Vjxu.js";import"./gridCellClasses-DKw8XbSK.js";import"./Icon-dq2BlW1a.js";const{expect:d}=__STORYBOOK_MODULE_TEST__,B={...g,title:"Components/Containers/Page Header"},l=u,n={args:{brandName:"Data Amsterdam",children:e.jsx("p",{children:"test"}),menuItems:[e.jsx(r.MenuLink,{href:"#",lang:"en",children:"English"},"1"),e.jsx(r.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"2")]},play:async({canvas:a,userEvent:t})=>{const i=(await a.findByTestId("interaction-test")).querySelector("button"),o=await a.findByTestId("children");i&&(await t.click(i),d(o).toBeVisible(),await t.click(i),d(o).not.toBeVisible())},render:a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{"data-testid":"interaction-test",...a,children:e.jsx("ul",{children:e.jsx("li",{"data-testid":"children",children:"English"})})}),Object.keys(l).filter(t=>t!=="__namedExportsOrder").sort().map(t=>{const s=l[t];return s?e.jsx(r,{...s.args},t):null}),m.map(t=>e.jsx(r,{brandName:"Voorbeeld",logoBrand:t,menuItems:e.jsx(r.MenuLink,{fixed:!0,href:"#",icon:c,children:"Inloggen"})},t))]}),tags:["!dev","!autodocs"]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

      {/* All public stories, sorted by key for deterministic order */}
      {Object.keys(pageHeaderStories).filter(key => key !== '__namedExportsOrder') // This gets added by babel-plugin-named-exports-order
    .sort().map(key => {
      const story = pageHeaderStories[key];
      return story ? <PageHeader key={key} {...story.args} /> : null;
    })}

      {/* All logo brands */}
      {logoBrands.map(brand => <PageHeader brandName="Voorbeeld" key={brand} logoBrand={brand} menuItems={<PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
              Inloggen
            </PageHeader.MenuLink>} />)}
    </>,
  tags: ['!dev', '!autodocs']
}`,...n.parameters?.docs?.source}}};const j=["Test"];export{n as Test,j as __namedExportsOrder,B as default};
