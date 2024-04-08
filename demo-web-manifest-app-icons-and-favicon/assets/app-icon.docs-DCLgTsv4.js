import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as a}from"./index-DSz_1G2r.js";import{M as l}from"./index-BsTBr-3h.js";import{I as s,P as i}from"./index.esm-BaXnOAR2.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-k3LuM_GF.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-k_s-dmML.js";import"./index-DrFu-skq.js";import"./index.esm-DjZ2yxjc.js";import"./clsx-B-dksMZM.js";const r={display:"flex",alignItems:"center",gap:"1em"},c={display:"flex",flexDirection:"column",alignItems:"center",marginInline:0,width:"fit-content"},h=()=>e.jsxs("div",{style:r,children:[e.jsxs("figure",{style:c,children:[e.jsx(s,{src:"favicon/favicon.ico",width:16,height:16,sizes:"16x16"}),e.jsx("figcaption",{children:e.jsx(i,{children:"favicon.ico, 16x16px"})})]}),e.jsxs("figure",{style:c,children:[e.jsx(s,{src:"favicon/favicon.ico",width:32,height:32,sizes:"32x32"}),e.jsx("figcaption",{children:e.jsx(i,{children:"favicon.ico, 32x32px"})})]}),e.jsxs("figure",{style:c,children:[e.jsx(s,{src:"favicon/favicon.ico",width:64,height:64,sizes:"64x64"}),e.jsx("figcaption",{children:e.jsx(i,{children:"favicon.ico, 64x64px"})})]})]}),d=()=>e.jsxs("figure",{style:c,children:[e.jsx(s,{src:"favicon/icon.svg",width:64,height:64}),e.jsx("figcaption",{children:e.jsx(i,{children:"icon.svg, 64x64px"})})]}),p=()=>e.jsxs("figure",{style:c,children:[e.jsx(s,{src:"favicon/apple-touch-icon.png",width:180,height:180}),e.jsx("figcaption",{children:e.jsx(i,{children:"apple-touch-icon.png, 180x180px"})})]}),x=()=>e.jsxs("div",{style:r,children:[e.jsxs("figure",{style:c,children:[e.jsx(s,{src:"favicon/icon-192.png",width:192,height:192})," ",e.jsx("figcaption",{children:e.jsx(i,{children:"icon-192.png, 192x192px"})})]}),e.jsxs("figure",{style:c,children:[e.jsx(s,{src:"favicon/icon-512.png",width:512,height:512})," ",e.jsx("figcaption",{children:e.jsx(i,{children:"icon-512.png, 512x512px"})})]})]});function t(o){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Docs/Assets/Favicon & App Icons"}),`
`,e.jsx(n.h1,{id:"favicon--app-icons",children:"Favicon & App Icons"}),`
`,e.jsx(n.p,{children:"Examples of all the assets needed to publish a web app with the proper browser favicon and app names and icons. This set should cover all the combinations of common operating systems (Android, iOS, macOS, Windows) and browsers (Chrome, Safari, Edge, Firefox)."}),`
`,e.jsx(n.h2,{id:"overview--examples",children:"Overview & examples"}),`
`,e.jsx(n.h3,{id:"default-svg-icon",children:"Default SVG Icon"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="icon" type="image/svg+xml" href="icon.svg" />
`})}),`
`,e.jsx(n.h3,{id:"favicon",children:"Favicon"}),`
`,e.jsx(h,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="icon" href="favicon.ico" sizes="16x16 32x32 64x64" />
`})}),`
`,e.jsx(n.h3,{id:"apple-touch-icon",children:"Apple Touch Icon"}),`
`,e.jsx(p,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="apple-touch-icon" href="apple-touch-icon.png" />
`})}),`
`,e.jsx(n.h3,{id:"web-app-icons",children:"Web App Icons"}),`
`,e.jsx(x,{}),`
`,e.jsxs(n.p,{children:["Include ",e.jsx(n.code,{children:"icons"})," object in ",e.jsx(n.code,{children:"*.webmanifest"})," (see ",e.jsx(n.a,{href:"#usage",children:"Usage"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  // ...
  "icons": [
    { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
  // ...
}
`})}),`
`,e.jsxs(n.p,{children:["Link the Web Manifest in the ",e.jsx(n.code,{children:"<head>"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="manifest" href="app.webmanifest" />
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["First install these assets as they come with the ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-assets",rel:"nofollow",children:"Amsterdam Design System Assets"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm i @amsterdam/design-system-assets
`})}),`
`,e.jsxs(n.p,{children:["Then either ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Symbolic_link#POSIX_and_Unix-like_operating_systems",rel:"nofollow",children:"symlink (symbolic link)"})," or copy the files to the root or a ",e.jsx(n.code,{children:"public"})," folder next to where the ",e.jsx(n.code,{children:"index.html"})," is located in your project. An advantage of symlinking is that it tracks changes to the assets when there are packages updates."]}),`
`,e.jsxs(n.p,{children:["Symlinking ",e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/tree/develop/proprietary/assets/favicon",rel:"nofollow",children:"the entire favicon directory"})," and the ",e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/tree/develop/proprietary/assets/app.manifest",rel:"nofollow",children:"Web Manifest"})," can be done as follows:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`# \`cd\` to the directory where you want to make the symlinks.
ln -s node_modules/@amsterdam/design-system-assets/favicon appicons
ln -s node_modules/@amsterdam/design-system-assets/manifest/app.webmanifest app.webmanifest
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Note: the symlink, the last argument in above command, cannot be a path, but needs to be just the file or directory name. I.e. you need to be in the directory where you want to make the symbolic link."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Note that undoing a symlink can be done by simply removing the created file or directory link:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`rm -r appicons app.webmanifest
`})}),`
`]}),`
`,e.jsxs(n.p,{children:["Make sure that the Web Manifest (",e.jsx(n.code,{children:"*.webmanifest"}),"), stating the app's name and referencing the PNG icons, is also available in the same location:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "name": "Your Web App's Full Name", // May not be longer than 30 characters.
  "short_name": "Short name", // May not be longer than 12 characters.
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
`,e.jsx(n.h2,{id:"further-reading",children:"Further Reading"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs",rel:"nofollow",children:[e.jsx(n.em,{children:"How to Favicon in 2024: Six files that fit most needs"})," by Andrey Sitnik"]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://web.dev/learn/pwa/web-app-manifest",rel:"nofollow",children:[e.jsx(n.em,{children:"Web App Manifest"})," on web.dev"]})}),`
`]})]})}function M(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{M as default};
