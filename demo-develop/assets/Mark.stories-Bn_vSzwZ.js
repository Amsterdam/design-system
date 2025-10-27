import{r as k,j as e,c as j,P as g,G as u,J as c,U as p,o as h,H as v}from"./iframe-afbnY_83.js";const i=k.forwardRef(({children:a,className:t,...s},r)=>e.jsx("mark",{...s,className:j("ams-mark",t),ref:r,children:a}));i.displayName="Mark";try{i.displayName="Mark",i.__docgenInfo={description:"",displayName:"Mark",props:{}}}catch{}const x={title:"Components/Text/Mark",component:i},l={args:{children:"Wat vinden Amsterdammers belangrijk?"},argTypes:{children:{description:"The text to mark.",table:{disable:!1}}},render:({children:a})=>e.jsxs(g,{children:["Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we de stad beter schoonhouden. ",e.jsx(i,{children:a})," Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren."]})},w=[{category:"Kansspelen",date:new Date("2025-10-27"),fragment:"Op dit moment zijn alle vergunning voor speelautomatenhallen verleend. Als u kansspelautomaten wilt plaatsen in uw horecabedrijf dan heeft u de …",heading:"Vergunning speelautomatenhal of kansspelautomaten aanvragen"},{category:"Veelgevraagd",date:new Date("2024-09-15"),fragment:"U heeft een ontheffing nodig als u de geldende geluidsgrenzen van uw horecagelegenheid wil overschrijden. Kijk hier hoe het werkt en hoe u de …",heading:"Ontheffing geluidsvoorschriften"},{category:"Vergunningen",date:new Date("2023-08-03"),fragment:"Voor de organisatie van grootschalige vechtsportgala’s in Amsterdam moet u een vergunning aanvragen bij de gemeente. Vooraf moet u een Bibobformulier …",heading:"Vergunning vechtsportevenementen"}],b=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),f=(a,t)=>{if(!t)return a;const s=t.split(/\s+/).filter(Boolean).map(n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));if(s.length===0)return a;const r=new RegExp(`(${s.join("|")})`,"gi");return a.split(r).map(n=>n.match(r)?e.jsx(i,{children:n},n):n)},d={render:()=>{const[a,t]=k.useState("horeca vergunning"),s=w.filter(({fragment:r,heading:o})=>[r,o].some(n=>a.split(/\s+/).filter(Boolean).some(m=>n.toLowerCase().includes(m.toLowerCase()))));return e.jsx(u,{children:e.jsxs(u.Cell,{span:{narrow:4,medium:6,wide:8},children:[e.jsxs(c,{className:"ams-mb-m",children:[e.jsx(c.Input,{label:"Zoeken",onChange:r=>t(r.target.value),value:a}),e.jsx(c.Button,{})]}),e.jsxs(g,{className:"ams-mb-xl",children:[e.jsx("strong",{children:s.length})," artikelen gaan over ‘",a,"’."]}),e.jsx(p,{className:"ams-gap-xl",markers:!1,children:s.map(({category:r,date:o,fragment:n,heading:m})=>e.jsx(p.Item,{children:e.jsxs(h,{children:[e.jsx(h.HeadingGroup,{tagline:r,children:e.jsx(v,{level:2,size:"level-4",children:e.jsx(h.Link,{href:"#",children:f(m,a)})})}),e.jsx(g,{className:"ams-mb-xs",children:f(n,a)}),e.jsx(g,{size:"small",children:e.jsx("time",{dateTime:o.toISOString(),children:b.format(o)})})]})},m))})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Wat vinden Amsterdammers belangrijk?'
  },
  argTypes: {
    children: {
      description: 'The text to mark.',
      table: {
        disable: false
      }
    }
  },
  render: ({
    children
  }) => <Paragraph>
      Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we
      de stad beter schoonhouden. <Mark>{children}</Mark> Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want
      elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren.
    </Paragraph>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState('horeca vergunning');
    const searchResults = articles.filter(({
      fragment,
      heading
    }) => [fragment, heading].some(text => query.split(/\\s+/).filter(Boolean).some(word => text.toLowerCase().includes(word.toLowerCase()))));
    return <Grid>
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 8
      }}>
          <SearchField className="ams-mb-m">
            <SearchField.Input label="Zoeken" onChange={e => setQuery(e.target.value)} value={query} />
            <SearchField.Button />
          </SearchField>
          <Paragraph className="ams-mb-xl">
            <strong>{searchResults.length}</strong> artikelen gaan over ‘{query}’.
          </Paragraph>
          <UnorderedList className="ams-gap-xl" markers={false}>
            {searchResults.map(({
            category,
            date,
            fragment,
            heading
          }) => <UnorderedList.Item key={heading}>
                <Card>
                  <Card.HeadingGroup tagline={category}>
                    <Heading level={2} size="level-4">
                      <Card.Link href="#">{mark(heading, query)}</Card.Link>
                    </Heading>
                  </Card.HeadingGroup>
                  <Paragraph className="ams-mb-xs">{mark(fragment, query)}</Paragraph>
                  <Paragraph size="small">
                    <time dateTime={date.toISOString()}>{dateFormat.format(date)}</time>
                  </Paragraph>
                </Card>
              </UnorderedList.Item>)}
          </UnorderedList>
        </Grid.Cell>
      </Grid>;
  }
}`,...d.parameters?.docs?.source}}};const y=["Default","SearchResults"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:l,SearchResults:d,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{C as M,d as S};
