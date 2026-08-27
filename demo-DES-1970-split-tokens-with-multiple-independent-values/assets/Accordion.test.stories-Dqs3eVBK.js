import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./renderComponentVariants-DzTmsj85.js";import{n as i,t as a}from"./Accordion-CbnjfYaL.js";import{a as o,i as s}from"./Accordion.stories-DpehhrV6.js";import{n as c,t as l}from"./disablePageLevelChecks-57VwoK5W.js";var u,d,f,p,m;function h(){return(h=e((()=>{i(),c(),r(),s(),u=t(),{expect:d}=__STORYBOOK_MODULE_TEST__,f={...o,title:`Components/Containers/Accordion`},p={args:{children:[(0,u.jsx)(a.Section,{label:`Verhuizing doorgeven bij stadsloket`,children:(0,u.jsx)(`p`,{children:`Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken.`})},1),(0,u.jsx)(a.Section,{label:`Dit grof afval halen we niet op`,children:(0,u.jsx)(`p`,{children:`Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken.`})},2),(0,u.jsx)(a.Section,{label:`Verhuizing doorgeven per post`,children:(0,u.jsx)(`p`,{children:`Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt. Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.`})},3)]},parameters:l(`heading-order`),play:async({canvas:e,userEvent:t})=>{let n=e.getByTestId(`test-label`),r=e.getByTestId(`test-paragraph`),i=n.querySelector(`button`);i&&(await d(e.getByTestId(`expanded-paragraph`)).toBeVisible(),await d(r).not.toBeVisible(),await t.click(i),await d(r).toBeVisible(),await t.click(i),await d(r).not.toBeVisible())},render:(e,t)=>(0,u.jsxs)(u.Fragment,{children:[n(a,{args:e},t),(0,u.jsx)(a.Section,{defaultExpanded:!0,label:`Verhuizing doorgeven bij stadsloket`,children:(0,u.jsx)(`p`,{"data-testid":`expanded-paragraph`,children:`Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken.`})}),(0,u.jsx)(a.Section,{"data-testid":`test-label`,label:`Dit grof afval halen we niet op`,children:(0,u.jsx)(`p`,{"data-testid":`test-paragraph`,children:`Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken.`})}),(0,u.jsx)(a.Section,{label:`Verhuizing doorgeven per post`,children:(0,u.jsx)(`p`,{children:`Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt. Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.`})})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  parameters: disablePageLevelChecks('heading-order'),
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
  render: (args, context) => <>
      {renderComponentVariants(Accordion, {
      args
    }, context)}
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
  tags: ['!dev', '!autodocs', '!manifest']
}`,...p.parameters?.docs?.source}}},m=[`Test`]})))()}h();export{p as Test,m as __namedExportsOrder,f as default};