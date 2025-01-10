import{r as y}from"./index-C9rmetsa.js";var i={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function O(){if(p)return t;p=1;var R=y(),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,c=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(n,e,f){var r,u={},o=null,_=null;f!==void 0&&(o=""+f),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(_=e.ref);for(r in e)x.call(e,r)&&!l.hasOwnProperty(r)&&(u[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)u[r]===void 0&&(u[r]=e[r]);return{$$typeof:a,type:n,key:o,ref:_,props:u,_owner:c.current}}return t.Fragment=d,t.jsx=s,t.jsxs=s,t}var m;function v(){return m||(m=1,i.exports=O()),i.exports}var j=v();export{j};
