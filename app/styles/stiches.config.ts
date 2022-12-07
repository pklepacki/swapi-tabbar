import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      purple300: '#f0e9fa',
      purple600: '#6922d3',
      gray300: '#ebecf0',
      gray600: '#5e6483',
    },
  },
  media: {
    mobile: '(max-width: 599px)',
    '600': '(min-width: 600px)',
    '900': '(min-width: 900px)',
    '1200': '(min-width: 1200px)',
    '1800': '(min-width: 1800px)',
  },
})
