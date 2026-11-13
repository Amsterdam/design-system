import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-BG4KOiPz.js";import{n,t as r}from"./Menu-DKQc_WgQ.js";import{n as i,t as a}from"./PieChartFill-DPNAPpBF.js";import{i as o,r as s,t as c}from"./Menu.stories-Mbg5Rl9F.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{i(),n(),s(),l=t(),{expect:u}=__STORYBOOK_MODULE_TEST__,d={...o,title:`Components/Navigation/Menu`},f={...c,play:async({canvas:e,step:t,userEvent:n})=>{await t(`Menu`,async()=>{await t(`Sets the clicked link to current`,async()=>{let t=e.getByRole(`link`,{name:`Dashboard`}),r=e.getByRole(`link`,{name:`Projecten`});await u(t).toHaveAttribute(`aria-current`,`page`),await u(r).not.toHaveAttribute(`aria-current`),await n.click(r),await u(r).toHaveAttribute(`aria-current`,`page`),await u(t).not.toHaveAttribute(`aria-current`)})})},tags:[`!dev`,`!autodocs`,`!manifest`]},p={render:e=>(0,l.jsxs)(r,{...e,children:[(0,l.jsx)(r.Link,{href:`#`,icon:(0,l.jsx)(a,{}),children:`Dashboard`}),(0,l.jsx)(r.Link,{href:`#`,icon:(0,l.jsx)(a,{}),children:`Projecten`}),(0,l.jsx)(r.Link,{href:`#`,icon:(0,l.jsx)(a,{}),children:`Rapportages`}),(0,l.jsx)(r.Link,{href:`#`,icon:(0,l.jsx)(a,{}),children:`Analyses`}),(0,l.jsx)(r.Link,{className:`hover`,href:`#`,icon:(0,l.jsx)(a,{}),children:`Instellingen`})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},m=[`CurrentLink`,`Test`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Menu', async () => {
      await step('Sets the clicked link to current', async () => {
        const dashboard = canvas.getByRole('link', {
          name: 'Dashboard'
        });
        const projects = canvas.getByRole('link', {
          name: 'Projecten'
        });
        await expect(dashboard).toHaveAttribute('aria-current', 'page');
        await expect(projects).not.toHaveAttribute('aria-current');
        await userEvent.click(projects);
        await expect(projects).toHaveAttribute('aria-current', 'page');
        await expect(dashboard).not.toHaveAttribute('aria-current');
      });
    });
  },
  tags: ['!dev', '!autodocs', '!manifest']
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <Menu.Link href="#" icon={<SvgPieChartFill />}>
        Dashboard
      </Menu.Link>
      <Menu.Link href="#" icon={<SvgPieChartFill />}>
        Projecten
      </Menu.Link>
      <Menu.Link href="#" icon={<SvgPieChartFill />}>
        Rapportages
      </Menu.Link>
      <Menu.Link href="#" icon={<SvgPieChartFill />}>
        Analyses
      </Menu.Link>
      <Menu.Link className="hover" href="#" icon={<SvgPieChartFill />}>
        Instellingen
      </Menu.Link>
    </Menu>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as CurrentLink,p as Test,m as __namedExportsOrder,d as default};