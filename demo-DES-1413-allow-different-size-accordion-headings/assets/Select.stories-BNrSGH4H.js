import{r as u,j as e,c as O,F as h,t as j,P as m,E as b}from"./iframe-C0xzZhK5.js";const g=u.forwardRef(({children:t,className:i,...n},o)=>e.jsx("option",{...n,className:O("ams-select__option",i),ref:o,children:t}));g.displayName="Select.Option";try{Select.Option.displayName="Select.Option",Select.Option.__docgenInfo={description:"",displayName:"Select.Option",props:{}}}catch{}const x=u.forwardRef(({children:t,className:i,...n},o)=>e.jsx("optgroup",{...n,className:O("ams-select__group",i),ref:o,children:t}));x.displayName="Select.Group";try{Select.Group.displayName="Select.Group",Select.Group.__docgenInfo={description:"",displayName:"Select.Group",props:{}}}catch{}const v=u.forwardRef(({children:t,className:i,invalid:n,...o},N)=>e.jsx("select",{...o,"aria-invalid":n||void 0,className:O("ams-select",i),ref:N,children:t}));v.displayName="Select";const r=Object.assign(v,{Group:x,Option:g});try{r.displayName="Select",r.__docgenInfo={description:"",displayName:"Select",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const S=[e.jsx(r.Option,{value:"1",children:"Centrum"},"1"),e.jsx(r.Option,{value:"2",children:"Noord"},"2"),e.jsx(r.Option,{value:"3",children:"West"},"3"),e.jsx(r.Option,{disabled:!0,value:"4",children:"Westpoort"},"4"),e.jsx(r.Option,{value:"5",children:"Nieuw-West"},"6"),e.jsx(r.Option,{value:"6",children:"Zuid"},"7"),e.jsx(r.Option,{value:"7",children:"Zuidoost"},"8")],_={title:"Components/Forms/Select",component:r,args:{children:S,disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."}}},l={},a={args:{children:[e.jsxs(r.Group,{label:"Burgwallen-Oude Zijde",children:[e.jsx(r.Option,{children:"BG-terrein e.o."}),e.jsx(r.Option,{children:"Burgwallen oost"}),e.jsx(r.Option,{children:"Kop Zeedijk"}),e.jsx(r.Option,{children:"Nes e.o."}),e.jsx(r.Option,{children:"Oude Kerk e.o."})]},"1"),e.jsxs(r.Group,{label:"Burgwallen-Nieuwe Zijde",children:[e.jsx(r.Option,{children:"Begijnhofbuurt"}),e.jsx(r.Option,{children:"Hemelrijk"}),e.jsx(r.Option,{children:"Kalverdriehoek"}),e.jsx(r.Option,{children:"Nieuwe Kerk e.o."}),e.jsx(r.Option,{children:"Nieuwendijk Noord"}),e.jsx(r.Option,{children:"Spuistraat Noord"}),e.jsx(r.Option,{children:"Spuistraat Zuid"}),e.jsx(r.Option,{children:"Stationsplein e.o."})]},"2"),e.jsxs(r.Group,{label:"Grachtengordel-West",children:[e.jsx(r.Option,{children:"Felix Meritisbuurt"}),e.jsx(r.Option,{children:"Langestraat e.o."}),e.jsx(r.Option,{children:"Leidsegracht Noord"}),e.jsx(r.Option,{children:"Leliegracht e.o."})]},"3"),e.jsxs(r.Group,{label:"Haarlemmerbuurt",children:[e.jsx(r.Option,{children:"Haarlemmerbuurt Oost"}),e.jsx(r.Option,{children:"Haarlemmerbuurt West"}),e.jsx(r.Option,{children:"Planciusbuurt Noord"}),e.jsx(r.Option,{children:"Planciusbuurt Zuid"}),e.jsx(r.Option,{children:"Westelijke eilanden"}),e.jsx(r.Option,{children:"Westerdokseiland"})]},"4"),e.jsxs(r.Group,{label:"Jordaan",children:[e.jsx(r.Option,{children:"Anjeliersbuurt Noord"}),e.jsx(r.Option,{children:"Anjeliersbuurt Zuid"}),e.jsx(r.Option,{children:"Bloemgrachtbuurt"}),e.jsx(r.Option,{children:"Driehoekbuurt"}),e.jsx(r.Option,{children:"Elandsgrachtbuurt"}),e.jsx(r.Option,{children:"Groenmarktkadebuurt"}),e.jsx(r.Option,{children:"Marnixbuurt Midden"}),e.jsx(r.Option,{children:"Marnixbuurt Noord"}),e.jsx(r.Option,{children:"Marnixbuurt Zuid"}),e.jsx(r.Option,{children:"Passeerdersgrachtbuurt"}),e.jsx(r.Option,{children:"Zaagpoortbuurt"})]},"5")]}},s={args:{invalid:!0}},c={args:{disabled:!0}},d={render:t=>e.jsxs(h,{invalid:t.invalid,children:[e.jsx(j,{htmlFor:"input1",children:"Label"}),e.jsx(m,{id:"description1",children:"Omschrijving."}),t.invalid&&e.jsx(b,{id:"error1",children:"Foutmelding."}),e.jsx(r,{"aria-describedby":`description1${t.invalid?" error1":""}`,id:"input1",...t,children:S})]})},p={args:{invalid:!0},render:t=>e.jsxs(h,{invalid:t.invalid,children:[e.jsx(j,{htmlFor:"input2",children:"Label"}),e.jsx(m,{id:"description2",children:"Omschrijving."}),t.invalid&&e.jsx(b,{id:"error2",children:"Foutmelding."}),e.jsx(r,{"aria-describedby":`description2${t.invalid?" error2":""}`,id:"input2",...t,children:S})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <Select aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args}>
        {optionList}
      </Select>
    </Field>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <Select aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args}>
        {optionList}
      </Select>
    </Field>
}`,...p.parameters?.docs?.source}}};const G=["Default","Grouped","Invalid","Disabled","InAField","InAFieldWithValidation"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Disabled:c,Grouped:a,InAField:d,InAFieldWithValidation:p,Invalid:s,__namedExportsOrder:G,default:_},Symbol.toStringTag,{value:"Module"}));export{c as D,a as G,s as I,k as S,d as a,p as b};
