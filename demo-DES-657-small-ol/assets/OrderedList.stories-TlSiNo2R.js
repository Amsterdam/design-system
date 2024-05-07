import{j as e}from"./jsx-runtime-CKrituN3.js";import{i as q}from"./decorators-CJr_2w8M.js";import{f as M}from"./exampleContent-CRK3_7Hv.js";import{c as E}from"./clsx-B-dksMZM.js";import{r as T}from"./index-CBqU2yxZ.js";import{H as g}from"./Heading-DWMBrRCk.js";import{P as t}from"./Paragraph-XcXe9TCG.js";const H=T.forwardRef(({children:s,className:a,...p},u)=>e.jsx("li",{ref:u,className:E("ams-ordered-list__item",a),...p,children:s}));H.displayName="OrderedList.Item";try{OrderedList.Item.displayName="OrderedList.Item",OrderedList.Item.__docgenInfo={description:"",displayName:"OrderedList.Item",props:{}}}catch{}const A=T.forwardRef(({children:s,className:a,inverseColor:p,size:u,markers:G=!0,...R},Z)=>e.jsx("ol",{ref:Z,className:E("ams-ordered-list",p&&"ams-ordered-list--inverse-color",!G&&"ams-ordered-list--no-markers",u&&`ams-ordered-list--${u}`,a),...R,children:s}));A.displayName="OrderedList";const r=Object.assign(A,{Item:H});try{r.displayName="OrderedList",r.__docgenInfo={description:"",displayName:"OrderedList",props:{markers:{defaultValue:{value:"true"},description:"",name:"markers",required:!1,type:{name:"boolean"}},inverseColor:{defaultValue:null,description:"Changes the text color for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the ordered list",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'}]}}}}}catch{}const V=M().map((s,a)=>e.jsx(r.Item,{children:s},a)),$={title:"Components/Text/Ordered List",component:r,args:{children:V,inverseColor:!1,markers:void 0,reversed:void 0,start:void 0},argTypes:{reversed:{control:"boolean"},start:{control:"number"},size:{control:{type:"radio",labels:{small:"small",undefined:"medium"}},options:["small",void 0,"large"]}},decorators:[q]},d={},n={args:{size:"small"}},i={render:s=>e.jsxs(r,{...s,children:[e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]}),e.jsxs(r.Item,{children:["Stadsdeel Nieuw-West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"De Aker, Sloten en Nieuw Sloten"}),e.jsx(r.Item,{children:"Geuzenveld, Slotermeer en Sloterdijken"}),e.jsx(r.Item,{children:"Osdorp"}),e.jsx(r.Item,{children:"Slotervaart"})]})]})]})},o={args:{children:[e.jsx(r.Item,{children:"Zes"},6),e.jsx(r.Item,{children:"Zeven"},7),e.jsx(r.Item,{children:"Acht"},8)],start:6}},l={args:{children:[e.jsx(r.Item,{children:"Drie"},3),e.jsx(r.Item,{children:"Twee"},2),e.jsx(r.Item,{children:"Eén"},1)],reversed:!0,start:3}},m={args:{children:[e.jsxs(r.Item,{children:[e.jsx(g,{size:"level-4",children:"Weg met steen, hallo extra groen en koelte"}),e.jsx(t,{children:"Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de stad in de zomer. Een paar voorbeelden."}),e.jsx(t,{size:"small",children:"16 augustus 2023"})]},1),e.jsxs(r.Item,{children:[e.jsx(g,{size:"level-4",children:"Amsterdam bindt de strijd aan met lawaaierige voertuigen"}),e.jsx(t,{children:"Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals motoren en auto’s tegen te gaan."}),e.jsx(t,{size:"small",children:"10 augustus 2023"})]},2),e.jsxs(r.Item,{children:[e.jsx(g,{size:"level-4",children:"Een prachtroute door de wonderlijke Baarsjes"}),e.jsx(t,{children:"In de Baarsjes zijn kunst en cultuur met elkaar vervlochten. We zetten een prachtige wandelroute voor u uit en laten zien hoe het was en hoe het nu is."}),e.jsx(t,{size:"small",children:"8 augustus 2023"})]},3)],markers:!1}},c={args:{inverseColor:!0},render:s=>e.jsx(r,{...s,children:e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]})})};var h,I,O;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var L,j,v;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var x,k,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(k=i.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var z,S,y;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: [<OrderedList.Item key={6}>Zes</OrderedList.Item>, <OrderedList.Item key={7}>Zeven</OrderedList.Item>, <OrderedList.Item key={8}>Acht</OrderedList.Item>],
    start: 6
  }
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var w,_,b;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: [<OrderedList.Item key={3}>Drie</OrderedList.Item>, <OrderedList.Item key={2}>Twee</OrderedList.Item>, <OrderedList.Item key={1}>Eén</OrderedList.Item>],
    reversed: true,
    start: 3
  }
}`,...(b=(_=l.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var W,D,N;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(N=(D=m.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var P,B,C;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const F=["Default","Small","TwoLevels","StartingNumber","DescendingNumbers","WithoutMarkers","InverseColor"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:d,DescendingNumbers:l,InverseColor:c,Small:n,StartingNumber:o,TwoLevels:i,WithoutMarkers:m,__namedExportsOrder:F,default:$},Symbol.toStringTag,{value:"Module"}));export{l as D,c as I,re as O,n as S,i as T,m as W,o as a};
