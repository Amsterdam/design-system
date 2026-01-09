import{r as p,j as e,c as h,af as I,U as s,P as t,G as m,H as N}from"./iframe-BaAtS7uv.js";import{i as S,b as y}from"./exampleContent-DRope23M.js";import{I as U}from"./Icon-Bllra-PS.js";import{H as f}from"./Heading-B6IdsULZ.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const z={headingLevel:2},b=p.createContext(z);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const j=p.forwardRef(({children:n,className:o,hasSubSteps:a,heading:d,status:i,..._},w)=>{const{headingLevel:k}=p.useContext(b);return e.jsxs("li",{"aria-current":i==="current"?"step":void 0,className:h(o,"ams-progress-list__step",a&&"ams-progress-list__step--has-sub-steps",i&&`ams-progress-list__step--${i}`),ref:w,..._,children:[e.jsxs("div",{className:"ams-progress-list__indicator",children:[e.jsx("div",{className:"ams-progress-list__marker",children:e.jsx("span",{className:"ams-progress-list__marker-shape",children:i==="current"&&e.jsx(U,{color:"inverse",svg:I})})}),e.jsx("span",{className:"ams-progress-list__connector"})]}),e.jsxs("div",{className:"ams-progress-list__content",children:[e.jsx(f,{className:"ams-progress-list__heading",level:k,children:d}),e.jsx("div",{className:"ams-progress-list__body",children:n})]})]})});j.displayName="ProgressList.Step";try{ProgressList.Step.displayName="ProgressList.Step",ProgressList.Step.__docgenInfo={description:"",displayName:"ProgressList.Step",props:{hasSubSteps:{defaultValue:null,description:"",name:"hasSubSteps",required:!1,type:{name:"boolean"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"current"'},{value:'"completed"'}]}}}}}catch{}const P=p.forwardRef(({children:n,className:o,status:a,...d},i)=>e.jsxs("li",{"aria-current":a==="current"?"step":void 0,className:h("ams-progress-list__sub-step",a&&`ams-progress-list__sub-step--${a}`,o),ref:i,...d,children:[e.jsxs("div",{className:"ams-progress-list-sub-step__indicator",children:[e.jsx("div",{className:"ams-progress-list-sub-step__marker",children:e.jsx("span",{className:"ams-progress-list-sub-step__marker-shape"})}),e.jsx("span",{className:"ams-progress-list-sub-step__connector"})]}),e.jsx("div",{className:"ams-progress-list-sub-step__body",children:n})]}));P.displayName="ProgressList.SubStep";try{ProgressList.SubStep.displayName="ProgressList.SubStep",ProgressList.SubStep.__docgenInfo={description:"",displayName:"ProgressList.SubStep",props:{status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"current"'},{value:'"completed"'}]}}}}}catch{}const L=p.forwardRef(({children:n,className:o,...a},d)=>e.jsx("ol",{...a,className:h("ams-progress-list__sub-steps",o),ref:d,children:n}));L.displayName="ProgressList.SubSteps";try{ProgressList.SubSteps.displayName="ProgressList.SubSteps",ProgressList.SubSteps.__docgenInfo={description:"",displayName:"ProgressList.SubSteps",props:{}}}catch{}const x=p.forwardRef(({children:n,className:o,headingLevel:a,...d},i)=>e.jsx(b.Provider,{value:{headingLevel:a},children:e.jsx("ol",{...d,className:h("ams-progress-list",`ams-progress-list--heading-${a}`,o),ref:i,children:n})})),r=Object.assign(x,{Step:j,SubStep:P,SubSteps:L});x.displayName="ProgressList";try{r.displayName="ProgressList",r.__docgenInfo={description:"",displayName:"ProgressList",props:{headingLevel:{defaultValue:null,description:"",name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"3"},{value:"4"},{value:"2"}]}}}}}catch{}const g=Array.from({length:5},()=>y()),v=S().slice(0,3).map(n=>e.jsx(s.Item,{children:n},n)),C=S().slice(0,2).map(n=>e.jsx(s.Item,{children:n},n)),R={title:"Components/Containers/Progress List",component:r,args:{children:[e.jsx(r.Step,{heading:"2025",status:"completed",children:e.jsx(s,{children:v})},0),e.jsxs(r.Step,{heading:"2026",status:"current",children:[e.jsx(t,{className:"ams-mb-m",children:g[1]}),e.jsx(s,{children:C})]},1),e.jsx(r.Step,{heading:"2027",children:e.jsx(t,{children:g[2]})},2)],headingLevel:3}},l={},u={args:{children:[e.jsx(r.Step,{heading:"2025",status:"completed",children:e.jsx(s,{children:v})},0),e.jsxs(r.Step,{hasSubSteps:!0,heading:"2026",status:"current",children:[e.jsx(t,{children:g[1]}),e.jsxs(r.SubSteps,{children:[e.jsx(r.SubStep,{status:"completed",children:e.jsx(t,{children:g[2]})}),e.jsx(r.SubStep,{status:"current",children:e.jsx(t,{children:g[3]})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:g[4]})})]})]},1),e.jsx(r.Step,{heading:"2027",children:e.jsx(t,{children:g[5]})},2)]}},c={args:{children:[e.jsx(r.Step,{heading:"2020",status:"completed",children:e.jsx(s,{children:e.jsx(s.Item,{children:"Start participatie inrichting"})})},0),e.jsx(r.Step,{heading:"2021",status:"completed",children:e.jsxs(s,{children:[e.jsx(s.Item,{children:"Start herinrichting Nieuwezijds Voorburgwal Zuid"}),e.jsx(s.Item,{children:"Besluitvorming over ontwerp en geld Nieuwezijds Voorburgwal Noord"}),e.jsx(s.Item,{children:"Besluitvorming over ontwerpen en geld bruggen en straten"}),e.jsx(s.Item,{children:"Voorbereidend werk bruggen Raadhuisstraat – Mercatorplein (hulpbruggen en kabels en leidingen)"})]})},1),e.jsx(r.Step,{heading:"2022",status:"completed",children:e.jsxs(s,{children:[e.jsx(s.Item,{children:"Herinrichting Nieuwezijds Voorburgwal Zuid klaar"}),e.jsx(s.Item,{children:"Herinrichting Nieuwezijds Voorburgwal Noord begint"}),e.jsx(s.Item,{children:"Raadhuisstraat – Rozengracht: werk aan kabels en leidingen"}),e.jsx(s.Item,{children:"De Clercqstraat: start vernieuwing brug 108, Da Costagracht"}),e.jsx(s.Item,{children:"Bevestiging kunst en afbouw hulpbruggen"})]})},2),e.jsx(r.Step,{heading:"2023 – april 2024",status:"completed",children:e.jsxs(s,{children:[e.jsx(s.Item,{children:"Uitwerken aangepaste opgave door hoge inflatie en stijgende kosten. Ook blijkt uit nieuw onderzoek dat het vernieuwen van 7 bruggen niet nodig is. Deze bruggen gaan we herstellen"}),e.jsx(s.Item,{children:"Maken van nieuwe ontwerpen bruggen en straten"}),e.jsx(s.Item,{children:"Participatie over de inrichting van de servicestroken op de stoep"}),e.jsx(s.Item,{children:"December 2023: herinrichting Nieuwezijds Voorburgwal Noord klaar"}),e.jsx(s.Item,{children:"24 april 2024: gemeenteraad akkoord met aangepaste opgave"})]})},3),e.jsx(r.Step,{hasSubSteps:!0,heading:"Mei 2024 – 2028",status:"current",children:e.jsxs(r.SubSteps,{children:[e.jsx(r.SubStep,{status:"current",children:e.jsx(t,{children:"Mei 2024 – zomer 2025: herinrichting kruispunt Admiraal de Ruijterweg/Jan Evertsenstraat"})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:"Mei 2024 – oktober 2025: herinrichting kruispunt Marnixstraat/ Rozengracht"})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:"September 2024 – februari 2025: aanbrengen verbeteringen de De Clercqstraat"})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:"September 2024 – eind 2025: herstellen brug 135 over de Bilderdijkgracht (met verwijderen hulpbrug)"})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:"September 2024 – zomer 2026: herstellen brug 167 over de Singelgracht"})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:"Oktober 2024 – in 2028: vernieuwen brug over de Lijnbaansgracht en stukje Rozengracht"})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:"Begin 2025 – voorjaar 2026: aanbrengen verbeteringen Jan Evertsenstraat"})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:"Begin 2025 – eind 2025: herstellen brug over de Admiralengracht (met verwijderen hulpbrug)"})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:"Februari 2025 – zomer 2026: herstellen bruggen over het Singel (brug 8), de Herengracht (brug 22), Keizersgracht (brug 106) en Prinsengracht (brug 63)"})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:"Februari 2025 – najaar 2026: aanbrengen verbeteringen Raadhuisstraat"})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:"Februari 2025 – voorjaar 2026: aanbrengen verbeteringen Rozengracht"})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:"Oktober 2025 – voorjaar 2027: herinrichting Westermarkt"})}),e.jsx(r.SubStep,{children:e.jsx(t,{children:"In 2027: verwijderen hulpbruggen naast de bruggen over het Singel (brug 8), de Herengracht (brug 22), Keizersgracht (brug 106) en Prinsengracht (brug 63)"})})]})},4)]},decorators:[n=>e.jsx(m,{children:e.jsxs(m.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsx(N,{className:"ams-mb-s",level:2,children:"Wanneer"}),e.jsx(t,{className:"ams-mb-xl",children:"We verwachten het hele project in 2029 af te ronden."}),e.jsx(n,{})]})})]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<ProgressList.Step heading="2025" key={0} status="completed">
        <UnorderedList>{unorderedList1}</UnorderedList>
      </ProgressList.Step>, <ProgressList.Step hasSubSteps heading="2026" key={1} status="current">
        <Paragraph>{paragraphs[1]}</Paragraph>
        <ProgressList.SubSteps>
          <ProgressList.SubStep status="completed">
            <Paragraph>{paragraphs[2]}</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep status="current">
            <Paragraph>{paragraphs[3]}</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>{paragraphs[4]}</Paragraph>
          </ProgressList.SubStep>
        </ProgressList.SubSteps>
      </ProgressList.Step>, <ProgressList.Step heading="2027" key={2}>
        <Paragraph>{paragraphs[5]}</Paragraph>
      </ProgressList.Step>]
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<ProgressList.Step heading="2020" key={0} status="completed">
        <UnorderedList>
          <UnorderedList.Item>Start participatie inrichting</UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>, <ProgressList.Step heading="2021" key={1} status="completed">
        <UnorderedList>
          <UnorderedList.Item>Start herinrichting Nieuwezijds Voorburgwal Zuid</UnorderedList.Item>
          <UnorderedList.Item>Besluitvorming over ontwerp en geld Nieuwezijds Voorburgwal Noord</UnorderedList.Item>
          <UnorderedList.Item>Besluitvorming over ontwerpen en geld bruggen en straten</UnorderedList.Item>
          <UnorderedList.Item>
            Voorbereidend werk bruggen Raadhuisstraat – Mercatorplein (hulpbruggen en kabels en leidingen)
          </UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>, <ProgressList.Step heading="2022" key={2} status="completed">
        <UnorderedList>
          <UnorderedList.Item>Herinrichting Nieuwezijds Voorburgwal Zuid klaar</UnorderedList.Item>
          <UnorderedList.Item>Herinrichting Nieuwezijds Voorburgwal Noord begint</UnorderedList.Item>
          <UnorderedList.Item>Raadhuisstraat – Rozengracht: werk aan kabels en leidingen</UnorderedList.Item>
          <UnorderedList.Item>De Clercqstraat: start vernieuwing brug 108, Da Costagracht</UnorderedList.Item>
          <UnorderedList.Item>Bevestiging kunst en afbouw hulpbruggen</UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>, <ProgressList.Step heading="2023 – april 2024" key={3} status="completed">
        <UnorderedList>
          <UnorderedList.Item>
            Uitwerken aangepaste opgave door hoge inflatie en stijgende kosten. Ook blijkt uit nieuw onderzoek dat het
            vernieuwen van 7 bruggen niet nodig is. Deze bruggen gaan we herstellen
          </UnorderedList.Item>
          <UnorderedList.Item>Maken van nieuwe ontwerpen bruggen en straten</UnorderedList.Item>
          <UnorderedList.Item>Participatie over de inrichting van de servicestroken op de stoep</UnorderedList.Item>
          <UnorderedList.Item>December 2023: herinrichting Nieuwezijds Voorburgwal Noord klaar</UnorderedList.Item>
          <UnorderedList.Item>24 april 2024: gemeenteraad akkoord met aangepaste opgave</UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>, <ProgressList.Step hasSubSteps heading="Mei 2024 – 2028" key={4} status="current">
        <ProgressList.SubSteps>
          <ProgressList.SubStep status="current">
            <Paragraph>
              Mei 2024 – zomer 2025: herinrichting kruispunt Admiraal de Ruijterweg/Jan Evertsenstraat
            </Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>Mei 2024 – oktober 2025: herinrichting kruispunt Marnixstraat/ Rozengracht</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>September 2024 – februari 2025: aanbrengen verbeteringen de De Clercqstraat</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>
              September 2024 – eind 2025: herstellen brug 135 over de Bilderdijkgracht (met verwijderen hulpbrug)
            </Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>September 2024 – zomer 2026: herstellen brug 167 over de Singelgracht</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>Oktober 2024 – in 2028: vernieuwen brug over de Lijnbaansgracht en stukje Rozengracht</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>Begin 2025 – voorjaar 2026: aanbrengen verbeteringen Jan Evertsenstraat</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>
              Begin 2025 – eind 2025: herstellen brug over de Admiralengracht (met verwijderen hulpbrug)
            </Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>
              Februari 2025 – zomer 2026: herstellen bruggen over het Singel (brug 8), de Herengracht (brug 22),
              Keizersgracht (brug 106) en Prinsengracht (brug 63)
            </Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>Februari 2025 – najaar 2026: aanbrengen verbeteringen Raadhuisstraat</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>Februari 2025 – voorjaar 2026: aanbrengen verbeteringen Rozengracht</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>Oktober 2025 – voorjaar 2027: herinrichting Westermarkt</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>
              In 2027: verwijderen hulpbruggen naast de bruggen over het Singel (brug 8), de Herengracht (brug 22),
              Keizersgracht (brug 106) en Prinsengracht (brug 63)
            </Paragraph>
          </ProgressList.SubStep>
        </ProgressList.SubSteps>
      </ProgressList.Step>]
  },
  decorators: [Story => <Grid>
        <Grid.Cell span={{
      narrow: 4,
      medium: 6,
      wide: 7
    }} start={{
      narrow: 1,
      medium: 2,
      wide: 3
    }}>
          <Heading className="ams-mb-s" level={2}>
            Wanneer
          </Heading>
          <Paragraph className="ams-mb-xl">We verwachten het hele project in 2029 af te ronden.</Paragraph>
          <Story />
        </Grid.Cell>
      </Grid>]
}`,...c.parameters?.docs?.source}}};const V=["Default","WithSubSteps","ConstructionProject"],O=Object.freeze(Object.defineProperty({__proto__:null,ConstructionProject:c,Default:l,WithSubSteps:u,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{c as C,r as P,u as W,O as a,R as m};
