import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./iframe-Bhwmx-7c.js";import{B as o,nt as s}from"./index.esm-BxYHo5fw.js";import{f as c,m as l,r as u,u as d}from"./argTypes-Diu0Wtb4.js";var f,p,m;function h(){return(h=e((()=>{a(),f=n(),p=r(),m=(0,f.forwardRef)(({children:e,className:t,linkComponent:n,...r},a)=>(0,p.jsx)(n||`a`,{...r,className:i(`ams-skip-link`,`ams-visually-hidden`,t),...(!n||n===`a`)&&{ref:a},children:e})),m.displayName=`SkipLink`;try{m.displayName=`SkipLink`,m.__docgenInfo={description:`Allows skipping past recurring navigation blocks at the top of a page.`,displayName:`SkipLink`,filePath:`/home/runner/work/design-system/design-system/packages/react/src/SkipLink/SkipLink.tsx`,methods:[],props:{linkComponent:{defaultValue:null,declarations:[{fileName:`design-system/packages/react/src/SkipLink/SkipLink.tsx`,name:`TypeLiteral`}],description:'The React component or intrinsic element to use for the link.\nRefs are forwarded only to a plain anchor (the default, or `linkComponent="a"`), not to any other `linkComponent`.',name:`linkComponent`,required:!1,tags:{},type:{name:`ElementType`}}},tags:{see:`{@link https://designsystem.amsterdam/?path=/docs/components-navigation-skip-link--docs Skip Link docs at Amsterdam Design System}`}}}catch{}})))()}var g=t({Default:()=>y,MultipleLinks:()=>x,OnFocus:()=>b,__namedExportsOrder:()=>S,default:()=>v}),_,v,y,b,x,S;function C(){return(C=e((()=>{s(),h(),c(),_=r(),v={title:`Components/Navigation/Skip Link`,component:m,args:{children:`Direct naar inhoud`,href:`#`},argTypes:{children:u(`The text to attach the link to.`),href:{description:`${d.description} References an anchor on the current page.`},linkComponent:l}},y={args:{style:{clip:`initial`,clipPath:`initial`,height:`initial`,overflow:`initial`,position:`initial`,whiteSpace:`initial`,width:`initial`}}},b={decorators:[e=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{style:{marginBottom:`2rem`},children:`(Click this text, then press the ‘Tab’ key to make the Skip Link appear.)`}),(0,_.jsx)(e,{})]})]},x={render:e=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{style:{marginBottom:`2rem`},children:`(Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)`}),(0,_.jsx)(m,{...e}),(0,_.jsx)(m,{href:`#`,children:`Direct naar contactgegevens`})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph style={{
      marginBottom: '2rem'
    }}>
          (Click this text, then press the ‘Tab’ key to make the Skip Link appear.)
        </Paragraph>
        <Story />
      </>]
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Paragraph style={{
      marginBottom: '2rem'
    }}>
        (Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)
      </Paragraph>
      <SkipLink {...args} />
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`OnFocus`,`MultipleLinks`]})))()}export{v as a,C as i,b as n,m as o,g as r,h as s,x as t};