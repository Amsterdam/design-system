import { memo } from 'react'

export const SlowTab = memo(function SlowTab() {
  // Log once. The actual slowdown is inside SlowPost.
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />')

  let items = []
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />)
  }
  return <ul className="items">{items}</ul>
})

type SlowPostProps = {
  index: number
}

function SlowPost({ index }: SlowPostProps) {
  let startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Post #{index + 1}</li>
}

export default SlowTab
