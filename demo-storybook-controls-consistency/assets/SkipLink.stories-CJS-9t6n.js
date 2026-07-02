import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{J as r,P as i}from"./index.esm-Biy4Zre3.js";import{E as a,t as o}from"./src-CCmgLtBV.js";import{d as s,l as c,o as l}from"./argTypes-J67b33k4.js";var u=e({Default:()=>p,MultipleLinks:()=>h,OnFocus:()=>m,__namedExportsOrder:()=>g,default:()=>f}),d,f,p,m,h,g,_=t((()=>{r(),o(),c(),d=n(),f={title:`Components/Navigation/Skip Link`,component:a,args:{children:`Direct naar inhoud`,href:`#`},argTypes:{children:{description:`The text to attach the link to.`,table:{disable:!1}},href:{description:`${l.description} References an anchor on the current page.`},linkComponent:s}},p={args:{style:{clip:`initial`,clipPath:`initial`,height:`initial`,overflow:`initial`,position:`initial`,whiteSpace:`initial`,width:`initial`}}},m={decorators:[e=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{style:{marginBottom:`2rem`},children:`(Click this text, then press the ‘Tab’ key to make the Skip Link appear.)`}),(0,d.jsx)(e,{})]})]},h={render:e=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{style:{marginBottom:`2rem`},children:`(Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)`}),(0,d.jsx)(a,{...e}),(0,d.jsx)(a,{href:`#`,children:`Direct naar contactgegevens`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph style={{
      marginBottom: '2rem'
    }}>
          (Click this text, then press the ‘Tab’ key to make the Skip Link appear.)
        </Paragraph>
        <Story />
      </>]
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Paragraph style={{
      marginBottom: '2rem'
    }}>
        (Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)
      </Paragraph>
      <SkipLink {...args} />
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`OnFocus`,`MultipleLinks`]}));_();export{p as Default,h as MultipleLinks,m as OnFocus,g as __namedExportsOrder,f as default,_ as n,u as t};