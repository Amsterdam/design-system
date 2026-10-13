import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./Menu-BKlt3MJL.js";import{n as i,t as a}from"./PieChartFill-Db-ySX-o.js";import{o,s}from"./Menu.stories-C0_X3dT5.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{i(),n(),o(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={...s,title:`Components/Navigation/Menu`},d=e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Dashboard`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Projecten`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Rapportages`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Analyses`}),(0,c.jsx)(r.Link,{className:`hover`,href:`#`,icon:(0,c.jsx)(a,{}),children:`Instellingen`})]}),f=e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Dashboard`}),(0,c.jsxs)(r.Item,{href:`#`,icon:(0,c.jsx)(a,{}),label:`Projecten`,children:[(0,c.jsx)(r.Link,{href:`#`,children:`Overzicht`}),(0,c.jsx)(r.Link,{href:`#`,children:`Planning`}),(0,c.jsx)(r.Link,{href:`#`,children:`Team`})]}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Rapportages`}),(0,c.jsx)(r.Link,{className:`hover`,href:`#`,icon:(0,c.jsx)(a,{}),children:`Instellingen`})]}),p={render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},m={args:{expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`navigation`,{name:`Hoofdmenu`}),r=e.getByRole(`link`,{name:`Dashboard`}),i=e.getByRole(`button`,{name:`Klap menu uit`});l(getComputedStyle(r).flexDirection).toBe(`column`),await l(i).toHaveAttribute(`aria-expanded`,`false`),await t.click(i);let a=e.getByRole(`button`,{name:`Klap menu in`});await l(n).toHaveClass(`ams-menu--expanded`),await l(a).toHaveAttribute(`aria-expanded`,`true`),await l(a).toBeInTheDocument(),l(getComputedStyle(r).flexDirection).toBe(`row`),await t.click(a),await l(n).not.toHaveClass(`ams-menu--expanded`),await l(e.getByRole(`button`,{name:`Klap menu uit`})).toHaveAttribute(`aria-expanded`,`false`),l(getComputedStyle(r).flexDirection).toBe(`column`)},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},h={args:{defaultExpanded:!0,expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},g={args:{expanded:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Hoofdmenu`});await l(t).toHaveClass(`ams-menu--expanded`),await l(e.queryByRole(`button`,{name:/Klap menu uit|Klap menu in/})).not.toBeInTheDocument()},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},_={args:{expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e})=>{let t=e.getByRole(`link`,{hidden:!0,name:`Overzicht`});await l(t).not.toBeVisible()},render:f,tags:[`!dev`,`!autodocs`,`!manifest`]},v={args:{defaultExpanded:!0,expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e})=>{await l(e.getAllByRole(`list`)).toHaveLength(2),await l(e.getByRole(`link`,{name:`Overzicht`})).toBeVisible()},render:f,tags:[`!dev`,`!autodocs`,`!manifest`]},y={parameters:{chromatic:{modes:{"400px":{viewport:400}}}},render:f,tags:[`!dev`,`!autodocs`,`!manifest`]},b=[`Test`,`WideExpandable`,`WideExpanded`,`WideAlwaysExpanded`,`WideWithSubmenu`,`WideWithSubmenuExpanded`,`NarrowWithSubmenu`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    const hiddenSubmenuLink = canvas.getByRole('link', {
      hidden: true,
      name: 'Overzicht'
    });
    await expect(hiddenSubmenuLink).not.toBeVisible();
  },
  render: renderMenuWithSubmenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    expandable: true,
    inWideWindow: true
  },
  parameters: {
    fixedInWideWindow: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('list')).toHaveLength(2);
    await expect(canvas.getByRole('link', {
      name: 'Overzicht'
    })).toBeVisible();
  },
  render: renderMenuWithSubmenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      modes: {
        '400px': {
          viewport: 400
        }
      }
    }
  },
  render: renderMenuWithSubmenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as NarrowWithSubmenu,p as Test,g as WideAlwaysExpanded,m as WideExpandable,h as WideExpanded,_ as WideWithSubmenu,v as WideWithSubmenuExpanded,b as __namedExportsOrder,u as default};