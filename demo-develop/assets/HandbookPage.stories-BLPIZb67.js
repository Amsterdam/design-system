import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-BDsysHVl.js";import{t as i}from"./jsx-runtime-Bq1bXGty.js";import{K as a,P as o,X as s,v as c,y as l}from"./index.esm-JkXB4ZCm.js";import{n as u,t as d}from"./config-DcghocmB.js";var f,p,m,h=t((()=>{f=[{body:`Deze regeling vervangt eerdere afspraken en geldt voor alle medewerkers in loondienst van de gemeente Amsterdam. Afwijkingen zijn alleen mogelijk als dit expliciet is vastgelegd in een individuele arbeidsovereenkomst of cao-bijlage.`,heading:`Inleiding`,lead:`Deze regeling beschrijft hoe de gemeente Amsterdam salarissen, salaristoelagen en vergoedingen vaststelt.`,slug:`s1`},{body:`De waardering bepaalt in welke salarisschaal een functie wordt ingedeeld. De procedure volgt de methode die is overeengekomen in de cao Gemeenten.`,children:[{body:`Alle functies binnen de gemeente Amsterdam worden gewaardeerd volgens dezelfde methode. Zo ontstaat een samenhangend loongebouw waarin vergelijkbare functies op hetzelfde niveau zijn ingedeeld.`,heading:`Algemeen`,lead:`De gemeente waardeert alle functies met één consistente methode, zodat vergelijkbare werkzaamheden ook vergelijkbaar worden beloond.`,slug:`s2-1`},{body:`Waardering gebeurt op basis van een functiebeschrijving en een weging van kenmerken als verantwoordelijkheid, complexiteit en vereiste kennis. De uitkomst bepaalt de salarisschaal.`,children:[{body:`De methode kent punten toe aan gezichtspunten zoals kennis, zelfstandigheid, contacten en afbreukrisico. De som van de punten bepaalt de indeling in een salarisschaal. Deze werkwijze is landelijk afgestemd.`,heading:`Methode`,lead:`We gebruiken de HR21-systematiek om functies objectief en vergelijkbaar te waarderen.`,slug:`s2-2-1`},{body:`Een leidinggevende dient een onderbouwd voorstel in bij de afdeling HR. Een onafhankelijke adviseur toetst het voorstel en brengt advies uit aan het bevoegd gezag. Het besluit wordt schriftelijk vastgelegd.`,heading:`Procedure`,lead:`Een waardering doorloopt een vaste route van voorstel, advies en besluit.`,slug:`s2-2-2`},{body:`Bezwaar moet binnen zes weken na het besluit worden ingediend. Een bezwaarcommissie hoort de medewerker en brengt advies uit. Het bevoegd gezag neemt vervolgens een nieuw besluit.`,heading:`Bezwaar`,lead:`Bent u het oneens met een waardering? Dan kunt u bezwaar maken volgens de daarvoor geldende procedure.`,slug:`s2-2-3`}],heading:`Waardering van functies`,lead:`Elke functie krijgt een waardering die past bij de zwaarte van het werk.`,slug:`s2-2`},{body:`Een herwaardering kan leiden tot een hogere of lagere indeling. De procedure is gelijk aan die van een eerste waardering.`,children:[{body:`Herwaardering kan worden aangevraagd door de leidinggevende of door de medewerker zelf. Daarvoor is een actuele functiebeschrijving nodig.`,heading:`Aanleiding`,lead:`Als de inhoud van een functie structureel verandert, kan een herwaardering worden aangevraagd.`,slug:`s2-3-1`},{body:`De procedure volgt dezelfde stappen als de eerste waardering: voorstel, advies en besluit. Gedurende de procedure blijft de huidige indeling van kracht.`,heading:`Procedure`,lead:`Een herwaardering doorloopt dezelfde stappen als een eerste waardering.`,slug:`s2-3-2`}],heading:`Herwaardering`,lead:`Als het werk structureel verandert, kan een functie opnieuw worden gewaardeerd.`,slug:`s2-3`}],heading:`Vaststellen en waarderen van functies`,lead:`Iedere functie binnen de organisatie krijgt een functiebeschrijving en een waardering.`,slug:`s2`},{body:`Een toelage is altijd tijdelijk en wordt schriftelijk toegekend door het bevoegd gezag. Toelagen tellen niet mee voor de pensioengrondslag, tenzij anders bepaald.`,children:[{body:`De hoogte hangt af van het beoordelingsresultaat en is maximaal tien procent van het jaarsalaris. De toelage wordt jaarlijks opnieuw beoordeeld.`,heading:`Functioneringstoelage`,lead:`Medewerkers die structureel uitzonderlijk presteren, kunnen in aanmerking komen voor een functioneringstoelage.`,slug:`s3-1`},{body:`De toelage wordt toegekend voor een periode van maximaal drie jaar. Daarna vervalt de toelage, tenzij de krapte op de markt voortduurt.`,heading:`Arbeidsmarkttoelage`,lead:`Voor functies die lastig te vervullen zijn, kan tijdelijk een arbeidsmarkttoelage worden toegekend.`,slug:`s3-2`}],heading:`Salaristoelagen`,lead:`Bovenop het reguliere salaris kunnen verschillende toelagen worden toegekend.`,slug:`s3`},{body:`Denk aan reiskosten, thuiswerkvergoeding en een vergoeding voor representatiekosten. Declaraties moeten binnen drie maanden worden ingediend via het personeelssysteem.`,heading:`Vergoedingen`,lead:`Naast het salaris kent de gemeente vergoedingen toe voor kosten die met het werk samenhangen.`,slug:`s4`}],p=(e,t=f)=>{for(let n of t){if(n.slug===e)return[];if(n.children){let t=p(e,n.children);if(t!==void 0)return[n.slug,...t]}}},m=(e,t=f)=>{for(let n of t){if(n.slug===e)return n;if(n.children){let t=m(e,n.children);if(t)return t}}}})),g=n({Default:()=>C,__namedExportsOrder:()=>w,default:()=>y}),_,v,y,b,x,S,C,w,T=t((()=>{s(),_=e(r()),u(),h(),v=i(),y={...d,title:`Pages/Public/Handbook Page`,parameters:{...d.parameters,skipLinks:[{label:`Direct naar de inhoudsopgave`,targetId:`inhoudsopgave`},{label:`Direct naar de inhoud`,targetId:`inhoud`}]}},b=`s2-2-1`,x=e=>{let t=new Set(p(e)??[]);return m(e)?.children&&t.add(e),t},S=(e,t)=>(0,v.jsx)(a.List,{children:e.map(e=>(0,v.jsx)(a.Link,{"aria-current":e.slug===t.currentSlug?`page`:void 0,expanded:t.expandedSlugs.has(e.slug),href:`#${e.slug}`,label:e.heading,onClick:n=>t.onSelect(n,e.slug),onToggle:n=>t.onToggle(e.slug,n),children:e.children&&S(e.children,t)},e.slug))}),C={render:()=>{let[e,t]=(0,_.useState)(b),[n,r]=(0,_.useState)(()=>x(b)),i=(e,n)=>{e.preventDefault(),t(n),r(e=>new Set([...e,...x(n)]))},s=(e,t)=>{r(n=>{let r=new Set(n);return t?r.add(e):r.delete(e),r})},u=m(e)??f[0];return(0,v.jsxs)(c,{paddingVertical:`x-large`,children:[(0,v.jsx)(c.Cell,{span:{narrow:4,medium:3,wide:4},children:(0,v.jsx)(a,{collapsible:!0,heading:`Inhoudsopgave`,id:`inhoudsopgave`,children:S(f,{currentSlug:e,expandedSlugs:n,onSelect:i,onToggle:s})})}),(0,v.jsx)(c.Cell,{span:{narrow:4,medium:5,wide:7},children:(0,v.jsxs)(`main`,{className:`ams-prose`,id:`inhoud`,children:[(0,v.jsx)(l,{level:1,children:u.heading}),(0,v.jsx)(o,{size:`large`,children:u.lead}),(0,v.jsx)(o,{children:u.body})]})})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentSlug, setCurrentSlug] = useState(initialSlug);
    const [expandedSlugs, setExpandedSlugs] = useState(() => branchFor(initialSlug));
    const handleSelect = (event: MouseEvent<HTMLAnchorElement>, slug: string) => {
      event.preventDefault();
      setCurrentSlug(slug);
      setExpandedSlugs(slugs => new Set([...slugs, ...branchFor(slug)]));
    };
    const handleToggle = (slug: string, expanded: boolean) => {
      setExpandedSlugs(slugs => {
        const nextSlugs = new Set(slugs);
        if (expanded) {
          nextSlugs.add(slug);
        } else {
          nextSlugs.delete(slug);
        }
        return nextSlugs;
      });
    };
    const currentPage = findPage(currentSlug) ?? pages[0];
    return <Grid paddingVertical="x-large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 3,
        wide: 4
      }}>
          <TableOfContents collapsible heading="Inhoudsopgave" id="inhoudsopgave">
            {renderTocList(pages, {
            currentSlug,
            expandedSlugs,
            onSelect: handleSelect,
            onToggle: handleToggle
          })}
          </TableOfContents>
        </Grid.Cell>
        <Grid.Cell span={{
        narrow: 4,
        medium: 5,
        wide: 7
      }}>
          <main className="ams-prose" id="inhoud">
            <Heading level={1}>{currentPage.heading}</Heading>
            <Paragraph size="large">{currentPage.lead}</Paragraph>
            <Paragraph>{currentPage.body}</Paragraph>
          </main>
        </Grid.Cell>
      </Grid>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`]}));T();export{C as Default,w as __namedExportsOrder,y as default,T as n,g as t};