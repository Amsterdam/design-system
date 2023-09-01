import{r as _}from"./index-76fb7be0.js";var p={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=_,y=Symbol.for("react.element"),m=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,x=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,o){var r,n={},s=null,i=null;o!==void 0&&(s=""+o),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)c.call(e,r)&&!v.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:y,type:t,key:s,ref:i,props:n,_owner:x.current}}f.Fragment=m;f.jsx=u;f.jsxs=u;p.exports=f;var E=p.exports;function l(t){var e,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(o=l(t[e]))&&(r&&(r+=" "),r+=o);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function O(){for(var t,e,o=0,r="";o<arguments.length;)(t=arguments[o++])&&(e=l(t))&&(r&&(r+=" "),r+=e);return r}export{O as c,E as j};
//# sourceMappingURL=clsx-1e30d079.js.map
