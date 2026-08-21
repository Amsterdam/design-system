import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{nt as r,p as i}from"./index.esm-CkZwhtHS.js";import{a,c as o,d as s,f as c,h as l,i as u,l as d,m as f,n as p,o as m,p as h,r as g,s as _,t as v,u as y}from"./FormFieldStatus-CIDsyae3.js";var b=t({Default:()=>C,OverLimit:()=>w,StatusText:()=>T,Translated:()=>E,__namedExportsOrder:()=>D,default:()=>S}),x,S,C,w,T,E,D;function O(){return(O=e((()=>{r(),l(),p(),x=n(),S={title:`Components/Forms/Form Field Status`,component:v,subcomponents:{"FormFieldStatus.CharacterCount":v.CharacterCount}},C={args:{length:7,maxLength:10},argTypes:{length:{control:{min:0,type:`number`},description:`The current length of the field’s value in this example.`},maxLength:{control:{min:0,type:`number`},description:`The maximum length of the field’s value in this example.`}},render:({length:e,maxLength:t,...n})=>(0,x.jsx)(v,{...n,children:(0,x.jsx)(v.CharacterCount,{length:e,maxLength:t})})},w={...C,args:{length:1005,maxLength:1e3}},T={render:e=>(0,x.jsx)(v,{...e,children:`Je wachtwoord is sterk genoeg.`})},E={render:e=>(0,x.jsxs)(i,{children:[(0,x.jsx)(v,{...e,dir:`rtl`,lang:`ar`,children:(0,x.jsx)(v.CharacterCount,{formatOverLimitText:g,formatText:d,length:15,maxLength:10})}),(0,x.jsx)(v,{...e,lang:`de`,children:(0,x.jsx)(v.CharacterCount,{formatOverLimitText:u,formatText:y,length:15,maxLength:10})}),(0,x.jsx)(v,{...e,lang:`en`,children:(0,x.jsx)(v.CharacterCount,{formatOverLimitText:a,formatText:s,length:15,maxLength:10})}),(0,x.jsx)(v,{...e,lang:`fr`,children:(0,x.jsx)(v.CharacterCount,{formatOverLimitText:m,formatText:c,length:15,maxLength:10})}),(0,x.jsx)(v,{...e,lang:`nl`,children:(0,x.jsx)(v.CharacterCount,{formatOverLimitText:_,formatText:h,length:15,maxLength:10})}),(0,x.jsx)(v,{...e,lang:`tr`,children:(0,x.jsx)(v.CharacterCount,{formatOverLimitText:o,formatText:f,length:15,maxLength:10})})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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