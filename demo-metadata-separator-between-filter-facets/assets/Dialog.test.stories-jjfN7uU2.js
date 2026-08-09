import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{B as n,c as r,n as i,nt as a}from"./index.esm-BAZToXFq.js";import{n as o,t as s}from"./Dialog-ClZ5XX04.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{a(),o(),c=t(),{expect:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Containers/Dialog`,component:s,args:{heading:`Dialoogvenster`}},f=e=>{e&&!e.open&&e.show()},p={position:`static`},m={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Open de interactietest`});await t.click(n);let r=e.getByTestId(`interaction-dialog`);await l(r).toBeVisible();let i=u(r).getByRole(`button`,{name:`Sluiten`});await l(i).toHaveFocus(),await t.click(i),await l(r).not.toBeVisible(),await l(n).toHaveFocus(),await t.click(n),await t.click(u(r).getByRole(`button`,{name:`Stoppen`})),await l(r).not.toBeVisible()},render:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`div`,{className:`_ams-tests-stack`,children:[(0,c.jsx)(s,{footer:(0,c.jsx)(r,{children:`Sluiten`}),heading:`De gegevens zijn opgeslagen`,ref:f,style:p,children:(0,c.jsx)(n,{children:`U ontvangt een bevestiging per e-mail.`})}),(0,c.jsx)(s,{footer:(0,c.jsxs)(i,{children:[(0,c.jsx)(r,{children:`Doorgaan`}),(0,c.jsx)(r,{variant:`secondary`,children:`Stoppen`})]}),heading:`Niet alle gegevens zijn opgeslagen`,ref:f,style:p,children:(0,c.jsx)(n,{children:`Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn gaan dan verloren.`})}),(0,c.jsx)(s,{footer:(0,c.jsxs)(i,{children:[(0,c.jsx)(r,{children:`Ingelogd blijven`}),(0,c.jsx)(r,{variant:`secondary`,children:`Nu afmelden`})]}),heading:`Uw sessie verloopt bijna`,ref:f,style:p,children:(0,c.jsx)(n,{children:`Zonder activiteit wordt u over 2 minuten automatisch afgemeld.`})}),(0,c.jsx)(s,{heading:`Een lange kop die over meerdere regels doorloopt naast de sluitknop`,ref:f,style:{...p,maxInlineSize:`24rem`},children:(0,c.jsx)(n,{children:`De sluitknop hoort naast de eerste regel van de kop te staan.`})})]}),(0,c.jsx)(r,{onClick:()=>s.open(`#dialog-interactions`),children:`Open de interactietest`}),(0,c.jsx)(s,{"data-testid":`interaction-dialog`,footer:(0,c.jsx)(r,{onClick:s.close,children:`Stoppen`}),heading:`De gegevens zijn opgeslagen`,id:`dialog-interactions`,children:(0,c.jsx)(n,{children:`U ontvangt een bevestiging per e-mail.`})})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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

    // A button in the footer can close the dialog through Dialog.close
    await userEvent.click(openButton);
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Stoppen'
    }));
    await expect(dialog).not.toBeVisible();
  },
  render: () => <>
      <div className="_ams-tests-stack">
        <Dialog footer={<Button>Sluiten</Button>} heading="De gegevens zijn opgeslagen" ref={showNonModally} style={inFlow}>
          <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
        </Dialog>
        <Dialog footer={<ActionGroup>
              <Button>Doorgaan</Button>
              <Button variant="secondary">Stoppen</Button>
            </ActionGroup>} heading="Niet alle gegevens zijn opgeslagen" ref={showNonModally} style={inFlow}>
          <Paragraph>
            Weet u zeker dat u door wilt gaan met het uitvoeren van deze actie? Gegevens die nog niet opgeslagen zijn
            gaan dan verloren.
          </Paragraph>
        </Dialog>
        <Dialog footer={<ActionGroup>
              <Button>Ingelogd blijven</Button>
              <Button variant="secondary">Nu afmelden</Button>
            </ActionGroup>} heading="Uw sessie verloopt bijna" ref={showNonModally} style={inFlow}>
          <Paragraph>Zonder activiteit wordt u over 2 minuten automatisch afgemeld.</Paragraph>
        </Dialog>
        <Dialog heading="Een lange kop die over meerdere regels doorloopt naast de sluitknop" ref={showNonModally} style={{
        ...inFlow,
        maxInlineSize: '24rem'
      }}>
          <Paragraph>De sluitknop hoort naast de eerste regel van de kop te staan.</Paragraph>
        </Dialog>
      </div>
      <Button onClick={() => Dialog.open('#dialog-interactions')}>Open de interactietest</Button>
      <Dialog data-testid="interaction-dialog" footer={<Button onClick={Dialog.close}>Stoppen</Button>} heading="De gegevens zijn opgeslagen" id="dialog-interactions">
        <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
      </Dialog>
    </>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...m.parameters?.docs?.source}}},h=[`Test`]})))()}g();export{m as Test,h as __namedExportsOrder,d as default};