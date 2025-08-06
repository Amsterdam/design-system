import React from 'react'
import { Timeline } from '../components/Timeline'
import * as TimelineStories from '../components/Timeline/Timeline.stories'

export default function TimelineTab() {
  return (
    <Timeline
      collapsible={TimelineStories?.Default?.args?.collapsible}
      editable={TimelineStories?.Default?.args?.editable}
    >
      {TimelineStories?.Default?.args?.children ?? 'No content available'}
    </Timeline>
  )
}
