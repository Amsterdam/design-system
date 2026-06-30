<!-- @license CC0-1.0 -->

# Amsterdam Design System: React icons

This package provides all icons from the [Amsterdam Design System](https://designsystem.amsterdam) as React components.
Use it to use the correct icons in your React project.

## Installation

Install this package by itself if you want or need to use icons directly in your React project.

Note that our [React components](https://www.npmjs.com/package/@amsterdam/design-system-react) contain an [Icon component](https://designsystem.amsterdam/?path=/docs/components-media-icon--docs) that offers a convenient API for using the icons and streamlines alignment with text.

```sh
npm install @amsterdam/design-system-react-icons
```

## Usage

Import the component for the icon you need, as well as the generic Icon component, and use them in your JSX.

<!-- prettier-ignore -->
```tsx
import { Icon } from "@amsterdam/design-system-react"
import { SearchIcon } from "@amsterdam/design-system-react-icons"

export const App = () => <Icon svg={SearchIcon} />
```

## Right-to-left mirroring

Some icons (arrows, vehicles, speech balloons, and similar) carry a `data-directional="true"` attribute on their root `<svg>` element and are meant to be horizontally mirrored in a right-to-left (RTL) context.
When you render an icon through the `Icon` component, this mirroring is handled automatically by `@amsterdam/design-system-css`'s `.ams-icon` styles.

If you render an icon component directly, without wrapping it in `Icon`, you are responsible for the mirroring yourself.
Add a rule along these lines, scoped to wherever you render the icon:

```css
your-icon-wrapper svg[data-directional="true"]:dir(rtl) {
  transform: scaleX(-1);
}
```

See the [icon contribution guide](https://github.com/Amsterdam/design-system/blob/develop/packages-proprietary/assets/CONTRIBUTING.md#right-to-left-rtl-mirroring) for which icons carry the attribute and why.

## Updating

When updating to a new release of this package, check the [change log](https://github.com/Amsterdam/design-system/blob/develop/packages-proprietary/react-icons/CHANGELOG.md) for breaking changes.
If there are any, update your application accordingly.

## Support

Contact us if you have a question, find an issue, or want to contribute.
Find ways to reach us on [designsystem.amsterdam](https://designsystem.amsterdam/?path=/docs/docs-introduction--docs#send-a-message).
