<!-- @license CC0-1.0 -->

# Contributing Guidelines

## Contents

- [Exporting icons](#exporting-icons)

## Exporting icons

To export all icons from [the Figma file](https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?node-id=6852-5124) to SVG use the native SVG export functionality in Figma. To select all icons select the shapes frame, press `Enter` to select direct children and then `Enter` again to select all icon components. The select export to SVG in the sidebar and export all icons to the `icons` folder. Then run the following command to optimize the SVG files:

```sh
npm run optimize-icons
```
