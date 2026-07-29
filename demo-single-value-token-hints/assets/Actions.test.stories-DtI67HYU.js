import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-Bq1bXGty.js";import{G as n,c as r,u as i}from"./index.esm-AHCPMkhr.js";import{Dn as a,L as o,Nn as s,On as c,_n as l,fn as u,gn as d,kn as f,t as p,un as m,vn as h,x as g,zn as _}from"./src-DpUe47H9.js";import{n as v,t as y}from"./loFiMeta-D7BuTyKp.js";var b,x,S,C,w;e((()=>{n(),p(),f(),h(),y(),b=t(),x={...v,title:`Modes/Lo-fi/Actions`},S=[void 0,`error`,`success`,`warning`],C={render:()=>(0,b.jsxs)(`div`,{className:`_ams-tests-stack`,style:{maxInlineSize:`44rem`},children:[(0,b.jsxs)(`div`,{className:`_ams-tests-grid`,children:[l.map(e=>(0,b.jsx)(d,{variant:e,children:`Verstuur`},e)),(0,b.jsx)(d,{disabled:!0,children:`Verstuur`}),(0,b.jsx)(d,{icon:r,children:`Volgende stap`}),(0,b.jsx)(_,{label:`Sluiten`,svg:i})]}),(0,b.jsxs)(`div`,{className:`_ams-tests-grid`,children:[(0,b.jsx)(u,{href:`#`,children:`Vraag een subsidie aan`}),(0,b.jsx)(g,{href:`#`,children:`Bekijk alle voorwaarden`})]}),(0,b.jsx)(`div`,{className:`_ams-tests-grid`,children:c.map(e=>(0,b.jsx)(a,{color:e,label:e},e))}),S.map(e=>(0,b.jsx)(s,{closeable:!0,heading:`Uw aanvraag is ontvangen`,headingLevel:2,severity:e,children:(0,b.jsx)(m,{children:`U krijgt binnen 3 weken bericht over uw aanvraag.`})},e??`info`)),(0,b.jsxs)(o,{headingLevel:2,children:[(0,b.jsx)(o.Step,{heading:`Aanvraag ontvangen`,status:`completed`,children:(0,b.jsx)(m,{children:`Wij hebben uw aanvraag ontvangen.`})}),(0,b.jsx)(o.Step,{heading:`Aanvraag in behandeling`,status:`current`,children:(0,b.jsx)(m,{children:`Een medewerker beoordeelt uw aanvraag.`})}),(0,b.jsx)(o.Step,{heading:`Besluit`,children:(0,b.jsx)(m,{children:`U krijgt bericht over het besluit.`})})]})]}),tags:[`!dev`,`!autodocs`]},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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