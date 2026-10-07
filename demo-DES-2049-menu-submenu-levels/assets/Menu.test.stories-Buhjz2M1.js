import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./Menu-BsaZGTW6.js";import{n as i,t as a}from"./PieChartFill-Db-ySX-o.js";import{a as o,i as s}from"./Menu.stories-yKGDgUX3.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),n(),s(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={...o,title:`Components/Navigation/Menu`},d=e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Dashboard`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Projecten`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Rapportages`}),(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Analyses`}),(0,c.jsx)(r.Link,{className:`hover`,href:`#`,icon:(0,c.jsx)(a,{}),children:`Instellingen`})]}),f=e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(r.Link,{href:`#`,icon:(0,c.jsx)(a,{}),children:`Dashboard`}),(0,c.jsxs)(r.Item,{href:`#`,icon:(0,c.jsx)(a,{}),label:`Projecten`,children:[(0,c.jsx)(r.Link,{href:`#`,children:`Overzicht`}),(0,c.jsx)(r.Link,{href:`#`,children:`Planning`}),(0,c.jsx)(r.Link,{href:`#`,children:`Team`})]}),(0,c.jsxs)(r.Item,{defaultExpanded:!0,href:`#`,icon:(0,c.jsx)(a,{}),label:`Rapportages`,children:[(0,c.jsx)(r.Link,{href:`#`,children:`Maandrapportages`}),(0,c.jsxs)(r.Item,{defaultExpanded:!0,href:`#`,label:`Jaarrapportages`,children:[(0,c.jsx)(r.Link,{href:`#`,children:`Financieel jaarverslag`}),(0,c.jsx)(r.Link,{href:`#`,children:`Duurzaamheidsverslag`})]})]}),(0,c.jsx)(r.Link,{className:`hover`,href:`#`,icon:(0,c.jsx)(a,{}),children:`Instellingen`})]}),p={render:d,tags:[`!dev`,`!autodocs`,`!manifest`]},m={args:{collapsible:!0,inWideWindow:!0},parameters:{fixedInWideWindow:!0},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Toon submenu van Projecten`}),r=e.getByRole(`link`,{hidden:!0,name:`Overzicht`});await l(r).not.toBeVisible(),await t.click(n),await l(n).toHaveAttribute(`aria-expanded`,`true`),await l(e.getByRole(`link`,{name:`Overzicht`})).toBeVisible()},render:f,tags:[`!dev`,`!autodocs`,`!manifest`]},h={args:{collapsible:!0},parameters:{chromatic:{modes:{"400px":{viewport:400}}}},render:f,tags:[`!dev`,`!autodocs`,`!manifest`]},g=[`Test`,`WideWithSubmenu`,`NarrowWithSubmenu`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    const toggleButton = canvas.getByRole('button', {
      name: 'Toon submenu van Projecten'
    });
    const hiddenSubmenuLink = canvas.getByRole('link', {
      hidden: true,
      name: 'Overzicht'
    });
    await expect(hiddenSubmenuLink).not.toBeVisible();
    await userEvent.click(toggleButton);
    await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByRole('link', {
      name: 'Overzicht'
    })).toBeVisible();
  },
  render: renderMenuWithSubmenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
  render: renderMenuWithSubmenu,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as NarrowWithSubmenu,p as Test,m as WideWithSubmenu,g as __namedExportsOrder,u as default};