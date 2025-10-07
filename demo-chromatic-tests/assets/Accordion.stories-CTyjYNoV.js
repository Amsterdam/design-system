import{r as i,j as e,c as S,a2 as O,P as o}from"./iframe-CUXx7pnK.js";import{j as y,b as _}from"./exampleContent-DRope23M.js";import{u as q}from"./useKeyboardFocus-abfWH8iU.js";import{I as z}from"./Icon-Ct-sryCA.js";import{H as M}from"./Heading-BHC8sgQL.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const U={headingLevel:2},N=i.createContext(U);try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}const V=i.forwardRef(({children:a,className:r,expanded:c=!1,label:t,...h},s)=>{const{headingLevel:l,sectionAs:p}=i.useContext(N),[d,R]=i.useState(c),D=p||"section",L=i.useId(),H=`heading-${l}`,w=`button-${L}`,B=`panel-${L}`;return e.jsxs("div",{className:S("ams-accordion__section",r),ref:s,...h,children:[e.jsx(M,{className:"ams-accordion__header",level:l,children:e.jsxs("button",{"aria-controls":B,"aria-expanded":d,className:"ams-accordion__button",id:w,onClick:()=>R(!d),type:"button",children:[e.jsx(z,{className:"ams-accordion__icon",size:H,svg:O}),t]})}),e.jsx(D,{"aria-labelledby":w,className:S("ams-accordion__panel",{"ams-accordion__panel--expanded":d}),id:B,children:a})]})});V.displayName="Accordion.Section";try{Accordion.Section.displayName="Accordion.Section",Accordion.Section.__docgenInfo={description:"",displayName:"Accordion.Section",props:{expanded:{defaultValue:{value:"false"},description:"Whether the content is displayed initially.",name:"expanded",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The heading text.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const E=i.forwardRef(({children:a,className:r,headingLevel:c,sectionAs:t="section"},h)=>{const s=i.useRef(null);i.useImperativeHandle(h,()=>s.current);const{keyDown:l}=q(s,{focusableElements:[".ams-accordion__button:not([disabled])"],rotating:!0});return e.jsx(N.Provider,{value:{headingLevel:c,sectionAs:t},children:e.jsx("div",{className:S("ams-accordion",r),onKeyDown:l,ref:s,children:a})})});E.displayName="Accordion";const n=Object.assign(E,{Section:V});try{n.displayName="Accordion",n.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:`The hierarchical level of this Accordion’s Section Headings within the document.
There is no default value; determine the correct level for each instance.
The value ‘1’ is deprecated.`,name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"3"},{value:"4"},{value:"2"}]}},sectionAs:{defaultValue:{value:"section"},description:"The HTML element to use for each Accordion Section.",name:"sectionAs",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"section"'}]}}}}}catch{}const{expect:b}=__STORYBOOK_MODULE_TEST__,A=y(),j=y(),$=y(),f=_(),P=_(),k=_(),K={title:"Components/Containers/Accordion",component:n,args:{headingLevel:3},argTypes:{headingLevel:{control:"radio",options:[2,3,4]}}},g={args:{children:[e.jsx(n.Section,{label:A,children:e.jsx(o,{children:f})},1),e.jsx(n.Section,{label:j,children:e.jsx(o,{children:P})},2),e.jsx(n.Section,{label:$,children:e.jsx(o,{children:k})},3)]}},u={args:{children:e.jsx(n.Section,{label:"Heading level 4",children:e.jsx(o,{children:f})}),headingLevel:4}},m={args:{children:[e.jsx(n.Section,{label:A,children:e.jsx(o,{children:f})},1),e.jsx(n.Section,{expanded:!0,label:j,children:e.jsx(o,{children:P})},2),e.jsx(n.Section,{label:$,children:e.jsx(o,{children:k})},3)]}},x={args:{children:[e.jsx(n.Section,{label:A,children:e.jsx(o,{children:f})},1),e.jsx(n.Section,{label:j,children:e.jsx(o,{children:P})},2),e.jsx(n.Section,{label:$,children:e.jsx(o,{children:k})},3)],sectionAs:"div"}},T=[{label:"Dit grof afval halen we niet op",paragraph:"Uw eigen buurt schoonhouden? U kunt meehelpen door alleen of samen met uw buren een afvalcontainer te adopteren. Bekijk hier hoe het werkt en hoe u zich aanmeldt als containeradoptant."},{label:"Verhuizing doorgeven bij stadsloket",paragraph:"U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad, wanneer u van daar met het openbaar vervoer (ov) naar het centrumgebied van Amsterdam reist. Anders betaalt u het duurdere standaard parkeertarief, dat per P+R-locatie verschilt."}],C=[2,3,4],I=["expanded","closed"],v={play:async({canvas:a,userEvent:r})=>{for(const c of C)for(const t of I)for(const{label:h,paragraph:s}of T){const l=a.getByTestId(`${c}-${t}-${h}`),p=a.getByTestId(`${c}-${t}-${s}`),d=l.querySelector(".ams-accordion__button");if(!d)break;t==="expanded"?(await b(p).toBeVisible(),await r.click(d),await b(p).not.toBeVisible()):(await b(p).not.toBeVisible(),await r.click(d),await b(p).toBeVisible())}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"100px"},children:C.map(a=>I.flatMap(r=>e.jsx(n,{headingLevel:a,children:T.map(({label:c,paragraph:t})=>e.jsx(n.Section,{"data-testid":`${a}-${r}-${c}`,expanded:r==="expanded"?!0:void 0,label:c,children:e.jsx(o,{"data-testid":`${a}-${r}-${t}`,children:t})},`${c}-${r}-${a}`))},`${a}-${r}`)))})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Accordion.Section label="Heading level 4">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>,
    headingLevel: 4
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section expanded key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>]
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>],
    sectionAs: 'div'
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    for (const headingLevel of headingLevels) {
      for (const variant of variants) {
        for (const {
          label,
          paragraph
        } of exampleAccordions) {
          const accordionLabel = canvas.getByTestId(\`\${headingLevel}-\${variant}-\${label}\`);
          const accordionParagraph = canvas.getByTestId(\`\${headingLevel}-\${variant}-\${paragraph}\`);
          const accordionButton = accordionLabel.querySelector('.ams-accordion__button');
          if (!accordionButton) break;
          if (variant === 'expanded') {
            await expect(accordionParagraph).toBeVisible();
            await userEvent.click(accordionButton);
            await expect(accordionParagraph).not.toBeVisible();
          } else {
            await expect(accordionParagraph).not.toBeVisible();
            await userEvent.click(accordionButton);
            await expect(accordionParagraph).toBeVisible();
          }
        }
      }
    }
  },
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '100px'
    }}>
        {headingLevels.map(headingLevel => variants.flatMap(variant => <Accordion headingLevel={headingLevel as AccordionProps['headingLevel']} key={\`\${headingLevel}-\${variant}\`}>
              {exampleAccordions.map(({
          label,
          paragraph
        }) => <Accordion.Section data-testid={\`\${headingLevel}-\${variant}-\${label}\`} expanded={variant === 'expanded' ? true : undefined} key={\`\${label}-\${variant}-\${headingLevel}\`} label={label}>
                  <Paragraph data-testid={\`\${headingLevel}-\${variant}-\${paragraph}\`}>{paragraph}</Paragraph>
                </Accordion.Section>)}
            </Accordion>))}
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const F=["Default","Level","ExpandedByDefault","ReduceLandmarks","TestCases"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:g,ExpandedByDefault:m,Level:u,ReduceLandmarks:x,TestCases:v,__namedExportsOrder:F,default:K},Symbol.toStringTag,{value:"Module"}));export{X as A,m as E,u as L,x as R};
