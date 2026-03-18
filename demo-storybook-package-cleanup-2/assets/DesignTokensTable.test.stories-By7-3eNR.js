import{j as t}from"./iframe-f38HJA1X.js";import{D as o}from"./DesignTokensTable-DylOLIen.js";import"./preload-helper-PPVm8Dsz.js";import"./BorderSample-DpBSs9ki.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-PzFGIbYn.js";import"./ColorSample-DpAaE9x4.js";import"./SpaceSample-CFtuxDFy.js";import"./TypographySample-pXimhOhF.js";const u={title:"Components/Docs/Design Tokens Table"},e={render:()=>t.jsx(o,{tokens:{border:{style:{$type:"borderStyle",$value:"solid"},width:{$type:"borderWidth",$value:"2px"}},color:{primary:{$type:"color",$value:"#009de6"},text:{$type:"color",$value:"currentColor"}},extended:{$extensions:{"nl.amsterdam.type":"color"},$value:"#ec0000"},plain:{$value:"value"},space:{$type:"space",$value:{unit:"rem",value:1}},subTyped:{$extensions:{"nl.amsterdam.subtype":"borderStyle"},$type:"space",$value:"dashed"},typography:{family:{$type:"fontFamily",$value:"arial"},leading:{$type:"lineHeight",$value:"1.5"},size:{$type:"fontSize",$value:"1rem"},weight:{$type:"fontWeight",$value:"700"}}}}),tags:["!dev","!autodocs"]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const y=["Test"];export{e as Test,y as __namedExportsOrder,u as default};
