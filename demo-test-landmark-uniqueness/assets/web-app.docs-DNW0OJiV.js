import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,l as r,m as i}from"./blocks-DeFV-qIp.js";import{a,i as o}from"./AppIcons-Brk90_z3.js";import{t as s}from"./mdx-react-shim-J_HR_cNX.js";function c(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[`
`,`
`,`
`,(0,u.jsx)(r,{title:`Docs/Developer Guide/Web App`}),`
`,(0,u.jsx)(t.h1,{id:`web-app`,children:`Web app`}),`
`,(0,u.jsx)(t.p,{children:`Turn a website into a progressive web app (PWA) with a web app manifest (web manifest hereafter) and app icons.`}),`
`,(0,u.jsx)(t.p,{children:`Here’s how to publish a web app with the proper app names and icons.
This set covers all combinations of common operating systems (Android, iOS, macOS, and Windows) and browsers (Chrome, Safari, Edge, and Firefox).`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.strong,{children:`Note`}),`: There is separate documentation on `,(0,u.jsx)(t.a,{href:`/docs/brand-assets-favicon--docs`,children:`how to add a website icon (a “favicon”)`}),`.`]}),`
`,(0,u.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,u.jsx)(t.h3,{id:`install-assets`,children:`Install assets`}),`
`,(0,u.jsxs)(t.p,{children:[`First, ensure that you have the `,(0,u.jsx)(t.a,{href:`https://www.npmjs.com/package/@amsterdam/design-system-assets`,rel:`nofollow`,children:`Amsterdam Design System Assets`}),` installed:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-sh`,children:`npm install @amsterdam/design-system-assets
`})}),`
`,(0,u.jsx)(t.h3,{id:`link-assets`,children:`Link assets`}),`
`,(0,u.jsx)(t.h4,{id:`copy-or-symlink-assets`,children:`Copy or symlink assets`}),`
`,(0,u.jsxs)(t.p,{children:[`Copy the app icons found in `,(0,u.jsx)(t.code,{children:`node_modules/@amsterdam/design-system-assets/app-icons`}),` and the web manifest from `,(0,u.jsx)(t.code,{children:`node_modules/@amsterdam/design-system-assets/manifest/app.webmanifest`}),` to your project. Typically this is the `,(0,u.jsx)(t.code,{children:`public`}),` folder next to your `,(0,u.jsx)(t.code,{children:`index.html`}),`, though the right location depends on your project structure and build process.`]}),`
`,(0,u.jsxs)(t.p,{children:[`Alternatively, on macOS and Linux you can create a `,(0,u.jsx)(t.a,{href:`https://en.wikipedia.org/wiki/Symbolic_link#POSIX_and_Unix-like_operating_systems`,rel:`nofollow`,children:`symbolic link`}),` in your project that points to the package directory. An advantage of symlinking is that it tracks changes to the assets when there are package updates. Symlinks are basically shortcuts to files or directories.`]}),`
`,(0,u.jsxs)(t.p,{children:[`Symlink the app icons and copy the `,(0,u.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/blob/develop/packages-proprietary/assets/manifest/app.webmanifest`,rel:`nofollow`,children:`web manifest`}),`:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-sh`,children:`# Change to the directory where you want to make the symlink. For example:
cd public

# Symlink the app icons. The symlink file (the last argument) can be named anything you like.
ln -s ../node_modules/@amsterdam/design-system-assets/app-icons app-icons

# Copy the web manifest. Don't forget to edit it with the app's name.
cp ../node_modules/@amsterdam/design-system-assets/manifest/app.webmanifest app.webmanifest
`})}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.strong,{children:`Important`}),`: the target path (the first argument) is resolved relative to the directory containing the symlink, not your current shell directory. The simplest way to avoid surprises is to `,(0,u.jsx)(t.code,{children:`cd`}),` to that directory first, as in the example above.`]}),`
`,(0,u.jsx)(t.h4,{id:`remove-symlink`,children:`Remove symlink`}),`
`,(0,u.jsx)(t.p,{children:`Remove the symlink and the web manifest without affecting the original files:`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-sh`,children:`# Note: do not include a trailing slash – that follows the symlink and unlink will refuse to remove a directory.
unlink app-icons
rm app.webmanifest
`})}),`
`,(0,u.jsx)(t.h4,{id:`edit-web-manifest`,children:`Edit web manifest`}),`
`,(0,u.jsxs)(t.p,{children:[`Make sure that the web manifest, stating the app's name and referencing the PNG icons, is available in the same location.
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
`,(0,u.jsx)(t.h4,{id:`link-in-html`,children:`Link in HTML`}),`
`,(0,u.jsxs)(t.p,{children:[`Then link all these assets in the HTML by placing the following tags in the `,(0,u.jsx)(t.code,{children:`<head>`}),`:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-html`,children:`<head>
  ...
  <link rel="manifest" href="app.webmanifest" />
  ...
</head>
`})}),`
`,(0,u.jsx)(t.p,{children:`How this is done exactly depends on your project structure and build process. Follow the documentation of your framework or build tool for the best way to link static assets in the HTML.`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.strong,{children:`Note`}),`: not all servers recognize the `,(0,u.jsx)(t.code,{children:`.webmanifest`}),` extension. See `,(0,u.jsx)(t.a,{href:`https://www.w3.org/TR/appmanifest/#using-a-link-element-to-link-to-a-manifest`,rel:`nofollow`,children:`Using a link element to link to a manifest on W3.org`}),` for more information.`]}),`
`,(0,u.jsx)(t.h3,{id:`submit-changes`,children:`Submit changes`}),`
`,(0,u.jsx)(t.p,{children:`The copied files or symlink(s) can be committed to the repository.`}),`
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
`,(0,u.jsxs)(t.p,{children:[`Link the web manifest in the `,(0,u.jsx)(t.code,{children:`<head>`}),`:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-html`,children:`<link rel="manifest" href="app.webmanifest" />
`})}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.strong,{children:`Note`}),`: only include a web manifest if you want the website to be installable as a progressive web app (PWA). Browsers `,(0,u.jsx)(t.a,{href:`https://web.dev/learn/pwa/installation-prompt`,rel:`nofollow`,children:`may prompt the user to install the app`}),` on their device if a manifest is found.`]}),`
`,(0,u.jsx)(t.h2,{id:`further-reading`,children:`Further reading`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:(0,u.jsxs)(t.a,{href:`https://web.dev/learn/pwa/web-app-manifest`,rel:`nofollow`,children:[(0,u.jsx)(t.em,{children:`Web App Manifest`}),` on web.dev`]})}),`
`,(0,u.jsx)(t.li,{children:(0,u.jsxs)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Manifest/icons`,rel:`nofollow`,children:[(0,u.jsx)(t.em,{children:`Web app manifests: Icons`}),` on MDN Web Docs`]})}),`
`,(0,u.jsx)(t.li,{children:(0,u.jsxs)(t.a,{href:`https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs`,rel:`nofollow`,children:[(0,u.jsx)(t.em,{children:`How to Favicon in 2024: Six files that fit most needs`}),` by Andrey Sitnik`]})}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),s(),i(),a()}))();export{l as default};