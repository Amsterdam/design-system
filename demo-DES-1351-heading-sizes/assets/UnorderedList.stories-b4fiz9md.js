import{r as g,j as e,c as h,q as t,P as a}from"./iframe-C9wbfKto.js";import{g as x}from"./exampleContent-B9pMnolB.js";const I=g.forwardRef(({children:s,className:c,...m},u)=>e.jsx("li",{className:h("ams-unordered-list__item",c),ref:u,...m,children:s}));I.displayName="UnorderedList.Item";try{UnorderedList.Item.displayName="UnorderedList.Item",UnorderedList.Item.__docgenInfo={description:"",displayName:"UnorderedList.Item",props:{}}}catch{}const L=g.forwardRef(({children:s,className:c,color:m,markers:u=!0,size:p,...j},U)=>e.jsx("ul",{className:h("ams-unordered-list",m&&`ams-unordered-list--${m}`,!u&&"ams-unordered-list--no-markers",p&&`ams-unordered-list--${p}`,c),ref:U,...j,children:s}));L.displayName="UnorderedList";const r=Object.assign(L,{Item:I});try{r.displayName="UnorderedList",r.__docgenInfo={description:"",displayName:"UnorderedList",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'}]}},markers:{defaultValue:{value:"true"},description:"Whether the list items show a marker.",name:"markers",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the text.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'}]}}}}}catch{}const v=x().map(s=>e.jsx(r.Item,{children:s},s)),k={title:"Components/Text/Unordered List",component:r,args:{children:v,markers:void 0},argTypes:{size:{control:{labels:{small:"small",undefined:"medium"},type:"radio"},options:["small",void 0]}}},n={},d={render:s=>e.jsxs(r,{...s,children:[e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]}),e.jsxs(r.Item,{children:["Stadsdeel Nieuw-West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"De Aker, Sloten en Nieuw Sloten"}),e.jsx(r.Item,{children:"Geuzenveld, Slotermeer en Sloterdijken"}),e.jsx(r.Item,{children:"Osdorp"}),e.jsx(r.Item,{children:"Slotervaart"})]})]})]})},o={args:{children:[e.jsx(r.Item,{children:e.jsxs(t,{children:[e.jsx(t.Heading,{level:2,children:"Weg met steen, hallo extra groen en koelte"}),e.jsx(a,{children:"Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de stad in de zomer. Een paar voorbeelden."}),e.jsx(a,{size:"small",children:"16 augustus 2023"})]})},1),e.jsx(r.Item,{children:e.jsxs(t,{children:[e.jsx(t.Heading,{level:1,children:"Amsterdam bindt de strijd aan met lawaaierige voertuigen"}),e.jsx(a,{children:"Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals motoren en auto’s tegen te gaan."}),e.jsx(a,{size:"small",children:"10 augustus 2023"})]})},2),e.jsx(r.Item,{children:e.jsxs(t,{children:[e.jsx(t.Heading,{level:1,children:"Een prachtroute door de wonderlijke Baarsjes"}),e.jsx(a,{children:"In de Baarsjes zijn kunst en cultuur met elkaar vervlochten. We zetten een prachtige wandelroute voor u uit en laten zien hoe het was en hoe het nu is."}),e.jsx(a,{size:"small",children:"8 augustus 2023"})]})},3)],className:"ams-gap-xl",markers:!1,style:{maxInlineSize:"32rem"}},argTypes:{style:{table:{disable:!0}}}},i={args:{color:"inverse"},render:s=>e.jsx(r,{...s,children:e.jsxs(r.Item,{children:["Stadsdeel West",e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Bos en Lommer"}),e.jsx(r.Item,{children:"Oud West / De Baarsjes"}),e.jsx(r.Item,{children:"Westerpark"})]})]})})},l={args:{size:"small"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<UnorderedList.Item key={1}>
        <Card>
          <Card.Heading level={2}>Weg met steen, hallo extra groen en koelte</Card.Heading>
          <Paragraph>
            Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de
            stad in de zomer. Een paar voorbeelden.
          </Paragraph>
          <Paragraph size="small">16 augustus 2023</Paragraph>
        </Card>
      </UnorderedList.Item>, <UnorderedList.Item key={2}>
        <Card>
          <Card.Heading level={1}>Amsterdam bindt de strijd aan met lawaaierige voertuigen</Card.Heading>
          <Paragraph>
            Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals
            motoren en auto’s tegen te gaan.
          </Paragraph>
          <Paragraph size="small">10 augustus 2023</Paragraph>
        </Card>
      </UnorderedList.Item>, <UnorderedList.Item key={3}>
        <Card>
          <Card.Heading level={1}>Een prachtroute door de wonderlijke Baarsjes</Card.Heading>
          <Paragraph>
            In de Baarsjes zijn kunst en cultuur met elkaar vervlochten. We zetten een prachtige wandelroute voor u uit
            en laten zien hoe het was en hoe het nu is.
          </Paragraph>
          <Paragraph size="small">8 augustus 2023</Paragraph>
        </Card>
      </UnorderedList.Item>],
    className: 'ams-gap-xl',
    markers: false,
    style: {
      maxInlineSize: '32rem'
    }
  },
  argTypes: {
    style: {
      table: {
        disable: true
      }
    }
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...l.parameters?.docs?.source}}};const S=["Default","TwoLevels","WithoutMarkers","InverseColor","SmallText"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:n,InverseColor:i,SmallText:l,TwoLevels:d,WithoutMarkers:o,__namedExportsOrder:S,default:k},Symbol.toStringTag,{value:"Module"}));export{i as I,l as S,d as T,y as U,o as W};
