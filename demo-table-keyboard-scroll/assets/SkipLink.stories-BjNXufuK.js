import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{P as r,X as i}from"./index.esm-BS9GLyEO.js";import{D as a,t as o}from"./src-DIb7VsY9.js";import{d as s,l as c,p as l,r as u}from"./argTypes-CQXDxDHP.js";var d=t({Default:()=>m,MultipleLinks:()=>g,OnFocus:()=>h,__namedExportsOrder:()=>_,default:()=>p}),f,p,m,h,g,_,v=e((()=>{i(),o(),s(),f=n(),p={title:`Components/Navigation/Skip Link`,component:a,args:{children:`Direct naar inhoud`,href:`#`},argTypes:{children:u(`The text to attach the link to.`),href:{description:`${c.description} References an anchor on the current page.`},linkComponent:l}},m={args:{style:{clip:`initial`,clipPath:`initial`,height:`initial`,overflow:`initial`,position:`initial`,whiteSpace:`initial`,width:`initial`}}},h={decorators:[e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{style:{marginBottom:`2rem`},children:`(Click this text, then press the ‘Tab’ key to make the Skip Link appear.)`}),(0,f.jsx)(e,{})]})]},g={render:e=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{style:{marginBottom:`2rem`},children:`(Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)`}),(0,f.jsx)(a,{...e}),(0,f.jsx)(a,{href:`#`,children:`Direct naar contactgegevens`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <>
        <Paragraph style={{
      marginBottom: '2rem'
    }}>
          (Click this text, then press the ‘Tab’ key to make the Skip Link appear.)
        </Paragraph>
        <Story />
      </>]
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Paragraph style={{
      marginBottom: '2rem'
    }}>
        (Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)
      </Paragraph>
      <SkipLink {...args} />
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`OnFocus`,`MultipleLinks`]}));v();export{m as Default,g as MultipleLinks,h as OnFocus,_ as __namedExportsOrder,p as default,v as n,d as t};