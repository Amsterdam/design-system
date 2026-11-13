import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-pByjoP3I.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{n as r,t as i}from"./Menu-Cke9CZzE.js";import{n as a,t as o}from"./useViewportHasMinWidth-DvMDApCQ.js";import{n as s,t as c}from"./PieChartFill-DPNAPpBF.js";import{i as l,r as u}from"./Menu.stories-DYur1RPp.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{s(),r(),a(),d=t(),u(),f=n(),{expect:p}=__STORYBOOK_MODULE_TEST__,m={...l,title:`Components/Navigation/Menu`},h={play:async({canvas:e,step:t,userEvent:n})=>{await t(`Menu`,async()=>{await t(`Keeps links full-width and their content inside the gutters`,async()=>{let t=e.getAllByRole(`link`),n=t[0].closest(`.ams-menu`);if(await p(n).not.toBeNull(),!n)return;let r=n.getBoundingClientRect(),i=getComputedStyle(n),a=window.matchMedia(`(min-width: ${o.wide})`).matches;for(let e of t){let t=e.getBoundingClientRect();if(await p(t.left).toBeCloseTo(r.left),await p(t.right).toBeCloseTo(r.right),!a){let t=getComputedStyle(e);await p(parseFloat(t.paddingInlineStart)).toBeGreaterThanOrEqual(-parseFloat(i.marginInlineStart)),await p(parseFloat(t.paddingInlineEnd)).toBeGreaterThanOrEqual(-parseFloat(i.marginInlineEnd))}}}),await t(`Sets the clicked link to current`,async()=>{let t=e.getByRole(`link`,{name:`Dashboard`}),r=e.getByRole(`link`,{name:`Projecten`});await p(t).toHaveAttribute(`aria-current`,`page`),await p(r).not.toHaveAttribute(`aria-current`),await n.click(r),await p(r).toHaveAttribute(`aria-current`,`page`),await p(t).not.toHaveAttribute(`aria-current`)})})},render:e=>{let[t,n]=(0,d.useState)(`Dashboard`);return(0,f.jsx)(i,{...e,children:[`Dashboard`,`Projecten`,`Rapportages`,`Analyses`,`Instellingen`].map(e=>(0,f.jsx)(i.Link,{"aria-current":t===e?`page`:void 0,className:e===`Instellingen`?`hover`:void 0,href:`#`,icon:(0,f.jsx)(c,{}),onClick:t=>{t.preventDefault(),n(e)},children:e},e))})},tags:[`!dev`,`!autodocs`,`!manifest`]},g=[`Test`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    userEvent
  }) => {
    await step('Menu', async () => {
      await step('Keeps links full-width and their content inside the gutters', async () => {
        const links = canvas.getAllByRole('link');
        const menu = links[0].closest('.ams-menu');
        await expect(menu).not.toBeNull();
        if (!menu) return;
        const menuBounds = menu.getBoundingClientRect();
        const menuStyle = getComputedStyle(menu);
        const inWideWindow = window.matchMedia(\`(min-width: \${BREAKPOINTS.wide})\`).matches;
        for (const link of links) {
          const linkBounds = link.getBoundingClientRect();
          await expect(linkBounds.left).toBeCloseTo(menuBounds.left);
          await expect(linkBounds.right).toBeCloseTo(menuBounds.right);
          if (!inWideWindow) {
            const linkStyle = getComputedStyle(link);
            await expect(parseFloat(linkStyle.paddingInlineStart)).toBeGreaterThanOrEqual(-parseFloat(menuStyle.marginInlineStart));
            await expect(parseFloat(linkStyle.paddingInlineEnd)).toBeGreaterThanOrEqual(-parseFloat(menuStyle.marginInlineEnd));
          }
        }
      });
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
  render: args => {
    const [current, setCurrent] = useState('Dashboard');
    return <Menu {...args}>
        {['Dashboard', 'Projecten', 'Rapportages', 'Analyses', 'Instellingen'].map(text => <Menu.Link aria-current={current === text ? 'page' : undefined} className={text === 'Instellingen' ? 'hover' : undefined} href="#" icon={<SvgPieChartFill />} key={text} onClick={event => {
        event.preventDefault();
        setCurrent(text);
      }}>
            {text}
          </Menu.Link>)}
      </Menu>;
  },
  tags: ['!dev', '!autodocs', '!manifest']
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Test,g as __namedExportsOrder,m as default};