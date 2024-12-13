import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{c as s}from"./clsx-B-dksMZM.js";import{r as n}from"./index-RigO-4kf.js";const y=n.forwardRef(({children:a,className:r,...o},d)=>e.jsx("tbody",{...o,ref:d,className:s("ams-table__body",r),children:a}));y.displayName="Table.Body";try{Table.Body.displayName="Table.Body",Table.Body.__docgenInfo={description:"",displayName:"Table.Body",props:{}}}catch{}const m=n.forwardRef(({children:a,className:r,...o},d)=>e.jsx("caption",{...o,ref:d,className:s("ams-table__caption",r),children:a}));m.displayName="Table.Caption";try{Table.Caption.displayName="Table.Caption",Table.Caption.__docgenInfo={description:"",displayName:"Table.Caption",props:{}}}catch{}const w=n.forwardRef(({children:a,className:r,...o},d)=>e.jsx("td",{...o,ref:d,className:s("ams-table__cell",r),children:a}));w.displayName="Table.Cell";try{Table.Cell.displayName="Table.Cell",Table.Cell.__docgenInfo={description:"",displayName:"Table.Cell",props:{}}}catch{}const h=n.forwardRef(({children:a,className:r,...o},d)=>e.jsx("tfoot",{...o,ref:d,className:s("ams-table__footer",r),children:a}));h.displayName="Table.Footer";try{Table.Footer.displayName="Table.Footer",Table.Footer.__docgenInfo={description:"",displayName:"Table.Footer",props:{}}}catch{}const j=n.forwardRef(({children:a,className:r,...o},d)=>e.jsx("thead",{...o,ref:d,className:s("ams-table__header",r),children:a}));j.displayName="Table.Header";try{Table.Header.displayName="Table.Header",Table.Header.__docgenInfo={description:"",displayName:"Table.Header",props:{}}}catch{}const x=n.forwardRef(({children:a,className:r,...o},d)=>e.jsx("th",{...o,ref:d,className:s("ams-table__header-cell",r),children:a}));x.displayName="Table.HeaderCell";try{Table.HeaderCell.displayName="Table.HeaderCell",Table.HeaderCell.__docgenInfo={description:"",displayName:"Table.HeaderCell",props:{}}}catch{}const H=n.forwardRef(({children:a,className:r,...o},d)=>e.jsx("tr",{...o,ref:d,className:s("ams-table__row",r),children:a}));H.displayName="Table.Row";try{Table.Row.displayName="Table.Row",Table.Row.__docgenInfo={description:"",displayName:"Table.Row",props:{}}}catch{}const R=n.forwardRef(({children:a,className:r,...o},d)=>e.jsx("div",{className:"ams-table",children:e.jsx("table",{...o,ref:d,className:s("ams-table__table",r),children:a})}));R.displayName="Table";const l=Object.assign(R,{Body:y,Caption:m,Cell:w,Footer:h,Header:j,HeaderCell:x,Row:H});try{l.displayName="Table",l.__docgenInfo={description:"",displayName:"Table",props:{}}}catch{}const f={title:"Components/Containers/Table",component:l},t={args:{children:[e.jsx(l.Caption,{children:"Kosten en levertijd"},"caption"),e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Type"}),e.jsxs(l.HeaderCell,{children:["Normale levertijd",e.jsx("br",{}),"1 week"]}),e.jsxs(l.HeaderCell,{children:["Spoed",e.jsx("br",{}),"2 werkdagen"]})]})},"header"),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Paspoort"}),e.jsx(l.Cell,{children:"€ 77,85"}),e.jsx(l.Cell,{children:"€ 130,80"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"ID-kaart"}),e.jsx(l.Cell,{children:"€ 70,35"}),e.jsx(l.Cell,{children:"€ 123,30"})]})]},"body")]}},c={args:{children:[e.jsx(l.Caption,{children:"Kosten en tijd"},"caption"),e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Tijd"}),e.jsx(l.HeaderCell,{children:"Kosten"})]})},"header"),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"row",children:"Eerste 6 weken"}),e.jsx(l.Cell,{children:"€ 109,80 per week"})]}),e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"row",children:"Volgende 33 weken"}),e.jsx(l.Cell,{children:"€ 79,80 per week"})]})]},"body"),e.jsx(l.Footer,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"row",children:"Totale verwachte kosten"}),e.jsx(l.Cell,{children:"€ 3.292,20"})]})},"footer")]}};var b,i,T;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(i=t.parameters)==null?void 0:i.docs)==null?void 0:T.source}}};var p,_,C;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(C=(_=c.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const N=["Default","WithFooterAndRowHeaders"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithFooterAndRowHeaders:c,__namedExportsOrder:N,default:f},Symbol.toStringTag,{value:"Module"}));export{B as T,c as W};
