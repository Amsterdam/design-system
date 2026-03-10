import{j as r}from"./iframe-BOjkI74p.js";import{r as m}from"./renderComponentVariants-i3Htxye3.js";import{m as h,I as d}from"./ImageSlider.stories-7zVTrJeO.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Dd8TIXHv.js";import"./Icon-DOvUFhii.js";import"./Figure-Bk61nLQZ.js";import"./Image-CIaeo16B.js";import"./generateAspectRatioClass-jt2KOtJX.js";const{expect:p,waitFor:g}=__STORYBOOK_MODULE_TEST__,A={...h,title:"Components/Media/Image Slider"};async function n(t,s){await g(()=>{t.forEach((a,i)=>{i===s?p(a).not.toHaveAttribute("aria-hidden"):p(a).toHaveAttribute("aria-hidden","true")})})}const o={args:{images:[{alt:"Bridge",src:"https://picsum.photos/id/122/1280/720"},{alt:"Bunker",src:"https://picsum.photos/id/101/1280/720"},{alt:"Chairs",src:"https://picsum.photos/id/153/1280/720"},{alt:"Droplet",src:"https://picsum.photos/id/159/1280/720"},{alt:"Dew",src:"https://picsum.photos/id/123/1280/720"}]},play:async({canvas:t,userEvent:s})=>{const a=t.queryAllByRole("group")[0]?.children,i=Array.from(a??[]),[l,c]=t.queryAllByRole("button");if(!c||!l)return;for(let e=0;e<i.length;e++)e>0&&await s.click(c),await n(i,e);for(let e=i.length-1;e>0;e--)await s.click(l),await n(i,e-1);const u=t.getAllByRole("tab",{name:"Afbeelding 3: Chairs"})[0];await s.click(u),await n(i,2)},render:t=>r.jsxs(r.Fragment,{children:[r.jsx(d,{...t,"data-testid":"interaction-test"}),m(d,{args:t})]}),tags:["!dev","!autodocs"]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    const slidesContainer = canvas.queryAllByRole('group')[0]?.children;
    const slides = Array.from(slidesContainer ?? []);
    const [previousButton, nextButton] = canvas.queryAllByRole('button');
    if (!nextButton || !previousButton) {
      return;
    }

    // Click on next button to end of slides and test if aria-hidden is set correctly
    for (let i = 0; i < slides.length; i++) {
      if (i > 0) {
        await userEvent.click(nextButton);
      }
      await expectOnlySlideVisible(slides, i);
    }

    // Click on previous button back to start of slides and test if aria-hidden is set correctly
    for (let i = slides.length - 1; i > 0; i--) {
      await userEvent.click(previousButton);
      await expectOnlySlideVisible(slides, i - 1);
    }

    // Click on third thumbnail button and show that slide
    const thirdThumbnailButton = canvas.getAllByRole('tab', {
      name: 'Afbeelding 3: Chairs'
    })[0];
    await userEvent.click(thirdThumbnailButton);
    await expectOnlySlideVisible(slides, 2);
  },
  render: args => <>
      <ImageSlider {...args} data-testid="interaction-test" />
      {renderComponentVariants(ImageSlider, {
      args
    })}
    </>,
  tags: ['!dev', '!autodocs']
}`,...o.parameters?.docs?.source}}};const S=["Test"];export{o as Test,S as __namedExportsOrder,A as default};
