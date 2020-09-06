import { TConfig } from '@stitches/core';
import { createStyled } from '@stitches/react';

import { tempV2_ThemeConfig } from '../types';
import { tempV2_buildDefaultTheme } from '../theme';

export let tempV2_styled;
export let tempV2_css;

export function tempV2_createStyled(
  config: tempV2_ThemeConfig = {},
  { isStandalone }: { isStandalone?: boolean } = {}
) {
  const themeConfig = isStandalone ? config : tempV2_buildDefaultTheme(config);
  const stitches = createStyled(themeConfig as TConfig);
  tempV2_styled = stitches.styled;
  tempV2_css = stitches.css;
}

tempV2_createStyled();
