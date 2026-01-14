import{j as d}from"./iframe-_HsFhEIr.js";import{r as g}from"./renderComponentVariants-BQ3O9ZAP.js";import{m as v,I as m}from"./ImageSlider.stories-DC4ayktS.js";import"./preload-helper-PPVm8Dsz.js";import"./Image-BjYwovhg.js";import"./generateAspectRatioClass-jt2KOtJX.js";import"./Button-vBeYISmv.js";import"./Icon-Bm1t1A98.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,C={...v,title:"Components/Media/Image Slider"},r={args:{images:[{alt:"Bridge",src:"https://picsum.photos/id/122/1280/720"},{alt:"Bunker",src:"https://picsum.photos/id/101/1280/720"},{alt:"Chairs",src:"https://picsum.photos/id/153/1280/720"},{alt:"Droplet",src:"https://picsum.photos/id/159/1280/720"},{alt:"Dew",src:"https://picsum.photos/id/123/1280/720"}]},play:async({canvas:a,userEvent:n})=>{const h=a.queryAllByRole("group")[0]?.children,e=Array.from(h??[]),l=a.queryAllByRole("button"),c=l[0],u=l[1];if(!u||!c)return;for(const[o,s]of e.entries())if(o===0){i(s).not.toHaveAttribute("aria-hidden");for(let t=1;t<e.length;t++)i(e[t]).toHaveAttribute("aria-hidden","true")}else{await n.click(u),await new Promise(t=>setTimeout(t,500)),i(s).not.toHaveAttribute("aria-hidden");for(let t=0;t<e.length;t++)t!==o&&i(e[t]).toHaveAttribute("aria-hidden","true")}for(const[o,s]of e.reverse().entries())o===0||(await n.click(c),await new Promise(t=>setTimeout(t,500))),i(s).not.toHaveAttribute("aria-hidden");const p=a.getAllByRole("tab",{name:"Afbeelding 3: Chairs"})[0];await n.click(p),await new Promise(o=>setTimeout(o,500)),i(e[2]).not.toHaveAttribute("aria-hidden")},render:a=>d.jsxs(d.Fragment,{children:[d.jsx(m,{...a,"data-testid":"interaction-test"}),g(m,{args:a})]}),tags:["!dev","!autodocs"]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

    // Click on next button to end of slides and test if aria-hidden is set correctly
    for (const [idx, imageSlide] of imageSlides.entries()) {
      if (idx === 0) {
        expect(imageSlide).not.toHaveAttribute('aria-hidden');
        // Check that all other slides have aria-hidden
        for (let i = 1; i < imageSlides.length; i++) {
          expect(imageSlides[i]).toHaveAttribute('aria-hidden', 'true');
        }
      } else {
        await userEvent.click(nextButton);
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(imageSlide).not.toHaveAttribute('aria-hidden');
        // Check that all other slides have aria-hidden
        for (let i = 0; i < imageSlides.length; i++) {
          if (i !== idx) {
            expect(imageSlides[i]).toHaveAttribute('aria-hidden', 'true');
          }
        }
      }
    }

    // Click on previous button back to start of slides and test if aria-hidden is set correctly
    for (const [idx, imageSlide] of imageSlides.reverse().entries()) {
      if (idx === 0) {
        expect(imageSlide).not.toHaveAttribute('aria-hidden');
      } else {
        await userEvent.click(previousButton);
        await new Promise(resolve => setTimeout(resolve, 500));
        expect(imageSlide).not.toHaveAttribute('aria-hidden');
      }
    }

    // Click on third thumbnail button and show that slide
    const thirdThumbnailButton = canvas.getAllByRole('tab', {
      name: 'Afbeelding 3: Chairs'
    })[0];
    await userEvent.click(thirdThumbnailButton);
    await new Promise(resolve => setTimeout(resolve, 500));
    expect(imageSlides[2]).not.toHaveAttribute('aria-hidden');
  },
  render: args => <>
      <ImageSlider {...args} data-testid="interaction-test" />
      {renderComponentVariants(ImageSlider, {
      args
    })}
    </>,
  tags: ['!dev', '!autodocs']
}`,...r.parameters?.docs?.source}}};const k=["Test"];export{r as Test,k as __namedExportsOrder,C as default};
