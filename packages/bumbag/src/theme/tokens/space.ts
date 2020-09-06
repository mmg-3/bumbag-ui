import { TConfig } from '@stitches/core';

import { generateSpaceScale } from '../../utils';

const majorScale = generateSpaceScale({ prefix: 'major', length: 40, unitPx: 8 });
const minorScale = generateSpaceScale({ prefix: 'minor', length: 40, unitPx: 8 });

export default (overrides: TConfig['tokens']['space']) => ({
  ...majorScale,
  ...minorScale,
  xs: majorScale['major-1'],
  sm: majorScale['major-2'],
  md: majorScale['major-4'],
  lg: majorScale['major-6'],
  xl: majorScale['major-8'],
  '2xl': majorScale['major-12'],
  '3xl': majorScale['major-16'],
  '4xl': majorScale['major-20'],
  '5xl': majorScale['major-24'],
  '6xl': majorScale['major-28'],
  ...overrides,
});
