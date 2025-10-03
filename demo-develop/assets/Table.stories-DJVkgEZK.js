import{r as s,j as e,c as n,H as b}from"./iframe-DUmmg3Oj.js";const i=s.forwardRef(({children:l,className:r,...o},d)=>e.jsx("tbody",{...o,className:n("ams-table__body",r),ref:d,children:l}));i.displayName="Table.Body";try{Table.Body.displayName="Table.Body",Table.Body.__docgenInfo={description:"",displayName:"Table.Body",props:{}}}catch{}const T=s.forwardRef(({children:l,className:r,...o},d)=>e.jsx("caption",{...o,className:n("ams-table__caption",r),ref:d,children:l}));T.displayName="Table.Caption";try{Table.Caption.displayName="Table.Caption",Table.Caption.__docgenInfo={description:"",displayName:"Table.Caption",props:{}}}catch{}const p=s.forwardRef(({children:l,className:r,...o},d)=>e.jsx("td",{...o,className:n("ams-table__cell",r),ref:d,children:l}));p.displayName="Table.Cell";try{Table.Cell.displayName="Table.Cell",Table.Cell.__docgenInfo={description:"",displayName:"Table.Cell",props:{}}}catch{}const _=s.forwardRef(({children:l,className:r,...o},d)=>e.jsx("tfoot",{...o,className:n("ams-table__footer",r),ref:d,children:l}));_.displayName="Table.Footer";try{Table.Footer.displayName="Table.Footer",Table.Footer.__docgenInfo={description:"",displayName:"Table.Footer",props:{}}}catch{}const C=s.forwardRef(({children:l,className:r,...o},d)=>e.jsx("thead",{...o,className:n("ams-table__header",r),ref:d,children:l}));C.displayName="Table.Header";try{Table.Header.displayName="Table.Header",Table.Header.__docgenInfo={description:"",displayName:"Table.Header",props:{}}}catch{}const y=s.forwardRef(({children:l,className:r,...o},d)=>e.jsx("th",{...o,className:n("ams-table__header-cell",r),ref:d,children:l}));y.displayName="Table.HeaderCell";try{Table.HeaderCell.displayName="Table.HeaderCell",Table.HeaderCell.__docgenInfo={description:"",displayName:"Table.HeaderCell",props:{}}}catch{}const w=s.forwardRef(({children:l,className:r,...o},d)=>e.jsx("tr",{...o,className:n("ams-table__row",r),ref:d,children:l}));w.displayName="Table.Row";try{Table.Row.displayName="Table.Row",Table.Row.__docgenInfo={description:"",displayName:"Table.Row",props:{}}}catch{}const h=s.forwardRef(({children:l,className:r,...o},d)=>e.jsx("div",{className:"ams-table",children:e.jsx("table",{...o,className:n("ams-table__table",r),ref:d,children:l})}));h.displayName="Table";const a=Object.assign(h,{Body:i,Caption:T,Cell:p,Footer:_,Header:C,HeaderCell:y,Row:w});try{a.displayName="Table",a.__docgenInfo={description:"",displayName:"Table",props:{}}}catch{}const m={title:"Components/Containers/Table",component:a},t={args:{children:[e.jsx(a.Caption,{children:e.jsx(b,{level:3,children:"Kosten voor de aanvraag"})},"caption"),e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"Type"}),e.jsxs(a.HeaderCell,{children:["Normale levertijd",e.jsx("br",{}),"1 week"]}),e.jsxs(a.HeaderCell,{children:["Spoed",e.jsx("br",{}),"2 werkdagen"]})]})},"header"),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"Paspoort"}),e.jsx(a.Cell,{children:"€ 77,85"}),e.jsx(a.Cell,{children:"€ 130,80"})]}),e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:"ID-kaart"}),e.jsx(a.Cell,{children:"€ 70,35"}),e.jsx(a.Cell,{children:"€ 123,30"})]})]},"body")]}},c={args:{children:[e.jsx(a.Caption,{children:e.jsx(b,{level:3,children:"Verwachte kosten per week"})},"caption"),e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"Tijd"}),e.jsx(a.HeaderCell,{children:"Kosten"})]})},"header"),e.jsxs(a.Body,{children:[e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"row",children:"Eerste 6 weken"}),e.jsx(a.Cell,{children:"€ 109,80 per week"})]}),e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"row",children:"Volgende 33 weken"}),e.jsx(a.Cell,{children:"€ 79,80 per week"})]})]},"body"),e.jsx(a.Footer,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"row",children:"Totale verwachte kosten"}),e.jsx(a.Cell,{children:"€ 3.292,20"})]})},"footer")]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Table.Caption key="caption">
        <Heading level={3}>Kosten voor de aanvraag</Heading>
      </Table.Caption>, <Table.Header key="header">
        <Table.Row>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>
            Normale levertijd
            <br />1 week
          </Table.HeaderCell>
          <Table.HeaderCell>
            Spoed
            <br />2 werkdagen
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>, <Table.Body key="body">
        <Table.Row>
          <Table.Cell>Paspoort</Table.Cell>
          <Table.Cell>€ 77,85</Table.Cell>
          <Table.Cell>€ 130,80</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>ID-kaart</Table.Cell>
          <Table.Cell>€ 70,35</Table.Cell>
          <Table.Cell>€ 123,30</Table.Cell>
        </Table.Row>
      </Table.Body>]
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Table.Caption key="caption">
        <Heading level={3}>Verwachte kosten per week</Heading>
      </Table.Caption>, <Table.Header key="header">
        <Table.Row>
          <Table.HeaderCell>Tijd</Table.HeaderCell>
          <Table.HeaderCell>Kosten</Table.HeaderCell>
        </Table.Row>
      </Table.Header>, <Table.Body key="body">
        <Table.Row>
          <Table.HeaderCell scope="row">Eerste 6 weken</Table.HeaderCell>
          <Table.Cell>€ 109,80 per week</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell scope="row">Volgende 33 weken</Table.HeaderCell>
          <Table.Cell>€ 79,80 per week</Table.Cell>
        </Table.Row>
      </Table.Body>, <Table.Footer key="footer">
        <Table.Row>
          <Table.HeaderCell scope="row">Totale verwachte kosten</Table.HeaderCell>
          <Table.Cell>€ 3.292,20</Table.Cell>
        </Table.Row>
      </Table.Footer>]
  }
}`,...c.parameters?.docs?.source}}};const j=["Default","WithFooterAndRowHeaders"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithFooterAndRowHeaders:c,__namedExportsOrder:j,default:m},Symbol.toStringTag,{value:"Module"}));export{x as T,c as W};
