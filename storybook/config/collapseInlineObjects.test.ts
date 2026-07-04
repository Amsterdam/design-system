/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { collapseInlineObjects } from './collapseInlineObjects'

describe('collapseInlineObjects', () => {
  it('collapses a multi-line object prop and re-joins its opening tag', () => {
    const input = `<Grid.Cell
  span={{
    medium: 6,
    narrow: 4,
    wide: 6
  }}
>`

    expect(collapseInlineObjects(input)).toBe('<Grid.Cell span={{ medium: 6, narrow: 4, wide: 6 }}>')
  })

  it('collapses a multi-line array prop', () => {
    const input = `<List
  items={[
    1,
    2
  ]}
/>`

    expect(collapseInlineObjects(input)).toBe('<List items={[ 1, 2 ]} />')
  })

  it('leaves already inline code untouched', () => {
    const input = '<SearchField.Input defaultValue="woningbouw" label="Zoek op de website" name="search" />'

    expect(collapseInlineObjects(input)).toBe(input)
  })

  it('keeps a tag wrapped when collapsing would exceed the line-length budget', () => {
    const input = `<Component
  alpha="one"
  charlie={{
    delta: 1
  }}
  overflow="a value long enough to push the whole single line past one hundred and twenty columns in total"
>`

    const result = collapseInlineObjects(input)

    expect(result).toContain('charlie={{ delta: 1 }}')
    expect(result).toContain('<Component\n')
  })

  it('leaves a multi-line function prop untouched', () => {
    const input = `<Button onClick={(event) => {
  event.preventDefault()
  submit()
}} />`

    expect(collapseInlineObjects(input)).toBe(input)
  })

  it('does not treat a `>` inside an arrow function or string as the end of the tag', () => {
    const input = `<Field onSubmit={() => {}} label="a > b" data={[
  1,
  2
]} />`

    expect(collapseInlineObjects(input)).toBe('<Field onSubmit={() => {}} label="a > b" data={[ 1, 2 ]} />')
  })
})
