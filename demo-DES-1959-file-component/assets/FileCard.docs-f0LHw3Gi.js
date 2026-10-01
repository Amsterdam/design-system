import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,f as r,h as i,i as a,n as o,p as s,u as c}from"./blocks-DXSisYNI.js";import{t as l}from"./jsx-runtime-ATHzeHXA.js";import{i as u,r as d}from"./react-Dyi61YEg.js";import{n as f,t as p}from"./DesignTokensTable-Cx82uWnW.js";import{a as m,c as h,i as g,n as _,o as v,r as y,s as b,t as x}from"./FileCard.stories-DfHh276y.js";var S,C;function w(){return(w=e((()=>{S={"file-card":{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},actions:{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},details:{color:{$value:`{ams.color.text.secondary}`,$extensions:{"nl.amsterdam.type":`color`}}},info:{"flex-basis":{$value:`12rem`,$description:`The width the name and details need beside the preview. When the actions do not fit beside them as well, the actions move below.`,$extensions:{"nl.amsterdam.type":`dimension`}}},preview:{width:{$value:`clamp(2.5rem, 10vw, 5rem)`,$extensions:{"nl.amsterdam.type":`dimension`}}}}},C={ams:S}})))()}var T;function E(){return(E=e((()=>{T=`/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column, Field, FileInput, Label, Paragraph, UnorderedList } from '@amsterdam/design-system-react'
import { FileCard } from '@amsterdam/design-system-react/src'
import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'

type Attachment = {
  file: File
  id: string
  previewUrl: string
}

const revokePreviewUrl = (previewUrl: string) => {
  if (previewUrl) {
    URL.revokeObjectURL(previewUrl)
  }
}

// Two files chosen at once can share a name, so the list needs a key of its own.
// Reusing the name would let React confuse one row with another and undo the focus move below.
const toAttachments = (files: File[]): Attachment[] =>
  files.map((file) => ({
    file,
    id: crypto.randomUUID(),
    previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : '',
  }))

export const FileInputWithFileCards = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const emptiedRef = useRef<HTMLParagraphElement>(null)
  const [attachments, setAttachments] = useState<Attachment[]>([])
  const [emptied, setEmptied] = useState(false)
  const attachmentsRef = useRef<Attachment[]>([])

  useEffect(() => {
    attachmentsRef.current = attachments
  }, [attachments])

  useEffect(() => {
    return () => {
      attachmentsRef.current.forEach(({ previewUrl }) => revokePreviewUrl(previewUrl))
    }
  }, [])

  const changeFiles = () => {
    setEmptied(false)

    attachments.forEach(({ previewUrl }) => revokePreviewUrl(previewUrl))
    setAttachments(toAttachments(Array.from(inputRef.current?.files ?? [])))
  }

  const removeFile = (id: string) => {
    const removedAttachment = attachments.find((attachment) => attachment.id === id)
    const remaining = attachments.filter((attachment) => attachment.id !== id)

    revokePreviewUrl(removedAttachment?.previewUrl ?? '')

    // Keep the field in step with the list, so it never states a selection this page no longer shows.
    if (inputRef.current) {
      const selection = new DataTransfer()

      remaining.forEach(({ file }) => selection.items.add(file))
      inputRef.current.files = selection.files
    }

    // Commit the removal before moving focus, so focus does not land while the button it came from
    // is still in the tree.
    flushSync(() => {
      setAttachments(remaining)
      setEmptied(remaining.length === 0)
    })

    // A File Card moves focus to the delete button beside it, but it cannot know where focus should go
    // when the last file leaves and the list disappears with it. Focus goes to this page’s own account
    // of what happened, rather than back to the field, whose wording the browser generates and does not
    // everywhere keep up to date for a screen reader.
    if (remaining.length === 0) {
      emptiedRef.current?.focus()
    }
  }

  return (
    <Column>
      <Field>
        <Label htmlFor="file-input">Bijlagen</Label>
        <FileInput id="file-input" multiple onChange={changeFiles} ref={inputRef} />
      </Field>
      {attachments.length > 0 && (
        <UnorderedList markers={false}>
          {attachments.map(({ file, id, previewUrl }) => (
            <UnorderedList.Item key={id}>
              <FileCard
                name={file.name}
                onDelete={() => removeFile(id)}
                previewUrl={previewUrl || undefined}
                size={file.size}
                type={file.type}
              />
            </UnorderedList.Item>
          ))}
        </UnorderedList>
      )}
      {emptied && (
        <Paragraph ref={emptiedRef} tabIndex={-1}>
          Alle bijlagen zijn verwijderd.
        </Paragraph>
      )}
    </Column>
  )
}
`})))()}function D(e){let i={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...u(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[`
`,`
`,`
`,`
`,(0,k.jsx)(c,{of:x}),`
`,(0,k.jsx)(s,{}),`
`,(0,k.jsx)(t,{of:x}),`
`,(0,k.jsx)(n,{}),`
`,(0,k.jsx)(a,{}),`
`,(0,k.jsx)(i.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,k.jsx)(i.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,k.jsx)(i.p,{children:`Use a File Card for one file that someone selected with a File Input.
Use it for an attachment to a case, a request, or a decision.`}),`
`,(0,k.jsx)(i.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,k.jsxs)(i.p,{children:[`Do not use a File Card to link to a web page or to other content that is not a file.
Use a `,(0,k.jsx)(i.a,{href:`/docs/components-navigation-link--docs`,children:`Link`}),`, a `,(0,k.jsx)(i.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),` or a `,(0,k.jsx)(i.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),` for that.`]}),`
`,(0,k.jsx)(i.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,k.jsxs)(i.p,{children:[`Pass the name, and the size and type when they are known.
A File Card takes these as separate values rather than a `,(0,k.jsx)(i.code,{children:`File`}),` object, so it works just as well for a file that already sits on a server and has no `,(0,k.jsx)(i.code,{children:`File`}),` object at all.`]}),`
`,(0,k.jsx)(i.pre,{children:(0,k.jsx)(i.code,{className:`language-jsx`,children:`<FileCard name="besluit.pdf" onDelete={remove} size={1536000} type="application/pdf" />
`})}),`
`,(0,k.jsxs)(i.p,{children:[(0,k.jsx)(i.code,{children:`formatDetailsText`}),` returns the whole line below the name, brackets and separator included, so the order of the parts and the punctuation are yours to change.
It receives the size and the type, and the default assumes the type is a media type such as `,(0,k.jsx)(i.code,{children:`application/pdf`}),`.
When all you have is an extension, pass a function that formats it:`]}),`
`,(0,k.jsx)(i.pre,{children:(0,k.jsx)(i.code,{className:`language-tsx`,children:`<FileCard
  formatDetailsText={({ size, type }) => {
    const details = [type, size !== undefined ? \`\${Math.round(size / 1000)} kB\` : undefined].filter(
      (detail): detail is string => detail !== undefined,
    );

    return details.length > 0 ? \`(\${details.join(", ")})\` : "";
  }}
  name="besluit.pdf"
  size={1536000}
  type="pdf"
/>
`})}),`
`,(0,k.jsxs)(i.p,{children:[`Pass other actions, such as a download link, to `,(0,k.jsx)(i.code,{children:`actions`}),`.
Give every custom action the file name for screen readers with `,(0,k.jsx)(i.code,{children:`ams-visually-hidden`}),`, as the delete button does.`]}),`
`,(0,k.jsxs)(i.p,{children:[`Pass `,(0,k.jsx)(i.code,{children:`onDelete`}),` to add the built-in delete button.
It has no icon, and it always comes after the other actions.
A delete button of your own in `,(0,k.jsx)(i.code,{children:`actions`}),` gets neither the file name for screen readers, nor the focus move after a delete.
When you ask for confirmation first, remove the file after the confirmation has closed and returned focus to the delete button.`]}),`
`,(0,k.jsxs)(i.p,{children:[`When a File Card stands alone, or the last file leaves and takes the list with it, the page decides where focus goes.
The `,(0,k.jsx)(i.a,{href:`#with-a-file-input`,children:`With a File Input`}),` example moves focus to a message of its own when the last file leaves.`]}),`
`,(0,k.jsxs)(i.p,{children:[`Leave out both `,(0,k.jsx)(i.code,{children:`actions`}),` and `,(0,k.jsx)(i.code,{children:`onDelete`}),` to only show the file.`]}),`
`,(0,k.jsxs)(i.p,{children:[`Pass `,(0,k.jsx)(i.code,{children:`previewUrl`}),` to show a thumbnail.
The component never creates that address, so whoever creates an object URL also releases it.
The `,(0,k.jsx)(i.a,{href:`#with-a-file-input`,children:`With a File Input`}),` example shows one way to do that.`]}),`
`,(0,k.jsx)(i.h2,{id:`examples`,children:`Examples`}),`
`,(0,k.jsx)(i.h3,{id:`in-an-unordered-list`,children:`In an Unordered List`}),`
`,(0,k.jsxs)(i.p,{children:[`A File Card sits inside an `,(0,k.jsx)(i.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` item when several files need list semantics.`]}),`
`,(0,k.jsx)(o,{of:_}),`
`,(0,k.jsx)(i.h3,{id:`with-a-preview`,children:`With a preview`}),`
`,(0,k.jsxs)(i.p,{children:[`Pass `,(0,k.jsx)(i.code,{children:`previewUrl`}),` to show a thumbnail of an image instead of the generic document icon.`]}),`
`,(0,k.jsx)(o,{of:v}),`
`,(0,k.jsx)(i.h3,{id:`without-actions`,children:`Without actions`}),`
`,(0,k.jsxs)(i.p,{children:[`Leave out `,(0,k.jsx)(i.code,{children:`actions`}),` and `,(0,k.jsx)(i.code,{children:`onDelete`}),` to show a file that the user cannot change.`]}),`
`,(0,k.jsx)(o,{of:b}),`
`,(0,k.jsx)(i.h3,{id:`with-custom-actions`,children:`With custom actions`}),`
`,(0,k.jsx)(i.p,{children:`Use custom actions for tasks such as downloading a file.`}),`
`,(0,k.jsx)(o,{of:g}),`
`,(0,k.jsx)(i.h3,{id:`with-a-file-input`,children:`With a File Input`}),`
`,(0,k.jsx)(i.p,{children:`The example creates object URLs as the selection changes and releases them in an effect clean-up.
When the last file leaves, focus moves to a message of the example’s own.
Sending it back to the field is unreliable, because some browsers keep announcing a removed file.`}),`
`,(0,k.jsx)(o,{of:m}),`
`,(0,k.jsx)(r,{code:T,language:`jsx`}),`
`,(0,k.jsx)(i.h3,{id:`translated-text`,children:`Translated text`}),`
`,(0,k.jsxs)(i.p,{children:[`The component displays its text in Dutch by default.
Pass `,(0,k.jsx)(i.code,{children:`formatFileDetailsTextEn`}),`, or a function of your own, to `,(0,k.jsx)(i.code,{children:`formatDetailsText`}),`, and the matching label to `,(0,k.jsx)(i.code,{children:`deleteButtonLabel`}),`.
Set `,(0,k.jsx)(i.code,{children:`lang`}),` on a File Card whose language differs from the page’s.
See the `,(0,k.jsx)(i.a,{href:`/docs/docs-guidelines-localisation--docs`,children:`Localisation guide`}),` for more on this.`]}),`
`,(0,k.jsx)(o,{of:y}),`
`,(0,k.jsx)(i.h2,{id:`features`,children:`Features`}),`
`,(0,k.jsx)(i.p,{children:`A name too long for its row wraps onto the next line, also when it has no spaces.
When the card is too narrow for the name and the actions side by side, the actions move to a line of their own below.`}),`
`,(0,k.jsx)(i.p,{children:`When the focused delete button leaves the page, focus moves to the delete button of the next file, or of the previous one for the last file.
It moves once the file has left the page rather than on the click, so a cancelled confirmation or a failed delete leaves focus where it was.`}),`
`,(0,k.jsx)(i.h2,{id:`design`,children:`Design`}),`
`,(0,k.jsx)(i.p,{children:`A File Card places a preview of fixed width, the name with its details below it, and the actions side by side.
The preview column is the same width whether it holds a thumbnail or the generic document icon, so the names line up down a list.`}),`
`,(0,k.jsxs)(i.p,{children:[`A long name wraps rather than being cut off with an ellipsis.
The name is what someone recognises the file by, and names that end in a date or a reference – `,(0,k.jsx)(i.code,{children:`aanvraag-2026-03-11-definitief.pdf`}),` – lose exactly the part that tells them apart when the end is dropped.
Rows are no longer all the same height as a result, which is the price of a name that stays readable.
Automatic hyphenation is switched off for the name, because a hyphen added at a line break looks like part of the file name.`]}),`
`,(0,k.jsx)(i.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,k.jsxs)(i.p,{children:[`The thumbnail is decorative and carries an empty `,(0,k.jsx)(i.code,{children:`alt`}),`.
The component cannot know what the image shows, and the name is already beside it, so giving the image that name would only have it announced twice.`]}),`
`,(0,k.jsxs)(i.p,{children:[`When `,(0,k.jsx)(i.code,{children:`onDelete`}),` is used, the delete button reads ‘Verwijder’ on screen and ‘Verwijder’ followed by the name of the file to a screen reader.
Repeating the name on screen would put it twice in every row and make the buttons wide and untidy; leaving it out of the accessible name would leave someone reviewing the buttons of a page out of context with the same word for each of them.
Change `,(0,k.jsx)(i.code,{children:`deleteButtonLabel`}),` to change both, as the visible label stays the first part of the accessible name.`]}),`
`,(0,k.jsx)(i.p,{children:`There is no live region.
Moving focus to a neighbouring button already makes the change noticeable, and announcing it on top of that reads as noise rather than as help.`}),`
`,(0,k.jsx)(i.h2,{id:`see-also`,children:`See also`}),`
`,(0,k.jsxs)(i.ul,{children:[`
`,(0,k.jsxs)(i.li,{children:[(0,k.jsx)(i.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` – groups several File Cards as a list without showing markers.`]}),`
`,(0,k.jsxs)(i.li,{children:[(0,k.jsx)(i.a,{href:`/docs/components-forms-file-input--docs`,children:`File Input`}),` – lets the user select the files to display.`]}),`
`,(0,k.jsxs)(i.li,{children:[(0,k.jsx)(i.a,{href:`https://www.nldesignsystem.nl/file/`,rel:`nofollow`,children:`File in NL Design System`}),` – the same component under the name that other government organisations might use.`]}),`
`]}),`
`,(0,k.jsx)(i.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,k.jsx)(p,{tokens:C})]})}function O(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;function A(){return(A=e((()=>{k=l(),d(),i(),f(),w(),h(),E()})))()}A();export{O as default};