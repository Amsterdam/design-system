import{j as e}from"./jsx-runtime-CKrituN3.js";import{D as s}from"./index.esm-CzZEttQO.js";import{e as j}from"./exampleContent-CyZEwIqm.js";const h=j(),g={title:"Components/Text/Description List",component:s,args:{children:[e.jsx(s.Term,{children:"Gebied"},1),e.jsx(s.Details,{children:"Gemeente Amsterdam"},2),e.jsx(s.Term,{children:"Stadsdeel"},3),e.jsx(s.Details,{children:"West"},4),e.jsx(s.Term,{children:"Opmerkingen"},5),e.jsx(s.Details,{children:h},6)],inverseColor:!1}},r={decorators:[(o,n)=>e.jsx("div",{className:n.args.inverseColor?"ams-docs-dark-background":void 0,children:e.jsx(o,{})})]},i={args:{children:[e.jsxs(s.Row,{children:[e.jsx(s.Term,{children:"Gebied"}),e.jsx(s.Details,{children:"Gemeente Amsterdam"})]},1),e.jsxs(s.Row,{children:[e.jsx(s.Term,{children:"Stadsdelen"}),e.jsx(s.Details,{children:"Noord"}),e.jsx(s.Details,{children:"Oost"}),e.jsx(s.Details,{children:"Zuid"}),e.jsx(s.Details,{children:"West"})]},2)]}},t={args:{inverseColor:!0},decorators:[(o,n)=>e.jsx("div",{className:n.args.inverseColor?"ams-docs-dark-background":void 0,children:e.jsx(o,{})})]};var a,c,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  decorators: [(Story, context) => <div className={context.args['inverseColor'] ? 'ams-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: [<DescriptionList.Row key={1}>
        <DescriptionList.Term>Gebied</DescriptionList.Term>
        <DescriptionList.Details>Gemeente Amsterdam</DescriptionList.Details>
      </DescriptionList.Row>, <DescriptionList.Row key={2}>
        <DescriptionList.Term>Stadsdelen</DescriptionList.Term>
        <DescriptionList.Details>Noord</DescriptionList.Details>
        <DescriptionList.Details>Oost</DescriptionList.Details>
        <DescriptionList.Details>Zuid</DescriptionList.Details>
        <DescriptionList.Details>West</DescriptionList.Details>
      </DescriptionList.Row>]
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var D,x,u;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  },
  decorators: [(Story, context) => <div className={context.args['inverseColor'] ? 'ams-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const L=["Default","WrapRows","InvertedColor"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InvertedColor:t,WrapRows:i,__namedExportsOrder:L,default:g},Symbol.toStringTag,{value:"Module"}));export{k as D,t as I,i as W};
