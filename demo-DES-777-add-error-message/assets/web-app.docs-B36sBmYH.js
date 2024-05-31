import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as t}from"./index-DlpNa54Y.js";import{M as a}from"./index-D_YJH48_.js";import{W as o}from"./AppIcons-BIYBAEBb.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CwXlHxFg.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-DDahREJs.js";import"./clsx-B-dksMZM.js";import"./index.esm-DQkeu4as.js";function i(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Assets/Web App"}),`
`,e.jsx(n.h1,{id:"progressive-web-app-manifest-and-icons",children:"Progressive Web App: manifest and icons"}),`
`,e.jsx(n.p,{children:"Turn a website into a Progressive Web App (PWA) with a Web Manifest and app icons."}),`
`,e.jsx(n.p,{children:`Here’s how to publish a web app with the proper app names and icons.
This set covers all combinations of common operating systems (Android, iOS, macOS, and Windows) and browsers (Chrome, Safari, Edge, and Firefox).`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["There is seperate documentation on ",e.jsx(n.a,{href:"/docs/docs-assets-web-app--docs",children:"how to add a website icon (a “favicon”)"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"install-the-assets",children:"Install the assets"}),`
`,e.jsxs(n.p,{children:["First, install these assets as they come with the ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-assets",rel:"nofollow",children:"Amsterdam Design System Assets"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm i @amsterdam/design-system-assets
`})}),`
`,e.jsx(n.h3,{id:"link-the-installed-assets",children:"Link the installed assets"}),`
`,e.jsxs(n.p,{children:["You can manually ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Symbolic_link#POSIX_and_Unix-like_operating_systems",rel:"nofollow",children:"symlink (symbolic link)"})," and copy the files to the root or a ",e.jsx(n.code,{children:"public"})," folder next to where the ",e.jsx(n.code,{children:"index.html"}),` is located in your project.
An advantage of symlinking is that it tracks changes to the assets when there are package updates. Symlinks are basically shortcuts to files or directories.`]}),`
`,e.jsxs(n.p,{children:["Symlink the app icons and copy the ",e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/tree/develop/proprietary/assets/app.manifest",rel:"nofollow",children:"Web Manifest"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`# \`cd\` to the directory where you want to make the symlinks. For example:
cd public

# Symlink the app icons. The symlink file (the last argument) can be named anything you like.
ln -s ../node_modules/@amsterdam/design-system-assets/app-icons app-icons

# Copy the Web Manifest. Don't forget to edit it with the app's name.
cp ../node_modules/@amsterdam/design-system-assets/manifest/app.webmanifest app.webmanifest
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Important: the symlink, the last argument in the above command, cannot be a path, but can only be the file or directory name.
I.e. you need to be in the directory where you want to make the symbolic link.`}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Note that undoing a symlink can be done by simply removing the created file or directory link:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`rm -r app-icons app.webmanifest
`})}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: not all servers recognize the ",e.jsx(n.code,{children:".webmanifest"}),` extension.
See `,e.jsx(n.a,{href:"https://www.w3.org/TR/appmanifest/#using-a-link-element-to-link-to-a-manifest",rel:"nofollow",children:"Using a link element to link to a manifest on W3.org"})," for more information."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Make sure that the Web Manifest, stating the app's name and referencing the PNG icons, is available in the same location.
Edit the `,e.jsx(n.code,{children:"app.webmanifest"}),` file to include the app's name and the icons you want to use.
For example:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "name": "A maximum of thirty characters",
  "short_name": "Max 12 chars",
  "icons": [
    { "src": "app-icons/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "app-icons/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
`})}),`
`,e.jsxs(n.p,{children:["Then link all these assets by placing the following tags in the ",e.jsx(n.code,{children:"<head>"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<head>
  ...
  <link rel="manifest" href="app.webmanifest" />
  ...
</head>
`})}),`
`,e.jsx(n.h3,{id:"submit-the-changes",children:"Submit the changes"}),`
`,e.jsx(n.p,{children:"The symlink(s) and copied and edited files can be committed to the repository."}),`
`,e.jsx(n.h2,{id:"overview--examples",children:"Overview & examples"}),`
`,e.jsx(n.h3,{id:"web-app-icons",children:"Web App Icons"}),`
`,e.jsx(o,{}),`
`,e.jsxs(n.p,{children:["Include ",e.jsx(n.code,{children:"icons"})," object in ",e.jsx(n.code,{children:"*.webmanifest"})," (see ",e.jsx(n.a,{href:"#usage",children:"Usage"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "icons": [
    { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
`})}),`
`,e.jsxs(n.p,{children:["Link the Web Manifest in the ",e.jsx(n.code,{children:"<head>"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="manifest" href="app.webmanifest" />
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Note: only include a Web Manifest if you want the website to be installable as a Progressive Web App (PWA).
Browsers `,e.jsx(n.a,{href:"https://web.dev/learn/pwa/installation-prompt",rel:"nofollow",children:"may prompt the user to install the app"})," on their device if a manifest is found."]}),`
`]}),`
`,e.jsx(n.h2,{id:"further-reading",children:"Further Reading"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://web.dev/learn/pwa/web-app-manifest",rel:"nofollow",children:[e.jsx(n.em,{children:"Web App Manifest"})," on web.dev"]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest/icons",rel:"nofollow",children:[e.jsx(n.em,{children:"Web app manifests: Icons"})," on MDN Web Docs"]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs",rel:"nofollow",children:[e.jsx(n.em,{children:"How to Favicon in 2024: Six files that fit most needs"})," by Andrey Sitnik"]})}),`
`]})]})}function k(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{k as default};
