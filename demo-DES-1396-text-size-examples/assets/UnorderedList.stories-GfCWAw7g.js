import{r as g,j as e,c as h,g as n,a2 as U,P as a,a3 as x,a4 as k,a5 as S,x as f,m as N,a6 as y,y as P}from"./iframe-COLkluRW.js";import{i as _}from"./exampleContent-B7cDFRSs.js";const u=g.forwardRef(({children:s,className:l,...c},I)=>e.jsx("li",{className:h("ams-unordered-list__item",l),ref:I,...c,children:s}));u.displayName="UnorderedList.Item";try{UnorderedList.Item.displayName="UnorderedList.Item",UnorderedList.Item.__docgenInfo={description:"",displayName:"UnorderedList.Item",props:{}}}catch{}const v=g.forwardRef(({children:s,className:l,color:c,markers:I=!0,size:p,...L},j)=>e.jsx("ul",{className:h("ams-unordered-list",c&&`ams-unordered-list--${c}`,!I&&"ams-unordered-list--no-markers",p&&`ams-unordered-list--${p}`,l),ref:j,...L,children:s}));v.displayName="UnorderedList";const r=Object.assign(v,{Item:u});try{r.displayName="UnorderedList",r.__docgenInfo={description:"",displayName:"UnorderedList",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'}]}},markers:{defaultValue:{value:"true"},description:"Whether the list items show a marker.",name:"markers",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the text.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'}]}}}}}catch{}const W=_().map(s=>e.jsx(r.Item,{children:s},s)),b={title:"Components/Text/Unordered List",component:r,args:{children:W,markers:void 0},argTypes:{size:{control:{labels:{small:"small",undefined:"medium"},type:"radio"},options:["small",void 0]}}},d={},t={render:s=>e.jsxs(r,{...s,children:[e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]}),e.jsxs(r.Item,{children:["Stadsdeel Nieuw-West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"De Aker, Sloten en Nieuw Sloten"}),e.jsx(r.Item,{children:"Geuzenveld, Slotermeer en Sloterdijken"}),e.jsx(r.Item,{children:"Osdorp"}),e.jsx(r.Item,{children:"Slotervaart"})]})]})]})},o={args:{children:[e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:U}),e.jsx(a,{children:"Stadsloket: locaties en openingstijden"})]})},1),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:x}),e.jsx(a,{children:"Parkeren + Reizen (P+R)"})]})},2),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:k}),e.jsx(a,{children:"Paspoort, ID-kaart en Rijbewijs"})]})},3),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:S}),e.jsx(a,{children:"Gemeentebelastingen"})]})},4),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:f}),e.jsx(a,{children:"Melding openbare ruimte en overlast"})]})},5),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:N}),e.jsx(a,{children:"Verhuizing doorgeven"})]})},6),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:y}),e.jsx(a,{children:"Grof afval"})]})},7),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:P}),e.jsx(a,{children:"Kennisgevingen en bekendmakingen"})]})},8)],markers:!1}},i={args:{color:"inverse"},render:s=>e.jsx(r,{...s,children:e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]})})},m={args:{size:"small"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<UnorderedList.Item key={1}>
        <div className="ams-docs-card">
          <Icon svg={MapMarkerOnMapIcon} />
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
          <Icon svg={DocumentEuroIcon} />
          <Paragraph>Gemeentebelastingen</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={5}>
        <div className="ams-docs-card">
          <Icon svg={WarningIcon} />
          <Paragraph>Melding openbare ruimte en overlast</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={6}>
        <div className="ams-docs-card">
          <Icon svg={HouseIcon} />
          <Paragraph>Verhuizing doorgeven</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={7}>
        <div className="ams-docs-card">
          <Icon svg={TrashBinIcon} />
          <Paragraph>Grof afval</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={8}>
        <div className="ams-docs-card">
          <Icon svg={MegaphoneIcon} />
          <Paragraph>Kennisgevingen en bekendmakingen</Paragraph>
        </div>
      </UnorderedList.Item>],
    markers: false
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...m.parameters?.docs?.source}}};const M=["Default","TwoLevels","WithoutMarkers","InverseColor","SmallText"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:d,InverseColor:i,SmallText:m,TwoLevels:t,WithoutMarkers:o,__namedExportsOrder:M,default:b},Symbol.toStringTag,{value:"Module"}));export{i as I,m as S,t as T,O as U,o as W};
