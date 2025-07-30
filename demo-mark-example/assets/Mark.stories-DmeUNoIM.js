import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as d,G as h,h as g,C as f,c as m,H as k}from"./index.esm-CMapxPh_.js";import{c as x}from"./clsx-B-dksMZM.js";import{r as j}from"./index-G8LIXM5I.js";const s=j.forwardRef(({children:a,className:n,...t},r)=>e.jsx("mark",{...t,className:x("ams-mark",n),ref:r,children:a}));s.displayName="Mark";try{s.displayName="Mark",s.__docgenInfo={description:"",displayName:"Mark",props:{}}}catch{}const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,b={title:"Components/Text/Mark",component:s},i={args:{children:"Wat vinden Amsterdammers belangrijk?"},argTypes:{children:{description:"The text to mark.",table:{disable:!1}}},render:({children:a})=>e.jsxs(d,{children:["Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we de stad beter schoonhouden. ",e.jsx(s,{children:a})," Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren."]})},u=[{category:"Kansspelen",date:new Date("2025-10-27"),fragment:"Op dit moment zijn alle vergunning voor speelautomatenhallen verleend. Als u kansspelautomaten wilt plaatsen in uw horecabedrijf dan heeft u de …",heading:"Vergunning speelautomatenhal of kansspelautomaten aanvragen"},{category:"Veelgevraagd",date:new Date("2024-09-15"),fragment:"U heeft een ontheffing nodig als u de geldende geluidsgrenzen van uw horecagelegenheid wil overschrijden. Kijk hier hoe het werkt en hoe u de …",heading:"Ontheffing geluidsvoorschriften"},{category:"Vergunningen",date:new Date("2023-08-03"),fragment:"Voor de organisatie van grootschalige vechtsportgala’s in Amsterdam moet u een vergunning aanvragen bij de gemeente. Vooraf moet u een Bibobformulier …",heading:"Vergunning vechtsportevenementen"}],w=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),p=(a,n="")=>{const t=new RegExp(n.replace(" ","|"),"gi");return a.split(t).map((r,l)=>n.split(" ").includes(r.toLowerCase())?e.jsx(s,{children:r},l):r)},o={args:{query:"horeca vergunning"},argTypes:{query:{control:{type:"text"},description:"The search query to highlight in results."}},render:a=>{const[,n]=y(),t=r=>{n({value:r.target.value})};return e.jsx(h,{children:e.jsxs(h.Cell,{span:{narrow:4,medium:6,wide:8},children:[e.jsxs(g,{className:"ams-mb-m",children:[e.jsx(g.Input,{label:"Zoeken",onChange:t}),e.jsx(g.Button,{})]}),e.jsxs(d,{className:"ams-mb-xl",children:[e.jsx("strong",{children:u.length})," artikelen gaan over ‘",a,"’."]}),e.jsx(f,{gap:"x-large",children:u.map(({category:r,date:l,fragment:v,heading:c})=>e.jsxs(m,{children:[e.jsx(m.HeadingGroup,{tagline:r,children:e.jsx(k,{level:2,size:"level-4",children:e.jsx(m.Link,{href:"#",children:p(c,a)})})}),e.jsx(d,{className:"ams-mb-xs",children:p(v,a)}),e.jsx(d,{size:"small",children:e.jsx("time",{dateTime:l.toISOString(),children:w.format(l)})})]},c))})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  render: (query: MarkPropsAndQueryArg['query']) => {
    const [, setArgs] = useArgs();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setArgs({
        value: event.target.value
      });
    };
    return <Grid>
        <Grid.Cell span={{
        narrow: 4,
        medium: 6,
        wide: 8
      }}>
          <SearchField className="ams-mb-m">
            <SearchField.Input label="Zoeken" onChange={handleChange} />
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
}`,...o.parameters?.docs?.source}}};const C=["Default","SearchResults"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:i,SearchResults:o,__namedExportsOrder:C,default:b},Symbol.toStringTag,{value:"Module"}));export{T as M,o as S};
