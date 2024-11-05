/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const d=(s,r)=>{if(r==="all"||typeof r=="number")return[`${s}${r}`];if(r){const{narrow:a,medium:t,wide:$}=r;return[`${s}${a}`,`${s}${t}-medium`,`${s}${$}-wide`]}return[]},i=(s,r)=>[...d("ams-grid__cell--span-",s),...d("ams-grid__cell--start-",r)],n=(s,r,a,t)=>{const $=[];return t?[`ams-${s}--padding-vertical--${t}`]:(r&&$.push(`ams-${s}--padding-bottom--${r}`),a&&$.push(`ams-${s}--padding-top--${a}`),$)};export{d as a,i as g,n as p};
