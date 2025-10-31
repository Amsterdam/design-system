import{j as a}from"./iframe-BwLXUFRs.js";import{r as g}from"./renderComponentVariants-I0RUylP3.js";import{m as h,I as l}from"./ImageSlider.stories-xO-uKipT.js";import"./preload-helper-PPVm8Dsz.js";import"./ChevronDown-D5no-BZS.js";import"./Image-BAORBtOM.js";import"./generateAspectRatioClass-CefTNpDa.js";import"./Button-C-tyNZZl.js";import"./Icon-B-FwQVHq.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,T={...h,title:"Components/Media/Image Slider"},s={args:{images:[{alt:"Bridge",src:"https://picsum.photos/id/122/1280/720"},{alt:"Bunker",src:"https://picsum.photos/id/101/1280/720"},{alt:"Chairs",src:"https://picsum.photos/id/153/1280/720"},{alt:"Droplet",src:"https://picsum.photos/id/159/1280/720"},{alt:"Dew",src:"https://picsum.photos/id/123/1280/720"}]},play:async({canvas:t,userEvent:n})=>{const u=t.queryAllByRole("group")?.at(0)?.children,d=Array.from(u??[]),c=t.queryAllByRole("button"),m=c?.at(0),p=c?.at(1);if(!(!p||!m)){for(const[o,e]of d.entries())o===0||(await n.click(p),await new Promise(r=>setTimeout(r,500))),i(e).not.toHaveAttribute("aria-hidden");for(const[o,e]of d.reverse().entries())o===0||(await n.click(m),await new Promise(r=>setTimeout(r,500))),i(e).not.toHaveAttribute("aria-hidden")}},render:t=>a.jsxs(a.Fragment,{children:[a.jsx(l,{...t,"data-testid":"interaction-test"}),g(l,{args:t})]}),tags:["!dev","!autodocs"]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  render: args => <>
      <ImageSlider {...args} data-testid="interaction-test" />
      {renderComponentVariants(ImageSlider, {
      args
    })}
    </>,
  tags: ['!dev', '!autodocs']
}`,...s.parameters?.docs?.source}}};const C=["Test"];export{s as Test,C as __namedExportsOrder,T as default};
