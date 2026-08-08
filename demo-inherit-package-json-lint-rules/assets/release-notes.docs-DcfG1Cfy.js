import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-zzQRermb.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(n,{title:`Docs/Release notes`}),`
`,(0,c.jsx)(t.h1,{id:`release-notes`,children:`Release notes`}),`
`,(0,c.jsx)(t.p,{children:`Our design system moves every few weeks.
A component arrives.
A default gets sharper.
A bug stops bothering you.
Everything that moves is written down here before you have to act on it.
You decide when to follow.`}),`
`,(0,c.jsxs)(t.p,{children:[`One release at a time, newest first.
Each opens with the package versions.
It sets out what changed.
It closes with what upgrading actually asks of you.
For the cadence and the guarantees behind it, read the `,(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-release-policy--docs`,children:`release policy`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`12-july-2026`,children:`12 July 2026`}),`
`,(0,c.jsxs)(t.p,{children:[`Assets `,(0,c.jsx)(t.strong,{children:`2.5.0`}),`, CSS `,(0,c.jsx)(t.strong,{children:`4.3.0`}),`, React `,(0,c.jsx)(t.strong,{children:`4.3.0`}),`, React Icons `,(0,c.jsx)(t.strong,{children:`2.2.0`}),`, Tokens `,(0,c.jsx)(t.strong,{children:`4.2.0`}),` (`,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/pull/2787`,rel:`nofollow`,children:`changelogs`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`This release hands over control.
Three components that used to manage their own open and closed state now let your application drive it.
Around that: a new component for loading states, a black weight for Amsterdam Sans, and directional icons that follow the reading direction.
Nothing breaks.`}),`
`,(0,c.jsx)(t.h3,{id:`added`,children:`Added`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/components-feedback-skeleton--docs`,children:`Skeleton`})}),` stands in for content that has not arrived yet.
It has shapes for headings, paragraphs, lists, images and tables.
A loading page keeps the silhouette of the real one instead of flashing empty.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Amsterdam Sans gains a black weight.`}),`
Light, extra bold and italic were already in the font files.
They had no `,(0,c.jsx)(t.a,{href:`/docs/brand-design-tokens-typography--docs`,children:`typography tokens`}),` of their own.
Now they do.
You can reach for them without hard-coding a value.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`adjusted`,children:`Adjusted`}),`
`,(0,c.jsx)(t.p,{children:`Nothing here needs a code change.
Some things do render or behave differently on markup you already have.
Give these a look after upgrading.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Compact Mode is a little tighter.`}),`
The `,(0,c.jsx)(t.code,{children:`xl`}),` and `,(0,c.jsx)(t.code,{children:`2xl`}),` `,(0,c.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:`space tokens`}),` drop by 4 and 8 pixels at every viewport width.
Anything spaced with them in `,(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-modes--docs`,children:`Compact Mode`}),` closes up.
That includes `,(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` gaps and vertical padding.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`The page behind a modal `,(0,c.jsx)(t.a,{href:`/docs/components-containers-dialog--docs`,children:`Dialog`}),` no longer scrolls.`]}),`
This needs the `,(0,c.jsx)(t.code,{children:`ams-body`}),` class on your `,(0,c.jsx)(t.code,{children:`<body>`}),`.
iOS Safari still needs JavaScript to guarantee it on touch.
Keep a scroll lock you wrote for that.
Drop one you wrote for anything else.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-containers-tabs--docs`,children:`Tabs`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` now clip vertical overflow.`]}),`
Check anything you render inside them that used to spill out.
A vertical Tab Navigation is unaffected.
Scrolling a wide Table or Tabs sideways no longer carries on into the page behind it.
The Tabs list now comes to rest on a whole tab instead of halfway through one.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-progress-list--docs`,children:`Progress List`}),` Step prefers `,(0,c.jsx)(t.code,{children:`expanded`}),` over `,(0,c.jsx)(t.code,{children:`collapsed`}),`.`]}),`
It prefers `,(0,c.jsx)(t.code,{children:`defaultExpanded`}),` over `,(0,c.jsx)(t.code,{children:`defaultCollapsed`}),`.
Both old properties keep working until at least 10 January 2027.
Migrate whenever it suits.
Mind the flip: `,(0,c.jsx)(t.code,{children:`collapsed={false}`}),` becomes `,(0,c.jsx)(t.code,{children:`expanded`}),`, not `,(0,c.jsx)(t.code,{children:`expanded={false}`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`improved`,children:`Improved`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Three components now take their expanded state from your application.`}),`
`,(0,c.jsx)(t.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-containers-progress-list--docs`,children:`Progress List`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` each managed that state internally.
That is fine until you need to open a section from a link elsewhere on the page, close the mega menu when the route changes, or remember what someone had expanded when they return.
Now you can pass that state in.
You are told when it changes.
Every one of these properties is optional.
Left alone, each component still manages itself exactly as before.`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Page Header drives the mega menu with `,(0,c.jsx)(t.code,{children:`open`}),`, `,(0,c.jsx)(t.code,{children:`defaultOpen`}),` and `,(0,c.jsx)(t.code,{children:`onOpenChange`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Progress List Step takes `,(0,c.jsx)(t.code,{children:`expanded`}),` and `,(0,c.jsx)(t.code,{children:`defaultExpanded`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Table of Contents Link takes `,(0,c.jsx)(t.code,{children:`expanded`}),`.
Its List can start branches open with `,(0,c.jsx)(t.code,{children:`defaultExpanded`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-accordion--docs`,children:`Accordion`}),` Section is not there yet.
The name `,(0,c.jsx)(t.code,{children:`expanded`}),` is still serving as the deprecated alias for `,(0,c.jsx)(t.code,{children:`defaultExpanded`}),` until October.
Its new `,(0,c.jsx)(t.code,{children:`onToggle`}),` reports every open and close in the meantime.`]}),`
`,(0,c.jsx)(t.p,{children:`Elsewhere:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-forms-date-picker--docs`,children:`Date Picker`}),` let you swap the navigation icons`]}),` on the previous and next month and year buttons.
Websites for the City of Amsterdam keep the defaults.
The properties are there for everyone else.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Directional `,(0,c.jsx)(t.a,{href:`/docs/brand-assets-icons--docs`,children:`icons`}),` mirror in right-to-left layouts.`]}),`
Arrows, chevrons and their kin are marked as directional.
An `,(0,c.jsx)(t.a,{href:`/docs/components-media-icon--docs`,children:`Icon`}),` points the right way in Arabic and other right-to-left contexts.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`fixed`,children:`Fixed`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`})}),` keeps its horizontal padding inside its maximum width.
It no longer grows past it.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`})}),` crops the logo a touch wider.
Sub-pixel rounding no longer shaves its edge.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/components-layout-breakout--docs`,children:`Breakout`})}),` applies the `,(0,c.jsx)(t.code,{children:`as`}),` property instead of leaking it into the DOM.
If you passed `,(0,c.jsx)(t.code,{children:`as`}),`, you now get the element you asked for.
Worth a look at your selectors and snapshots.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-forms-date-picker--docs`,children:`Date Picker`})]}),` localise day numerals.
They localise the separator between the boundaries of a range too.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`docs`,children:`Docs`}),`
`,(0,c.jsx)(t.p,{children:`New examples and guidelines only appear here.
Our documentation ships with Storybook rather than as a package.
This page is its changelog.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/pages-public-loading-page--docs`,children:`Loading Page`})}),` shows `,(0,c.jsx)(t.a,{href:`/docs/components-feedback-skeleton--docs`,children:`Skeleton`}),` in place.
A search waits.
Placeholders take the shape of what is coming.
Then the results arrive.
It also shows how to announce the wait to a screen reader.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/pages-public-handbook-page--docs`,children:`Handbook Page`})}),` is a new template for long reference documents split across many short pages.
Think of a personnel handbook, a policy, or a regulation.
A collapsible `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` sits beside the content and swaps pages in place.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-ai-assistance--docs`,children:`AI assistance`})}),` is a new guide.
Behind it sits a Model Context Protocol server.
Point your coding assistant at it.
It then builds with our real components and properties instead of guessing at them.
It covers React for now, and republishes with every release.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-responsive-design--docs`,children:`Responsive design`})}),` replaces the Breakpoints guide.
It now covers container queries alongside media queries.
That includes how to make an element a query container.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-localisation--docs`,children:`Localisation`})}),` replaces the Language guide.
`,(0,c.jsx)(t.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-forms-date-picker--docs`,children:`Date Picker`}),` now document how to localise them properly.
Native speakers checked the examples in German, French, Turkish and Arabic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Every compound component now names its parts.`}),`
The parts you can configure each come with an example and controls to try them.
Their properties are finally discoverable.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Icon overrides state the rule.`}),`
Where a component lets you swap an icon, the property now says plainly that websites for the City of Amsterdam use the default.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`’s Compact Mode dimensions were wrong.`]}),`
They are now correct.
Worth a look if you sized anything from that table.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`If you kept links to the Breakpoints or Language guides, point them at their new homes.`}),`
`,(0,c.jsx)(t.h3,{id:`upgrading`,children:`Upgrading`}),`
`,(0,c.jsx)(t.h4,{id:`do-you-need-to-change-anything`,children:`Do you need to change anything?`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`No.`}),`
All five packages move up by a minor version.
Nothing was removed.
Every new property is optional.
Existing markup keeps rendering.`]}),`
`,(0,c.jsx)(t.p,{children:`Two things to know:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Move the packages together.`}),`
React needs this exact version of CSS.
CSS needs these exact versions of Tokens and Assets.
Your package manager will flag a partial upgrade.
React Icons stands on its own.
If Dependabot offers you a separate pull request per package, group them.
The `,(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-release-policy--docs`,children:`release policy`}),` explains how.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Migrate `,(0,c.jsx)(t.code,{children:`collapsed`}),` and `,(0,c.jsx)(t.code,{children:`defaultCollapsed`}),` on `,(0,c.jsx)(t.a,{href:`/docs/components-containers-progress-list--docs`,children:`Progress List`}),` Step when it suits you.`]}),`
You have until at least 10 January 2027.
Each old property warns once in the console in the meantime.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`what-you-could-start-using`,children:`What you could start using`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Show the shape of a page while it loads, instead of an empty screen.
Reach for `,(0,c.jsx)(t.a,{href:`/docs/components-feedback-skeleton--docs`,children:`Skeleton`}),`, with the `,(0,c.jsx)(t.a,{href:`/docs/pages-public-loading-page--docs`,children:`Loading Page`}),` template as a worked example.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Open or close a mega menu, a step or a branch from anywhere in your application.
The controlled `,(0,c.jsx)(t.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`}),`, Progress List and `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` do that now.`]}),`
`,(0,c.jsx)(t.li,{children:`Set text in the light, extra bold or new black weight of Amsterdam Sans.`}),`
`,(0,c.jsxs)(t.li,{children:[`Offer `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-forms-date-picker--docs`,children:`Date Picker`}),` in another language, including right-to-left ones like Arabic.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Publish a long reference document, with the `,(0,c.jsx)(t.a,{href:`/docs/pages-public-handbook-page--docs`,children:`Handbook Page`}),` template.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Let your coding assistant read the design system directly, through the `,(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-ai-assistance--docs`,children:`AI assistance`}),` guide.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`bugs-you-may-have-run-into`,children:`Bugs you may have run into`}),`
`,(0,c.jsxs)(t.p,{children:[`Have you been working around a `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` that grew past its maximum width?
A shaved edge on the Page Header logo?
A `,(0,c.jsx)(t.code,{children:`<div as="section">`}),` where you asked for a `,(0,c.jsx)(t.code,{children:`<section>`}),`?
Day numerals that ignored the locale?
Those are all gone.
You can take the workarounds out.`]}),`
`,(0,c.jsx)(t.h2,{id:`23-june-2026`,children:`23 June 2026`}),`
`,(0,c.jsxs)(t.p,{children:[`Assets `,(0,c.jsx)(t.strong,{children:`2.4.0`}),`, CSS `,(0,c.jsx)(t.strong,{children:`4.2.0`}),`, React `,(0,c.jsx)(t.strong,{children:`4.2.0`}),`, React Icons `,(0,c.jsx)(t.strong,{children:`2.1.0`}),`, Tokens `,(0,c.jsx)(t.strong,{children:`4.1.0`}),` (`,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/pull/2712`,rel:`nofollow`,children:`changelogs`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`This release is bigger than most.
Calendar and Date Picker arrive together.
Container queries begin to replace window-width breakpoints.
Bold text gets lighter on every page.
Almost no code has to change, but Amsterdam Sans now ships as WOFF2 only and those files moved.
Read the upgrade notes before you bump.`}),`
`,(0,c.jsx)(t.h3,{id:`added-1`,children:`Added`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`})}),` shows a month at a time, for navigating to dates that have something behind them.
It is a set of links.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/components-forms-date-picker--docs`,children:`Date Picker`})}),` shows a month too, but for choosing a date or a range.
It sits inline on the page rather than in a form field.
When someone already knows the date and can type it, reach for `,(0,c.jsx)(t.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` instead.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/utilities-css-query-container--docs`,children:`Query Container`})}),` begins our move to container queries.
A component can now respond to the width of the box it sits in rather than the width of the window.
`,(0,c.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-containers-dialog--docs`,children:`Dialog`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` Cell establish a container on their own.
The utility class covers everything that sits outside them.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`26 new `,(0,c.jsx)(t.a,{href:`/docs/brand-assets-icons--docs`,children:`icons`})]}),`, among them a bridge, a litter bin, a bird house, zoom and rotate controls, and double chevrons for paging.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`adjusted-1`,children:`Adjusted`}),`
`,(0,c.jsx)(t.p,{children:`None of this needs a code change.
Some of it is cosmetic, and some can move your layout or your build, so give the list a look after upgrading.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bold text is lighter.`}),`
The heading and bold body-text `,(0,c.jsx)(t.a,{href:`/docs/brand-design-tokens-typography--docs`,children:`typography tokens`}),` moved from weight 800 to 700.
Every `,(0,c.jsx)(t.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),`, label and Description List term now renders in Amsterdam Sans Bold instead of Extra Bold.
So does the bold text our components draw for you, in `,(0,c.jsx)(t.a,{href:`/docs/components-feedback-badge--docs`,children:`Badge`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-text-blockquote--docs`,children:`Blockquote`}),`, Pagination, Table and Tabs.
Plain `,(0,c.jsx)(t.code,{children:`b`}),` and `,(0,c.jsx)(t.code,{children:`strong`}),` are untouched, because we never styled them.
If you followed our old advice and applied the bold token to them yourself, they get lighter too.
That advice is gone now.
Nothing to change in your code, but expect a visible difference on nearly every page.
Extra bold still ships, so it is there if you ask for it directly.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`The font files moved.`}),`
Amsterdam Sans ships as WOFF2 only now.
The EOT and WOFF files are gone, and the WOFF2 files moved from `,(0,c.jsx)(t.code,{children:`font/woff2/`}),` up into `,(0,c.jsx)(t.code,{children:`font/`}),`.
Our stylesheet keeps working.
A path you wrote yourself does not.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`}),` switches on its container.`]}),`
It used to go side by side above a window of 37.5rem.
It now does so above a container of 32rem.
Outside a query container it stays stacked at any width.
If yours went side by side and no longer does, wrap it in one.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Page, Dialog and Grid Cell became query containers.`}),`
That is what makes the above work, and it applies whether or not you write a container query.
Each of them is now the containing block for `,(0,c.jsx)(t.code,{children:`position: fixed`}),` and `,(0,c.jsx)(t.code,{children:`position: absolute`}),` children, and a new stacking context.
If a fixed banner, a sticky bar or a `,(0,c.jsx)(t.code,{children:`z-index`}),` inside one of them moved after upgrading, this is why.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`React properties are read-only.`}),`
TypeScript now flags code that mutates a properties object.
That is a compile error you may meet on upgrade, not a change at runtime.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`improved-1`,children:`Improved`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Every link component takes your router.`}),`
`,(0,c.jsx)(t.a,{href:`/docs/components-navigation-link--docs`,children:`Link`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-call-to-action-link--docs`,children:`Call to Action Link`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-breadcrumb--docs`,children:`Breadcrumb`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Link`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` all accept a `,(0,c.jsx)(t.code,{children:`linkComponent`}),` property.
Pass your router’s link and the component renders that instead of a plain anchor.
On a compound component the property sits on the link part, so `,(0,c.jsx)(t.code,{children:`Menu.Link`}),` and `,(0,c.jsx)(t.code,{children:`Breadcrumb.Link`}),` rather than `,(0,c.jsx)(t.code,{children:`Menu`}),` and `,(0,c.jsx)(t.code,{children:`Breadcrumb`}),`.
Page Header’s logo takes `,(0,c.jsx)(t.code,{children:`logoLinkComponent`}),`.
The `,(0,c.jsx)(t.code,{children:`<NextLink legacyBehavior passHref>`}),` wrapper is no longer needed.
The `,(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-routing-libraries--docs`,children:`routing libraries`}),` guide was rewritten around the new pattern.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Table of Contents can collapse.`}),`
Set `,(0,c.jsx)(t.code,{children:`collapsible`}),` on the root and every item with a nested list gets a toggle button.
Pre-open one with `,(0,c.jsx)(t.code,{children:`defaultExpanded`}),` on the Link.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-progress-list--docs`,children:`Progress List`}),` Step takes a `,(0,c.jsx)(t.code,{children:`collapsed`}),` property.`]}),`
Pass it and your application drives the step.
Leave it out and the step keeps managing itself.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-navigation-pagination--docs`,children:`Pagination`}),` is themeable.`]}),`
Thirty-two new tokens cover the hover, active and current states.
New elements cover the ellipsis and the previous and next links.
Links gained a visible active state.`]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-dialog--docs`,children:`Dialog`}),` draws better inner and outer borders in forced colours mode.`]})}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-forms-switch--docs`,children:`Switch`}),` has a themeable track border.`]}),`
Forced colours mode keeps that border visible even if you set the new token to zero.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`All five packages publish with provenance.`}),`
You can verify on npm that a release was built from our repository by our own pipeline.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`fixed-1`,children:`Fixed`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Deprecated tokens resolved to nothing.`}),`
Twenty-five of them carried the value `,(0,c.jsx)(t.code,{children:`initial`}),`, so reading one directly fell back to the property’s own default.
For the spacing tokens that meant zero.
This had been broken since 20 April.
Our own components were never affected, because they read through a fallback.
Yours were, if you used a deprecated token to line something up with the `,(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/components-containers-progress-list--docs`,children:`Progress List`})}),` shows a dashed connector for a collapsed current step with substeps.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/components-navigation-pagination--docs`,children:`Pagination`})}),` generates a unique fallback id for its accessible name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/components-media-logo--docs`,children:`Logo`})}),` stays clear of the clipping edge.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`}),` and Pagination use a stable default link.`]}),`
They used to define it inline, so React saw a new component on every render, remounted the links and dropped focus.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`docs-1`,children:`Docs`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Component documentation follows one model.`}),`
Every component page opens with the description, the main example and the controls, then a fixed set of headings.
Every page has inline navigation.
Guidance moved out of the packages’ README files and onto the pages themselves.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-spacing--docs`,children:`Spacing`})}),` is a new guide.
It works down from page layout to individual elements, and says which tool to reach for at each level.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-dialog--docs`,children:`Dialog`}),` explains where to put the initial focus.`]}),`
Focus lands on the close button by default, so people can read the Dialog before acting.
Move it with `,(0,c.jsx)(t.code,{children:`autoFocus`}),` when one element is clearly the first thing to do.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-accordion--docs`,children:`Accordion`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` guidance is sharper.`]}),`
Accordion now asks you to consider separate pages first.
Field Set is clearer about marking a group optional.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`upgrading-1`,children:`Upgrading`}),`
`,(0,c.jsx)(t.h4,{id:`do-you-need-to-change-anything-1`,children:`Do you need to change anything?`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Almost nothing.`}),`
All five packages take a minor bump.
Every new property is optional, and nothing was removed from the React or CSS API.
The one removal is in the assets package: the EOT and WOFF font files are gone.`]}),`
`,(0,c.jsx)(t.p,{children:`Five things to check, most silent first:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Anything positioned inside a Page, Dialog or Grid Cell.`}),`
These are query containers now, whether or not you write a container query.
That makes each of them the containing block for `,(0,c.jsx)(t.code,{children:`position: fixed`}),` and `,(0,c.jsx)(t.code,{children:`position: absolute`}),` children, and a new stacking context.
A fixed banner, a sticky bar or a `,(0,c.jsx)(t.code,{children:`z-index`}),` inside one of them may land somewhere new.
Nothing warns you about this, so look before you ship.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Font paths.`}),`
If you preload a font file, wrote your own `,(0,c.jsx)(t.code,{children:`@font-face`}),`, or copy `,(0,c.jsx)(t.code,{children:`font/woff2/`}),` in a build step, update the path.
The WOFF2 files now sit directly in `,(0,c.jsx)(t.code,{children:`font/`}),`.
If you pointed at the `,(0,c.jsx)(t.code,{children:`.woff`}),` or `,(0,c.jsx)(t.code,{children:`.eot`}),` files, drop those `,(0,c.jsx)(t.code,{children:`src`}),` entries, because we no longer publish those formats.
If you import our stylesheet, you are fine.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Visual snapshots.`}),`
Headings and bold text drop from weight 800 to 700, so nearly every snapshot will differ.
Re-baseline after upgrading.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`A Description List that used to go side by side.`}),`
If it does not sit inside a Page, Dialog or Grid Cell, wrap it in the Query Container utility.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`TypeScript.`}),`
Read-only properties may flag code that mutates a properties object.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`what-you-could-start-using-1`,children:`What you could start using`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Show a month of dates, either for navigation or in a form, with Calendar and Date Picker.`}),`
`,(0,c.jsx)(t.li,{children:`Let a component respond to the width of its own box instead of the window, with the Query Container utility.`}),`
`,(0,c.jsxs)(t.li,{children:[`Hand your router to any link component through `,(0,c.jsx)(t.code,{children:`linkComponent`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Collapse a long Table of Contents, or drive a Progress List Step from your application.`}),`
`,(0,c.jsx)(t.li,{children:`Theme Pagination to match your product.`}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`bugs-you-may-have-run-into-1`,children:`Bugs you may have run into`}),`
`,(0,c.jsx)(t.p,{children:`Have you been working around a deprecated token that resolved to nothing?
A Pagination link that lost focus as you clicked it?
A Logo with a clipped edge?
A Progress List connector that went solid where it should have been dashed?
Those are all gone.`}),`
`,(0,c.jsx)(t.h2,{id:`24-april-2026`,children:`24 April 2026`}),`
`,(0,c.jsxs)(t.p,{children:[`CSS `,(0,c.jsx)(t.strong,{children:`4.1.0`}),`, React `,(0,c.jsx)(t.strong,{children:`4.1.0`}),`, Tokens `,(0,c.jsx)(t.strong,{children:`4.0.1`}),` (`,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/pull/2590`,rel:`nofollow`,children:`changelogs`}),`).
Assets and React Icons did not move this time.`]}),`
`,(0,c.jsx)(t.p,{children:`A small release, four days after the 4.0.0 major.
Table learned to align the content of its cells.
Compact Mode finally gives the Grid narrower side padding than the spacious default.
Nothing breaks.`}),`
`,(0,c.jsx)(t.h3,{id:`adjusted-2`,children:`Adjusted`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),` header cells sit at the bottom.`]}),`
A cell used to align its content to the top.
Inside the table header it now aligns to the bottom.
A header that wraps onto two lines aligns with the single-line headers beside it.
Nothing to change in your code.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`improved-2`,children:`Improved`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),` cells can centre or right-align their content.`]}),`
Cell and Header Cell take an `,(0,c.jsx)(t.code,{children:`align`}),` property, set to `,(0,c.jsx)(t.code,{children:`center`}),` or `,(0,c.jsx)(t.code,{children:`end`}),`.
In CSS the modifiers are `,(0,c.jsx)(t.code,{children:`ams-table__cell--align-center`}),` and `,(0,c.jsx)(t.code,{children:`ams-table__cell--align-end`}),`, with a matching pair for a header cell.
A column of numbers can finally line up on the right.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`fixed-2`,children:`Fixed`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` padding in `,(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-modes--docs`,children:`Compact Mode`}),`.`]}),`
Compact Mode was supposed to give the Grid narrower horizontal padding than the spacious default.
It never did, at any width: it set only the base value, which matched the default, and left the wider windows to the default steps.
Compact Mode now has its own steps, `,(0,c.jsx)(t.code,{children:`m`}),` then `,(0,c.jsx)(t.code,{children:`l`}),` then `,(0,c.jsx)(t.code,{children:`xl`}),`, one below the spacious `,(0,c.jsx)(t.code,{children:`l`}),`, `,(0,c.jsx)(t.code,{children:`xl`}),`, `,(0,c.jsx)(t.code,{children:`2xl`}),` at every width.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` stays inside its container.`]}),`
An input with a `,(0,c.jsx)(t.code,{children:`size`}),` attribute, or a textarea with `,(0,c.jsx)(t.code,{children:`cols`}),`, used to stretch the Field Set past its container.
It no longer does.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`docs-2`,children:`Docs`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/pages-internal-table-page--docs`,children:`Table Page`}),` shows a full page of data.`]}),`
Two new examples: one pages through the rows with `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-pagination--docs`,children:`Pagination`}),`, the other sorts them with a `,(0,c.jsx)(t.a,{href:`/docs/components-forms-select--docs`,children:`Select`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-forms-password-input--docs`,children:`Password Input`}),` explain their size.`]}),`
The `,(0,c.jsx)(t.code,{children:`size`}),` attribute sets a preferred width, and the input will not grow past its container.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`upgrading-2`,children:`Upgrading`}),`
`,(0,c.jsx)(t.h4,{id:`do-you-need-to-change-anything-2`,children:`Do you need to change anything?`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`No.`}),`
CSS and React take a minor bump, Tokens a patch.`]}),`
`,(0,c.jsx)(t.p,{children:`Two things to know:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Leave Assets and React Icons where they are.`}),`
Neither changed.
CSS 4.1.0 asks for Tokens 4.0.1, which is in this release, and for Assets 2.3.0, which arrived with the 4.0.0 major four days earlier.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Look at any Table with a header.`}),`
Header text moves from the top of its cell to the bottom.
If every header fits on one line, you will not see a difference.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`what-you-could-start-using-2`,children:`What you could start using`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Right-align a column of numbers, or centre a column of icons, with `,(0,c.jsx)(t.code,{children:`align`}),` on a Table Cell.`]}),`
`,(0,c.jsx)(t.li,{children:`The Table Page examples, if you are building a page of data that pages or sorts.`}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`bugs-you-may-have-run-into-2`,children:`Bugs you may have run into`}),`
`,(0,c.jsxs)(t.p,{children:[`Have you been working around a Grid in Compact Mode whose side padding was as wide as the spacious default?
A Field Set stretched wide by an input with a `,(0,c.jsx)(t.code,{children:`size`}),` attribute?
Those are gone.`]}),`
`,(0,c.jsx)(t.h2,{id:`20-april-2026`,children:`20 April 2026`}),`
`,(0,c.jsxs)(t.p,{children:[`Assets `,(0,c.jsx)(t.strong,{children:`2.3.0`}),`, CSS `,(0,c.jsx)(t.strong,{children:`4.0.0`}),`, React `,(0,c.jsx)(t.strong,{children:`4.0.0`}),`, Tokens `,(0,c.jsx)(t.strong,{children:`4.0.0`}),` (`,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/pull/2567`,rel:`nofollow`,children:`changelogs`}),`).
React Icons did not move this time.`]}),`
`,(0,c.jsx)(t.p,{children:`This is a major release, our once-a-quarter chance to remove what we had deprecated and to change a few things that needed it.
Most of the breaking work is cleanup you were warned about.
A new component and a new utility arrive alongside it, and the Grid learns some new tricks.
Plan a little time for this one.`}),`
`,(0,c.jsx)(t.h3,{id:`changed`,children:`Changed`}),`
`,(0,c.jsx)(t.p,{children:`A major release is where breaking changes land.
The changelogs carry the full, exact list under their ‘Breaking changes’ heading.
Here is what it means for you.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Everything we had deprecated is now gone.`}),`
If you kept up with the deprecation warnings, you are already done.
If not, the renames are straightforward.
Page Heading becomes a `,(0,c.jsx)(t.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),`.
`,(0,c.jsx)(t.code,{children:`Heading`}),` size `,(0,c.jsx)(t.code,{children:`level-6`}),` becomes `,(0,c.jsx)(t.code,{children:`level-5`}),`.
`,(0,c.jsx)(t.a,{href:`/docs/components-media-icon--docs`,children:`Icon`}),` sizes `,(0,c.jsx)(t.code,{children:`heading-0`}),` and `,(0,c.jsx)(t.code,{children:`heading-6`}),` become `,(0,c.jsx)(t.code,{children:`heading-1`}),` and `,(0,c.jsx)(t.code,{children:`heading-5`}),`.
`,(0,c.jsx)(t.a,{href:`/docs/components-containers-accordion--docs`,children:`Accordion`}),` `,(0,c.jsx)(t.code,{children:`headingLevel={1}`}),` becomes `,(0,c.jsx)(t.code,{children:`2`}),`, `,(0,c.jsx)(t.code,{children:`3`}),` or `,(0,c.jsx)(t.code,{children:`4`}),`.
`,(0,c.jsx)(t.a,{href:`/docs/components-navigation-pagination--docs`,children:`Pagination`}),`’s `,(0,c.jsx)(t.code,{children:`visuallyHiddenLabel`}),` family becomes the `,(0,c.jsx)(t.code,{children:`accessibleName`}),` family.
The `,(0,c.jsx)(t.code,{children:`color`}),` property of `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` Link is gone with no replacement.
The CSS classes and design tokens behind all of these went too.
The changelogs list every name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-modes--docs`,children:`Compact Mode`}),` looks different.`]}),`
The page is now grey and `,(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` Cells are white with their own padding, so cells stand out instead of blending in.
Spacious Mode is unchanged, so if you do not use Compact Mode you see nothing.
A cell that should blend back into the grey takes a new `,(0,c.jsx)(t.code,{children:`transparent`}),` appearance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-progress-list--docs`,children:`Progress List`}),` steps no longer collapse on their own.`]}),`
Collapsing is opt-in now: add the `,(0,c.jsx)(t.code,{children:`collapsible`}),` property to the list to bring it back.
Without it, every step shows in full, with no toggle.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Icon’s `,(0,c.jsx)(t.code,{children:`svg`}),` property needs a real SVG.`]}),`
It used to accept almost anything.
It now expects an SVG element, an icon component, or a function that returns one.
TypeScript points out whatever no longer fits.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`added-2`,children:`Added`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`})}),` moves between the sections of a site, as a horizontal or vertical set of tabs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`})}),` is a new utility class that puts vertical space between flowing text elements, for content you do not lay out one element at a time.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`adjusted-3`,children:`Adjusted`}),`
`,(0,c.jsx)(t.p,{children:`None of this needs a code change.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` cells align to the top of their row.`]}),`
A short cell no longer stretches to match a tall neighbour.`]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),` captions have space beneath them.`]})}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-accordion--docs`,children:`Accordion`}),` Section renames `,(0,c.jsx)(t.code,{children:`expanded`}),` to `,(0,c.jsx)(t.code,{children:`defaultExpanded`}),`.`]}),`
The old name keeps working as a deprecated alias until at least 20 October 2026.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Viewport tokens gain a `,(0,c.jsx)(t.code,{children:`vi-`}),` prefix.`]}),`
The component tokens named `,(0,c.jsx)(t.code,{children:`*.medium.*`}),` and `,(0,c.jsx)(t.code,{children:`*.wide.*`}),` are now `,(0,c.jsx)(t.code,{children:`*.vi-medium.*`}),` and `,(0,c.jsx)(t.code,{children:`*.vi-wide.*`}),`.
The old names remain, deprecated, until at least 20 October 2026, so rename them when it suits.
Our components read the `,(0,c.jsx)(t.code,{children:`vi-`}),` names now, so if you overrode an old name, point that override at the `,(0,c.jsx)(t.code,{children:`vi-`}),` one.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`improved-3`,children:`Improved`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` cells can span rows.`]}),`
A `,(0,c.jsx)(t.code,{children:`rowSpan`}),` property lets one cell run alongside up to four rows of others.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Grid cells take a `,(0,c.jsx)(t.code,{children:`flush`}),` appearance`]}),` that removes their own padding while keeping the background.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`docs-3`,children:`Docs`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/pages-internal-navigation-page--docs`,children:`Navigation Page`})}),` is a new template for a large site split into sections, built with two levels of the new `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/pages-internal-table-page--docs`,children:`Table Page`})}),` shows a full page of sortable, filterable, paginated data.
Its lesson: keep the table’s state in the URL, so a view can be bookmarked and shared.
That is why the controls are links and forms rather than buttons.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`upgrading-3`,children:`Upgrading`}),`
`,(0,c.jsx)(t.h4,{id:`do-you-need-to-change-anything-3`,children:`Do you need to change anything?`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Yes, this is a major.`}),`
Work through it in this order:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Clear the deprecation warnings first.`}),`
Upgrade to the last 3.x release, fix everything it warns about, then move to 4.0.0.
If your console and build were already clean, the removals here touch nothing.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Look at your Compact Mode layouts.`}),`
Cells are white on a grey page now.
Give the `,(0,c.jsx)(t.code,{children:`transparent`}),` appearance to any that should blend back in.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Add `,(0,c.jsx)(t.code,{children:`collapsible`}),` to a `,(0,c.jsx)(t.a,{href:`/docs/components-containers-progress-list--docs`,children:`Progress List`})]}),` if you relied on its steps collapsing.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Check any custom `,(0,c.jsx)(t.code,{children:`svg`}),` you passed to `,(0,c.jsx)(t.a,{href:`/docs/components-media-icon--docs`,children:`Icon`}),`.`]}),`
TypeScript flags whatever no longer fits.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Two deprecations can wait, both until at least 20 October 2026: `,(0,c.jsx)(t.a,{href:`/docs/components-containers-accordion--docs`,children:`Accordion`}),`’s `,(0,c.jsx)(t.code,{children:`expanded`}),` becomes `,(0,c.jsx)(t.code,{children:`defaultExpanded`}),`, and the `,(0,c.jsx)(t.code,{children:`*.medium.*`}),` and `,(0,c.jsx)(t.code,{children:`*.wide.*`}),` tokens take their `,(0,c.jsx)(t.code,{children:`vi-`}),` names.`]}),`
`,(0,c.jsx)(t.h4,{id:`what-you-could-start-using-3`,children:`What you could start using`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),`, for a site organised into sections.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The `,(0,c.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` utility, for spacing a block of flowing text.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` cells that span rows, or drop their padding with the flush appearance.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};