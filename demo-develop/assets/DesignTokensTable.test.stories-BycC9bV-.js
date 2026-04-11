import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{n,t as r}from"./DesignTokensTable-Cj703vcl.js";var i,a,o,s;e((()=>{n(),i=t(),a={title:`Components/Docs/Design Tokens Table`},o={render:()=>(0,i.jsx)(r,{tokens:{border:{style:{$type:`borderStyle`,$value:`solid`},width:{$type:`borderWidth`,$value:`2px`}},color:{primary:{$type:`color`,$value:`#009de6`},text:{$type:`color`,$value:`currentColor`}},extended:{$extensions:{"nl.amsterdam.type":`color`},$value:`#ec0000`},plain:{$value:`value`},space:{$type:`space`,$value:{unit:`rem`,value:1}},subTyped:{$extensions:{"nl.amsterdam.subtype":`borderStyle`},$type:`space`,$value:`dashed`},typography:{family:{$type:`fontFamily`,$value:`arial`},leading:{$type:`lineHeight`,$value:`1.5`},size:{$type:`fontSize`,$value:`1rem`},weight:{$type:`fontWeight`,$value:`700`}}}}),tags:[`!dev`,`!autodocs`]},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <DesignTokensTable tokens={{
    // Nested group
    border: {
      style: {
        $type: 'borderStyle',
        $value: 'solid'
      },
      width: {
        $type: 'borderWidth',
        $value: '2px'
      }
    },
    // Nested group
    color: {
      primary: {
        $type: 'color',
        $value: '#009de6'
      },
      // currentColor is explicitly excluded from rendering a colour swatch
      text: {
        $type: 'color',
        $value: 'currentColor'
      }
    },
    // Type resolved via $extensions (lowest precedence)
    extended: {
      $extensions: {
        'nl.amsterdam.type': 'color'
      },
      $value: '#ec0000'
    },
    // No type — renders no sample
    plain: {
      $value: 'value'
    },
    // Composite $value (normalised to e.g. "1rem")
    space: {
      $type: 'space',
      $value: {
        unit: 'rem',
        value: 1
      }
    },
    // $extensions subtype overrides $type
    subTyped: {
      $extensions: {
        'nl.amsterdam.subtype': 'borderStyle'
      },
      $type: 'space',
      $value: 'dashed'
    },
    typography: {
      family: {
        $type: 'fontFamily',
        $value: 'arial'
      },
      leading: {
        $type: 'lineHeight',
        $value: '1.5'
      },
      size: {
        $type: 'fontSize',
        $value: '1rem'
      },
      weight: {
        $type: 'fontWeight',
        $value: '700'
      }
    }
  }} />,
  tags: ['!dev', '!autodocs']
}`,...o.parameters?.docs?.source}}},s=[`Test`]}))();export{o as Test,s as __namedExportsOrder,a as default};