import{j as e}from"./jsx-runtime-CKrituN3.js";import{U as r,f as n,Z as k,P as d,_ as S,$ as P,a0 as y,a1 as z,u as N,a2 as f,a3 as W}from"./index.esm-C-uAFSFy.js";import{f as b}from"./exampleContent-BoywlOQx.js";const D=b().map((s,m)=>e.jsx(r.Item,{children:s},m)),B={title:"Components/Text/Unordered List",component:r,args:{children:D,inverseColor:!1,markers:void 0},argTypes:{inverseColor:{control:"boolean"},markers:{control:"boolean"}},decorators:[(s,m)=>e.jsx("div",{className:m.args.inverseColor?"amsterdam-docs-dark-background":void 0,children:e.jsx(s,{})})]},a={},t={render:s=>e.jsxs(r,{...s,children:[e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"},1.1),e.jsx(r.Item,{children:"Oud West / De Baarsjes"},1.2),e.jsx(r.Item,{children:"Westerpark"},1.3)]})]},1),e.jsxs(r.Item,{children:["Stadsdeel Nieuw-West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"De Aker, Sloten en Nieuw Sloten"},2.1),e.jsx(r.Item,{children:"Geuzenveld, Slotermeer en Sloterdijken"},2.2),e.jsx(r.Item,{children:"Osdorp"},2.3),e.jsx(r.Item,{children:"Slotervaart"},2.4)]})]},2)]})},o={args:{children:[e.jsx(r.Item,{children:e.jsxs("div",{className:"amsterdam-docs-card",children:[e.jsx(n,{svg:k,size:"level-6"}),e.jsx(d,{children:"Stadsloket: locaties en openingstijden"})]})},1),e.jsx(r.Item,{children:e.jsxs("div",{className:"amsterdam-docs-card",children:[e.jsx(n,{svg:S,size:"level-6"}),e.jsx(d,{children:"Parkeren + Reizen (P+R)"})]})},2),e.jsx(r.Item,{children:e.jsxs("div",{className:"amsterdam-docs-card",children:[e.jsx(n,{svg:P,size:"level-6"}),e.jsx(d,{children:"Paspoort, ID-kaart en Rijbewijs"})]})},3),e.jsx(r.Item,{children:e.jsxs("div",{className:"amsterdam-docs-card",children:[e.jsx(n,{svg:y,size:"level-6"}),e.jsx(d,{children:"Gemeentebelastingen"})]})},4),e.jsx(r.Item,{children:e.jsxs("div",{className:"amsterdam-docs-card",children:[e.jsx(n,{svg:z,size:"level-6"}),e.jsx(d,{children:"Melding openbare ruimte en overlast"})]})},5),e.jsx(r.Item,{children:e.jsxs("div",{className:"amsterdam-docs-card",children:[e.jsx(n,{svg:N,size:"level-6"}),e.jsx(d,{children:"Verhuizing doorgeven"})]})},6),e.jsx(r.Item,{children:e.jsxs("div",{className:"amsterdam-docs-card",children:[e.jsx(n,{svg:f,size:"level-6"}),e.jsx(d,{children:"Grof afval"})]})},7),e.jsx(r.Item,{children:e.jsxs("div",{className:"amsterdam-docs-card",children:[e.jsx(n,{svg:W,size:"level-6"}),e.jsx(d,{children:"Kennisgevingen en bekendmakingen"})]})},8)],markers:!1}},i={args:{inverseColor:!0},render:s=>e.jsx(r,{...s,children:e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"},1.1),e.jsx(r.Item,{children:"Oud West / De Baarsjes"},1.2),e.jsx(r.Item,{children:"Westerpark"},1.3)]})]},1)})};var c,l,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(v=(l=a.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var I,g,h;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <UnorderedList {...args}>
      <UnorderedList.Item key={1}>
        Stadsdeel West
        <UnorderedList {...args}>
          <UnorderedList.Item key={1.1}>Bos en Lommer</UnorderedList.Item>
          <UnorderedList.Item key={1.2}>Oud West / De Baarsjes</UnorderedList.Item>
          <UnorderedList.Item key={1.3}>Westerpark</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>
      <UnorderedList.Item key={2}>
        Stadsdeel Nieuw-West
        <UnorderedList {...args}>
          <UnorderedList.Item key={2.1}>De Aker, Sloten en Nieuw Sloten</UnorderedList.Item>
          <UnorderedList.Item key={2.2}>Geuzenveld, Slotermeer en Sloterdijken</UnorderedList.Item>
          <UnorderedList.Item key={2.3}>Osdorp</UnorderedList.Item>
          <UnorderedList.Item key={2.4}>Slotervaart</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>
    </UnorderedList>
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var j,L,p;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: [<UnorderedList.Item key={1}>
        <div className="amsterdam-docs-card">
          <Icon svg={LocationIcon} size="level-6" />
          <Paragraph>Stadsloket: locaties en openingstijden</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={2}>
        <div className="amsterdam-docs-card">
          <Icon svg={CarIcon} size="level-6" />
          <Paragraph>Parkeren + Reizen (P+R)</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={3}>
        <div className="amsterdam-docs-card">
          <Icon svg={PassportIcon} size="level-6" />
          <Paragraph>Paspoort, ID-kaart en Rijbewijs</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={4}>
        <div className="amsterdam-docs-card">
          <Icon svg={DocumentEuroSignIcon} size="level-6" />
          <Paragraph>Gemeentebelastingen</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={5}>
        <div className="amsterdam-docs-card">
          <Icon svg={AlertIcon} size="level-6" />
          <Paragraph>Melding openbare ruimte en overlast</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={6}>
        <div className="amsterdam-docs-card">
          <Icon svg={HousingIcon} size="level-6" />
          <Paragraph>Verhuizing doorgeven</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={7}>
        <div className="amsterdam-docs-card">
          <Icon svg={TrashBinIcon} size="level-6" />
          <Paragraph>Grof afval</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={8}>
        <div className="amsterdam-docs-card">
          <Icon svg={AnnouncementIcon} size="level-6" />
          <Paragraph>Kennisgevingen en bekendmakingen</Paragraph>
        </div>
      </UnorderedList.Item>],
    markers: false
  }
}`,...(p=(L=o.parameters)==null?void 0:L.docs)==null?void 0:p.source}}};var x,U,u;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  },
  render: args => <UnorderedList {...args}>
      <UnorderedList.Item key={1}>
        Stadsdeel West
        <UnorderedList {...args}>
          <UnorderedList.Item key={1.1}>Bos en Lommer</UnorderedList.Item>
          <UnorderedList.Item key={1.2}>Oud West / De Baarsjes</UnorderedList.Item>
          <UnorderedList.Item key={1.3}>Westerpark</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>
    </UnorderedList>
}`,...(u=(U=i.parameters)==null?void 0:U.docs)==null?void 0:u.source}}};const C=["Default","TwoLevels","WithoutMarkers","InverseColor"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:a,InverseColor:i,TwoLevels:t,WithoutMarkers:o,__namedExportsOrder:C,default:B},Symbol.toStringTag,{value:"Module"}));export{i as I,t as T,R as U,o as W};
