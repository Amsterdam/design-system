import{e as er,j as u,f as p,S as g,B as ar,g as sr}from"./index.esm-Oi0OnaUX.js";const nr={title:"Buttons/Button",component:er,args:{children:"Default",disabled:!1,variant:"primary"},argTypes:{children:{table:{disable:!0}},disabled:{control:"boolean"},variant:{control:"select",options:["primary","secondary","tertiary"]}}},r={args:{children:"Primary"}},e={args:{children:["Primary",u.jsx(p,{svg:g,size:"level-5"},"icon")]}},a={args:{children:"Secondary",variant:"secondary"}},s={args:{variant:"secondary",children:["Secondary",u.jsx(p,{svg:g,size:"level-5"},"icon")]}},n={args:{variant:"secondary",children:["Secondary",u.jsx(ar,{label:99,color:"dark-blue"},"badge"),u.jsx(p,{svg:sr,size:"level-5"},"icon")]}},o={args:{children:"Tertiary",variant:"tertiary"}},c={args:{children:["Tertiary",u.jsx(p,{svg:g,size:"level-5"},"icon")],variant:"tertiary"}},t={args:{children:"Primary",disabled:!0}},i={args:{children:"Secondary",disabled:!0,variant:"secondary"}},d={args:{children:"Tertiary",disabled:!0,variant:"tertiary"}},l={args:{children:"Primary",busy:!0}},y={args:{children:"Secondary",busy:!0,variant:"secondary"}},m={args:{children:"Tertiary",busy:!0,variant:"tertiary"}};var S,h,v;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Primary'
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,T,P;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: ['Primary', <Icon key="icon" svg={ShareIcon} size="level-5" />]
  }
}`,...(P=(T=e.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var I,B,j;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...(j=(B=a.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var x,z,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: ['Secondary', <Icon key="icon" svg={ShareIcon} size="level-5" />]
  }
}`,...(f=(z=s.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var W,k,D;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: ['Secondary', <Badge key="badge" label={99} color="dark-blue" />, <Icon key="icon" svg={CloseIcon} size="level-5" />]
  }
}`,...(D=(k=n.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var _,O,A;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary',
    variant: 'tertiary'
  }
}`,...(A=(O=o.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var C,E,M;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: ['Tertiary', <Icon key="icon" svg={ShareIcon} size="level-5" />],
    variant: 'tertiary'
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var R,q,w;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    disabled: true
  }
}`,...(w=(q=t.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var F,G,H;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    disabled: true,
    variant: 'secondary'
  }
}`,...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,L;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary',
    disabled: true,
    variant: 'tertiary'
  }
}`,...(L=(K=d.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,Q,U;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    busy: true
  }
}`,...(U=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    busy: true,
    variant: 'secondary'
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary',
    busy: true,
    variant: 'tertiary'
  }
}`,...(rr=($=m.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};const or=["Primary","PrimaryWithIcon","Secondary","SecondaryWithIcon","SecondaryWithIconAndBadge","Tertiary","TertiaryWithIcon","PrimaryDisabled","SecondaryDisabled","TertiaryDisabled","PrimaryBusy","SecondaryBusy","TertiaryBusy"],tr=Object.freeze(Object.defineProperty({__proto__:null,Primary:r,PrimaryBusy:l,PrimaryDisabled:t,PrimaryWithIcon:e,Secondary:a,SecondaryBusy:y,SecondaryDisabled:i,SecondaryWithIcon:s,SecondaryWithIconAndBadge:n,Tertiary:o,TertiaryBusy:m,TertiaryDisabled:d,TertiaryWithIcon:c,__namedExportsOrder:or,default:nr},Symbol.toStringTag,{value:"Module"}));export{tr as B,r as P,a as S,o as T,e as a,s as b,n as c,c as d,t as e,i as f,d as g,l as h,y as i,m as j};
