import { Button } from '@amsterdam/design-system-react'
import { MinusIcon, PlusIcon } from '@amsterdam/design-system-react-icons'
import { useMapInstance } from './MapContext'
import styles from './controls.module.css'

const Controls = () => {
  const mapInstance = useMapInstance()

  const handleZoomInClick = () => {
    if (mapInstance) {
      mapInstance?.setZoom(mapInstance.getZoom() + 1)
    }
  }
  const handleZoomOutClick = () => {
    if (mapInstance) {
      mapInstance?.setZoom(mapInstance.getZoom() - 1)
    }
  }

  return (
    <div className={styles.buttons}>
      <Button icon={PlusIcon} iconOnly onClick={handleZoomInClick} variant="secondary">
        Zoom in
      </Button>
      <Button icon={MinusIcon} iconOnly onClick={handleZoomOutClick} variant="secondary">
        Zoom out
      </Button>
    </div>
  )
}

export default Controls
