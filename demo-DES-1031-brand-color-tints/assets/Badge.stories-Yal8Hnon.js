import{j as o}from"./jsx-runtime-j_jdvEMj.js";import{B as p,b as d}from"./Badge-BqIEhSKf.js";import{C as i}from"./Column-CoyJZPZM.js";const g={title:"Components/Feedback/Badge",component:p,args:{label:"Tip"}},r={},u=e=>({"dark-green":"green",green:"lime","light-blue":"azure"})[e]??e,a={args:{label:"Badge label"},render:()=>o.jsx(i,{alignHorizontal:"start",children:d.filter(e=>!e.startsWith("grey-")).map(e=>o.jsx(p,{color:e,label:u(e)},e))})};var t,l,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var n,m,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Badge label'
  },
  render: () => <Column alignHorizontal="start">
      {badgeColors.filter(color => !color.startsWith('grey-')).map(color => <Badge key={color} color={color} label={updateColorName(color)} />)}
    </Column>
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const b=["Default","AllColours"],x=Object.freeze(Object.defineProperty({__proto__:null,AllColours:a,Default:r,__namedExportsOrder:b,default:g},Symbol.toStringTag,{value:"Module"}));export{a as A,x as B};
