import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-pByjoP3I.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{D as r,q as i}from"./index.esm-DDvEoL08.js";import{n as a,r as o}from"./Logo-DisHp__y.js";import{n as s,t as c}from"./PageHeader-7UQqqht2.js";import{d as l,f as u,n as d,t as f}from"./PageHeader.stories-Dz51Fo6M.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{i(),s(),a(),p=t(),l(),m=n(),{expect:h}=__STORYBOOK_MODULE_TEST__,g={...u,title:`Components/Containers/Page Header`},_=d,v={args:{brandName:`Data Amsterdam`,children:(0,m.jsx)(`p`,{children:`test`}),menuItems:[(0,m.jsx)(c.MenuLink,{href:`#`,lang:`en`,children:`English`},`1`),(0,m.jsx)(c.MenuLink,{fixed:!0,href:`#`,children:`Zoeken`},`2`)]},play:async({canvas:e,userEvent:t})=>{let n=await e.findByTestId(`interaction-test`),r=n.querySelector(`button`),i=await e.findByTestId(`children`);if(!r)return;await t.click(r),h(i).toBeVisible(),await t.click(r),h(i).not.toBeVisible(),await t.click(r),h(i).toBeVisible(),await t.click(e.getByTestId(`mega-menu-link`)),h(i).not.toBeVisible();let a=n.querySelector(`a`);a&&await t.click(a),h(r).toBeInTheDocument()},render:e=>{let[t,n]=(0,p.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c,{"data-testid":`interaction-test`,...e,onClick:e=>{e.target instanceof Element&&e.target.closest(`a`)&&(e.preventDefault(),n(!1))},onOpenChange:n,open:t,children:(0,m.jsx)(`ul`,{children:(0,m.jsx)(`li`,{"data-testid":`children`,children:(0,m.jsx)(`a`,{"data-testid":`mega-menu-link`,href:`#/should-not-navigate`,children:`English`})})})}),Object.keys(_).filter(e=>e!==`__namedExportsOrder`).sort().map(e=>{let t=_[e];return t?(0,m.jsx)(c,{...t.args},e):null}),(0,m.jsx)(c,{...f.args,defaultOpen:!0}),o.map(e=>(0,m.jsx)(c,{brandName:`Voorbeeld`,logoBrand:e,menuItems:(0,m.jsx)(c.MenuLink,{fixed:!0,href:`#`,icon:r,children:`Inloggen`})},e))]})},tags:[`!dev`,`!autodocs`,`!manifest`]},y=[`Test`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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

    // Open and close the mega menu with the menu button.
    await userEvent.click(menuButton);
    expect(exampleChildren).toBeVisible();
    await userEvent.click(menuButton);
    expect(exampleChildren).not.toBeVisible();

    // Reopen, then close it by clicking a link inside the mega menu (controlled close, no navigation).
    await userEvent.click(menuButton);
    expect(exampleChildren).toBeVisible();
    await userEvent.click(canvas.getByTestId('mega-menu-link'));
    expect(exampleChildren).not.toBeVisible();

    // Every link’s default is prevented, so clicking the logo never navigates the story away.
    const logoLink = pageHeader.querySelector('a');
    if (logoLink) {
      await userEvent.click(logoLink);
    }
    expect(menuButton).toBeInTheDocument();
  },
  /*
   * The public stories render every brand by hand rather than a generated matrix. A matrix cannot control the
   * mega menu, which the interaction test below needs, and it would find no values for the two props whose
   * controls offer a choice: \`logoBrand\` carries the same LogoBrandConfig as Logo’s \`brand\`, and
   * \`menuButtonIcon\` offers every icon in the package. Each public story covers a prop that changes the header.
   */
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        {/* Interaction test: controlled open so a mega-menu link can close the menu instead of navigating */}
        <PageHeader data-testid="interaction-test" {...args} onClick={event => {
        // Keep any Page Header link (logo, inline menu, mega menu) from navigating, and close the menu.
        if (event.target instanceof Element && event.target.closest('a')) {
          event.preventDefault();
          setOpen(false);
        }
      }} onOpenChange={setOpen} open={open}>
          <ul>
            <li data-testid="children">
              <a data-testid="mega-menu-link" href="#/should-not-navigate">
                English
              </a>
            </li>
          </ul>
        </PageHeader>

        {/* All public stories, sorted by key for deterministic order */}
        {Object.keys(pageHeaderStories).filter(key => key !== '__namedExportsOrder') // This gets added by babel-plugin-named-exports-order
      .sort().map(key => {
        const story = pageHeaderStories[key];
        return story ? <PageHeader key={key} {...story.args} /> : null;
      })}

        {/* The stories above keep the mega menu closed, so this one opens it to bring its content into the snapshot. */}
        <PageHeader {...PageHeaderStories.Default.args} defaultOpen />

        {/* All logo brands */}
        {logoBrands.map(brand => <PageHeader brandName="Voorbeeld" key={brand} logoBrand={brand} menuItems={<PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
                Inloggen
              </PageHeader.MenuLink>} />)}
      </>;
  },
  tags: ['!dev', '!autodocs', '!manifest']
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Test,y as __namedExportsOrder,g as default};