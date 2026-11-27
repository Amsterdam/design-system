import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-BG4KOiPz.js";import{n,t as r}from"./renderComponentVariants-KBsnWrNw.js";import{n as i,t as a}from"./ImageSlider-BirU4A9f.js";import{n as o,t as s}from"./example-photo-02-BUk7ClGW.js";import{n as c,t as l}from"./example-photo-03-B0zrQahh.js";import{i as u,n as d,r as f,t as p}from"./example-photo-07-D1oqx4_B.js";import{n as m,t as h}from"./example-photo-06-CHAxqzny.js";import{a as g,i as _}from"./ImageSlider.stories-V-c37mNV.js";async function v(e,t){await x(()=>{e.forEach((e,n)=>{n===t?b(e).not.toHaveAttribute(`aria-hidden`):b(e).toHaveAttribute(`aria-hidden`,`true`)})})}var y,b,x,S,C,w;function T(){return(T=e((()=>{i(),o(),c(),u(),m(),d(),r(),_(),y=t(),{expect:b,waitFor:x}=__STORYBOOK_MODULE_TEST__,S={...g,title:`Components/Media/Image Slider`},C={args:{images:[{alt:`Bridge`,src:l},{alt:`Bunker`,src:s},{alt:`Chairs`,src:h},{alt:`Droplet`,src:p},{alt:`Dew`,src:f}]},play:async({canvas:e,userEvent:t})=>{let n=e.queryAllByRole(`group`)[0]?.children,r=Array.from(n??[]),[i,a]=e.queryAllByRole(`button`);if(!a||!i)return;for(let e=0;e<r.length;e++)e>0&&await t.click(a),await v(r,e);for(let e=r.length-1;e>0;e--)await t.click(i),await v(r,e-1);let o=e.getAllByRole(`tab`,{name:`Afbeelding 3: Chairs`})[0];await t.click(o),await v(r,2)},render:(e,t)=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{...e,"data-testid":`interaction-test`}),n(a,{args:e},t)]}),tags:[`!dev`,`!autodocs`,`!manifest`]},w=[`Test`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    images: [{
      alt: 'Bridge',
      src: examplePhoto03
    }, {
      alt: 'Bunker',
      src: examplePhoto02
    }, {
      alt: 'Chairs',
      src: examplePhoto06
    }, {
      alt: 'Droplet',
      src: examplePhoto07
    }, {
      alt: 'Dew',
      src: examplePhoto04
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
  tags: ['!dev', '!autodocs', '!manifest']
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as Test,w as __namedExportsOrder,S as default};