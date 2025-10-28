import{j as e}from"./iframe-DLo72SoR.js";import{m as c,A as d}from"./Accordion.stories-Dwls8S43.js";import"./preload-helper-PPVm8Dsz.js";import"./exampleContent-DRope23M.js";import"./useKeyboardFocus-abfWH8iU.js";import"./Icon-ugyQ9keY.js";import"./Heading-DVUUpeY6.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,b={...c,title:"Components/Containers/Accordion"},t={args:{children:[e.jsx(d.Section,{expanded:!0,label:"Dit grofvuil halen we niet op",children:e.jsx("p",{"data-testid":"expanded-paragraph",children:"Na een flink aantal jaren zijn alle laaghangende takken weg, zodat de boom geen hinder meer geeft. Daarom zie je in het onderste deel van een stadsboom meestal geen zijtakken. Ook halen we takken weg die dood of zwak zijn. Zij kunnen afbreken en dat kan gevaarlijk zijn."})},1),e.jsx(d.Section,{"data-testid":"test-label",label:"Verhuizing doorgeven bij het stadsloket",children:e.jsx("p",{"data-testid":"test-paragraph",children:"Na een flink aantal jaren zijn alle laaghangende takken weg, zodat de boom geen hinder meer geeft. Daarom zie je in het onderste deel van een stadsboom meestal geen zijtakken. Ook halen we takken weg die dood of zwak zijn. Zij kunnen afbreken en dat kan gevaarlijk zijn."})},2)]},play:async({canvas:n,userEvent:r})=>{const s=n.getByTestId("test-label"),o=n.getByTestId("test-paragraph"),i=s.querySelector("button");i&&(await a(n.getByTestId("expanded-paragraph")).toBeVisible(),await a(o).not.toBeVisible(),await r.click(i),await a(o).toBeVisible(),await r.click(i),await a(o).not.toBeVisible())},tags:["!dev","!autodocs"]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section expanded key={1} label="Dit grofvuil halen we niet op">
        <p data-testid="expanded-paragraph">
          Na een flink aantal jaren zijn alle laaghangende takken weg, zodat de boom geen hinder meer geeft. Daarom zie
          je in het onderste deel van een stadsboom meestal geen zijtakken. Ook halen we takken weg die dood of zwak
          zijn. Zij kunnen afbreken en dat kan gevaarlijk zijn.
        </p>
      </Accordion.Section>, <Accordion.Section data-testid="test-label" key={2} label="Verhuizing doorgeven bij het stadsloket">
        <p data-testid="test-paragraph">
          Na een flink aantal jaren zijn alle laaghangende takken weg, zodat de boom geen hinder meer geeft. Daarom zie
          je in het onderste deel van een stadsboom meestal geen zijtakken. Ook halen we takken weg die dood of zwak
          zijn. Zij kunnen afbreken en dat kan gevaarlijk zijn.
        </p>
      </Accordion.Section>]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const accordionLabel = canvas.getByTestId('test-label');
    const accordionParagraph = canvas.getByTestId('test-paragraph');
    const accordionButton = accordionLabel.querySelector('button');
    if (!accordionButton) return;
    await expect(canvas.getByTestId('expanded-paragraph')).toBeVisible();
    await expect(accordionParagraph).not.toBeVisible();
    await userEvent.click(accordionButton);
    await expect(accordionParagraph).toBeVisible();
    await userEvent.click(accordionButton);
    await expect(accordionParagraph).not.toBeVisible();
  },
  tags: ['!dev', '!autodocs']
}`,...t.parameters?.docs?.source}}};const w=["Test"];export{t as Test,w as __namedExportsOrder,b as default};
