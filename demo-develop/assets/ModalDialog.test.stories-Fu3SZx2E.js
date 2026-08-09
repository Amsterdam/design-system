import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{K as n,L as r}from"./index.esm-Cf2AflXd.js";import{$ as i,B as a,C as o,O as s,_ as c,c as l,et as u,n as d,nt as f,p}from"./index.esm-BMdOkqhb.js";import{n as m,t as h}from"./ModalDialog-D90pN81W.js";import{a as g,o as _}from"./ModalDialog.stories-CYsfA0HG.js";var v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{f(),n(),m(),g(),v=t(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={..._,title:`Components/Containers/Modal Dialog`},S=e=>{e&&!e.open&&e.show()},C={position:`static`},w={...C,"--ams-modal-dialog-max-block-size":`12rem`,"--ams-modal-dialog-vi-medium-max-block-size":`12rem`},T=`Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken.`,E={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Open de interactietest`});await t.click(n);let r=e.getByTestId(`interaction-dialog`);await y(r).toBeVisible();let i=b(r).getByRole(`button`,{name:`Sluiten`});await y(i).toHaveFocus(),await t.click(i),await y(r).not.toBeVisible(),await y(n).toHaveFocus(),await t.click(n),await t.click(b(r).getByRole(`button`,{name:`Stoppen`})),await y(r).not.toBeVisible()},render:()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,v.jsxs)(h,{"aria-labelledby":`test-form-heading`,ref:S,style:C,children:[(0,v.jsx)(h.Header,{children:(0,v.jsx)(o,{id:`test-form-heading`,level:1,size:`level-2`,children:`Notitie toevoegen`})}),(0,v.jsx)(h.Body,{children:(0,v.jsx)(`form`,{method:`dialog`,children:(0,v.jsxs)(p,{gap:`small`,children:[(0,v.jsxs)(c,{children:[(0,v.jsx)(s,{htmlFor:`test-note-subject`,children:`Onderwerp`}),(0,v.jsx)(u,{id:`test-note-subject`})]}),(0,v.jsxs)(c,{children:[(0,v.jsx)(s,{htmlFor:`test-note-text`,children:`Notitie`}),(0,v.jsx)(i,{id:`test-note-text`,rows:3})]})]})})}),(0,v.jsx)(h.Footer,{children:(0,v.jsxs)(d,{children:[(0,v.jsx)(l,{children:`Opslaan`}),(0,v.jsx)(l,{variant:`secondary`,children:`Annuleren`})]})})]}),(0,v.jsxs)(h,{"aria-labelledby":`test-subtitle-heading`,ref:S,style:C,children:[(0,v.jsxs)(h.Header,{children:[(0,v.jsx)(o,{id:`test-subtitle-heading`,level:1,size:`level-2`,children:`Reactie versturen`}),(0,v.jsx)(a,{size:`small`,children:`Plan Nieuw-West, fase 2`})]}),(0,v.jsx)(h.Body,{children:(0,v.jsx)(a,{children:`Controleer uw gegevens voordat u uw reactie verstuurt.`})}),(0,v.jsx)(h.Footer,{children:(0,v.jsx)(l,{children:`Sluiten`})})]}),(0,v.jsxs)(h,{"aria-labelledby":`test-custom-icon-heading`,ref:S,style:C,children:[(0,v.jsx)(h.Header,{closeButtonIcon:r,children:(0,v.jsx)(o,{id:`test-custom-icon-heading`,level:1,size:`level-2`,children:`Melding versturen`})}),(0,v.jsx)(h.Body,{children:(0,v.jsx)(a,{children:`Wij nemen uw melding binnen één werkdag in behandeling.`})})]}),(0,v.jsxs)(h,{"aria-labelledby":`test-long-heading-heading`,ref:S,style:{...C,maxInlineSize:`24rem`},children:[(0,v.jsx)(h.Header,{children:(0,v.jsx)(o,{id:`test-long-heading-heading`,level:1,size:`level-2`,children:`Een lange kop die over meerdere regels doorloopt naast de sluitknop`})}),(0,v.jsx)(h.Body,{children:(0,v.jsx)(a,{children:`De sluitknop hoort naast de eerste regel van de kop te staan.`})})]}),(0,v.jsxs)(h,{"aria-labelledby":`test-short-window-heading`,ref:S,style:w,children:[(0,v.jsx)(h.Header,{children:(0,v.jsx)(o,{id:`test-short-window-heading`,level:1,size:`level-2`,children:`Een dialoogvenster in een verticaal krap venster`})}),(0,v.jsx)(h.Body,{children:(0,v.jsx)(a,{children:T})}),(0,v.jsx)(h.Footer,{children:(0,v.jsx)(l,{children:`Sluiten`})})]})]}),(0,v.jsx)(l,{onClick:()=>h.open(`#test-interactions`),children:`Open de interactietest`}),(0,v.jsxs)(h,{"aria-labelledby":`test-interactions-heading`,"data-testid":`interaction-dialog`,id:`test-interactions`,children:[(0,v.jsx)(h.Header,{children:(0,v.jsx)(o,{id:`test-interactions-heading`,level:1,size:`level-2`,children:`De gegevens zijn opgeslagen`})}),(0,v.jsx)(h.Body,{children:(0,v.jsx)(a,{children:`U ontvangt een bevestiging per e-mail.`})}),(0,v.jsx)(h.Footer,{children:(0,v.jsx)(l,{onClick:h.close,children:`Stoppen`})})]})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const openButton = canvas.getByRole('button', {
      name: 'Open de interactietest'
    });

    // Opens as a modal, with initial focus on the close button
    await userEvent.click(openButton);
    const dialog = canvas.getByTestId('interaction-dialog');
    await expect(dialog).toBeVisible();
    const closeButton = within(dialog).getByRole('button', {
      name: 'Sluiten'
    });
    await expect(closeButton).toHaveFocus();

    // The close button closes the dialog and returns focus to the trigger
    await userEvent.click(closeButton);
    await expect(dialog).not.toBeVisible();
    await expect(openButton).toHaveFocus();

    // A button in the footer can close the dialog through ModalDialog.close
    await userEvent.click(openButton);
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Stoppen'
    }));
    await expect(dialog).not.toBeVisible();
  },
  render: () => <>
      <div className="_ams-tests-stack">
        <ModalDialog aria-labelledby="test-form-heading" ref={showNonModally} style={inFlow}>
          <ModalDialog.Header>
            <Heading id="test-form-heading" level={1} size="level-2">
              Notitie toevoegen
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <form method="dialog">
              <Column gap="small">
                <Field>
                  <Label htmlFor="test-note-subject">Onderwerp</Label>
                  <TextInput id="test-note-subject" />
                </Field>
                <Field>
                  <Label htmlFor="test-note-text">Notitie</Label>
                  <TextArea id="test-note-text" rows={3} />
                </Field>
              </Column>
            </form>
          </ModalDialog.Body>
          <ModalDialog.Footer>
            <ActionGroup>
              <Button>Opslaan</Button>
              <Button variant="secondary">Annuleren</Button>
            </ActionGroup>
          </ModalDialog.Footer>
        </ModalDialog>
        <ModalDialog aria-labelledby="test-subtitle-heading" ref={showNonModally} style={inFlow}>
          <ModalDialog.Header>
            <Heading id="test-subtitle-heading" level={1} size="level-2">
              Reactie versturen
            </Heading>
            <Paragraph size="small">Plan Nieuw-West, fase 2</Paragraph>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <Paragraph>Controleer uw gegevens voordat u uw reactie verstuurt.</Paragraph>
          </ModalDialog.Body>
          <ModalDialog.Footer>
            <Button>Sluiten</Button>
          </ModalDialog.Footer>
        </ModalDialog>
        <ModalDialog aria-labelledby="test-custom-icon-heading" ref={showNonModally} style={inFlow}>
          <ModalDialog.Header closeButtonIcon={SaintAndrewsCrossesIcon}>
            <Heading id="test-custom-icon-heading" level={1} size="level-2">
              Melding versturen
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <Paragraph>Wij nemen uw melding binnen één werkdag in behandeling.</Paragraph>
          </ModalDialog.Body>
        </ModalDialog>
        <ModalDialog aria-labelledby="test-long-heading-heading" ref={showNonModally} style={{
        ...inFlow,
        maxInlineSize: '24rem'
      }}>
          <ModalDialog.Header>
            <Heading id="test-long-heading-heading" level={1} size="level-2">
              Een lange kop die over meerdere regels doorloopt naast de sluitknop
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <Paragraph>De sluitknop hoort naast de eerste regel van de kop te staan.</Paragraph>
          </ModalDialog.Body>
        </ModalDialog>
        <ModalDialog aria-labelledby="test-short-window-heading" ref={showNonModally} style={shortWindow}>
          <ModalDialog.Header>
            <Heading id="test-short-window-heading" level={1} size="level-2">
              Een dialoogvenster in een verticaal krap venster
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <Paragraph>{longText}</Paragraph>
          </ModalDialog.Body>
          <ModalDialog.Footer>
            <Button>Sluiten</Button>
          </ModalDialog.Footer>
        </ModalDialog>
      </div>
      <Button onClick={() => ModalDialog.open('#test-interactions')}>Open de interactietest</Button>
      <ModalDialog aria-labelledby="test-interactions-heading" data-testid="interaction-dialog" id="test-interactions">
        <ModalDialog.Header>
          <Heading id="test-interactions-heading" level={1} size="level-2">
            De gegevens zijn opgeslagen
          </Heading>
        </ModalDialog.Header>
        <ModalDialog.Body>
          <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <Button onClick={ModalDialog.close}>Stoppen</Button>
        </ModalDialog.Footer>
      </ModalDialog>
    </>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...E.parameters?.docs?.source}}},D=[`Test`]})))()}O();export{E as Test,D as __namedExportsOrder,x as default};