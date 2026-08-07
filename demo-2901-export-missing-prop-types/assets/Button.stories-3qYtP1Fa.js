import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{G as r,u as i}from"./index.esm-BKoBEYTi.js";import{$ as a,n as o}from"./index.esm-DeAOgt4Z.js";import{n as s,r as c,t as l}from"./Button-CG_9YZkk.js";import{n as u,t as d}from"./decorators-BmJPdAHM.js";import{d as f,s as p}from"./argTypes-CTYEle7b.js";import{n as m,t as h}from"./iconArgTypes-CoU157b8.js";var g=t({Disabled:()=>S,Primary:()=>y,Secondary:()=>b,Tertiary:()=>x,TextWrapping:()=>E,WithIcon:()=>C,WithIconBefore:()=>w,WithIconOnly:()=>T,__namedExportsOrder:()=>D,default:()=>v}),_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{a(),r(),c(),f(),d(),m(),_=n(),v={title:`Components/Buttons/Button`,component:l,args:{children:`Versturen`,disabled:!1,iconBefore:!1},argTypes:{disabled:p,icon:h(),iconBefore:{control:{type:`boolean`},if:{arg:`icon`}},iconOnly:{control:{type:`boolean`},if:{arg:`icon`}},variant:{control:{labels:{undefined:`primary (default)`},type:`radio`},options:[void 0,...s.filter(e=>e!==`primary`)]}}},y={},b={args:{children:`Annuleren`,variant:`secondary`}},x={args:{children:`Terug`,variant:`tertiary`}},S={args:{disabled:!0},argTypes:{children:{table:{disable:!0}},icon:{table:{disable:!0}},iconBefore:{table:{disable:!0}},iconOnly:{table:{disable:!0}},variant:{table:{disable:!0}}},render:({disabled:e})=>(0,_.jsxs)(o,{children:[(0,_.jsx)(l,{disabled:e,children:`Versturen`}),(0,_.jsx)(l,{disabled:e,variant:`secondary`,children:`Annuleren`}),(0,_.jsx)(l,{disabled:e,variant:`tertiary`,children:`Terug`})]})},C={args:{children:`Sluiten`,icon:(0,_.jsx)(i,{})}},w={args:{children:`Sluiten`,icon:(0,_.jsx)(i,{}),iconBefore:!0}},T={args:{children:`Sluiten`,icon:(0,_.jsx)(i,{}),iconOnly:!0,variant:`tertiary`}},E={args:{children:`Vergunningsaanvraag verzenden`},decorators:[u(`16rem`)]},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconBefore: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconOnly: true,
    variant: 'tertiary'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [maximiseInlineSize('16rem')]
}`,...E.parameters?.docs?.source}}},D=[`Primary`,`Secondary`,`Tertiary`,`Disabled`,`WithIcon`,`WithIconBefore`,`WithIconOnly`,`TextWrapping`]})))()}export{x as a,w as c,v as d,b as i,T as l,S as n,E as o,y as r,C as s,g as t,O as u};