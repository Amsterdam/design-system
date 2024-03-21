import{j as e}from"./jsx-runtime-CKrituN3.js";import{D as s}from"./index.esm-CMVADTw6.js";import{e as j}from"./exampleContent-CyZEwIqm.js";const h=j(),g={title:"Components/Text/Description List",component:s,args:{inverseColor:!1}},i={decorators:[(n,o)=>e.jsx("div",{className:o.args.inverseColor?"ams-docs-dark-background":void 0,children:e.jsx(n,{})})],args:{children:[e.jsx(s.Term,{children:"Gebied"},3),e.jsx(s.Details,{children:"Gemeente Amsterdam"},4),e.jsx(s.Term,{children:"Stadsdeel"},5),e.jsx(s.Details,{children:"West"},6),e.jsx(s.Term,{children:"Opmerkingen"},1),e.jsx(s.Details,{children:h},2)]}},r={render:()=>e.jsxs(s,{children:[e.jsxs(s.Row,{children:[e.jsx(s.Term,{children:"Gebied"}),e.jsx(s.Details,{children:"Gemeente Amsterdam"})]}),e.jsxs(s.Row,{children:[e.jsx(s.Term,{children:"Stadsdelen"}),e.jsx(s.Details,{children:"Noord"}),e.jsx(s.Details,{children:"Oost"}),e.jsx(s.Details,{children:"Zuid"}),e.jsx(s.Details,{children:"West"})]})]})},t={args:{inverseColor:!0,children:[e.jsx(s.Term,{children:"Gebied"},3),e.jsx(s.Details,{children:"Gemeente Amsterdam"},4),e.jsx(s.Term,{children:"Stadsdeel"},5),e.jsx(s.Details,{children:"West"},6),e.jsx(s.Term,{children:"Opmerkingen"},1),e.jsx(s.Details,{children:h},2)]},decorators:[(n,o)=>e.jsx("div",{className:o.args.inverseColor?"ams-docs-dark-background":void 0,children:e.jsx(n,{})})]};var a,c,d;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'ams-docs-dark-background' : undefined}>
        <Story />
      </div>],
  args: {
    children: [<DescriptionList.Term key={3}>Gebied</DescriptionList.Term>, <DescriptionList.Details key={4}>Gemeente Amsterdam</DescriptionList.Details>, <DescriptionList.Term key={5}>Stadsdeel</DescriptionList.Term>, <DescriptionList.Details key={6}>West</DescriptionList.Details>, <DescriptionList.Term key={1}>Opmerkingen</DescriptionList.Term>, <DescriptionList.Details key={2}>{paragraph}</DescriptionList.Details>]
  }
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,D,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <DescriptionList>
      <DescriptionList.Row>
        <DescriptionList.Term>Gebied</DescriptionList.Term>
        <DescriptionList.Details>Gemeente Amsterdam</DescriptionList.Details>
      </DescriptionList.Row>
      <DescriptionList.Row>
        <DescriptionList.Term>Stadsdelen</DescriptionList.Term>
        <DescriptionList.Details>Noord</DescriptionList.Details>
        <DescriptionList.Details>Oost</DescriptionList.Details>
        <DescriptionList.Details>Zuid</DescriptionList.Details>
        <DescriptionList.Details>West</DescriptionList.Details>
      </DescriptionList.Row>
    </DescriptionList>
}`,...(p=(D=r.parameters)==null?void 0:D.docs)==null?void 0:p.source}}};var m,L,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    inverseColor: true,
    children: [<DescriptionList.Term key={3}>Gebied</DescriptionList.Term>, <DescriptionList.Details key={4}>Gemeente Amsterdam</DescriptionList.Details>, <DescriptionList.Term key={5}>Stadsdeel</DescriptionList.Term>, <DescriptionList.Details key={6}>West</DescriptionList.Details>, <DescriptionList.Term key={1}>Opmerkingen</DescriptionList.Term>, <DescriptionList.Details key={2}>{paragraph}</DescriptionList.Details>]
  },
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'ams-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(x=(L=t.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const u=["Default","WrapRows","InvertedColor"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:i,InvertedColor:t,WrapRows:r,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{y as D,t as I,r as W};
