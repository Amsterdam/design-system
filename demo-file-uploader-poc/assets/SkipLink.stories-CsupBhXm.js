import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as x,G as o,P as u}from"./index.esm-DRzvx_01.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as v}from"./index-Cs7sjTYM.js";const r=v.forwardRef(({children:i,className:S,...f},y)=>e.jsx("a",{...f,ref:y,className:j("ams-skip-link","ams-visually-hidden",S),children:i}));r.displayName="SkipLink";try{r.displayName="SkipLink",r.__docgenInfo={description:"",displayName:"SkipLink",props:{}}}catch{}const L={title:"Components/Navigation/Skip Link",component:r,args:{children:"Direct naar inhoud",href:"#"},argTypes:{children:{description:"The text to attach the link to.",table:{disable:!1}},href:{description:"The url for the link. References an anchor on the current page."},style:{table:{disable:!0}}},decorators:[i=>e.jsx(x,{children:e.jsx(o,{children:e.jsx(o.Cell,{span:"all",children:e.jsx(i,{})})})})]},t={args:{style:{clip:"initial",clipPath:"initial",height:"initial",overflow:"initial",position:"initial",whiteSpace:"initial",width:"initial"}}},a={decorators:[i=>e.jsxs(e.Fragment,{children:[e.jsx(u,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen."}),e.jsx(i,{})]})]},n={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{size:"small",style:{marginBottom:"2rem"},children:"Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen."}),e.jsx(r,{href:"#",children:"Direct naar inhoud"}),e.jsx(r,{href:"#",children:"Direct naar contactgegevens"})]})};var s,l,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
          Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen.
        </Paragraph>
        <Story />
      </>]
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,k,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <>
      <Paragraph size="small" style={{
      marginBottom: '2rem'
    }}>
        Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen.
      </Paragraph>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...(g=(k=n.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const _=["Default","OnFocus","MultipleLinks"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:t,MultipleLinks:n,OnFocus:a,__namedExportsOrder:_,default:L},Symbol.toStringTag,{value:"Module"}));export{n as M,a as O,D as S};
