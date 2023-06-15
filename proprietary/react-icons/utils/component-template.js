const template = ({ componentName, jsx, exports }, { tpl }) => {
  return tpl`
    import type { SVGProps } from "react";
    import clsx from 'clsx';

    export interface IconProps extends SVGProps<SVGSVGElement> {
      size?: 'level-3' | 'level-4' | 'level-5' | 'level-6' | 'level-7'
    }

    const ${componentName} = (props: IconProps) => {
      const classNameObj = clsx(
        'amsterdam-icon',
        props.size === 'level-3' && 'amsterdam-icon-size-3',
        props.size === 'level-4' && 'amsterdam-icon-size-4',
        props.size === 'level-5' && 'amsterdam-icon-size-5',
        props.size === 'level-6' && 'amsterdam-icon-size-6',
        props.size === 'level-7' && 'amsterdam-icon-size-7',
        props.className
      )

      return (
        ${jsx}
      )
    };

    ${exports};
  `
}

module.exports = template
