import{j as e}from"./iframe-C4lVwqoF.js";import{r as l}from"./renderComponentVariants-B3X9H_yS.js";import{m as g,A as n}from"./Accordion.stories-27y-jDJn.js";import"./preload-helper-PPVm8Dsz.js";import"./exampleContent-DRope23M.js";import"./useKeyboardFocus-abfWH8iU.js";import"./Icon-B_E87fKz.js";import"./Heading-C7B1ifHv.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,h={...g,title:"Components/Containers/Accordion"},t={args:{children:[e.jsx(n.Section,{label:"Verhuizing doorgeven bij stadsloket",children:e.jsx("p",{children:"Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken."})},1),e.jsx(n.Section,{label:"Dit grof afval halen we niet op",children:e.jsx("p",{children:"Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken."})},2),e.jsx(n.Section,{label:"Verhuizing doorgeven per post",children:e.jsx("p",{children:"Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt. Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging."})},3)]},play:async({canvas:a,userEvent:d})=>{const s=a.getByTestId("test-label"),r=a.getByTestId("test-paragraph"),o=s.querySelector("button");o&&(await i(a.getByTestId("expanded-paragraph")).toBeVisible(),await i(r).not.toBeVisible(),await d.click(o),await i(r).toBeVisible(),await d.click(o),await i(r).not.toBeVisible())},render:a=>e.jsxs(e.Fragment,{children:[l(n,{args:a}),e.jsx(n.Section,{expanded:!0,label:"Verhuizing doorgeven bij stadsloket",children:e.jsx("p",{"data-testid":"expanded-paragraph",children:"Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken."})}),e.jsx(n.Section,{"data-testid":"test-label",label:"Dit grof afval halen we niet op",children:e.jsx("p",{"data-testid":"test-paragraph",children:"Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken."})}),e.jsx(n.Section,{label:"Verhuizing doorgeven per post",children:e.jsx("p",{children:"Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt. Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging."})})]}),tags:["!dev","!autodocs"]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Verhuizing doorgeven bij stadsloket">
        <p>
          Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
          bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
          in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
          meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
          makkelijker om weer een nieuwe baan te zoeken.
        </p>
      </Accordion.Section>, <Accordion.Section key={2} label="Dit grof afval halen we niet op">
        <p>
          Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
          bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
          in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
          meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
          makkelijker om weer een nieuwe baan te zoeken.
        </p>
      </Accordion.Section>, <Accordion.Section key={3} label="Verhuizing doorgeven per post">
        <p>
          Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt.
          Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.
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
  render: args => <>
      {renderComponentVariants(Accordion, {
      args
    })}
      <Accordion.Section expanded label="Verhuizing doorgeven bij stadsloket">
        <p data-testid="expanded-paragraph">
          Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
          bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
          in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
          meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
          makkelijker om weer een nieuwe baan te zoeken.
        </p>
      </Accordion.Section>
      <Accordion.Section data-testid="test-label" label="Dit grof afval halen we niet op">
        <p data-testid="test-paragraph">
          Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
          bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
          in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
          meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
          makkelijker om weer een nieuwe baan te zoeken.
        </p>
      </Accordion.Section>
      <Accordion.Section label="Verhuizing doorgeven per post">
        <p>
          Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt.
          Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.
        </p>
      </Accordion.Section>
    </>,
  tags: ['!dev', '!autodocs']
}`,...t.parameters?.docs?.source}}};const w=["Test"];export{t as Test,w as __namedExportsOrder,h as default};
