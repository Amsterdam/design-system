import{a as d,j as c,S as i}from"./iframe-DAp_jyNM.js";import{B as p}from"./Button-nLvRdMh2.js";const u={title:"Components/Buttons/Button",component:p,args:{children:"Versturen",disabled:!1,icon:void 0,iconBefore:!1,iconOnly:void 0,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:d,options:[void 0,...Object.keys(d)]},iconBefore:{control:{type:"boolean"},if:{arg:"icon"}},iconOnly:{control:{type:"boolean"},if:{arg:"icon"}}}},r={},e={args:{children:"Annuleren",variant:"secondary"}},n={args:{children:"Terug",variant:"tertiary"}},a={args:{children:"Sluiten",icon:c.jsx(i,{})}},o={args:{children:"Sluiten",icon:c.jsx(i,{}),iconBefore:!0}},s={args:{children:"Sluiten",icon:c.jsx(i,{}),iconOnly:!0,variant:"tertiary"}},t={args:{children:"Vergunningsaanvraag verzenden"},decorators:[l=>c.jsx("div",{style:{maxWidth:"16rem"},children:c.jsx(l,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconBefore: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
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
}`,...t.parameters?.docs?.source}}};const m=["Primary","Secondary","Tertiary","WithIcon","WithIconBefore","WithIconOnly","TextWrapping"],S=Object.freeze(Object.defineProperty({__proto__:null,Primary:r,Secondary:e,Tertiary:n,TextWrapping:t,WithIcon:a,WithIconBefore:o,WithIconOnly:s,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{S as B,r as P,e as S,n as T,a as W,o as a,s as b,t as c,u as m};
