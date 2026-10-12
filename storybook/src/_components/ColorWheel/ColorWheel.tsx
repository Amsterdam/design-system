/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { KeyboardEvent } from 'react'

import { clsx } from 'clsx'
import { useId, useState } from 'react'

import type { ColourGroupId, PaletteColor } from './colorWheelData'

import { colourGroups, neutralColours } from './colorWheelData'
import { CENTRE_RADIUS, OUTER_RADIUS, pieSlice, ringRadii, ringSlice, segmentAngles } from './colorWheelGeometry'

import './color-wheel.css'

type GroupId = ColourGroupId | 'neutral'

const colourGroupIds = ['red', 'blue', 'green', 'yellow'] as const

const groupIds: readonly GroupId[] = ['neutral', ...colourGroupIds]

/** Where each quarter of the wheel starts. */
const quadrantStart: Record<ColourGroupId, number> = { blue: 90, green: 180, red: 0, yellow: 270 }

/** The angles of the neutral wedges, in the order of `neutralColours`. */
const neutralWedgeAngles = [
  [270, 360],
  [240, 270],
  [210, 240],
  [180, 210],
  [90, 180],
] as const

const MAIN_RING_INDEX = 2

const groupName = (id: GroupId) => (id === 'neutral' ? 'Neutral' : colourGroups[id].name)

/** The outline that surrounds everything a group selects. */
const groupOutline = (id: GroupId) => {
  if (id === 'neutral') return pieSlice(CENTRE_RADIUS, 90, 360)
  // The centre disc shows the first main colour, so red selects it as well.
  if (id === 'red') return pieSlice(OUTER_RADIUS, 0, 90)

  return ringSlice(CENTRE_RADIUS, OUTER_RADIUS, quadrantStart[id], quadrantStart[id] + 90)
}

const label = ({ hex, name }: PaletteColor) => (name ? `${name} ${hex}` : hex)

const Segment = ({ color, d }: { readonly color: PaletteColor; readonly d: string }) => (
  <path className="_ams-color-wheel-segment" d={d} fill={color.hex}>
    <title>{label(color)}</title>
  </path>
)

type GroupProps = {
  readonly id: GroupId
  readonly onFocusVisible: (id: GroupId | null) => void
  readonly onSelect: (id: GroupId) => void
  readonly panelId: string
  readonly selected: boolean
}

const Group = ({ id, onFocusVisible, onSelect, panelId, selected }: GroupProps) => {
  const handleKeyDown = (event: KeyboardEvent<SVGGElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect(id)
    }
  }

  return (
    <g
      aria-controls={panelId}
      aria-label={groupName(id)}
      aria-pressed={selected}
      className="_ams-color-wheel-group"
      onBlur={() => onFocusVisible(null)}
      onClick={() => onSelect(id)}
      onFocus={(event) => onFocusVisible(event.currentTarget.matches(':focus-visible') ? id : null)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {id === 'neutral' ? (
        neutralColours.map((color, index) => {
          const [start, end] = neutralWedgeAngles[index]

          return <Segment color={color} d={pieSlice(CENTRE_RADIUS, start, end)} key={color.hex} />
        })
      ) : (
        <>
          {id === 'red' && (
            <Segment color={colourGroups.red.rings[MAIN_RING_INDEX][0]} d={pieSlice(CENTRE_RADIUS, 0, 90)} />
          )}
          {colourGroups[id].rings.map((colours, ringIndex) => {
            const [innerRadius, outerRadius] = ringRadii(ringIndex)

            return colours.map((color, index) => {
              const [start, end] = segmentAngles(quadrantStart[id], colours.length, index)

              return <Segment color={color} d={ringSlice(innerRadius, outerRadius, start, end)} key={color.hex} />
            })
          })}
        </>
      )}
    </g>
  )
}

const ColourList = ({ colours, heading }: { readonly colours: readonly PaletteColor[]; readonly heading?: string }) => (
  <>
    {heading && <h4 className="_ams-color-wheel-subheading">{heading}</h4>}
    <ul className="_ams-color-wheel-list">
      {colours.map(({ cmyk, hex, name, oklch, rgb }) => (
        <li className="_ams-color-wheel-item" key={hex}>
          <span className="_ams-color-wheel-sample" style={{ backgroundColor: hex }} />
          <span>
            <span className="_ams-color-wheel-name">{name ?? hex}</span>
            {name && <span className="_ams-color-wheel-hex">{hex}</span>}
            <span className="_ams-color-wheel-values">
              RGB {rgb} · CMYK {cmyk} · OKLCH {oklch}
            </span>
          </span>
        </li>
      ))}
    </ul>
  </>
)

const GroupDetails = ({ id }: { readonly id: GroupId }) => {
  if (id === 'neutral') return <ColourList colours={neutralColours} />

  const [lightest, light, main, dark, darkest] = colourGroups[id].rings

  return (
    <>
      <ColourList colours={main} heading="Main colours" />
      <ColourList colours={[...lightest, ...light]} heading="Lighter tints" />
      <ColourList colours={[...dark, ...darkest]} heading="Darker tints" />
    </>
  )
}

type ColorWheelProps = {
  /** The group that is selected at first. */
  readonly defaultGroup?: GroupId
}

/**
 * Approximates the colour wheel of the new palette.
 * Select a group in the wheel to list its colours next to it.
 */
export const ColorWheel = ({ defaultGroup = 'neutral' }: ColorWheelProps) => {
  const headingId = useId()
  const panelId = useId()
  const [selected, setSelected] = useState<GroupId>(defaultGroup)
  const [focusVisible, setFocusVisible] = useState<GroupId | null>(null)

  return (
    <div className={clsx('_ams-color-wheel', 'sb-unstyled')}>
      <svg aria-label="Colour groups" className="_ams-color-wheel-chart" role="group" viewBox="-104 -104 208 208">
        {groupIds.map((id) => (
          <Group
            id={id}
            key={id}
            onFocusVisible={setFocusVisible}
            onSelect={setSelected}
            panelId={panelId}
            selected={selected === id}
          />
        ))}
        <g aria-hidden="true">
          {focusVisible && (
            <path className="_ams-color-wheel-outline _ams-color-wheel-outline--focus" d={groupOutline(focusVisible)} />
          )}
          <path className="_ams-color-wheel-outline _ams-color-wheel-outline--halo" d={groupOutline(selected)} />
          <path className="_ams-color-wheel-outline _ams-color-wheel-outline--selected" d={groupOutline(selected)} />
        </g>
      </svg>
      <section aria-labelledby={headingId} className="_ams-color-wheel-details" id={panelId}>
        <h3 className="_ams-color-wheel-heading" id={headingId}>
          {groupName(selected)}
        </h3>
        <GroupDetails id={selected} />
      </section>
    </div>
  )
}
