import{j as a}from"./iframe-OfInhUsD.js";import{r as g}from"./renderComponentVariants-BCEFbyfW.js";import{m as h,I as p}from"./ImageSlider.stories-DXgFB0JM.js";import"./preload-helper-PPVm8Dsz.js";import"./Image-DNBQCbzq.js";import"./generateAspectRatioClass-CefTNpDa.js";import"./Button-BuArMkIt.js";import"./Icon-Dqci5sL8.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,A={...h,title:"Components/Media/Image Slider"},s={args:{images:[{alt:"Bridge",src:"https://picsum.photos/id/122/1280/720"},{alt:"Bunker",src:"https://picsum.photos/id/101/1280/720"},{alt:"Chairs",src:"https://picsum.photos/id/153/1280/720"},{alt:"Droplet",src:"https://picsum.photos/id/159/1280/720"},{alt:"Dew",src:"https://picsum.photos/id/123/1280/720"}]},play:async({canvas:t,userEvent:n})=>{const u=t.queryAllByRole("group")[0]?.children,d=Array.from(u??[]),c=t.queryAllByRole("button"),m=c[0],l=c[1];if(!(!l||!m)){for(const[o,e]of d.entries())o===0||(await n.click(l),await new Promise(r=>setTimeout(r,500))),i(e).not.toHaveAttribute("aria-hidden");for(const[o,e]of d.reverse().entries())o===0||(await n.click(m),await new Promise(r=>setTimeout(r,500))),i(e).not.toHaveAttribute("aria-hidden")}},render:t=>a.jsxs(a.Fragment,{children:[a.jsx(p,{...t,"data-testid":"interaction-test"}),g(p,{args:t})]}),tags:["!dev","!autodocs"]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
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
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const imageSlidesContainer = canvas.queryAllByRole('group')[0]?.children;
    const imageSlides = Array.from(imageSlidesContainer ?? []);
    const buttons = canvas.queryAllByRole('button');
    const previousButton = buttons[0];
    const nextButton = buttons[1];
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
  render: args => <>
      <ImageSlider {...args} data-testid="interaction-test" />
      {renderComponentVariants(ImageSlider, {
      args
    })}
    </>,
  tags: ['!dev', '!autodocs']
}`,...s.parameters?.docs?.source}}};const T=["Test"];export{s as Test,T as __namedExportsOrder,A as default};
