import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,u as n}from"./blocks-BIKInQVV.js";import{t as r}from"./jsx-runtime-Bq1bXGty.js";import{i}from"./react-BnCtKaSV.js";import{t as a}from"./mdx-react-shim-9RzcSRdq.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(n,{title:`Docs/Developer Guide/AI assistance`}),`
`,(0,c.jsx)(t.h1,{id:`ai-assistance`,children:`AI assistance`}),`
`,(0,c.jsx)(t.p,{children:`We run an MCP server to let your assistant work with the real Amsterdam Design System.`}),`
`,(0,c.jsx)(t.h2,{id:`why-connect-your-assistant`,children:`Why connect your assistant`}),`
`,(0,c.jsx)(t.p,{children:`This server exposes our components and their features, as well as our stories and documentation.
Without this context, an assistant guesses: it writes generic HTML, invents property names, and misses our accessibility and language conventions.`}),`
`,(0,c.jsx)(t.p,{children:`With it, the assistant builds with existing components, using the correct properties, variants, and accessibility patterns from the current release.
This keeps what you ship consistent with the rest of the City’s services, with less review and rework.`}),`
`,(0,c.jsx)(t.h2,{id:`what-the-server-exposes`,children:`What the server exposes`}),`
`,(0,c.jsx)(t.p,{children:`The hosted server gives your assistant a small set of tools, which it calls on its own:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`list-all-documentation`}),` lists every component and documentation page, so the assistant knows what exists.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`get-documentation`}),` returns a component’s full documentation, properties, and code examples.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`get-documentation-for-story`}),` returns the documentation for one specific story variant.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`You simply ask for what you want to build.`}),`
`,(0,c.jsx)(t.h2,{id:`the-endpoint`,children:`The endpoint`}),`
`,(0,c.jsxs)(t.p,{children:[`Our hosted endpoint needs no setup, tracks our `,(0,c.jsx)(t.code,{children:`main`}),` branch, and is public, so any tool can connect:`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`https://main--68db9df886b46f139748c074.chromatic.com/mcp
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Contributors can use the local endpoint while `,(0,c.jsx)(t.code,{children:`pnpm run watch:storybook`}),` is running:`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`http://localhost:6006/mcp
`})}),`
`,(0,c.jsx)(t.p,{children:`The local URL follows your Storybook port; if you run it on another port, change the number to match.`}),`
`,(0,c.jsx)(t.h2,{id:`connect-your-tool`,children:`Connect your tool`}),`
`,(0,c.jsxs)(t.p,{children:[`Any MCP-capable assistant can connect.
Use your tool’s MCP settings to add a server over Streamable HTTP at the hosted endpoint above.
Contributors can swap in `,(0,c.jsx)(t.code,{children:`http://localhost:6006/mcp`}),` to use a local Storybook.`]}),`
`,(0,c.jsx)(t.p,{children:`Many tools read this configuration from a JSON file, and most accept this shape:`}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "mcpServers": {
    "amsterdam-design-system": {
      "type": "http",
      "url": "https://main--68db9df886b46f139748c074.chromatic.com/mcp"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:`The exact key, file name, and file location differ per tool; check your tool’s MCP documentation for the specifics.`}),`
`,(0,c.jsx)(t.h2,{id:`example-prompts`,children:`Example prompts`}),`
`,(0,c.jsx)(t.p,{children:`Once connected, ask for what you want in plain language:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`“Build a contact form with ADS: a name and email field and a submit button.”`}),`
`,(0,c.jsx)(t.li,{children:`“Show me the properties and variants of the Alert component.”`}),`
`,(0,c.jsx)(t.li,{children:`“Replace this hand-built card with the design system’s Card component.”`}),`
`,(0,c.jsx)(t.li,{children:`“Lay out this page with Grid and Column from the design system.”`}),`
`,(0,c.jsx)(t.li,{children:`“Should I use a Button or a Link component for this interaction?”`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`good-to-know`,children:`Good to know`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The hosted endpoint tracks the `,(0,c.jsx)(t.code,{children:`main`}),` branch, so your assistant works with our latest released API.`]}),`
`,(0,c.jsx)(t.li,{children:`It draws on our stories and documentation, so richer stories lead to better answers.`}),`
`,(0,c.jsx)(t.li,{children:`Component support starts with React; other technologies follow as the Storybook MCP server adds them.`}),`
`,(0,c.jsx)(t.li,{children:`This page always lists the current endpoint; if a connection stops working, check here for the latest address.`}),`
`,(0,c.jsxs)(t.li,{children:[`If a component you need does not exist yet, `,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/blob/develop/CONTRIBUTING.md`,rel:`nofollow`,children:`request it or contribute`}),` rather than having your assistant build a one-off.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),t()}))();export{s as default};