import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./Checkbox-CKwLgWt4.js";import{r as i,t as a}from"./DateInput-CuNJEPaP.js";import{n as o,t as s}from"./ErrorMessage-GLUqJ0KT.js";import{n as c,t as l}from"./Field-BGOiZxm6.js";import{n as u,t as d}from"./FieldSet-CvGNX-va.js";import{n as f,t as p}from"./FileInput-BuIn_JpR.js";import{n as m,t as h}from"./Label-D9oqML2M.js";import{n as g,t as _}from"./PasswordInput-B5I_6enX.js";import{n as v,t as y}from"./Radio-1fKf7d0f.js";import{n as b,t as x}from"./SearchField-CesYynia.js";import{n as S,t as C}from"./Select-d3J565Ho.js";import{n as w,t as T}from"./Switch-Dti1XmWt.js";import{n as E,t as D}from"./TextArea-C1yXDTVG.js";import{n as O,t as k}from"./TextInput-BHSkbWrn.js";import{n as A,t as j}from"./TimeInput-BqS1LEv-.js";import{n as M,t as N}from"./loFiMeta-DTKUndwq.js";var P,F,I,L;function R(){return(R=e((()=>{n(),i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A(),N(),P=t(),F={...M,title:`Modes/Lo-fi/Forms`},I={render:()=>(0,P.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ams-space-l)`,gridTemplateColumns:`repeat(2, 22rem)`},children:[(0,P.jsxs)(l,{children:[(0,P.jsx)(h,{htmlFor:`lo-fi-text`,children:`Wat is uw achternaam?`}),(0,P.jsx)(k,{defaultValue:`Dijkstra`,id:`lo-fi-text`})]}),(0,P.jsxs)(l,{invalid:!0,children:[(0,P.jsx)(h,{htmlFor:`lo-fi-text-invalid`,children:`Wat is uw achternaam?`}),(0,P.jsx)(s,{children:`Vul uw achternaam in.`}),(0,P.jsx)(k,{id:`lo-fi-text-invalid`,invalid:!0})]}),(0,P.jsxs)(l,{children:[(0,P.jsx)(h,{htmlFor:`lo-fi-textarea`,children:`Waarom wilt u bezwaar maken?`}),(0,P.jsx)(D,{defaultValue:`De aanslag klopt niet met de eerdere brief.`,id:`lo-fi-textarea`,rows:3})]}),(0,P.jsxs)(l,{children:[(0,P.jsx)(h,{htmlFor:`lo-fi-select`,children:`In welk stadsdeel woont u?`}),(0,P.jsxs)(C,{id:`lo-fi-select`,children:[(0,P.jsx)(C.Option,{value:`centrum`,children:`Centrum`}),(0,P.jsx)(C.Option,{value:`noord`,children:`Noord`}),(0,P.jsx)(C.Option,{value:`zuidoost`,children:`Zuidoost`})]})]}),(0,P.jsxs)(l,{children:[(0,P.jsx)(h,{htmlFor:`lo-fi-password`,children:`Kies een wachtwoord`}),(0,P.jsx)(_,{defaultValue:`Amsterdam`,id:`lo-fi-password`})]}),(0,P.jsxs)(l,{children:[(0,P.jsx)(h,{htmlFor:`lo-fi-file`,children:`Voeg een bijlage toe`}),(0,P.jsx)(p,{id:`lo-fi-file`})]}),(0,P.jsxs)(l,{children:[(0,P.jsx)(h,{htmlFor:`lo-fi-date`,children:`Wanneer wilt u verhuizen?`}),(0,P.jsx)(a,{defaultValue:`2026-08-12`,id:`lo-fi-date`})]}),(0,P.jsxs)(l,{children:[(0,P.jsx)(h,{htmlFor:`lo-fi-datetime`,children:`Wanneer wilt u langskomen?`}),(0,P.jsx)(a,{defaultValue:`2026-08-12T10:30`,id:`lo-fi-datetime`,type:`datetime-local`})]}),(0,P.jsxs)(l,{children:[(0,P.jsx)(h,{htmlFor:`lo-fi-time`,children:`Hoe laat komt u langs?`}),(0,P.jsx)(j,{defaultValue:`10:30`,id:`lo-fi-time`})]}),(0,P.jsxs)(x,{children:[(0,P.jsx)(x.Input,{defaultValue:`Amsterdam`,name:`search`,placeholder:`Waar bent u naar op zoek?`}),(0,P.jsx)(x.Button,{})]}),(0,P.jsxs)(d,{legend:`Waar wilt u de post ontvangen?`,children:[(0,P.jsx)(l,{children:(0,P.jsx)(y,{defaultChecked:!0,name:`lo-fi-radio`,value:`huis`,children:`Op mijn huisadres`})}),(0,P.jsx)(l,{children:(0,P.jsx)(y,{name:`lo-fi-radio`,value:`post`,children:`Op een postadres`})}),(0,P.jsx)(l,{children:(0,P.jsx)(y,{invalid:!0,name:`lo-fi-radio`,value:`anders`,children:`Op een ander adres`})})]}),(0,P.jsxs)(d,{legend:`Waarover wilt u bericht krijgen?`,children:[(0,P.jsx)(l,{children:(0,P.jsx)(r,{defaultChecked:!0,children:`Afvalinzameling`})}),(0,P.jsx)(l,{children:(0,P.jsx)(r,{indeterminate:!0,children:`Werkzaamheden in de buurt`})}),(0,P.jsx)(l,{children:(0,P.jsx)(r,{invalid:!0,children:`Evenementen`})}),(0,P.jsx)(l,{children:(0,P.jsx)(T,{defaultChecked:!0})})]})]}),tags:[`!dev`,`!autodocs`,`!manifest`]},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--ams-space-l)',
    gridTemplateColumns: 'repeat(2, 22rem)'
  }}>
      <Field>
        <Label htmlFor="lo-fi-text">Wat is uw achternaam?</Label>
        <TextInput defaultValue="Dijkstra" id="lo-fi-text" />
      </Field>
      <Field invalid>
        <Label htmlFor="lo-fi-text-invalid">Wat is uw achternaam?</Label>
        <ErrorMessage>Vul uw achternaam in.</ErrorMessage>
        <TextInput id="lo-fi-text-invalid" invalid />
      </Field>

      <Field>
        <Label htmlFor="lo-fi-textarea">Waarom wilt u bezwaar maken?</Label>
        <TextArea defaultValue="De aanslag klopt niet met de eerdere brief." id="lo-fi-textarea" rows={3} />
      </Field>
      <Field>
        <Label htmlFor="lo-fi-select">In welk stadsdeel woont u?</Label>
        <Select id="lo-fi-select">
          <Select.Option value="centrum">Centrum</Select.Option>
          <Select.Option value="noord">Noord</Select.Option>
          <Select.Option value="zuidoost">Zuidoost</Select.Option>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="lo-fi-password">Kies een wachtwoord</Label>
        <PasswordInput defaultValue="Amsterdam" id="lo-fi-password" />
      </Field>
      <Field>
        <Label htmlFor="lo-fi-file">Voeg een bijlage toe</Label>
        <FileInput id="lo-fi-file" />
      </Field>

      <Field>
        <Label htmlFor="lo-fi-date">Wanneer wilt u verhuizen?</Label>
        <DateInput defaultValue="2026-08-12" id="lo-fi-date" />
      </Field>
      <Field>
        <Label htmlFor="lo-fi-datetime">Wanneer wilt u langskomen?</Label>
        <DateInput defaultValue="2026-08-12T10:30" id="lo-fi-datetime" type="datetime-local" />
      </Field>

      <Field>
        <Label htmlFor="lo-fi-time">Hoe laat komt u langs?</Label>
        <TimeInput defaultValue="10:30" id="lo-fi-time" />
      </Field>
      <SearchField>
        <SearchField.Input defaultValue="Amsterdam" name="search" placeholder="Waar bent u naar op zoek?" />
        <SearchField.Button />
      </SearchField>

      <FieldSet legend="Waar wilt u de post ontvangen?">
        <Field>
          <Radio defaultChecked name="lo-fi-radio" value="huis">
            Op mijn huisadres
          </Radio>
        </Field>
        <Field>
          <Radio name="lo-fi-radio" value="post">
            Op een postadres
          </Radio>
        </Field>
        <Field>
          <Radio invalid name="lo-fi-radio" value="anders">
            Op een ander adres
          </Radio>
        </Field>
      </FieldSet>
      <FieldSet legend="Waarover wilt u bericht krijgen?">
        <Field>
          <Checkbox defaultChecked>Afvalinzameling</Checkbox>
        </Field>
        <Field>
          <Checkbox indeterminate>Werkzaamheden in de buurt</Checkbox>
        </Field>
        <Field>
          <Checkbox invalid>Evenementen</Checkbox>
        </Field>
        <Field>
          <Switch defaultChecked />
        </Field>
      </FieldSet>
    </div>,
  tags: ['!dev', '!autodocs', '!manifest']
}`,...I.parameters?.docs?.source},description:{story:`Every control that reads \`ams.inputs.border-radius\`, the one token that gives the whole form the
hand-drawn outline. A regression there is invisible on a single input — the asymmetric radius only
reads as wrong when boxes of different widths and heights sit next to each other, since the four
corner radii are absolute lengths and so land differently on each shape.

The invalid column covers \`ams.color.feedback.*\`, which Lo-fi flattens to one grey: the severities
must stay apart through the icon and the border, not through hue.`,...I.parameters?.docs?.description}}},L=[`Test`]})))()}R();export{I as Test,L as __namedExportsOrder,F as default};