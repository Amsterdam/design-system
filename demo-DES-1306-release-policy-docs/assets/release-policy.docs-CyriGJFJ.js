import{j as e}from"./iframe-B01WVZ3b.js";import{useMDXComponents as o}from"./index-BZ66gndv.js";import{M as a}from"./blocks-Be-HqGtx.js";import"./index-DUFBcAtJ.js";/*@license CC0-1.0*/function r(n){const s={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{title:"Docs/Developer Guide/Release Policy"}),`
`,e.jsx(s.h1,{id:"release-policy",children:"Release Policy"}),`
`,e.jsx(s.p,{children:`We aim to publish new releases on a monthly basis.
Breaking changes will occur at most once every 3 months.
Change logs, release notes, and our sprint reviews help you with upgrades.`}),`
`,e.jsx(s.h2,{id:"packages",children:"Packages"}),`
`,e.jsxs(s.p,{children:["We publish the code libraries of our design system as ",e.jsx(s.strong,{children:"5 separate npm packages"}),":"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-assets",rel:"nofollow",children:"Assets"}),": our fonts, icons, logos and application icons."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-css",rel:"nofollow",children:"CSS"}),": CSS classes used by our components and utilities."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-react",rel:"nofollow",children:"React"}),": all components in React and their unit tests."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-react-icons",rel:"nofollow",children:"React Icons"}),": every icon in the library as a React component."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-tokens",rel:"nofollow",children:"Tokens"}),": reusable CSS variables that express our design choices."]}),`
`]}),`
`,e.jsx(s.h2,{id:"version-numbering",children:"Version numbering"}),`
`,e.jsxs(s.p,{children:["Each package has its ",e.jsx(s.strong,{children:"own version number"}),`.
The design system as a whole `,e.jsx(s.strong,{children:"does not have"}),` a single overarching version.
Because of cross-dependencies, the 3 CSS and React packages will often move to a new major version together.`]}),`
`,e.jsxs(s.p,{children:["We follow ",e.jsx(s.a,{href:"https://semver.org",rel:"nofollow",children:"semantic versioning"})," to indicate the impact of changes:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Patch (x.y.z): fixes and technical improvements, safe to upgrade."}),`
`,e.jsx(s.li,{children:"Minor (x.y): offers new features, check whether you can use them."}),`
`,e.jsx(s.li,{children:"Major (x): breaking changes that may require updates to your code."}),`
`]}),`
`,e.jsx(s.h2,{id:"release-cadence",children:"Release cadence"}),`
`,e.jsxs(s.p,{children:["Breaking changes are grouped into major releases, which we limit to ",e.jsx(s.strong,{children:"once every 3 months"}),`.
Non-breaking changes get `,e.jsx(s.strong,{children:"released as needed"}),", usually at the end our 4-week sprints, but our setup allows us to publish anytime."]}),`
`,e.jsxs(s.p,{children:["We currently don’t define how long we ",e.jsx(s.strong,{children:"support older versions"}),` and backport fixes to them.
We recommend staying up to date with at least each major release.`]}),`
`,e.jsx(s.h2,{id:"deprecation-approach",children:"Deprecation approach"}),`
`,e.jsx(s.p,{children:"We deprecate features before removing them, so you have enough time to migrate."}),`
`,e.jsx(s.p,{children:"Note that not all changes are equally visible:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["TypeScript will highlight errors resulting from changes to names, props and prop values of ",e.jsx(s.strong,{children:"React components"}),"."]}),`
`,e.jsxs(s.li,{children:["Manually check all ",e.jsx(s.strong,{children:"CSS classes"})," that you attached styles to, and let us know what you’re apparently missing."]}),`
`,e.jsxs(s.li,{children:["Inspect the ",e.jsx(s.strong,{children:"CSS custom properties"})," in Dev Tools to verify if any of our design tokens no longer have a value."]}),`
`]}),`
`,e.jsxs(s.p,{children:["We keep features available until the ",e.jsx(s.strong,{children:"second major release"}),` after their deprecation.
All deprecations and removals are noted in the changelogs.
Find migration guidance in release notes, on this website, in JSDoc annotations, or comments in code.`]}),`
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
`]})]})}function h(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{h as default};
