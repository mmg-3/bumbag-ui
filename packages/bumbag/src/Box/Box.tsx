import * as React from 'react';
import { Box as ReakitBox, BoxProps as ReakitBoxProps } from 'reakit';
import { TCssWithBreakpoints } from '@stitches/react';

import { ThemeConfig, CSSProperties } from '../types';
import {
  useStyle,
  useClassName,
  omitCSSProps,
  pickHTMLProps,
  mergeRefs,
  createComponent,
  createElement,
  createHook,
  tempV2_useClassName,
  pickCSSProps,
} from '../utils';

import * as styles from './styles';

type ComponentType<R> = React.ComponentType<R> & { useProps: any };

export type LocalBoxProps = {
  use?: string | ComponentType<any>;
  css?: TCssWithBreakpoints<any>;
  className?: string;
  children?: React.ReactNode | ((props: BoxProps) => React.ReactNode);
  alignX?: 'left' | 'center' | 'right';
  alignY?: 'top' | 'center' | 'bottom';
  altitude?: string;
  variant?: string;
  colorMode?: string;
  disabled?: boolean;
  /* Component-level theme overrides [Read more](/theming/#component-theming) */
  overrides?: ThemeConfig;
  elementRef?: React.Ref<any>;
  themeKey?: string;
};
export type BoxProps = ReakitBoxProps & CSSProperties & LocalBoxProps;

const useProps = createHook<BoxProps>(
  (_props, { themeKey }) => {
    let props = _props;
    const { use } = props;

    if (use && typeof use !== 'string' && use.useProps) {
      const newProps = use.useProps({ ...props, use: undefined });
      props = { ...props, ...newProps };
    }

    // Convert CSS props to an object.
    // Example input:
    // props = { color: 'red', backgroundColor: 'blue', isEnabled: true }
    //
    // Example output:
    // style = { color: 'red', backgroundColor: 'blue' }
    // const style = useStyle(props, { disableCSSProps });

    // // Append the styles from above as a className on the DOM element (with precedence).
    // let className = useClassName({
    //   style: styles.style,
    //   styleProps: { ...props, style },
    //   themeKey,
    //   prevClassName: props.className,
    // });

    // // Append the Box styles as a className on the DOM element.
    // className = useClassName({
    //   style: styles.Box,
    //   styleProps: props,
    //   prevClassName: className,
    //   themeKey,
    // });

    const className = tempV2_useClassName({
      prevClassName: props.className,
      themeKey,
    });

    const cssProps = pickCSSProps(props);
    const htmlProps: any = omitCSSProps(pickHTMLProps({ ...props, className }));

    if (props.elementRef) {
      htmlProps.ref = mergeRefs(props.elementRef, props.ref);
    }

    if (props.wrapElement) {
      htmlProps.wrapElement = props.wrapElement;
    }

    htmlProps.css = {
      ...cssProps,
      ...props.css,
    };

    return { ...htmlProps };
  },
  { themeKey: 'Box' }
);

export const Box = createComponent<BoxProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.tempV2_Box,
      use: props.use,
      htmlProps,
    });
  },
  {
    attach: { displayName: 'Box', useProps },
    themeKey: 'Box',
  }
);
