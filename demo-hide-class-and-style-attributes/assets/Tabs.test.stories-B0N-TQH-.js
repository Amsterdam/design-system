import{j as e}from"./iframe-Jo_Sz6SA.js";import{r as l}from"./renderComponentVariants-pJalrWpL.js";import{m as g,T as n}from"./Tabs.stories-BNBiAbSv.js";import"./preload-helper-PPVm8Dsz.js";import"./exampleContent-DRope23M.js";import"./useKeyboardFocus-abfWH8iU.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,u={...g,title:"Components/Containers/Tabs"},t={args:{activeTab:"Gegevens",children:[e.jsxs(n.List,{children:[e.jsx(n.Button,{"aria-controls":"Gegevens","data-testid":"gegevens",children:"Gegevens"}),e.jsx(n.Button,{"aria-controls":"Aanslagen","data-testid":"aanslagen",children:"Aanslagen"}),e.jsx(n.Button,{"aria-controls":"Acties",children:"Acties"})]},1),e.jsx(n.Panel,{id:"Gegevens",children:e.jsx("p",{"data-testid":"gegevens-panel",children:"Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 6 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken."})},2),e.jsx(n.Panel,{id:"Aanslagen",children:e.jsx("p",{"data-testid":"aanslagen-panel",children:"Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we de stad beter schoonhouden. Wat vinden Amsterdammers belangrijk? Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren."})},3),e.jsx(n.Panel,{id:"Acties",children:e.jsx("p",{children:"Afgelopen maand konden bewoners hun reactie op de plannen geven tijdens informatiebijeenkomsten. Online kunt u tot en met 31 oktober reageren via amsterdam.nl/oranjeloper. Daar vindt u ook een overzicht van alle werkzaamheden die op de planning staan. En u kunt zich inschrijven voor de digitale nieuwsbrief."})},4)]},play:async({canvas:a,userEvent:o})=>{await new Promise(s=>setTimeout(s,500));const r=a.getByTestId("gegevens-panel"),d=a.getByTestId("aanslagen");await i(r).toBeVisible(),await o.click(d),await new Promise(s=>setTimeout(s,500)),await i(a.getByTestId("aanslagen-panel")).toBeVisible(),await i(r).not.toBeVisible()},render:a=>l(n,{args:a}),tags:["!dev","!autodocs"]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  render: args => renderComponentVariants(Tabs, {
    args
  }),
  tags: ['!dev', '!autodocs']
}`,...t.parameters?.docs?.source}}};const h=["Test"];export{t as Test,h as __namedExportsOrder,u as default};
