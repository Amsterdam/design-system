import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{$t as n,yn as r}from"./iframe-C1pDb03v.js";import{B as i,it as a,rt as o,t as s}from"./src-BL9TFTbs.js";import c,{n as l,t as u}from"./PageHeader.stories-5f4xDTfN.js";var d,f,p,m,h,g;e((()=>{r(),s(),o(),l(),d=t(),{expect:f}=__STORYBOOK_MODULE_TEST__,p={...c,title:`Components/Containers/Page Header`},m=u,h={args:{brandName:`Data Amsterdam`,children:(0,d.jsx)(`p`,{children:`test`}),menuItems:[(0,d.jsx)(i.MenuLink,{href:`#`,lang:`en`,children:`English`},`1`),(0,d.jsx)(i.MenuLink,{fixed:!0,href:`#`,children:`Zoeken`},`2`)]},play:async({canvas:e,userEvent:t})=>{let n=(await e.findByTestId(`interaction-test`)).querySelector(`button`),r=await e.findByTestId(`children`);n&&(await t.click(n),f(r).toBeVisible(),await t.click(n),f(r).not.toBeVisible())},render:e=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{"data-testid":`interaction-test`,...e,children:(0,d.jsx)(`ul`,{children:(0,d.jsx)(`li`,{"data-testid":`children`,children:`English`})})}),Object.keys(m).filter(e=>e!==`__namedExportsOrder`).sort().map(e=>{let t=m[e];return t?(0,d.jsx)(i,{...t.args},e):null}),a.map(e=>(0,d.jsx)(i,{brandName:`Voorbeeld`,logoBrand:e,menuItems:(0,d.jsx)(i.MenuLink,{fixed:!0,href:`#`,icon:n,children:`Inloggen`})},e))]}),tags:[`!dev`,`!autodocs`]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Test`]}))();export{h as Test,g as __namedExportsOrder,p as default};