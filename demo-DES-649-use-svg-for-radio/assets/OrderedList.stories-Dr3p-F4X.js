import{j as e}from"./jsx-runtime-BlAj40OV.js";import{H as h,P as t}from"./index.esm-BAIR3bM4.js";import{i as Z}from"./decorators-DLPD6TOJ.js";import{d as q}from"./exampleContent-DN6_nyQl.js";import{c as E}from"./clsx-B-dksMZM.js";import{r as H}from"./index-Cs7sjTYM.js";const A=H.forwardRef(({children:s,className:a,...u},p)=>e.jsx("li",{ref:p,className:E("ams-ordered-list__item",a),...u,children:s}));A.displayName="OrderedList.Item";try{OrderedList.Item.displayName="OrderedList.Item",OrderedList.Item.__docgenInfo={description:"",displayName:"OrderedList.Item",props:{}}}catch{}const G=H.forwardRef(({children:s,className:a,inverseColor:u,markers:p=!0,size:g,...R},V)=>e.jsx("ol",{ref:V,className:E("ams-ordered-list",u&&"ams-ordered-list--inverse-color",!p&&"ams-ordered-list--no-markers",g&&`ams-ordered-list--${g}`,a),...R,children:s}));G.displayName="OrderedList";const r=Object.assign(G,{Item:A});try{r.displayName="OrderedList",r.__docgenInfo={description:"",displayName:"OrderedList",props:{inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},markers:{defaultValue:{value:"true"},description:"Whether the list items show a marker.",name:"markers",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the text.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'}]}}}}}catch{}const M=q().map((s,a)=>e.jsx(r.Item,{children:s},a)),$={title:"Components/Text/Ordered List",component:r,args:{children:M,inverseColor:!1,markers:void 0,reversed:void 0,start:void 0},argTypes:{reversed:{control:"boolean",description:"Numbers the items from the highest value down.",table:{defaultValue:{summary:"false"}}},start:{control:"number",description:"The value for the first list item’s marker."},size:{control:{type:"radio",labels:{small:"small",undefined:"medium"}},options:["small",void 0,"large"]}},decorators:[Z]},d={},n={args:{size:"small"}},i={render:s=>e.jsxs(r,{...s,children:[e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]}),e.jsxs(r.Item,{children:["Stadsdeel Nieuw-West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"De Aker, Sloten en Nieuw Sloten"}),e.jsx(r.Item,{children:"Geuzenveld, Slotermeer en Sloterdijken"}),e.jsx(r.Item,{children:"Osdorp"}),e.jsx(r.Item,{children:"Slotervaart"})]})]})]})},o={args:{children:[e.jsx(r.Item,{children:"Zes"},6),e.jsx(r.Item,{children:"Zeven"},7),e.jsx(r.Item,{children:"Acht"},8)],start:6}},l={args:{children:[e.jsx(r.Item,{children:"Drie"},3),e.jsx(r.Item,{children:"Twee"},2),e.jsx(r.Item,{children:"Eén"},1)],reversed:!0,start:3}},m={args:{children:[e.jsxs(r.Item,{children:[e.jsx(h,{size:"level-4",children:"Weg met steen, hallo extra groen en koelte"}),e.jsx(t,{children:"Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de stad in de zomer. Een paar voorbeelden."}),e.jsx(t,{size:"small",children:"16 augustus 2023"})]},1),e.jsxs(r.Item,{children:[e.jsx(h,{size:"level-4",children:"Amsterdam bindt de strijd aan met lawaaierige voertuigen"}),e.jsx(t,{children:"Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals motoren en auto’s tegen te gaan."}),e.jsx(t,{size:"small",children:"10 augustus 2023"})]},2),e.jsxs(r.Item,{children:[e.jsx(h,{size:"level-4",children:"Een prachtroute door de wonderlijke Baarsjes"}),e.jsx(t,{children:"In de Baarsjes zijn kunst en cultuur met elkaar vervlochten. We zetten een prachtige wandelroute voor u uit en laten zien hoe het was en hoe het nu is."}),e.jsx(t,{size:"small",children:"8 augustus 2023"})]},3)],markers:!1}},c={args:{inverseColor:!0},render:s=>e.jsx(r,{...s,children:e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]})})};var I,O,L;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(L=(O=d.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var j,v,x;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var k,f,z;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <OrderedList {...args}>
      <OrderedList.Item>
        Stadsdeel West
        <OrderedList {...args}>
          <OrderedList.Item>Bos en Lommer</OrderedList.Item>
          <OrderedList.Item>Oud West / De Baarsjes</OrderedList.Item>
          <OrderedList.Item>Westerpark</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>
      <OrderedList.Item>
        Stadsdeel Nieuw-West
        <OrderedList {...args}>
          <OrderedList.Item>De Aker, Sloten en Nieuw Sloten</OrderedList.Item>
          <OrderedList.Item>Geuzenveld, Slotermeer en Sloterdijken</OrderedList.Item>
          <OrderedList.Item>Osdorp</OrderedList.Item>
          <OrderedList.Item>Slotervaart</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>
    </OrderedList>
}`,...(z=(f=i.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var S,w,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: [<OrderedList.Item key={6}>Zes</OrderedList.Item>, <OrderedList.Item key={7}>Zeven</OrderedList.Item>, <OrderedList.Item key={8}>Acht</OrderedList.Item>],
    start: 6
  }
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var b,_,W;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: [<OrderedList.Item key={3}>Drie</OrderedList.Item>, <OrderedList.Item key={2}>Twee</OrderedList.Item>, <OrderedList.Item key={1}>Eén</OrderedList.Item>],
    reversed: true,
    start: 3
  }
}`,...(W=(_=l.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var N,D,P;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: [<OrderedList.Item key={1}>
        <Heading size="level-4">Weg met steen, hallo extra groen en koelte</Heading>
        <Paragraph>
          Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de
          stad in de zomer. Een paar voorbeelden.
        </Paragraph>
        <Paragraph size="small">16 augustus 2023</Paragraph>
      </OrderedList.Item>, <OrderedList.Item key={2}>
        <Heading size="level-4">Amsterdam bindt de strijd aan met lawaaierige voertuigen</Heading>
        <Paragraph>
          Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals
          motoren en auto’s tegen te gaan.
        </Paragraph>
        <Paragraph size="small">10 augustus 2023</Paragraph>
      </OrderedList.Item>, <OrderedList.Item key={3}>
        <Heading size="level-4">Een prachtroute door de wonderlijke Baarsjes</Heading>
        <Paragraph>
          In de Baarsjes zijn kunst en cultuur met elkaar vervlochten. We zetten een prachtige wandelroute voor u uit en
          laten zien hoe het was en hoe het nu is.
        </Paragraph>
        <Paragraph size="small">8 augustus 2023</Paragraph>
      </OrderedList.Item>],
    markers: false
  }
}`,...(P=(D=m.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var B,C,T;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  },
  render: args => <OrderedList {...args}>
      <OrderedList.Item>
        Stadsdeel West
        <OrderedList {...args}>
          <OrderedList.Item>Bos en Lommer</OrderedList.Item>
          <OrderedList.Item>Oud West / De Baarsjes</OrderedList.Item>
          <OrderedList.Item>Westerpark</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>
    </OrderedList>
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const F=["Default","Small","TwoLevels","StartingNumber","DescendingNumbers","WithoutMarkers","InverseColor"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:d,DescendingNumbers:l,InverseColor:c,Small:n,StartingNumber:o,TwoLevels:i,WithoutMarkers:m,__namedExportsOrder:F,default:$},Symbol.toStringTag,{value:"Module"}));export{l as D,c as I,ee as O,n as S,i as T,m as W,o as a};