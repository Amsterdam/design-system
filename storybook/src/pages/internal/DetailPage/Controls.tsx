/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button } from '@amsterdam/design-system-react'
import { MinusIcon, PlusIcon } from '@amsterdam/design-system-react-icons'

import { useMapInstance } from './MapContext'

export const Controls = () => {
  const mapInstance = useMapInstance()

  const handleZoomInClick = () => {
    mapInstance.setZoom(mapInstance.getZoom() + 1)
  }

  const handleZoomOutClick = () => {
    mapInstance.setZoom(mapInstance.getZoom() - 1)
  }

  return (
    <div className="_ams-object-information-map__controls">
      <Button icon={PlusIcon} iconOnly onClick={handleZoomInClick} variant="secondary">
        Inzoomen
      </Button>
      <Button icon={MinusIcon} iconOnly onClick={handleZoomOutClick} variant="secondary">
        Uitzoomen
      </Button>
    </div>
  )
}
