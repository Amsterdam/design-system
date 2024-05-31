import{j as e}from"./jsx-runtime-CKrituN3.js";import{i as T}from"./decorators-CJr_2w8M.js";import{f as A}from"./exampleContent-CRK3_7Hv.js";import{c as N}from"./clsx-B-dksMZM.js";import{r as P}from"./index-CBqU2yxZ.js";import{H as p}from"./Heading-DlTzCZbz.js";import{P as t}from"./Paragraph-Im3SnT_h.js";const B=P.forwardRef(({children:s,className:d,...c},u)=>e.jsx("li",{ref:u,className:N("ams-ordered-list__item",d),...c,children:s}));B.displayName="OrderedList.Item";try{OrderedList.Item.displayName="OrderedList.Item",OrderedList.Item.__docgenInfo={description:"",displayName:"OrderedList.Item",props:{}}}catch{}const E=P.forwardRef(({children:s,className:d,inverseColor:c,markers:u=!0,...C},H)=>e.jsx("ol",{ref:H,className:N("ams-ordered-list",c&&"ams-ordered-list--inverse-color",!u&&"ams-ordered-list--no-markers",d),...C,children:s}));E.displayName="OrderedList";const r=Object.assign(E,{Item:B});try{r.displayName="OrderedList",r.__docgenInfo={description:"",displayName:"OrderedList",props:{markers:{defaultValue:{value:"true"},description:"",name:"markers",required:!1,type:{name:"boolean"}},inverseColor:{defaultValue:null,description:"",name:"inverseColor",required:!1,type:{name:"boolean"}}}}}catch{}const G=A().map((s,d)=>e.jsx(r.Item,{children:s},d)),R={title:"Components/Text/Ordered List",component:r,args:{children:G,inverseColor:!1,markers:void 0,reversed:void 0,start:void 0},argTypes:{reversed:{control:"boolean"},start:{control:"number"}},decorators:[T]},n={},a={render:s=>e.jsxs(r,{...s,children:[e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]}),e.jsxs(r.Item,{children:["Stadsdeel Nieuw-West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"De Aker, Sloten en Nieuw Sloten"}),e.jsx(r.Item,{children:"Geuzenveld, Slotermeer en Sloterdijken"}),e.jsx(r.Item,{children:"Osdorp"}),e.jsx(r.Item,{children:"Slotervaart"})]})]})]})},i={args:{children:[e.jsx(r.Item,{children:"Zes"},6),e.jsx(r.Item,{children:"Zeven"},7),e.jsx(r.Item,{children:"Acht"},8)],start:6}},o={args:{children:[e.jsx(r.Item,{children:"Drie"},3),e.jsx(r.Item,{children:"Twee"},2),e.jsx(r.Item,{children:"Eén"},1)],reversed:!0,start:3}},l={args:{children:[e.jsxs(r.Item,{children:[e.jsx(p,{size:"level-4",children:"Weg met steen, hallo extra groen en koelte"}),e.jsx(t,{children:"Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de stad in de zomer. Een paar voorbeelden."}),e.jsx(t,{size:"small",children:"16 augustus 2023"})]},1),e.jsxs(r.Item,{children:[e.jsx(p,{size:"level-4",children:"Amsterdam bindt de strijd aan met lawaaierige voertuigen"}),e.jsx(t,{children:"Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals motoren en auto’s tegen te gaan."}),e.jsx(t,{size:"small",children:"10 augustus 2023"})]},2),e.jsxs(r.Item,{children:[e.jsx(p,{size:"level-4",children:"Een prachtroute door de wonderlijke Baarsjes"}),e.jsx(t,{children:"In de Baarsjes zijn kunst en cultuur met elkaar vervlochten. We zetten een prachtige wandelroute voor u uit en laten zien hoe het was en hoe het nu is."}),e.jsx(t,{size:"small",children:"8 augustus 2023"})]},3)],markers:!1}},m={args:{inverseColor:!0},render:s=>e.jsx(r,{...s,children:e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]})})};var g,h,I;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(I=(h=n.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var O,L,j;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(L=a.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var v,x,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: [<OrderedList.Item key={6}>Zes</OrderedList.Item>, <OrderedList.Item key={7}>Zeven</OrderedList.Item>, <OrderedList.Item key={8}>Acht</OrderedList.Item>],
    start: 6
  }
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var f,S,z;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: [<OrderedList.Item key={3}>Drie</OrderedList.Item>, <OrderedList.Item key={2}>Twee</OrderedList.Item>, <OrderedList.Item key={1}>Eén</OrderedList.Item>],
    reversed: true,
    start: 3
  }
}`,...(z=(S=o.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var w,y,_;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(_=(y=l.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var W,b,D;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(D=(b=m.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const Z=["Default","TwoLevels","StartingNumber","DescendingNumbers","WithoutMarkers","InverseColor"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,DescendingNumbers:o,InverseColor:m,StartingNumber:i,TwoLevels:a,WithoutMarkers:l,__namedExportsOrder:Z,default:R},Symbol.toStringTag,{value:"Module"}));export{o as D,m as I,Q as O,i as S,a as T,l as W};