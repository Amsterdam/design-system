/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import assert from 'node:assert/strict'
import { test } from 'node:test'
import { optimize } from 'svgo'

import { directionalIcons } from './directional-icons.mjs'
import config from './svgo.config.mjs'

const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z"/></svg>'

test('marks every directional icon on the root SVG element', () => {
  for (const name of directionalIcons) {
    const { data } = optimize(svg, { ...config, path: `/icons/${name}.svg` })

    assert.match(data, /^<svg\b[^>]*\bdata-directional="true"/, name)
  }
})

test('does not mark non-directional icons', () => {
  const { data } = optimize(svg, { ...config, path: '/icons/Warning.svg' })

  assert.doesNotMatch(data, /data-directional/)
})

test('removes stale directional attributes from non-directional icons', () => {
  const { data } = optimize(svg.replace('<svg ', '<svg data-directional="true" '), {
    ...config,
    path: '/icons/Warning.svg',
  })

  assert.doesNotMatch(data, /data-directional/)
})

test('corrects an existing directional attribute and is idempotent', () => {
  const options = { ...config, path: '/icons/ArrowBackward.svg' }
  const { data } = optimize(svg.replace('<svg ', '<svg data-directional="false" '), options)

  assert.match(data, /^<svg\b[^>]*\bdata-directional="true"/)
  assert.equal(optimize(data, options).data, data)
})

test('preserves directional attributes when no file path is supplied', () => {
  const { data } = optimize(svg.replace('<svg ', '<svg data-directional="true" '), config)

  assert.match(data, /^<svg\b[^>]*\bdata-directional="true"/)
})
