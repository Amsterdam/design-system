import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as g,G as p,h as c,C as k,c as h,H as j}from"./index.esm-CMapxPh_.js";import{c as x}from"./clsx-B-dksMZM.js";import{r as y}from"./index-G8LIXM5I.js";const o=y.forwardRef(({children:a,className:r,...s},t)=>e.jsx("mark",{...s,className:x("ams-mark",r),ref:t,children:a}));o.displayName="Mark";try{o.displayName="Mark",o.__docgenInfo={description:"",displayName:"Mark",props:{}}}catch{}const{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,w={title:"Components/Text/Mark",component:o},i={args:{children:"Wat vinden Amsterdammers belangrijk?"},argTypes:{children:{description:"The text to mark.",table:{disable:!1}}},render:({children:a})=>e.jsxs(g,{children:["Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we de stad beter schoonhouden. ",e.jsx(o,{children:a})," Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren."]})},f=[{category:"Kansspelen",date:new Date("2025-10-27"),fragment:"Op dit moment zijn alle vergunning voor speelautomatenhallen verleend. Als u kansspelautomaten wilt plaatsen in uw horecabedrijf dan heeft u de …",heading:"Vergunning speelautomatenhal of kansspelautomaten aanvragen"},{category:"Veelgevraagd",date:new Date("2024-09-15"),fragment:"U heeft een ontheffing nodig als u de geldende geluidsgrenzen van uw horecagelegenheid wil overschrijden. Kijk hier hoe het werkt en hoe u de …",heading:"Ontheffing geluidsvoorschriften"},{category:"Vergunningen",date:new Date("2023-08-03"),fragment:"Voor de organisatie van grootschalige vechtsportgala’s in Amsterdam moet u een vergunning aanvragen bij de gemeente. Vooraf moet u een Bibobformulier …",heading:"Vergunning vechtsportevenementen"}],C=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),v=(a,r)=>{if(!r)return a;const s=r.split(/\s+/).filter(Boolean).map(n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));if(s.length===0)return a;const t=new RegExp(`(${s.join("|")})`,"gi");return a.split(t).map((n,m)=>n.match(t)?e.jsx(o,{children:n},m):n)},l={args:{query:"horeca vergunning"},argTypes:{query:{control:{type:"text"},description:"The search query to highlight in results."}},render:a=>{const{query:r}=a,[,s]=b(),t=d=>{s({query:d.target.value})};return e.jsx(p,{children:e.jsxs(p.Cell,{span:{narrow:4,medium:6,wide:8},children:[e.jsxs(c,{className:"ams-mb-m",children:[e.jsx(c.Input,{label:"Zoeken",value:r,onChange:t}),e.jsx(c.Button,{})]}),e.jsxs(g,{className:"ams-mb-xl",children:[e.jsx("strong",{children:f.length})," artikelen gaan over ‘",r,"’."]}),e.jsx(k,{gap:"x-large",children:f.map(({category:d,date:n,fragment:m,heading:u})=>e.jsxs(h,{children:[e.jsx(h.HeadingGroup,{tagline:d,children:e.jsx(j,{level:2,size:"level-4",children:e.jsx(h.Link,{href:"#",children:v(u,r)})})}),e.jsx(g,{className:"ams-mb-xs",children:v(m,r)}),e.jsx(g,{size:"small",children:e.jsx("time",{dateTime:n.toISOString(),children:C.format(n)})})]},u))})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    query: 'horeca vergunning'
  },
  argTypes: {
    query: {
      control: {
        type: 'text'
      },
      description: 'The search query to highlight in results.'
    }
  },
  render: (args: MarkPropsAndQueryArg) => {
    const {
      query
    } = args;
    const [, setArgs] = useArgs();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setArgs({
        query: event.target.value
      });
    };
    return <Grid>
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 8
      }}>
          <SearchField className="ams-mb-m">
            <SearchField.Input label="Zoeken" value={query} onChange={handleChange} />
            <SearchField.Button />
          </SearchField>
          <Paragraph className="ams-mb-xl">
            <strong>{searchResults.length}</strong> artikelen gaan over ‘{query}’.
          </Paragraph>
          <Column gap="x-large">
            {searchResults.map(({
            category,
            date,
            fragment,
            heading
          }) => <Card key={heading}>
                <Card.HeadingGroup tagline={category}>
                  <Heading level={2} size="level-4">
                    <Card.Link href="#">{mark(heading, query)}</Card.Link>
                  </Heading>
                </Card.HeadingGroup>
                <Paragraph className="ams-mb-xs">{mark(fragment, query)}</Paragraph>
                <Paragraph size="small">
                  <time dateTime={date.toISOString()}>{dateFormat.format(date)}</time>
                </Paragraph>
              </Card>)}
          </Column>
        </Grid.Cell>
      </Grid>;
  }
}`,...l.parameters?.docs?.source}}};const _=["Default","SearchResults"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:i,SearchResults:l,__namedExportsOrder:_,default:w},Symbol.toStringTag,{value:"Module"}));export{P as M,l as S};
