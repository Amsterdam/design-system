import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./Menu-OuKehia0.js";import{n as i,t as a}from"./PieChartFill-Db-ySX-o.js";import{a as o,i as s}from"./Menu.stories-CsLvleyf.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{i(),n(),s(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={...o,title:`Components/Navigation/Menu`},d=e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Dashboard`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Projecten`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Rapportages`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Analyses`}),(0,c.jsx)(r.Link,{className:`hover`,href:`#`,icon:(0,c.jsx)(a,{}),children:`Instellingen`})]}),f={render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},p={args:{collapsible:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`navigation`,{name:`Hoofdmenu`}),r=e.getByRole(`link`,{name:`Dashboard`});l(getComputedStyle(r).flexDirection).toBe(`column`),await t.click(e.getByRole(`button`,{name:`Klap menu uit`}));let i=e.getByRole(`button`,{name:`Klap menu in`});await l(n).toHaveClass(`ams-menu--expanded`),await l(i).toBeInTheDocument(),l(getComputedStyle(r).flexDirection).toBe(`row`),await t.click(i),await l(n).not.toHaveClass(`ams-menu--expanded`),await l(e.getByRole(`button`,{name:`Klap menu uit`})).toBeInTheDocument(),l(getComputedStyle(r).flexDirection).toBe(`column`)},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},m={args:{collapsible:!0,defaultExpanded:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},h=[`Test`,`WideCollapsible`,`WideCollapsibleExpanded`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
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
    // The class only drives the container query; check the link layout it produces, since that is
    // the behaviour the acceptance criteria describe.
    const firstLink = canvas.getByRole('link', {
      name: 'Dashboard'
    });
    expect(getComputedStyle(firstLink).flexDirection).toBe('column');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Klap menu uit'
    }));
    const collapseButton = canvas.getByRole('button', {
      name: 'Klap menu in'
    });
    await expect(menu).toHaveClass('ams-menu--expanded');
    await expect(collapseButton).toBeInTheDocument();
    expect(getComputedStyle(firstLink).flexDirection).toBe('row');

    // Return to the collapsed state, so this story keeps snapshotting it.
    await userEvent.click(collapseButton);
    await expect(menu).not.toHaveClass('ams-menu--expanded');
    await expect(canvas.getByRole('button', {
      name: 'Klap menu uit'
    })).toBeInTheDocument();
    expect(getComputedStyle(firstLink).flexDirection).toBe('column');
  },
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    defaultExpanded: true,
    inWideWindow: true
  },
  parameters: {
    fixedInWideWindow: true
  },
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...m.parameters?.docs?.source}}}})))()}g();export{f as Test,p as WideCollapsible,m as WideCollapsibleExpanded,h as __namedExportsOrder,u as default};