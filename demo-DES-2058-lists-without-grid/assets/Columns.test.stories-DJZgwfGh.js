import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-BG4KOiPz.js";import{A as n,nt as r}from"./index.esm-CKI6qKba.js";import{a as i,i as a,o,s}from"./Columns.stories-BNCetsOK.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),s(),a(),c=t(),{expect:l,within:u}=__STORYBOOK_MODULE_TEST__,d={...i,title:`Components/Layout/Columns`},f=[`Afval`,`Bestuur en organisatie`,`Atletiekgebouw met ruimte voor vergaderen, wedstrijdsecretariaat, 2 kleedkamers, invalidentoilet en ruimte voor scheidsrechters en EHBO`,`Burgerzaken`,`Leefomgeving`,`Multifunctioneel verenigingsgebouw met 8 kleedkamers en sportkantine`,`Ondernemen`,`Parkeren`,`Wonen, bouwen en verbouwen`],p={args:{children:(0,c.jsx)(`ul`,{children:f.map(e=>(0,c.jsx)(`li`,{children:e},e))})},play:async({canvas:e,canvasElement:t,step:n})=>{await n(`Columns: keep link list items aligned and unbroken`,async()=>{await t.ownerDocument.fonts.ready;let n=u(e.getAllByRole(`list`)[1]),r=n.getAllByRole(`listitem`),i=n.getAllByRole(`link`),a=r.map(e=>e.getBoundingClientRect()),o=a[0].top;for(let[e,t]of a.entries()){(e===0||Math.abs(t.left-a[e-1].left)>1)&&await l(Math.abs(t.top-o)).toBeLessThan(1);let n=i[e].getBoundingClientRect();await l(n.top).toBeGreaterThanOrEqual(t.top),await l(n.bottom).toBeLessThanOrEqual(t.bottom)}})},render:e=>(0,c.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,c.jsx)(o,{...e}),(0,c.jsx)(o,{children:(0,c.jsx)(n,{children:f.map(e=>(0,c.jsx)(n.Link,{href:`#`,children:e},e))})})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},m=[`Test`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
  },
  play: async ({
    canvas,
    canvasElement,
    step
  }) => {
    await step('Columns: keep link list items aligned and unbroken', async () => {
      await canvasElement.ownerDocument.fonts.ready;
      const linkList = within(canvas.getAllByRole('list')[1]);
      const items = linkList.getAllByRole('listitem');
      const links = linkList.getAllByRole('link');
      const rects = items.map(item => item.getBoundingClientRect());
      const firstTop = rects[0].top;
      for (const [index, rect] of rects.entries()) {
        if (index === 0 || Math.abs(rect.left - rects[index - 1].left) > 1) {
          await expect(Math.abs(rect.top - firstTop)).toBeLessThan(1);
        }
        const linkRect = links[index].getBoundingClientRect();
        await expect(linkRect.top).toBeGreaterThanOrEqual(rect.top);
        await expect(linkRect.bottom).toBeLessThanOrEqual(rect.bottom);
      }
    });
  },
  render: args => <div className="_ams-tests-stack">
      <Columns {...args} />
      <Columns>
        <LinkList>
          {items.map(item => <LinkList.Link href="#" key={item}>
              {item}
            </LinkList.Link>)}
        </LinkList>
      </Columns>
    </div>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Test,m as __namedExportsOrder,d as default};