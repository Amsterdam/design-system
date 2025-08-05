import{r as s,j as e,c as n}from"./iframe-C6h7txgd.js";const b=s.forwardRef(({children:a,className:r,...o},d)=>e.jsx("tbody",{...o,className:n("ams-table__body",r),ref:d,children:a}));b.displayName="Table.Body";try{Table.Body.displayName="Table.Body",Table.Body.__docgenInfo={description:"",displayName:"Table.Body",props:{}}}catch{}const i=s.forwardRef(({children:a,className:r,...o},d)=>e.jsx("caption",{...o,className:n("ams-table__caption",r),ref:d,children:a}));i.displayName="Table.Caption";try{Table.Caption.displayName="Table.Caption",Table.Caption.__docgenInfo={description:"",displayName:"Table.Caption",props:{}}}catch{}const T=s.forwardRef(({children:a,className:r,...o},d)=>e.jsx("td",{...o,className:n("ams-table__cell",r),ref:d,children:a}));T.displayName="Table.Cell";try{Table.Cell.displayName="Table.Cell",Table.Cell.__docgenInfo={description:"",displayName:"Table.Cell",props:{}}}catch{}const p=s.forwardRef(({children:a,className:r,...o},d)=>e.jsx("tfoot",{...o,className:n("ams-table__footer",r),ref:d,children:a}));p.displayName="Table.Footer";try{Table.Footer.displayName="Table.Footer",Table.Footer.__docgenInfo={description:"",displayName:"Table.Footer",props:{}}}catch{}const _=s.forwardRef(({children:a,className:r,...o},d)=>e.jsx("thead",{...o,className:n("ams-table__header",r),ref:d,children:a}));_.displayName="Table.Header";try{Table.Header.displayName="Table.Header",Table.Header.__docgenInfo={description:"",displayName:"Table.Header",props:{}}}catch{}const C=s.forwardRef(({children:a,className:r,...o},d)=>e.jsx("th",{...o,className:n("ams-table__header-cell",r),ref:d,children:a}));C.displayName="Table.HeaderCell";try{Table.HeaderCell.displayName="Table.HeaderCell",Table.HeaderCell.__docgenInfo={description:"",displayName:"Table.HeaderCell",props:{}}}catch{}const y=s.forwardRef(({children:a,className:r,...o},d)=>e.jsx("tr",{...o,className:n("ams-table__row",r),ref:d,children:a}));y.displayName="Table.Row";try{Table.Row.displayName="Table.Row",Table.Row.__docgenInfo={description:"",displayName:"Table.Row",props:{}}}catch{}const m=s.forwardRef(({children:a,className:r,...o},d)=>e.jsx("div",{className:"ams-table",children:e.jsx("table",{...o,className:n("ams-table__table",r),ref:d,children:a})}));m.displayName="Table";const l=Object.assign(m,{Body:b,Caption:i,Cell:T,Footer:p,Header:_,HeaderCell:C,Row:y});try{l.displayName="Table",l.__docgenInfo={description:"",displayName:"Table",props:{}}}catch{}const w={title:"Components/Containers/Table",component:l},t={args:{children:[e.jsx(l.Caption,{children:"Kosten en levertijd"},"caption"),e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Type"}),e.jsxs(l.HeaderCell,{children:["Normale levertijd",e.jsx("br",{}),"1 week"]}),e.jsxs(l.HeaderCell,{children:["Spoed",e.jsx("br",{}),"2 werkdagen"]})]})},"header"),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Paspoort"}),e.jsx(l.Cell,{children:"€ 77,85"}),e.jsx(l.Cell,{children:"€ 130,80"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"ID-kaart"}),e.jsx(l.Cell,{children:"€ 70,35"}),e.jsx(l.Cell,{children:"€ 123,30"})]})]},"body")]}},c={args:{children:[e.jsx(l.Caption,{children:"Kosten en tijd"},"caption"),e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Tijd"}),e.jsx(l.HeaderCell,{children:"Kosten"})]})},"header"),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"row",children:"Eerste 6 weken"}),e.jsx(l.Cell,{children:"€ 109,80 per week"})]}),e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"row",children:"Volgende 33 weken"}),e.jsx(l.Cell,{children:"€ 79,80 per week"})]})]},"body"),e.jsx(l.Footer,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"row",children:"Totale verwachte kosten"}),e.jsx(l.Cell,{children:"€ 3.292,20"})]})},"footer")]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Table.Caption key="caption">Kosten en levertijd</Table.Caption>, <Table.Header key="header">
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
    children: [<Table.Caption key="caption">Kosten en tijd</Table.Caption>, <Table.Header key="header">
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
}`,...c.parameters?.docs?.source}}};const h=["Default","WithFooterAndRowHeaders"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithFooterAndRowHeaders:c,__namedExportsOrder:h,default:w},Symbol.toStringTag,{value:"Module"}));export{x as T,c as W};
