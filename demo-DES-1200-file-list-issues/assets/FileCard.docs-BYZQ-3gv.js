import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-C-B6_PJx.js";import{t as c}from"./jsx-runtime-BG4KOiPz.js";import{i as l,r as u}from"./react-Bg8UoiFE.js";import{n as d,t as f}from"./DesignTokensTable-Bc21SNYQ.js";import{a as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./FileCard.stories-bzkuBJPM.js";var b,x;function S(){return(S=e((()=>{b={"file-card":{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},actions:{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},metadata:{color:{$value:`{ams.color.text.secondary}`,$extensions:{"nl.amsterdam.type":`color`}}},info:{"flex-basis":{$value:`12rem`,$description:`The width the name and metadata need beside the preview. When the actions do not fit beside them as well, the actions move below.`,$extensions:{"nl.amsterdam.type":`dimension`}}},image:{"aspect-ratio":{$value:`{ams.aspect-ratio.1-1}`,$extensions:{"nl.amsterdam.type":`aspectRatio`}}},preview:{"flex-basis":{$value:`clamp(2.5rem, 10vw, 5rem)`,$extensions:{"nl.amsterdam.type":`dimension`}}}}},x={ams:b}})))()}function C(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...l(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(s,{of:y}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(t,{of:y}),`
`,(0,T.jsx)(n,{}),`
`,(0,T.jsx)(i,{}),`
`,(0,T.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,T.jsx)(r.p,{children:`Use a File Card for one file that someone selected with a File Input.
Use it for an attachment to a case, a request, or a decision.`}),`
`,(0,T.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,T.jsxs)(r.p,{children:[`Do not use a File Card to link to a web page or to other content that is not a file.
Use a `,(0,T.jsx)(r.a,{href:`/docs/components-navigation-link--docs`,children:`Link`}),`, a `,(0,T.jsx)(r.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),` or a `,(0,T.jsx)(r.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),` for that.`]}),`
`,(0,T.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,T.jsxs)(r.p,{children:[`Pass the name, and the size and type when they are known.
A File Card takes these as separate values rather than a `,(0,T.jsx)(r.code,{children:`File`}),` object, so it works just as well for a file that already sits on a server and has no `,(0,T.jsx)(r.code,{children:`File`}),` object at all.`]}),`
`,(0,T.jsx)(r.pre,{children:(0,T.jsx)(r.code,{className:`language-tsx`,children:`<FileCard name="besluit.pdf" onDelete={remove} size={1536000} type="application/pdf" />
`})}),`
`,(0,T.jsxs)(r.p,{children:[(0,T.jsx)(r.code,{children:`formatMetadataText`}),` returns the whole line below the name, brackets and separator included, so the order of the parts and the punctuation are yours to change.
It receives the size and the type, and the default assumes the type is a media type such as `,(0,T.jsx)(r.code,{children:`application/pdf`}),`.
When all you have is an extension, pass a function that formats it:`]}),`
`,(0,T.jsx)(r.pre,{children:(0,T.jsx)(r.code,{className:`language-tsx`,children:`<FileCard
  formatMetadataText={({ size, type }) => {
    const parts = [type, size !== undefined ? \`\${Math.round(size / 1000)} kB\` : undefined].filter(
      (part): part is string => part !== undefined,
    );

    return parts.length > 0 ? \`(\${parts.join(", ")})\` : "";
  }}
  name="besluit.pdf"
  size={1536000}
  type="pdf"
/>
`})}),`
`,(0,T.jsxs)(r.p,{children:[`Pass other actions, such as a download link, to `,(0,T.jsx)(r.code,{children:`actions`}),`.
Pass `,(0,T.jsx)(r.code,{children:`onDelete`}),` to add the built-in delete button.
It has no icon, and it always comes after the other actions.
When you ask for confirmation first, remove the file after the confirmation has closed and returned focus to the delete button.`]}),`
`,(0,T.jsxs)(r.p,{children:[`Every action needs the file name in its accessible name, so that someone who lists the buttons on a page can tell them apart.
The delete button adds the name for you, so leave it out of `,(0,T.jsx)(r.code,{children:`deleteButtonLabel`}),`.
In your own actions, add it with `,(0,T.jsx)(r.code,{children:`ams-visually-hidden`}),`.
A delete button of your own in `,(0,T.jsx)(r.code,{children:`actions`}),` needs the name from you too, and it does not move focus after a delete.`]}),`
`,(0,T.jsx)(r.p,{children:`Move focus yourself to a nearby target, such as the file input or the heading of the section, when you remove a File Card that stands alone, the last File Card with a built-in delete button in its list, or the whole list.
When that target does not make the removal clear, announce it with a status message.`}),`
`,(0,T.jsxs)(r.p,{children:[`Pass `,(0,T.jsx)(r.code,{children:`previewUrl`}),` to show a thumbnail.
The component never creates that address, so whoever creates an object URL also releases it.`]}),`
`,(0,T.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(r.h3,{id:`with-a-delete-button`,children:`With a delete button`}),`
`,(0,T.jsx)(r.p,{children:`The built-in delete button includes the file name in its accessible name.`}),`
`,(0,T.jsx)(a,{of:m}),`
`,(0,T.jsx)(r.h3,{id:`with-custom-actions`,children:`With custom actions`}),`
`,(0,T.jsx)(r.p,{children:`Use custom actions for tasks such as downloading a file.`}),`
`,(0,T.jsx)(a,{of:_}),`
`,(0,T.jsx)(r.h3,{id:`without-actions`,children:`Without actions`}),`
`,(0,T.jsxs)(r.p,{children:[`Leave out `,(0,T.jsx)(r.code,{children:`actions`}),` and `,(0,T.jsx)(r.code,{children:`onDelete`}),` to show a file that the user cannot change.`]}),`
`,(0,T.jsx)(a,{of:g}),`
`,(0,T.jsx)(r.h3,{id:`with-a-preview`,children:`With a preview`}),`
`,(0,T.jsxs)(r.p,{children:[`Pass `,(0,T.jsx)(r.code,{children:`previewUrl`}),` to show a thumbnail of an image instead of the generic document icon.`]}),`
`,(0,T.jsx)(a,{of:p}),`
`,(0,T.jsx)(r.h3,{id:`translated-text`,children:`Translated text`}),`
`,(0,T.jsxs)(r.p,{children:[`The component displays its text in Dutch by default.
Pass `,(0,T.jsx)(r.code,{children:`formatFileMetadataTextEn`}),`, or a function of your own, to `,(0,T.jsx)(r.code,{children:`formatMetadataText`}),`, and the matching label to `,(0,T.jsx)(r.code,{children:`deleteButtonLabel`}),`.
Set `,(0,T.jsx)(r.code,{children:`lang`}),` on a File Card whose language differs from the page’s.
See the `,(0,T.jsx)(r.a,{href:`/docs/docs-guidelines-localisation--docs`,children:`Localisation guide`}),` for more on this.`]}),`
`,(0,T.jsx)(a,{of:h}),`
`,(0,T.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,T.jsx)(r.p,{children:`A name too long for its row wraps onto the next line, also when it has no spaces.
When the card is too narrow for the name and the actions side by side, the actions move to a line of their own below.`}),`
`,(0,T.jsx)(r.p,{children:`When a File Card with the focused delete button is removed from a list, focus moves to the delete button of the next file, or of the previous one when it was the last file in the list.
Each File Card must sit in its own list item for this focus move to work.
It moves when the File Card is removed, not when the delete button is clicked, so a cancelled confirmation or a failed delete leaves focus where it was.`}),`
`,(0,T.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,T.jsx)(r.p,{children:`A File Card places a preview of consistent width, the name with its metadata below it, and the actions side by side.
The preview column is the same width whether it holds a thumbnail or the generic document icon, so the names line up down a list.
A thumbnail is shown square, cropped to fill it, whatever the shape of the image.`}),`
`,(0,T.jsxs)(r.p,{children:[`A long name wraps rather than being cut off with an ellipsis.
The name is what someone recognises the file by, and names that end in a date or a reference – `,(0,T.jsx)(r.code,{children:`aanvraag-2026-03-11-definitief.pdf`}),` – lose exactly the part that tells them apart when the end is dropped.
Rows are no longer all the same height as a result, which is the price of a name that stays readable.
Automatic hyphenation is switched off for the name, because a hyphen added at a line break looks like part of the file name.`]}),`
`,(0,T.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsxs)(r.p,{children:[`The thumbnail is decorative and carries an empty `,(0,T.jsx)(r.code,{children:`alt`}),`.
The component cannot know what the image shows, and the name is already beside it, so giving the image that name would only have it announced twice.`]}),`
`,(0,T.jsxs)(r.p,{children:[`When `,(0,T.jsx)(r.code,{children:`onDelete`}),` is used, the delete button reads ‘Verwijder’ on screen and ‘Verwijder’ followed by the name of the file to a screen reader.
Repeating the name on screen would put it twice in every row and make the buttons wide and untidy; leaving it out of the accessible name would leave someone reviewing the buttons of a page out of context with the same word for each of them.
Change `,(0,T.jsx)(r.code,{children:`deleteButtonLabel`}),` to change both, as the visible label stays the first part of the accessible name.`]}),`
`,(0,T.jsx)(r.p,{children:`There is no live region.
Moving focus to a neighbouring button already makes the change noticeable, and announcing it on top of that reads as noise rather than as help.
When you move focus to a target of your own instead, the status message described under ‘How to use’ takes its place.`}),`
`,(0,T.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(r.ul,{children:[`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-forms-file-input--docs`,children:`File Input`}),` – lets the user select the files to display.`]}),`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`https://www.nldesignsystem.nl/file/`,rel:`nofollow`,children:`File in NL Design System`}),` – the same component under the name that other government organisations might use.`]}),`
`]}),`
`,(0,T.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(f,{tokens:x})]})}function w(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=c(),u(),r(),d(),S(),v()})))()}E();export{w as default};