import{j as e}from"./iframe-7Y2RBhYw.js";import{useMDXComponents as r}from"./index-2vZqxrWE.js";import{M as t}from"./blocks-CGWf_chM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CgY6ovie.js";function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(t,{title:"Docs/Developer Guide/Release Policy"}),`
`,e.jsx(n.h1,{id:"release-policy",children:"Release Policy"}),`
`,e.jsx(n.p,{children:`We aim to publish new releases on a monthly basis.
Breaking changes will occur at most once every 3 months.
Change logs, release notes, and our sprint reviews help you with upgrades.`}),`
`,e.jsx(n.h2,{id:"packages",children:"Packages"}),`
`,e.jsxs(n.p,{children:["We publish the code libraries of our design system as ",e.jsx(n.strong,{children:"5 separate npm packages"}),":"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-assets",rel:"nofollow",children:"Assets"}),": our fonts, icons, logos and application icons."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-css",rel:"nofollow",children:"CSS"}),": applies our design to all components and utilities."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-react",rel:"nofollow",children:"React"}),": implements our component library in React."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-react-icons",rel:"nofollow",children:"React Icons"}),": all of our icons as React components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/@amsterdam/design-system-tokens",rel:"nofollow",children:"Tokens"}),": CSS variables that express our design choices."]}),`
`]}),`
`,e.jsx(n.h2,{id:"version-numbering",children:"Version numbering"}),`
`,e.jsxs(n.p,{children:["Each package has its ",e.jsx(n.strong,{children:"own version number"}),`.
The design system as a whole `,e.jsx(n.strong,{children:"does not have"}),` a single overarching version.
Because of cross-dependencies, the CSS, React and tokens packages will often move to a new major version together.`]}),`
`,e.jsxs(n.p,{children:["We follow ",e.jsx(n.a,{href:"https://semver.org",rel:"nofollow",children:"semantic versioning"})," to indicate the impact of changes:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Patch (x.y.z): fixes and technical improvements, safe to upgrade."}),`
`,e.jsx(n.li,{children:"Minor (x.y): offers new features, check whether you can use them."}),`
`,e.jsx(n.li,{children:"Major (x): breaking changes that may require updates to your code."}),`
`]}),`
`,e.jsx(n.h2,{id:"release-cadence",children:"Release cadence"}),`
`,e.jsxs(n.p,{children:["Breaking changes are grouped into major releases, which we limit to ",e.jsx(n.strong,{children:"once every 3 months"}),`.
Non-breaking changes get `,e.jsx(n.strong,{children:"released as needed"}),", usually at the end of our 4-week sprints, but our setup allows us to publish anytime."]}),`
`,e.jsxs(n.p,{children:["We currently don’t define how long we ",e.jsx(n.strong,{children:"support older versions"}),` and backport fixes to them.
We recommend staying up to date with at least each major release.`]}),`
`,e.jsx(n.h2,{id:"deprecation-process",children:"Deprecation process"}),`
`,e.jsx(n.p,{children:"We deprecate public features – React components, CSS classes, assets and design tokens – before removing them, so you have enough time to migrate."}),`
`,e.jsxs(n.p,{children:["We keep features available until the ",e.jsx(n.strong,{children:"second major release"}),` after their deprecation.
All deprecations and removals are noted in the changelogs.
Find migration guidance in release notes, on this website, in JSDoc annotations, or comments in code.`]}),`
`,e.jsx(n.h2,{id:"deletion-process",children:"Deletion process"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Address TypeScript errors that result from changes to names, props and prop values of ",e.jsx(n.strong,{children:"React components"}),"."]}),`
`,e.jsxs(n.li,{children:["Read the changelog to find whether ",e.jsx(n.strong,{children:"CSS classes"})," that you may hook into were changed or removed."]}),`
`,e.jsxs(n.li,{children:["Do the same for our ",e.jsx(n.strong,{children:"CSS custom properties"}),` that you use in your components.
The Stylelint plugin `,e.jsx(n.code,{children:"stylelint-value-no-unknown-custom-properties"})," could help here."]}),`
`]}),`
`,e.jsx(n.h2,{id:"communication-channels",children:"Communication channels"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Packages are published to ",e.jsx(n.a,{href:"https://www.npmjs.com/",rel:"nofollow",children:"npm"}),"."]}),`
`,e.jsxs(n.li,{children:["Use a tool like ",e.jsx(n.a,{href:"https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide",rel:"nofollow",children:"Dependabot"})," to get notified of new versions."]}),`
`,e.jsxs(n.li,{children:["Each package has its own ",e.jsx(n.strong,{children:"changelog file"})," in ",e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system",rel:"nofollow",children:"the repository"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Release notes"})," are also shared in ",e.jsx(n.a,{href:"https://teams.microsoft.com/l/team/19%3afYKS_RD2n1q4UhguA9jwEJk0A_VjYPO4TiLQjYlG_bo1%40thread.tacv2/conversations?groupId=381b5f11-b342-4a3a-8a78-8b371a90457d&tenantId=72fca1b1-2c2e-4376-a445-294d80196804",rel:"nofollow",children:"Teams"})," and ",e.jsx(n.a,{href:"https://datalab-amsterdam.slack.com/archives/CV54XSMSA",rel:"nofollow",children:"Slack"}),"."]}),`
`,e.jsxs(n.li,{children:["Ask questions and hear about updates in our ",e.jsx(n.strong,{children:"sprint reviews"}),"."]}),`
`,e.jsxs(n.li,{children:["Any ",e.jsx(n.strong,{children:"issues or requests"})," are welcome on ",e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/issues",rel:"nofollow",children:"GitHub"})," or in ",e.jsx(n.a,{href:"https://teams.microsoft.com/l/team/19%3afYKS_RD2n1q4UhguA9jwEJk0A_VjYPO4TiLQjYlG_bo1%40thread.tacv2/conversations?groupId=381b5f11-b342-4a3a-8a78-8b371a90457d&tenantId=72fca1b1-2c2e-4376-a445-294d80196804",rel:"nofollow",children:"Teams"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"consumer-responsibilities",children:"Consumer responsibilities"}),`
`,e.jsx(n.p,{children:"To make the most of the design system and avoid surprises:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Review changelogs"})," before upgrading."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Plan for major releases"})," roughly once every three months."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Stay up to date"})," and upgrade to at least each major release."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Join sprint reviews"})," for early insights or to raise questions."]}),`
`]}),`
`,e.jsx(n.h2,{id:"dependabot-configuration",children:"Dependabot configuration"}),`
`,e.jsxs(n.p,{children:["GitHub’s ",e.jsx(n.a,{href:"https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide",rel:"nofollow",children:"Dependabot"}),` automatically opens pull requests when new versions of your dependencies are available.
We recommend setting it up for your project so you don’t miss important updates or security fixes.`]}),`
`,e.jsx(n.h3,{id:"peer-dependencies",children:"Peer dependencies"}),`
`,e.jsx(n.p,{children:`Our packages depend on each other through peer dependencies.
The React package declares a peer dependency on the CSS package, and the CSS package declares peer dependencies on the Tokens and Assets packages.
When you upgrade one of these packages, you'll likely need to upgrade the others as well to satisfy the peer dependency version ranges.`}),`
`,e.jsx(n.p,{children:`Dependabot doesn't resolve peer dependencies on its own.
Without the right configuration, it may open separate pull requests for each package, and those PRs may fail because the peer dependency constraints aren't satisfied.
Grouping our packages into a single Dependabot update avoids this problem.`}),`
`,e.jsx(n.h3,{id:"recommended-configuration",children:"Recommended configuration"}),`
`,e.jsxs(n.p,{children:["Add the following to your ",e.jsx(n.code,{children:".github/dependabot.yml"}),` file.
It groups all Amsterdam Design System packages into a single pull request for patch and minor updates, so peer dependencies stay in sync.
Dependabot will still open separate pull requests for new major versions; we recommend reviewing and upgrading those manually.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    groups:
      amsterdam-design-system:
        patterns:
          - "@amsterdam/design-system-*"
        update-types:
          - "patch"
          - "minor"
`})})]})}function h(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{h as default};
