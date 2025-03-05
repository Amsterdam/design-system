import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as n,P as d}from"./index.esm-B2UccDvd.js";import{l as B,m as O,n as R,o as A,S as C,g as G,p as E,j as M}from"./index.esm-DvoLfDtE.js";import{g as V}from"./exampleContent-PGFPgakh.js";import{c as W}from"./clsx-B-dksMZM.js";import{r as b}from"./index-C0MU9AHG.js";const z=b.forwardRef(({children:s,className:a,...l},I)=>e.jsx("li",{className:W("ams-unordered-list__item",a),ref:I,...l,children:s}));z.displayName="UnorderedList.Item";try{UnorderedList.Item.displayName="UnorderedList.Item",UnorderedList.Item.__docgenInfo={description:"",displayName:"UnorderedList.Item",props:{}}}catch{}const D=b.forwardRef(({children:s,className:a,color:l,markers:I=!0,size:p,...w},T)=>e.jsx("ul",{className:W("ams-unordered-list",l&&`ams-unordered-list--${l}`,!I&&"ams-unordered-list--no-markers",p&&`ams-unordered-list--${p}`,a),ref:T,...w,children:s}));D.displayName="UnorderedList";const r=Object.assign(D,{Item:z});try{r.displayName="UnorderedList",r.__docgenInfo={description:"",displayName:"UnorderedList",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'}]}},markers:{defaultValue:{value:"true"},description:"Whether the list items show a marker.",name:"markers",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the text.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'}]}}}}}catch{}const q=V().map((s,a)=>e.jsx(r.Item,{children:s},a)),$={title:"Components/Text/Unordered List",component:r,args:{children:q,markers:void 0},argTypes:{size:{control:{labels:{small:"small",undefined:"medium"},type:"radio"},options:["small",void 0]}}},t={},o={render:s=>e.jsxs(r,{...s,children:[e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]}),e.jsxs(r.Item,{children:["Stadsdeel Nieuw-West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"De Aker, Sloten en Nieuw Sloten"}),e.jsx(r.Item,{children:"Geuzenveld, Slotermeer en Sloterdijken"}),e.jsx(r.Item,{children:"Osdorp"}),e.jsx(r.Item,{children:"Slotervaart"})]})]})]})},i={args:{children:[e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:B}),e.jsx(d,{children:"Stadsloket: locaties en openingstijden"})]})},1),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:O}),e.jsx(d,{children:"Parkeren + Reizen (P+R)"})]})},2),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:R}),e.jsx(d,{children:"Paspoort, ID-kaart en Rijbewijs"})]})},3),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:A}),e.jsx(d,{children:"Gemeentebelastingen"})]})},4),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:C}),e.jsx(d,{children:"Melding openbare ruimte en overlast"})]})},5),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:G}),e.jsx(d,{children:"Verhuizing doorgeven"})]})},6),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:E}),e.jsx(d,{children:"Grof afval"})]})},7),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:M}),e.jsx(d,{children:"Kennisgevingen en bekendmakingen"})]})},8)],markers:!1}},m={args:{color:"inverse"},render:s=>e.jsx(r,{...s,children:e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]})})},c={args:{size:"small"}};var g,h,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var v,L,j;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <UnorderedList {...args}>
      <UnorderedList.Item>
        Stadsdeel West
        <UnorderedList {...args}>
          <UnorderedList.Item>Bos en Lommer</UnorderedList.Item>
          <UnorderedList.Item>Oud West / De Baarsjes</UnorderedList.Item>
          <UnorderedList.Item>Westerpark</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>
      <UnorderedList.Item>
        Stadsdeel Nieuw-West
        <UnorderedList {...args}>
          <UnorderedList.Item>De Aker, Sloten en Nieuw Sloten</UnorderedList.Item>
          <UnorderedList.Item>Geuzenveld, Slotermeer en Sloterdijken</UnorderedList.Item>
          <UnorderedList.Item>Osdorp</UnorderedList.Item>
          <UnorderedList.Item>Slotervaart</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>
    </UnorderedList>
}`,...(j=(L=o.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var U,x,S;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: [<UnorderedList.Item key={1}>
        <div className="ams-docs-card">
          <Icon svg={LocationIcon} />
          <Paragraph>Stadsloket: locaties en openingstijden</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={2}>
        <div className="ams-docs-card">
          <Icon svg={CarIcon} />
          <Paragraph>Parkeren + Reizen (P+R)</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={3}>
        <div className="ams-docs-card">
          <Icon svg={PassportIcon} />
          <Paragraph>Paspoort, ID-kaart en Rijbewijs</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={4}>
        <div className="ams-docs-card">
          <Icon svg={DocumentEuroSignIcon} />
          <Paragraph>Gemeentebelastingen</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={5}>
        <div className="ams-docs-card">
          <Icon svg={AlertIcon} />
          <Paragraph>Melding openbare ruimte en overlast</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={6}>
        <div className="ams-docs-card">
          <Icon svg={HousingIcon} />
          <Paragraph>Verhuizing doorgeven</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={7}>
        <div className="ams-docs-card">
          <Icon svg={TrashBinIcon} />
          <Paragraph>Grof afval</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={8}>
        <div className="ams-docs-card">
          <Icon svg={AnnouncementIcon} />
          <Paragraph>Kennisgevingen en bekendmakingen</Paragraph>
        </div>
      </UnorderedList.Item>],
    markers: false
  }
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,f,N;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  },
  render: args => <UnorderedList {...args}>
      <UnorderedList.Item>
        Stadsdeel West
        <UnorderedList {...args}>
          <UnorderedList.Item>Bos en Lommer</UnorderedList.Item>
          <UnorderedList.Item>Oud West / De Baarsjes</UnorderedList.Item>
          <UnorderedList.Item>Westerpark</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>
    </UnorderedList>
}`,...(N=(f=m.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var P,y,_;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(_=(y=c.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const H=["Default","TwoLevels","WithoutMarkers","InverseColor","SmallText"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:t,InverseColor:m,SmallText:c,TwoLevels:o,WithoutMarkers:i,__namedExportsOrder:H,default:$},Symbol.toStringTag,{value:"Module"}));export{m as I,c as S,o as T,Z as U,i as W};
