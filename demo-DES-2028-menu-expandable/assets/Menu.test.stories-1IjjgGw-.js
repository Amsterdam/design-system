import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./Menu-CkNwB5c0.js";import{n as i,t as a}from"./PieChartFill-Db-ySX-o.js";import{a as o,o as s}from"./Menu.stories-Bavzxijn.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),n(),o(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={...s,title:`Components/Navigation/Menu`},d=e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Dashboard`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Projecten`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Rapportages`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Analyses`}),(0,c.jsx)(r.Link,{className:`hover`,href:`#`,icon:(0,c.jsx)(a,{}),children:`Instellingen`})]}),f={render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},p={args:{expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`navigation`,{name:`Hoofdmenu`}),r=e.getByRole(`link`,{name:`Dashboard`}),i=e.getByRole(`button`,{name:`Klap menu uit`});l(getComputedStyle(r).flexDirection).toBe(`column`),await l(i).toHaveAttribute(`aria-expanded`,`false`),await t.click(i);let a=e.getByRole(`button`,{name:`Klap menu in`});await l(n).toHaveClass(`ams-menu--expanded`),await l(a).toHaveAttribute(`aria-expanded`,`true`),await l(a).toBeInTheDocument(),l(getComputedStyle(r).flexDirection).toBe(`row`),await t.click(a),await l(n).not.toHaveClass(`ams-menu--expanded`),await l(e.getByRole(`button`,{name:`Klap menu uit`})).toHaveAttribute(`aria-expanded`,`false`),l(getComputedStyle(r).flexDirection).toBe(`column`)},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},m={args:{defaultExpanded:!0,expandable:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},h={args:{expanded:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e})=>{let t=e.getByRole(`navigation`,{name:`Hoofdmenu`});await l(t).toHaveClass(`ams-menu--expanded`),await l(e.queryByRole(`button`,{name:/Klap menu uit|Klap menu in/})).not.toBeInTheDocument()},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},g=[`Test`,`WideExpandable`,`WideExpanded`,`WideAlwaysExpanded`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}}})))()}_();export{f as Test,h as WideAlwaysExpanded,p as WideExpandable,m as WideExpanded,g as __namedExportsOrder,u as default};