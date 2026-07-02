import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-BTu_umhU.js";import{t as i}from"./jsx-runtime-BCDDjCIb.js";import{J as a,P as o,R as s,c,q as l,v as u,y as d}from"./index.esm-CXl0WGPA.js";import{t as f,tt as p}from"./src-Dk4zeSri.js";import{f as m,r as h}from"./argTypes-K2rctYNz.js";var g=e({Default:()=>b,SearchResults:()=>w,__namedExportsOrder:()=>T,default:()=>y}),_,v,y,b,x,S,C,w,T,E=t((()=>{a(),f(),_=n(r()),m(),v=i(),y={title:`Components/Text/Mark`,component:p},b={args:{children:`Wat vinden Amsterdammers belangrijk?`},argTypes:{children:h(`The text to mark.`)},render:({children:e})=>(0,v.jsxs)(o,{children:[`Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we de stad beter schoonhouden. `,(0,v.jsx)(p,{children:e}),` Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren.`]})},x=[{category:`Kansspelen`,date:new Date(`2025-10-27`),fragment:`Op dit moment zijn alle vergunning voor speelautomatenhallen verleend. Als u kansspelautomaten wilt plaatsen in uw horecabedrijf dan heeft u de …`,heading:`Vergunning speelautomatenhal of kansspelautomaten aanvragen`},{category:`Veelgevraagd`,date:new Date(`2024-09-15`),fragment:`U heeft een ontheffing nodig als u de geldende geluidsgrenzen van uw horecagelegenheid wil overschrijden. Kijk hier hoe het werkt en hoe u de …`,heading:`Ontheffing geluidsvoorschriften`},{category:`Vergunningen`,date:new Date(`2023-08-03`),fragment:`Voor de organisatie van grootschalige vechtsportgala’s in Amsterdam moet u een vergunning aanvragen bij de gemeente. Vooraf moet u een Bibobformulier …`,heading:`Vergunning vechtsportevenementen`}],S=new Intl.DateTimeFormat(`nl`,{day:`numeric`,month:`long`,year:`numeric`}),C=(e,t,n)=>{if(!t)return e;let r=t.split(/\s+/).filter(Boolean).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`));if(r.length===0)return e;let i=RegExp(`(${r.join(`|`)})`,`gi`);return e.split(i).map(e=>e.match(i)?(0,v.jsx)(p,{...n,children:e},e):e)},w={render:e=>{let[t,n]=(0,_.useState)(`horeca vergunning`),r=x.filter(({fragment:e,heading:n})=>[e,n].some(e=>t.split(/\s+/).filter(Boolean).some(t=>e.toLowerCase().includes(t.toLowerCase()))));return(0,v.jsx)(u,{children:(0,v.jsxs)(u.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,v.jsxs)(s,{className:`ams-mb-m`,children:[(0,v.jsx)(s.Input,{label:`Zoeken`,onChange:e=>n(e.target.value),value:t}),(0,v.jsx)(s.Button,{})]}),(0,v.jsxs)(o,{className:`ams-mb-xl`,children:[(0,v.jsx)(`strong`,{children:r.length}),` artikelen gaan over ‘`,t,`’.`]}),(0,v.jsx)(l,{className:`ams-gap-xl`,markers:!1,children:r.map(({category:n,date:r,fragment:i,heading:a})=>(0,v.jsx)(l.Item,{children:(0,v.jsxs)(c,{children:[(0,v.jsx)(c.HeadingGroup,{tagline:n,children:(0,v.jsx)(d,{level:2,size:`level-4`,children:(0,v.jsx)(c.Link,{href:`#`,children:C(a,t,e)})})}),(0,v.jsx)(o,{className:`ams-mb-xs`,children:C(i,t,e)}),(0,v.jsx)(o,{size:`small`,children:(0,v.jsx)(`time`,{dateTime:r.toISOString(),children:S.format(r)})})]})},a))})]})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Default`,`SearchResults`]}));E();export{b as Default,w as SearchResults,T as __namedExportsOrder,y as default,E as n,g as t};