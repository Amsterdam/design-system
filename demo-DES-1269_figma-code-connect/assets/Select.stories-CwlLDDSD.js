import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as P,d as W,P as B,E}from"./index.esm-ChGGnQRO.js";import{c as u}from"./clsx-B-dksMZM.js";import{r as O}from"./index-G8LIXM5I.js";const I=O.forwardRef(({children:t,className:i,...n},o)=>e.jsx("option",{...n,className:u("ams-select__option",i),ref:o,children:t}));I.displayName="Select.Option";try{Select.Option.displayName="Select.Option",Select.Option.__docgenInfo={description:"",displayName:"Select.Option",props:{}}}catch{}const A=O.forwardRef(({children:t,className:i,...n},o)=>e.jsx("optgroup",{...n,className:u("ams-select__group",i),ref:o,children:t}));A.displayName="Select.Group";try{Select.Group.displayName="Select.Group",Select.Group.__docgenInfo={description:"",displayName:"Select.Group",props:{}}}catch{}const H=O.forwardRef(({children:t,className:i,invalid:n,...o},K)=>e.jsx("select",{...o,"aria-invalid":n||void 0,className:u("ams-select",i),ref:K,children:t}));H.displayName="Select";const r=Object.assign(H,{Group:A,Option:I});try{r.displayName="Select",r.__docgenInfo={description:"",displayName:"Select",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const S=[e.jsx(r.Option,{value:"1",children:"Centrum"},"1"),e.jsx(r.Option,{value:"2",children:"Noord"},"2"),e.jsx(r.Option,{value:"3",children:"West"},"3"),e.jsx(r.Option,{disabled:!0,value:"4",children:"Westpoort"},"4"),e.jsx(r.Option,{value:"5",children:"Nieuw-West"},"6"),e.jsx(r.Option,{value:"6",children:"Zuid"},"7"),e.jsx(r.Option,{value:"7",children:"Zuidoost"},"8")],D={title:"Components/Forms/Select",component:r,args:{children:S,disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."}}},l={},a={args:{children:[e.jsxs(r.Group,{label:"Burgwallen-Oude Zijde",children:[e.jsx(r.Option,{children:"BG-terrein e.o."}),e.jsx(r.Option,{children:"Burgwallen oost"}),e.jsx(r.Option,{children:"Kop Zeedijk"}),e.jsx(r.Option,{children:"Nes e.o."}),e.jsx(r.Option,{children:"Oude Kerk e.o."})]},"1"),e.jsxs(r.Group,{label:"Burgwallen-Nieuwe Zijde",children:[e.jsx(r.Option,{children:"Begijnhofbuurt"}),e.jsx(r.Option,{children:"Hemelrijk"}),e.jsx(r.Option,{children:"Kalverdriehoek"}),e.jsx(r.Option,{children:"Nieuwe Kerk e.o."}),e.jsx(r.Option,{children:"Nieuwendijk Noord"}),e.jsx(r.Option,{children:"Spuistraat Noord"}),e.jsx(r.Option,{children:"Spuistraat Zuid"}),e.jsx(r.Option,{children:"Stationsplein e.o."})]},"2"),e.jsxs(r.Group,{label:"Grachtengordel-West",children:[e.jsx(r.Option,{children:"Felix Meritisbuurt"}),e.jsx(r.Option,{children:"Langestraat e.o."}),e.jsx(r.Option,{children:"Leidsegracht Noord"}),e.jsx(r.Option,{children:"Leliegracht e.o."})]},"3"),e.jsxs(r.Group,{label:"Haarlemmerbuurt",children:[e.jsx(r.Option,{children:"Haarlemmerbuurt Oost"}),e.jsx(r.Option,{children:"Haarlemmerbuurt West"}),e.jsx(r.Option,{children:"Planciusbuurt Noord"}),e.jsx(r.Option,{children:"Planciusbuurt Zuid"}),e.jsx(r.Option,{children:"Westelijke eilanden"}),e.jsx(r.Option,{children:"Westerdokseiland"})]},"4"),e.jsxs(r.Group,{label:"Jordaan",children:[e.jsx(r.Option,{children:"Anjeliersbuurt Noord"}),e.jsx(r.Option,{children:"Anjeliersbuurt Zuid"}),e.jsx(r.Option,{children:"Bloemgrachtbuurt"}),e.jsx(r.Option,{children:"Driehoekbuurt"}),e.jsx(r.Option,{children:"Elandsgrachtbuurt"}),e.jsx(r.Option,{children:"Groenmarktkadebuurt"}),e.jsx(r.Option,{children:"Marnixbuurt Midden"}),e.jsx(r.Option,{children:"Marnixbuurt Noord"}),e.jsx(r.Option,{children:"Marnixbuurt Zuid"}),e.jsx(r.Option,{children:"Passeerdersgrachtbuurt"}),e.jsx(r.Option,{children:"Zaagpoortbuurt"})]},"5")]}},s={args:{invalid:!0}},c={args:{disabled:!0}},d={render:t=>e.jsxs(P,{invalid:t.invalid,children:[e.jsx(W,{htmlFor:"input1",children:"Label"}),e.jsx(B,{id:"description1",size:"small",children:"Omschrijving."}),t.invalid&&e.jsx(E,{id:"error1",children:"Foutmelding."}),e.jsx(r,{"aria-describedby":`description1${t.invalid?" error1":""}`,id:"input1",...t,children:S})]})},p={args:{invalid:!0},render:t=>e.jsxs(P,{invalid:t.invalid,children:[e.jsx(W,{htmlFor:"input2",children:"Label"}),e.jsx(B,{id:"description2",size:"small",children:"Omschrijving."}),t.invalid&&e.jsx(E,{id:"error2",children:"Foutmelding."}),e.jsx(r,{"aria-describedby":`description2${t.invalid?" error2":""}`,id:"input2",...t,children:S})]})};var h,m,j;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(j=(m=l.parameters)==null?void 0:m.docs)==null?void 0:j.source}}};var b,g,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: [<Select.Group key="1" label="Burgwallen-Oude Zijde">
        <Select.Option>BG-terrein e.o.</Select.Option>
        <Select.Option>Burgwallen oost</Select.Option>
        <Select.Option>Kop Zeedijk</Select.Option>
        <Select.Option>Nes e.o.</Select.Option>
        <Select.Option>Oude Kerk e.o.</Select.Option>
      </Select.Group>, <Select.Group key="2" label="Burgwallen-Nieuwe Zijde">
        <Select.Option>Begijnhofbuurt</Select.Option>
        <Select.Option>Hemelrijk</Select.Option>
        <Select.Option>Kalverdriehoek</Select.Option>
        <Select.Option>Nieuwe Kerk e.o.</Select.Option>
        <Select.Option>Nieuwendijk Noord</Select.Option>
        <Select.Option>Spuistraat Noord</Select.Option>
        <Select.Option>Spuistraat Zuid</Select.Option>
        <Select.Option>Stationsplein e.o.</Select.Option>
      </Select.Group>, <Select.Group key="3" label="Grachtengordel-West">
        <Select.Option>Felix Meritisbuurt</Select.Option>
        <Select.Option>Langestraat e.o.</Select.Option>
        <Select.Option>Leidsegracht Noord</Select.Option>
        <Select.Option>Leliegracht e.o.</Select.Option>
      </Select.Group>, <Select.Group key="4" label="Haarlemmerbuurt">
        <Select.Option>Haarlemmerbuurt Oost</Select.Option>
        <Select.Option>Haarlemmerbuurt West</Select.Option>
        <Select.Option>Planciusbuurt Noord</Select.Option>
        <Select.Option>Planciusbuurt Zuid</Select.Option>
        <Select.Option>Westelijke eilanden</Select.Option>
        <Select.Option>Westerdokseiland</Select.Option>
      </Select.Group>, <Select.Group key="5" label="Jordaan">
        <Select.Option>Anjeliersbuurt Noord</Select.Option>
        <Select.Option>Anjeliersbuurt Zuid</Select.Option>
        <Select.Option>Bloemgrachtbuurt</Select.Option>
        <Select.Option>Driehoekbuurt</Select.Option>
        <Select.Option>Elandsgrachtbuurt</Select.Option>
        <Select.Option>Groenmarktkadebuurt</Select.Option>
        <Select.Option>Marnixbuurt Midden</Select.Option>
        <Select.Option>Marnixbuurt Noord</Select.Option>
        <Select.Option>Marnixbuurt Zuid</Select.Option>
        <Select.Option>Passeerdersgrachtbuurt</Select.Option>
        <Select.Option>Zaagpoortbuurt</Select.Option>
      </Select.Group>]
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,N,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(_=(N=s.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var G,y,k;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(k=(y=c.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var f,F,L;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <Select aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args}>
        {optionList}
      </Select>
    </Field>
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var Z,w,M;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <Select aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args}>
        {optionList}
      </Select>
    </Field>
}`,...(M=(w=p.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const z=["Default","Grouped","Invalid","Disabled","InAField","InAFieldWithValidation"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Disabled:c,Grouped:a,InAField:d,InAFieldWithValidation:p,Invalid:s,__namedExportsOrder:z,default:D},Symbol.toStringTag,{value:"Module"}));export{c as D,a as G,s as I,J as S,d as a,p as b};
