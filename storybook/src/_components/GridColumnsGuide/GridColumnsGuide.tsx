/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid } from '@amsterdam/design-system-react/src'

import './grid-columns-guide.css'

export const GridColumnsGuide = () => (
  <Grid className="_ams-grid-columns-guide">
    {Array.from(Array(12).keys()).map((i) => (
      <Grid.Cell className="_ams-grid-columns-guide__cell" key={i} />
    ))}
  </Grid>
)
