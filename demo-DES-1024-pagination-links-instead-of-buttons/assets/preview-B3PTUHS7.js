import"./index-Cu4lwwaE.js";const{STORY_CHANGED:O,SELECT_STORY:l}=__STORYBOOK_MODULE_CORE_EVENTS__,{makeDecorator:E,addons:_}=__STORYBOOK_MODULE_PREVIEW_API__,{global:L}=__STORYBOOK_MODULE_GLOBAL__;var c="links",{document:s,HTMLElement:m}=L,v=e=>_.getChannel().emit(l,e),i=e=>{let{target:t}=e;if(!(t instanceof m))return;let o=t,{sbKind:a,sbStory:r}=o.dataset;(a||r)&&(e.preventDefault(),v({kind:a,story:r}))},n=!1,d=()=>{n||(n=!0,s.addEventListener("click",i))},k=()=>{n&&(n=!1,s.removeEventListener("click",i))},R=E({name:"withLinks",parameterName:c,wrapper:(e,t)=>(d(),_.getChannel().once(O,k),e(t))}),T=[R];export{T as decorators};