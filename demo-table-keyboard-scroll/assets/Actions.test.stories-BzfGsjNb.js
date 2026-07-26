import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-Bq1bXGty.js";import{G as n,c as r,u as i}from"./index.esm-AHCPMkhr.js";import{Dn as a,En as o,L as s,Mn as c,On as l,Rn as u,_n as d,dn as f,gn as p,hn as m,ln as h,t as g,x as _}from"./src-DIb7VsY9.js";import{n as v,t as y}from"./loFiMeta-D7BuTyKp.js";var b,x,S,C,w;e((()=>{n(),g(),l(),d(),y(),b=t(),x={...v,title:`Modes/Lo-fi/Actions`},S=[void 0,`error`,`success`,`warning`],C={render:()=>(0,b.jsxs)(`div`,{className:`_ams-tests-stack`,style:{maxInlineSize:`44rem`},children:[(0,b.jsxs)(`div`,{className:`_ams-tests-grid`,children:[p.map(e=>(0,b.jsx)(m,{variant:e,children:`Verstuur`},e)),(0,b.jsx)(m,{disabled:!0,children:`Verstuur`}),(0,b.jsx)(m,{icon:r,children:`Volgende stap`}),(0,b.jsx)(u,{label:`Sluiten`,svg:i})]}),(0,b.jsxs)(`div`,{className:`_ams-tests-grid`,children:[(0,b.jsx)(f,{href:`#`,children:`Vraag een subsidie aan`}),(0,b.jsx)(_,{href:`#`,children:`Bekijk alle voorwaarden`})]}),(0,b.jsx)(`div`,{className:`_ams-tests-grid`,children:a.map(e=>(0,b.jsx)(o,{color:e,label:e},e))}),S.map(e=>(0,b.jsx)(c,{closeable:!0,heading:`Uw aanvraag is ontvangen`,headingLevel:2,severity:e,children:(0,b.jsx)(h,{children:`U krijgt binnen 3 weken bericht over uw aanvraag.`})},e??`info`)),(0,b.jsxs)(s,{headingLevel:2,children:[(0,b.jsx)(s.Step,{heading:`Aanvraag ontvangen`,status:`completed`,children:(0,b.jsx)(h,{children:`Wij hebben uw aanvraag ontvangen.`})}),(0,b.jsx)(s.Step,{heading:`Aanvraag in behandeling`,status:`current`,children:(0,b.jsx)(h,{children:`Een medewerker beoordeelt uw aanvraag.`})}),(0,b.jsx)(s.Step,{heading:`Besluit`,children:(0,b.jsx)(h,{children:`U krijgt bericht over het besluit.`})})]})]}),tags:[`!dev`,`!autodocs`]},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="_ams-tests-stack" style={{
    maxInlineSize: '44rem'
  }}>
      <div className="_ams-tests-grid">
        {buttonVariants.map(variant => <Button key={variant} variant={variant}>
            Verstuur
          </Button>)}
        <Button disabled>Verstuur</Button>
        <Button icon={ChevronForwardIcon}>Volgende stap</Button>
        <IconButton label="Sluiten" svg={CloseIcon} />
      </div>

      <div className="_ams-tests-grid">
        <CallToActionLink href="#">Vraag een subsidie aan</CallToActionLink>
        <StandaloneLink href="#">Bekijk alle voorwaarden</StandaloneLink>
      </div>

      <div className="_ams-tests-grid">
        {badgeColors.map(color => <Badge color={color} key={color} label={color} />)}
      </div>

      {severities.map(severity => <Alert closeable heading="Uw aanvraag is ontvangen" headingLevel={2} key={severity ?? 'info'} severity={severity}>
          <Paragraph>U krijgt binnen 3 weken bericht over uw aanvraag.</Paragraph>
        </Alert>)}

      <ProgressList headingLevel={2}>
        <ProgressList.Step heading="Aanvraag ontvangen" status="completed">
          <Paragraph>Wij hebben uw aanvraag ontvangen.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Aanvraag in behandeling" status="current">
          <Paragraph>Een medewerker beoordeelt uw aanvraag.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Besluit">
          <Paragraph>U krijgt bericht over het besluit.</Paragraph>
        </ProgressList.Step>
      </ProgressList>
    </div>,
  tags: ['!dev', '!autodocs']
}`,...C.parameters?.docs?.source},description:{story:`The three components that each carry their own hand-drawn radius — Button, Alert and Call to
Action Link — plus the two brand colour groups that Lo-fi flattens to grey.

Badge and Alert are the sheet’s colour witnesses: \`ams.color.highlight.*\` and
\`ams.color.feedback.*\` collapse onto one grey each, so every badge and every severity should
render identically apart from its icon and label. A badge that still shows a hue means a token
escaped the mode build, which is exactly the regression this sheet is for. Progress List covers
\`ams.color.progress.*\` the same way.`,...C.parameters?.docs?.description}}},w=[`Test`]}))();export{C as Test,w as __namedExportsOrder,x as default};