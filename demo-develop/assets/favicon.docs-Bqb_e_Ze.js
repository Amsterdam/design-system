import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-BthE6Fri.js";import{r as n}from"./react-CuhE8UFk.js";import{c as r,f as i}from"./blocks-BB8xqr1V.js";import{a,n as o,r as s,t as c}from"./AppIcons-Ot79h6Qe.js";import{t as l}from"./mdx-react-shim-CwoQP4qO.js";function u(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[`
`,`
`,(0,f.jsx)(r,{title:`Brand/Assets/Favicon`}),`
`,(0,f.jsx)(t.h1,{id:`favicon`,children:`Favicon`}),`
`,(0,f.jsx)(t.p,{children:`Represent the website in bookmarks, on home screens, in syndication and other tools.`}),`
`,(0,f.jsx)(t.p,{children:`Here’s how to display a website icon (a favicon) in the web browser.
This set covers all common browsers (Chrome, Safari, Edge, and Firefox).`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.strong,{children:`Note`}),`: There is separate documentation on `,(0,f.jsx)(t.a,{href:`/docs/docs-developer-guide-web-app--docs`,children:`how to publish a web app with the proper app names and icons`}),`.`]}),`
`,(0,f.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,f.jsx)(t.h3,{id:`install-assets`,children:`Install assets`}),`
`,(0,f.jsxs)(t.p,{children:[`First, ensure that you have the `,(0,f.jsx)(t.a,{href:`https://www.npmjs.com/package/@amsterdam/design-system-assets`,rel:`nofollow`,children:`Amsterdam Design System Assets`}),` installed:`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-sh`,children:`npm install @amsterdam/design-system-assets
`})}),`
`,(0,f.jsx)(t.h3,{id:`link-assets`,children:`Link assets`}),`
`,(0,f.jsx)(t.h4,{id:`copy-or-symlink-assets`,children:`Copy or symlink assets`}),`
`,(0,f.jsxs)(t.p,{children:[`Copy the icon assets found in `,(0,f.jsx)(t.code,{children:`node_modules/@amsterdam/design-system-assets/favicon`}),` to your project. Typically this is the `,(0,f.jsx)(t.code,{children:`public`}),` folder next to your `,(0,f.jsx)(t.code,{children:`index.html`}),`, though the right location depends on your project structure and build process.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Alternatively, on macOS and Linux you can create a `,(0,f.jsx)(t.a,{href:`https://en.wikipedia.org/wiki/Symbolic_link#POSIX_and_Unix-like_operating_systems`,rel:`nofollow`,children:`symbolic link`}),` in your project that points to the package directory. An advantage of symlinking is that it tracks changes to the assets when there are package updates. Symlinks are basically shortcuts to files or directories.`]}),`
`,(0,f.jsxs)(t.p,{children:[`Symlinking `,(0,f.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/tree/develop/packages-proprietary/assets/favicon`,rel:`nofollow`,children:`the entire favicon directory`}),` can be done as follows:`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-sh`,children:`# Change to the directory where you want to make the symlink. For example:
cd public

# Symlink the icons folder. The symlink file (the last argument) can be named anything you like.
ln -s ../node_modules/@amsterdam/design-system-assets/favicon favicon
`})}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.strong,{children:`Important`}),`: the target path (the first argument) is resolved relative to the directory containing the symlink, not your current shell directory. The simplest way to avoid surprises is to `,(0,f.jsx)(t.code,{children:`cd`}),` to that directory first, as in the example above.`]}),`
`,(0,f.jsx)(t.h4,{id:`remove-symlink`,children:`Remove symlink`}),`
`,(0,f.jsx)(t.p,{children:`Remove the symlink without affecting the original files:`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-sh`,children:`# Note: do not include a trailing slash – that follows the symlink and unlink will refuse to remove a directory.
unlink favicon
`})}),`
`,(0,f.jsx)(t.h4,{id:`link-in-html`,children:`Link in HTML`}),`
`,(0,f.jsxs)(t.p,{children:[`Then link all these assets in the HTML by placing the following tags in the `,(0,f.jsx)(t.code,{children:`<head>`}),`:`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-html`,children:`<head>
  ...
  <link rel="icon" href="favicon/favicon.ico" sizes="16x16 32x32 48x48 64x64" />
  <link rel="icon" href="favicon/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="favicon/apple-touch-icon.png" />
  ...
</head>
`})}),`
`,(0,f.jsx)(t.p,{children:`How this is done exactly depends on your project structure and build process. Follow the documentation of your framework or build tool for the best way to link static assets in the HTML.`}),`
`,(0,f.jsx)(t.h3,{id:`submit-changes`,children:`Submit changes`}),`
`,(0,f.jsx)(t.p,{children:`The copied files or symlink(s) can be committed to the repository.`}),`
`,(0,f.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,f.jsx)(t.h3,{id:`favicon-1`,children:`Favicon`}),`
`,(0,f.jsx)(o,{}),`
`,(0,f.jsx)(t.p,{children:`We include a classic icon file with this exact name as a baseline for some browsers and RSS readers.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-html`,children:`<link rel="icon" href="favicon.ico" sizes="16x16 32x32 48x48 64x64" />
`})}),`
`,(0,f.jsx)(t.h3,{id:`svg-icon`,children:`SVG Icon`}),`
`,(0,f.jsx)(s,{}),`
`,(0,f.jsx)(t.p,{children:`Roughly 75% of browsers support SVG favicons, which are more efficient and versatile.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-html`,children:`<link rel="icon" type="image/svg+xml" href="icon.svg" />
`})}),`
`,(0,f.jsx)(t.h3,{id:`icon-for-apple-devices`,children:`Icon for Apple devices`}),`
`,(0,f.jsx)(c,{}),`
`,(0,f.jsx)(t.p,{children:`An iPhone or iPad uses this image when adding the webpage as a shortcut to your home screen.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-html`,children:`<link rel="apple-touch-icon" href="apple-touch-icon.png" />
`})}),`
`,(0,f.jsx)(t.h2,{id:`further-reading`,children:`Further reading`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsx)(t.li,{children:(0,f.jsxs)(t.a,{href:`https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs`,rel:`nofollow`,children:[(0,f.jsx)(t.em,{children:`How to Favicon in 2024: Six files that fit most needs`}),` by Andrey Sitnik`]})}),`
`,(0,f.jsx)(t.li,{children:(0,f.jsxs)(t.a,{href:`https://dev.to/masakudamatsu/favicon-nightmare-how-to-maintain-sanity-3al7`,rel:`nofollow`,children:[(0,f.jsx)(t.em,{children:`Definitive edition of “How to Favicon” in 2023`}),` by Masa Kudamatsu`]})}),`
`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),l(),i(),a()}))();export{d as default};