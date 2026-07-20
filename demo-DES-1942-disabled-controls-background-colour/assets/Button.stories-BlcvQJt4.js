import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{G as r,u as i}from"./index.esm-AHCPMkhr.js";import{X as a,n as o}from"./index.esm-D9h_18rk.js";import{_n as s,gn as c,hn as l,t as u}from"./src-yzh8TJnN.js";import{d,s as f}from"./argTypes-CQXDxDHP.js";import{n as p,t as m}from"./iconArgTypes-BcBExhD3.js";import{n as h,t as g}from"./decorators-CchQ1biF.js";var _=t({Disabled:()=>C,Primary:()=>b,Secondary:()=>x,Tertiary:()=>S,TextWrapping:()=>D,WithIcon:()=>w,WithIconBefore:()=>T,WithIconOnly:()=>E,__namedExportsOrder:()=>O,default:()=>y}),v,y,b,x,S,C,w,T,E,D,O,k=e((()=>{a(),r(),u(),s(),d(),g(),p(),v=n(),y={title:`Components/Buttons/Button`,component:l,args:{children:`Versturen`,disabled:!1,icon:void 0,iconBefore:!1,iconOnly:void 0,variant:`primary`},argTypes:{disabled:f,icon:m(),iconBefore:{control:{type:`boolean`},if:{arg:`icon`}},iconOnly:{control:{type:`boolean`},if:{arg:`icon`}},variant:{control:{labels:{undefined:`primary (default)`},type:`radio`},options:[void 0,...c.filter(e=>e!==`primary`)]}}},b={},x={args:{children:`Annuleren`,variant:`secondary`}},S={args:{children:`Terug`,variant:`tertiary`}},C={args:{disabled:!0},argTypes:{children:{table:{disable:!0}},icon:{table:{disable:!0}},iconBefore:{table:{disable:!0}},iconOnly:{table:{disable:!0}},variant:{table:{disable:!0}}},render:({disabled:e})=>(0,v.jsxs)(o,{children:[(0,v.jsx)(l,{disabled:e,children:`Versturen`}),(0,v.jsx)(l,{disabled:e,variant:`secondary`,children:`Annuleren`}),(0,v.jsx)(l,{disabled:e,variant:`tertiary`,children:`Terug`})]})},w={args:{children:`Sluiten`,icon:(0,v.jsx)(i,{})}},T={args:{children:`Sluiten`,icon:(0,v.jsx)(i,{}),iconBefore:!0}},E={args:{children:`Sluiten`,icon:(0,v.jsx)(i,{}),iconOnly:!0,variant:`tertiary`}},D={args:{children:`Vergunningsaanvraag verzenden`},decorators:[h(`16rem`)]},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    iconBefore: {
      table: {
        disable: true
      }
    },
    iconOnly: {
      table: {
        disable: true
      }
    },
    variant: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    disabled
  }) => <ActionGroup>
      <Button disabled={disabled}>Versturen</Button>
      <Button disabled={disabled} variant="secondary">
        Annuleren
      </Button>
      <Button disabled={disabled} variant="tertiary">
        Terug
      </Button>
    </ActionGroup>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconBefore: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconOnly: true,
    variant: 'tertiary'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [maximiseInlineSize('16rem')]
}`,...D.parameters?.docs?.source}}},O=[`Primary`,`Secondary`,`Tertiary`,`Disabled`,`WithIcon`,`WithIconBefore`,`WithIconOnly`,`TextWrapping`]}));k();export{C as Disabled,b as Primary,x as Secondary,S as Tertiary,D as TextWrapping,w as WithIcon,T as WithIconBefore,E as WithIconOnly,O as __namedExportsOrder,y as default,k as n,_ as t};