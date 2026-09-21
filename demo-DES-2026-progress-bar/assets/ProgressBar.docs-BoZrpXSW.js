import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,p as a,u as o}from"./blocks-BFa-eblR.js";import{t as s}from"./jsx-runtime-ATHzeHXA.js";import{i as c,r as l}from"./react-Dyi61YEg.js";import{n as u,t as d}from"./DesignTokensTable-BzzCoOQa.js";import{n as f,t as p}from"./ProgressBar.stories-DXUkVVkY.js";var m,h;function g(){return(g=e((()=>{m={"progress-bar":{"transition-duration":{$value:`0.3s`,$type:`duration`,$description:`The duration of the transition.`},"transition-timing-function":{$value:`ease`,$extensions:{"nl.amsterdam.type":`transitionTimingFunction`},$description:`The timing function of the transition.`},height:{$value:{value:.5,unit:`rem`},$type:`dimension`,$description:`The block size of the ProgressBar. (needs to be discussed)`},"border-width":{$value:{value:.0625,unit:`rem`},$type:`dimension`,$description:`The border width of the ProgressBar. (needs to be discussed)`},"text-font-size":{$value:{value:.875,unit:`rem`},$type:`dimension`,$description:`The font size of the ProgressBar's text. (needs to be discussed)`},"text-gap":{$value:{value:.25,unit:`rem`},$type:`dimension`,$description:`The space between the ProgressBar's text and its bar. (needs to be discussed)`}}},h={ams:m}})))()}function _(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...c(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[`
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
`,(0,y.jsx)(r.p,{children:`Use a Progress Bar to show progress through a process with a known number of steps, such as the questions in a form.`}),`
`,(0,y.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,y.jsx)(r.p,{children:`Do not use a Progress Bar for loading, such as while a file is uploading. Show the actual loading progress with a different component instead or use a Spinner if the duration is unknown.`}),`
`,(0,y.jsx)(r.p,{children:`Do not use a Progress Bar for an unknown or indeterminate amount of progress. Use a Spinner instead.`}),`
`,(0,y.jsx)(r.p,{children:`Do not use a Progress Bar to show the status of a multi-step process, such as the handling of a permit application. Use a Progress List instead: it can show which steps are completed, current or upcoming, not just how far along the process is.`}),`
`,(0,y.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,y.jsxs)(r.p,{children:[`Always provide `,(0,y.jsx)(r.code,{children:`max`}),`, `,(0,y.jsx)(r.code,{children:`text`}),` and `,(0,y.jsx)(r.code,{children:`value`}),`. All three are required.`]}),`
`,(0,y.jsxs)(r.p,{children:[(0,y.jsx)(r.code,{children:`text`}),` is not calculated from `,(0,y.jsx)(r.code,{children:`value`}),` and `,(0,y.jsx)(r.code,{children:`max`}),`. Provide it yourself, for example ‘4 van de 10 stappen’. This is necessary because a text like ‘nog maximaal 8 vragen’ cannot be derived from those two numbers, and it means the text can never be forgotten.`]}),`
`,(0,y.jsx)(r.p,{children:`Only show a total if it holds true for the entire process. If you are not sure the total will stay accurate, use a text such as ‘nog maximaal 8 vragen’ instead of a fixed total.`}),`
`,(0,y.jsx)(r.p,{children:`A Progress Bar does not announce changes to its value itself. If a change should be announced to screen reader users, let the page announce it with a single status message. Describe in your own documentation when and how that message changes.`}),`
`,(0,y.jsx)(r.p,{children:`Use on a white background only.`}),`
`,(0,y.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,y.jsxs)(r.p,{children:[`A Progress Bar shows a known amount of progress as a filled portion of a bar, together with a `,(0,y.jsx)(r.code,{children:`text`}),` that is always shown alongside it.`]}),`
`,(0,y.jsx)(r.p,{children:`The bar animates when its value changes, drawing attention to the increase in progress. It does not animate when the page is first shown, so a form with one question per page does not look like it restarts from zero on every page.`}),`
`,(0,y.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,y.jsxs)(r.p,{children:[`The `,(0,y.jsx)(r.code,{children:`text`}),` is shown centred above the bar.`]}),`
`,(0,y.jsx)(r.p,{children:`Below the text is the track. It has a rounded border and a background. The border radius is the same as the height of the track, which gives it fully rounded ends.`}),`
`,(0,y.jsxs)(r.p,{children:[`Inside the track is the `,(0,y.jsx)(r.code,{children:`fill`}),`. The fill shows how much of the progress is completed. Its width is controlled with CSS using `,(0,y.jsx)(r.code,{children:`transform: scaleX()`}),`, based on `,(0,y.jsx)(r.code,{children:`value / max`}),`.`]}),`
`,(0,y.jsxs)(r.p,{children:[`We use our own fill instead of the browser's default `,(0,y.jsx)(r.code,{children:`<progress>`}),` styling. This gives us full control over how the Progress Bar looks and keeps it consistent across browsers.`]}),`
`,(0,y.jsx)(r.p,{children:`The Progress Bar and its track are always 100% wide. They do not add extra space around themselves.`}),`
`,(0,y.jsx)(r.p,{children:`For now, the Progress Bar can only be used on a white background.`}),`
`,(0,y.jsx)(r.h3,{id:`animation`,children:`Animation`}),`
`,(0,y.jsxs)(r.p,{children:[`The fill uses CSS `,(0,y.jsx)(r.code,{children:`transform`}),` instead of the browser's default `,(0,y.jsx)(r.code,{children:`<progress>`}),` styling. This allows the animation to be handled entirely with CSS.`]}),`
`,(0,y.jsx)(r.p,{children:`The fill only animates when value changes. It does not animate when the Progress Bar first appears.`}),`
`,(0,y.jsx)(r.p,{children:`The animation is only enabled when the user has not enabled reduced motion. Users who prefer reduced motion see the fill move directly to its new value without an animation.`}),`
`,(0,y.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(r.p,{children:[`The Progress Bar uses the native `,(0,y.jsx)(r.code,{children:`<progress>`}),` element so screen readers can understand the current progress. The `,(0,y.jsx)(r.code,{children:`value`}),` and `,(0,y.jsx)(r.code,{children:`max`}),` props are passed to the element.`]}),`
`,(0,y.jsxs)(r.p,{children:[`The `,(0,y.jsx)(r.code,{children:`<progress>`}),` element is visually hidden. The visible `,(0,y.jsx)(r.code,{children:`text`}),` and fill use `,(0,y.jsx)(r.code,{children:`aria-hidden`}),`, while `,(0,y.jsx)(r.code,{children:`aria-label={text}`}),` makes sure the text is read once by screen readers.`]}),`
`,(0,y.jsx)(r.p,{children:`The Progress Bar does not announce value changes itself. If a change needs to be announced, the containing page should provide a separate status message.`}),`
`,(0,y.jsx)(r.p,{children:`In forced colors mode, the border and fill use system colours to remain visible.`}),`
`,(0,y.jsxs)(r.p,{children:[`In right to left (`,(0,y.jsx)(r.code,{children:`dir="rtl"`}),`) layouts, the fill grows from right to left.`]}),`
`,(0,y.jsx)(r.p,{children:`The track and fill keep their colours when printed.`}),`
`,(0,y.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,y.jsxs)(r.ul,{children:[`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(r.a,{href:`/docs/components-containers-progress-list--docs`,children:`Progress List`}),` – for showing the status of a multi-step process, rather than progress within a single step.`]}),`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(r.a,{href:`/docs/components-feedback-spinner--docs`,children:`Spinner`}),` – for a short or unknown loading duration, instead of known progress.`]}),`
`]}),`
`,(0,y.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,y.jsx)(d,{tokens:h})]})}function v(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=s(),l(),r(),u(),g(),f()})))()}b();export{v as default};