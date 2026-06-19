import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{I as r,X as i,Y as a}from"./iframe-lx1F6zeH.js";import{F as o,N as s,P as c,t as l}from"./src-DWzSVCUY.js";import{c as u,f as d,p as f}from"./exampleContent--bKQaizt.js";var p=e({Collapsible:()=>y,Default:()=>v,WithSubsteps:()=>b,__namedExportsOrder:()=>x,default:()=>_}),m,h,g,_,v,y,b,x,S=t((()=>{i(),l(),c(),f(),m=n(),h=Array.from({length:6},()=>u()),g=d().slice(0,2).map(e=>(0,m.jsx)(a.Item,{children:e},e)),_={title:`Components/Containers/Progress List`,component:s,args:{children:[(0,m.jsx)(s.Step,{heading:`Aanvraag ingediend`,status:`completed`,children:(0,m.jsx)(r,{children:`Uw aanvraag is op 2 januari 2026 ontvangen.`})},0),(0,m.jsx)(s.Step,{heading:`In behandeling`,status:`current`,children:(0,m.jsx)(r,{children:`Een medewerker beoordeelt uw aanvraag en neemt contact met u op bij vragen.`})},1),(0,m.jsx)(s.Step,{heading:`Besluit`,children:(0,m.jsx)(r,{children:`U ontvangt het besluit binnen 8 weken na uw aanvraag.`})},2),(0,m.jsx)(s.Step,{heading:`Uitvoering`,children:(0,m.jsx)(r,{children:`Na een positief besluit starten de werkzaamheden volgens planning.`})},3)],headingLevel:3},argTypes:{collapsible:{control:{type:`boolean`}},completedAccessibleText:{control:{type:`text`}},currentAccessibleText:{control:{type:`text`}},headingLevel:{control:`radio`,options:o}}},v={},y={args:{children:[(0,m.jsx)(s.Step,{heading:`2025`,status:`completed`,children:(0,m.jsx)(r,{children:h[0]})},0),(0,m.jsxs)(s.Step,{heading:`2026`,status:`current`,children:[(0,m.jsx)(r,{className:`ams-mb-m`,children:h[1]}),(0,m.jsx)(a,{children:g})]},1),(0,m.jsx)(s.Step,{heading:`2027`,children:(0,m.jsx)(r,{children:h[2]})},2)],collapsible:!0}},b={args:{children:[(0,m.jsx)(s.Step,{heading:`2026`,status:`completed`,children:(0,m.jsx)(r,{children:h[0]})},1),(0,m.jsxs)(s.Step,{hasSubsteps:!0,heading:`2027`,status:`current`,children:[(0,m.jsx)(r,{children:h[1]}),(0,m.jsxs)(s.Substeps,{children:[(0,m.jsx)(s.Substep,{status:`completed`,children:(0,m.jsx)(r,{children:`Februari: De Clercqstraat en Jan Evertsenstraat`})}),(0,m.jsx)(s.Substep,{status:`completed`,children:(0,m.jsx)(r,{children:`April: Kruispunt Admiraal de Ruijterweg-Jan Evertsenstraat`})}),(0,m.jsx)(s.Substep,{status:`current`,children:(0,m.jsx)(r,{children:`Juni: Raadhuisstraat, Westermarkt en Rozengracht`})}),(0,m.jsx)(s.Substep,{children:(0,m.jsx)(r,{children:`Augustus: Kruispunt Marnixstraat-Rozengracht`})}),(0,m.jsx)(s.Substep,{children:(0,m.jsx)(r,{children:`Oktober: Nieuwezijds Voorburgwal`})})]})]},2),(0,m.jsx)(s.Step,{heading:`2028`,children:(0,m.jsx)(r,{children:h[2]})},3)],collapsible:!0}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Collapsible`,`WithSubsteps`]}));S();export{y as Collapsible,v as Default,b as WithSubsteps,x as __namedExportsOrder,_ as default,S as n,p as t};