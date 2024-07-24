import{j as e}from"./jsx-runtime-BlAj40OV.js";import{m as $,a as z}from"./layout-B5YJ6HHW.js";import{c as D}from"./clsx-B-dksMZM.js";import{r as I}from"./index-Cs7sjTYM.js";import{A as M}from"./Avatar-CRAAVM1p.js";import{H as P}from"./Heading-DUu-96hO.js";import{L as F}from"./Link-D5rDrOyf.js";const d=I.forwardRef(({align:a,alignVertical:u,as:L="div",children:q,className:C,gap:c,wrap:H,...B},W)=>e.jsx(L,{...B,ref:W,className:D("ams-row",a&&`ams-row--align-${a}`,u&&`ams-row--align-vertical-${u}`,c&&`ams-row--gap-${c}`,H&&"ams-row--wrap",C),children:q}));d.displayName="Row";try{d.displayName="Row",d.__docgenInfo={description:"",displayName:"Row",props:{align:{defaultValue:{value:"start"},description:"The horizontal alignment of the items in the row.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},alignVertical:{defaultValue:{value:"stretch"},description:"The vertical alignment of the items in the row.",name:"alignVertical",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"baseline"'}]}},as:{defaultValue:{value:"div"},description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},gap:{defaultValue:{value:"medium"},description:"The amount of space between items.",name:"gap",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"extra-small"'},{value:'"small"'},{value:'"large"'},{value:'"extra-large"'}]}},wrap:{defaultValue:{value:"false"},description:"Whether items of the row can wrap onto multiple lines.",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const G=[e.jsx("div",{className:"ams-docs-item"},0),e.jsx("div",{className:"ams-docs-item"},1),e.jsx("div",{className:"ams-docs-item"},2)],J={title:"Components/Layout/Row",component:d,args:{children:G,className:"ams-docs-row"},argTypes:{align:{control:{type:"radio",labels:{undefined:"start"}},options:[void 0,...$]},alignVertical:{control:{type:"radio",labels:{undefined:"stretch"}},options:[void 0,...z]},className:{table:{disable:!0}},gap:{control:{type:"radio",labels:{undefined:"medium"}},options:["none","extra-small","small",void 0,"large","extra-large"]}}},r={},l={args:{align:"evenly"},argTypes:{alignVertical:{table:{disable:!0}},as:{table:{disable:!0}},gap:{table:{disable:!0}},wrap:{table:{disable:!0}}}},s={args:{align:"end",alignVertical:"center",children:e.jsx(M,{label:"AB"})},argTypes:{alignVertical:{table:{disable:!0}},as:{table:{disable:!0}},gap:{table:{disable:!0}},wrap:{table:{disable:!0}}}},t={args:{align:"end",dir:"rtl"},argTypes:{alignVertical:{table:{disable:!0}},as:{table:{disable:!0}},dir:{table:{disable:!0}},gap:{table:{disable:!0}},wrap:{table:{disable:!0}}}},n={args:{align:"between",alignVertical:"baseline",children:[e.jsx(P,{level:3,children:"An example heading"}),e.jsx(F,{href:"#",children:"An example link"})],className:void 0,wrap:!0},argTypes:{as:{table:{disable:!0}},gap:{table:{disable:!0}},wrap:{table:{disable:!0}}}},i={args:{alignVertical:"center"},argTypes:{align:{table:{disable:!0}},as:{table:{disable:!0}},gap:{table:{disable:!0}},wrap:{table:{disable:!0}}}},o={args:{children:Array.from(Array(4).keys()).map(a=>e.jsx("span",{className:"ams-docs-item",style:{flexBasis:"16rem"}},a)),wrap:!0},argTypes:{align:{table:{disable:!0}},alignVertical:{table:{disable:!0}},as:{table:{disable:!0}},gap:{table:{disable:!0}}}};var p,m,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,v,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    align: 'evenly'
  },
  argTypes: {
    alignVertical: {
      table: {
        disable: true
      }
    },
    as: {
      table: {
        disable: true
      }
    },
    gap: {
      table: {
        disable: true
      }
    },
    wrap: {
      table: {
        disable: true
      }
    }
  }
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,w,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    align: 'end',
    alignVertical: 'center',
    children: <Avatar label="AB" />
  },
  argTypes: {
    alignVertical: {
      table: {
        disable: true
      }
    },
    as: {
      table: {
        disable: true
      }
    },
    gap: {
      table: {
        disable: true
      }
    },
    wrap: {
      table: {
        disable: true
      }
    }
  }
}`,...(h=(w=s.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var A,x,V;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    align: 'end',
    dir: 'rtl'
  },
  argTypes: {
    alignVertical: {
      table: {
        disable: true
      }
    },
    as: {
      table: {
        disable: true
      }
    },
    dir: {
      table: {
        disable: true
      }
    },
    gap: {
      table: {
        disable: true
      }
    },
    wrap: {
      table: {
        disable: true
      }
    }
  }
}`,...(V=(x=t.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var T,S,_;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    align: 'between',
    alignVertical: 'baseline',
    children: [<Heading level={3}>An example heading</Heading>, <Link href="#">An example link</Link>],
    className: undefined,
    wrap: true
  },
  argTypes: {
    as: {
      table: {
        disable: true
      }
    },
    gap: {
      table: {
        disable: true
      }
    },
    wrap: {
      table: {
        disable: true
      }
    }
  }
}`,...(_=(S=n.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var N,j,R;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    alignVertical: 'center'
  },
  argTypes: {
    align: {
      table: {
        disable: true
      }
    },
    as: {
      table: {
        disable: true
      }
    },
    gap: {
      table: {
        disable: true
      }
    },
    wrap: {
      table: {
        disable: true
      }
    }
  }
}`,...(R=(j=i.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var k,E,O;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: Array.from(Array(4).keys()).map(i => <span className="ams-docs-item" key={i} style={{
      flexBasis: '16rem'
    }} />),
    wrap: true
  },
  argTypes: {
    align: {
      table: {
        disable: true
      }
    },
    alignVertical: {
      table: {
        disable: true
      }
    },
    as: {
      table: {
        disable: true
      }
    },
    gap: {
      table: {
        disable: true
      }
    }
  }
}`,...(O=(E=o.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const K=["Default","Alignment","EndAlignASingleChild","EndAlignASingleChildRtl","AlignOpposingTexts","VerticalAlignment","Wrapping"],re=Object.freeze(Object.defineProperty({__proto__:null,AlignOpposingTexts:n,Alignment:l,Default:r,EndAlignASingleChild:s,EndAlignASingleChildRtl:t,VerticalAlignment:i,Wrapping:o,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{l as A,s as E,re as R,i as V,o as W,t as a,n as b};
