import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-D0dbW7qz.js";import{a as p,i as m,n as h,r as g,t as _}from"./Card.stories-jCdNf7-v.js";import{n as v,r as y}from"./CardHeading.stories-BSqKQFGk.js";import{n as b,r as x}from"./CardHeadingGroup.stories-CIDhtmUm.js";import{n as S,r as C}from"./CardImage.stories-CzEuA8Ql.js";import{n as w,r as T}from"./CardLink.stories-DBbgAloB.js";var E,D;function O(){return(O=e((()=>{E={card:{heading:{"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"heading-group":{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},horizontal:{"column-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"grid-template-columns":{$value:`calc((4 * 100% - 5 * {ams.grid.column-gap}) / 9) minmax(0, 1fr)`,$description:`The image covers the first 4 columns if the Card spans exactly 9. That seems to be a common layout for horizontal Cards, and it allows them to visually align with vertical ones. In other contexts, the image scales proportionally.`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},image:{"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},D={ams:E}})))()}function k(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[`
`,`
`,`
`,`
`,(0,j.jsx)(s,{of:_}),`
`,(0,j.jsx)(o,{}),`
`,(0,j.jsx)(t,{of:_}),`
`,(0,j.jsx)(n,{}),`
`,(0,j.jsx)(r.p,{children:`This component has no props to configure.`}),`
`,(0,j.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,j.jsx)(r.h3,{id:`image`,children:`Image`}),`
`,(0,j.jsxs)(r.p,{children:[`The image of the Card.
It accepts all props of a regular `,(0,j.jsx)(r.a,{href:`/docs/components-media-image--docs`,children:`Image`}),`, such as `,(0,j.jsx)(r.code,{children:`aspectRatio`}),` or a set of image sources.
Only use decorative images with `,(0,j.jsx)(r.code,{children:`alt=""`}),` here.
The heading provides screen reader users with enough context.`]}),`
`,(0,j.jsx)(a,{of:S}),`
`,(0,j.jsx)(i,{of:S}),`
`,(0,j.jsx)(r.h3,{id:`heading`,children:`Heading`}),`
`,(0,j.jsxs)(r.p,{children:[`Contains the name and link of the Card.
Accepts all props of a regular `,(0,j.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),`.
Set its `,(0,j.jsx)(r.code,{children:`level`}),` to fit the document outline.`]}),`
`,(0,j.jsx)(a,{of:v}),`
`,(0,j.jsx)(i,{of:v}),`
`,(0,j.jsx)(r.h3,{id:`heading-group`,children:`Heading Group`}),`
`,(0,j.jsxs)(r.p,{children:[`Displays a `,(0,j.jsx)(r.code,{children:`tagline`}),` above the heading.`]}),`
`,(0,j.jsx)(a,{of:b}),`
`,(0,j.jsx)(i,{of:b}),`
`,(0,j.jsx)(r.h3,{id:`content`,children:`Content`}),`
`,(0,j.jsxs)(r.p,{children:[`Groups everything in a Card that is not its image.
Add it whenever you want to allow switching to a `,(0,j.jsx)(r.a,{href:`#horizontal-layout`,children:`horizontal layout`}),`.`]}),`
`,(0,j.jsx)(r.h3,{id:`link`,children:`Link`}),`
`,(0,j.jsxs)(r.p,{children:[`Makes the entire Card clickable.
Place it inside the Heading.
Set `,(0,j.jsx)(r.code,{children:`linkComponent`}),` to integrate with a routing library.`]}),`
`,(0,j.jsx)(a,{of:w}),`
`,(0,j.jsx)(i,{of:w}),`
`,(0,j.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,j.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,j.jsx)(r.p,{children:`A Card needs more content than just a title.
Add a short text and optionally an image and metadata.`}),`
`,(0,j.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,j.jsxs)(r.p,{children:[`This component is not the best option if the target content does not represent an article-like page.
In that case, use a Heading, a Paragraph and a `,(0,j.jsx)(r.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),` instead.`]}),`
`,(0,j.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,j.jsxs)(r.p,{children:[`Card Heading requires a `,(0,j.jsx)(r.code,{children:`level`}),`, because there is no sensible default.
The guidelines for regular `,(0,j.jsx)(r.a,{href:`/docs/components-navigation-link--docs`,children:`links`}),` and `,(0,j.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`headings`}),` apply.`]}),`
`,(0,j.jsx)(r.p,{children:`Give a Card one link and no more.
The Card Link covers the whole Card to make it clickable, so a second link inside it would sit underneath and be impossible to click.`}),`
`,(0,j.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,j.jsxs)(r.p,{children:[`Place the text in a regular `,(0,j.jsx)(r.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),`.
Use a small Paragraph for a publication date.`]}),`
`,(0,j.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,j.jsx)(r.h3,{id:`with-tagline`,children:`With tagline`}),`
`,(0,j.jsxs)(r.p,{children:[`A Card can display metadata in a tagline above the heading, like a category or content type.
Wrap the Heading in a Heading Group and set its `,(0,j.jsx)(r.code,{children:`tagline`}),` property.
This ensures screen readers read out the heading before the metadata.`]}),`
`,(0,j.jsx)(a,{of:m}),`
`,(0,j.jsx)(r.h3,{id:`horizontal-layout`,children:`Horizontal layout`}),`
`,(0,j.jsxs)(r.p,{children:[`A Card can place content beside the image once there is room for it.
This follows the width of the nearest `,(0,j.jsx)(r.a,{href:`/docs/utilities-css-query-container--docs`,children:`query container`}),`, so the same Card is horizontal in a wide Grid Cell and vertical in a narrow one, without any change to the markup.
A Card that has an image but no Content subcomponent stays vertical.`]}),`
`,(0,j.jsx)(r.p,{children:`If the Card spans 9 columns of the Grid, the image covers 4 of them.
In other contexts, the image scales proportionally.`}),`
`,(0,j.jsx)(r.p,{children:`The example below is vertical in a narrow window.`}),`
`,(0,j.jsx)(a,{of:h}),`
`,(0,j.jsx)(r.h3,{id:`top-tasks`,children:`Top tasks`}),`
`,(0,j.jsxs)(r.p,{children:[`A set of cards without images can present links to frequently accessed interactions.
A short title and description are enough to guide the user to the page they need.
Position 4 to 8 tasks on a `,(0,j.jsx)(r.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`; left-align them and do not skip cells.
For a group of links without a description, use a `,(0,j.jsx)(r.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),` instead.`]}),`
`,(0,j.jsx)(a,{of:g}),`
`,(0,j.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,j.jsx)(r.p,{children:`The mandatory title of a Card is a link within a Heading.
The link is made active across the entire area of the Card.`}),`
`,(0,j.jsx)(r.p,{children:`A Card that pairs an image with a Content lays out horizontally once its container is wide enough, and vertically below that.`}),`
`,(0,j.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,j.jsx)(r.p,{children:`A Card has no border, no background, and no padding.
It is a stack of parts with white space between them, so a row of Cards reads as a set of articles rather than as a row of boxes.`}),`
`,(0,j.jsx)(r.p,{children:`The whole Card is made clickable by stretching an invisible layer from the link across it.
Only the title is the link, and everything else stays plain content, so the target grows without the accessible name growing with it.`}),`
`,(0,j.jsx)(r.p,{children:`The focus ring is drawn around the entire Card instead of around the title alone, and the link’s own ring is switched off.
Browsers that cannot express that condition get neither rule, so they still show the ordinary ring on the title rather than nothing at all.`}),`
`,(0,j.jsx)(r.p,{children:`In a Heading Group the tagline is written after the heading and displayed above it.
The reading order and the visual order differ on purpose, which is what lets the metadata sit on top while the heading is still what gets read first.`}),`
`,(0,j.jsx)(r.p,{children:`Whether a Card is horizontal follows the width of its container rather than the width of the window.
The same Card is one row in a list of results and one card in a row of three, and which of the two it should be depends on the space it is given, not on the size of the screen.`}),`
`,(0,j.jsx)(r.p,{children:`The image of a horizontal Card measures 4 of the 9 columns it spans, which is the width of a vertical Card beside it, and it keeps its aspect ratio rather than stretching to the height of the text beside it.
Both choices exist so that the image is the same size in either direction: an index page that opens with a row of vertical Cards above a list of horizontal ones then has one left edge and one image width running down it.
Stretching the image instead would crop each one differently, according to how far its heading happened to wrap.`}),`
`,(0,j.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,j.jsx)(r.p,{children:`Visually, Card Heading has the size of a level 3 Heading by default.
Screen reader users can navigate by heading or by link; a Card supports both because its title is a heading that contains a link.
A screen reader reads the title first, then the rest of the content.`}),`
`,(0,j.jsx)(r.p,{children:`The layer that makes the Card clickable is empty and carries no text, so it adds nothing to the name of the link and is not announced.
The rest of the Card stays ordinary content: a paragraph inside it is read as a paragraph, not as part of the link.`}),`
`,(0,j.jsxs)(r.p,{children:[`An image in a Card is decoration, which is why the examples pass an empty `,(0,j.jsx)(r.code,{children:`alt`}),`.
A description there would be read when browsing the page but skipped when moving between links, so it would reach some readers and not others.`]}),`
`,(0,j.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,j.jsxs)(r.ul,{children:[`
`,(0,j.jsxs)(r.li,{children:[(0,j.jsx)(r.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),` – for a single link to a follow-up page when a Card is too much.`]}),`
`,(0,j.jsxs)(r.li,{children:[(0,j.jsx)(r.a,{href:`/docs/components-feedback-skeleton--docs`,children:`Skeleton`}),` – can increase the perceived performance of loading the Card’s content.`]}),`
`,(0,j.jsxs)(r.li,{children:[(0,j.jsx)(r.a,{href:`/docs/docs-developer-guide-routing-libraries--docs`,children:`Routing libraries`}),` – how to integrate links with external routing libraries.`]}),`
`]}),`
`,(0,j.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,j.jsx)(f,{tokens:D})]})}function A(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=c(),u(),r(),d(),O(),p(),y(),x(),C(),T()})))()}M();export{A as default};