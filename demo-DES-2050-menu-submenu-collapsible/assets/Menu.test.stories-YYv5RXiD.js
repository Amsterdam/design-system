import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./Menu-D0GDXbZr.js";import{n as i,t as a}from"./PieChartFill-Db-ySX-o.js";import{o,s}from"./Menu.stories-BbuvDLUi.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{i(),n(),o(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={...s,title:`Components/Navigation/Menu`},d=e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Dashboard`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Projecten`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Rapportages`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Analyses`}),(0,c.jsx)(r.Link,{className:`hover`,href:`#`,icon:(0,c.jsx)(a,{}),children:`Instellingen`})]}),f=e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Dashboard`}),(0,c.jsxs)(r.Item,{href:`#`,icon:(0,c.jsx)(a,{}),label:`Projecten`,children:[(0,c.jsx)(r.Link,{href:`#`,children:`Overzicht`}),(0,c.jsx)(r.Link,{href:`#`,children:`Planning`}),(0,c.jsx)(r.Link,{href:`#`,children:`Team`})]}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Rapportages`}),(0,c.jsx)(r.Link,{className:`hover`,href:`#`,icon:(0,c.jsx)(a,{}),children:`Instellingen`})]}),p=(e,t={})=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Dashboard`}),(0,c.jsxs)(r.Item,{defaultExpanded:t.defaultExpanded,expanded:t.expanded,href:`#`,icon:(0,c.jsx)(a,{}),label:`Projecten`,children:[(0,c.jsx)(r.Link,{"aria-current":`page`,href:`#`,children:`Overzicht`}),(0,c.jsx)(r.Link,{href:`#`,children:`Planning`}),(0,c.jsx)(r.Link,{href:`#`,children:`Team`})]}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Rapportages`}),(0,c.jsx)(r.Link,{className:`hover`,href:`#`,icon:(0,c.jsx)(a,{}),children:`Instellingen`})]}),m={render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},h={args:{expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`navigation`,{name:`Hoofdmenu`}),r=e.getByRole(`link`,{name:`Dashboard`}),i=e.getByRole(`button`,{name:`Klap menu uit`});l(getComputedStyle(r).flexDirection).toBe(`column`),await l(i).toHaveAttribute(`aria-expanded`,`false`),await t.click(i);let a=e.getByRole(`button`,{name:`Klap menu in`});await l(n).toHaveClass(`ams-menu--expanded`),await l(a).toHaveAttribute(`aria-expanded`,`true`),await l(a).toBeInTheDocument(),l(getComputedStyle(r).flexDirection).toBe(`row`),await t.click(a),await l(n).not.toHaveClass(`ams-menu--expanded`),await l(e.getByRole(`button`,{name:`Klap menu uit`})).toHaveAttribute(`aria-expanded`,`false`),l(getComputedStyle(r).flexDirection).toBe(`column`)},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},g={args:{defaultExpanded:!0,expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},_={args:{expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e})=>{let t=e.getByRole(`link`,{hidden:!0,name:`Overzicht`});await l(t).not.toBeVisible()},render:f,tags:[`!dev`,`!autodocs`,`!manifest`]},v={args:{defaultExpanded:!0,expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e})=>{await l(e.getAllByRole(`list`)).toHaveLength(2),await l(e.getByRole(`link`,{name:`Overzicht`})).toBeVisible()},render:f,tags:[`!dev`,`!autodocs`,`!manifest`]},y={args:{collapsible:!0},parameters:{chromatic:{modes:{"400px":{viewport:400}}}},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Toon submenu van Projecten`});await l(t).toHaveAttribute(`aria-expanded`,`false`),await l(e.getByRole(`link`,{hidden:!0,name:`Overzicht`})).not.toBeVisible()},render:e=>p(e),tags:[`!dev`,`!autodocs`,`!manifest`]},b={args:{collapsible:!0},parameters:{chromatic:{modes:{"400px":{viewport:400}}}},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Verberg submenu van Projecten`});await l(t).toHaveAttribute(`aria-expanded`,`true`),await l(e.getByRole(`link`,{name:`Overzicht`})).toBeVisible()},render:e=>p(e,{defaultExpanded:!0}),tags:[`!dev`,`!autodocs`,`!manifest`]},x={args:{collapsible:!0,defaultExpanded:!0,expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e})=>{await l(e.getByRole(`button`,{name:`Toon submenu van Projecten`})).toBeInTheDocument()},render:e=>p(e),tags:[`!dev`,`!autodocs`,`!manifest`]},S={args:{collapsible:!0,expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e})=>{await l(e.queryByRole(`button`,{name:/Toon submenu van|Verberg submenu van/})).not.toBeInTheDocument(),await l(e.getByRole(`link`,{hidden:!0,name:`Overzicht`})).not.toBeVisible()},render:e=>p(e),tags:[`!dev`,`!autodocs`,`!manifest`]},C={parameters:{chromatic:{modes:{"400px":{viewport:400}}}},render:f,tags:[`!dev`,`!autodocs`,`!manifest`]},w=[`Test`,`WideExpandable`,`WideExpanded`,`WideWithSubmenu`,`WideWithSubmenuExpanded`,`CollapsibleCollapsed`,`CollapsibleExpanded`,`WideCollapsibleExpanded`,`WideCollapsibleNotExpanded`,`NarrowWithSubmenu`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
  args: {
    collapsible: true
  },
  parameters: {
    chromatic: {
      modes: {
        '400px': {
          viewport: 400
        }
      }
    }
  },
  play: async ({
    canvas
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Toon submenu van Projecten'
    });
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.getByRole('link', {
      hidden: true,
      name: 'Overzicht'
    })).not.toBeVisible();
  },
  render: args => renderMenuWithCollapsibleSubmenu(args),
  tags: ['!dev', '!autodocs', '!manifest']
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  },
  parameters: {
    chromatic: {
      modes: {
        '400px': {
          viewport: 400
        }
      }
    }
  },
  play: async ({
    canvas
  }) => {
    const button = canvas.getByRole('button', {
      name: 'Verberg submenu van Projecten'
    });
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByRole('link', {
      name: 'Overzicht'
    })).toBeVisible();
  },
  render: args => renderMenuWithCollapsibleSubmenu(args, {
    defaultExpanded: true
  }),
  tags: ['!dev', '!autodocs', '!manifest']
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
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
    await expect(canvas.getByRole('button', {
      name: 'Toon submenu van Projecten'
    })).toBeInTheDocument();
  },
  render: args => renderMenuWithCollapsibleSubmenu(args),
  tags: ['!dev', '!autodocs', '!manifest']
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expandable: true,
    inWideWindow: true
  },
  parameters: {
    fixedInWideWindow: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.queryByRole('button', {
      name: /Toon submenu van|Verberg submenu van/
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole('link', {
      hidden: true,
      name: 'Overzicht'
    })).not.toBeVisible();
  },
  render: args => renderMenuWithCollapsibleSubmenu(args),
  tags: ['!dev', '!autodocs', '!manifest']
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}}})))()}T();export{y as CollapsibleCollapsed,b as CollapsibleExpanded,C as NarrowWithSubmenu,m as Test,x as WideCollapsibleExpanded,S as WideCollapsibleNotExpanded,h as WideExpandable,g as WideExpanded,_ as WideWithSubmenu,v as WideWithSubmenuExpanded,w as __namedExportsOrder,u as default};