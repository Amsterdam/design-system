import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{nt as r,p as i}from"./index.esm-C7j6R1k4.js";import{a,c as o,d as s,f as c,i as l,l as u,n as d,o as f,p,r as m,s as h,t as g,u as _}from"./formatCharacterCountText-tBJxQWBY.js";import{n as v,t as y}from"./FormFieldStatus-bVRzEyfU.js";var b=t({Default:()=>C,OverLimit:()=>w,StatusText:()=>T,Translated:()=>E,__namedExportsOrder:()=>D,default:()=>S}),x,S,C,w,T,E,D;function O(){return(O=e((()=>{r(),p(),v(),x=n(),S={title:`Components/Forms/Form Field Status`,component:y,subcomponents:{"FormFieldStatus.CharacterCount":y.CharacterCount}},C={args:{length:7,maxLength:10},argTypes:{length:{control:{min:0,type:`number`},description:`The current length of the field’s value in this example.`},maxLength:{control:{min:0,type:`number`},description:`The maximum length of the field’s value in this example.`}},render:({length:e,maxLength:t,...n})=>(0,x.jsx)(y,{...n,children:(0,x.jsx)(y.CharacterCount,{length:e,maxLength:t})})},w={...C,args:{length:1005,maxLength:1e3}},T={render:e=>(0,x.jsx)(y,{...e,children:`Je wachtwoord is sterk genoeg.`})},E={render:e=>(0,x.jsxs)(i,{children:[(0,x.jsx)(y,{...e,dir:`rtl`,lang:`ar`,children:(0,x.jsx)(y.CharacterCount,{formatOverLimitText:g,formatText:h,length:15,maxLength:10})}),(0,x.jsx)(y,{...e,lang:`de`,children:(0,x.jsx)(y.CharacterCount,{formatOverLimitText:d,formatText:o,length:15,maxLength:10})}),(0,x.jsx)(y,{...e,lang:`en`,children:(0,x.jsx)(y.CharacterCount,{formatOverLimitText:m,formatText:u,length:15,maxLength:10})}),(0,x.jsx)(y,{...e,lang:`fr`,children:(0,x.jsx)(y.CharacterCount,{formatOverLimitText:l,formatText:_,length:15,maxLength:10})}),(0,x.jsx)(y,{...e,lang:`nl`,children:(0,x.jsx)(y.CharacterCount,{formatOverLimitText:a,formatText:s,length:15,maxLength:10})}),(0,x.jsx)(y,{...e,lang:`tr`,children:(0,x.jsx)(y.CharacterCount,{formatOverLimitText:f,formatText:c,length:15,maxLength:10})})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    length: 7,
    maxLength: 10
  },
  // These args are specific to this composed story, so they have no JSDoc to describe them: the meta
  // provides the props of the container, not those of the parts. Hence the descriptions below.
  argTypes: {
    length: {
      control: {
        min: 0,
        type: 'number'
      },
      description: 'The current length of the field’s value in this example.'
    },
    maxLength: {
      control: {
        min: 0,
        type: 'number'
      },
      description: 'The maximum length of the field’s value in this example.'
    }
  },
  render: ({
    length,
    maxLength,
    ...args
  }) => <FormFieldStatus {...args}>
      <FormFieldStatus.CharacterCount length={length} maxLength={maxLength} />
    </FormFieldStatus>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    length: 1005,
    maxLength: 1000
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <FormFieldStatus {...args}>Je wachtwoord is sterk genoeg.</FormFieldStatus>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <Column>
      <FormFieldStatus {...args} dir="rtl" lang="ar">
        <FormFieldStatus.CharacterCount formatOverLimitText={formatCharacterCountOverLimitTextAr} formatText={formatCharacterCountTextAr} length={15} maxLength={10} />
      </FormFieldStatus>
      <FormFieldStatus {...args} lang="de">
        <FormFieldStatus.CharacterCount formatOverLimitText={formatCharacterCountOverLimitTextDe} formatText={formatCharacterCountTextDe} length={15} maxLength={10} />
      </FormFieldStatus>
      <FormFieldStatus {...args} lang="en">
        <FormFieldStatus.CharacterCount formatOverLimitText={formatCharacterCountOverLimitTextEn} formatText={formatCharacterCountTextEn} length={15} maxLength={10} />
      </FormFieldStatus>
      <FormFieldStatus {...args} lang="fr">
        <FormFieldStatus.CharacterCount formatOverLimitText={formatCharacterCountOverLimitTextFr} formatText={formatCharacterCountTextFr} length={15} maxLength={10} />
      </FormFieldStatus>
      <FormFieldStatus {...args} lang="nl">
        <FormFieldStatus.CharacterCount formatOverLimitText={formatCharacterCountOverLimitTextNl} formatText={formatCharacterCountTextNl} length={15} maxLength={10} />
      </FormFieldStatus>
      <FormFieldStatus {...args} lang="tr">
        <FormFieldStatus.CharacterCount formatOverLimitText={formatCharacterCountOverLimitTextTr} formatText={formatCharacterCountTextTr} length={15} maxLength={10} />
      </FormFieldStatus>
    </Column>
}`,...E.parameters?.docs?.source}}},D=[`Default`,`OverLimit`,`StatusText`,`Translated`]})))()}export{O as a,E as i,w as n,S as o,T as r,b as t};