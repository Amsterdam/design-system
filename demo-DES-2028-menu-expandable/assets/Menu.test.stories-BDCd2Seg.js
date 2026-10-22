import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./Menu-DM40_ZkX.js";import{n as i,t as a}from"./PieChartFill-Db-ySX-o.js";import{a as o,i as s}from"./Menu.stories-CLcWNNcw.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{i(),n(),s(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={...o,title:`Components/Navigation/Menu`},d=e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Dashboard`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Projecten`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Rapportages`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Analyses`}),(0,c.jsx)(r.Link,{className:`hover`,href:`#`,icon:(0,c.jsx)(a,{}),children:`Instellingen`})]}),f={render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},p={args:{expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`navigation`,{name:`Hoofdmenu`}),r=e.getByRole(`link`,{name:`Dashboard`}),i=e.getByRole(`button`,{name:`Klap menu uit`});l(getComputedStyle(r).flexDirection).toBe(`column`),await l(i).toHaveAttribute(`aria-expanded`,`false`),await t.click(i);let a=e.getByRole(`button`,{name:`Klap menu in`});await l(n).toHaveClass(`ams-menu--expanded`),await l(a).toHaveAttribute(`aria-expanded`,`true`),await l(a).toBeInTheDocument(),l(getComputedStyle(r).flexDirection).toBe(`row`),await t.click(a),await l(n).not.toHaveClass(`ams-menu--expanded`),await l(e.getByRole(`button`,{name:`Klap menu uit`})).toHaveAttribute(`aria-expanded`,`false`),l(getComputedStyle(r).flexDirection).toBe(`column`)},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},m={args:{defaultExpanded:!0,expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},h={args:{expanded:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Hoofdmenu`});await l(t).toHaveClass(`ams-menu--expanded`),await l(e.queryByRole(`button`,{name:/Klap menu uit|Klap menu in/})).not.toBeInTheDocument()},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},g={args:{expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Hoofdmenu`}),n=e.getByRole(`button`,{name:`Klap menu uit`});await l(t).toBeVisible();let r=t.getBoundingClientRect(),i=n.getBoundingClientRect();l(i.right).toBeLessThanOrEqual(r.right)},render:e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Omgevingsvergunningaanvragen`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Projecten`})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},_=[`Test`,`WideExpandable`,`WideExpanded`,`WideAlwaysExpanded`,`WideExpandableLongLabel`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    expandable: true,
    inWideWindow: true
  },
  parameters: {
    fixedInWideWindow: true
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const menu = canvas.getByRole('navigation', {
      name: 'Hoofdmenu'
    });
    // Check the link layout itself, because that is the behaviour users notice when the Menu expands.
    const firstLink = canvas.getByRole('link', {
      name: 'Dashboard'
    });
    const expandButton = canvas.getByRole('button', {
      name: 'Klap menu uit'
    });
    expect(getComputedStyle(firstLink).flexDirection).toBe('column');
    await expect(expandButton).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(expandButton);
    const collapseButton = canvas.getByRole('button', {
      name: 'Klap menu in'
    });
    await expect(menu).toHaveClass('ams-menu--expanded');
    await expect(collapseButton).toHaveAttribute('aria-expanded', 'true');
    await expect(collapseButton).toBeInTheDocument();
    expect(getComputedStyle(firstLink).flexDirection).toBe('row');

    // Return to the collapsed state, so this story keeps snapshotting it.
    await userEvent.click(collapseButton);
    await expect(menu).not.toHaveClass('ams-menu--expanded');
    await expect(canvas.getByRole('button', {
      name: 'Klap menu uit'
    })).toHaveAttribute('aria-expanded', 'false');
    expect(getComputedStyle(firstLink).flexDirection).toBe('column');
  },
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    expandable: true,
    inWideWindow: true
  },
  parameters: {
    fixedInWideWindow: true
  },
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true,
    inWideWindow: true
  },
  parameters: {
    fixedInWideWindow: true
  },
  play: async ({
    canvas
  }) => {
    const menu = canvas.getByRole('navigation', {
      name: 'Hoofdmenu'
    });
    await expect(menu).toHaveClass('ams-menu--expanded');
    await expect(canvas.queryByRole('button', {
      name: /Klap menu uit|Klap menu in/
    })).not.toBeInTheDocument();
  },
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    expandable: true,
    inWideWindow: true
  },
  parameters: {
    fixedInWideWindow: true
  },
  play: async ({
    canvas
  }) => {
    const menu = canvas.getByRole('navigation', {
      name: 'Hoofdmenu'
    });
    const expandButton = canvas.getByRole('button', {
      name: 'Klap menu uit'
    });

    // Below the wide breakpoint the Menu is hidden, and both boxes would measure 0.
    await expect(menu).toBeVisible();
    const menuRect = menu.getBoundingClientRect();
    const buttonRect = expandButton.getBoundingClientRect();
    expect(buttonRect.right).toBeLessThanOrEqual(menuRect.right);
  },
  render: args => <Menu {...args}>
      <Menu.Link href="#" icon={<SvgPieChartFill />}>
        Omgevingsvergunningaanvragen
      </Menu.Link>
      <Menu.Link href="#" icon={<SvgPieChartFill />}>
        Projecten
      </Menu.Link>
    </Menu>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...g.parameters?.docs?.source}}}})))()}v();export{f as Test,h as WideAlwaysExpanded,p as WideExpandable,g as WideExpandableLongLabel,m as WideExpanded,_ as __namedExportsOrder,u as default};