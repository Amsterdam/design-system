import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as d}from"./index-Cs7sjTYM.js";const k=d.forwardRef(({children:r,className:n,...o},i)=>e.jsx("option",{...o,ref:i,className:p("ams-select__option",n),children:r}));k.displayName="Select.Option";try{Select.Option.displayName="Select.Option",Select.Option.__docgenInfo={description:"",displayName:"Select.Option",props:{}}}catch{}const f=d.forwardRef(({children:r,className:n,...o},i)=>e.jsx("optgroup",{...o,ref:i,className:p("ams-select__group",n),children:r}));f.displayName="Select.Group";try{Select.Group.displayName="Select.Group",Select.Group.__docgenInfo={description:"",displayName:"Select.Group",props:{}}}catch{}const y=d.forwardRef(({children:r,className:n,invalid:o,...i},v)=>e.jsx("select",{...i,"aria-invalid":o||void 0,className:p("ams-select",n),ref:v,children:r}));y.displayName="Select";const t=Object.assign(y,{Option:k,Group:f});try{t.displayName="Select",t.__docgenInfo={description:"",displayName:"Select",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Components/Forms/Select",component:t,args:{invalid:!1,disabled:!1,children:[e.jsx(t.Option,{value:"1",children:"Centrum"},"1"),e.jsx(t.Option,{value:"2",children:"Noord"},"2"),e.jsx(t.Option,{value:"3",children:"West"},"3"),e.jsx(t.Option,{value:"4",disabled:!0,children:"Westpoort"},"4"),e.jsx(t.Option,{value:"5",children:"Nieuw-West"},"6"),e.jsx(t.Option,{value:"6",children:"Zuid"},"7"),e.jsx(t.Option,{value:"7",children:"Zuidoost"},"8")]},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."}}},l={},c={args:{children:[e.jsxs(t.Group,{label:"Burgwallen-Oude Zijde",children:[e.jsx(t.Option,{children:"BG-terrein e.o."}),e.jsx(t.Option,{children:"Burgwallen oost"}),e.jsx(t.Option,{children:"Kop Zeedijk"}),e.jsx(t.Option,{children:"Nes e.o."}),e.jsx(t.Option,{children:"Oude Kerk e.o."})]},"1"),e.jsxs(t.Group,{label:"Burgwallen-Nieuwe Zijde",children:[e.jsx(t.Option,{children:"Begijnhofbuurt"}),e.jsx(t.Option,{children:"Hemelrijk"}),e.jsx(t.Option,{children:"Kalverdriehoek"}),e.jsx(t.Option,{children:"Nieuwe Kerk e.o."}),e.jsx(t.Option,{children:"Nieuwendijk Noord"}),e.jsx(t.Option,{children:"Spuistraat Noord"}),e.jsx(t.Option,{children:"Spuistraat Zuid"}),e.jsx(t.Option,{children:"Stationsplein e.o."})]},"2"),e.jsxs(t.Group,{label:"Grachtengordel-West",children:[e.jsx(t.Option,{children:"Felix Meritisbuurt"}),e.jsx(t.Option,{children:"Langestraat e.o."}),e.jsx(t.Option,{children:"Leidsegracht Noord"}),e.jsx(t.Option,{children:"Leliegracht e.o."})]},"3"),e.jsxs(t.Group,{label:"Haarlemmerbuurt",children:[e.jsx(t.Option,{children:"Haarlemmerbuurt Oost"}),e.jsx(t.Option,{children:"Haarlemmerbuurt West"}),e.jsx(t.Option,{children:"Planciusbuurt Noord"}),e.jsx(t.Option,{children:"Planciusbuurt Zuid"}),e.jsx(t.Option,{children:"Westelijke eilanden"}),e.jsx(t.Option,{children:"Westerdokseiland"})]},"4"),e.jsxs(t.Group,{label:"Jordaan",children:[e.jsx(t.Option,{children:"Anjeliersbuurt Noord"}),e.jsx(t.Option,{children:"Anjeliersbuurt Zuid"}),e.jsx(t.Option,{children:"Bloemgrachtbuurt"}),e.jsx(t.Option,{children:"Driehoekbuurt"}),e.jsx(t.Option,{children:"Elandsgrachtbuurt"}),e.jsx(t.Option,{children:"Groenmarktkadebuurt"}),e.jsx(t.Option,{children:"Marnixbuurt Midden"}),e.jsx(t.Option,{children:"Marnixbuurt Noord"}),e.jsx(t.Option,{children:"Marnixbuurt Zuid"}),e.jsx(t.Option,{children:"Passeerdersgrachtbuurt"}),e.jsx(t.Option,{children:"Zaagpoortbuurt"})]},"5")]}},a={args:{invalid:!0}},s={args:{disabled:!0}};var u,O,S;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(S=(O=l.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var h,j,m;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: [<Select.Group label="Burgwallen-Oude Zijde" key="1">
        <Select.Option>BG-terrein e.o.</Select.Option>
        <Select.Option>Burgwallen oost</Select.Option>
        <Select.Option>Kop Zeedijk</Select.Option>
        <Select.Option>Nes e.o.</Select.Option>
        <Select.Option>Oude Kerk e.o.</Select.Option>
      </Select.Group>, <Select.Group label="Burgwallen-Nieuwe Zijde" key="2">
        <Select.Option>Begijnhofbuurt</Select.Option>
        <Select.Option>Hemelrijk</Select.Option>
        <Select.Option>Kalverdriehoek</Select.Option>
        <Select.Option>Nieuwe Kerk e.o.</Select.Option>
        <Select.Option>Nieuwendijk Noord</Select.Option>
        <Select.Option>Spuistraat Noord</Select.Option>
        <Select.Option>Spuistraat Zuid</Select.Option>
        <Select.Option>Stationsplein e.o.</Select.Option>
      </Select.Group>, <Select.Group label="Grachtengordel-West" key="3">
        <Select.Option>Felix Meritisbuurt</Select.Option>
        <Select.Option>Langestraat e.o.</Select.Option>
        <Select.Option>Leidsegracht Noord</Select.Option>
        <Select.Option>Leliegracht e.o.</Select.Option>
      </Select.Group>, <Select.Group label="Haarlemmerbuurt" key="4">
        <Select.Option>Haarlemmerbuurt Oost</Select.Option>
        <Select.Option>Haarlemmerbuurt West</Select.Option>
        <Select.Option>Planciusbuurt Noord</Select.Option>
        <Select.Option>Planciusbuurt Zuid</Select.Option>
        <Select.Option>Westelijke eilanden</Select.Option>
        <Select.Option>Westerdokseiland</Select.Option>
      </Select.Group>, <Select.Group label="Jordaan" key="5">
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
}`,...(m=(j=c.parameters)==null?void 0:j.docs)==null?void 0:m.source}}};var x,b,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var N,_,G;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(G=(_=s.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const w=["Default","Grouped","Invalid","Disabled"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Disabled:s,Grouped:c,Invalid:a,__namedExportsOrder:w,default:Z},Symbol.toStringTag,{value:"Module"}));export{s as D,c as G,a as I,H as S};
