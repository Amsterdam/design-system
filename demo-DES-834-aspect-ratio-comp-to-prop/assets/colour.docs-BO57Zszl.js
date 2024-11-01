import{j as o}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as n}from"./index-BI1Biiay.js";import{t as l}from"./index-Dm8KKx-a.js";import{ae as p}from"./index-Bbx7utLj.js";import{r as x}from"./index-Cs7sjTYM.js";import{S as j}from"./StatusBadge-DJO7oFtY.js";import"./iframe-BwIr202l.js";import"../sb-preview/runtime.js";import"./index-DJFdew98.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./Badge-DiZ9fuyS.js";import"./clsx-B-dksMZM.js";const i=x.forwardRef(({children:r,...a},d)=>o.jsx("div",{...a,ref:d,className:"ams-storybook-color-palette",children:r}));i.displayName="ColorPalette";const c=({children:r})=>o.jsx("div",{className:"ams-storybook-color-palette__section",children:r});c.displayName="ColorPalette.Section";const m=({name:r,color:a})=>o.jsxs("div",{className:"ams-storybook-color-palette__tile",children:[o.jsx("div",{className:"ams-storybook-color-palette__example",style:{backgroundColor:a}}),o.jsxs("dl",{className:"sb-unstyled ams-storybook-color-palette__description",children:[o.jsx("dt",{className:"ams-storybook-color-palette__name",children:r}),o.jsx("dd",{className:"ams-storybook-color-palette__color",children:a})]})]});m.displayName="ColorPalette.Tile";const e=Object.assign(i,{Section:c,Tile:m});try{e.displayName="ColorPalette",e.__docgenInfo={description:"",displayName:"ColorPalette",props:{}}}catch{}/*@license CC0-1.0*/function s(r){const a={h1:"h1",p:"p",...n(),...r.components};return e||t("ColorPalette",!1),e.Section||t("ColorPalette.Section",!0),e.Tile||t("ColorPalette.Tile",!0),o.jsxs(o.Fragment,{children:[`
`,`
`,o.jsx(p,{title:"Brand/Design Tokens/Colour"}),`
`,o.jsx(j,{reason:"The set of available colours and their names will change."}),`
`,o.jsx(a.h1,{id:"colour",children:"Colour"}),`
`,o.jsx(a.p,{children:`The basic colours of Amsterdam are white, red, and black.
We have 8 additional colours and 3 shades of grey.`}),`
`,o.jsxs(e,{children:[o.jsxs(e.Section,{children:[o.jsx(e.Tile,{color:l.ams.color["primary-white"],name:"white"}),o.jsx(e.Tile,{color:l.ams.color["primary-red"],name:"red"}),o.jsx(e.Tile,{color:l.ams.color["primary-black"],name:"black"})]}),o.jsxs(e.Section,{children:[o.jsx(e.Tile,{color:l.ams.color.green,name:"green"}),o.jsx(e.Tile,{color:l.ams.color["dark-green"],name:"dark green"}),o.jsx(e.Tile,{color:l.ams.color.blue,name:"blue"}),o.jsx(e.Tile,{color:l.ams.color["primary-blue"],name:"dark blue"}),o.jsx(e.Tile,{color:l.ams.color["dark-blue"],name:"darker blue"})]}),o.jsxs(e.Section,{children:[o.jsx(e.Tile,{color:l.ams.color.yellow,name:"yellow"}),o.jsx(e.Tile,{color:l.ams.color.orange,name:"orange"}),o.jsx(e.Tile,{color:l.ams.color.magenta,name:"magenta"}),o.jsx(e.Tile,{color:l.ams.color.purple,name:"purple"})]}),o.jsxs(e.Section,{children:[o.jsx(e.Tile,{color:l.ams.color["neutral-grey1"],name:"light grey"}),o.jsx(e.Tile,{color:l.ams.color["neutral-grey2"],name:"grey"}),o.jsx(e.Tile,{color:l.ams.color["neutral-grey3"],name:"dark grey"})]})]})]})}function M(r={}){const{wrapper:a}={...n(),...r.components};return a?o.jsx(a,{...r,children:o.jsx(s,{...r})}):s(r)}function t(r,a){throw new Error("Expected "+(a?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{M as default};
