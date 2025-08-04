import{I as i,S as c,j as d}from"./iframe-CtsmQdSA.js";import{B as p}from"./Button-DMENOeac.js";const u={title:"Components/Buttons/Button",component:p,args:{children:"Versturen",disabled:!1,icon:void 0,iconBefore:!1,iconOnly:void 0,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:i,options:[void 0,...Object.keys(i)]},iconBefore:{control:{type:"boolean"},if:{arg:"icon"}},iconOnly:{control:{type:"boolean"},if:{arg:"icon"}}}},r={},e={args:{children:"Annuleren",variant:"secondary"}},n={args:{children:"Terug",variant:"tertiary"}},o={args:{children:"Sluiten",icon:c}},a={args:{children:"Sluiten",icon:c,iconBefore:!0}},s={args:{children:"Sluiten",icon:c,iconOnly:!0,variant:"tertiary"}},t={args:{children:"Vergunningsaanvraag verzenden"},decorators:[l=>d.jsx("div",{style:{maxWidth:"16rem"},children:d.jsx(l,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconBefore: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconOnly: true,
    variant: 'tertiary'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};const m=["Primary","Secondary","Tertiary","WithIcon","WithIconBefore","WithIconOnly","TextWrapping"],S=Object.freeze(Object.defineProperty({__proto__:null,Primary:r,Secondary:e,Tertiary:n,TextWrapping:t,WithIcon:o,WithIconBefore:a,WithIconOnly:s,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{S as B,r as P,e as S,n as T,o as W,a,s as b,t as c};
