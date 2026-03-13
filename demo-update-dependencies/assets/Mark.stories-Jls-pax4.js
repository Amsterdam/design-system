import{r as j,j as e,c as v,P as c,G as p,a7 as h,U as f,t as u,H as x}from"./iframe-3M2egxjQ.js";const i=j.forwardRef(({children:a,className:r,...o},t)=>e.jsx("mark",{...o,className:v("ams-mark",r),ref:t,children:a}));i.displayName="Mark";try{i.displayName="Mark",i.__docgenInfo={description:"",displayName:"Mark",props:{}}}catch{}const w={title:"Components/Text/Mark",component:i},d={args:{children:"Wat vinden Amsterdammers belangrijk?"},argTypes:{children:{description:"The text to mark.",table:{disable:!1}}},render:({children:a})=>e.jsxs(c,{children:["Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we de stad beter schoonhouden. ",e.jsx(i,{children:a})," Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren."]})},b=[{category:"Kansspelen",date:new Date("2025-10-27"),fragment:"Op dit moment zijn alle vergunning voor speelautomatenhallen verleend. Als u kansspelautomaten wilt plaatsen in uw horecabedrijf dan heeft u de …",heading:"Vergunning speelautomatenhal of kansspelautomaten aanvragen"},{category:"Veelgevraagd",date:new Date("2024-09-15"),fragment:"U heeft een ontheffing nodig als u de geldende geluidsgrenzen van uw horecagelegenheid wil overschrijden. Kijk hier hoe het werkt en hoe u de …",heading:"Ontheffing geluidsvoorschriften"},{category:"Vergunningen",date:new Date("2023-08-03"),fragment:"Voor de organisatie van grootschalige vechtsportgala’s in Amsterdam moet u een vergunning aanvragen bij de gemeente. Vooraf moet u een Bibobformulier …",heading:"Vergunning vechtsportevenementen"}],y=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),k=(a,r,o)=>{if(!r)return a;const t=r.split(/\s+/).filter(Boolean).map(n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));if(t.length===0)return a;const s=new RegExp(`(${t.join("|")})`,"gi");return a.split(s).map(n=>n.match(s)?e.jsx(i,{...o,children:n},n):n)},m={render:a=>{const[r,o]=j.useState("horeca vergunning"),t=b.filter(({fragment:s,heading:l})=>[s,l].some(n=>r.split(/\s+/).filter(Boolean).some(g=>n.toLowerCase().includes(g.toLowerCase()))));return e.jsx(p,{children:e.jsxs(p.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[e.jsxs(h,{className:"ams-mb-m",children:[e.jsx(h.Input,{label:"Zoeken",onChange:s=>o(s.target.value),value:r}),e.jsx(h.Button,{})]}),e.jsxs(c,{className:"ams-mb-xl",children:[e.jsx("strong",{children:t.length})," artikelen gaan over ‘",r,"’."]}),e.jsx(f,{className:"ams-gap-xl",markers:!1,children:t.map(({category:s,date:l,fragment:n,heading:g})=>e.jsx(f.Item,{children:e.jsxs(u,{children:[e.jsx(u.HeadingGroup,{tagline:s,children:e.jsx(x,{level:2,size:"level-4",children:e.jsx(u.Link,{href:"#",children:k(g,r,a)})})}),e.jsx(c,{className:"ams-mb-xs",children:k(n,r,a)}),e.jsx(c,{size:"small",children:e.jsx("time",{dateTime:l.toISOString(),children:y.format(l)})})]})},g))})]})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [query, setQuery] = useState('horeca vergunning');
    const searchResults = articles.filter(({
      fragment,
      heading
    }) => [fragment, heading].some(text => query.split(/\\s+/).filter(Boolean).some(word => text.toLowerCase().includes(word.toLowerCase()))));
    return <Grid>
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 7
      }} start={{
        narrow: 1,
        medium: 2,
        wide: 3
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
                      <Card.Link href="#">{mark(heading, query, args)}</Card.Link>
                    </Heading>
                  </Card.HeadingGroup>
                  <Paragraph className="ams-mb-xs">{mark(fragment, query, args)}</Paragraph>
                  <Paragraph size="small">
                    <time dateTime={date.toISOString()}>{dateFormat.format(date)}</time>
                  </Paragraph>
                </Card>
              </UnorderedList.Item>)}
          </UnorderedList>
        </Grid.Cell>
      </Grid>;
  }
}`,...m.parameters?.docs?.source}}};const S=["Default","SearchResults"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:d,SearchResults:m,__namedExportsOrder:S,default:w},Symbol.toStringTag,{value:"Module"}));export{z as M,m as S};
