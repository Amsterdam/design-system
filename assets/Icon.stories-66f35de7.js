import{j as e}from"./jsx-runtime-94f6e698.js";import{H as T}from"./heading-c720b89f.js";import{c as W}from"./clsx.m-1229b3e0.js";import{r as q}from"./index-8db94870.js";const d=q.forwardRef(({className:s,size:r="level-3",svg:C,...N},R)=>e.jsx("span",{ref:R,className:W("amsterdam-icon",r==="level-3"&&"amsterdam-icon-size-3",r==="level-4"&&"amsterdam-icon-size-4",r==="level-5"&&"amsterdam-icon-size-5",r==="level-6"&&"amsterdam-icon-size-6",r==="level-7"&&"amsterdam-icon-size-7",s),...N,children:C()}));d.displayName="Icon";try{d.displayName="Icon",d.__docgenInfo={description:"",displayName:"Icon",props:{size:{defaultValue:{value:"level-3"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"level-3"'},{value:'"level-4"'},{value:'"level-5"'},{value:'"level-6"'},{value:'"level-7"'}]}},svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"Function"}}}}}catch{}const A=s=>e.jsxs("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36","aria-hidden":"true",focusable:"false"},s,{children:[e.jsx("path",{d:"M33.63 30.9H2.37L18 3zm-24.44-4h17.62L18 11.19z"}),e.jsx("path",{d:"M17 16.99h2v4.95h-2zm0 5.95h2v1.95h-2z"})]})),D=s=>e.jsx("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32","aria-hidden":"true",focusable:"false"},s,{children:e.jsx("path",{fillRule:"evenodd",d:"M5 0v32h22V0H5zm18 28H9V4h14v24zm-8-17h-4V7h4v4zm0 7h-4v-4h4v4zm6-7h-4V7h4v4zm0 7h-4v-4h4v4zm-6 7h-4v-4h4v4zm6 0h-4v-4h4v4z"})})),k=s=>e.jsx("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32","aria-hidden":"true",focusable:"false"},s,{children:e.jsx("path",{fillRule:"evenodd",d:"M24 5V3H8v2H0v25h32V5h-8zm4 21H4V9h24v17zm-12-2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-11a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm10 0h-2v-2h2v2z"})})),a=s=>e.jsx("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32","aria-hidden":"true",focusable:"false"},s,{children:e.jsx("path",{d:"M0 4v24h32V4H0zm16.12 12.33L6 8h20.06l-9.94 8.33zM11.33 15 4 21.78V8.94L11.33 15zm1.56 1.28 3.24 2.67 3.08-2.58L27.45 24H4.55l8.34-7.72zm7.87-1.2L28 9v12.8l-7.24-6.72z"})}));const p={Email:a,Alert:A,Building:D,Camera:k},F={title:"CSS Components/Icon",component:d,argTypes:{size:{control:{type:"select"}},svg:{options:Object.keys(p),mapping:p}}},o={args:{svg:a},parameters:{docs:{source:{language:"html",code:'<span class="amsterdam-icon amsterdam-icon-size-3">{svg}</span>'}}}},l={render:s=>e.jsxs("span",{style:{display:"flex",gap:"1rem"},children:[e.jsx(d,{...s,size:"level-3"}),e.jsx(T,{styleLevel:3,children:"Inline text"})]}),args:{svg:a},parameters:{docs:{source:{language:"html",code:`<span style="display: flex; gap: 1rem;">
  <span class="amsterdam-icon amsterdam-icon-size-3">
    {svg}
  </span>
  <h1 class="amsterdam-heading amsterdam-heading-3">Inline text</h1>
</span>`}}}},c={args:{svg:a,size:"level-3"},parameters:{docs:{source:{language:"html",code:'<span class="amsterdam-icon amsterdam-icon-size-3">{svg}</span>'}}}},t={args:{svg:a,size:"level-4"},parameters:{docs:{source:{language:"html",code:'<span class="amsterdam-icon amsterdam-icon-size-4">{svg}</span>'}}}},m={args:{svg:a,size:"level-5"},parameters:{docs:{source:{language:"html",code:'<span class="amsterdam-icon amsterdam-icon-size-5">{svg}</span>'}}}},n={args:{svg:a,size:"level-6"},parameters:{docs:{source:{language:"html",code:'<span class="amsterdam-icon amsterdam-icon-size-6">{svg}</span>'}}}},i={args:{svg:a,size:"level-7"},parameters:{docs:{source:{language:"html",code:'<span class="amsterdam-icon amsterdam-icon-size-7">{svg}</span>'}}}};var g,v,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    svg: Email
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<span class="amsterdam-icon amsterdam-icon-size-3">{svg}</span>'
      }
    }
  }
}`,...(u=(v=o.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var h,z,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <span style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Icon {...args} size="level-3" />
      <Heading styleLevel={3}>Inline text</Heading>
    </span>,
  args: {
    svg: Email
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: \`<span style="display: flex; gap: 1rem;">
  <span class="amsterdam-icon amsterdam-icon-size-3">
    {svg}
  </span>
  <h1 class="amsterdam-heading amsterdam-heading-3">Inline text</h1>
</span>\`
      }
    }
  }
}`,...(x=(z=l.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var f,j,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    svg: Email,
    size: 'level-3'
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<span class="amsterdam-icon amsterdam-icon-size-3">{svg}</span>'
      }
    }
  }
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var w,L,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    svg: Email,
    size: 'level-4'
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<span class="amsterdam-icon amsterdam-icon-size-4">{svg}</span>'
      }
    }
  }
}`,...(S=(L=t.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var _,b,I;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    svg: Email,
    size: 'level-5'
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<span class="amsterdam-icon amsterdam-icon-size-5">{svg}</span>'
      }
    }
  }
}`,...(I=(b=m.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var E,H,V;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    svg: Email,
    size: 'level-6'
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<span class="amsterdam-icon amsterdam-icon-size-6">{svg}</span>'
      }
    }
  }
}`,...(V=(H=n.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var O,M,B;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    svg: Email,
    size: 'level-7'
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<span class="amsterdam-icon amsterdam-icon-size-7">{svg}</span>'
      }
    }
  }
}`,...(B=(M=i.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const P=["Default","WithText","Level3","Level4","Level5","Level6","Level7"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Level3:c,Level4:t,Level5:m,Level6:n,Level7:i,WithText:l,__namedExportsOrder:P,default:F},Symbol.toStringTag,{value:"Module"}));export{U as I,c as L,l as W,t as a,m as b,n as c,i as d};
//# sourceMappingURL=Icon.stories-66f35de7.js.map
