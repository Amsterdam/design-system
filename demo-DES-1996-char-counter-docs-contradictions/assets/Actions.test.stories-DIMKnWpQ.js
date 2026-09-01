import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{K as n,c as r,u as i}from"./index.esm-Cf2AflXd.js";import{n as a,t as o}from"./IconButton-Cbj3nGXN.js";import{n as s,t as c}from"./Alert-BtzjG0KS.js";import{n as l,r as u,t as d}from"./Badge-DIxsLFS7.js";import{n as f,r as p,t as m}from"./Button-CKKuljly.js";import{n as h,t as g}from"./CallToActionLink-Cp0-Gw8I.js";import{n as _,t as v}from"./Paragraph-D4LVaXl8.js";import{n as y,t as b}from"./ProgressList-DirnXdBq.js";import{n as x,t as S}from"./StandaloneLink-R741ygWG.js";import{n as C,t as w}from"./loFiMeta-DTKUndwq.js";var T,E,D,O,k;function A(){return(A=e((()=>{n(),s(),u(),p(),h(),a(),_(),y(),x(),w(),T=t(),E={...C,title:`Modes/Lo-fi/Actions`},D=[void 0,`error`,`success`,`warning`],O={render:()=>(0,T.jsxs)(`div`,{className:`_ams-tests-stack`,style:{maxInlineSize:`44rem`},children:[(0,T.jsxs)(`div`,{className:`_ams-tests-grid`,children:[f.map(e=>(0,T.jsx)(m,{variant:e,children:`Verstuur`},e)),(0,T.jsx)(m,{disabled:!0,children:`Verstuur`}),(0,T.jsx)(m,{icon:r,children:`Volgende stap`}),(0,T.jsx)(o,{label:`Sluiten`,svg:i})]}),(0,T.jsxs)(`div`,{className:`_ams-tests-grid`,children:[(0,T.jsx)(g,{href:`#`,children:`Vraag een subsidie aan`}),(0,T.jsx)(S,{href:`#`,children:`Bekijk alle voorwaarden`})]}),(0,T.jsx)(`div`,{className:`_ams-tests-grid`,children:l.map(e=>(0,T.jsx)(d,{color:e,label:e},e))}),D.map(e=>(0,T.jsx)(c,{closeable:!0,heading:`Uw aanvraag is ontvangen`,headingLevel:2,severity:e,children:(0,T.jsx)(v,{children:`U krijgt binnen 3 weken bericht over uw aanvraag.`})},e??`info`)),(0,T.jsxs)(b,{headingLevel:2,children:[(0,T.jsx)(b.Step,{heading:`Aanvraag ontvangen`,status:`completed`,children:(0,T.jsx)(v,{children:`Wij hebben uw aanvraag ontvangen.`})}),(0,T.jsx)(b.Step,{heading:`Aanvraag in behandeling`,status:`current`,children:(0,T.jsx)(v,{children:`Een medewerker beoordeelt uw aanvraag.`})}),(0,T.jsx)(b.Step,{heading:`Besluit`,children:(0,T.jsx)(v,{children:`U krijgt bericht over het besluit.`})})]})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
  tags: ['!dev', '!autodocs', '!manifest']
}`,...O.parameters?.docs?.source},description:{story:`The three components that each carry their own hand-drawn radius — Button, Alert and Call to
Action Link — plus the two brand colour groups that Lo-fi flattens to grey.

Badge and Alert are the sheet’s colour witnesses: \`ams.color.highlight.*\` and
\`ams.color.feedback.*\` collapse onto one grey each, so every badge and every severity should
render identically apart from its icon and label. A badge that still shows a hue means a token
escaped the mode build, which is exactly the regression this sheet is for. Progress List covers
\`ams.color.progress.*\` the same way.`,...O.parameters?.docs?.description}}},k=[`Test`]})))()}A();export{O as Test,k as __namedExportsOrder,E as default};