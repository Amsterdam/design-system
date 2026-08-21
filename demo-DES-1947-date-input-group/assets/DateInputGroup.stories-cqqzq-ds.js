import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{n as i,r as a}from"./iframe-DWqVLsop.js";import{B as o,O as s,et as c,g as l,nt as u,v as d}from"./index.esm-DNSFpQsq.js";var f,p,m;function h(){return(h=e((()=>{a(),f=n(),p=r(),m=(0,f.forwardRef)(({children:e,className:t,wide:n,...r},a)=>(0,p.jsx)(`div`,{...r,className:i(`ams-date-input-group__field`,n&&`ams-date-input-group__field--wide`,t),ref:a,children:e})),m.displayName=`DateInputGroup.Field`;try{m.displayName=`DateInputGroup.Field`,m.__docgenInfo={description:`Pairs the Label and Text Input for one part of a date, and gives the input a width that suits the digits it takes.`,displayName:`DateInputGroup.Field`,filePath:`/home/runner/work/design-system/design-system/packages/react/src/DateInputGroup/DateInputGroupField.tsx`,methods:[],props:{wide:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/packages/react/src/DateInputGroup/DateInputGroupField.tsx`,name:`TypeLiteral`}],description:`Whether the input holds a four-digit value, such as a year.`,name:`wide`,required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{see:`{@link https://designsystem.amsterdam/?path=/docs/components-forms-date-input-group--docs Date Input Group docs at Amsterdam Design System}`}}}catch{}})))()}var g,_,v,y;function b(){return(b=e((()=>{a(),g=n(),h(),_=r(),v=(0,g.forwardRef)(({children:e,className:t,...n},r)=>(0,_.jsx)(`div`,{...n,className:i(`ams-date-input-group`,t),ref:r,children:e})),v.displayName=`DateInputGroup`,y=Object.assign(v,{Field:m});try{y.displayName=`DateInputGroup`,y.__docgenInfo={description:`Lines up the parts of a date that a user knows by heart, each in a field of its own.
Typing a day, month, and year separately asks less of someone than filling in a single date control.`,displayName:`DateInputGroup`,filePath:`/home/runner/work/design-system/design-system/packages/react/src/DateInputGroup/DateInputGroup.tsx`,methods:[],props:{},tags:{see:`{@link https://designsystem.amsterdam/?path=/docs/components-forms-date-input-group--docs Date Input Group docs at Amsterdam Design System}`}}}catch{}})))()}var x=t({Default:()=>w,MonthAndYear:()=>E,WithValidation:()=>T,__namedExportsOrder:()=>D,default:()=>C}),S,C,w,T,E,D;function O(){return(O=e((()=>{u(),b(),S=r(),C={title:`Components/Forms/Date Input Group`,component:y,subcomponents:{"DateInputGroup.Field":y.Field}},w={args:{description:`Bijvoorbeeld 1 1 2000.`,legend:`Wanneer ben je geboren?`},argTypes:{description:{control:`text`,description:`The description of the Field Set in this example.`},legend:{control:`text`,description:`The legend of the Field Set in this example.`}},render:({description:e,legend:t,...n})=>(0,S.jsxs)(d,{"aria-describedby":`description-a`,legend:t,children:[(0,S.jsx)(o,{id:`description-a`,children:e}),(0,S.jsxs)(y,{...n,children:[(0,S.jsxs)(y.Field,{children:[(0,S.jsx)(s,{htmlFor:`input-a1`,inFieldSet:!0,children:`Dag`}),(0,S.jsx)(c,{autoComplete:`bday-day`,id:`input-a1`,inputMode:`numeric`,name:`dag`})]}),(0,S.jsxs)(y.Field,{children:[(0,S.jsx)(s,{htmlFor:`input-a2`,inFieldSet:!0,children:`Maand`}),(0,S.jsx)(c,{autoComplete:`bday-month`,id:`input-a2`,inputMode:`numeric`,name:`maand`})]}),(0,S.jsxs)(y.Field,{wide:!0,children:[(0,S.jsx)(s,{htmlFor:`input-a3`,inFieldSet:!0,children:`Jaar`}),(0,S.jsx)(c,{autoComplete:`bday-year`,id:`input-a3`,inputMode:`numeric`,name:`jaar`})]})]})]})},T={render:e=>(0,S.jsxs)(d,{"aria-describedby":`description-b error-b`,invalid:!0,legend:`Wanneer ben je geboren?`,children:[(0,S.jsx)(o,{id:`description-b`,children:`Bijvoorbeeld 1 1 2000.`}),(0,S.jsx)(l,{id:`error-b`,children:`Vul een jaar in.`}),(0,S.jsxs)(y,{...e,children:[(0,S.jsxs)(y.Field,{children:[(0,S.jsx)(s,{htmlFor:`input-b1`,inFieldSet:!0,children:`Dag`}),(0,S.jsx)(c,{autoComplete:`bday-day`,defaultValue:16,id:`input-b1`,inputMode:`numeric`,name:`dag`})]}),(0,S.jsxs)(y.Field,{children:[(0,S.jsx)(s,{htmlFor:`input-b2`,inFieldSet:!0,children:`Maand`}),(0,S.jsx)(c,{autoComplete:`bday-month`,defaultValue:8,id:`input-b2`,inputMode:`numeric`,name:`maand`})]}),(0,S.jsxs)(y.Field,{wide:!0,children:[(0,S.jsx)(s,{htmlFor:`input-b3`,inFieldSet:!0,children:`Jaar`}),(0,S.jsx)(c,{autoComplete:`bday-year`,id:`input-b3`,inputMode:`numeric`,invalid:!0,name:`jaar`})]})]})]})},E={render:e=>(0,S.jsxs)(d,{"aria-describedby":`description-c`,legend:`Sinds wanneer woon je op dit adres?`,children:[(0,S.jsx)(o,{id:`description-c`,children:`Bijvoorbeeld 3 2019.`}),(0,S.jsxs)(y,{...e,children:[(0,S.jsxs)(y.Field,{children:[(0,S.jsx)(s,{htmlFor:`input-c1`,inFieldSet:!0,children:`Maand`}),(0,S.jsx)(c,{id:`input-c1`,inputMode:`numeric`,name:`maand`})]}),(0,S.jsxs)(y.Field,{wide:!0,children:[(0,S.jsx)(s,{htmlFor:`input-c2`,inFieldSet:!0,children:`Jaar`}),(0,S.jsx)(c,{id:`input-c2`,inputMode:`numeric`,name:`jaar`})]})]})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Bijvoorbeeld 1 1 2000.',
    legend: 'Wanneer ben je geboren?'
  },
  // These args are specific to this composed story, so they have no JSDoc to describe them: the meta
  // provides the props of the group, not those of the Field Set around it. Hence the descriptions below.
  argTypes: {
    description: {
      control: 'text',
      description: 'The description of the Field Set in this example.'
    },
    legend: {
      control: 'text',
      description: 'The legend of the Field Set in this example.'
    }
  },
  render: ({
    description,
    legend,
    ...args
  }) => <FieldSet aria-describedby="description-a" legend={legend}>
      <Paragraph id="description-a">{description}</Paragraph>
      <DateInputGroup {...args}>
        <DateInputGroup.Field>
          <Label htmlFor="input-a1" inFieldSet>
            Dag
          </Label>
          <TextInput autoComplete="bday-day" id="input-a1" inputMode="numeric" name="dag" />
        </DateInputGroup.Field>
        <DateInputGroup.Field>
          <Label htmlFor="input-a2" inFieldSet>
            Maand
          </Label>
          <TextInput autoComplete="bday-month" id="input-a2" inputMode="numeric" name="maand" />
        </DateInputGroup.Field>
        <DateInputGroup.Field wide>
          <Label htmlFor="input-a3" inFieldSet>
            Jaar
          </Label>
          <TextInput autoComplete="bday-year" id="input-a3" inputMode="numeric" name="jaar" />
        </DateInputGroup.Field>
      </DateInputGroup>
    </FieldSet>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSet aria-describedby="description-b error-b" invalid legend="Wanneer ben je geboren?">
      <Paragraph id="description-b">Bijvoorbeeld 1 1 2000.</Paragraph>
      <ErrorMessage id="error-b">Vul een jaar in.</ErrorMessage>
      <DateInputGroup {...args}>
        <DateInputGroup.Field>
          <Label htmlFor="input-b1" inFieldSet>
            Dag
          </Label>
          <TextInput autoComplete="bday-day" defaultValue={16} id="input-b1" inputMode="numeric" name="dag" />
        </DateInputGroup.Field>
        <DateInputGroup.Field>
          <Label htmlFor="input-b2" inFieldSet>
            Maand
          </Label>
          <TextInput autoComplete="bday-month" defaultValue={8} id="input-b2" inputMode="numeric" name="maand" />
        </DateInputGroup.Field>
        <DateInputGroup.Field wide>
          <Label htmlFor="input-b3" inFieldSet>
            Jaar
          </Label>
          <TextInput autoComplete="bday-year" id="input-b3" inputMode="numeric" invalid name="jaar" />
        </DateInputGroup.Field>
      </DateInputGroup>
    </FieldSet>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSet aria-describedby="description-c" legend="Sinds wanneer woon je op dit adres?">
      <Paragraph id="description-c">Bijvoorbeeld 3 2019.</Paragraph>
      <DateInputGroup {...args}>
        <DateInputGroup.Field>
          <Label htmlFor="input-c1" inFieldSet>
            Maand
          </Label>
          <TextInput id="input-c1" inputMode="numeric" name="maand" />
        </DateInputGroup.Field>
        <DateInputGroup.Field wide>
          <Label htmlFor="input-c2" inFieldSet>
            Jaar
          </Label>
          <TextInput id="input-c2" inputMode="numeric" name="jaar" />
        </DateInputGroup.Field>
      </DateInputGroup>
    </FieldSet>
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithValidation`,`MonthAndYear`]})))()}export{C as a,O as i,E as n,y as o,T as r,b as s,x as t};