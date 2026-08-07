import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{$ as i,L as a,Q as o}from"./index.esm-l73SYRfS.js";import{n as s,r as c,t as l}from"./ProgressList-CQswjjx7.js";import{m as u,p as d,u as f}from"./exampleContent-DsZ2XVq0.js";var p=t({Collapsible:()=>b,Controlled:()=>x,Default:()=>y,WithSubsteps:()=>S,__namedExportsOrder:()=>C,default:()=>v}),m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{i(),s(),m=n(),u(),h=r(),g=Array.from({length:6},()=>f()),_=d().slice(0,2).map(e=>(0,h.jsx)(o.Item,{children:e},e)),v={title:`Components/Containers/Progress List`,component:l,args:{children:[(0,h.jsx)(l.Step,{heading:`Aanvraag ingediend`,status:`completed`,children:(0,h.jsx)(a,{children:`Uw aanvraag is op 2 januari 2026 ontvangen.`})},0),(0,h.jsx)(l.Step,{heading:`In behandeling`,status:`current`,children:(0,h.jsx)(a,{children:`Een medewerker beoordeelt uw aanvraag en neemt contact met u op bij vragen.`})},1),(0,h.jsx)(l.Step,{heading:`Besluit`,children:(0,h.jsx)(a,{children:`U ontvangt het besluit binnen 8 weken na uw aanvraag.`})},2),(0,h.jsx)(l.Step,{heading:`Uitvoering`,children:(0,h.jsx)(a,{children:`Na een positief besluit starten de werkzaamheden volgens planning.`})},3)],headingLevel:3},argTypes:{collapsible:{control:{type:`boolean`}},completedAccessibleText:{control:{type:`text`}},currentAccessibleText:{control:{type:`text`}},headingLevel:{control:`radio`,options:c}},subcomponents:{"ProgressList.Step":l.Step,"ProgressList.Substep":l.Substep}},y={},b={args:{children:[(0,h.jsx)(l.Step,{heading:`2025`,status:`completed`,children:(0,h.jsx)(a,{children:g[0]})},0),(0,h.jsxs)(l.Step,{heading:`2026`,status:`current`,children:[(0,h.jsx)(a,{className:`ams-mb-m`,children:g[1]}),(0,h.jsx)(o,{children:_})]},1),(0,h.jsx)(l.Step,{heading:`2027`,children:(0,h.jsx)(a,{children:g[2]})},2)],collapsible:!0}},x={parameters:{docs:{source:{code:`const [expandedIndex, setExpandedIndex] = useState<number | null>(1)

<ProgressList collapsible headingLevel={3}>
  <ProgressList.Step
    expanded={expandedIndex === 0}
    heading="Aanvraag ingediend"
    onToggle={(expanded) => setExpandedIndex(expanded ? 0 : null)}
    status="completed"
  >
    <Paragraph>Uw aanvraag is op 2 januari 2026 ontvangen.</Paragraph>
  </ProgressList.Step>
  <ProgressList.Step
    expanded={expandedIndex === 1}
    heading="In behandeling"
    onToggle={(expanded) => setExpandedIndex(expanded ? 1 : null)}
    status="current"
  >
    <Paragraph>Een medewerker beoordeelt uw aanvraag en neemt contact met u op bij vragen.</Paragraph>
  </ProgressList.Step>
  <ProgressList.Step
    expanded={expandedIndex === 2}
    heading="Besluit"
    onToggle={(expanded) => setExpandedIndex(expanded ? 2 : null)}
  >
    <Paragraph>U ontvangt het besluit binnen 8 weken na uw aanvraag.</Paragraph>
  </ProgressList.Step>
</ProgressList>`,language:`tsx`}}},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/Aanvraag ingediend/}))},render:()=>{let[e,t]=(0,m.useState)(1);return(0,h.jsxs)(l,{collapsible:!0,headingLevel:3,children:[(0,h.jsx)(l.Step,{expanded:e===0,heading:`Aanvraag ingediend`,onToggle:e=>t(e?0:null),status:`completed`,children:(0,h.jsx)(a,{children:`Uw aanvraag is op 2 januari 2026 ontvangen.`})}),(0,h.jsx)(l.Step,{expanded:e===1,heading:`In behandeling`,onToggle:e=>t(e?1:null),status:`current`,children:(0,h.jsx)(a,{children:`Een medewerker beoordeelt uw aanvraag en neemt contact met u op bij vragen.`})}),(0,h.jsx)(l.Step,{expanded:e===2,heading:`Besluit`,onToggle:e=>t(e?2:null),children:(0,h.jsx)(a,{children:`U ontvangt het besluit binnen 8 weken na uw aanvraag.`})})]})}},S={args:{children:[(0,h.jsx)(l.Step,{heading:`2026`,status:`completed`,children:(0,h.jsx)(a,{children:g[0]})},1),(0,h.jsxs)(l.Step,{hasSubsteps:!0,heading:`2027`,status:`current`,children:[(0,h.jsx)(a,{children:g[1]}),(0,h.jsxs)(l.Substeps,{children:[(0,h.jsx)(l.Substep,{status:`completed`,children:(0,h.jsx)(a,{children:`Februari: De Clercqstraat en Jan Evertsenstraat`})}),(0,h.jsx)(l.Substep,{status:`completed`,children:(0,h.jsx)(a,{children:`April: Kruispunt Admiraal de Ruijterweg-Jan Evertsenstraat`})}),(0,h.jsx)(l.Substep,{status:`current`,children:(0,h.jsx)(a,{children:`Juni: Raadhuisstraat, Westermarkt en Rozengracht`})}),(0,h.jsx)(l.Substep,{children:(0,h.jsx)(a,{children:`Augustus: Kruispunt Marnixstraat-Rozengracht`})}),(0,h.jsx)(l.Substep,{children:(0,h.jsx)(a,{children:`Oktober: Nieuwezijds Voorburgwal`})})]})]},2),(0,h.jsx)(l.Step,{heading:`2028`,children:(0,h.jsx)(a,{children:g[2]})},3)],collapsible:!0}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<ProgressList.Step heading="2025" key={0} status="completed">
        <Paragraph>{paragraphs[0]}</Paragraph>
      </ProgressList.Step>, <ProgressList.Step heading="2026" key={1} status="current">
        <Paragraph className="ams-mb-m">{paragraphs[1]}</Paragraph>
        <UnorderedList>{unorderedList}</UnorderedList>
      </ProgressList.Step>, <ProgressList.Step heading="2027" key={2}>
        <Paragraph>{paragraphs[2]}</Paragraph>
      </ProgressList.Step>],
    collapsible: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [expandedIndex, setExpandedIndex] = useState<number | null>(1)

<ProgressList collapsible headingLevel={3}>
  <ProgressList.Step
    expanded={expandedIndex === 0}
    heading="Aanvraag ingediend"
    onToggle={(expanded) => setExpandedIndex(expanded ? 0 : null)}
    status="completed"
  >
    <Paragraph>Uw aanvraag is op 2 januari 2026 ontvangen.</Paragraph>
  </ProgressList.Step>
  <ProgressList.Step
    expanded={expandedIndex === 1}
    heading="In behandeling"
    onToggle={(expanded) => setExpandedIndex(expanded ? 1 : null)}
    status="current"
  >
    <Paragraph>Een medewerker beoordeelt uw aanvraag en neemt contact met u op bij vragen.</Paragraph>
  </ProgressList.Step>
  <ProgressList.Step
    expanded={expandedIndex === 2}
    heading="Besluit"
    onToggle={(expanded) => setExpandedIndex(expanded ? 2 : null)}
  >
    <Paragraph>U ontvangt het besluit binnen 8 weken na uw aanvraag.</Paragraph>
  </ProgressList.Step>
</ProgressList>\`,
        language: 'tsx'
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: /Aanvraag ingediend/
    }));
  },
  render: () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(1);
    return <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step expanded={expandedIndex === 0} heading="Aanvraag ingediend" onToggle={expanded => setExpandedIndex(expanded ? 0 : null)} status="completed">
          <Paragraph>Uw aanvraag is op 2 januari 2026 ontvangen.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step expanded={expandedIndex === 1} heading="In behandeling" onToggle={expanded => setExpandedIndex(expanded ? 1 : null)} status="current">
          <Paragraph>Een medewerker beoordeelt uw aanvraag en neemt contact met u op bij vragen.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step expanded={expandedIndex === 2} heading="Besluit" onToggle={expanded => setExpandedIndex(expanded ? 2 : null)}>
          <Paragraph>U ontvangt het besluit binnen 8 weken na uw aanvraag.</Paragraph>
        </ProgressList.Step>
      </ProgressList>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<ProgressList.Step heading="2026" key={1} status="completed">
        <Paragraph>{paragraphs[0]}</Paragraph>
      </ProgressList.Step>, <ProgressList.Step hasSubsteps heading="2027" key={2} status="current">
        <Paragraph>{paragraphs[1]}</Paragraph>
        <ProgressList.Substeps>
          <ProgressList.Substep status="completed">
            <Paragraph>Februari: De Clercqstraat en Jan Evertsenstraat</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep status="completed">
            <Paragraph>April: Kruispunt Admiraal de Ruijterweg-Jan Evertsenstraat</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep status="current">
            <Paragraph>Juni: Raadhuisstraat, Westermarkt en Rozengracht</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>Augustus: Kruispunt Marnixstraat-Rozengracht</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>Oktober: Nieuwezijds Voorburgwal</Paragraph>
          </ProgressList.Substep>
        </ProgressList.Substeps>
      </ProgressList.Step>, <ProgressList.Step heading="2028" key={3}>
        <Paragraph>{paragraphs[2]}</Paragraph>
      </ProgressList.Step>],
    collapsible: true
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Collapsible`,`Controlled`,`WithSubsteps`]})))()}export{w as a,S as i,x as n,v as o,p as r,b as t};