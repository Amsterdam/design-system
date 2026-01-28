import{j as n}from"./iframe-CgT_rn2k.js";import{r as T}from"./renderComponentVariants-DZKX6qcu.js";import{m as g,I as p}from"./ImageSlider.stories-CYCEnCa1.js";import"./preload-helper-PPVm8Dsz.js";import"./Image-DmJm83iR.js";import"./generateAspectRatioClass-jt2KOtJX.js";import"./Button-CBICcBhb.js";import"./Icon-ovtVf5Iu.js";const{expect:u}=__STORYBOOK_MODULE_TEST__,_={...g,title:"Components/Media/Image Slider"},m=500,I=1e3;function l(e,i){e.forEach((o,s)=>{s===i?u(o).not.toHaveAttribute("aria-hidden"):u(o).toHaveAttribute("aria-hidden","true")})}const r={args:{images:[{alt:"Bridge",src:"https://picsum.photos/id/122/1280/720"},{alt:"Bunker",src:"https://picsum.photos/id/101/1280/720"},{alt:"Chairs",src:"https://picsum.photos/id/153/1280/720"},{alt:"Droplet",src:"https://picsum.photos/id/159/1280/720"},{alt:"Dew",src:"https://picsum.photos/id/123/1280/720"}]},play:async({canvas:e,userEvent:i})=>{const o=e.queryAllByRole("group")[0]?.children,s=Array.from(o??[]),[c,d]=e.queryAllByRole("button");if(!d||!c)return;for(let t=0;t<s.length;t++)t>0&&(await i.click(d),await new Promise(a=>setTimeout(a,m))),l(s,t);for(let t=s.length-1;t>0;t--)await i.click(c),await new Promise(a=>setTimeout(a,m)),l(s,t-1);const h=e.getAllByRole("tab",{name:"Afbeelding 3: Chairs"})[0];await i.click(h),await new Promise(t=>setTimeout(t,I)),l(s,2)},render:e=>n.jsxs(n.Fragment,{children:[n.jsx(p,{...e,"data-testid":"interaction-test"}),T(p,{args:e})]}),tags:["!dev","!autodocs"]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        await new Promise(resolve => setTimeout(resolve, SLIDE_TRANSITION_WAIT));
      }
      expectOnlySlideVisible(slides, i);
    }

    // Click on previous button back to start of slides and test if aria-hidden is set correctly
    for (let i = slides.length - 1; i > 0; i--) {
      await userEvent.click(previousButton);
      await new Promise(resolve => setTimeout(resolve, SLIDE_TRANSITION_WAIT));
      expectOnlySlideVisible(slides, i - 1);
    }

    // Click on third thumbnail button and show that slide
    const thirdThumbnailButton = canvas.getAllByRole('tab', {
      name: 'Afbeelding 3: Chairs'
    })[0];
    await userEvent.click(thirdThumbnailButton);
    await new Promise(resolve => setTimeout(resolve, THUMBNAIL_TRANSITION_WAIT));
    expectOnlySlideVisible(slides, 2);
  },
  render: args => <>
      <ImageSlider {...args} data-testid="interaction-test" />
      {renderComponentVariants(ImageSlider, {
      args
    })}
    </>,
  tags: ['!dev', '!autodocs']
}`,...r.parameters?.docs?.source}}};const x=["Test"];export{r as Test,x as __namedExportsOrder,_ as default};
