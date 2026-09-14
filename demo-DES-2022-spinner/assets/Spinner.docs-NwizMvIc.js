import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,p as a,u as o}from"./blocks-BFa-eblR.js";import{t as s}from"./jsx-runtime-ATHzeHXA.js";import{i as c,r as l}from"./react-Dyi61YEg.js";import{n as u,t as d}from"./DesignTokensTable-C6evVqib.js";import{n as f,t as p}from"./Spinner.stories-CvW_fqxa.js";var m,h;function g(){return(g=e((()=>{m={spinner:{}},h={ams:m}})))()}function _(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...c(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[`
`,`
`,`
`,`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(a,{}),`
`,(0,y.jsx)(t,{of:p}),`
`,(0,y.jsx)(n,{}),`
`,(0,y.jsx)(i,{}),`
`,(0,y.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,y.jsx)(r.p,{children:`Use a Spinner when content is loading for a short or unknown amount of time. For example, when a button is submitting a form or a widget is refreshing its data.`}),`
`,(0,y.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,y.jsx)(r.p,{children:`Do not use a Spinner when the duration or progress is known, such as with a file upload. Show the actual progress instead.`}),`
`,(0,y.jsx)(r.p,{children:`For loading a whole page or a large part of a page, where loading takes around 1 to 10 seconds, use Skeleton instead. A Skeleton shows users what the content will look like while it is loading, which a Spinner does not.`}),`
`,(0,y.jsx)(r.p,{children:`Do not show a Spinner for content that is already available. Show the content immediately instead.`}),`
`,(0,y.jsx)(r.p,{children:`Avoid using multiple loading indicators in the same view.`}),`
`,(0,y.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,y.jsx)(r.p,{children:`Only show a Spinner while the content or action is loading. Remove the Spinner and show the result or an error as soon as loading is finished.`}),`
`,(0,y.jsx)(r.p,{children:`Consider waiting a short moment before showing the Spinner. This prevents the Spinner from briefly appearing when loading finishes almost immediately.`}),`
`,(0,y.jsx)(r.p,{children:`Choose a size that fits the situation:`}),`
`,(0,y.jsxs)(r.ul,{children:[`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(`b`,{children:`Small:`}),` for use next to text or inside a button.`]}),`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(`b`,{children:`Medium:`}),` for a standalone element, such as a card or panel.`]}),`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(`b`,{children:`large:`}),` for a loading state that covers a page or a large part of a page.`]}),`
`]}),`
`,(0,y.jsx)(r.p,{children:`A Spinner is decorative and hidden from screen readers, so it does not announce anything itself.
The region containing the Spinner announces the loading state instead. This prevents multiple Spinners on the same page from making separate announcements.`}),`
`,(0,y.jsxs)(r.p,{children:[`Set `,(0,y.jsx)(r.code,{children:`aria-busy="true"`}),` on the region while it is loading. Give the region one status message that stays available and changes from a loading message to the result when loading is finished.`]}),`
`,(0,y.jsx)(r.pre,{children:(0,y.jsx)(r.code,{className:`language-html`,children:`<section aria-busy="true">
  <p class="ams-visually-hidden" role="status">Zoekresultaten worden geladen</p>
  <Spinner size="medium" />
</section>
`})}),`
`,(0,y.jsxs)(r.p,{children:[`When the content has loaded, replace the Spinner with it, set `,(0,y.jsx)(r.code,{children:`aria-busy`}),` to `,(0,y.jsx)(r.code,{children:`false`}),` and change the status message for example to ‘10 resultaten gevonden’.`]}),`
`,(0,y.jsx)(r.h4,{id:`customising-the-animation`,children:`Customising the animation`}),`
`,(0,y.jsx)(r.p,{children:`The spinner component uses it's own custom animation. This animation can be found in it's own separate __animation.scss file.`}),`
`,(0,y.jsx)(r.p,{children:`You can change it to fit your theme. For example, you can:`}),`
`,(0,y.jsxs)(r.ul,{children:[`
`,(0,y.jsx)(r.li,{children:`Change the speed so that the spinner is rotating faster or slower.`}),`
`,(0,y.jsx)(r.li,{children:`Use your own @keyframes to change the animation.`}),`
`,(0,y.jsx)(r.li,{children:`Set it to none to disable the animation.`}),`
`]}),`
`,(0,y.jsx)(r.p,{children:`Users who prefer reduced motion will not see the animation, regardless of how it is configured. The ring itself will still be visible.`}),`
`,(0,y.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,y.jsx)(r.p,{children:`A Spinner does not have a fixed duration or children. It is one self-contained element that only shows that something is loading. It does not show how much of the process is finished or what the content will look like.`}),`
`,(0,y.jsx)(r.p,{children:`There are three sizes: small, medium, and large. This allows the same component to be used for inline, card level and page level loading states without changing its meaning.`}),`
`,(0,y.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,y.jsx)(r.p,{children:`The ring uses two colours. A neutral track is always visible, while an accent colour moves around one part of the circle.`}),`
`,(0,y.jsx)(r.p,{children:`This makes the animation easy to see without drawing too much attention to the loading state.`}),`
`,(0,y.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(r.p,{children:[`A Spinner uses `,(0,y.jsx)(r.code,{children:`aria-hidden="true"`}),`, so screen readers ignore it.`]}),`
`,(0,y.jsx)(r.p,{children:`The Spinner does not announce that something is loading. The region that contains the Spinner is responsible for announcing the loading state. This prevents multiple Spinners on the same page from each making their own announcement.`}),`
`,(0,y.jsxs)(r.p,{children:[`This meets `,(0,y.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#status-messages`,rel:`nofollow`,children:`WCAG 4.1.3`}),`. aria-busy can also help assistive technology wait with announcing updates until the region has finished loading. This is allowed by the ARIA specification, but not every screen reader supports this in the same way.`]}),`
`,(0,y.jsx)(r.p,{children:`The animation only runs for users who have not enabled reduced motion. Other users see a static ring.
In forced colors mode, the ring remains visible and the moving part stays distinguishable by using system colours.`}),`
`,(0,y.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,y.jsxs)(r.ul,{children:[`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(r.a,{href:`/docs/components-feedback-skeleton--docs`,children:`Skeleton`}),` – for loading states where the shape of the content is known and useful to show while loading.`]}),`
`]}),`
`,(0,y.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,y.jsx)(d,{tokens:h})]})}function v(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=s(),l(),r(),u(),g(),f()})))()}b();export{v as default};