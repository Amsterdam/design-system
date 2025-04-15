<!-- @license CC0-1.0 -->

# Contributing Guidelines

## Importing icons from Figma

We create and update icons in Figma, then import them into this package for distribution.

**Important**: Only export icons from Figma for use in this package. Do not use these icons directly in an application.

To export all icons from [the Figma file](https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?node-id=6852-5124), use Figma's built-in SVG export feature.
Select the frame containing all the icon shapes, press `Enter` to select direct children and then press `Enter` again to select all icon components.
In the right-hand sidebar, click the plus sign next to Export. Choose SVG and export.
Copy these files over to the `icons` folder and run the following command to optimize them:

```sh
npm run optimize-icons
```
