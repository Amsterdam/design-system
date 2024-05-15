import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as i}from"./clsx-B-dksMZM.js";import{r as u}from"./index-BwDkhjyp.js";const l=u.forwardRef(({children:a,className:t,href:c,...s},p)=>e.jsx("li",{...s,className:i("ams-breadcrumb__item",t),ref:p,children:e.jsx("a",{className:"ams-breadcrumb__link",href:c,children:a})}));l.displayName="Breadcrumb.Item";try{Breadcrumb.Item.displayName="Breadcrumb.Item",Breadcrumb.Item.__docgenInfo={description:"",displayName:"Breadcrumb.Item",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}}}catch{}const b=u.forwardRef(({children:a,className:t,...c},s)=>e.jsx("nav",{...c,className:i("ams-breadcrumb",t),ref:s,children:e.jsx("ol",{className:"ams-breadcrumb__list",children:a})}));b.displayName="Breadcrumb";const r=Object.assign(b,{Item:l});try{r.displayName="Breadcrumb",r.__docgenInfo={description:"",displayName:"Breadcrumb",props:{}}}catch{}const _={title:"Components/Navigation/Breadcrumb",component:r},m={args:{children:[e.jsx(r.Item,{href:"#",children:"Home"},1),e.jsx(r.Item,{href:"#",children:"Nieuws"},2),e.jsx(r.Item,{href:"#",children:"Kennisgevingen en bekendmakingen"},3)]}};var n,d,o;m.parameters={...m.parameters,docs:{...(n=m.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: [<Breadcrumb.Item href="#" key={1}>
        Home
      </Breadcrumb.Item>, <Breadcrumb.Item href="#" key={2}>
        Nieuws
      </Breadcrumb.Item>, <Breadcrumb.Item href="#" key={3}>
        Kennisgevingen en bekendmakingen
      </Breadcrumb.Item>]
  }
}`,...(o=(d=m.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const f=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:m,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{h as B};
