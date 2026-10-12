/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export type PaletteColor = {
  readonly cmyk: string
  readonly hex: string
  /** The tints have no name. */
  readonly name?: string
  readonly oklch: string
  readonly rgb: string
}

export type ColourGroupId = 'blue' | 'green' | 'red' | 'yellow'

export type ColourGroup = {
  readonly name: string
  /** From the centre outwards: lightest tint, two light tints, four main colours, two dark tints, darkest tint. Each ring runs clockwise. */
  readonly rings: readonly [
    readonly PaletteColor[],
    readonly PaletteColor[],
    readonly PaletteColor[],
    readonly PaletteColor[],
    readonly PaletteColor[],
  ]
}

/** From light to dark. */
export const neutralColours: readonly PaletteColor[] = [
  { cmyk: '0/0/0/0', hex: '#ffffff', name: 'White', oklch: '100% 0 0', rgb: '255/255/255' },
  { cmyk: '0/0/0/11', hex: '#e8e8e8', name: 'Platinum', oklch: '93.1% 0 0', rgb: '232/232/232' },
  { cmyk: '0/0/0/33', hex: '#bebebe', name: 'Silver', oklch: '80.2% 0 0', rgb: '190/190/190' },
  { cmyk: '0/0/0/66', hex: '#767676', name: 'Steel', oklch: '56.6% 0 0', rgb: '118/118/118' },
  { cmyk: '0/0/0/100', hex: '#202020', name: 'Black', oklch: '24.4% 0 0', rgb: '32/32/32' },
]

export const colourGroups: Record<ColourGroupId, ColourGroup> = {
  blue: {
    name: 'Blue',
    rings: [
      [{ cmyk: '10/5/0/0', hex: '#d4dff1', oklch: '90.1% 0.027 260.3', rgb: '212/223/241' }],
      [
        { cmyk: '50/40/0/0', hex: '#7e83bd', oklch: '62.9% 0.087 279.8', rgb: '126/131/189' },
        { cmyk: '50/5/0/0', hex: '#66b8e4', oklch: '74.8% 0.102 233.9', rgb: '102/184/228' },
      ],
      [
        { cmyk: '75/90/0/0', hex: '#502389', name: 'Indigo', oklch: '38% 0.159 298.6', rgb: '80/35/137' },
        { cmyk: '100/80/0/0', hex: '#004699', name: 'Blue', oklch: '41.1% 0.149 257.6', rgb: '0/70/153' },
        { cmyk: '100/40/0/0', hex: '#0072c9', name: 'Denim', oklch: '54.7% 0.159 251.1', rgb: '0/114/201' },
        { cmyk: '100/0/0/0', hex: '#009de6', name: 'Cyan', oklch: '66.4% 0.152 240', rgb: '0/157/230' },
      ],
      [
        { cmyk: '90/90/0/10', hex: '#222e7d', oklch: '34.5% 0.134 271', rgb: '34/46/125' },
        { cmyk: '90/30/0/30', hex: '#105d96', oklch: '46.5% 0.115 247.3', rgb: '16/93/150' },
      ],
      [{ cmyk: '100/100/0/50', hex: '#163565', oklch: '33.4% 0.092 259', rgb: '22/53/101' }],
    ],
  },
  green: {
    name: 'Green',
    rings: [
      [{ cmyk: '10/0/10/0', hex: '#dff0db', oklch: '93.7% 0.033 139.7', rgb: '223/240/219' }],
      [
        { cmyk: '50/0/30/0', hex: '#66baa3', oklch: '72.9% 0.089 173.9', rgb: '102/186/163' },
        { cmyk: '30/0/60/0', hex: '#bcd964', oklch: '84% 0.147 121.2', rgb: '188/217/100' },
      ],
      [
        { cmyk: '95/0/50/0', hex: '#039795', name: 'Teal', oklch: '61.2% 0.104 193.1', rgb: '3/151/149' },
        { cmyk: '90/0/100/0', hex: '#00893c', name: 'Green', oklch: '55% 0.153 149.6', rgb: '0/137/60' },
        { cmyk: '65/0/100/0', hex: '#5fae1e', name: 'Apple', oklch: '67.4% 0.186 135.1', rgb: '95/174/30' },
        { cmyk: '40/0/100/0', hex: '#bed200', name: 'Lime', oklch: '82% 0.188 116.5', rgb: '190/210/0' },
      ],
      [
        { cmyk: '100/0/70/20', hex: '#007857', oklch: '50.8% 0.106 165.8', rgb: '0/120/87' },
        { cmyk: '60/0/100/20', hex: '#78a20d', oklch: '65.7% 0.164 126.1', rgb: '120/162/13' },
      ],
      [{ cmyk: '70/0/90/60', hex: '#346227', oklch: '44.8% 0.103 139.2', rgb: '52/98/39' }],
    ],
  },
  red: {
    name: 'Red',
    rings: [
      [{ cmyk: '5/10/5/0', hex: '#f3ccd8', oklch: '88.2% 0.046 357.6', rgb: '243/204/216' }],
      [
        { cmyk: '0/70/25/0', hex: '#ee668d', oklch: '68.8% 0.171 4.8', rgb: '238/102/141' },
        { cmyk: '25/60/0/0', hex: '#cb66b1', oklch: '65.3% 0.156 338', rgb: '203/102/177' },
      ],
      [
        { cmyk: '0/100/100/0', hex: '#ec0000', name: 'Red', oklch: '59.2% 0.243 29.2', rgb: '236/0/0' },
        { cmyk: '0/100/0/0', hex: '#e50082', name: 'Magenta', oklch: '60% 0.245 357.1', rgb: '229/0/130' },
        { cmyk: '25/100/0/0', hex: '#c3007d', name: 'Raspberry', oklch: '53.7% 0.223 351.2', rgb: '195/0/125' },
        { cmyk: '50/100/0/0', hex: '#a00078', name: 'Purple', oklch: '47.2% 0.202 343.2', rgb: '160/0/120' },
      ],
      [
        { cmyk: '0/100/50/10', hex: '#c50038', oklch: '52.2% 0.209 18.1', rgb: '197/0/56' },
        { cmyk: '40/100/0/10', hex: '#980068', oklch: '45% 0.19 347.6', rgb: '152/0/104' },
      ],
      [{ cmyk: '20/100/50/50', hex: '#6c0021', oklch: '33.8% 0.135 14.1', rgb: '108/0/33' }],
    ],
  },
  yellow: {
    name: 'Yellow',
    rings: [
      [{ cmyk: '0/5/10/0', hex: '#feeacf', oklch: '94.6% 0.042 75.4', rgb: '254/234/207' }],
      [
        { cmyk: '0/7/60/0', hex: '#ffe366', oklch: '91.6% 0.146 96.7', rgb: '255/227/102' },
        { cmyk: '0/35/50/0', hex: '#fca66e', oklch: '79.9% 0.125 53.1', rgb: '252/166/110' },
      ],
      [
        { cmyk: '0/5/100/0', hex: '#ffe600', name: 'Yellow', oklch: '91.7% 0.192 101.4', rgb: '255/230/0' },
        { cmyk: '0/30/100/0', hex: '#ffbc00', name: 'Amber', oklch: '83.5% 0.172 82.6', rgb: '255/188/0' },
        { cmyk: '0/50/100/0', hex: '#ff9100', name: 'Orange', oklch: '75.9% 0.177 60.6', rgb: '255/145/0' },
        { cmyk: '0/75/100/0', hex: '#f64900', name: 'Tangelo', oklch: '64.9% 0.218 36.8', rgb: '246/73/0' },
      ],
      [
        { cmyk: '0/10/100/30', hex: '#d9b200', oklch: '77.6% 0.159 92.9', rgb: '217/178/0' },
        { cmyk: '0/70/100/10', hex: '#dd6304', oklch: '64.1% 0.174 47.7', rgb: '221/99/4' },
      ],
      [{ cmyk: '0/50/100/60', hex: '#8a5300', oklch: '49.4% 0.109 66.9', rgb: '138/83/0' }],
    ],
  },
}
