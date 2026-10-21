import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./iframe-zXHN59a3.js";import{K as o,m as s}from"./index.esm-AVY4e8gu.js";import{Y as c,c as l,nt as u}from"./index.esm-ZzwqG0LW.js";var d,f,p,m;function h(){return(h=e((()=>{a(),d=n(),f=r(),p=[`none`,`x-small`,`small`,`large`,`x-large`],m=(0,d.forwardRef)(({children:e,className:t,gap:n,...r},a)=>(0,f.jsx)(`div`,{...r,className:i(`ams-action-group`,n&&`ams-action-group--gap-${n}`,t),ref:a,role:`group`,children:e})),m.displayName=`ActionGroup`;try{m.displayName=`ActionGroup`,m.__docgenInfo={description:`Groups one or more related actions and manages their layout.`,displayName:`ActionGroup`,filePath:`/home/runner/work/design-system/design-system/packages/react/src/ActionGroup/ActionGroup.tsx`,methods:[],props:{gap:{defaultValue:{value:`medium`},declarations:[{fileName:`design-system/packages/react/src/ActionGroup/ActionGroup.tsx`,name:`TypeLiteral`}],description:`The amount of space between actions and between wrapped rows.`,name:`gap`,required:!1,tags:{default:`medium`},type:{name:`enum`,raw:`"small" | "large" | "none" | "x-small" | "x-large"`,value:[{value:`"small"`},{value:`"large"`},{value:`"none"`},{value:`"x-small"`},{value:`"x-large"`}]}}},tags:{see:`{@link https://designsystem.amsterdam/?path=/docs/components-layout-action-group--docs Action Group docs at Amsterdam Design System}`}}}catch{}})))()}var g=t({Default:()=>y,Stacked:()=>b,StackedWithSmallGap:()=>x,WithLink:()=>S,__namedExportsOrder:()=>C,default:()=>v}),_,v,y,b,x,S,C;function w(){return(w=e((()=>{u(),o(),h(),_=r(),v={title:`Components/Layout/Action Group`,component:m,args:{children:[(0,_.jsx)(l,{children:`Doorgaan`},1),(0,_.jsx)(l,{variant:`secondary`,children:`Stoppen`},2)]},argTypes:{gap:{control:{labels:{undefined:`medium (default)`},type:`select`},options:[void 0,...p]}}},y={},b={args:{children:[(0,_.jsx)(l,{children:`Adres wijzigen`},1),(0,_.jsx)(l,{variant:`secondary`,children:`Adres verwijderen`},2)],className:`_ams-resize-horizontal`,style:{inlineSize:`16rem`}}},x={args:{...b.args,gap:`small`}},S={args:{children:[(0,_.jsx)(l,{children:`Bewerken`},1),(0,_.jsx)(c,{download:!0,href:`#`,icon:(0,_.jsx)(s,{}),children:`Downloaden`},2)]}},C=[`Default`,`Stacked`,`StackedWithSmallGap`,`WithLink`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Button key={1}>Adres wijzigen</Button>, <Button key={2} variant="secondary">
        Adres verwijderen
      </Button>],
    className: '_ams-resize-horizontal',
    style: {
      inlineSize: '16rem'
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Stacked.args,
    gap: 'small'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Button key={1}>Bewerken</Button>, <StandaloneLink download href="#" icon={<DownloadIcon />} key={2}>
        Downloaden
      </StandaloneLink>]
  }
}`,...S.parameters?.docs?.source}}}})))()}export{w as a,h as c,S as i,b as n,v as o,x as r,m as s,g as t};