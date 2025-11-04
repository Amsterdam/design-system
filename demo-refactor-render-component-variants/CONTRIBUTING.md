<!-- @license CC0-1.0 -->

# Contributing Guidelines

## Importing icons from Figma

We create and update icons in Figma, then import them into this package for distribution.

**Important**: Only export icons from Figma for use in this package. Do not use these icons directly in an application.

To export all icons from our [Figma Library](https://www.figma.com/community/file/1530535540611888495/amsterdam-design-system-community-edition), use Figma's built-in SVG export feature.
Select the frame containing all the icon shapes, press `Enter` to select direct children and then press `Enter` again to select all icon components.
In the right-hand sidebar, click the plus sign next to Export. Choose SVG and export.
Copy these files over to the `icons` folder and run the following command to optimize them:

```sh
npm run optimize-icons
```

Then, go to the `react-icons` package and run:

```sh
npm run generate
```

This will generate React icon components from all the SVGs in `/icons`.
