import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{R as b}from"./index.esm-s8-5TFdX.js";import{v as f}from"./index.esm-BPfhnSlj.js";import{c as l}from"./clsx-B-dksMZM.js";import{r as t}from"./index-uCp2LrAq.js";import{I as _}from"./Icon-j44OzEOs.js";const p=t.forwardRef(({children:a,className:s,...c},i)=>e.jsx("li",{className:"ams-breadcrumb__item",children:e.jsx("a",{...c,className:l("ams-breadcrumb__link",s),ref:i,children:a})}));p.displayName="Breadcrumb.Link";try{Breadcrumb.Link.displayName="Breadcrumb.Link",Breadcrumb.Link.__docgenInfo={description:"",displayName:"Breadcrumb.Link",props:{}}}catch{}const u=t.forwardRef(({children:a,className:s,...c},i)=>e.jsx("nav",{...c,className:l("ams-breadcrumb",s),ref:i,children:e.jsx("ol",{className:"ams-breadcrumb__list",children:a})}));u.displayName="Breadcrumb";const r=Object.assign(u,{Link:p});try{r.displayName="Breadcrumb",r.__docgenInfo={description:"",displayName:"Breadcrumb",props:{}}}catch{}const k={title:"Components/Navigation/Breadcrumb",component:r},n={args:{children:[e.jsx(r.Link,{href:"#",children:e.jsxs(b,{gap:"extra-small",style:{display:"inline-flex",alignItems:"baseline"},children:[e.jsx(_,{svg:f,size:"level-6"}),e.jsx("span",{children:"Home"})]})},1),e.jsx(r.Link,{href:"#",children:"Afval"},2),e.jsx(r.Link,{href:"#",children:"Bedrijfsafval"},3),e.jsx(r.Link,{href:"#",children:"Recyclepunten voor bedrijven"},4)]}};var o,m,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: [<Breadcrumb.Link href="#" key={1}>
        <Row gap="extra-small" style={{
        display: 'inline-flex',
        alignItems: 'baseline'
      }}>
          <Icon svg={NewHouseLineIcon} size="level-6" />
          <span>Home</span>
        </Row>
      </Breadcrumb.Link>, <Breadcrumb.Link href="#" key={2}>
        Afval
      </Breadcrumb.Link>, <Breadcrumb.Link href="#" key={3}>
        Bedrijfsafval
      </Breadcrumb.Link>, <Breadcrumb.Link href="#" key={4}>
        Recyclepunten voor bedrijven
      </Breadcrumb.Link>]
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const B=["Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:B,default:k},Symbol.toStringTag,{value:"Module"}));export{v as B};
