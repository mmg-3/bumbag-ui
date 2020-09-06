import { TConfig } from '@stitches/core';

export default (overrides: TConfig['tokens']['fonts']) => ({
  default:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  heading:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  mono: "'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace",
  ...overrides,
});
