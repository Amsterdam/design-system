<!-- @license CC0-1.0 -->

# Menu

A primary navigation leading to key areas of an application or website.

## Design

- The menu has a blue background.
  Links have a white icon and a label.
- In a narrow window, the menu occupies the full width.
  The icon and label of the link sit next to each other.
- In a wide window, the menu has a maximum width of 8rem.
  It adds whitespace at the top to align with the baseline of Page Header.
  The icon is larger and positioned above the label.

## Guidelines

- This component must not be used on public websites or applications.
  They should offer navigation using the Page Header only.
- Include this component twice: one in the Page Header and one to the side of the Page.
  Do not use it anywhere else.
- Set the `inWideWindow` prop to the latter to ensure only one of them is visible, and to get the correct appearance.
- Use filled icons for the links.
