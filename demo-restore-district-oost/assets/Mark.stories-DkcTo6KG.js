import{a as e,n as t,r as n}from"./chunk-DnJy8xQt.js";import{B as r,Dn as i,I as a,Wt as o,X as s,Y as c,b as l,u,x as d}from"./iframe-CwKGM_9D.js";import{M as f,t as p}from"./src-BtIgbX7t.js";var m=n({Default:()=>v,SearchResults:()=>S,__namedExportsOrder:()=>C,default:()=>_}),h,g,_,v,y,b,x,S,C,w=t((()=>{s(),p(),h=e(i()),g=o(),_={title:`Components/Text/Mark`,component:f},v={args:{children:`Wat vinden Amsterdammers belangrijk?`},argTypes:{children:{description:`The text to mark.`,table:{disable:!1}}},render:({children:e})=>(0,g.jsxs)(a,{children:[`Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we de stad beter schoonhouden. `,(0,g.jsx)(f,{children:e}),` Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren.`]})},y=[{category:`Kansspelen`,date:new Date(`2025-10-27`),fragment:`Op dit moment zijn alle vergunning voor speelautomatenhallen verleend. Als u kansspelautomaten wilt plaatsen in uw horecabedrijf dan heeft u de …`,heading:`Vergunning speelautomatenhal of kansspelautomaten aanvragen`},{category:`Veelgevraagd`,date:new Date(`2024-09-15`),fragment:`U heeft een ontheffing nodig als u de geldende geluidsgrenzen van uw horecagelegenheid wil overschrijden. Kijk hier hoe het werkt en hoe u de …`,heading:`Ontheffing geluidsvoorschriften`},{category:`Vergunningen`,date:new Date(`2023-08-03`),fragment:`Voor de organisatie van grootschalige vechtsportgala’s in Amsterdam moet u een vergunning aanvragen bij de gemeente. Vooraf moet u een Bibobformulier …`,heading:`Vergunning vechtsportevenementen`}],b=new Intl.DateTimeFormat(`nl`,{day:`numeric`,month:`long`,year:`numeric`}),x=(e,t,n)=>{if(!t)return e;let r=t.split(/\s+/).filter(Boolean).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`));if(r.length===0)return e;let i=RegExp(`(${r.join(`|`)})`,`gi`);return e.split(i).map(e=>e.match(i)?(0,g.jsx)(f,{...n,children:e},e):e)},S={render:e=>{let[t,n]=(0,h.useState)(`horeca vergunning`),i=y.filter(({fragment:e,heading:n})=>[e,n].some(e=>t.split(/\s+/).filter(Boolean).some(t=>e.toLowerCase().includes(t.toLowerCase()))));return(0,g.jsx)(l,{children:(0,g.jsxs)(l.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,g.jsxs)(r,{className:`ams-mb-m`,children:[(0,g.jsx)(r.Input,{label:`Zoeken`,onChange:e=>n(e.target.value),value:t}),(0,g.jsx)(r.Button,{})]}),(0,g.jsxs)(a,{className:`ams-mb-xl`,children:[(0,g.jsx)(`strong`,{children:i.length}),` artikelen gaan over ‘`,t,`’.`]}),(0,g.jsx)(c,{className:`ams-gap-xl`,markers:!1,children:i.map(({category:n,date:r,fragment:i,heading:o})=>(0,g.jsx)(c.Item,{children:(0,g.jsxs)(u,{children:[(0,g.jsx)(u.HeadingGroup,{tagline:n,children:(0,g.jsx)(d,{level:2,size:`level-4`,children:(0,g.jsx)(u.Link,{href:`#`,children:x(o,t,e)})})}),(0,g.jsx)(a,{className:`ams-mb-xs`,children:x(i,t,e)}),(0,g.jsx)(a,{size:`small`,children:(0,g.jsx)(`time`,{dateTime:r.toISOString(),children:b.format(r)})})]})},o))})]})})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`SearchResults`]}));w();export{v as Default,S as SearchResults,C as __namedExportsOrder,_ as default,w as n,m as t};