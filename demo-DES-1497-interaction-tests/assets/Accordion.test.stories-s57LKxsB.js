import{j as e}from"./iframe-D1_3ryCH.js";import{r as l}from"./renderComponentVariants-ocW3XWB3.js";import{m as c,A as a}from"./Accordion.stories-CKlwSEG9.js";import"./preload-helper-PPVm8Dsz.js";import"./ChevronDown-BSG9mY9T.js";import"./exampleContent-DRope23M.js";import"./useKeyboardFocus-abfWH8iU.js";import"./Icon-D2X8MQVb.js";import"./Heading-BlZeCySG.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,z={...c,title:"Components/Containers/Accordion"},i={play:async({canvas:n,userEvent:d})=>{const s=n.getByTestId("test-label"),r=n.getByTestId("test-paragraph"),o=s.querySelector("button");o&&(await t(n.getByTestId("expanded-paragraph")).toBeVisible(),await t(r).not.toBeVisible(),await d.click(o),await t(r).toBeVisible(),await d.click(o),await t(r).not.toBeVisible())},render:n=>l(a,{args:n,children:[e.jsx(a.Section,{label:"Verhuizing doorgeven bij stadsloket",children:e.jsx("p",{"data-testid":"expanded-paragraph",children:"Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken."})},1),e.jsx(a.Section,{"data-testid":"test-label",label:"Dit grof afval halen we niet op",children:e.jsx("p",{"data-testid":"test-paragraph",children:"Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken."})},2),e.jsx(a.Section,{label:"Verhuizing doorgeven per post",children:e.jsx("p",{children:"Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt. Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging."})},3)]}),tags:["!dev","!autodocs"]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  render: args => renderComponentVariants(Accordion, {
    args,
    children: [<Accordion.Section key={1} label="Verhuizing doorgeven bij stadsloket">
          <p data-testid="expanded-paragraph">
            Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
            bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
            in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
            meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
            makkelijker om weer een nieuwe baan te zoeken.
          </p>
        </Accordion.Section>, <Accordion.Section data-testid="test-label" key={2} label="Dit grof afval halen we niet op">
          <p data-testid="test-paragraph">
            Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
            bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
            in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
            meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
            makkelijker om weer een nieuwe baan te zoeken.
          </p>
        </Accordion.Section>, <Accordion.Section key={3} label="Verhuizing doorgeven per post">
          <p>
            Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig
            hebt. Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of
            vooraankondiging.
          </p>
        </Accordion.Section>]
  }),
  tags: ['!dev', '!autodocs']
}`,...i.parameters?.docs?.source}}};const v=["Test"];export{i as Test,v as __namedExportsOrder,z as default};
