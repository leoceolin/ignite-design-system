import {
  colors,
  space,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
} from '@ignite-leonel-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

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
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    space,
    radii,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
  },
})
