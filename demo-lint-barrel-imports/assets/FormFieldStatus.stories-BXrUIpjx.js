import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{$ as i,B as a,O as o,_ as s,nt as c,p as l}from"./index.esm-tDTmlgi6.js";import{a as u,c as d,d as f,f as p,i as m,l as h,n as g,o as _,p as v,r as y,s as b,t as x,u as S}from"./formatCharacterCountText-tBJxQWBY.js";import{n as C,t as w}from"./FormFieldStatus-BJEjTjby.js";var T=t({Default:()=>A,InAField:()=>P,OverLimit:()=>j,StatusText:()=>M,Translated:()=>N,__namedExportsOrder:()=>F,default:()=>k}),E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{c(),v(),C(),E=n(),D=r(),O=`Ik wil voor volgende week graag een vergunning aanvragen voor mijn nieuwe adres in Amsterdam-Noord `,k={title:`Components/Forms/Form Field Status`,component:w,subcomponents:{"FormFieldStatus.CharacterCount":w.CharacterCount}},A={args:{length:7,maxLength:10},argTypes:{length:{control:{min:0,type:`number`},description:`The current length of the field’s value in this example.`},maxLength:{control:{min:0,type:`number`},description:`The maximum length of the field’s value in this example.`}},render:({length:e,maxLength:t,...n})=>(0,D.jsx)(w,{...n,children:(0,D.jsx)(w.CharacterCount,{length:e,maxLength:t})})},j={...A,args:{length:1005,maxLength:1e3}},M={render:e=>(0,D.jsx)(w,{...e,children:`Uw wachtwoord is sterk genoeg.`})},N={render:e=>(0,D.jsxs)(l,{children:[(0,D.jsx)(w,{...e,dir:`rtl`,lang:`ar`,children:(0,D.jsx)(w.CharacterCount,{formatOverLimitText:x,formatText:b,length:15,maxLength:10})}),(0,D.jsx)(w,{...e,lang:`de`,children:(0,D.jsx)(w.CharacterCount,{formatOverLimitText:g,formatText:d,length:15,maxLength:10})}),(0,D.jsx)(w,{...e,lang:`en`,children:(0,D.jsx)(w.CharacterCount,{formatOverLimitText:y,formatText:h,length:15,maxLength:10})}),(0,D.jsx)(w,{...e,lang:`fr`,children:(0,D.jsx)(w.CharacterCount,{formatOverLimitText:m,formatText:S,length:15,maxLength:10})}),(0,D.jsx)(w,{...e,lang:`nl`,children:(0,D.jsx)(w.CharacterCount,{formatOverLimitText:u,formatText:f,length:15,maxLength:10})}),(0,D.jsx)(w,{...e,lang:`tr`,children:(0,D.jsx)(w.CharacterCount,{formatOverLimitText:_,formatText:p,length:15,maxLength:10})})]})},P={args:{maxLength:100},argTypes:{maxLength:{control:{min:0,type:`number`},description:`The maximum length of the field’s value in this example.`}},render:function({maxLength:e,...t}){let[n,r]=(0,E.useState)(O);return(0,D.jsxs)(s,{children:[(0,D.jsx)(o,{htmlFor:`input1`,children:`Beschrijf uw aanvraag`}),(0,D.jsx)(a,{id:`description1`,children:`Licht kort toe wat u nodig heeft.`}),(0,D.jsx)(i,{"aria-describedby":`description1 status1`,id:`input1`,onChange:e=>r(e.target.value),rows:4,value:n}),(0,D.jsx)(w,{...t,id:`status1`,children:(0,D.jsx)(w.CharacterCount,{length:n.length,maxLength:e})})]})}},F=[`Default`,`OverLimit`,`StatusText`,`Translated`,`InAField`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    length: 1005,
    maxLength: 1000
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <FormFieldStatus {...args}>Uw wachtwoord is sterk genoeg.</FormFieldStatus>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    maxLength: 100
  },
  argTypes: {
    maxLength: {
      control: {
        min: 0,
        type: 'number'
      },
      description: 'The maximum length of the field’s value in this example.'
    }
  },
  render: function Component({
    maxLength,
    ...args
  }) {
    const [value, setValue] = useState(exampleRequest);
    return <Field>
        <Label htmlFor="input1">Beschrijf uw aanvraag</Label>
        <Paragraph id="description1">Licht kort toe wat u nodig heeft.</Paragraph>
        <TextArea aria-describedby="description1 status1" id="input1" onChange={event => setValue(event.target.value)} rows={4} value={value} />
        <FormFieldStatus {...args} id="status1">
          <FormFieldStatus.CharacterCount length={value.length} maxLength={maxLength} />
        </FormFieldStatus>
      </Field>;
  }
}`,...P.parameters?.docs?.source}}}})))()}export{N as a,M as i,P as n,I as o,j as r,k as s,T as t};