import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as M,P as g,v as i,c as p,d as u,j as ee,F as A,C as ae,T as v,f as P,R as ne,l as _,m as te,B as se}from"./index.esm-DWv39Xqv.js";import{b as w,j as R}from"./exampleContent-PGFPgakh.js";import{c as L}from"./clsx-B-dksMZM.js";import{r}from"./index-C0MU9AHG.js";import{u as re}from"./useKeyboardFocus-CeWzemY6.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const le={activeTabId:void 0,tabsId:"",updateTab:()=>{}},N=r.createContext(le),G=r.forwardRef(({children:a,className:n,onClick:t,tab:s,...o},h)=>{const{activeTabId:d,tabsId:c,updateTab:F}=r.useContext(N),m=b=>{t==null||t(b),r.startTransition(()=>{F(s)})};return e.jsxs("button",{...o,"aria-controls":`${c}-panel-${s}`,"aria-selected":d===s,className:L("ams-tabs__button",n),id:`${c}-tab-${s}`,onClick:m,ref:h,role:"tab",tabIndex:d===s?0:-1,children:[e.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:a}),e.jsx("span",{className:"ams-tabs__button-label",children:a})]})});G.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:null,description:"An identifier.",name:"tab",required:!0,type:{name:"string"}}}}}catch{}const Y=r.forwardRef(({children:a,className:n,...t},s)=>e.jsx("div",{...t,className:L("ams-tabs__list",n),ref:s,role:"tablist",children:a}));Y.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const J=r.forwardRef(({children:a,className:n,tab:t,...s},o)=>{const{activeTabId:h,tabsId:d}=r.useContext(N);return t!==h?null:e.jsx("div",{...s,"aria-labelledby":`${d}-tab-${t}`,className:L("ams-tabs__panel",n),id:`${d}-panel-${t}`,ref:o,role:"tabpanel",tabIndex:0,children:a})});J.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"string"}}}}}catch{}const Q=r.forwardRef(({activeTab:a,children:n,className:t,onTabChange:s,...o},h)=>{const d=r.useId(),c=r.useRef(null),[F,m]=r.useState(),b=r.useMemo(()=>{if(!Array.isArray(n))return[];const f=n[0].props.children;return f.props?[f.props.tab]:Array.isArray(f)?f.map(Z=>Z.props.tab):[]},[n]);r.useEffect(()=>{a?b.includes(a)?m(a):(console.warn(`The active tab "${a}" does not exist. Falling back to the first tab.`),m(b[0])):m(b[0])},[a,b]);const U=C=>{m(C),s==null||s(C)};r.useImperativeHandle(h,()=>c.current);const{keyDown:X}=re(c,{focusableElements:['button[role="tab"]','div[role="tabpanel"]'],horizontally:!0,rotating:!0});return e.jsx(N.Provider,{value:{activeTabId:F,tabsId:d,updateTab:U},children:e.jsx("div",{...o,className:L("ams-tabs",t),onKeyDown:X,ref:c,children:n})})});Q.displayName="Tabs";const l=Object.assign(Q,{Button:G,List:Y,Panel:J});try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The identifier of the initially active tab. Corresponds to its `tab` value.",name:"activeTab",required:!1,type:{name:"string"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((tabId: string) => void)"}}}}}catch{}const I=1e3,ie=({children:a})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${I}ms delay…`);let n=performance.now();for(;performance.now()-n<I;);return a},B=[{body:w(),label:"Gegevens"},{body:w(),label:"Aanslagen"},{body:e.jsxs(e.Fragment,{children:["(This tab panel simulates a load time of ",I," milliseconds.)",e.jsx(ie,{})]}),label:"Documenten"},{body:w(),label:"Acties"}],oe=[e.jsx(l.List,{children:B.map(({label:a})=>e.jsx(l.Button,{tab:a,children:a},a))},"tabsList"),B.map(({body:a,label:n})=>e.jsxs(l.Panel,{tab:n,children:[e.jsx(M,{className:"ams-mb--xs",level:3,children:n}),e.jsx(g,{children:a})]},n))],de={title:"Components/Containers/Tabs",component:l,args:{children:oe},argTypes:{onTabChange:{action:"clicked",description:"Provides the id of the activated tab."}}},y={},x={args:{activeTab:"Acties"}},T={args:{children:[e.jsx(l.List,{children:R.map(a=>e.jsx(l.Button,{tab:a,children:a},a))},"tabsList"),R.map(a=>e.jsx(l.Panel,{tab:a,children:e.jsxs(i,{children:[e.jsxs(i.Caption,{children:["Voorbeeld van een tabel voor ",a==="Weesp"?"stadsgebied":"stadsdeel"," ",a]}),e.jsx(i.Header,{children:e.jsxs(i.Row,{children:[e.jsx(i.HeaderCell,{}),Array.from({length:12},(n,t)=>e.jsx(i.HeaderCell,{children:"Kolom"},t))]})}),e.jsx(i.Body,{children:Array.from({length:3},(n,t)=>e.jsxs(i.Row,{children:[e.jsx(i.HeaderCell,{scope:"row",children:"Rij"}),Array.from({length:12},(s,o)=>e.jsxs(i.Cell,{style:{textAlign:"end"},children:[(t+1)*(o+1),".000"]},o))]},t))})]})},a))]}},j={args:{children:[e.jsxs(l.List,{children:[e.jsx(l.Button,{tab:"form",children:"Form"},"form"),e.jsx(l.Button,{tab:"tab",children:"Nog een tab"},"tab")]},"tabsList"),e.jsx(l.Panel,{tab:"form",children:e.jsxs("form",{className:"ams-gap--md",id:"main",onSubmit:a=>a.preventDefault(),children:[e.jsxs(p,{children:[e.jsx(u,{htmlFor:"body",children:"Wat wilt u aan de gemeente vragen?"}),e.jsx(g,{id:"bodyDescription",size:"small",children:"Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen."}),e.jsx(ee,{"aria-describedby":"bodyDescription",id:"body",rows:4})]}),e.jsx(A,{"aria-describedby":"contactDetailsDescription",legend:"Wat zijn uw gegevens?",children:e.jsxs(ae,{gap:"small",children:[e.jsx(g,{id:"contactDetailsDescription",children:"Wij hebben uw gegevens nodig om contact met u te kunnen opnemen."}),e.jsxs(p,{children:[e.jsx(u,{htmlFor:"initials",children:"Voorletters"}),e.jsx(v,{id:"initials",name:"initials"})]}),e.jsxs(p,{children:[e.jsx(u,{htmlFor:"familyName",children:"Achternaam"}),e.jsx(v,{autoComplete:"family-name",id:"familyName",name:"familyName"})]}),e.jsxs(A,{legend:"Woonplaats",children:[e.jsx(P,{name:"city",value:"amsterdam",children:"Amsterdam"}),e.jsx(P,{name:"city",value:"weesp",children:"Weesp"}),e.jsx(P,{name:"city",value:"anders",children:"Anders"})]}),e.jsxs(p,{children:[e.jsx(u,{htmlFor:"email",children:"E-mail"}),e.jsx(v,{autoComplete:"email",id:"email",name:"email"})]}),e.jsxs(ne,{wrap:!0,children:[e.jsxs(p,{children:[e.jsx(u,{htmlFor:"countryCode",children:"Landnummer"}),e.jsxs(_,{id:"countryCode",name:"countryCode",children:[e.jsx(_.Option,{value:"+31",children:"Nederland +31"}),e.jsx(_.Option,{value:"+32",children:"België +32"}),e.jsx(_.Option,{value:"+33",children:"Frankrijk +33"})]})]}),e.jsxs(p,{children:[e.jsx(u,{htmlFor:"phone",children:"Telefoonnummer"}),e.jsx(v,{autoComplete:"tel",id:"phone",name:"phone"})]})]})]})}),e.jsx(te,{heading:"Waarom vragen we om deze gegevens?",headingLevel:2,children:e.jsx(g,{children:"We bewaren uw contactgegevens voor het afhandelen van uw vraag of klacht en het verbeteren van onze dienstverlening."})}),e.jsx("div",{children:e.jsx(se,{type:"submit",children:"Versturen"})})]})},"form"),e.jsxs(l.Panel,{tab:"tab",children:[e.jsx(M,{level:3,children:"Nog een tab"}),e.jsx(g,{children:w()})]},"tab")]}};var S,W,k;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(k=(W=y.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var D,H,O;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    activeTab: 'Acties'
  }
}`,...(O=(H=x.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var V,$,z;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: [<Tabs.List key="tabsList">
        {cityParts.map(name => <Tabs.Button key={name} tab={name}>
            {name}
          </Tabs.Button>)}
      </Tabs.List>, cityParts.map(name => <Tabs.Panel key={name} tab={name}>
          <Table>
            <Table.Caption>
              Voorbeeld van een tabel voor {name === 'Weesp' ? 'stadsgebied' : 'stadsdeel'} {name}
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                {Array.from({
              length: 12
            }, (_, index) => <Table.HeaderCell key={index}>Kolom</Table.HeaderCell>)}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Array.from({
            length: 3
          }, (_, rowIndex) => <Table.Row key={rowIndex}>
                  <Table.HeaderCell scope="row">Rij</Table.HeaderCell>
                  {Array.from({
              length: 12
            }, (_, columnIndex) => <Table.Cell key={columnIndex} style={{
              textAlign: 'end'
            }}>
                      {(rowIndex + 1) * (columnIndex + 1)}.000
                    </Table.Cell>)}
                </Table.Row>)}
            </Table.Body>
          </Table>
        </Tabs.Panel>)]
  }
}`,...(z=($=T.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var E,q,K;j.parameters={...j.parameters,docs:{...(E=j.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: [<Tabs.List key="tabsList">
        <Tabs.Button key="form" tab="form">
          Form
        </Tabs.Button>
        <Tabs.Button key="tab" tab="tab">
          Nog een tab
        </Tabs.Button>
      </Tabs.List>, <Tabs.Panel key="form" tab="form">
        <form className="ams-gap--md" id="main" onSubmit={e => e.preventDefault()}>
          <Field>
            <Label htmlFor="body">Wat wilt u aan de gemeente vragen?</Label>
            <Paragraph id="bodyDescription" size="small">
              Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen.
            </Paragraph>
            <TextArea aria-describedby="bodyDescription" id="body" rows={4} />
          </Field>
          <FieldSet aria-describedby="contactDetailsDescription" legend="Wat zijn uw gegevens?">
            <Column gap="small">
              <Paragraph id="contactDetailsDescription">
                Wij hebben uw gegevens nodig om contact met u te kunnen opnemen.
              </Paragraph>
              <Field>
                <Label htmlFor="initials">Voorletters</Label>
                <TextInput id="initials" name="initials" />
              </Field>
              <Field>
                <Label htmlFor="familyName">Achternaam</Label>
                <TextInput autoComplete="family-name" id="familyName" name="familyName" />
              </Field>
              <FieldSet legend="Woonplaats">
                <Radio name="city" value="amsterdam">
                  Amsterdam
                </Radio>
                <Radio name="city" value="weesp">
                  Weesp
                </Radio>
                <Radio name="city" value="anders">
                  Anders
                </Radio>
              </FieldSet>
              <Field>
                <Label htmlFor="email">E-mail</Label>
                <TextInput autoComplete="email" id="email" name="email" />
              </Field>
              <Row wrap>
                <Field>
                  <Label htmlFor="countryCode">Landnummer</Label>
                  <Select id="countryCode" name="countryCode">
                    <Select.Option value="+31">Nederland +31</Select.Option>
                    <Select.Option value="+32">België +32</Select.Option>
                    <Select.Option value="+33">Frankrijk +33</Select.Option>
                  </Select>
                </Field>
                <Field>
                  <Label htmlFor="phone">Telefoonnummer</Label>
                  <TextInput autoComplete="tel" id="phone" name="phone" />
                </Field>
              </Row>
            </Column>
          </FieldSet>
          <Alert heading="Waarom vragen we om deze gegevens?" headingLevel={2}>
            <Paragraph>
              We bewaren uw contactgegevens voor het afhandelen van uw vraag of klacht en het verbeteren van onze
              dienstverlening.
            </Paragraph>
          </Alert>
          <div>
            <Button type="submit">Versturen</Button>
          </div>
        </form>
      </Tabs.Panel>, <Tabs.Panel key="tab" tab="tab">
        <Heading level={3}>Nog een tab</Heading>
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Tabs.Panel>]
  }
}`,...(K=(q=j.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};const ce=["Default","WithInitialTab","WithWideContent","WithForm"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:y,WithForm:j,WithInitialTab:x,WithWideContent:T,__namedExportsOrder:ce,default:de},Symbol.toStringTag,{value:"Module"}));export{ye as T,x as W,T as a};
