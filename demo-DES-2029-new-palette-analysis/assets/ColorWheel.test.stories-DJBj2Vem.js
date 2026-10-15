import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./ColorWheel-IFAkVT_N.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/Docs/Color Wheel`,component:n,tags:[`!dev`,`!autodocs`,`!manifest`]},a={},o={args:{defaultGroup:`red`}},s={play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Blue`}),i=e.getByRole(`button`,{name:`Green`});await r(e.getAllByRole(`button`).filter(e=>e.ariaPressed===`true`)).toHaveLength(0),await t.click(n),await r(n).toHaveAttribute(`aria-pressed`,`true`),await r(e.getByRole(`heading`,{name:`Blue`})).toBeVisible(),i.focus(),await t.keyboard(`{Enter}`),await r(i).toHaveAttribute(`aria-pressed`,`true`),await r(n).toHaveAttribute(`aria-pressed`,`false`),await r(e.getByRole(`heading`,{name:`Green`})).toBeVisible()}},c={args:{defaultGroup:`blue`},play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Blue`});await r(n).toHaveAttribute(`aria-pressed`,`true`),await t.click(e.getByRole(`group`,{name:`Colour groups`})),await r(n).toHaveAttribute(`aria-pressed`,`false`),await r(e.queryByRole(`heading`,{name:`Blue`})).toBeNull()}},l=[`Test`,`SelectedGroup`,`SelectsAGroup`,`DeselectsOnClickOutside`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultGroup: 'red'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const blue = canvas.getByRole('button', {
      name: 'Blue'
    });
    const green = canvas.getByRole('button', {
      name: 'Green'
    });
    await expect(canvas.getAllByRole('button').filter(button => button.ariaPressed === 'true')).toHaveLength(0);
    await userEvent.click(blue);
    await expect(blue).toHaveAttribute('aria-pressed', 'true');
    await expect(canvas.getByRole('heading', {
      name: 'Blue'
    })).toBeVisible();
    green.focus();
    await userEvent.keyboard('{Enter}');
    await expect(green).toHaveAttribute('aria-pressed', 'true');
    await expect(blue).toHaveAttribute('aria-pressed', 'false');
    await expect(canvas.getByRole('heading', {
      name: 'Green'
    })).toBeVisible();
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultGroup: 'blue'
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const blue = canvas.getByRole('button', {
      name: 'Blue'
    });
    await expect(blue).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(canvas.getByRole('group', {
      name: 'Colour groups'
    }));
    await expect(blue).toHaveAttribute('aria-pressed', 'false');
    await expect(canvas.queryByRole('heading', {
      name: 'Blue'
    })).toBeNull();
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as DeselectsOnClickOutside,o as SelectedGroup,s as SelectsAGroup,a as Test,l as __namedExportsOrder,i as default};