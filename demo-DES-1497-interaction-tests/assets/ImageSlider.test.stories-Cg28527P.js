import{m}from"./ImageSlider.stories-Tb0Mh7Tt.js";import"./iframe-Dw88OR9M.js";import"./preload-helper-PPVm8Dsz.js";import"./Image-DdRrUjfk.js";import"./generateAspectRatioClass-CefTNpDa.js";import"./Button-MCvNz10h.js";import"./Icon-BZYXeehT.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const{expect:t}=__STORYBOOK_MODULE_TEST__,y={...m,title:"Components/Media/Image Slider"},n={play:async({canvas:a,userEvent:r})=>{const c=a.queryAllByRole("group")?.at(0)?.children,s=Array.from(c??[]),d=a.queryAllByRole("button"),l=d?.at(0),u=d?.at(1);if(!(!u||!l)){for(const[i,e]of s.entries())i===0||(await r.click(u),await new Promise(o=>setTimeout(o,200))),t(e).not.toHaveAttribute("aria-hidden");for(const[i,e]of s.reverse().entries())i===0||(await r.click(l),await new Promise(o=>setTimeout(o,200))),t(e).not.toHaveAttribute("aria-hidden")}},tags:["!dev","!autodocs"]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const imageSlidesContainer = canvas.queryAllByRole('group')?.at(0)?.children;
    const imageSlides = Array.from(imageSlidesContainer ?? []);
    const buttons = canvas.queryAllByRole('button');
    const previousButton = buttons?.at(0);
    const nextButton = buttons?.at(1);
    if (!nextButton || !previousButton) {
      return;
    }
    for (const [idx, imageSlide] of imageSlides.entries()) {
      if (idx === 0) {
        expect(imageSlide).not.toHaveAttribute('aria-hidden');
      } else {
        await userEvent.click(nextButton);
        await new Promise(resolve => setTimeout(resolve, 200));
        expect(imageSlide).not.toHaveAttribute('aria-hidden');
      }
    }
    for (const [idx, imageSlide] of imageSlides.reverse().entries()) {
      if (idx === 0) {
        expect(imageSlide).not.toHaveAttribute('aria-hidden');
      } else {
        await userEvent.click(previousButton);
        await new Promise(resolve => setTimeout(resolve, 200));
        expect(imageSlide).not.toHaveAttribute('aria-hidden');
      }
    }
  },
  tags: ['!dev', '!autodocs']
}`,...n.parameters?.docs?.source}}};const A=["Test"];export{n as Test,A as __namedExportsOrder,y as default};
