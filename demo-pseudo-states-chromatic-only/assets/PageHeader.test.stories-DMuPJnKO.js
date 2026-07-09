import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-BTu_umhU.js";import{t as r}from"./jsx-runtime-BCDDjCIb.js";import{G as i,T as a}from"./index.esm-Cyk4q9Yv.js";import{V as o,at as s,it as c,t as l}from"./src-cN3_wWPr.js";import u,{n as d,t as f}from"./PageHeader.stories-CKmh-3Ew.js";var p,m,h,g,_,v,y;e((()=>{i(),l(),c(),p=t(n()),d(),m=r(),{expect:h}=__STORYBOOK_MODULE_TEST__,g={...u,title:`Components/Containers/Page Header`},_=f,v={args:{brandName:`Data Amsterdam`,children:(0,m.jsx)(`p`,{children:`test`}),menuItems:[(0,m.jsx)(o.MenuLink,{href:`#`,lang:`en`,children:`English`},`1`),(0,m.jsx)(o.MenuLink,{fixed:!0,href:`#`,children:`Zoeken`},`2`)]},play:async({canvas:e,userEvent:t})=>{let n=await e.findByTestId(`interaction-test`),r=n.querySelector(`button`),i=await e.findByTestId(`children`);if(!r)return;await t.click(r),h(i).toBeVisible(),await t.click(r),h(i).not.toBeVisible(),await t.click(r),h(i).toBeVisible(),await t.click(e.getByTestId(`mega-menu-link`)),h(i).not.toBeVisible();let a=n.querySelector(`a`);a&&await t.click(a),h(r).toBeInTheDocument()},render:e=>{let[t,n]=(0,p.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{"data-testid":`interaction-test`,...e,onClick:e=>{e.target instanceof Element&&e.target.closest(`a`)&&(e.preventDefault(),n(!1))},onOpenChange:n,open:t,children:(0,m.jsx)(`ul`,{children:(0,m.jsx)(`li`,{"data-testid":`children`,children:(0,m.jsx)(`a`,{"data-testid":`mega-menu-link`,href:`#/should-not-navigate`,children:`English`})})})}),Object.keys(_).filter(e=>e!==`__namedExportsOrder`).sort().map(e=>{let t=_[e];return t?(0,m.jsx)(o,{...t.args},e):null}),s.map(e=>(0,m.jsx)(o,{brandName:`Voorbeeld`,logoBrand:e,menuItems:(0,m.jsx)(o.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Inloggen`})},e))]})},tags:[`!dev`,`!autodocs`]},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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

        {/* All logo brands */}
        {logoBrands.map(brand => <PageHeader brandName="Voorbeeld" key={brand} logoBrand={brand} menuItems={<PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
                Inloggen
              </PageHeader.MenuLink>} />)}
      </>;
  },
  tags: ['!dev', '!autodocs']
}`,...v.parameters?.docs?.source}}},y=[`Test`]}))();export{v as Test,y as __namedExportsOrder,g as default};