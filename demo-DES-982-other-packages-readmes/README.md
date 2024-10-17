<!-- @license CC0-1.0 -->

# Amsterdam Design System: Assets

This package provides all assets from the [Amsterdam Design System](https://designsystem.amsterdam).
Use it to include the correct fonts, icons or logos in your website or application.

## Installation

Install this package by itself if you want or need to reference assets directly in your project.

Note that our [React components](https://www.npmjs.com/package/@amsterdam/design-system-react) provide more functionality for some of the assets and use them automatically.
You should use that package if your application uses React.

```sh
npm install @amsterdam/design-system-assets
```

```sh
pnpm add @amsterdam/design-system-assets
```

```sh
yarn add @amsterdam/design-system-assets
```

## Usage

### Application icons

The Design System handbook helps using [a favicon](https://designsystem.amsterdam/?path=/docs/brand-assets-favicon--docs) or [a web manifest and application icons](https://designsystem.amsterdam/?path=/docs/docs-developer-guide-web-app--docs) for home screens of devices in your website or application.

### Font files

The package contains our Amsterdam Sans font in OpenType format (.otf) and Web Open Format Font (.woff).
Import our stylesheet to make all of them available to your project.

```ts
import "@amsterdam/design-system-assets/font/index.css";
```

The Design System Handbook offers [more guidance in using the font](https://designsystem.amsterdam/?path=/docs/brand-assets-font--docs).

Note that the font is proprietary. Using it requires [a license](https://designsystem.amsterdam/?path=/docs/docs-terms-of-use-copyright--docs).

### Icons

The Design System Handbook offers an [overview of our icon library](https://designsystem.amsterdam/?path=/docs/brand-assets-icons--docs).

You can import the SVG files to use icons in your website or application.

In a React project, use the [Icon component](https://designsystem.amsterdam/?path=/docs/components-media-icon--docs) instead.
It offers a convenient API for using the icons and streamlines alignment with text.

### Logos

The logo of the City of Amsterdam is available as an SVG image, as well as logos for various departments and services.

In a React project, use the [Logo component](https://designsystem.amsterdam/?path=/docs/components-media-logo--docs) instead.

## Updating

We follow semantic versioning and publish a [change log](https://github.com/Amsterdam/design-system/blob/main/proprietary/assets/CHANGELOG.md) to guide you through updates.
The assets are a public API of the design system.
Note that detecting changed or deleted assets is still a manual process.

## Support

Contact us if you have a question, find an issue, or want to contribute.
Find ways to reach us on [designsystem.amsterdam](https://designsystem.amsterdam/?path=/docs/docs-introduction--docs#send-a-message).
