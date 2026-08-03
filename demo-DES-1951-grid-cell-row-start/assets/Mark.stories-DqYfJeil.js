import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{B as i,I as a,Q as o,Z as s,b as c,l,x as u}from"./index.esm-ChsH2NzG.js";import{n as d,t as f}from"./Mark-Bkf9K4m1.js";import{d as p,r as m}from"./argTypes-CTYEle7b.js";var h=t({Default:()=>y,SearchResults:()=>C,__namedExportsOrder:()=>w,default:()=>v}),g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{o(),d(),g=n(),p(),_=r(),v={title:`Components/Text/Mark`,component:f},y={args:{children:`Wat vinden Amsterdammers belangrijk?`},argTypes:{children:m(`The text to mark.`)},render:({children:e})=>(0,_.jsxs)(a,{children:[`Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we de stad beter schoonhouden. `,(0,_.jsx)(f,{children:e}),` Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren.`]})},b=[{category:`Kansspelen`,date:new Date(`2025-10-27`),fragment:`Op dit moment zijn alle vergunning voor speelautomatenhallen verleend. Als u kansspelautomaten wilt plaatsen in uw horecabedrijf dan heeft u de …`,heading:`Vergunning speelautomatenhal of kansspelautomaten aanvragen`},{category:`Veelgevraagd`,date:new Date(`2024-09-15`),fragment:`U heeft een ontheffing nodig als u de geldende geluidsgrenzen van uw horecagelegenheid wil overschrijden. Kijk hier hoe het werkt en hoe u de …`,heading:`Ontheffing geluidsvoorschriften`},{category:`Vergunningen`,date:new Date(`2023-08-03`),fragment:`Voor de organisatie van grootschalige vechtsportgala’s in Amsterdam moet u een vergunning aanvragen bij de gemeente. Vooraf moet u een Bibobformulier …`,heading:`Vergunning vechtsportevenementen`}],x=new Intl.DateTimeFormat(`nl`,{day:`numeric`,month:`long`,year:`numeric`}),S=(e,t,n)=>{if(!t)return e;let r=t.split(/\s+/).filter(Boolean).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`));if(r.length===0)return e;let i=RegExp(`(${r.join(`|`)})`,`gi`);return e.split(i).map(e=>e.match(i)?(0,_.jsx)(f,{...n,children:e},e):e)},C={render:e=>{let[t,n]=(0,g.useState)(`horeca vergunning`),r=b.filter(({fragment:e,heading:n})=>[e,n].some(e=>t.split(/\s+/).filter(Boolean).some(t=>e.toLowerCase().includes(t.toLowerCase()))));return(0,_.jsx)(c,{children:(0,_.jsxs)(c.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,_.jsxs)(i,{className:`ams-mb-m`,children:[(0,_.jsx)(i.Input,{label:`Zoeken`,onChange:e=>n(e.target.value),value:t}),(0,_.jsx)(i.Button,{})]}),(0,_.jsxs)(a,{className:`ams-mb-xl`,children:[(0,_.jsx)(`strong`,{children:r.length}),` artikelen gaan over ‘`,t,`’.`]}),(0,_.jsx)(s,{className:`ams-gap-xl`,markers:!1,children:r.map(({category:n,date:r,fragment:i,heading:o})=>(0,_.jsx)(s.Item,{children:(0,_.jsxs)(l,{children:[(0,_.jsx)(l.HeadingGroup,{tagline:n,children:(0,_.jsx)(u,{level:2,size:`level-4`,children:(0,_.jsx)(l.Link,{href:`#`,children:S(o,t,e)})})}),(0,_.jsx)(a,{className:`ams-mb-xs`,children:S(i,t,e)}),(0,_.jsx)(a,{size:`small`,children:(0,_.jsx)(`time`,{dateTime:r.toISOString(),children:x.format(r)})})]})},o))})]})})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Wat vinden Amsterdammers belangrijk?'
  },
  // Only this story renders a single Mark whose text the control drives – the other story composes many instances.
  argTypes: {
    children: childrenArgType('The text to mark.')
  },
  render: ({
    children
  }) => <Paragraph>
      Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we
      de stad beter schoonhouden. <Mark>{children}</Mark> Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want
      elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren.
    </Paragraph>
}`,...y.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`SearchResults`]})))()}export{C as n,T as r,h as t};