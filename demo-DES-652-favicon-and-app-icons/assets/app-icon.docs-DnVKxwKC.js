import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as o}from"./index-DSz_1G2r.js";import{M as t}from"./index-DVdHtcXq.js";import{I as s}from"./index.esm-DG8b-xrg.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CWe8pSyM.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-DLle_QMf.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./index.esm-DjZ2yxjc.js";const r=()=>e.jsx("div",{className:"ams-docs-gallery",children:e.jsxs("figure",{className:"ams-docs-figure",children:[e.jsx(s,{src:"favicon/apple-touch-icon.png",width:180,height:180}),e.jsx("figcaption",{children:"apple-touch-icon.png (180px)"})]})}),c=()=>e.jsxs("div",{className:"ams-docs-gallery",children:[e.jsxs("figure",{className:"ams-docs-figure",children:[e.jsx(s,{src:"favicon/favicon.ico",width:16,height:16}),e.jsx("figcaption",{children:"favicon.ico (16px)"})]}),e.jsxs("figure",{className:"ams-docs-figure",children:[e.jsx(s,{src:"favicon/favicon.ico",width:32,height:32}),e.jsx("figcaption",{children:"favicon.ico (32px)"})]}),e.jsxs("figure",{className:"ams-docs-figure",children:[e.jsx(s,{src:"favicon/favicon.ico",width:64,height:64}),e.jsx("figcaption",{children:"favicon.ico (64px)"})]})]}),l=()=>e.jsx("div",{className:"ams-docs-gallery",children:e.jsxs("figure",{className:"ams-docs-figure",children:[e.jsx(s,{src:"favicon/icon.svg",width:64,height:64}),e.jsx("figcaption",{children:"icon.svg (64px)"})]})}),h=()=>e.jsxs("div",{className:"ams-docs-gallery",children:[e.jsxs("figure",{className:"ams-docs-figure",children:[e.jsx(s,{src:"favicon/icon-192.png",width:192,height:192}),e.jsx("figcaption",{children:"icon-192.png (192px)"})]}),e.jsxs("figure",{className:"ams-docs-figure",children:[e.jsx(s,{src:"favicon/icon-512.png",width:512,height:512}),e.jsx("figcaption",{children:"icon-512.png (512px)"})]})]});function a(i){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Assets/Favicon & App Icons"}),`
`,e.jsx(n.h1,{id:"favicon--app-icons",children:"Favicon & App Icons"}),`
`,e.jsx(n.p,{children:"Represent the website in bookmarks, on home screens, in syndication and other tools."}),`
`,e.jsx(n.p,{children:`Here’s how to display a website icon (a favicon) in the web browser or publish a web app with the proper app names and icons.
This set covers all combinations of common operating systems (Android, iOS, macOS, and Windows) and browsers (Chrome, Safari, Edge, and Firefox).`}),`
`,e.jsx(n.h2,{id:"overview--examples",children:"Overview & examples"}),`
`,e.jsx(n.h3,{id:"favicon",children:"Favicon"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.p,{children:"We include a classic icon file with this exact name as a baseline for some browsers and RSS readers."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="icon" href="favicon.ico" sizes="16x16 32x32 64x64" />
`})}),`
`,e.jsx(n.h3,{id:"svg-icon",children:"SVG Icon"}),`
`,e.jsx(n.p,{children:"Roughly 75% of browsers support SVG favicons, which are more efficient and versatile."}),`
`,e.jsx(l,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="icon" type="image/svg+xml" href="icon.svg" />
`})}),`
`,e.jsx(n.h3,{id:"apple-touch-icon",children:"Apple Touch Icon"}),`
`,e.jsx(r,{}),`
`,e.jsx(n.p,{children:"An iPhone or iPad uses this image when adding the webpage as a shortcut to your home screen."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="apple-touch-icon" href="apple-touch-icon.png" />
`})}),`
`,e.jsx(n.h3,{id:"web-app-icons",children:"Web App Icons"}),`
`,e.jsx(h,{}),`
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
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["First, install these assets as they come with the ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-assets",rel:"nofollow",children:"Amsterdam Design System Assets"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm i @amsterdam/design-system-assets
`})}),`
`,e.jsxs(n.p,{children:["Then you can either use the post-install script (",e.jsx(n.strong,{children:"Option A"}),") or manually copy and link the assets (",e.jsx(n.strong,{children:"Option B"}),")."]}),`
`,e.jsx(n.h3,{id:"a-link-assets-with-a-script",children:"(A) Link assets with a script"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/tree/develop/proprietary/assets/postinstall.sh",rel:"nofollow",children:e.jsx(n.code,{children:"postinstall.sh"})})," script from the root of your new ",e.jsx(n.strong,{children:"Vite React"}),", ",e.jsx(n.strong,{children:"Next.js"}),", legacy React or generic HTML project to automatically link the assets."]}),`
`,e.jsx(n.p,{children:"If you only want the icons, but not the Web Manifest and PWA support:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`# Make sure you are in the root directory of your project!
sh node_modules/@amsterdam/design-system-assets/postinstall.sh
`})}),`
`,e.jsx(n.p,{children:"If you want to generate a Web Manifest for a PWA as well, provide a full app name and a short app name:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`# Make sure you are in the root directory of your project!
# The full app name may not be longer than 30 characters and the short name no longer than 12 characters.
sh node_modules/@amsterdam/design-system-assets/postinstall.sh "Full App Name" "Short Name"
`})}),`
`,e.jsx(n.p,{children:"Users may then be prompted to install the app as a PWA."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If an ",e.jsx(n.code,{children:"index.html"})," is found in the root or in a ",e.jsx(n.code,{children:"public"})," directory the script will also insert the links in the HTML's ",e.jsx(n.code,{children:"<head>"}),` tag.
This will not be the case for Next.js applications.`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["This script can work for any project that has an ",e.jsx(n.code,{children:"index.html"})," file in the root or ",e.jsx(n.code,{children:"public"})," directory."]}),`
`]}),`
`,e.jsx(n.h3,{id:"b-link-manually",children:"(B) Link manually"}),`
`,e.jsxs(n.p,{children:["You can manually ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Symbolic_link#POSIX_and_Unix-like_operating_systems",rel:"nofollow",children:"symlink (symbolic link)"})," and copy the files to the root or a ",e.jsx(n.code,{children:"public"})," folder next to where the ",e.jsx(n.code,{children:"index.html"}),` is located in your project.
An advantage of symlinking is that it tracks changes to the assets when there are package updates.`]}),`
`,e.jsxs(n.p,{children:["Symlinking ",e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/tree/develop/proprietary/assets/favicon",rel:"nofollow",children:"the entire favicon directory"})," and copying the ",e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/tree/develop/proprietary/assets/app.manifest",rel:"nofollow",children:"Web Manifest"})," can be done as follows:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`# \`cd\` to the directory where you want to make the symlinks.
ln -s node_modules/@amsterdam/design-system-assets/favicon appicons
# Copy the Web Manifest if you want users to be able to and be prompted to install the app as a PWA.
cp node_modules/@amsterdam/design-system-assets/manifest/app.webmanifest app.webmanifest
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Note: for the symlink, the last argument in the above command cannot be a path, but can only be the file or directory name.
I.e. you need to be in the directory where you want to make the symbolic link.`}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Note that undoing a symlink can be done by simply removing the created file or directory link:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`rm -r appicons app.webmanifest
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
    { "src": "/appicons/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/appicons/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
`})}),`
`,e.jsxs(n.p,{children:["Then link all these assets by placing the following tags in the ",e.jsx(n.code,{children:"<head>"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<head>
  ...
  <link rel="icon" href="appicons/favicon.ico" size="16x16 32x32 64x64" />
  <link rel="icon" href="appicons/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="appicons/apple-touch-icon.png" />
  <link rel="manifest" href="app.webmanifest" />
  ...
</head>
`})}),`
`,e.jsx(n.h3,{id:"submit-the-changes",children:"Submit the changes"}),`
`,e.jsx(n.p,{children:"The symlinks and copied and edited files can be committed to the repository."}),`
`,e.jsx(n.h2,{id:"further-reading",children:"Further Reading"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs",rel:"nofollow",children:[e.jsx(n.em,{children:"How to Favicon in 2024: Six files that fit most needs"})," by Andrey Sitnik"]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://web.dev/learn/pwa/web-app-manifest",rel:"nofollow",children:[e.jsx(n.em,{children:"Web App Manifest"})," on web.dev"]})}),`
`]})]})}function A(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{A as default};
