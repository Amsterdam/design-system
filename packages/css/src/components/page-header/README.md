<!-- @license CC0-1.0 -->

# Page Header

Displays the City’s logo at the top of every page, and optionally a navigation menu.
Includes the name of the application if it is not the general website.

## Design

- The Page Header includes the logo of the City or the organization, the site title (except for the general website), and a menu with links to commonly used pages.
- An optional ‘Menu’ button opens a collapsible menu, which has room for more links.
- On narrow windows, links can move from the inline menu to the collapsible one.
- For websites with a brand name that feature the standard Amsterdam logo, only the emblem is shown on narrow screens.

## Guidelines

- The Page Header must be used on all websites and applications for the City of Amsterdam.
  It’s often the first thing people perceive.
  As it conveys our corporate identity, using it consistently helps users recognize and trust the website.
- The Page Header should be the same on every page, although full-screen pages may hide it, e.g. a video or a map.
- The inline menu can contain a maximum of 5 items.
  The last two will often be ‘Search’ and ‘Menu’.
- Labels should be short to help the inline menu fit on a single line whenever possible.
- An icon can be added to the end of a link to make its destination easier to guess.
- Wrap the collapsible menu in a [Grid](/docs/components-layout-grid--docs).
  Don’t set its padding props – Page Header adds the correct space above and below.
- If the collapsible menu contains a list that spans multiple columns, make sure not to split the items over multiple Link Lists.
  This will confuse users of assistive software.

## References

- A Page Header is a [landmark](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_landmark_roles) and can be used to group navigation elements.
- [WCAG 3.2.3](https://wcag.com/designers/3-2-3-consistent-navigation/) Consistent Navigation: Navigation menus that appear on multiple pages are consistent.
