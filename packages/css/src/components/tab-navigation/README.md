<!-- @license CC0-1.0 -->

# Tab Navigation

Tab Navigation allows navigating between pages or sections of a website.
It looks similar to Tabs but uses links instead of buttons, because each tab navigates to a different page.

## Guidelines

- Use Tab Navigation for page-level navigation where each tab represents a different page or URL.
- Use [Tabs](http://designsystem.amsterdam/?path=/docs/components-containers-tabs--docs) for in-page content switching where panel content changes without navigating away.
- The current page's link receives the `aria-current="page"` attribute.
- Always have one link marked as current.
- Use the `vertical` orientation to stack links below each other, e.g. in a sidebar.

You can navigate the links with your keyboard:

| key         | element                                        |
| :---------- | :--------------------------------------------- |
| Tab         | Go to the next element that can have focus     |
| Shift + Tab | Go to the previous element that can have focus |
| Enter       | Follow the link that has the focus             |
