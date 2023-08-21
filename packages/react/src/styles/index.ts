import { createStitches, defaultThemeMap } from '@stitches/react'
import * as S from '@devsystem-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  getCssText,
  keyframes,
  createTheme,
  theme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors: S.colors,
    fonts: S.fonts,
    fontSizes: S.fontSizes,
    fontWeights: S.fontWeights,
    lineHeights: S.lineHeights,
    radii: S.radii,
    space: S.space,
  },
})
