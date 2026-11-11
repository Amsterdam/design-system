import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,f as r,i,m as a,n as o,u as s}from"./blocks-CFoVnZbo.js";import{t as c}from"./jsx-runtime-BG4KOiPz.js";import{i as l,r as u}from"./react-Bg8UoiFE.js";import{n as d,t as f}from"./DesignTokensTable-nojm6rmv.js";import{a as p,c as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./FileCard.stories-VSHn7Xkn.js";var x,S;function C(){return(C=e((()=>{x={"file-card":{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},actions:{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},metadata:{color:{$value:`{ams.color.text.secondary}`,$extensions:{"nl.amsterdam.type":`color`}}},info:{"flex-basis":{$value:`12rem`,$description:`The width the name and metadata need beside the preview. When the actions do not fit beside them as well, the actions move below.`,$extensions:{"nl.amsterdam.type":`dimension`}}},image:{"aspect-ratio":{$value:`{ams.aspect-ratio.1-1}`,$extensions:{"nl.amsterdam.type":`aspectRatio`}}},preview:{"flex-basis":{$value:`clamp(2.5rem, 10vw, 5rem)`,$extensions:{"nl.amsterdam.type":`dimension`}}}}},S={ams:x}})))()}function w(e){let a={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...l(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(s,{of:b}),`
`,(0,E.jsx)(r,{}),`
`,(0,E.jsx)(t,{of:b}),`
`,(0,E.jsx)(n,{}),`
`,(0,E.jsx)(i,{}),`
`,(0,E.jsx)(a.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,E.jsx)(a.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,E.jsx)(a.p,{children:`Use a File Card for one file that someone selected with a File Input.
Use it for an attachment to a case, a request, or a decision.`}),`
`,(0,E.jsx)(a.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,E.jsxs)(a.p,{children:[`Do not use a File Card to link to a web page or to other content that is not a file.
Use a `,(0,E.jsx)(a.a,{href:`/docs/components-navigation-link--docs`,children:`Link`}),`, a `,(0,E.jsx)(a.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),` or a `,(0,E.jsx)(a.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),` for that.`]}),`
`,(0,E.jsx)(a.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,E.jsxs)(a.p,{children:[`Pass the name, and the size and type when they are known.
A File Card takes these as separate values rather than a `,(0,E.jsx)(a.code,{children:`File`}),` object, so it works just as well for a file that already sits on a server and has no `,(0,E.jsx)(a.code,{children:`File`}),` object at all.
Pass a name that people recognise: the File Card displays it, and its delete button reads it out.
When the stored name is technical, such as a hash, pass a readable one instead.`]}),`
`,(0,E.jsx)(a.pre,{children:(0,E.jsx)(a.code,{className:`language-tsx`,children:`<FileCard name="besluit.pdf" onDelete={remove} size={1536000} type="application/pdf" />
`})}),`
`,(0,E.jsxs)(a.p,{children:[(0,E.jsx)(a.code,{children:`formatMetadataText`}),` returns the whole line below the name, brackets and separator included, so the order of the parts and the punctuation are yours to change.
It receives the size and the type, and the default assumes the type is a media type such as `,(0,E.jsx)(a.code,{children:`application/pdf`}),`.
When all you have is an extension, pass a function that formats it:`]}),`
`,(0,E.jsx)(a.pre,{children:(0,E.jsx)(a.code,{className:`language-tsx`,children:`<FileCard
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
`,(0,E.jsxs)(a.p,{children:[`Pass other actions, such as a download link, to `,(0,E.jsx)(a.code,{children:`actions`}),`.
Pass `,(0,E.jsx)(a.code,{children:`onDelete`}),` to add the built-in delete button.
It has no icon, and it always comes after the other actions.
When you ask for confirmation first, remove the file after the confirmation has closed and returned focus to the delete button.`]}),`
`,(0,E.jsxs)(a.p,{children:[`Every action needs the file name in its accessible name, so that someone who lists the buttons on a page can tell them apart.
The delete button adds the name for you, so leave it out of `,(0,E.jsx)(a.code,{children:`deleteButtonLabel`}),`.
In your own actions, add it with `,(0,E.jsx)(a.code,{children:`ams-visually-hidden`}),`.
A delete button of your own in `,(0,E.jsx)(a.code,{children:`actions`}),` needs the name from you too, and it does not move focus after a delete.`]}),`
`,(0,E.jsx)(a.p,{children:`Move focus yourself when you remove a File Card that stands alone, the last File Card with a built-in delete button in its list, or the whole list.
Move it to a message that states the file was removed, or to a nearby heading while a status message announces the removal.
Do not move it to the file input, because some browsers go on announcing the file that was removed.`}),`
`,(0,E.jsxs)(a.p,{children:[`Pass `,(0,E.jsx)(a.code,{children:`previewUrl`}),` to show a thumbnail.
The component never creates that address, so whoever creates an object URL also releases it.`]}),`
`,(0,E.jsx)(a.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(a.h3,{id:`with-a-delete-button`,children:`With a delete button`}),`
`,(0,E.jsx)(a.p,{children:`The built-in delete button includes the file name in its accessible name.`}),`
`,(0,E.jsx)(o,{of:p}),`
`,(0,E.jsx)(a.h3,{id:`with-custom-actions`,children:`With custom actions`}),`
`,(0,E.jsx)(a.p,{children:`Use custom actions for tasks such as downloading a file.`}),`
`,(0,E.jsx)(o,{of:h}),`
`,(0,E.jsx)(a.h3,{id:`without-actions`,children:`Without actions`}),`
`,(0,E.jsxs)(a.p,{children:[`Leave out `,(0,E.jsx)(a.code,{children:`actions`}),` and `,(0,E.jsx)(a.code,{children:`onDelete`}),` to show a file that the user cannot change.`]}),`
`,(0,E.jsx)(o,{of:y}),`
`,(0,E.jsx)(a.h3,{id:`with-a-preview`,children:`With a preview`}),`
`,(0,E.jsxs)(a.p,{children:[`Pass `,(0,E.jsx)(a.code,{children:`previewUrl`}),` to show a thumbnail of an image instead of the generic document icon.`]}),`
`,(0,E.jsx)(o,{of:_}),`
`,(0,E.jsx)(a.h3,{id:`in-an-unordered-list`,children:`In an Unordered List`}),`
`,(0,E.jsxs)(a.p,{children:[`Put several File Cards in an `,(0,E.jsx)(a.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),`, each in its own item, so that they are announced as a list and focus moves to the next file after a delete.`]}),`
`,(0,E.jsx)(o,{of:g}),`
`,(0,E.jsx)(a.h3,{id:`translated-text`,children:`Translated text`}),`
`,(0,E.jsxs)(a.p,{children:[`The component displays its text in Dutch by default.
Pass `,(0,E.jsx)(a.code,{children:`formatFileMetadataTextEn`}),`, or a function of your own, to `,(0,E.jsx)(a.code,{children:`formatMetadataText`}),`, and the matching label to `,(0,E.jsx)(a.code,{children:`deleteButtonLabel`}),`.
Set `,(0,E.jsx)(a.code,{children:`lang`}),` on a File Card whose language differs from the page’s.
See the `,(0,E.jsx)(a.a,{href:`/docs/docs-guidelines-localisation--docs`,children:`Localisation guide`}),` for more on this.`]}),`
`,(0,E.jsx)(o,{of:v}),`
`,(0,E.jsx)(a.h2,{id:`features`,children:`Features`}),`
`,(0,E.jsx)(a.p,{children:`A name too long for its row wraps onto the next line, also when it has no spaces.
When the card is too narrow for the name and the actions side by side, the actions move to a line of their own below.`}),`
`,(0,E.jsx)(a.p,{children:`When a File Card with the focused delete button is removed from a list, focus moves to the delete button of the next file, or of the previous one when it was the last file in the list.
Each File Card must sit in its own list item for this focus move to work.
It moves when the File Card is removed, not when the delete button is clicked, so a cancelled confirmation or a failed delete leaves focus where it was.`}),`
`,(0,E.jsx)(a.h2,{id:`design`,children:`Design`}),`
`,(0,E.jsx)(a.p,{children:`A File Card places a preview of consistent width, the name with its metadata below it, and the actions side by side.
The preview column is the same width whether it holds a thumbnail or the generic document icon, so the names line up down a list.
A thumbnail is shown square, cropped to fill it, whatever the shape of the image.`}),`
`,(0,E.jsxs)(a.p,{children:[`A long name wraps rather than being cut off with an ellipsis.
The name is what someone recognises the file by, and names that end in a date or a reference – `,(0,E.jsx)(a.code,{children:`aanvraag-2026-03-11-definitief.pdf`}),` – lose exactly the part that tells them apart when the end is dropped.
Rows are no longer all the same height as a result, which is the price of a name that stays readable.
Automatic hyphenation is switched off for the name, because a hyphen added at a line break looks like part of the file name.`]}),`
`,(0,E.jsx)(a.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,E.jsxs)(a.p,{children:[`The thumbnail is decorative and carries an empty `,(0,E.jsx)(a.code,{children:`alt`}),`.
The component cannot know what the image shows, and the name is already beside it, so giving the image that name would only have it announced twice.`]}),`
`,(0,E.jsxs)(a.p,{children:[`When `,(0,E.jsx)(a.code,{children:`onDelete`}),` is used, the delete button reads ‘Verwijder’ on screen and ‘Verwijder’ followed by the name of the file to a screen reader.
Repeating the name on screen would put it twice in every row and make the buttons wide and untidy; leaving it out of the accessible name would leave someone reviewing the buttons of a page out of context with the same word for each of them.
Change `,(0,E.jsx)(a.code,{children:`deleteButtonLabel`}),` to change both, as the visible label stays the first part of the accessible name.`]}),`
`,(0,E.jsx)(a.p,{children:`There is no live region.
Moving focus to a neighbouring button already makes the change noticeable, and announcing it on top of that reads as noise rather than as help.`}),`
`,(0,E.jsx)(a.h2,{id:`see-also`,children:`See also`}),`
`,(0,E.jsxs)(a.ul,{children:[`
`,(0,E.jsxs)(a.li,{children:[(0,E.jsx)(a.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` – groups several File Cards as a list without showing markers.`]}),`
`,(0,E.jsxs)(a.li,{children:[(0,E.jsx)(a.a,{href:`/docs/components-forms-file-input--docs`,children:`File Input`}),` – lets the user select the files to display.`]}),`
`,(0,E.jsxs)(a.li,{children:[(0,E.jsx)(a.a,{href:`https://www.nldesignsystem.nl/file/`,rel:`nofollow`,children:`File in NL Design System`}),` – the same component under the name that other government organisations might use.`]}),`
`]}),`
`,(0,E.jsx)(a.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(f,{tokens:S})]})}function T(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=c(),u(),a(),d(),C(),m()})))()}D();export{T as default};