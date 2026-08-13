/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Checkbox,
  DateInput,
  ErrorMessage,
  Field,
  FieldSet,
  FileInput,
  Label,
  PasswordInput,
  Radio,
  SearchField,
  Select,
  Switch,
  TextArea,
  TextInput,
  TimeInput,
} from '@amsterdam/design-system-react/src'

import { loFiMeta } from './loFiMeta'

const meta = {
  ...loFiMeta,
  title: 'Modes/Lo-fi/Forms',
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

/**
 * Every control that reads `ams.inputs.border-radius`, the one token that gives the whole form the
 * hand-drawn outline. A regression there is invisible on a single input — the asymmetric radius only
 * reads as wrong when boxes of different widths and heights sit next to each other, since the four
 * corner radii are absolute lengths and so land differently on each shape.
 *
 * The invalid column covers `ams.color.feedback.*`, which Lo-fi flattens to one grey: the severities
 * must stay apart through the icon and the border, not through hue.
 */
export const Test: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--ams-space-l)', gridTemplateColumns: 'repeat(2, 22rem)' }}>
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
          <Switch defaultChecked>Ook per e-mail</Switch>
        </Field>
      </FieldSet>
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
