import{j as e}from"./jsx-runtime-BlAj40OV.js";import{d as n,P as d}from"./index.esm-B_1KjXht.js";import{o as T,p as B,q as O,r as R,S as A,g as G,s as E,t as M}from"./index.esm-DUIRolM2.js";import{i as V}from"./decorators-CweBkPI6.js";import{f as q}from"./exampleContent-hIIPvEhU.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as W}from"./index-Cs7sjTYM.js";const b=W.forwardRef(({children:s,className:a,...c},I)=>e.jsx("li",{ref:I,className:_("ams-unordered-list__item",a),...c,children:s}));b.displayName="UnorderedList.Item";try{UnorderedList.Item.displayName="UnorderedList.Item",UnorderedList.Item.__docgenInfo={description:"",displayName:"UnorderedList.Item",props:{}}}catch{}const D=W.forwardRef(({children:s,className:a,inverseColor:c,markers:I=!0,size:p,...C},w)=>e.jsx("ul",{ref:w,className:_("ams-unordered-list",c&&"ams-unordered-list--inverse-color",!I&&"ams-unordered-list--no-markers",p&&`ams-unordered-list--${p}`,a),...C,children:s}));D.displayName="UnorderedList";const r=Object.assign(D,{Item:b});try{r.displayName="UnorderedList",r.__docgenInfo={description:"",displayName:"UnorderedList",props:{inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},markers:{defaultValue:{value:"true"},description:"Whether the list items show a marker.",name:"markers",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the text.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'}]}}}}}catch{}const H=q().map((s,a)=>e.jsx(r.Item,{children:s},a)),K={title:"Components/Text/Unordered List",component:r,args:{children:H,inverseColor:!1,markers:void 0},argTypes:{size:{control:{type:"radio",labels:{small:"small",undefined:"medium"}},options:["small",void 0]}},decorators:[V]},t={},o={render:s=>e.jsxs(r,{...s,children:[e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]}),e.jsxs(r.Item,{children:["Stadsdeel Nieuw-West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"De Aker, Sloten en Nieuw Sloten"}),e.jsx(r.Item,{children:"Geuzenveld, Slotermeer en Sloterdijken"}),e.jsx(r.Item,{children:"Osdorp"}),e.jsx(r.Item,{children:"Slotervaart"})]})]})]})},i={args:{children:[e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:T,size:"level-6"}),e.jsx(d,{children:"Stadsloket: locaties en openingstijden"})]})},1),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:B,size:"level-6"}),e.jsx(d,{children:"Parkeren + Reizen (P+R)"})]})},2),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:O,size:"level-6"}),e.jsx(d,{children:"Paspoort, ID-kaart en Rijbewijs"})]})},3),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:R,size:"level-6"}),e.jsx(d,{children:"Gemeentebelastingen"})]})},4),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:A,size:"level-6"}),e.jsx(d,{children:"Melding openbare ruimte en overlast"})]})},5),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:G,size:"level-6"}),e.jsx(d,{children:"Verhuizing doorgeven"})]})},6),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:E,size:"level-6"}),e.jsx(d,{children:"Grof afval"})]})},7),e.jsx(r.Item,{children:e.jsxs("div",{className:"ams-docs-card",children:[e.jsx(n,{svg:M,size:"level-6"}),e.jsx(d,{children:"Kennisgevingen en bekendmakingen"})]})},8)],markers:!1}},l={args:{inverseColor:!0},render:s=>e.jsx(r,{...s,children:e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]})})},m={args:{size:"small"}};var v,g,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,L,j;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
          <Icon svg={LocationIcon} size="level-6" />
          <Paragraph>Stadsloket: locaties en openingstijden</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={2}>
        <div className="ams-docs-card">
          <Icon svg={CarIcon} size="level-6" />
          <Paragraph>Parkeren + Reizen (P+R)</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={3}>
        <div className="ams-docs-card">
          <Icon svg={PassportIcon} size="level-6" />
          <Paragraph>Paspoort, ID-kaart en Rijbewijs</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={4}>
        <div className="ams-docs-card">
          <Icon svg={DocumentEuroSignIcon} size="level-6" />
          <Paragraph>Gemeentebelastingen</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={5}>
        <div className="ams-docs-card">
          <Icon svg={AlertIcon} size="level-6" />
          <Paragraph>Melding openbare ruimte en overlast</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={6}>
        <div className="ams-docs-card">
          <Icon svg={HousingIcon} size="level-6" />
          <Paragraph>Verhuizing doorgeven</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={7}>
        <div className="ams-docs-card">
          <Icon svg={TrashBinIcon} size="level-6" />
          <Paragraph>Grof afval</Paragraph>
        </div>
      </UnorderedList.Item>, <UnorderedList.Item key={8}>
        <div className="ams-docs-card">
          <Icon svg={AnnouncementIcon} size="level-6" />
          <Paragraph>Kennisgevingen en bekendmakingen</Paragraph>
        </div>
      </UnorderedList.Item>],
    markers: false
  }
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,f,z;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    inverseColor: true
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
}`,...(z=(f=l.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var N,P,y;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(y=(P=m.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};const $=["Default","TwoLevels","WithoutMarkers","InverseColor","SmallText"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:t,InverseColor:l,SmallText:m,TwoLevels:o,WithoutMarkers:i,__namedExportsOrder:$,default:K},Symbol.toStringTag,{value:"Module"}));export{l as I,m as S,o as T,re as U,i as W};
