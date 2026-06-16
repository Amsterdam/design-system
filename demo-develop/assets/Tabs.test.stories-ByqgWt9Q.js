import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{n,t as r}from"./renderComponentVariants-DA80I9La.js";import{t as i,u as a}from"./src-CcyD44uP.js";import o,{n as s}from"./Tabs.stories-Cu6DW9UY.js";var c,l,u,d,f;e((()=>{i(),r(),s(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={...o,title:`Components/Containers/Tabs`},d={args:{activeTab:`Gegevens`,children:[(0,c.jsxs)(a.List,{children:[(0,c.jsx)(a.Button,{"aria-controls":`Gegevens`,"data-testid":`gegevens`,children:`Gegevens`}),(0,c.jsx)(a.Button,{"aria-controls":`Aanslagen`,"data-testid":`aanslagen`,children:`Aanslagen`}),(0,c.jsx)(a.Button,{"aria-controls":`Acties`,children:`Acties`})]},1),(0,c.jsx)(a.Panel,{id:`Gegevens`,children:(0,c.jsx)(`p`,{"data-testid":`gegevens-panel`,children:`Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 6 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken.`})},2),(0,c.jsx)(a.Panel,{id:`Aanslagen`,children:(0,c.jsx)(`p`,{"data-testid":`aanslagen-panel`,children:`Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we de stad beter schoonhouden. Wat vinden Amsterdammers belangrijk? Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren.`})},3),(0,c.jsx)(a.Panel,{id:`Acties`,children:(0,c.jsx)(`p`,{children:`Afgelopen maand konden bewoners hun reactie op de plannen geven tijdens informatiebijeenkomsten. Online kunt u tot en met 31 oktober reageren via amsterdam.nl/oranjeloper. Daar vindt u ook een overzicht van alle werkzaamheden die op de planning staan. En u kunt zich inschrijven voor de digitale nieuwsbrief.`})},4)]},play:async({canvas:e,userEvent:t})=>{await new Promise(e=>setTimeout(e,500));let n=e.getByTestId(`gegevens-panel`),r=e.getByTestId(`aanslagen`);await l(n).toBeVisible(),await t.click(r),await new Promise(e=>setTimeout(e,500)),await l(e.getByTestId(`aanslagen-panel`)).toBeVisible(),await l(n).not.toBeVisible()},render:(e,t)=>n(a,{args:e},t),tags:[`!dev`,`!autodocs`]},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    activeTab: 'Gegevens',
    children: [<Tabs.List key={1}>
        <Tabs.Button aria-controls="Gegevens" data-testid="gegevens">
          Gegevens
        </Tabs.Button>
        <Tabs.Button aria-controls="Aanslagen" data-testid="aanslagen">
          Aanslagen
        </Tabs.Button>
        <Tabs.Button aria-controls="Acties">Acties</Tabs.Button>
      </Tabs.List>, <Tabs.Panel id="Gegevens" key={2}>
        <p data-testid="gegevens-panel">
          Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
          bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
          in de bijstand beginnen met werken en binnen 6 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
          meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
          makkelijker om weer een nieuwe baan te zoeken.
        </p>
      </Tabs.Panel>, <Tabs.Panel id="Aanslagen" key={3}>
        <p data-testid="aanslagen-panel">
          Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe
          we de stad beter schoonhouden. Wat vinden Amsterdammers belangrijk? Welke oplossingen zien zij? Hier zijn we
          benieuwd naar. Want elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze
          afvalexperts leren.
        </p>
      </Tabs.Panel>, <Tabs.Panel id="Acties" key={4}>
        <p>
          Afgelopen maand konden bewoners hun reactie op de plannen geven tijdens informatiebijeenkomsten. Online kunt u
          tot en met 31 oktober reageren via amsterdam.nl/oranjeloper. Daar vindt u ook een overzicht van alle
          werkzaamheden die op de planning staan. En u kunt zich inschrijven voor de digitale nieuwsbrief.
        </p>
      </Tabs.Panel>]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await new Promise(resolve => setTimeout(resolve, 500)); // This delay is required to finish the first tab opening

    const gegevensParagraph = canvas.getByTestId('gegevens-panel');
    const aanslagenTab = canvas.getByTestId('aanslagen');
    await expect(gegevensParagraph).toBeVisible();
    await userEvent.click(aanslagenTab);
    await new Promise(resolve => setTimeout(resolve, 500)); // This delay is required to finish the second tab opening
    await expect(canvas.getByTestId('aanslagen-panel')).toBeVisible();
    await expect(gegevensParagraph).not.toBeVisible();
  },
  render: (args, context) => renderComponentVariants(Tabs, {
    args
  }, context),
  tags: ['!dev', '!autodocs']
}`,...d.parameters?.docs?.source}}},f=[`Test`]}))();export{d as Test,f as __namedExportsOrder,u as default};