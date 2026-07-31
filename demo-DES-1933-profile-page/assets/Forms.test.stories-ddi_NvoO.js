import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-Bq1bXGty.js";import{At as n,B as r,F as i,It as a,N as o,Pt as s,Rt as c,dt as l,en as u,i as d,j as f,l as p,o as m,qt as h,t as g,y as _}from"./src-C47T_RZP.js";import{n as v,t as y}from"./loFiMeta-D7BuTyKp.js";var b,x,S,C;e((()=>{g(),y(),b=t(),x={...v,title:`Modes/Lo-fi/Forms`},S={render:()=>(0,b.jsxs)(`div`,{style:{display:`grid`,gap:`var(--ams-space-l)`,gridTemplateColumns:`repeat(2, 22rem)`},children:[(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{htmlFor:`lo-fi-text`,children:`Wat is uw achternaam?`}),(0,b.jsx)(m,{defaultValue:`Dijkstra`,id:`lo-fi-text`})]}),(0,b.jsxs)(a,{invalid:!0,children:[(0,b.jsx)(l,{htmlFor:`lo-fi-text-invalid`,children:`Wat is uw achternaam?`}),(0,b.jsx)(c,{children:`Vul uw achternaam in.`}),(0,b.jsx)(m,{id:`lo-fi-text-invalid`,invalid:!0})]}),(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{htmlFor:`lo-fi-textarea`,children:`Waarom wilt u bezwaar maken?`}),(0,b.jsx)(p,{defaultValue:`De aanslag klopt niet met de eerdere brief.`,id:`lo-fi-textarea`,rows:3})]}),(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{htmlFor:`lo-fi-select`,children:`In welk stadsdeel woont u?`}),(0,b.jsxs)(f,{id:`lo-fi-select`,children:[(0,b.jsx)(f.Option,{value:`centrum`,children:`Centrum`}),(0,b.jsx)(f.Option,{value:`noord`,children:`Noord`}),(0,b.jsx)(f.Option,{value:`zuidoost`,children:`Zuidoost`})]})]}),(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{htmlFor:`lo-fi-password`,children:`Kies een wachtwoord`}),(0,b.jsx)(r,{defaultValue:`Amsterdam`,id:`lo-fi-password`})]}),(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{htmlFor:`lo-fi-file`,children:`Voeg een bijlage toe`}),(0,b.jsx)(n,{id:`lo-fi-file`})]}),(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{htmlFor:`lo-fi-date`,children:`Wanneer wilt u verhuizen?`}),(0,b.jsx)(h,{defaultValue:`2026-08-12`,id:`lo-fi-date`})]}),(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{htmlFor:`lo-fi-datetime`,children:`Wanneer wilt u langskomen?`}),(0,b.jsx)(h,{defaultValue:`2026-08-12T10:30`,id:`lo-fi-datetime`,type:`datetime-local`})]}),(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{htmlFor:`lo-fi-time`,children:`Hoe laat komt u langs?`}),(0,b.jsx)(d,{defaultValue:`10:30`,id:`lo-fi-time`})]}),(0,b.jsxs)(o,{children:[(0,b.jsx)(o.Input,{defaultValue:`Amsterdam`,name:`search`,placeholder:`Waar bent u naar op zoek?`}),(0,b.jsx)(o.Button,{})]}),(0,b.jsxs)(s,{legend:`Waar wilt u de post ontvangen?`,children:[(0,b.jsx)(a,{children:(0,b.jsx)(i,{defaultChecked:!0,name:`lo-fi-radio`,value:`huis`,children:`Op mijn huisadres`})}),(0,b.jsx)(a,{children:(0,b.jsx)(i,{name:`lo-fi-radio`,value:`post`,children:`Op een postadres`})}),(0,b.jsx)(a,{children:(0,b.jsx)(i,{invalid:!0,name:`lo-fi-radio`,value:`anders`,children:`Op een ander adres`})})]}),(0,b.jsxs)(s,{legend:`Waarover wilt u bericht krijgen?`,children:[(0,b.jsx)(a,{children:(0,b.jsx)(u,{defaultChecked:!0,children:`Afvalinzameling`})}),(0,b.jsx)(a,{children:(0,b.jsx)(u,{indeterminate:!0,children:`Werkzaamheden in de buurt`})}),(0,b.jsx)(a,{children:(0,b.jsx)(u,{invalid:!0,children:`Evenementen`})}),(0,b.jsx)(a,{children:(0,b.jsx)(_,{defaultChecked:!0})})]})]}),tags:[`!dev`,`!autodocs`]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
  tags: ['!dev', '!autodocs']
}`,...S.parameters?.docs?.source},description:{story:`Every control that reads \`ams.inputs.border-radius\`, the one token that gives the whole form the
hand-drawn outline. A regression there is invisible on a single input — the asymmetric radius only
reads as wrong when boxes of different widths and heights sit next to each other, since the four
corner radii are absolute lengths and so land differently on each shape.

The invalid column covers \`ams.color.feedback.*\`, which Lo-fi flattens to one grey: the severities
must stay apart through the icon and the border, not through hue.`,...S.parameters?.docs?.description}}},C=[`Test`]}))();export{S as Test,C as __namedExportsOrder,x as default};