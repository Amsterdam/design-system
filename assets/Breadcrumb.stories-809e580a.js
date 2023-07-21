import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as o}from"./index-76fb7be0.js";const r=o.forwardRef(({children:a,...s},c)=>e.jsx("nav",{...s,className:"amsterdam-breadcrumb",ref:c,children:e.jsx("ol",{className:"amsterdam-breadcrumb__list",children:a})}));r.displayName="Breadcrumb";const n=o.forwardRef(({children:a,href:s,...c},u)=>e.jsx("li",{...c,className:"amsterdam-breadcrumb-item",ref:u,children:e.jsx("a",{className:"amsterdam-breadcrumb-item__link",href:s,children:a})}));n.displayName="BreadcrumbItem";r.Item=n;try{r.displayName="Breadcrumb",r.__docgenInfo={description:"",displayName:"Breadcrumb",props:{}}}catch{}const b={title:"CSS Components/Breadcrumb",component:r},m={render:a=>e.jsxs(r,{...a,children:[e.jsx(r.Item,{href:"/some-url.com",children:"home"}),e.jsx(r.Item,{href:"/some-url.com",children:"path 1"}),e.jsx(r.Item,{href:"/some-url.com",children:"path 2"}),e.jsx(r.Item,{href:"/some-url.com",children:"path 3"}),e.jsx(r.Item,{href:"/some-url.com",children:"path 5"})]}),parameters:{docs:{source:{language:"html",code:`
<nav class="amsterdam-breadcrumb">
  <ol class="amsterdam-breadcrumb-list">
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">home</a>
    </li>
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">path 1</a>
    </li>
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">path 2</a>
    </li>
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">path 3</a>
    </li>
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">path 5</a>
    </li>
  </ol>
</nav>`}}}};var t,l,d;m.parameters={...m.parameters,docs:{...(t=m.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <Breadcrumb.Item href="/some-url.com">home</Breadcrumb.Item>
      <Breadcrumb.Item href="/some-url.com">path 1</Breadcrumb.Item>
      <Breadcrumb.Item href="/some-url.com">path 2</Breadcrumb.Item>
      <Breadcrumb.Item href="/some-url.com">path 3</Breadcrumb.Item>
      <Breadcrumb.Item href="/some-url.com">path 5</Breadcrumb.Item>
    </Breadcrumb>,
  parameters: {
    docs: {
      source: {
        language: 'html',
        // This is formatting seems to be needed to format a multiline string code block.
        code: \`
<nav class="amsterdam-breadcrumb">
  <ol class="amsterdam-breadcrumb-list">
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">home</a>
    </li>
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">path 1</a>
    </li>
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">path 2</a>
    </li>
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">path 3</a>
    </li>
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">path 5</a>
    </li>
  </ol>
</nav>\`
      }
    }
  }
}`,...(d=(l=m.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const i=["BreadcrumbStory"],f=Object.freeze(Object.defineProperty({__proto__:null,BreadcrumbStory:m,__namedExportsOrder:i,default:b},Symbol.toStringTag,{value:"Module"}));export{f as B};
//# sourceMappingURL=Breadcrumb.stories-809e580a.js.map
