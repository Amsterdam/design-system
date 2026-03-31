import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-BrayXyei.js";import{r as n}from"./react-oCAR5XSR.js";import{c as r,f as i}from"./blocks-CGjqWDCh.js";import{a,i as o}from"./AppIcons-D4881oGS.js";import{t as s}from"./mdx-react-shim-9Tyt82po.js";function c(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[`
`,`
`,(0,u.jsx)(r,{title:`Docs/Developer Guide/Web App`}),`
`,(0,u.jsx)(t.h1,{id:`web-app`,children:`Web App`}),`
`,(0,u.jsx)(t.p,{children:`Turn a website into a Progressive Web App (PWA) with a web manifest and app icons.`}),`
`,(0,u.jsx)(t.p,{children:`Here’s how to publish a web app with the proper app names and icons.
This set covers all combinations of common operating systems (Android, iOS, macOS, and Windows) and browsers (Chrome, Safari, Edge, and Firefox).`}),`
`,(0,u.jsxs)(t.blockquote,{children:[`
`,(0,u.jsxs)(t.p,{children:[`There is seperate documentation on `,(0,u.jsx)(t.a,{href:`/docs/brand-assets-favicon--docs`,children:`how to add a website icon (a “favicon”)`}),`.`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,u.jsx)(t.h3,{id:`install-assets`,children:`Install assets`}),`
`,(0,u.jsxs)(t.p,{children:[`First, install these assets as they come with the `,(0,u.jsx)(t.a,{href:`https://www.npmjs.com/package/@amsterdam/design-system-assets`,rel:`nofollow`,children:`Amsterdam Design System Assets`}),`:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-sh`,children:`npm i @amsterdam/design-system-assets
`})}),`
`,(0,u.jsx)(t.h3,{id:`link-assets`,children:`Link assets`}),`
`,(0,u.jsxs)(t.p,{children:[`You can manually `,(0,u.jsx)(t.a,{href:`https://en.wikipedia.org/wiki/Symbolic_link#POSIX_and_Unix-like_operating_systems`,rel:`nofollow`,children:`symlink (symbolic link)`}),` and copy the files to the root or a `,(0,u.jsx)(t.code,{children:`public`}),` folder next to where the `,(0,u.jsx)(t.code,{children:`index.html`}),` is located in your project.
An advantage of symlinking is that it tracks changes to the assets when there are package updates. Symlinks are basically shortcuts to files or directories.`]}),`
`,(0,u.jsxs)(t.p,{children:[`Symlink the app icons and copy the `,(0,u.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/tree/develop/packages-proprietary/assets/app.manifest`,rel:`nofollow`,children:`Web Manifest`}),`:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-sh`,children:`# \`cd\` to the directory where you want to make the symlinks. For example:
cd public

# Symlink the app icons. The symlink file (the last argument) can be named anything you like.
ln -s ../node_modules/@amsterdam/design-system-assets/app-icons app-icons

# Copy the Web Manifest. Don't forget to edit it with the app's name.
cp ../node_modules/@amsterdam/design-system-assets/manifest/app.webmanifest app.webmanifest
`})}),`
`,(0,u.jsxs)(t.blockquote,{children:[`
`,(0,u.jsx)(t.p,{children:`Important: the symlink, the last argument in the above command, cannot be a path, but can only be the file or directory name.
I.e. you need to be in the directory where you want to make the symbolic link.`}),`
`]}),`
`,(0,u.jsxs)(t.blockquote,{children:[`
`,(0,u.jsx)(t.p,{children:`Note that undoing a symlink can be done by simply removing the created file or directory link:`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-sh`,children:`rm -r app-icons app.webmanifest
`})}),`
`]}),`
`,(0,u.jsxs)(t.blockquote,{children:[`
`,(0,u.jsxs)(t.p,{children:[`Note: not all servers recognize the `,(0,u.jsx)(t.code,{children:`.webmanifest`}),` extension.
See `,(0,u.jsx)(t.a,{href:`https://www.w3.org/TR/appmanifest/#using-a-link-element-to-link-to-a-manifest`,rel:`nofollow`,children:`Using a link element to link to a manifest on W3.org`}),` for more information.`]}),`
`]}),`
`,(0,u.jsxs)(t.p,{children:[`Make sure that the Web Manifest, stating the app's name and referencing the PNG icons, is available in the same location.
Edit the `,(0,u.jsx)(t.code,{children:`app.webmanifest`}),` file to include the app's name and the icons you want to use.
For example:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-json`,children:`{
  "name": "A maximum of thirty characters",
  "short_name": "Max 12 chars",
  "icons": [
    { "src": "app-icons/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "app-icons/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
`})}),`
`,(0,u.jsxs)(t.p,{children:[`Then link all these assets by placing the following tags in the `,(0,u.jsx)(t.code,{children:`<head>`}),`:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-html`,children:`<head>
  ...
  <link rel="manifest" href="app.webmanifest" />
  ...
</head>
`})}),`
`,(0,u.jsx)(t.h3,{id:`submit-changes`,children:`Submit changes`}),`
`,(0,u.jsx)(t.p,{children:`The symlink(s) and copied and edited files can be committed to the repository.`}),`
`,(0,u.jsx)(t.h2,{id:`web-app-icons`,children:`Web app icons`}),`
`,(0,u.jsx)(o,{}),`
`,(0,u.jsxs)(t.p,{children:[`Include `,(0,u.jsx)(t.code,{children:`icons`}),` object in `,(0,u.jsx)(t.code,{children:`*.webmanifest`}),` (see `,(0,u.jsx)(t.a,{href:`#how-to-use`,children:`How to use`}),`):`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-json`,children:`{
  "icons": [
    { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
`})}),`
`,(0,u.jsxs)(t.p,{children:[`Link the Web Manifest in the `,(0,u.jsx)(t.code,{children:`<head>`}),`:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-html`,children:`<link rel="manifest" href="app.webmanifest" />
`})}),`
`,(0,u.jsxs)(t.blockquote,{children:[`
`,(0,u.jsxs)(t.p,{children:[`Note: only include a Web Manifest if you want the website to be installable as a Progressive Web App (PWA).
Browsers `,(0,u.jsx)(t.a,{href:`https://web.dev/learn/pwa/installation-prompt`,rel:`nofollow`,children:`may prompt the user to install the app`}),` on their device if a manifest is found.`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`further-reading`,children:`Further reading`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:(0,u.jsxs)(t.a,{href:`https://web.dev/learn/pwa/web-app-manifest`,rel:`nofollow`,children:[(0,u.jsx)(t.em,{children:`Web App Manifest`}),` on web.dev`]})}),`
`,(0,u.jsx)(t.li,{children:(0,u.jsxs)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Manifest/icons`,rel:`nofollow`,children:[(0,u.jsx)(t.em,{children:`Web app manifests: Icons`}),` on MDN Web Docs`]})}),`
`,(0,u.jsx)(t.li,{children:(0,u.jsxs)(t.a,{href:`https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs`,rel:`nofollow`,children:[(0,u.jsx)(t.em,{children:`How to Favicon in 2024: Six files that fit most needs`}),` by Andrey Sitnik`]})}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),s(),i(),a()}))();export{l as default};