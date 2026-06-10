import{n as e}from"./chunk-DnJy8xQt.js";import{Wt as t}from"./iframe-BUgim-DV.js";import{r as n}from"./react-BubS7flb.js";import{l as r,m as i}from"./blocks-B0ZTBWBi.js";import{t as a}from"./mdx-react-shim-D08COmXd.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/Release Policy`}),`
`,(0,c.jsx)(t.h1,{id:`release-policy`,children:`Release Policy`}),`
`,(0,c.jsx)(t.p,{children:`We aim to publish new releases on a monthly basis.
Breaking changes will occur at most once every 3 months.
Change logs, release notes, and our sprint reviews help you with upgrades.`}),`
`,(0,c.jsx)(t.h2,{id:`packages`,children:`Packages`}),`
`,(0,c.jsxs)(t.p,{children:[`We publish the code libraries of our design system as `,(0,c.jsx)(t.strong,{children:`5 separate npm packages`}),`:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@amsterdam/design-system-assets`,rel:`nofollow`,children:`Assets`}),`: our fonts, icons, logos and application icons.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@amsterdam/design-system-css`,rel:`nofollow`,children:`CSS`}),`: applies our design to all components and utilities.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@amsterdam/design-system-react`,rel:`nofollow`,children:`React`}),`: implements our component library in React.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@amsterdam/design-system-react-icons`,rel:`nofollow`,children:`React Icons`}),`: all of our icons as React components.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@amsterdam/design-system-tokens`,rel:`nofollow`,children:`Tokens`}),`: CSS variables that express our design choices.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`version-numbering`,children:`Version numbering`}),`
`,(0,c.jsxs)(t.p,{children:[`Each package has its `,(0,c.jsx)(t.strong,{children:`own version number`}),`.
The design system as a whole `,(0,c.jsx)(t.strong,{children:`does not have`}),` a single overarching version.
Because of cross-dependencies, the CSS, React and tokens packages will often move to a new major version together.`]}),`
`,(0,c.jsxs)(t.p,{children:[`We follow `,(0,c.jsx)(t.a,{href:`https://semver.org`,rel:`nofollow`,children:`semantic versioning`}),` to indicate the impact of changes:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Patch (x.y.z): fixes and technical improvements, safe to upgrade.`}),`
`,(0,c.jsx)(t.li,{children:`Minor (x.y): offers new features, check whether you can use them.`}),`
`,(0,c.jsx)(t.li,{children:`Major (x): breaking changes that may require updates to your code.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`peer-dependencies`,children:`Peer dependencies`}),`
`,(0,c.jsx)(t.p,{children:`Our packages are interconnected through peer dependencies.
The React package relies on the CSS package, while the CSS package depends on the Tokens and Assets packages.
Upgrading one of these packages likely means you will also need to upgrade the others to satisfy the peer dependency version requirements.`}),`
`,(0,c.jsxs)(t.p,{children:[`Without additional configuration, tools like `,(0,c.jsx)(t.strong,{children:`Dependabot by GitHub`}),` might create separate pull requests for each package, which could fail due to unmet peer dependency constraints.
Grouping the design system packages into a single update can prevent this issue.
`,(0,c.jsx)(t.a,{href:`https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/optimizing-pr-creation-version-updates#grouping-related-dependencies-together`,rel:`nofollow`,children:`Their documentation`}),` provides details on this.`]}),`
`,(0,c.jsx)(t.h2,{id:`release-cadence`,children:`Release cadence`}),`
`,(0,c.jsxs)(t.p,{children:[`Breaking changes are grouped into major releases, which we limit to `,(0,c.jsx)(t.strong,{children:`once every 3 months`}),`.
Non-breaking changes get `,(0,c.jsx)(t.strong,{children:`released as needed`}),`, usually at the end of our 4-week sprints, but our setup allows us to publish anytime.`]}),`
`,(0,c.jsxs)(t.p,{children:[`We currently don’t define how long we `,(0,c.jsx)(t.strong,{children:`support older versions`}),` and backport fixes to them.
We recommend staying up to date with at least each major release.`]}),`
`,(0,c.jsx)(t.h2,{id:`deprecation-process`,children:`Deprecation process`}),`
`,(0,c.jsx)(t.p,{children:`We deprecate public features – React components, CSS classes, assets and design tokens – before removing them, so you have enough time to migrate.`}),`
`,(0,c.jsxs)(t.p,{children:[`We keep features available until `,(0,c.jsx)(t.strong,{children:`at least six months`}),` after their deprecation has been published.
All deprecations and removals are noted in the changelogs.
Find migration guidance in release notes, on this website, in JSDoc annotations, or comments in code.`]}),`
`,(0,c.jsx)(t.h2,{id:`deletion-process`,children:`Deletion process`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Address TypeScript errors that result from changes to names, props and prop values of `,(0,c.jsx)(t.strong,{children:`React components`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Read the changelog to find whether `,(0,c.jsx)(t.strong,{children:`CSS classes`}),` that you may hook into were changed or removed.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Do the same for our `,(0,c.jsx)(t.strong,{children:`CSS custom properties`}),` that you use in your components.
The Stylelint plugin `,(0,c.jsx)(t.code,{children:`stylelint-value-no-unknown-custom-properties`}),` could help here.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`communication-channels`,children:`Communication channels`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Packages are published to `,(0,c.jsx)(t.a,{href:`https://www.npmjs.com/`,rel:`nofollow`,children:`npm`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Use a tool like `,(0,c.jsx)(t.a,{href:`https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide`,rel:`nofollow`,children:`Dependabot`}),` to get notified of new versions.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Each package has its own `,(0,c.jsx)(t.strong,{children:`changelog file`}),` in `,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system`,rel:`nofollow`,children:`the repository`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Release notes`}),` are also shared in `,(0,c.jsx)(t.a,{href:`https://teams.microsoft.com/l/team/19%3afYKS_RD2n1q4UhguA9jwEJk0A_VjYPO4TiLQjYlG_bo1%40thread.tacv2/conversations?groupId=381b5f11-b342-4a3a-8a78-8b371a90457d&tenantId=72fca1b1-2c2e-4376-a445-294d80196804`,rel:`nofollow`,children:`Teams`}),` and `,(0,c.jsx)(t.a,{href:`https://datalab-amsterdam.slack.com/archives/CV54XSMSA`,rel:`nofollow`,children:`Slack`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ask questions and hear about updates in our `,(0,c.jsx)(t.strong,{children:`sprint reviews`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Any `,(0,c.jsx)(t.strong,{children:`issues or requests`}),` are welcome on `,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/issues`,rel:`nofollow`,children:`GitHub`}),` or in `,(0,c.jsx)(t.a,{href:`https://teams.microsoft.com/l/team/19%3afYKS_RD2n1q4UhguA9jwEJk0A_VjYPO4TiLQjYlG_bo1%40thread.tacv2/conversations?groupId=381b5f11-b342-4a3a-8a78-8b371a90457d&tenantId=72fca1b1-2c2e-4376-a445-294d80196804`,rel:`nofollow`,children:`Teams`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`consumer-responsibilities`,children:`Consumer responsibilities`}),`
`,(0,c.jsx)(t.p,{children:`To make the most of the design system and avoid surprises:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Review changelogs`}),` before upgrading.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Plan for major releases`}),` roughly once every three months.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Stay up to date`}),` and upgrade to at least each major release.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Join sprint reviews`}),` for early insights or to raise questions.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};