import{j as e}from"./iframe-et1EmRj8.js";import{useMDXComponents as r}from"./index-DtSNbmnr.js";import{M as t}from"./blocks-BIVjkzkz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JWs1WKrL.js";/*@license CC0-1.0*/function o(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(t,{title:"Docs/Developer Guide/Release Policy"}),`
`,e.jsx(s.h1,{id:"release-policy",children:"Release Policy"}),`
`,e.jsx(s.p,{children:`We aim to publish new releases on a monthly basis.
Breaking changes will occur at most once every 3 months.
Change logs, release notes, and our sprint reviews help you with upgrades.`}),`
`,e.jsx(s.h2,{id:"packages",children:"Packages"}),`
`,e.jsxs(s.p,{children:["We publish the code libraries of our design system as ",e.jsx(s.strong,{children:"5 separate npm packages"}),":"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-assets",rel:"nofollow",children:"Assets"}),": our fonts, icons, logos and application icons."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-css",rel:"nofollow",children:"CSS"}),": applies our design to all components and utilities."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-react",rel:"nofollow",children:"React"}),": implements our component library in React."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-react-icons",rel:"nofollow",children:"React Icons"}),": all of our icons as React components."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-tokens",rel:"nofollow",children:"Tokens"}),": CSS variables that express our design choices."]}),`
`]}),`
`,e.jsx(s.h2,{id:"version-numbering",children:"Version numbering"}),`
`,e.jsxs(s.p,{children:["Each package has its ",e.jsx(s.strong,{children:"own version number"}),`.
The design system as a whole `,e.jsx(s.strong,{children:"does not have"}),` a single overarching version.
Because of cross-dependencies, the CSS, React and tokens packages will often move to a new major version together.`]}),`
`,e.jsxs(s.p,{children:["We follow ",e.jsx(s.a,{href:"https://semver.org",rel:"nofollow",children:"semantic versioning"})," to indicate the impact of changes:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Patch (x.y.z): fixes and technical improvements, safe to upgrade."}),`
`,e.jsx(s.li,{children:"Minor (x.y): offers new features, check whether you can use them."}),`
`,e.jsx(s.li,{children:"Major (x): breaking changes that may require updates to your code."}),`
`]}),`
`,e.jsx(s.h2,{id:"release-cadence",children:"Release cadence"}),`
`,e.jsxs(s.p,{children:["Breaking changes are grouped into major releases, which we limit to ",e.jsx(s.strong,{children:"once every 3 months"}),`.
Non-breaking changes get `,e.jsx(s.strong,{children:"released as needed"}),", usually at the end of our 4-week sprints, but our setup allows us to publish anytime."]}),`
`,e.jsxs(s.p,{children:["We currently don’t define how long we ",e.jsx(s.strong,{children:"support older versions"}),` and backport fixes to them.
We recommend staying up to date with at least each major release.`]}),`
`,e.jsx(s.h2,{id:"deprecation-process",children:"Deprecation process"}),`
`,e.jsx(s.p,{children:"We deprecate public features – React components, CSS classes, assets and design tokens – before removing them, so you have enough time to migrate."}),`
`,e.jsxs(s.p,{children:["We keep features available until the ",e.jsx(s.strong,{children:"second major release"}),` after their deprecation.
All deprecations and removals are noted in the changelogs.
Find migration guidance in release notes, on this website, in JSDoc annotations, or comments in code.`]}),`
`,e.jsx(s.h2,{id:"deletion-process",children:"Deletion process"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Address TypeScript errors that result from changes to names, props and prop values of ",e.jsx(s.strong,{children:"React components"}),"."]}),`
`,e.jsxs(s.li,{children:["Read the changelog to find whether ",e.jsx(s.strong,{children:"CSS classes"})," that you may hook into were changed or removed."]}),`
`,e.jsxs(s.li,{children:["Do the same for our ",e.jsx(s.strong,{children:"CSS custom properties"}),` that you use in your components.
The Stylelint plugin `,e.jsx(s.code,{children:"stylelint-value-no-unknown-custom-properties"})," could help here."]}),`
`]}),`
`,e.jsx(s.h2,{id:"communication-channels",children:"Communication channels"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Packages are published to ",e.jsx(s.a,{href:"https://www.npmjs.com/",rel:"nofollow",children:"npm"}),"."]}),`
`,e.jsxs(s.li,{children:["Use a tool like ",e.jsx(s.a,{href:"https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide",rel:"nofollow",children:"Dependabot"})," to get notified of new versions."]}),`
`,e.jsxs(s.li,{children:["Each package has its own ",e.jsx(s.strong,{children:"changelog file"})," in ",e.jsx(s.a,{href:"https://github.com/Amsterdam/design-system",rel:"nofollow",children:"the repository"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Release notes"})," are also shared in ",e.jsx(s.a,{href:"https://teams.microsoft.com/l/team/19%3afYKS_RD2n1q4UhguA9jwEJk0A_VjYPO4TiLQjYlG_bo1%40thread.tacv2/conversations?groupId=381b5f11-b342-4a3a-8a78-8b371a90457d&tenantId=72fca1b1-2c2e-4376-a445-294d80196804",rel:"nofollow",children:"Teams"})," and ",e.jsx(s.a,{href:"https://datalab-amsterdam.slack.com/archives/CV54XSMSA",rel:"nofollow",children:"Slack"}),"."]}),`
`,e.jsxs(s.li,{children:["Ask questions and hear about updates in our ",e.jsx(s.strong,{children:"sprint reviews"}),"."]}),`
`,e.jsxs(s.li,{children:["Any ",e.jsx(s.strong,{children:"issues or requests"})," are welcome on ",e.jsx(s.a,{href:"https://github.com/Amsterdam/design-system/issues",rel:"nofollow",children:"GitHub"})," or in ",e.jsx(s.a,{href:"https://teams.microsoft.com/l/team/19%3afYKS_RD2n1q4UhguA9jwEJk0A_VjYPO4TiLQjYlG_bo1%40thread.tacv2/conversations?groupId=381b5f11-b342-4a3a-8a78-8b371a90457d&tenantId=72fca1b1-2c2e-4376-a445-294d80196804",rel:"nofollow",children:"Teams"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"consumer-responsibilities",children:"Consumer responsibilities"}),`
`,e.jsx(s.p,{children:"To make the most of the design system and avoid surprises:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Review changelogs"})," before upgrading."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Plan for major releases"})," roughly once every three months."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Stay up to date"})," and upgrade to at least each major release."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Join sprint reviews"})," for early insights or to raise questions."]}),`
`]})]})}function d(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{d as default};
