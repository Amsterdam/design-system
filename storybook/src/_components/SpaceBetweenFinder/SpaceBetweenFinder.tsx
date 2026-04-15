/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './space-between-finder.css'

import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { useState } from 'react'

import { componentsAbove, componentsBelow, spaceBetween } from './config'

export const SpaceBetweenFinder = ({ className, ...restProps }: HTMLAttributes<HTMLDivElement>) => {
  const [above, setAbove] = useState('')
  const [below, setBelow] = useState('')

  const key = `${above}|${below}`
  const size = above && below ? spaceBetween[key] : undefined
  const bothSelected = above !== '' && below !== ''

  return (
    <div {...restProps} className={clsx('_ams-space-between-finder sb-docs sb-docs-content', className)}>
      <div className="_ams-space-between-finder__fields">
        <div>
          <label htmlFor="space-between-above">Component on top:</label>
          <select id="space-between-above" onChange={(e) => setAbove(e.target.value)} value={above}>
            <option value="">Select a component</option>
            {componentsAbove.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="space-between-below">Component below:</label>
          <select id="space-between-below" onChange={(e) => setBelow(e.target.value)} value={below}>
            <option value="">Select a component</option>
            {componentsBelow.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {bothSelected && (
        <p className="_ams-space-between-finder__result">
          {size !== undefined ? (
            <>
              → Recommended space size: <code>{size}</code>.
            </>
          ) : (
            '→ We advise against this combination.'
          )}
        </p>
      )}
    </div>
  )
}
