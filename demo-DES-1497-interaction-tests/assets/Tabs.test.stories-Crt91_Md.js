import{j as e}from"./iframe-Dw88OR9M.js";import{m as r,T as a}from"./Tabs.stories-CjHK6iTj.js";import"./preload-helper-PPVm8Dsz.js";import"./exampleContent-DRope23M.js";import"./useKeyboardFocus-abfWH8iU.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,p={...r,title:"Components/Containers/Tabs"},s={play:async({canvas:n,userEvent:i})=>{const o=n.getByTestId("gegevens-panel"),l=n.getByTestId("aanslagen");await t(o).toBeVisible(),await i.click(l),await t(n.getByTestId("aanslagen-panel")).toBeVisible(),await t(o).not.toBeVisible()},render:n=>e.jsxs(a,{...n,activeTab:"Gegevens",children:[e.jsxs(a.List,{children:[e.jsx(a.Button,{"aria-controls":"Gegevens","data-testid":"gegevens",onClick:()=>{},children:"Gegevens"}),e.jsx(a.Button,{"aria-controls":"Aanslagen","data-testid":"aanslagen",onClick:()=>{},children:"Aanslagen"})]}),e.jsxs(a.Panel,{id:"Gegevens",children:[e.jsx("h3",{className:"ams-mb-xs",children:"Gegevens"}),e.jsx("p",{"data-testid":"gegevens-panel",children:"Uw eigen buurt schoonhouden? U kunt meehelpen door alleen of samen met uw buren een afvalcontainer te adopteren. Bekijk hier hoe het werkt en hoe u zich aanmeldt als containeradoptant."})]}),e.jsxs(a.Panel,{id:"Aanslagen",children:[e.jsx("h3",{className:"ams-mb-xs",children:"Aanslagen"}),e.jsx("p",{"data-testid":"aanslagen-panel",children:"Na een flink aantal jaren zijn alle laaghangende takken weg, zodat de boom geen hinder meer geeft. Daarom zie je in het onderste deel van een stadsboom meestal geen zijtakken. Ook halen we takken weg die dood of zwak zijn. Zij kunnen afbreken en dat kan gevaarlijk zijn."})]})]}),tags:["!dev","!autodocs"]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const gegevensParagraph = canvas.getByTestId('gegevens-panel');
    const aanslagenTab = canvas.getByTestId('aanslagen');
    await expect(gegevensParagraph).toBeVisible();
    await userEvent.click(aanslagenTab);
    await expect(canvas.getByTestId('aanslagen-panel')).toBeVisible();
    await expect(gegevensParagraph).not.toBeVisible();
  },
  render: args => <Tabs {...args} activeTab="Gegevens">
      <Tabs.List>
        <Tabs.Button aria-controls="Gegevens" data-testid="gegevens" onClick={() => {}}>
          Gegevens
        </Tabs.Button>
        <Tabs.Button aria-controls="Aanslagen" data-testid="aanslagen" onClick={() => {}}>
          Aanslagen
        </Tabs.Button>
      </Tabs.List>
      <Tabs.Panel id="Gegevens">
        <h3 className="ams-mb-xs">Gegevens</h3>
        <p data-testid="gegevens-panel">
          Uw eigen buurt schoonhouden? U kunt meehelpen door alleen of samen met uw buren een afvalcontainer te
          adopteren. Bekijk hier hoe het werkt en hoe u zich aanmeldt als containeradoptant.
        </p>
      </Tabs.Panel>
      <Tabs.Panel id="Aanslagen">
        <h3 className="ams-mb-xs">Aanslagen</h3>
        <p data-testid="aanslagen-panel">
          Na een flink aantal jaren zijn alle laaghangende takken weg, zodat de boom geen hinder meer geeft. Daarom zie
          je in het onderste deel van een stadsboom meestal geen zijtakken. Ook halen we takken weg die dood of zwak
          zijn. Zij kunnen afbreken en dat kan gevaarlijk zijn.
        </p>
      </Tabs.Panel>
    </Tabs>,
  tags: ['!dev', '!autodocs']
}`,...s.parameters?.docs?.source}}};const k=["Test"];export{s as Test,k as __namedExportsOrder,p as default};
