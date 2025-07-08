import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as h,P as t}from"./index.esm-DeL3Eep_.js";import{f as k}from"./exampleContent-r-zRGsZY.js";import{c as I}from"./clsx-B-dksMZM.js";import{r as O}from"./index-G8LIXM5I.js";const L=O.forwardRef(({children:s,className:a,...u},p)=>e.jsx("li",{className:I("ams-ordered-list__item",a),ref:p,...u,children:s}));L.displayName="OrderedList.Item";try{OrderedList.Item.displayName="OrderedList.Item",OrderedList.Item.__docgenInfo={description:"",displayName:"OrderedList.Item",props:{}}}catch{}const j=O.forwardRef(({children:s,className:a,color:u,markers:p=!0,size:g,...v},x)=>e.jsx("ol",{className:I("ams-ordered-list",u&&`ams-ordered-list--${u}`,!p&&"ams-ordered-list--no-markers",g&&`ams-ordered-list--${g}`,a),ref:x,...v,children:s}));j.displayName="OrderedList";const r=Object.assign(j,{Item:L});try{r.displayName="OrderedList",r.__docgenInfo={description:"",displayName:"OrderedList",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'}]}},markers:{defaultValue:{value:"true"},description:"Whether the list items show a marker.",name:"markers",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the text.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'}]}}}}}catch{}const f=k().map((s,a)=>e.jsx(r.Item,{children:s},a)),z={title:"Components/Text/Ordered List",component:r,args:{children:f,markers:void 0,reversed:void 0,start:void 0},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]},reversed:{control:"boolean",description:"Numbers the items from the highest value down."},size:{control:{labels:{small:"small",undefined:"medium"},type:"radio"},options:["small",void 0]},start:{control:"number",description:"The value for the first list item’s marker."}}},d={},n={render:s=>e.jsxs(r,{...s,children:[e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]}),e.jsxs(r.Item,{children:["Stadsdeel Nieuw-West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"De Aker, Sloten en Nieuw Sloten"}),e.jsx(r.Item,{children:"Geuzenveld, Slotermeer en Sloterdijken"}),e.jsx(r.Item,{children:"Osdorp"}),e.jsx(r.Item,{children:"Slotervaart"})]})]})]})},i={args:{children:[e.jsx(r.Item,{children:"Zes"},6),e.jsx(r.Item,{children:"Zeven"},7),e.jsx(r.Item,{children:"Acht"},8)],start:6}},o={args:{children:[e.jsx(r.Item,{children:"Drie"},3),e.jsx(r.Item,{children:"Twee"},2),e.jsx(r.Item,{children:"Eén"},1)],reversed:!0,start:3}},l={args:{children:[e.jsxs(r.Item,{children:[e.jsx(h,{level:1,size:"level-4",children:"Weg met steen, hallo extra groen en koelte"}),e.jsx(t,{children:"Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de stad in de zomer. Een paar voorbeelden."}),e.jsx(t,{size:"small",children:"16 augustus 2023"})]},1),e.jsxs(r.Item,{children:[e.jsx(h,{level:1,size:"level-4",children:"Amsterdam bindt de strijd aan met lawaaierige voertuigen"}),e.jsx(t,{children:"Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals motoren en auto’s tegen te gaan."}),e.jsx(t,{size:"small",children:"10 augustus 2023"})]},2),e.jsxs(r.Item,{children:[e.jsx(h,{level:1,size:"level-4",children:"Een prachtroute door de wonderlijke Baarsjes"}),e.jsx(t,{children:"In de Baarsjes zijn kunst en cultuur met elkaar vervlochten. We zetten een prachtige wandelroute voor u uit en laten zien hoe het was en hoe het nu is."}),e.jsx(t,{size:"small",children:"8 augustus 2023"})]},3)],markers:!1}},m={args:{color:"inverse"},render:s=>e.jsx(r,{...s,children:e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]})})},c={args:{size:"small"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<OrderedList.Item key={6}>Zes</OrderedList.Item>, <OrderedList.Item key={7}>Zeven</OrderedList.Item>, <OrderedList.Item key={8}>Acht</OrderedList.Item>],
    start: 6
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<OrderedList.Item key={3}>Drie</OrderedList.Item>, <OrderedList.Item key={2}>Twee</OrderedList.Item>, <OrderedList.Item key={1}>Eén</OrderedList.Item>],
    reversed: true,
    start: 3
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<OrderedList.Item key={1}>
        <Heading level={1} size="level-4">
          Weg met steen, hallo extra groen en koelte
        </Heading>
        <Paragraph>
          Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de
          stad in de zomer. Een paar voorbeelden.
        </Paragraph>
        <Paragraph size="small">16 augustus 2023</Paragraph>
      </OrderedList.Item>, <OrderedList.Item key={2}>
        <Heading level={1} size="level-4">
          Amsterdam bindt de strijd aan met lawaaierige voertuigen
        </Heading>
        <Paragraph>
          Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals
          motoren en auto’s tegen te gaan.
        </Paragraph>
        <Paragraph size="small">10 augustus 2023</Paragraph>
      </OrderedList.Item>, <OrderedList.Item key={3}>
        <Heading level={1} size="level-4">
          Een prachtroute door de wonderlijke Baarsjes
        </Heading>
        <Paragraph>
          In de Baarsjes zijn kunst en cultuur met elkaar vervlochten. We zetten een prachtige wandelroute voor u uit en
          laten zien hoe het was en hoe het nu is.
        </Paragraph>
        <Paragraph size="small">8 augustus 2023</Paragraph>
      </OrderedList.Item>],
    markers: false
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...c.parameters?.docs?.source}}};const S=["Default","TwoLevels","StartingNumber","DescendingNumbers","WithoutMarkers","InverseColor","SmallText"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:d,DescendingNumbers:o,InverseColor:m,SmallText:c,StartingNumber:i,TwoLevels:n,WithoutMarkers:l,__namedExportsOrder:S,default:z},Symbol.toStringTag,{value:"Module"}));export{o as D,m as I,N as O,i as S,n as T,l as W,c as a};
