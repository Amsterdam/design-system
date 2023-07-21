import{j as e}from"./jsx-runtime-ffb262ed.js";import{P as b}from"./Paragraph-b0c16e54.js";import{I as D}from"./Icon-65b888a8.js";import{c as f}from"./clsx-1229b3e0.js";import{r as i}from"./index-76fb7be0.js";import{e as P}from"./index.esm-63fc0a45.js";import{g as N}from"./Heading-de553b97.js";const I={headingLevel:1,section:!0},L=i.createContext(I),J=L,y=i.forwardRef(({label:c,expanded:m=!1,children:d,className:h,..._},p)=>{const{headingLevel:n,section:x}=i.useContext(J),[o,a]=i.useState(m),u=N(n),s=i.useId(),l=`button-${s}`,w=`panel-${s}`;return e.jsxs("div",{className:f("amsterdam-accordion__section",h),ref:p,..._,children:[e.jsx(u,{className:"amsterdam-accordion__header",children:e.jsxs("button",{"aria-controls":w,"aria-expanded":o,className:"amsterdam-accordion__button",id:l,onClick:()=>a(!o),type:"button",children:[c,e.jsx(D,{svg:P,size:"level-5"})]})}),x?e.jsx("section",{id:w,"aria-labelledby":l,className:f("amsterdam-accordion__panel",{"amsterdam-accordion__panel--expanded":o}),children:d}):e.jsx("div",{id:w,"aria-labelledby":l,className:f("amsterdam-accordion__panel",{"amsterdam-accordion__panel--expanded":o}),children:d})]})});y.displayName="AccordionSection";try{y.displayName="AccordionSection",y.__docgenInfo={description:"",displayName:"AccordionSection",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},expanded:{defaultValue:{value:"false"},description:"",name:"expanded",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const r={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowRight:"ArrowRight",ArrowLeft:"ArrowLeft",Home:"Home",End:"End"},j=(c,m=!1,d=!1)=>{const h=d?r.ArrowRight:r.ArrowDown,_=d?r.ArrowLeft:r.ArrowUp;return{keyDown:n=>{if(c.current){const x=c.current,{activeElement:o}=window.document,a=Array.from(x.querySelectorAll(".amsterdam-accordion__button")),u=l=>l&&a.includes(l)?a.indexOf(l):0;let s;switch(n.key){case h:{u(o)!==a.length-1?(s=a[u(o)+1],o&&!a.includes(o)&&(s=a[0])):m&&(s=a[0]);break}case _:{u(o)!==0?s=a[u(o)-1]:m&&(s=a[a.length-1]);break}case r.Home:{s=a[0];break}case r.End:{s=a[a.length-1];break}}(n.key===r.ArrowDown||n.key===r.ArrowUp||n.key===r.ArrowLeft||n.key===r.ArrowRight||n.key===r.Home||n.key===r.End)&&s instanceof HTMLElement&&(s.focus(),n.preventDefault())}}}},T=j;try{j.displayName="useFocusWithArrows",j.__docgenInfo={description:"Focus on children with arrow keys and home / end buttons.",displayName:"useFocusWithArrows",props:{}}}catch{}const t=i.forwardRef(({children:c,className:m,headingLevel:d,section:h=!0},_)=>{const p=i.useRef(null);i.useImperativeHandle(_,()=>p.current);const{keyDown:n}=T(p,!0);return e.jsx(J.Provider,{value:{headingLevel:d,section:h},children:e.jsx("div",{className:f("amsterdam-accordion",m),onKeyDown:n,ref:p,children:c})})});t.displayName="Accordion";t.Section=y;t.Section.displayName="Accordion.Section";try{t.displayName="Accordion",t.__docgenInfo={description:"",displayName:"Accordion",props:{headingLevel:{defaultValue:null,description:"",name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},section:{defaultValue:null,description:"",name:"section",required:!1,type:{name:"boolean"}}}}}catch{}const R={title:"CSS Components/Accordion",component:t,args:{headingLevel:1},argTypes:{children:{table:{disable:!0}},headingLevel:{control:{type:"select"},options:[1,2,3,4]},section:{control:{type:"boolean"}}}},g={args:{children:[e.jsx(t.Section,{label:"Eerste sectie",children:e.jsx(b,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},1),e.jsx(t.Section,{label:"Tweede sectie",children:e.jsx(b,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},2),e.jsx(t.Section,{label:"Derde sectie",children:e.jsx(b,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},3)]},parameters:{docs:{source:{lang:"html",code:`<div class="amsterdam-accordion" role="button" tabindex="-1">
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rf:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rf:" type="button">
        Eerste sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rf:" aria-labelledby="button-:rf:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rg:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rg:" type="button">
        Tweede sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rg:" aria-labelledby="button-:rg:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rh:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rh:" type="button">
        Derde sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rh:" aria-labelledby="button-:rh:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
</div>`}}}},v={args:{children:[e.jsx(t.Section,{label:"Eerste sectie",children:e.jsx(b,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},1),e.jsx(t.Section,{label:"Tweede sectie",expanded:!0,children:e.jsx(b,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},2),e.jsx(t.Section,{label:"Derde sectie",children:e.jsx(b,{children:"Jouw typograaf biedt mij zulke exquise schreven!"})},3)]},parameters:{docs:{source:{lang:"html",code:`<div class="amsterdam-accordion" role="button" tabindex="-1">
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rf:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rf:" type="button">
        Eerste sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rf:" aria-labelledby="button-:rf:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rg:" aria-expanded="true" class="amsterdam-accordion__button" id="button-:rg:" type="button">
        Tweede sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rg:" aria-labelledby="button-:rg:" class="amsterdam-accordion__panel amsterdam-accordion__panel--expanded">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rh:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rh:" type="button">
        Derde sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rh:" aria-labelledby="button-:rh:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
</div>`}}}};var A,k,z;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>]
  },
  parameters: {
    docs: {
      source: {
        lang: 'html',
        code: \`<div class="amsterdam-accordion" role="button" tabindex="-1">
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rf:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rf:" type="button">
        Eerste sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rf:" aria-labelledby="button-:rf:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rg:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rg:" type="button">
        Tweede sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rg:" aria-labelledby="button-:rg:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rh:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rh:" type="button">
        Derde sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rh:" aria-labelledby="button-:rh:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
</div>\`
      }
    }
  }
}`,...(z=(k=g.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var S,q,E;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: [<Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>, <Accordion.Section key={2} label="Tweede sectie" expanded>
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>, <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>]
  },
  parameters: {
    docs: {
      source: {
        lang: 'html',
        code: \`<div class="amsterdam-accordion" role="button" tabindex="-1">
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rf:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rf:" type="button">
        Eerste sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rf:" aria-labelledby="button-:rf:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rg:" aria-expanded="true" class="amsterdam-accordion__button" id="button-:rg:" type="button">
        Tweede sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rg:" aria-labelledby="button-:rg:" class="amsterdam-accordion__panel amsterdam-accordion__panel--expanded">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rh:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rh:" type="button">
        Derde sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rh:" aria-labelledby="button-:rh:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
</div>\`
      }
    }
  }
}`,...(E=(q=v.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const C=["Default","ExpandedByDefault"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:g,ExpandedByDefault:v,__namedExportsOrder:C,default:R},Symbol.toStringTag,{value:"Module"}));export{K as A,v as E};
//# sourceMappingURL=Accordion.stories-5a4233e1.js.map
