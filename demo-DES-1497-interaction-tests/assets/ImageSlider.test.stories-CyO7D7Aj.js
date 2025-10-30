import{r as m}from"./renderComponentVariants-ocW3XWB3.js";import{m as u,I as h}from"./ImageSlider.stories-DICV7056.js";import"./iframe-D1_3ryCH.js";import"./preload-helper-PPVm8Dsz.js";import"./ChevronDown-BSG9mY9T.js";import"./Image-C-90N_KO.js";import"./generateAspectRatioClass-CefTNpDa.js";import"./Button-CLKcx4ER.js";import"./Icon-D2X8MQVb.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const{expect:e}=__STORYBOOK_MODULE_TEST__,A={...u,title:"Components/Media/Image Slider"},n={play:async({canvas:s,userEvent:r})=>{const p=s.queryAllByRole("group")?.at(0)?.children,a=Array.from(p??[]),d=s.queryAllByRole("button"),c=d?.at(0),l=d?.at(1);if(!(!l||!c)){for(const[i,t]of a.entries())i===0||(await r.click(l),await new Promise(o=>setTimeout(o,500))),e(t).not.toHaveAttribute("aria-hidden");for(const[i,t]of a.reverse().entries())i===0||(await r.click(c),await new Promise(o=>setTimeout(o,500))),e(t).not.toHaveAttribute("aria-hidden")}},render:()=>m(h,{args:{alt:"",images:[{alt:"Bridge",src:"https://picsum.photos/id/122/1280/720"},{alt:"Bunker",src:"https://picsum.photos/id/101/1280/720"},{alt:"Chairs",src:"https://picsum.photos/id/153/1280/720"},{alt:"Droplet",src:"https://picsum.photos/id/159/1280/720"},{alt:"Dew",src:"https://picsum.photos/id/123/1280/720"}]}}),tags:["!dev","!autodocs"]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(imageSlide).not.toHaveAttribute('aria-hidden');
      }
    }
    for (const [idx, imageSlide] of imageSlides.reverse().entries()) {
      if (idx === 0) {
        expect(imageSlide).not.toHaveAttribute('aria-hidden');
      } else {
        await userEvent.click(previousButton);
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(imageSlide).not.toHaveAttribute('aria-hidden');
      }
    }
  },
  render: () => renderComponentVariants(ImageSlider, {
    args: {
      alt: '',
      images: [{
        alt: 'Bridge',
        src: 'https://picsum.photos/id/122/1280/720'
      }, {
        alt: 'Bunker',
        src: 'https://picsum.photos/id/101/1280/720'
      }, {
        alt: 'Chairs',
        src: 'https://picsum.photos/id/153/1280/720'
      }, {
        alt: 'Droplet',
        src: 'https://picsum.photos/id/159/1280/720'
      }, {
        alt: 'Dew',
        src: 'https://picsum.photos/id/123/1280/720'
      }]
    }
  }),
  tags: ['!dev', '!autodocs']
}`,...n.parameters?.docs?.source}}};const T=["Test"];export{n as Test,T as __namedExportsOrder,A as default};
