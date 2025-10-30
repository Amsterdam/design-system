/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const i=(s,r,a,t)=>{const $=[];return t?[`ams-${s}--padding-vertical--${t}`]:(r&&$.push(`ams-${s}--padding-bottom--${r}`),a&&$.push(`ams-${s}--padding-top--${a}`),$)};/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const d=(s,r)=>{if(r==="all"||typeof r=="number")return[`${s}${r}`];if(r){const{narrow:a,medium:t,wide:$}=r;return[`${s}${a}`,`${s}${t}-medium`,`${s}${$}-wide`]}return[]},n=(s,r)=>[...d("ams-grid__cell--span-",s),...d("ams-grid__cell--start-",r)];export{d as a,n as g,i as p};
