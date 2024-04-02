import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as x}from"./clsx-B-dksMZM.js";import{r as j}from"./index-CBqU2yxZ.js";import{S as v}from"./Screen-CBGDXr7L.js";import{G as o}from"./Grid-Cb2xqfsw.js";import{P as u}from"./Paragraph-Im3SnT_h.js";const r=j.forwardRef(({children:i,className:S,...f},y)=>e.jsx("a",{...f,ref:y,className:x("ams-skip-link","ams-visually-hidden",S),children:i}));r.displayName="SkipLink";try{r.displayName="SkipLink",r.__docgenInfo={description:"",displayName:"SkipLink",props:{}}}catch{}const L={title:"Components/Navigation/Skip Link",component:r,args:{children:"Direct naar inhoud",href:"#"},argTypes:{children:{table:{disable:!1}},style:{table:{disable:!0}}},decorators:[i=>e.jsx(v,{children:e.jsx(o,{children:e.jsx(o.Cell,{span:"all",children:e.jsx(i,{})})})})]},n={args:{style:{clip:"initial",clipPath:"initial",height:"initial",overflow:"initial",position:"initial",whiteSpace:"initial",width:"initial"}}},t={decorators:[i=>e.jsxs(e.Fragment,{children:[e.jsx(u,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen."}),e.jsx(i,{})]})]},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen."}),e.jsx(r,{href:"#",children:"Direct naar inhoud"}),e.jsx(r,{href:"#",children:"Direct naar contactgegevens"})]})};var s,l,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    // This resets the default behaviour of only showing the link
    // on focus, in order to always show the link in Storybook
    style: {
      clip: 'initial',
      clipPath: 'initial',
      height: 'initial',
      overflow: 'initial',
      position: 'initial',
      whiteSpace: 'initial',
      width: 'initial'
    }
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
          Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen.
        </Paragraph>
        <Story />
      </>]
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var k,h,g;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
        Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen.
      </Paragraph>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const _=["Default","OnFocus","MultipleLinks"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:n,MultipleLinks:a,OnFocus:t,__namedExportsOrder:_,default:L},Symbol.toStringTag,{value:"Module"}));export{a as M,t as O,N as S};
