import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as U,P as v,v as i,c as p,d as u,j as X,F as A,C as Z,T as j,f as F,R as ee,l as f,m as ae,B as ne}from"./index.esm-Du0K5Sxd.js";import{b as C,j as R}from"./exampleContent-PGFPgakh.js";import{c as _}from"./clsx-B-dksMZM.js";import{r}from"./index-C0MU9AHG.js";import{u as te}from"./useKeyboardFocus-nadMEUdd.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const se={activeTab:0,tabsId:"",updateTab:()=>{}},I=r.createContext(se),K=r.forwardRef(({children:a,className:n,onClick:s,tab:t=0,...c},o)=>{const{activeTab:d,tabsId:m,updateTab:w}=r.useContext(I),b=h=>{s==null||s(h),r.startTransition(()=>{w(t)})};return e.jsxs("button",{...c,"aria-controls":`${m}-panel-${t}`,"aria-selected":d===t,className:_("ams-tabs__button",n),id:`${m}-tab-${t}`,onClick:b,ref:o,role:"tab",tabIndex:d===t?0:-1,children:[e.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:a}),e.jsx("span",{className:"ams-tabs__button-label",children:a})]})});K.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:{value:"0"},description:"An identifier.",name:"tab",required:!1,type:{name:"number"}}}}}catch{}const M=r.forwardRef(({children:a,className:n,...s},t)=>e.jsx("div",{...s,className:_("ams-tabs__list",n),ref:t,role:"tablist",children:a}));M.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const G=r.forwardRef(({children:a,className:n,tab:s,...t},c)=>{const{activeTab:o,tabsId:d}=r.useContext(I);return s!==o?null:e.jsx("div",{...t,"aria-labelledby":`${d}-tab-${s}`,className:_("ams-tabs__panel",n),id:`${d}-panel-${s}`,ref:c,role:"tabpanel",tabIndex:0,children:a})});G.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"number"}}}}}catch{}const Y=r.forwardRef(({activeTab:a,children:n,className:s,onTabChange:t,...c},o)=>{const d=r.useId(),m=r.useRef(null),[w,b]=r.useState(0),h=r.useMemo(()=>Array.isArray(n)?n[0].props.children:[],[n]);r.useEffect(()=>{typeof a=="number"&&Number.isInteger(a)&&(a<0?b(0):a>h.length-1?b(h.length-1):b(a))},[a,h]);const J=N=>{b(N),t==null||t(N)};r.useImperativeHandle(o,()=>m.current);const{keyDown:Q}=te(m,{horizontally:!0,rotating:!0});return e.jsx(I.Provider,{value:{activeTab:w,tabsId:d,updateTab:J},children:e.jsx("div",{...c,className:_("ams-tabs",s),onKeyDown:Q,ref:m,children:n})})});Y.displayName="Tabs";const l=Object.assign(Y,{Button:K,List:M,Panel:G});try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The number of the active tab. Corresponds to its `tab` value.",name:"activeTab",required:!1,type:{name:"number"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((tabId: number) => void)"}}}}}catch{}const L=1e3,re=({children:a})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${L}ms delay…`);let n=performance.now();for(;performance.now()-n<L;);return a},P=[{body:C(),id:0,label:"Gegevens"},{body:C(),id:1,label:"Aanslagen"},{body:e.jsxs(e.Fragment,{children:["(This tab panel simulates a load time of ",L," milliseconds.)",e.jsx(re,{})]}),id:2,label:"Documenten"},{body:C(),id:3,label:"Acties"}],le=[e.jsx(l.List,{children:P.map(({id:a,label:n})=>e.jsx(l.Button,{tab:a,children:n},n))},"tabsList"),P.map(({body:a,id:n,label:s})=>e.jsxs(l.Panel,{tab:n,children:[e.jsx(U,{className:"ams-mb--xs",level:3,children:s}),e.jsx(v,{children:a})]},s))],ie={title:"Components/Containers/Tabs",component:l,args:{children:le},argTypes:{activeTab:{control:{max:P.length-1,min:0,type:"number"}},onTabChange:{action:"clicked",description:"Provides the id of the activated tab."}}},x={},y={args:{activeTab:3}},g={args:{children:[e.jsx(l.List,{children:R.map((a,n)=>e.jsx(l.Button,{tab:n,children:a},a))},"tabsList"),R.map((a,n)=>e.jsx(l.Panel,{tab:n,children:e.jsxs(i,{children:[e.jsxs(i.Caption,{children:["Voorbeeld van een tabel voor ",a==="Weesp"?"stadsgebied":"stadsdeel"," ",a]}),e.jsx(i.Header,{children:e.jsxs(i.Row,{children:[e.jsx(i.HeaderCell,{}),Array.from({length:12},(s,t)=>e.jsx(i.HeaderCell,{children:"Kolom"},t))]})}),e.jsx(i.Body,{children:Array.from({length:3},(s,t)=>e.jsxs(i.Row,{children:[e.jsx(i.HeaderCell,{scope:"row",children:"Rij"}),Array.from({length:12},(c,o)=>e.jsxs(i.Cell,{style:{textAlign:"end"},children:[(t+1)*(o+1),".000"]},o))]},t))})]})},a))]}},T={args:{children:[e.jsx(l.List,{children:e.jsx(l.Button,{tab:0,children:"Form"},"form")},"tabsList"),e.jsx(l.Panel,{tab:0,children:e.jsx("form",{children:e.jsxs("form",{className:"ams-gap--md",id:"main",onSubmit:a=>a.preventDefault(),children:[e.jsxs(p,{children:[e.jsx(u,{htmlFor:"body",children:"Wat wilt u aan de gemeente vragen?"}),e.jsx(v,{id:"bodyDescription",size:"small",children:"Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen."}),e.jsx(X,{"aria-describedby":"bodyDescription",id:"body",rows:4})]}),e.jsx(A,{"aria-describedby":"contactDetailsDescription",legend:"Wat zijn uw gegevens?",children:e.jsxs(Z,{gap:"small",children:[e.jsx(v,{id:"contactDetailsDescription",children:"Wij hebben uw gegevens nodig om contact met u te kunnen opnemen."}),e.jsxs(p,{children:[e.jsx(u,{htmlFor:"initials",children:"Voorletters"}),e.jsx(j,{id:"initials",name:"initials"})]}),e.jsxs(p,{children:[e.jsx(u,{htmlFor:"familyName",children:"Achternaam"}),e.jsx(j,{autoComplete:"family-name",id:"familyName",name:"familyName"})]}),e.jsxs(A,{legend:"Woonplaats",children:[e.jsx(F,{name:"city",value:"amsterdam",children:"Amsterdam"}),e.jsx(F,{name:"city",value:"weesp",children:"Weesp"}),e.jsx(F,{name:"city",value:"anders",children:"Anders"})]}),e.jsxs(p,{children:[e.jsx(u,{htmlFor:"email",children:"E-mail"}),e.jsx(j,{autoComplete:"email",id:"email",name:"email"})]}),e.jsxs(ee,{wrap:!0,children:[e.jsxs(p,{children:[e.jsx(u,{htmlFor:"countryCode",children:"Landnummer"}),e.jsxs(f,{id:"countryCode",name:"countryCode",children:[e.jsx(f.Option,{value:"+31",children:"Nederland +31"}),e.jsx(f.Option,{value:"+32",children:"België +32"}),e.jsx(f.Option,{value:"+33",children:"Frankrijk +33"})]})]}),e.jsxs(p,{children:[e.jsx(u,{htmlFor:"phone",children:"Telefoonnummer"}),e.jsx(j,{autoComplete:"tel",id:"phone",name:"phone"})]})]})]})}),e.jsx(ae,{heading:"Waarom vragen we om deze gegevens?",headingLevel:2,children:e.jsx(v,{children:"We bewaren uw contactgegevens voor het afhandelen van uw vraag of klacht en het verbeteren van onze dienstverlening."})}),e.jsx("div",{children:e.jsx(ne,{type:"submit",children:"Versturen"})})]})})},"form")]}};var S,W,B;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(B=(W=x.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var D,k,H;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    activeTab: 3
  }
}`,...(H=(k=y.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var O,V,z;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: [<Tabs.List key="tabsList">
        {cityParts.map((name, index) => <Tabs.Button key={name} tab={index}>
            {name}
          </Tabs.Button>)}
      </Tabs.List>, cityParts.map((name, index) => <Tabs.Panel key={name} tab={index}>
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
}`,...(z=(V=g.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var $,E,q;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(q=(E=T.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const oe=["Default","WithInitialTab","WithWideContent","WithForm"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:x,WithForm:T,WithInitialTab:y,WithWideContent:g,__namedExportsOrder:oe,default:ie},Symbol.toStringTag,{value:"Module"}));export{he as T,y as W,g as a};
