import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-DDIQjgnz.js";import{t as c}from"./jsx-runtime-Bq1bXGty.js";import{i as l}from"./react-BnCtKaSV.js";import{n as u,t as d}from"./DesignTokensTable-C7WfAlnV.js";import{t as f}from"./mdx-react-shim-9RzcSRdq.js";import{CustomLogo as p,n as m,t as h}from"./Logo.stories-Br7xDHPt.js";var g,_,v=e((()=>{g={logo:{"block-size":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.type":`dimension`}},"min-block-size":{$value:{value:2.5,unit:`rem`},$type:`dimension`},emblem:{color:{$value:`#ec0000`,$type:`color`}},subsite:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}}},title:{color:{$value:`#ec0000`,$type:`color`}}}},_={ams:g}}));function y(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[`
`,`
`,`
`,`
`,(0,x.jsx)(s,{of:h}),`
`,(0,x.jsx)(o,{}),`
`,(0,x.jsx)(t,{of:h}),`
`,(0,x.jsx)(n,{}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(r.p,{children:`The Logo is always displayed.
It is left-aligned in the Page Header.`}),`
`,(0,x.jsx)(r.p,{children:`The Logo links to the homepage of the website.
If the website is a form, application, or tool without a homepage, the Logo links to the page where the form, application, or tool is referred to.`}),`
`,(0,x.jsx)(r.p,{children:`Use the Dutch logo for websites in the Dutch language and any language other than English.
Use the English logo for websites in the English language.`}),`
`,(0,x.jsx)(r.p,{children:`Other logo variations exist, but they cannot be used on our websites.`}),`
`,(0,x.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(r.h3,{id:`custom-logo`,children:`Custom logo`}),`
`,(0,x.jsx)(r.p,{children:`Websites for the City of Amsterdam must use one of our own logos.`}),`
`,(0,x.jsx)(r.p,{children:`Other organisations using this component can display their own brand by providing a label and a custom image.
The label should be ‘name of the organisation + logo’.
The image must be an svg.
Set the appropriate values for the sizing tokens.`}),`
`,(0,x.jsx)(a,{of:p}),`
`,(0,x.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,x.jsx)(r.p,{children:`The Logo is 40 pixels tall at its minimum, growing to 60 pixels in wider windows.
This also applies to sub-brand logos.`}),`
`,(0,x.jsx)(r.p,{children:`Two rules produce that range: a fluid height that scales with the window, and a minimum height beneath it.
The fluid value alone would carry on shrinking past 40 pixels on the narrowest screens, and the minimum is what stops it there.`}),`
`,(0,x.jsx)(r.p,{children:`The colours are applied to the parts of the drawing — the emblem, the wordmark, and the sub-brand line — through the stylesheet rather than being baked into the artwork.
Each brand therefore uses the same three tokens, and a theme can restyle all of them at once.
The artwork also names its own colours, so a Logo still appears in the right red before the stylesheet arrives.`}),`
`,(0,x.jsx)(r.p,{children:`Websites operated by one of the sub-brands use their specific logo.
They have a separate status because of their unique service provision not directly associated with the City.`}),`
`,(0,x.jsxs)(r.p,{children:[(0,x.jsx)(r.a,{href:`https://www.amsterdam.nl/stijlweb/uitgangspunten/logo-gemeente-amsterdam/#hbab93411-6797-410f-8c1d-40fb988dd077`,rel:`nofollow`,children:`Stijlweb`}),` lists the sub-brands and their logos.`]}),`
`,(0,x.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsxs)(r.p,{children:[`A Logo renders an `,(0,x.jsx)(r.code,{children:`svg`}),` marked up as an image, with the brand’s name as its label, so it is announced as ‘Gemeente Amsterdam logo’ rather than passed over as decoration.
Each brand carries its own label, and a custom logo supplies one alongside its artwork.`]}),`
`,(0,x.jsx)(r.p,{children:`That label is fixed text, not something automatic translation picks up, which is why an English site uses the English logo rather than relabelling the Dutch one, as the usage guidelines describe.`}),`
`,(0,x.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,x.jsxs)(r.ul,{children:[`
`,(0,x.jsxs)(r.li,{children:[(0,x.jsx)(r.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`}),` – the container that holds the Logo.`]}),`
`,(0,x.jsxs)(r.li,{children:[(0,x.jsx)(r.a,{href:`https://assets.amsterdam.nl/publish/pages/1007650/logoset_voor_websites_en_apps.zip`,rel:`nofollow`,children:`Logo set for websites and apps (ZIP, 10 kB)`}),` – downloadable logo set.`]}),`
`]}),`
`,(0,x.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,x.jsx)(d,{tokens:_})]})}function b(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=c(),f(),r(),u(),v(),m()}))();export{b as default};