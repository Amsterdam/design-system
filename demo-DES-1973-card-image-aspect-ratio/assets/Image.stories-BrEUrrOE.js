import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r,t as i}from"./Image-CSZeigO_.js";import{n as a,t as o}from"./decorators-Cq-VD5r6.js";import{i as s,t as c}from"./types-C0F630hP.js";var l=t({Default:()=>d,LazyLoading:()=>p,ResponsiveImages:()=>f,__namedExportsOrder:()=>m,default:()=>u}),u,d,f,p,m;function h(){return(h=e((()=>{n(),s(),o(),u={title:`Components/Media/Image`,component:i,argTypes:{aspectRatio:{control:{labels:{undefined:`none (default)`},type:`select`},options:[void 0,...c]},objectFit:{control:{type:`radio`},options:r},src:{description:`The url for the image.`},srcSet:{description:`A set of candidate images.`}},decorators:[a(`vi-medium`)]},d={args:{alt:``,src:`https://picsum.photos/640/800`}},f={args:{alt:``,sizes:`(max-width: 37.5rem) 640px, 50vw`,src:`https://picsum.photos/1280/720`,srcSet:`https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w`}},p={args:{alt:``,loading:`lazy`,src:`https://picsum.photos/2560/1440`}},m=[`Default`,`ResponsiveImages`,`LazyLoading`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    src: 'https://picsum.photos/640/800'
  }
}`,...d.parameters?.docs?.source},description:{story:"The source is portrait while the box is 16 by 9, so `objectFit` has something to do here.\nA source that already matches the shape of its box looks the same either way.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    sizes: '(max-width: 37.5rem) 640px, 50vw',
    src: 'https://picsum.photos/1280/720',
    srcSet: 'https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    alt: '',
    loading: 'lazy',
    src: 'https://picsum.photos/2560/1440'
  }
}`,...p.parameters?.docs?.source}}}})))()}export{u as a,h as i,p as n,f as r,l as t};