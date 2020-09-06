import * as React from 'react';
// import { render } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
// @ts-ignore
import { Provider } from '../../Provider';
import { ThemeConfig } from '../../types';

export default (
  Component: any,
  { colorMode = 'default', theme = {} }: { colorMode?: string; theme?: ThemeConfig } = {}
) =>
  renderer.create(
    <Provider theme={theme} colorMode={colorMode}>
      {Component}
    </Provider>
  );
