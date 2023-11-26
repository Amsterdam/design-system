import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const _ of e.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&n(_)}).observe(document,{childList:!0,subtree:!0});function m(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(o){if(o.ep)return;o.ep=!0;const e=m(o);fetch(o.href,e)}})();const l="modulepreload",p=function(r,i){return new URL(r,i).href},u={},t=function(i,m,n){if(!m||m.length===0)return i();const o=document.getElementsByTagName("link");return Promise.all(m.map(e=>{if(e=p(e,n),e in u)return;u[e]=!0;const _=e.endsWith(".css"),E=_?'[rel="stylesheet"]':"";if(!!n)for(let c=o.length-1;c>=0;c--){const a=o[c];if(a.href===e&&(!_||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${E}`))return;const s=document.createElement("link");if(s.rel=_?"stylesheet":l,_||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),_)return new Promise((c,a)=>{s.addEventListener("load",c),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=e,window.dispatchEvent(_),!_.defaultPrevented)throw e})},{createBrowserChannel:O}=__STORYBOOK_MODULE_CHANNELS__,{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,d=O({page:"preview"});L.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const P={"./src/VisuallyHidden/VisuallyHidden.docs.mdx":async()=>t(()=>import("./VisuallyHidden.docs-07Kx6WWX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),"./src/UnorderedList/UnorderedList.docs.mdx":async()=>t(()=>import("./UnorderedList.docs-JO8pC6Ws.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,13,11]),import.meta.url),"./src/TopTaskLink/TopTaskLink.docs.mdx":async()=>t(()=>import("./TopTaskLink.docs-yGshscmr.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8,15,16,11]),import.meta.url),"./src/Switch/Switch.docs.mdx":async()=>t(()=>import("./Switch.docs-wpktNLi6.js"),__vite__mapDeps([17,1,2,3,4,5,6,7,8,18,11]),import.meta.url),"./src/Screen/Screen.docs.mdx":async()=>t(()=>import("./Screen.docs-f01_lsXP.js"),__vite__mapDeps([19,1,2,3,4,5,6,7,8,20,11]),import.meta.url),"./src/Paragraph/Paragraph.docs.mdx":async()=>t(()=>import("./Paragraph.docs-6ILtI8Tt.js"),__vite__mapDeps([21,1,2,3,4,5,6,7,8,22,11]),import.meta.url),"./src/Pagination/Pagination.docs.mdx":async()=>t(()=>import("./Pagination.docs-LevQDKm2.js"),__vite__mapDeps([23,1,2,3,4,5,6,7,8,24,11]),import.meta.url),"./src/PageMenu/PageMenu.docs.mdx":async()=>t(()=>import("./PageMenu.docs-EVGRtChv.js"),__vite__mapDeps([25,1,2,3,4,5,6,7,8,26,11]),import.meta.url),"./src/PageHeading/PageHeading.docs.mdx":async()=>t(()=>import("./PageHeading.docs-3cCmGLe0.js"),__vite__mapDeps([27,1,2,3,4,5,6,7,8,28,11]),import.meta.url),"./src/OrderedList/OrderedList.docs.mdx":async()=>t(()=>import("./OrderedList.docs-yDxnz-Ou.js"),__vite__mapDeps([29,1,2,3,4,5,6,7,8,30,11]),import.meta.url),"./src/Logo/Logo.docs.mdx":async()=>t(()=>import("./Logo.docs-FVD3FuY1.js"),__vite__mapDeps([31,1,2,3,4,5,6,7,8,32,11]),import.meta.url),"./src/Link/Link.docs.mdx":async()=>t(()=>import("./Link.docs-NeqpKiWh.js"),__vite__mapDeps([33,1,2,3,4,5,6,7,8,34,11]),import.meta.url),"./src/Image/Image.docs.mdx":async()=>t(()=>import("./Image.docs-kQOgVygF.js"),__vite__mapDeps([35,1,2,3,4,5,6,7,8,36,11]),import.meta.url),"./src/Icon/Icon.docs.mdx":async()=>t(()=>import("./Icon.docs-SoFmNbDQ.js"),__vite__mapDeps([37,1,2,3,4,5,6,7,8,38,11]),import.meta.url),"./src/Highlight/Highlight.docs.mdx":async()=>t(()=>import("./Highlight.docs-xW43Lyny.js"),__vite__mapDeps([39,1,2,3,4,5,6,7,8,40,11]),import.meta.url),"./src/Heading/Heading.docs.mdx":async()=>t(()=>import("./Heading.docs-N8BOTQDH.js"),__vite__mapDeps([41,1,2,3,4,5,6,7,8,42,11]),import.meta.url),"./src/GridCell/GridCell.docs.mdx":async()=>t(()=>import("./GridCell.docs-brnu-AsB.js"),__vite__mapDeps([43,1,2,3,4,5,6,7,8,44,11]),import.meta.url),"./src/Grid/Grid.docs.mdx":async()=>t(()=>import("./Grid.docs-aQEyxMnq.js"),__vite__mapDeps([45,1,2,3,4,5,6,7,8,46,11]),import.meta.url),"./src/FormLabel/FormLabel.docs.mdx":async()=>t(()=>import("./FormLabel.docs-MFGqMa4g.js"),__vite__mapDeps([47,1,2,3,4,5,6,7,8,48,11]),import.meta.url),"./src/Footer/Footer.docs.mdx":async()=>t(()=>import("./Footer.docs-lMQBXTrU.js"),__vite__mapDeps([49,1,2,3,4,5,6,7,8,50,11]),import.meta.url),"./src/Dialog/Dialog.docs.mdx":async()=>t(()=>import("./Dialog.docs-e8Lq0DyF.js"),__vite__mapDeps([51,1,2,3,4,5,6,7,8,52,11]),import.meta.url),"./src/Checkbox/Checkbox.docs.mdx":async()=>t(()=>import("./Checkbox.docs-Ac2T20po.js"),__vite__mapDeps([53,1,2,3,4,5,6,7,8,54,11]),import.meta.url),"./src/Card/Card.docs.mdx":async()=>t(()=>import("./Card.docs-b3vDoXoh.js"),__vite__mapDeps([55,1,2,3,4,5,6,7,8,56,11]),import.meta.url),"./src/Button/Button.docs.mdx":async()=>t(()=>import("./Button.docs-mOjK8nW3.js"),__vite__mapDeps([57,1,2,3,4,5,6,7,8,58,11]),import.meta.url),"./src/Breadcrumb/Breadcrumb.docs.mdx":async()=>t(()=>import("./Breadcrumb.docs-OGjt4pW0.js"),__vite__mapDeps([59,1,2,3,4,5,6,7,8,60,11]),import.meta.url),"./src/Blockquote/Blockquote.docs.mdx":async()=>t(()=>import("./Blockquote.docs-85OSrAXX.js"),__vite__mapDeps([61,1,2,3,4,5,6,7,8,62,11]),import.meta.url),"./src/AspectRatio/AspectRatio.docs.mdx":async()=>t(()=>import("./AspectRatio.docs-7AhwSywF.js"),__vite__mapDeps([63,1,2,3,4,5,6,7,8,64,11]),import.meta.url),"./src/Alert/Alert.docs.mdx":async()=>t(()=>import("./Alert.docs-iD3gm8UO.js"),__vite__mapDeps([65,1,2,3,4,5,6,7,8,66,11]),import.meta.url),"./src/Accordion/Accordion.docs.mdx":async()=>t(()=>import("./Accordion.docs-7kXpcYn4.js"),__vite__mapDeps([67,1,2,3,4,5,6,7,8,68,11]),import.meta.url),"./src/VisuallyHidden/VisuallyHidden.stories.tsx":async()=>t(()=>import("./VisuallyHidden.stories-JIlMBXLj.js").then(r=>r.V),__vite__mapDeps([9,1,2,3,4,10]),import.meta.url),"./src/UnorderedList/UnorderedList.stories.tsx":async()=>t(()=>import("./UnorderedList.stories-vLV_jMeD.js").then(r=>r.U),__vite__mapDeps([13,1,2,3,4]),import.meta.url),"./src/TopTaskLink/TopTaskLink.stories.tsx":async()=>t(()=>import("./TopTaskLink.stories-CSOpbedE.js").then(r=>r.T),__vite__mapDeps([15,1,2,3,4,16]),import.meta.url),"./src/Switch/Switch.stories.tsx":async()=>t(()=>import("./Switch.stories-OKWNq9Bq.js").then(r=>r.S),__vite__mapDeps([18,1,2,3,4]),import.meta.url),"./src/Screen/Screen.stories.tsx":async()=>t(()=>import("./Screen.stories-VhykL4Tw.js").then(r=>r.S),__vite__mapDeps([20,1,2,3,4]),import.meta.url),"./src/Paragraph/Paragraph.stories.tsx":async()=>t(()=>import("./Paragraph.stories-PZNKyzc7.js").then(r=>r.P),__vite__mapDeps([22,1,2,3,4]),import.meta.url),"./src/Pagination/Pagination.stories.tsx":async()=>t(()=>import("./Pagination.stories-d7TpGJpL.js").then(r=>r.P),__vite__mapDeps([24,1,2,3,4]),import.meta.url),"./src/PageMenu/PageMenu.stories.tsx":async()=>t(()=>import("./PageMenu.stories-LbdamQkG.js").then(r=>r.P),__vite__mapDeps([26,1,2,3,4]),import.meta.url),"./src/PageHeading/PageHeading.stories.tsx":async()=>t(()=>import("./PageHeading.stories-6JZ0YhOP.js").then(r=>r.P),__vite__mapDeps([28,1,2,3,4]),import.meta.url),"./src/OrderedList/OrderedList.stories.tsx":async()=>t(()=>import("./OrderedList.stories-dvGlvbG5.js").then(r=>r.O),__vite__mapDeps([30,1,2,3,4]),import.meta.url),"./src/Logo/Logo.stories.tsx":async()=>t(()=>import("./Logo.stories-aUfxXwmS.js").then(r=>r.L),__vite__mapDeps([32,1,2,3,4]),import.meta.url),"./src/Link/Link.stories.tsx":async()=>t(()=>import("./Link.stories-C-dGCM_A.js").then(r=>r.L),__vite__mapDeps([34,1,2,3,4]),import.meta.url),"./src/Image/Image.stories.tsx":async()=>t(()=>import("./Image.stories-vDhFYcYM.js").then(r=>r.I),__vite__mapDeps([36,1,2,3,4]),import.meta.url),"./src/Icon/Icon.stories.tsx":async()=>t(()=>import("./Icon.stories-VAmkB446.js").then(r=>r.I),__vite__mapDeps([38,1,2,3,4]),import.meta.url),"./src/Highlight/Highlight.stories.tsx":async()=>t(()=>import("./Highlight.stories-OqRkXOH-.js").then(r=>r.H),__vite__mapDeps([40,1,2,3,4]),import.meta.url),"./src/Heading/Heading.stories.tsx":async()=>t(()=>import("./Heading.stories-H4JmRFTC.js").then(r=>r.H),__vite__mapDeps([42,1,2,3,4]),import.meta.url),"./src/GridCell/GridCell.stories.tsx":async()=>t(()=>import("./GridCell.stories-g4lKtBEQ.js").then(r=>r.G),__vite__mapDeps([44,1,2,3,4]),import.meta.url),"./src/Grid/Grid.stories.tsx":async()=>t(()=>import("./Grid.stories-YYiAwdMS.js").then(r=>r.G),__vite__mapDeps([46,1,2,3,4]),import.meta.url),"./src/FormLabel/FormLabel.stories.tsx":async()=>t(()=>import("./FormLabel.stories-bQapoIXp.js").then(r=>r.F),__vite__mapDeps([48,1,2,3,4]),import.meta.url),"./src/Footer/Footer.stories.tsx":async()=>t(()=>import("./Footer.stories-i5nOVgzB.js").then(r=>r.F),__vite__mapDeps([50,1,2,3,4]),import.meta.url),"./src/Dialog/Dialog.stories.tsx":async()=>t(()=>import("./Dialog.stories-pnTNG-kd.js").then(r=>r.D),__vite__mapDeps([52,1,2,3,4]),import.meta.url),"./src/Checkbox/Checkbox.stories.tsx":async()=>t(()=>import("./Checkbox.stories-MVzqDfwI.js").then(r=>r.C),__vite__mapDeps([54,1,2,3,4]),import.meta.url),"./src/Card/Card.stories.tsx":async()=>t(()=>import("./Card.stories-4j0WWbSk.js").then(r=>r.C),__vite__mapDeps([56,1,2,3,4]),import.meta.url),"./src/Button/Button.stories.tsx":async()=>t(()=>import("./Button.stories-_EW1GITw.js").then(r=>r.B),__vite__mapDeps([58,1,2,3,4]),import.meta.url),"./src/Breadcrumb/Breadcrumb.stories.tsx":async()=>t(()=>import("./Breadcrumb.stories-8a79phEY.js").then(r=>r.B),__vite__mapDeps([60,1,2,3,4]),import.meta.url),"./src/Blockquote/Blockquote.stories.tsx":async()=>t(()=>import("./Blockquote.stories-GoeETS-z.js").then(r=>r.B),__vite__mapDeps([62,1,2,3,4]),import.meta.url),"./src/AspectRatio/AspectRatio.stories.tsx":async()=>t(()=>import("./AspectRatio.stories-E7eNuwr7.js").then(r=>r.A),__vite__mapDeps([64,1,2,3,4]),import.meta.url),"./src/Alert/Alert.stories.tsx":async()=>t(()=>import("./Alert.stories-aLb7E9O1.js").then(r=>r.A),__vite__mapDeps([66,1,2,3,4]),import.meta.url),"./src/Accordion/Accordion.stories.tsx":async()=>t(()=>import("./Accordion.stories-r3N0-GbE.js").then(r=>r.A),__vite__mapDeps([68,1,2,3,4]),import.meta.url)};async function R(r){return P[r]()}const{composeConfigs:T,PreviewWeb:A,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,y=async()=>{const r=await Promise.all([t(()=>import("./config-xInHTLBB.js"),__vite__mapDeps([69,2,3,70,6,8]),import.meta.url),t(()=>import("./preview-J7ZNVipj.js"),__vite__mapDeps([71,7]),import.meta.url),t(()=>import("./preview-Fi7DQdoQ.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-Y7vvrhHd.js"),__vite__mapDeps([72,8]),import.meta.url),t(()=>import("./preview-gnTYGUb5.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-bJSO6fK3.js"),__vite__mapDeps([73,8]),import.meta.url),t(()=>import("./preview-z_l9a9HW.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-_PuUsqGv.js"),__vite__mapDeps([74,3]),import.meta.url),t(()=>import("./preview-7M0jfJ_U.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-lhlRFLS5.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-dALxQ1j5.js"),__vite__mapDeps([75,76]),import.meta.url)]);return T(r)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new A;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:R,getProjectAnnotations:y});export{t as _};
//# sourceMappingURL=iframe-Srm1z0Lp.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./VisuallyHidden.docs-07Kx6WWX.js","./index.esm-frLIslJL.js","./index-4g5l5LRQ.js","./_commonjsHelpers-4gQjN7DL.js","./extends-dGVwEr9R.js","./index-izdYZGJJ.js","./index-f2OjG03D.js","./index-aKxH7ZY0.js","./index-PPLHz8o0.js","./VisuallyHidden.stories-JIlMBXLj.js","./VisuallyHidden-8xU6f0yU.css","./index-Dbo06S9W.js","./UnorderedList.docs-JO8pC6Ws.js","./UnorderedList.stories-vLV_jMeD.js","./TopTaskLink.docs-yGshscmr.js","./TopTaskLink.stories-CSOpbedE.js","./TopTaskLink-hwYcNY8U.css","./Switch.docs-wpktNLi6.js","./Switch.stories-OKWNq9Bq.js","./Screen.docs-f01_lsXP.js","./Screen.stories-VhykL4Tw.js","./Paragraph.docs-6ILtI8Tt.js","./Paragraph.stories-PZNKyzc7.js","./Pagination.docs-LevQDKm2.js","./Pagination.stories-d7TpGJpL.js","./PageMenu.docs-EVGRtChv.js","./PageMenu.stories-LbdamQkG.js","./PageHeading.docs-3cCmGLe0.js","./PageHeading.stories-6JZ0YhOP.js","./OrderedList.docs-yDxnz-Ou.js","./OrderedList.stories-dvGlvbG5.js","./Logo.docs-FVD3FuY1.js","./Logo.stories-aUfxXwmS.js","./Link.docs-NeqpKiWh.js","./Link.stories-C-dGCM_A.js","./Image.docs-kQOgVygF.js","./Image.stories-vDhFYcYM.js","./Icon.docs-SoFmNbDQ.js","./Icon.stories-VAmkB446.js","./Highlight.docs-xW43Lyny.js","./Highlight.stories-OqRkXOH-.js","./Heading.docs-N8BOTQDH.js","./Heading.stories-H4JmRFTC.js","./GridCell.docs-brnu-AsB.js","./GridCell.stories-g4lKtBEQ.js","./Grid.docs-aQEyxMnq.js","./Grid.stories-YYiAwdMS.js","./FormLabel.docs-MFGqMa4g.js","./FormLabel.stories-bQapoIXp.js","./Footer.docs-lMQBXTrU.js","./Footer.stories-i5nOVgzB.js","./Dialog.docs-e8Lq0DyF.js","./Dialog.stories-pnTNG-kd.js","./Checkbox.docs-Ac2T20po.js","./Checkbox.stories-MVzqDfwI.js","./Card.docs-b3vDoXoh.js","./Card.stories-4j0WWbSk.js","./Button.docs-mOjK8nW3.js","./Button.stories-_EW1GITw.js","./Breadcrumb.docs-OGjt4pW0.js","./Breadcrumb.stories-8a79phEY.js","./Blockquote.docs-85OSrAXX.js","./Blockquote.stories-GoeETS-z.js","./AspectRatio.docs-7AhwSywF.js","./AspectRatio.stories-E7eNuwr7.js","./Alert.docs-iD3gm8UO.js","./Alert.stories-aLb7E9O1.js","./Accordion.docs-7kXpcYn4.js","./Accordion.stories-r3N0-GbE.js","./config-xInHTLBB.js","./react-18-6f2S3HzO.js","./preview-J7ZNVipj.js","./preview-Y7vvrhHd.js","./preview-bJSO6fK3.js","./preview-_PuUsqGv.js","./preview-dALxQ1j5.js","./preview-ktHFYVW9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}