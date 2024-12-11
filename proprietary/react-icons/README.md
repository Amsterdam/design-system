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

```js
import { Icon } from "@amsterdam/design-system-react";
import { SearchIcon } from "@amsterdam/design-system-react-icons";

export const App = () => <Icon svg={SearchIcon} />;
```

## Updating

When updating to a new release of this package, check the [change log](https://github.com/Amsterdam/design-system/blob/develop/proprietary/react-icons/CHANGELOG.md) for breaking changes.
If there are any, update your application accordingly.

## Support

Contact us if you have a question, find an issue, or want to contribute.
Find ways to reach us on [designsystem.amsterdam](https://designsystem.amsterdam/?path=/docs/docs-introduction--docs#send-a-message).
