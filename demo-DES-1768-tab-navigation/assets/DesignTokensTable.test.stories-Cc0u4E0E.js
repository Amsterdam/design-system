import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{n,t as r}from"./DesignTokensTable-TkXay1Sc.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Components/Docs/Design Tokens Table`},o={ams:{inputs:{"background-color":{$type:`color`,$value:`#ffffff`},color:{$type:`color`,$value:`#000000`},disabled:{color:{$type:`color`,$value:`#999999`}},hover:{color:{$type:`color`,$value:`#0000ff`}}}}},s={render:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{exclude:[`disabled`,`hover`],path:`ams.inputs`,tokens:o}),(0,i.jsx)(r,{path:`ams.inputs.disabled`,tokens:o})]}),tags:[`!dev`,`!autodocs`]},c={render:()=>(0,i.jsx)(r,{showDescriptions:!0,tokens:{interactive:{$description:`All interactive elements in their default state that lack a cursor style.`,$extensions:{"nl.amsterdam.type":`cursor`},$value:`pointer`},plain:{$value:`value`}}}),tags:[`!dev`,`!autodocs`]},l={render:()=>(0,i.jsx)(r,{tokens:{border:{style:{$type:`borderStyle`,$value:`solid`},width:{$type:`borderWidth`,$value:`2px`}},color:{primary:{$type:`color`,$value:`#009de6`},text:{$type:`color`,$value:`currentColor`}},deprecated:{$deprecated:"Use `new-token` instead. Will be removed in release 4.0.0.",$type:`color`,$value:`#ff0000`},extended:{$extensions:{"nl.amsterdam.type":`color`},$value:`#ec0000`},inherited:{$type:`color`,one:{$value:`#bed200`},two:{$value:`#a00078`}},plain:{$value:`value`},space:{$type:`space`,$value:{unit:`rem`,value:1}},subTyped:{$extensions:{"nl.amsterdam.subtype":`borderStyle`},$type:`space`,$value:`dashed`},typography:{family:{$type:`fontFamily`,$value:`arial`},leading:{$type:`lineHeight`,$value:`1.5`},size:{$type:`fontSize`,$value:`1rem`},weight:{$type:`fontWeight`,$value:`700`}}}}),tags:[`!dev`,`!autodocs`]},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
      {/* Shows only top-level tokens, excluding the \`disabled\` and \`hover\` groups */}
      <DesignTokensTable exclude={['disabled', 'hover']} path="ams.inputs" tokens={pathAndExcludeTokens} />
      {/* Shows only the disabled group, with full path prefix */}
      <DesignTokensTable path="ams.inputs.disabled" tokens={pathAndExcludeTokens} />
    </>,
  tags: ['!dev', '!autodocs']
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <DesignTokensTable showDescriptions tokens={{
    interactive: {
      $description: 'All interactive elements in their default state that lack a cursor style.',
      $extensions: {
        'nl.amsterdam.type': 'cursor'
      },
      $value: 'pointer'
    },
    // Token without a description — cell should still render, but empty.
    plain: {
      $value: 'value'
    }
  }} />,
  tags: ['!dev', '!autodocs']
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    // Deprecated token — shows warning icon with tooltip
    deprecated: {
      $deprecated: 'Use \`new-token\` instead. Will be removed in release 4.0.0.',
      $type: 'color',
      $value: '#ff0000'
    },
    // Type resolved via $extensions (lowest precedence)
    extended: {
      $extensions: {
        'nl.amsterdam.type': 'color'
      },
      $value: '#ec0000'
    },
    // Group-level $type inherited by descendants
    inherited: {
      $type: 'color',
      one: {
        $value: '#bed200'
      },
      two: {
        $value: '#a00078'
      }
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
}`,...l.parameters?.docs?.source}}},u=[`PathAndExclude`,`Descriptions`,`Test`]}))();export{c as Descriptions,s as PathAndExclude,l as Test,u as __namedExportsOrder,a as default};