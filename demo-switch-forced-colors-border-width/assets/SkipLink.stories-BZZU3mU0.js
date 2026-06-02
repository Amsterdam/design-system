import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ht as n,I as r,X as i}from"./iframe-CrPmi0Hp.js";import{h as a,t as o}from"./src-C31muBgl.js";var s=t({Default:()=>u,MultipleLinks:()=>f,OnFocus:()=>d,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p,m=e((()=>{i(),o(),c=n(),l={title:`Components/Navigation/Skip Link`,component:a,args:{children:`Direct naar inhoud`,href:`#`},argTypes:{children:{description:`The text to attach the link to.`,table:{disable:!1}},href:{description:`The url for the link. References an anchor on the current page.`}}},u={args:{style:{clip:`initial`,clipPath:`initial`,height:`initial`,overflow:`initial`,position:`initial`,whiteSpace:`initial`,width:`initial`}}},d={decorators:[e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{style:{marginBottom:`2rem`},children:`(Click this text, then press the ‘Tab’ key to make the Skip Link appear.)`}),(0,c.jsx)(e,{})]})]},f={render:e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{style:{marginBottom:`2rem`},children:`(Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)`}),(0,c.jsx)(a,{...e}),(0,c.jsx)(a,{href:`#`,children:`Direct naar contactgegevens`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph style={{
      marginBottom: '2rem'
    }}>
          (Click this text, then press the ‘Tab’ key to make the Skip Link appear.)
        </Paragraph>
        <Story />
      </>]
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Paragraph style={{
      marginBottom: '2rem'
    }}>
        (Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)
      </Paragraph>
      <SkipLink {...args} />
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`OnFocus`,`MultipleLinks`]}));m();export{u as Default,f as MultipleLinks,d as OnFocus,p as __namedExportsOrder,l as default,m as n,s as t};