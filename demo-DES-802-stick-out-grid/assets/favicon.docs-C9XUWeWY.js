import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as t}from"./index-BBpSfLBY.js";import{F as a,S as r,A as l}from"./AppIcons-BTOlGsOy.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CG7QD-0b.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-BVoBHvaS.js";import"./index-DrFu-skq.js";import"./index.esm-BLzGSOcR.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";/*@license CC0-1.0*/function i(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(t,{title:"Brand/Assets/Favicon"}),`
`,e.jsx(n.h1,{id:"favicon",children:"Favicon"}),`
`,e.jsx(n.p,{children:"Represent the website in bookmarks, on home screens, in syndication and other tools."}),`
`,e.jsx(n.p,{children:`Here’s how to display a website icon (a favicon) in the web browser.
This set covers all common browsers (Chrome, Safari, Edge, and Firefox).`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["There is seperate documentation on ",e.jsx(n.a,{href:"/docs/docs-developer-guide-web-app--docs",children:"how to publish a web app with the proper app names and icons"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(n.h3,{id:"install-assets",children:"Install assets"}),`
`,e.jsxs(n.p,{children:["First, install these assets as they come with the ",e.jsx(n.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-assets",rel:"nofollow",children:"Amsterdam Design System Assets"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm i @amsterdam/design-system-assets
`})}),`
`,e.jsx(n.h3,{id:"link-assets",children:"Link assets"}),`
`,e.jsxs(n.p,{children:["You can manually ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Symbolic_link#POSIX_and_Unix-like_operating_systems",rel:"nofollow",children:"symlink (symbolic link)"})," and copy the files to the root or a ",e.jsx(n.code,{children:"public"})," folder next to where the ",e.jsx(n.code,{children:"index.html"}),` is located in your project.
An advantage of symlinking is that it tracks changes to the assets when there are package updates. Symlinks are basically shortcuts to files or directories.`]}),`
`,e.jsxs(n.p,{children:["Symlinking ",e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/tree/develop/proprietary/assets/favicon",rel:"nofollow",children:"the entire favicon directory"})," can be done as follows:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`# \`cd\` to the directory where you want to make the symlinks. For example:
cd public

# Symlink the icons folder. The symlink file (the last argument) can be named anything you like.
ln -s ../node_modules/@amsterdam/design-system-assets/favicon favicon
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Important: the symlink, the last argument in the above command, cannot be a path, but can only be the file or directory name.
I.e. you need to be in the directory where you want to make the symbolic link.`}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Note that undoing a symlink can be done by simply removing the created file or directory link:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`rm -r favicon
`})}),`
`]}),`
`,e.jsxs(n.p,{children:["Then link all these assets by placing the following tags in the ",e.jsx(n.code,{children:"<head>"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<head>
  ...
  <link rel="icon" href="favicon/favicon.ico" size="16x16 32x32 48x48 64x64" />
  <link rel="icon" href="favicon/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png" />
  ...
</head>
`})}),`
`,e.jsx(n.h3,{id:"submit-changes",children:"Submit Changes"}),`
`,e.jsx(n.p,{children:"The symlink(s) and edited files can be committed to the repository."}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"favicon-1",children:"Favicon"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.p,{children:"We include a classic icon file with this exact name as a baseline for some browsers and RSS readers."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="icon" href="favicon.ico" sizes="16x16 32x32 48x48 64x64" />
`})}),`
`,e.jsx(n.h3,{id:"svg-icon",children:"SVG Icon"}),`
`,e.jsx(r,{}),`
`,e.jsx(n.p,{children:"Roughly 75% of browsers support SVG favicons, which are more efficient and versatile."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="icon" type="image/svg+xml" href="icon.svg" />
`})}),`
`,e.jsx(n.h3,{id:"apple-touch-icon",children:"Apple Touch Icon"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.p,{children:"An iPhone or iPad uses this image when adding the webpage as a shortcut to your home screen."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="apple-touch-icon" href="apple-touch-icon.png" />
`})}),`
`,e.jsx(n.h2,{id:"further-reading",children:"Further reading"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs",rel:"nofollow",children:[e.jsx(n.em,{children:"How to Favicon in 2024: Six files that fit most needs"})," by Andrey Sitnik"]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://dev.to/masakudamatsu/favicon-nightmare-how-to-maintain-sanity-3al7",rel:"nofollow",children:[e.jsx(n.em,{children:"Definitive edition of “How to Favicon” in 2023"})," by Masa Kudamatsu"]})}),`
`]})]})}function S(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{S as default};
