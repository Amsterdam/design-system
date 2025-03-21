import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as Z,P as _,v as l,c as p,d as u,j as ee,F as N,C as ae,T as f,f as C,R as ne,l as v,m as te,B as se}from"./index.esm-_Py4KnVy.js";import{b as I,j as R}from"./exampleContent-PGFPgakh.js";import{c as w}from"./clsx-B-dksMZM.js";import{r}from"./index-C0MU9AHG.js";import{u as re}from"./useKeyboardFocus-nadMEUdd.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const ie={activeTabId:void 0,tabsId:"",updateTab:()=>{}},P=r.createContext(ie),M=r.forwardRef(({children:a,className:n,onClick:t,tab:s,...o},h)=>{const{activeTabId:d,tabsId:c,updateTab:L}=r.useContext(P),m=b=>{t==null||t(b),r.startTransition(()=>{L(s)})};return e.jsxs("button",{...o,"aria-controls":`${c}-panel-${s}`,"aria-selected":d===s,className:w("ams-tabs__button",n),id:`${c}-tab-${s}`,onClick:m,ref:h,role:"tab",tabIndex:d===s?0:-1,children:[e.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:a}),e.jsx("span",{className:"ams-tabs__button-label",children:a})]})});M.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:null,description:"An identifier.",name:"tab",required:!0,type:{name:"string"}}}}}catch{}const G=r.forwardRef(({children:a,className:n,...t},s)=>e.jsx("div",{...t,className:w("ams-tabs__list",n),ref:s,role:"tablist",children:a}));G.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const Y=r.forwardRef(({children:a,className:n,tab:t,...s},o)=>{const{activeTabId:h,tabsId:d}=r.useContext(P);return t!==h?null:e.jsx("div",{...s,"aria-labelledby":`${d}-tab-${t}`,className:w("ams-tabs__panel",n),id:`${d}-panel-${t}`,ref:o,role:"tabpanel",tabIndex:0,children:a})});Y.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"string"}}}}}catch{}const J=r.forwardRef(({activeTab:a,children:n,className:t,onTabChange:s,...o},h)=>{const d=r.useId(),c=r.useRef(null),[L,m]=r.useState(),b=r.useMemo(()=>{if(!Array.isArray(n))return[];const j=n[0].props.children;return j.props?[j.props.tab]:Array.isArray(j)?j.map(X=>X.props.tab):[]},[n]);r.useEffect(()=>{a?b.includes(a)?m(a):(console.warn(`The active tab "${a}" does not exist. Falling back to the first tab.`),m(b[0])):m(b[0])},[a,b]);const Q=F=>{m(F),s==null||s(F)};r.useImperativeHandle(h,()=>c.current);const{keyDown:U}=re(c,{horizontally:!0,rotating:!0});return e.jsx(P.Provider,{value:{activeTabId:L,tabsId:d,updateTab:Q},children:e.jsx("div",{...o,className:w("ams-tabs",t),onKeyDown:U,ref:c,children:n})})});J.displayName="Tabs";const i=Object.assign(J,{Button:M,List:G,Panel:Y});try{i.displayName="Tabs",i.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The identifier of the initially active tab. Corresponds to its `tab` value.",name:"activeTab",required:!1,type:{name:"string"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((tabId: string) => void)"}}}}}catch{}const A=1e3,le=({children:a})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${A}ms delay…`);let n=performance.now();for(;performance.now()-n<A;);return a},S=[{body:I(),label:"Gegevens"},{body:I(),label:"Aanslagen"},{body:e.jsxs(e.Fragment,{children:["(This tab panel simulates a load time of ",A," milliseconds.)",e.jsx(le,{})]}),label:"Documenten"},{body:I(),label:"Acties"}],oe=[e.jsx(i.List,{children:S.map(({label:a})=>e.jsx(i.Button,{tab:a,children:a},a))},"tabsList"),S.map(({body:a,label:n})=>e.jsxs(i.Panel,{tab:n,children:[e.jsx(Z,{className:"ams-mb--xs",level:3,children:n}),e.jsx(_,{children:a})]},n))],de={title:"Components/Containers/Tabs",component:i,args:{children:oe},argTypes:{onTabChange:{action:"clicked",description:"Provides the id of the activated tab."}}},y={},g={args:{activeTab:"Acties"}},x={args:{children:[e.jsx(i.List,{children:R.map(a=>e.jsx(i.Button,{tab:a,children:a},a))},"tabsList"),R.map(a=>e.jsx(i.Panel,{tab:a,children:e.jsxs(l,{children:[e.jsxs(l.Caption,{children:["Voorbeeld van een tabel voor ",a==="Weesp"?"stadsgebied":"stadsdeel"," ",a]}),e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{}),Array.from({length:12},(n,t)=>e.jsx(l.HeaderCell,{children:"Kolom"},t))]})}),e.jsx(l.Body,{children:Array.from({length:3},(n,t)=>e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"row",children:"Rij"}),Array.from({length:12},(s,o)=>e.jsxs(l.Cell,{style:{textAlign:"end"},children:[(t+1)*(o+1),".000"]},o))]},t))})]})},a))]}},T={args:{children:[e.jsx(i.List,{children:e.jsx(i.Button,{tab:0,children:"Form"},"form")},"tabsList"),e.jsx(i.Panel,{tab:0,children:e.jsx("form",{children:e.jsxs("form",{className:"ams-gap--md",id:"main",onSubmit:a=>a.preventDefault(),children:[e.jsxs(p,{children:[e.jsx(u,{htmlFor:"body",children:"Wat wilt u aan de gemeente vragen?"}),e.jsx(_,{id:"bodyDescription",size:"small",children:"Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen."}),e.jsx(ee,{"aria-describedby":"bodyDescription",id:"body",rows:4})]}),e.jsx(N,{"aria-describedby":"contactDetailsDescription",legend:"Wat zijn uw gegevens?",children:e.jsxs(ae,{gap:"small",children:[e.jsx(_,{id:"contactDetailsDescription",children:"Wij hebben uw gegevens nodig om contact met u te kunnen opnemen."}),e.jsxs(p,{children:[e.jsx(u,{htmlFor:"initials",children:"Voorletters"}),e.jsx(f,{id:"initials",name:"initials"})]}),e.jsxs(p,{children:[e.jsx(u,{htmlFor:"familyName",children:"Achternaam"}),e.jsx(f,{autoComplete:"family-name",id:"familyName",name:"familyName"})]}),e.jsxs(N,{legend:"Woonplaats",children:[e.jsx(C,{name:"city",value:"amsterdam",children:"Amsterdam"}),e.jsx(C,{name:"city",value:"weesp",children:"Weesp"}),e.jsx(C,{name:"city",value:"anders",children:"Anders"})]}),e.jsxs(p,{children:[e.jsx(u,{htmlFor:"email",children:"E-mail"}),e.jsx(f,{autoComplete:"email",id:"email",name:"email"})]}),e.jsxs(ne,{wrap:!0,children:[e.jsxs(p,{children:[e.jsx(u,{htmlFor:"countryCode",children:"Landnummer"}),e.jsxs(v,{id:"countryCode",name:"countryCode",children:[e.jsx(v.Option,{value:"+31",children:"Nederland +31"}),e.jsx(v.Option,{value:"+32",children:"België +32"}),e.jsx(v.Option,{value:"+33",children:"Frankrijk +33"})]})]}),e.jsxs(p,{children:[e.jsx(u,{htmlFor:"phone",children:"Telefoonnummer"}),e.jsx(f,{autoComplete:"tel",id:"phone",name:"phone"})]})]})]})}),e.jsx(te,{heading:"Waarom vragen we om deze gegevens?",headingLevel:2,children:e.jsx(_,{children:"We bewaren uw contactgegevens voor het afhandelen van uw vraag of klacht en het verbeteren van onze dienstverlening."})}),e.jsx("div",{children:e.jsx(se,{type:"submit",children:"Versturen"})})]})})},"form")]}};var W,B,k;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(k=(B=y.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var D,H,O;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    activeTab: 'Acties'
  }
}`,...(O=(H=g.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var V,$,z;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=($=x.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var E,q,K;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: [<Tabs.List key="tabsList">
        <Tabs.Button key="form" tab={0}>
          Form
        </Tabs.Button>
      </Tabs.List>, <Tabs.Panel key="form" tab={0}>
        <form>
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
        </form>
      </Tabs.Panel>]
  }
}`,...(K=(q=T.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};const ce=["Default","WithInitialTab","WithWideContent","WithForm"],ge=Object.freeze(Object.defineProperty({__proto__:null,Default:y,WithForm:T,WithInitialTab:g,WithWideContent:x,__namedExportsOrder:ce,default:de},Symbol.toStringTag,{value:"Module"}));export{ge as T,g as W,x as a};
