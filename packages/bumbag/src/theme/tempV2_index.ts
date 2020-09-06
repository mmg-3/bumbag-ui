import { TConfig } from '@stitches/core';

import colors from './tokens/colors';
import fonts from './tokens/fonts';
import space from './tokens/space';

export function tempV2_buildDefaultTheme(config: TConfig = {}) {
  return {
    prefix: 'default',
    tokens: {
      colors: colors(config.tokens?.colors || {}),
      fonts: fonts(config.tokens?.fonts || {}),
      space: space(config.tokens?.space || {}),
    },
  };
}
