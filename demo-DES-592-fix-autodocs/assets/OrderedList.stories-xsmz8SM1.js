import{j as e}from"./jsx-runtime-CKrituN3.js";import{f as T}from"./exampleContent-DcLVbCjv.js";import{c as D}from"./clsx-B-dksMZM.js";import{r as P}from"./index-CBqU2yxZ.js";import{H as p}from"./Heading-NgU1dxwu.js";import{P as d}from"./Paragraph-Im3SnT_h.js";const B=P.forwardRef(({children:s,className:t,...c},u)=>e.jsx("li",{ref:u,className:D("ams-ordered-list__item",t),...c,children:s}));B.displayName="OrderedList.Item";try{OrderedList.Item.displayName="OrderedList.Item",OrderedList.Item.__docgenInfo={description:"",displayName:"OrderedList.Item",props:{}}}catch{}const C=P.forwardRef(({children:s,className:t,inverseColor:c,markers:u=!0,...E},H)=>e.jsx("ol",{ref:H,className:D("ams-ordered-list",c&&"ams-ordered-list--inverse-color",!u&&"ams-ordered-list--no-markers",t),...E,children:s}));C.displayName="OrderedList";const r=Object.assign(C,{Item:B});try{r.displayName="OrderedList",r.__docgenInfo={description:"",displayName:"OrderedList",props:{markers:{defaultValue:{value:"true"},description:"",name:"markers",required:!1,type:{name:"boolean"}},inverseColor:{defaultValue:null,description:"",name:"inverseColor",required:!1,type:{name:"boolean"}}}}}catch{}const A=T().map((s,t)=>e.jsx(r.Item,{children:s},t)),G={title:"Components/Text/Ordered List",component:r,args:{children:A,inverseColor:!1,markers:void 0,reversed:void 0,start:void 0},argTypes:{inverseColor:{control:"boolean"},markers:{control:"boolean"},reversed:{control:"boolean"},start:{control:"number"}},decorators:[(s,t)=>e.jsx("div",{className:t.args.inverseColor?"ams-docs-dark-background":void 0,children:e.jsx(s,{})})]},n={},a={render:s=>e.jsxs(r,{...s,children:[e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]}),e.jsxs(r.Item,{children:["Stadsdeel Nieuw-West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"De Aker, Sloten en Nieuw Sloten"}),e.jsx(r.Item,{children:"Geuzenveld, Slotermeer en Sloterdijken"}),e.jsx(r.Item,{children:"Osdorp"}),e.jsx(r.Item,{children:"Slotervaart"})]})]})]})},i={args:{children:[e.jsx(r.Item,{children:"Zes"},6),e.jsx(r.Item,{children:"Zeven"},7),e.jsx(r.Item,{children:"Acht"},8)],start:6}},o={args:{children:[e.jsx(r.Item,{children:"Drie"},3),e.jsx(r.Item,{children:"Twee"},2),e.jsx(r.Item,{children:"Eén"},1)],reversed:!0,start:3}},l={args:{children:[e.jsxs(r.Item,{children:[e.jsx(p,{size:"level-4",children:"Weg met steen, hallo extra groen en koelte"}),e.jsx(d,{children:"Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de stad in de zomer. Een paar voorbeelden."}),e.jsx(d,{size:"small",children:"16 augustus 2023"})]},1),e.jsxs(r.Item,{children:[e.jsx(p,{size:"level-4",children:"Amsterdam bindt de strijd aan met lawaaierige voertuigen"}),e.jsx(d,{children:"Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals motoren en auto’s tegen te gaan."}),e.jsx(d,{size:"small",children:"10 augustus 2023"})]},2),e.jsxs(r.Item,{children:[e.jsx(p,{size:"level-4",children:"Een prachtroute door de wonderlijke Baarsjes"}),e.jsx(d,{children:"In de Baarsjes zijn kunst en cultuur met elkaar vervlochten. We zetten een prachtige wandelroute voor u uit en laten zien hoe het was en hoe het nu is."}),e.jsx(d,{size:"small",children:"8 augustus 2023"})]},3)],markers:!1}},m={args:{inverseColor:!0},render:s=>e.jsx(r,{...s,children:e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]})})};var g,h,I;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(I=(h=n.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var O,L,j;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(y=l.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var b,W,N;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(N=(W=m.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};const R=["Default","TwoLevels","StartingNumber","DescendingNumbers","WithoutMarkers","InverseColor"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:n,DescendingNumbers:o,InverseColor:m,StartingNumber:i,TwoLevels:a,WithoutMarkers:l,__namedExportsOrder:R,default:G},Symbol.toStringTag,{value:"Module"}));export{o as D,m as I,J as O,i as S,a as T,l as W};
