import { Button } from '@amsterdam/design-system-react'
import { EnlargeIcon, MinimiseIcon } from '@amsterdam/design-system-react-icons'
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
      <Button variant="secondary" iconOnly icon={EnlargeIcon} onClick={handleZoomInClick}>
        Zoom in
      </Button>
      <Button variant="secondary" iconOnly icon={MinimiseIcon} onClick={handleZoomOutClick}>
        Zoom out
      </Button>
    </div>
  )
}

export default Controls
