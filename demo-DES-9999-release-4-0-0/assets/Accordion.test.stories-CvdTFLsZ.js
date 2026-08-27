import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{n,t as r}from"./renderComponentVariants-Cw-cAc72.js";import{Et as i,t as a}from"./src-AENCvQTW.js";import o,{n as s}from"./Accordion.stories-Dg8UZwlo.js";var c,l,u,d,f;e((()=>{a(),r(),s(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={...o,title:`Components/Containers/Accordion`},d={args:{children:[(0,c.jsx)(i.Section,{label:`Verhuizing doorgeven bij stadsloket`,children:(0,c.jsx)(`p`,{children:`Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken.`})},1),(0,c.jsx)(i.Section,{label:`Dit grof afval halen we niet op`,children:(0,c.jsx)(`p`,{children:`Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken.`})},2),(0,c.jsx)(i.Section,{label:`Verhuizing doorgeven per post`,children:(0,c.jsx)(`p`,{children:`Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt. Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.`})},3)]},play:async({canvas:e,userEvent:t})=>{let n=e.getByTestId(`test-label`),r=e.getByTestId(`test-paragraph`),i=n.querySelector(`button`);i&&(await l(e.getByTestId(`expanded-paragraph`)).toBeVisible(),await l(r).not.toBeVisible(),await t.click(i),await l(r).toBeVisible(),await t.click(i),await l(r).not.toBeVisible())},render:e=>(0,c.jsxs)(c.Fragment,{children:[n(i,{args:e}),(0,c.jsx)(i.Section,{defaultExpanded:!0,label:`Verhuizing doorgeven bij stadsloket`,children:(0,c.jsx)(`p`,{"data-testid":`expanded-paragraph`,children:`Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken.`})}),(0,c.jsx)(i.Section,{"data-testid":`test-label`,label:`Dit grof afval halen we niet op`,children:(0,c.jsx)(`p`,{"data-testid":`test-paragraph`,children:`Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken.`})}),(0,c.jsx)(i.Section,{label:`Verhuizing doorgeven per post`,children:(0,c.jsx)(`p`,{children:`Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt. Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.`})})]}),tags:[`!dev`,`!autodocs`]},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      <Accordion.Section defaultExpanded label="Verhuizing doorgeven bij stadsloket">
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
}`,...d.parameters?.docs?.source}}},f=[`Test`]}))();export{d as Test,f as __namedExportsOrder,u as default};