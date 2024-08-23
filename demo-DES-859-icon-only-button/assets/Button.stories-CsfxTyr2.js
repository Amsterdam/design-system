import{j as e}from"./jsx-runtime-BlAj40OV.js";import{k as d}from"./index.esm-Bsc2owIZ.js";import{c as M}from"./clsx-B-dksMZM.js";import{r as U}from"./index-Cs7sjTYM.js";import{I as y}from"./Icon-msbkstIT.js";const l=U.forwardRef(({className:c,type:F,disabled:R,variant:k="primary",label:p,hideLabel:w=!1,iconStart:m,iconEnd:u,...A},C)=>e.jsxs("button",{...A,ref:C,disabled:R,className:M("ams-button",`ams-button--${k}`,c),type:F||"button",children:[m&&e.jsx(y,{svg:m,size:"level-5"}),w?e.jsx("span",{className:"ams-visually-hidden",children:p}):p,u&&e.jsx(y,{svg:u,size:"level-5"})]}));l.displayName="Button";try{l.displayName="Button",l.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hideLabel:{defaultValue:{value:"false"},description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"Function"}},iconEnd:{defaultValue:null,description:"",name:"iconEnd",required:!1,type:{name:"Function"}}}}}catch{}const $={title:"Components/Buttons/Button",component:l,args:{label:"Button label",variant:"primary",disabled:!1},argTypes:{children:{description:"The text for the label and/or an icon.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."}}},r={},a={args:{variant:"secondary"}},n={args:{variant:"tertiary"}},t={args:{iconStart:d}},s={args:{iconEnd:d}},o={args:{variant:"tertiary",hideLabel:!0,iconStart:d}},i={args:{label:"Vergunningsaanvraag verzenden"},decorators:[c=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(c,{})})]};var g,v,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var S,b,h;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,_,I;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(I=(_=n.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var j,B,E;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    iconStart: ShareIcon
  }
}`,...(E=(B=t.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var T,V,O;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    iconEnd: ShareIcon
  }
}`,...(O=(V=s.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var q,z,N;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    hideLabel: true,
    iconStart: ShareIcon
  }
}`,...(N=(z=o.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var P,L,W;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(W=(L=i.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const D=["Primary","Secondary","Tertiary","StartIcon","EndIcon","OnlyIcon","TextWrapping"],X=Object.freeze(Object.defineProperty({__proto__:null,EndIcon:s,OnlyIcon:o,Primary:r,Secondary:a,StartIcon:t,Tertiary:n,TextWrapping:i,__namedExportsOrder:D,default:$},Symbol.toStringTag,{value:"Module"}));export{X as B,s as E,o as O,r as P,a as S,n as T,t as a,i as b};
