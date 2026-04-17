/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './vertical-space-finder.css'

import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { useState } from 'react'

import { componentsAbove, componentsBelow, spaceSizeLabel, verticalSpace } from './config'

export const VerticalSpaceFinder = ({ className, ...restProps }: HTMLAttributes<HTMLDivElement>) => {
  const [above, setAbove] = useState('')
  const [below, setBelow] = useState('')

  const key = `${above}|${below}`
  const size = above && below ? verticalSpace[key] : undefined
  const bothSelected = above !== '' && below !== ''

  return (
    <div {...restProps} className={clsx('_ams-vertical-space-finder sb-unstyled', className)}>
      <div className="_ams-vertical-space-finder__fields">
        <div>
          <label className="ams-visually-hidden" htmlFor="_ams-vertical-space-component-1">
            First component:
          </label>
          <select id="_ams-vertical-space-component-1" onChange={(e) => setAbove(e.target.value)} value={above}>
            <option value="">First component</option>
            {componentsAbove.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="ams-visually-hidden" htmlFor="_ams-vertical-space-component-2">
            Second component:
          </label>
          <select id="_ams-vertical-space-component-2" onChange={(e) => setBelow(e.target.value)} value={below}>
            <option value="">Second component</option>
            {componentsBelow.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        {bothSelected && (
          <p className="_ams-vertical-space-finder__result sb-unstyled">
            {size !== undefined ? (
              <>
                → <b>{spaceSizeLabel[size]}</b> space between them
              </>
            ) : (
              '→ we advise against this combination.'
            )}
          </p>
        )}
      </div>
    </div>
  )
}
