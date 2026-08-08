import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{B as n,C as r,c as i,n as a,nt as o}from"./index.esm-M2z_2xS7.js";import{n as s,t as c}from"./AlertDialog-B3EPTsQ0.js";import{o as l,s as u}from"./AlertDialog.stories-mz94aonZ.js";var d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{o(),s(),l(),d=t(),{expect:f,within:p}=__STORYBOOK_MODULE_TEST__,m={...u,title:`Components/Containers/Alert Dialog`},h=e=>{e&&!e.open&&e.show()},g={position:`static`},_={...g,"--ams-alert-dialog-max-block-size":`12rem`,"--ams-alert-dialog-vi-medium-max-block-size":`12rem`},v=`Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken.`,y={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Open de interactietest`});await t.click(n);let r=e.getByTestId(`interaction-dialog`);await f(r).toBeVisible();let i=p(r).getByRole(`button`,{name:`Opnieuw inloggen`});await f(i).toHaveFocus(),await t.click(i),await f(r).not.toBeVisible(),await f(n).toHaveFocus()},render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,d.jsxs)(c,{"aria-labelledby":`test-default-heading`,ref:h,style:g,children:[(0,d.jsx)(c.Header,{children:(0,d.jsx)(r,{id:`test-default-heading`,level:1,size:`level-3`,children:`Uw sessie is verlopen`})}),(0,d.jsx)(c.Body,{children:(0,d.jsx)(n,{children:`Log opnieuw in om verder te gaan.`})}),(0,d.jsx)(c.Footer,{children:(0,d.jsx)(i,{children:`Opnieuw inloggen`})})]}),(0,d.jsxs)(c,{"aria-labelledby":`test-warning-heading`,ref:h,style:g,children:[(0,d.jsx)(c.Header,{severity:`warning`,children:(0,d.jsx)(r,{id:`test-warning-heading`,level:1,size:`level-3`,children:`Er zijn niet-opgeslagen wijzigingen`})}),(0,d.jsx)(c.Body,{children:(0,d.jsx)(n,{children:`Als u doorgaat, gaan uw wijzigingen verloren.`})}),(0,d.jsx)(c.Footer,{children:(0,d.jsxs)(a,{children:[(0,d.jsx)(i,{children:`Opslaan`}),(0,d.jsx)(i,{variant:`secondary`,children:`Doorgaan zonder opslaan`})]})})]}),(0,d.jsxs)(c,{"aria-labelledby":`test-error-heading`,ref:h,style:g,children:[(0,d.jsx)(c.Header,{severity:`error`,children:(0,d.jsx)(r,{id:`test-error-heading`,level:1,size:`level-3`,children:`Het bestand kon niet worden geüpload`})}),(0,d.jsx)(c.Body,{children:(0,d.jsx)(n,{children:`Probeer het later opnieuw.`})}),(0,d.jsx)(c.Footer,{children:(0,d.jsx)(i,{children:`Oké`})})]}),(0,d.jsxs)(c,{"aria-labelledby":`test-success-heading`,ref:h,style:g,children:[(0,d.jsx)(c.Header,{severity:`success`,children:(0,d.jsx)(r,{id:`test-success-heading`,level:1,size:`level-3`,children:`Uw aanvraag is verstuurd`})}),(0,d.jsx)(c.Body,{children:(0,d.jsx)(n,{children:`U ontvangt een bevestiging per e-mail.`})}),(0,d.jsx)(c.Footer,{children:(0,d.jsx)(i,{children:`Oké`})})]}),(0,d.jsxs)(c,{"aria-labelledby":`test-long-heading-heading`,ref:h,style:{...g,maxInlineSize:`24rem`},children:[(0,d.jsx)(c.Header,{severity:`warning`,children:(0,d.jsx)(r,{id:`test-long-heading-heading`,level:1,size:`level-3`,children:`Een lange kop die over meerdere regels doorloopt naast het pictogram`})}),(0,d.jsx)(c.Body,{children:(0,d.jsx)(n,{children:`Het pictogram hoort naast de eerste regel van de kop te staan.`})}),(0,d.jsx)(c.Footer,{children:(0,d.jsx)(i,{children:`Oké`})})]}),(0,d.jsxs)(c,{"aria-labelledby":`test-short-window-heading`,ref:h,style:_,children:[(0,d.jsx)(c.Header,{children:(0,d.jsx)(r,{id:`test-short-window-heading`,level:1,size:`level-3`,children:`Een dialoogvenster in een verticaal krap venster`})}),(0,d.jsx)(c.Body,{children:(0,d.jsx)(n,{children:v})}),(0,d.jsx)(c.Footer,{children:(0,d.jsx)(i,{children:`Oké`})})]})]}),(0,d.jsx)(i,{onClick:()=>c.open(`#test-interactions`),children:`Open de interactietest`}),(0,d.jsxs)(c,{"aria-describedby":`test-interactions-body`,"aria-labelledby":`test-interactions-heading`,"data-testid":`interaction-dialog`,id:`test-interactions`,children:[(0,d.jsx)(c.Header,{children:(0,d.jsx)(r,{id:`test-interactions-heading`,level:1,size:`level-3`,children:`Uw sessie is verlopen`})}),(0,d.jsx)(c.Body,{children:(0,d.jsx)(n,{id:`test-interactions-body`,children:`Log opnieuw in om verder te gaan.`})}),(0,d.jsx)(c.Footer,{children:(0,d.jsx)(i,{onClick:c.close,children:`Opnieuw inloggen`})})]})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const openButton = canvas.getByRole('button', {
      name: 'Open de interactietest'
    });

    // Opens as a modal, with initial focus on the first action button (there is no close button)
    await userEvent.click(openButton);
    const dialog = canvas.getByTestId('interaction-dialog');
    await expect(dialog).toBeVisible();
    const confirmButton = within(dialog).getByRole('button', {
      name: 'Opnieuw inloggen'
    });
    await expect(confirmButton).toHaveFocus();

    // An action in the footer closes the dialog through AlertDialog.close and returns focus to the trigger
    await userEvent.click(confirmButton);
    await expect(dialog).not.toBeVisible();
    await expect(openButton).toHaveFocus();
  },
  render: () => <>
      <div className="_ams-tests-stack">
        <AlertDialog aria-labelledby="test-default-heading" ref={showNonModally} style={inFlow}>
          <AlertDialog.Header>
            <Heading id="test-default-heading" level={1} size="level-3">
              Uw sessie is verlopen
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph>Log opnieuw in om verder te gaan.</Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button>Opnieuw inloggen</Button>
          </AlertDialog.Footer>
        </AlertDialog>
        <AlertDialog aria-labelledby="test-warning-heading" ref={showNonModally} style={inFlow}>
          <AlertDialog.Header severity="warning">
            <Heading id="test-warning-heading" level={1} size="level-3">
              Er zijn niet-opgeslagen wijzigingen
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph>Als u doorgaat, gaan uw wijzigingen verloren.</Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <ActionGroup>
              <Button>Opslaan</Button>
              <Button variant="secondary">Doorgaan zonder opslaan</Button>
            </ActionGroup>
          </AlertDialog.Footer>
        </AlertDialog>
        <AlertDialog aria-labelledby="test-error-heading" ref={showNonModally} style={inFlow}>
          <AlertDialog.Header severity="error">
            <Heading id="test-error-heading" level={1} size="level-3">
              Het bestand kon niet worden geüpload
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph>Probeer het later opnieuw.</Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button>Oké</Button>
          </AlertDialog.Footer>
        </AlertDialog>
        <AlertDialog aria-labelledby="test-success-heading" ref={showNonModally} style={inFlow}>
          <AlertDialog.Header severity="success">
            <Heading id="test-success-heading" level={1} size="level-3">
              Uw aanvraag is verstuurd
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button>Oké</Button>
          </AlertDialog.Footer>
        </AlertDialog>
        <AlertDialog aria-labelledby="test-long-heading-heading" ref={showNonModally} style={{
        ...inFlow,
        maxInlineSize: '24rem'
      }}>
          <AlertDialog.Header severity="warning">
            <Heading id="test-long-heading-heading" level={1} size="level-3">
              Een lange kop die over meerdere regels doorloopt naast het pictogram
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph>Het pictogram hoort naast de eerste regel van de kop te staan.</Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button>Oké</Button>
          </AlertDialog.Footer>
        </AlertDialog>
        <AlertDialog aria-labelledby="test-short-window-heading" ref={showNonModally} style={shortWindow}>
          <AlertDialog.Header>
            <Heading id="test-short-window-heading" level={1} size="level-3">
              Een dialoogvenster in een verticaal krap venster
            </Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Paragraph>{longText}</Paragraph>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button>Oké</Button>
          </AlertDialog.Footer>
        </AlertDialog>
      </div>
      <Button onClick={() => AlertDialog.open('#test-interactions')}>Open de interactietest</Button>
      <AlertDialog aria-describedby="test-interactions-body" aria-labelledby="test-interactions-heading" data-testid="interaction-dialog" id="test-interactions">
        <AlertDialog.Header>
          <Heading id="test-interactions-heading" level={1} size="level-3">
            Uw sessie is verlopen
          </Heading>
        </AlertDialog.Header>
        <AlertDialog.Body>
          <Paragraph id="test-interactions-body">Log opnieuw in om verder te gaan.</Paragraph>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button onClick={AlertDialog.close}>Opnieuw inloggen</Button>
        </AlertDialog.Footer>
      </AlertDialog>
    </>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...y.parameters?.docs?.source}}},b=[`Test`]})))()}x();export{y as Test,b as __namedExportsOrder,m as default};