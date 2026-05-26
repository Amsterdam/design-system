import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-CGaUi49-.js";import{n,t as r}from"./renderComponentVariants-zqKyZWN2.js";import{U as i,t as a}from"./src-DMumKw4m.js";import o,{n as s}from"./ImageSlider.stories-DWpL4RjA.js";async function c(e,t){await d(()=>{e.forEach((e,n)=>{n===t?u(e).not.toHaveAttribute(`aria-hidden`):u(e).toHaveAttribute(`aria-hidden`,`true`)})})}var l,u,d,f,p,m;e((()=>{a(),r(),s(),l=t(),{expect:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,f={...o,title:`Components/Media/Image Slider`},p={args:{images:[{alt:`Bridge`,src:`https://picsum.photos/id/122/1280/720`},{alt:`Bunker`,src:`https://picsum.photos/id/101/1280/720`},{alt:`Chairs`,src:`https://picsum.photos/id/153/1280/720`},{alt:`Droplet`,src:`https://picsum.photos/id/159/1280/720`},{alt:`Dew`,src:`https://picsum.photos/id/123/1280/720`}]},play:async({canvas:e,userEvent:t})=>{let n=e.queryAllByRole(`group`)[0]?.children,r=Array.from(n??[]),[i,a]=e.queryAllByRole(`button`);if(!a||!i)return;for(let e=0;e<r.length;e++)e>0&&await t.click(a),await c(r,e);for(let e=r.length-1;e>0;e--)await t.click(i),await c(r,e-1);let o=e.getAllByRole(`tab`,{name:`Afbeelding 3: Chairs`})[0];await t.click(o),await c(r,2)},render:(e,t)=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{...e,"data-testid":`interaction-test`}),n(i,{args:e},t)]}),tags:[`!dev`,`!autodocs`]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  render: (args, context) => <>
      <ImageSlider {...args} data-testid="interaction-test" />
      {renderComponentVariants(ImageSlider, {
      args
    }, context)}
    </>,
  tags: ['!dev', '!autodocs']
}`,...p.parameters?.docs?.source}}},m=[`Test`]}))();export{p as Test,m as __namedExportsOrder,f as default};