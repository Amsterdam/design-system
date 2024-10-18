<!-- @license CC0-1.0 -->

# Assets

Assets for the City of Amsterdam

## Web app manifest, app icons and favicon

See the Design System documentation for guides on [the web manifest and application icons](https://designsystem.amsterdam/?path=/docs/docs-developer-guide-web-app--docs)
and [the favicon](https://designsystem.amsterdam/?path=/docs/brand-assets-favicon--docs).

## Exporting icons

To export all icons from Figma to SVG use the native export functionality in Figma. To select all icons select the frame, press `Enter` to select direct children and then `Enter` again to select all icon components. The select export to SVG in the sidebar and export all icons to the `icons` folder. Then run the following command to optimize the SVG files:

```bash
npm run optimize-icons
```
