import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{G as r,T as i}from"./index.esm-BKoBEYTi.js";import{n as a,r as o}from"./Logo-BZCsuFnE.js";import{n as s,t as c}from"./PageHeader-CawnNwdd.js";import{l,t as u,u as d}from"./PageHeader.stories-BD2WwOvk.js";var f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),s(),a(),f=t(),l(),p=n(),{expect:m}=__STORYBOOK_MODULE_TEST__,h={...d,title:`Components/Containers/Page Header`},g=u,_={args:{brandName:`Data Amsterdam`,children:(0,p.jsx)(`p`,{children:`test`}),menuItems:[(0,p.jsx)(c.MenuLink,{href:`#`,lang:`en`,children:`English`},`1`),(0,p.jsx)(c.MenuLink,{fixed:!0,href:`#`,children:`Zoeken`},`2`)]},play:async({canvas:e,userEvent:t})=>{let n=await e.findByTestId(`interaction-test`),r=n.querySelector(`button`),i=await e.findByTestId(`children`);if(!r)return;await t.click(r),m(i).toBeVisible(),await t.click(r),m(i).not.toBeVisible(),await t.click(r),m(i).toBeVisible(),await t.click(e.getByTestId(`mega-menu-link`)),m(i).not.toBeVisible();let a=n.querySelector(`a`);a&&await t.click(a),m(r).toBeInTheDocument()},render:e=>{let[t,n]=(0,f.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{"data-testid":`interaction-test`,...e,onClick:e=>{e.target instanceof Element&&e.target.closest(`a`)&&(e.preventDefault(),n(!1))},onOpenChange:n,open:t,children:(0,p.jsx)(`ul`,{children:(0,p.jsx)(`li`,{"data-testid":`children`,children:(0,p.jsx)(`a`,{"data-testid":`mega-menu-link`,href:`#/should-not-navigate`,children:`English`})})})}),Object.keys(g).filter(e=>e!==`__namedExportsOrder`).sort().map(e=>{let t=g[e];return t?(0,p.jsx)(c,{...t.args},e):null}),o.map(e=>(0,p.jsx)(c,{brandName:`Voorbeeld`,logoBrand:e,menuItems:(0,p.jsx)(c.MenuLink,{fixed:!0,href:`#`,icon:i,children:`Inloggen`})},e))]})},tags:[`!dev`,`!autodocs`,`!manifest`]},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
  tags: ['!dev', '!autodocs', '!manifest']
}`,..._.parameters?.docs?.source}}},v=[`Test`]})))()}y();export{_ as Test,v as __namedExportsOrder,h as default};