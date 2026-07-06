import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,g as i}from"./iframe-CacHD71N.js";import{t as a}from"./mdx-react-shim-Dq0b_vA4.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/AI assistance`}),`
`,(0,c.jsx)(t.h1,{id:`ai-assistance`,children:`AI assistance`}),`
`,(0,c.jsx)(t.p,{children:`Many teams now build interfaces with an AI coding assistant.
We run a Model Context Protocol (MCP) server so your assistant can work with the real Amsterdam Design System: our components, their properties, our stories, and our documentation.
With it connected, the assistant reuses existing components with the correct properties, variants, and accessibility patterns, instead of inventing markup that only looks similar.`}),`
`,(0,c.jsx)(t.h2,{id:`why-connect-your-assistant`,children:`Why connect your assistant`}),`
`,(0,c.jsx)(t.p,{children:`Without this context, an assistant guesses.
It writes generic HTML, invents property names, and misses our accessibility and language conventions.`}),`
`,(0,c.jsx)(t.p,{children:`With it connected, the assistant:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`reaches for an existing component instead of rebuilding one;`}),`
`,(0,c.jsx)(t.li,{children:`uses the correct properties and variants, taken from the current release;`}),`
`,(0,c.jsx)(t.li,{children:`follows our accessibility patterns and Dutch-language defaults.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`This keeps what you ship consistent with the rest of the City’s services, with less review and rework.`}),`
`,(0,c.jsx)(t.h2,{id:`what-the-server-exposes`,children:`What the server exposes`}),`
`,(0,c.jsx)(t.p,{children:`The hosted server gives your assistant a small set of tools, which it calls on its own:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`list-all-documentation`}),` lists every component and documentation page, so the assistant knows what exists.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`get-documentation`}),` returns a component’s full documentation, properties, and code examples.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`get-documentation-for-story`}),` returns the documentation for one specific story variant.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`You simply ask for what you want to build.`}),`
`,(0,c.jsx)(t.p,{children:`Contributors who run Storybook locally also get tools to preview stories, follow our story-writing conventions, and run component and accessibility tests.`}),`
`,(0,c.jsx)(t.h2,{id:`the-endpoint`,children:`The endpoint`}),`
`,(0,c.jsxs)(t.p,{children:[`The server speaks the Model Context Protocol over Streamable HTTP, at the path `,(0,c.jsx)(t.code,{children:`/mcp`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Most people should use the hosted endpoint.
It needs no setup, tracks our `,(0,c.jsx)(t.code,{children:`main`}),` branch, and is public, so any tool can connect without signing in:`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`https://main--68db9df886b46f139748c074.chromatic.com/mcp
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Contributors working on the design system itself can instead use the local endpoint, available while `,(0,c.jsx)(t.code,{children:`pnpm run watch:storybook`}),` is running:`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`http://localhost:6006/mcp
`})}),`
`,(0,c.jsx)(t.p,{children:`The local URL follows your Storybook port; if you run it on another port, change the number to match.`}),`
`,(0,c.jsx)(t.h2,{id:`connect-your-tool`,children:`Connect your tool`}),`
`,(0,c.jsxs)(t.p,{children:[`The snippets below use the hosted endpoint.
Contributors can swap in `,(0,c.jsx)(t.code,{children:`http://localhost:6006/mcp`}),` to use a local Storybook.`]}),`
`,(0,c.jsxs)(t.p,{children:[`One thing to watch: Visual Studio Code uses the key `,(0,c.jsx)(t.code,{children:`servers`}),`, while most other tools use `,(0,c.jsx)(t.code,{children:`mcpServers`}),`.
Use the snippet that matches your tool.`]}),`
`,(0,c.jsx)(t.h3,{id:`github-copilot`,children:`GitHub Copilot`}),`
`,(0,c.jsxs)(t.p,{children:[`In Visual Studio Code, add a workspace file `,(0,c.jsx)(t.code,{children:`.vscode/mcp.json`}),`:`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "servers": {
    "amsterdam-design-system": {
      "type": "http",
      "url": "https://main--68db9df886b46f139748c074.chromatic.com/mcp"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:`In a JetBrains IDE such as WebStorm, open the GitHub Copilot plugin’s settings and add an MCP server with the URL above.
Connecting Copilot to MCP servers in JetBrains IDEs is newer than in Visual Studio Code; if you do not see the option, update the plugin and check its release notes.`}),`
`,(0,c.jsx)(t.h3,{id:`jetbrains-ai-assistant-or-junie`,children:`JetBrains AI Assistant or Junie`}),`
`,(0,c.jsx)(t.p,{children:`For AI Assistant (WebStorm or IntelliJ 2025.2 and later), go to Settings → Tools → AI Assistant → Model Context Protocol (MCP) and add a server with the URL above.`}),`
`,(0,c.jsxs)(t.p,{children:[`For Junie, add a project file `,(0,c.jsx)(t.code,{children:`.junie/mcp/mcp.json`}),`:`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "mcpServers": {
    "amsterdam-design-system": {
      "url": "https://main--68db9df886b46f139748c074.chromatic.com/mcp"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`cursor`,children:`Cursor`}),`
`,(0,c.jsxs)(t.p,{children:[`Add a project file `,(0,c.jsx)(t.code,{children:`.cursor/mcp.json`}),`:`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "mcpServers": {
    "amsterdam-design-system": {
      "url": "https://main--68db9df886b46f139748c074.chromatic.com/mcp"
    }
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`claude-code`,children:`Claude Code`}),`
`,(0,c.jsx)(t.p,{children:`Run:`}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`claude mcp add --transport http amsterdam-design-system https://main--68db9df886b46f139748c074.chromatic.com/mcp
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Or add a project file `,(0,c.jsx)(t.code,{children:`.mcp.json`}),`:`]}),`
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
`,(0,c.jsx)(t.h3,{id:`another-tool`,children:`Another tool`}),`
`,(0,c.jsx)(t.p,{children:`Any MCP-capable assistant can connect.
Use your tool’s own MCP settings to add a server over Streamable HTTP at the endpoint above.
Most tools accept this shape:`}),`
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
`,(0,c.jsx)(t.h2,{id:`example-prompts`,children:`Example prompts`}),`
`,(0,c.jsx)(t.p,{children:`Once connected, ask for what you want in plain language:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`“Build a contact form with the Amsterdam Design System: a name field, an email field, and a submit button.”`}),`
`,(0,c.jsx)(t.li,{children:`“Show me the properties and variants of the Alert component.”`}),`
`,(0,c.jsx)(t.li,{children:`“Replace this hand-built card with the design system’s Card component.”`}),`
`,(0,c.jsx)(t.li,{children:`“Lay out this page with Grid and Column from the design system.”`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`good-to-know`,children:`Good to know`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`The hosted endpoint tracks the `,(0,c.jsx)(t.code,{children:`main`}),` branch, so your assistant works with our latest released components and properties.`]}),`
`,(0,c.jsx)(t.li,{children:`It draws on our stories and documentation, so richer stories lead to better answers.`}),`
`,(0,c.jsx)(t.li,{children:`Component support starts with React; other technologies follow as the Storybook MCP server adds them.`}),`
`,(0,c.jsx)(t.li,{children:`This page always lists the current endpoint; if a connection stops working, check here for the latest address.`}),`
`,(0,c.jsxs)(t.li,{children:[`If a component you need does not exist yet, `,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/blob/develop/CONTRIBUTING.md`,rel:`nofollow`,children:`request it or contribute`}),` rather than having your assistant build a one-off.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};